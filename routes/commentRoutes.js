/* routes for manipulating entries */
import requireLogin from '../middlewares/requireLogin';
import Constants from '../config/constants';
import mongoose from 'mongoose';
let Entry = mongoose.model('Entry');
let Identity = mongoose.model('Identity');

// TODO: fix after model refactoring

export default function(server) {
  server.get('/api/entry/:eid/comments', (req, res) => {
    const limit = parseInt(req.query.limit) || Constants.COMMENTS_PER_PAGE;
    const skip = parseInt(req.query.skip) || 0;

    Entry.findById(req.params.eid)
      .select({ comments: { $slice: [skip, limit] } })
      .exec((err, entry) => {
        if (err) req.next(err);
        res.json({ comments: entry.comments });
      });
  });

  // POST /api/entry/:eid/comments - add a comment
  server.post('/api/entry/:eid/comments', requireLogin, async (req, res) => {
    const { body } = req.body;
    const { eid } = req.params;

    let comment = {
      author: {
        authorID: req.user.current._id,
        name: req.user.current.name,
        uri: req.user.current.uri,
      },
      body,
    };

    Entry.findByIdAndUpdate(eid, { $push: { comments: comment }, $inc: { c_count: 1 } }, { new: true }, (err, entry) => {
      if (err) req.next(err);
      res.json({ comment });
    });
  });

  // TODO

  // PATCH /api/entry/:eid/comment/:id - update comment
  server.patch('/api/entry/:eid/comment/:id', requireLogin, (req, res) => {
    // THIS IS A FUCKING MESS
    // first, it finds the entry with this one comment
    // then it calls the checks for permissions
    // then it needs to find the entry and comment again and update it
    Entry.findOne({ _id: req.params.eid, 'comments._id': req.params.id }, { 'comments.$': 1 }) // this crazy thing gets only one comment from the subdoc array of comments
      .select('d_id')
      .exec((err, entry) => {
        if (err) req.next(err);
        let error = entry.comments[0].canEdit(req.user.current._id, entry.d_id);
        if (!error) {
          Entry.findOneAndUpdate(
            { _id: req.params.eid, 'comments._id': req.params.id },
            { $set: { 'comments.$.body': req.body.body } }
          ).exec((err, entry) => {
            if (err) req.next(err);
            res.json({ status: 'ok' }); // can't return the comment easily...
          });
        } else {
          res.status(403).json({ error });
        }
      });
  });

  // DELETE /api/entry/:eid/comment/:id - delete comment
  server.delete('/api/entry/:eid/comment/:id', requireLogin, async (req, res) => {
    Entry.findOne({ _id: req.params.eid, 'comments._id': req.params.id }, { 'comments.$': 1 }) // this crazy thing gets only one comment from the subdoc array of comments
      .select('d_id')
      .exec((err, entry) => {
        if (err) req.next(err);
        let error = entry.comments[0].canDelete(req.user.current._id, entry.d_id);
        if (!error) {
          Entry.findOneAndUpdate(
            { _id: req.params.eid },
            {
              $pull: { comments: { _id: req.params.id } },
              $inc: { c_count: -1 },
            },
            (err, numAffected) => {
              if (err) req.next(err);
              res.json({ status: 'ok' });
            }
          );
        } else {
          res.status(403).json({ error });
        }
      });
  });
}
