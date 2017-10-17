/* routes for manipulating entries */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
let Entry = mongoose.model('Entry');
let Identity = mongoose.model('Identity');
let Comment = mongoose.model('Comment');

export default function(server) {
  // POST /api/entry/:id/comments - add a comment
  server.post(
    '/api/entry/:eid/comments',
    requireLogin,
    // 1) get the diary for that uri
    // 2) create an entry record
    // 3) add the entry to the diary
    async (req, res) => {
      const { body } = req.body;
      const { eid, id } = req.params;

      let entry = await Entry.findById(eid).select('comments');

      let comment = new Comment({
        author: req.user.identities[0]._id,
        body,
      });

      comment.save(err => {
        if (err) res.status(422).send(err);

        entry.comments.push(comment);
        entry.save(async err => {
          if (err) {
            comment.remove();
            res.status(422).send(err);
          }
          res.json({ entry });
        });
      });
    }
  );

  // GET /api/entries/:uri - get entry list for this diary
  server.get('/api/entries/:uri', (req, res) => {
    Identity.findOne({ uri: req.params.uri })
      .select('diary')
      .populate({
        path: 'diary.entries',
        select: 'title body createdAt comments author',
        populate: { path: 'author', select: 'uri name' },
        options: { limit: 5 },
        sort: '-createdAt',
      })
      .limit(5)
      .sort('-createdAt')
      .exec((err, result) => {
        if (err) {
          res.json({ error: 'Something went wrong' });
        } else {
          console.log(result);
          let entries = result.diary.entries.map(e => ({
            _id: e.id,
            title: e.title,
            body: e.body,
            createdAt: e.createdAt,
            author: e.author,
            comments: e.comments.length,
          }));
          res.json({ entries });
        }
      });
  });

  // PATCH /api/entry/:eid/comment/:id - update comment
  server.patch('/api/entry/:eid/comment/:id', requireLogin, (req, res) => {
    let update = {
      body: req.body.body,
    };

    Entry.findOneAndUpdate({ _id: req.params.id }, update, { new: true }, (err, entry) => {
      if (err) res.status(422).send(err);
      if (entry) {
        res.status(200).json({ entry });
      } else {
        res.status(404).json({ message: 'Entry was not found' });
      }
    });
  });

  // DELETE /api/entry/:id - delete entry
  server.delete('/api/entry/:id', requireLogin, async (req, res) => {
    Entry.findOneAndRemove({ _id: req.params.id }, (err, entry) => {
      if (entry) {
        let response = {
          message: 'Entry with comments successfully deleted',
          id: entry._id,
        };
        res.status(200).send(response);
      } else {
        res.status(404).send({ message: 'Entry was not found' });
      }
    });
  });
}
