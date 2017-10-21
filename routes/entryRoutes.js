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
      let diaryIdentity = await Identity.findOne({ uri }).select('_id');
      let currentIdentity = req.user.identities.find(a => a._id.toString() === req.user.currentID.toString());

      if (!diaryIdentity || !currentIdentity) req.next('Not found!');

      if (diaryIdentity.identityCanAddEntries(req.user.currentID)) {
        let entry = new Entry({
          d_uri: uri,
          d_id: diaryIdentity._id,
          author: {
            authorID: req.user.currentID,
            name: currentIdentity.name,
            uri: req.user.currentUri,
          },
          title,
          body,
        });

        entry.save(err => {
          if (err) res.status(422).send(err);
          else res.json({ entry });
        });
      } else {
        res.status(403).send({ error: 'Not allowed to post here' });
      }
    }
  );

  // GET /api/entries/:uri - get entry list for this diary
  server.get('/api/entries/:uri', (req, res) => {
    Entry.find({ d_uri: req.params.uri })
      .select('-comments')
      .limit(5)
      .sort('-createdAt')
      .exec((err, entries) => {
        if (err) {
          res.send(err);
        } else {
          res.json({ entries });
        }
      });
  });

  // GET /api/entry/:id - get an entry with comments
  server.get('/api/entry/:id', (req, res, next) => {
    Entry.findById(req.params.id).exec((err, entry) => {
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

    Entry.findById(req.params.id, (err, entry) => {
      if (err) res.status(423).send(err);
      else if (entry) {
        if (entry.identityCanEditEntries(req.user.currentID)) {
          entry.title = req.body.title;
          entry.body = req.body.body;
          entry.save((err, updated) => {
            console.log('ERROR', err);
            if (err) res.status(422).send(err);
            res.status(200).json({ entry: updated });
          });
        }
      } else {
        res.status(404).json({ message: 'Entry was not found' });
      }
    });
  });

  // DELETE /api/entry/:id - delete entry
  server.delete('/api/entry/:id', requireLogin, async (req, res) => {
    Entry.findById(req.params.id, (err, entry) => {
      if (err) res.status(423).send(err);
      else if (entry) {
        if (entry.identityCanEditEntries(req.user.currentID)) {
          entry.remove(err => {
            console.log(err);
            if (err) res.status(422).send(err);
            res.status(200).json({ message: 'Entry with comments successfully deleted' });
          });
        }
      } else {
        res.status(404).json({ message: 'Entry was not found' });
      }
    });
  });
}
