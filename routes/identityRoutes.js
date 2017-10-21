import mongoose from 'mongoose';
import requireLogin from '../middlewares/requireLogin';
import Constants from '../config/constants';
let Identity = mongoose.model('Identity');
let Entry = mongoose.model('Entry');

export default function(server) {
  // GET /api/identities/:uri - get identity data
  server.get('/api/identities/:uri', (req, res) => {
    Identity.findOne({ uri: req.params.uri })
      .populate('favorites', 'uri name')
      .populate('readers', 'uri name')
      .exec((err, identity) => {
        if (err) res.send({ error: 'Something went wrong' });
        res.send({ identity });
      });
  });

  // GET /api/identities - get list of all identities (with search/filter params)
  server.get('/api/identities', (req, res) => {
    // TODO: search and filter params, now returns all
    Identity.find({})
      .select('uri name diary createdAt diary.title')
      .exec((err, identities) => {
        if (err) res.send(err);
        res.send({ identities });
      });
  });

  // check if user identity exists (for form requests)
  server.get('/api/identity/exists', (req, res) => {
    let query;
    if (req.query.uri) {
      query = { uri: req.query.uri };
    } else if (req.query.name) {
      query = { name: req.query.name };
    } else if (req.query.id) {
      query = { _id: req.query.id };
    }

    if (query) {
      Identity.count(query, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ result: result > 0 });
        }
      });
    } else {
      res.send({ error: 'Invalid params' });
    }
  });

  // FOLLOWING

  // POST /api/identity/:id/favorites - follow
  server.post('/api/identity/:id/favorites', requireLogin, async (req, res) => {
    try {
      // find the current
      let currentIdentity = await Identity.findById(req.user.current._id);

      // check if already follows
      let index = currentIdentity.favorites.find(u => u.toString() === req.params.id);
      if (index) {
        req.next('Already following');
      }
      // find the one to follow
      let other = await Identity.findById(req.params.id);

      await currentIdentity.update({ $push: { favorites: req.params.id } });
      await other.update({ $push: { readers: req.user.current._id } });

      res.send({ status: 'successfully added to favorites' });
    } catch (err) {
      req.next(err);
    }
  });

  // DELETE /api/identity/:id/favorites - unfollow
  server.delete('/api/identity/:id/favorites', requireLogin, async (req, res) => {
    // find the current
    let currentIdentity = await Identity.findById(req.user.current._id);

    // check if already follows
    let index = currentIdentity.favorites.find(u => u.toString() === req.params.id);
    if (!index) {
      req.next('Not following');
    }

    // find the one to follow
    let other = await Identity.findById(req.params.id);

    await currentIdentity.update({ $pull: { favorites: req.params.id } });
    await other.update({ $pull: { readers: req.user.current._id } });

    res.send({ status: 'successfully removed from favorites' });
  });

  // GET /api/identity/:id/favorites - get feed from the diaries this identity follows
  server.get('/api/identity/:id/favorites', async (req, res) => {
    let favs = await Identity.findById(req.params.id).select('favorites');
    const limit = parseInt(req.query.limit) || Constants.ENTRIES_PER_PAGE;
    const skip = parseInt(req.query.skip) || 0;

    let entries = await Entry.find({ d_id: { $in: favs.favorites } })
      .skip(skip)
      .limit(limit);

    res.json({ entries });
  });
}
