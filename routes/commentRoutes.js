/* routes for manipulating entries */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
let Entry = mongoose.model('Entry');
let Identity = mongoose.model('Identity');

// TODO: fix after model refactoring

export default function(server) {
  // POST /api/entry/:eid/comments - add a comment
  server.post('/api/entry/:eid/comments', requireLogin, async (req, res) => {
    const { body } = req.body;
    const { eid } = req.params;

    let comment = {
      author: {
        authorID: req.user.current.id,
        name: req.user.current.name,
        uri: req.user.current.uri,
      },
      body,
    };

    Entry.findByIdAndUpdate(eid, { $push: { comments: comment }, $inc: { c_count: 1 } }, { new: true }, (err, entry) => {
      if (err) res.next(err);
      res.json({ comment });
    });
  });

  // TODO

  // PATCH /api/entry/:eid/comment/:id - update comment
  server.patch('/api/entry/:eid/comment/:id', requireLogin, (req, res) => {
    // TODO: check you can do this
    Entry.find({ _id: req.params.eid, 'comments._id': req.params.id }, { 'comments.$': 1 })
      .select('d_uri')
      .then(entry => {
        console.log(entry.comments);
        res.json({ entry });
      });
    /*
    Entry.findOneAndUpdate({ _id: req.params.id }, update, { new: true }, (err, entry) => {
      if (err) res.status(422).send(err);
      if (entry) {
        res.status(200).json({ entry });
      } else {
        res.status(404).json({ message: 'Entry was not found' });
      }
    });*/
  });

  // DELETE /api/entry/:eid/comment/:id - delete comment
  server.delete('/api/entry/:eid/comment/:id', requireLogin, async (req, res) => {
    Entry.findById(req.params.eid, (err, entry) => {
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
