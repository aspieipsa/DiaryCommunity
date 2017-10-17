/* routes for manipulating entries */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
let Entry = mongoose.model('Entry');
let Identity = mongoose.model('Identity');

export default function(server) {
  //POST /api/entries/:uri - add a post to the person diary
  server.post(
    '/api/entries/:uri',
    requireLogin,
    // 1) get the diary for that uri
    // 2) create an entry record
    // 3) add the entry to the diary
    async (req, res) => {
      const { title, body } = req.body;
      const { uri } = req.params;

      // this is where the post is saved (does not have to be current identity - case of posting to community)
      let identity = await Identity.findOne({ uri }).select('diary');

      let entry = new Entry({
        author: req.user.identities[0]._id,
        title,
        body,
      });

      entry.save(err => {
        if (err) res.status(422).send(err);

        identity.diary.entries.push(entry);
        identity.save(err => {
          if (err) {
            entry.remove();
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

  // GET /api/entry/:id - get an entry with comments
  server.get('/api/entry/:id', (req, res, next) => {
    Entry.findById(req.params.id)
      .populate({
        path: 'comments',
        select: 'author body createdAt',
        options: { limit: 5 },
        sort: 'createdAt',
        populate: { path: 'author', select: 'name uri signature' },
      })
      .exec((err, entry) => {
        if (err) {
          next(err);
        } else {
          res.json({ entry });
        }
      });
  });

  // PATCH /api/entry/:id - update entry
  server.patch('/api/entry/:id', requireLogin, (req, res) => {
    let update = {
      title: req.body.title,
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
