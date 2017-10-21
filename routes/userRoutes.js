/* routes for manipulating users */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
let User = mongoose.model('User');
let Identity = mongoose.model('Identity');

export default function(server) {
  // GET /api/user/identity - get current user identity
  server.get('/api/user/identity', requireLogin, (req, res) => {
    if (!req.user.identities) req.next({ error: 'Invalid params' });

    Identity.findById(req.user.currentId).exec((err, identity) => {
      if (err) req.next({ error: 'Something went wrong' });
      res.send({ identity });
    });
  });

  // POST /api/user/identity - change current identity
  server.post('/api/user/identity', requireLogin, (req, res) => {
    res.send({ error: 'the endpoint is not yet functional' });
  });

  // PATCH /api/user/identity - update current identity data
  server.patch('/api/user/identity', requireLogin, (req, res) => {
    if (req.body.new_name) {
      Identity.findOneAndUpdate({ _id: req.user.currentId }, { name: req.body.new_name }, { new: true, upsert: true }, (err, identity) => {
        if (err) req.next(err);
        res.json({ identity });
      });
    }
    if (req.body.new_uri) {
      Identity.findById(req.user.currentId, 'uri', (err, identity) => {
        if (identity.uri[identity.uri.length - 1] === req.body.new_uri) res.json({ error: 'same stuff as current' });
        else {
          Identity.findOneAndUpdate({ _id: req.user.currentId }, { $push: { uri: req.body.new_uri } }, { new: true }, (err, identity) => {
            if (err) res.next(err);
            res.json({ identity });
          });
        }
      });
    } else {
      res.json({ error: 'invalid params' });
    }
  });

  // POST /api/user/identities - add a new identity
  server.post('/api/user/identities', requireLogin, (req, res) => {
    res.send({ error: 'the endpoint is not yet functional' });
  });

  // GET /api/user/identities - get all identities for the current user
  server.get('/api/user/identities', requireLogin, (req, res) => {
    User.findById(req.user._id, '_id identities')
      .populate('identities')
      .exec((err, user) => {
        if (err) res.send({ error: 'Something went wrong' });
        res.send({ identities: user.identities });
      });
  });

  // is this email registered
  // return true or false
  server.get('/api/user/exists', (req, res) => {
    if (req.query.email) {
      User.count({ email: req.query.email }, (err, result) => {
        if (err) res.send({ error: 'Something went wrong' });
        res.send({ result: result > 0 });
      });
    } else {
      res.send({ error: 'Invalid params' });
    }
  });

  // change password (in the future also email)
  server.patch('/api/user', (req, res, next) => {
    User.findById(req.user._id)
      .then(user => {
        if (!user) {
          return res.sendStatus(404);
        }
        user.setPassword(req.body.password, () => {
          res.sendStatus(200);
        });
      })
      .catch(next);
  });
}
