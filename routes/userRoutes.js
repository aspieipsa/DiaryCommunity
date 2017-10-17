/* routes for manipulating users */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
let User = mongoose.model('User');
let Identity = mongoose.model('Identity');

export default function(server) {
  // GET /api/user/identity - get current user identity
  server.get('/api/user/identity', requireLogin, (req, res) => {
    if (!req.user.identities) res.send({ error: 'Invalid params' });

    Identity.findById(req.user.identities[0].id).exec((err, identity) => {
      if (err) res.send({ error: 'Something went wrong' });
      res.send({ identity });
    });
  });

  // POST /api/user/identity - change current identity
  server.post('/api/user/identity', requireLogin, (req, res) => {
    res.send({ error: 'the endpoint is not yet functional' });
  });

  // PATCH /api/user/identity - update current identity data
  server.patch('/api/user/identity', requireLogin, (req, res) => {
    let update = {};
    if (req.body.new_name) {
      update.name = req.body.new_name;
    }
    if (req.body.new_uri) {
      update.uri = req.body.new_uri;
    }
    // TODO generalize for all available settings, move outside of here
    Identity.findOneAndUpdate({ id: req.user.identities[0].id }, { update }).exec((err, identity) => {
      if (err) res.send({ error: 'Something went wrong' });
      res.send({ identity });
    });
  });

  // POST /api/user/identities - add a new person
  server.post('/api/user/identities', requireLogin, (req, res) => {
    res.send({ error: 'the endpoint is not yet functional' });
  });

  // GET /api/user/identities - get all persons for the current user
  server.get('/api/user/identities', requireLogin, (req, res) => {
    User.findById(req.user.id, 'id identities')
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
    User.findById(req.user.id)
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

  /*
  server.get('/api/user/list', (req, res) => {
    User.find({})
      .limit(10)
      .sort('-username')
      .exec((err, result) => {
        if (err) {
          res.send({ error: 'Something went wrong' });
        } else {
          res.send({ result });
        }
      });
  });

  server.patch('/api/user', requireLogin, (req, res) => {
    let update = {};
    if (req.body.new_en) {
      update.username = req.body.new_username;
    }
    if (req.body.new_uri) {
      update.uri = req.body.new_uri;
    }
    if (req.body.new_email) {
      update.email = req.body.new_email;
    }

    User.findOneAndUpdate({ uri: req.body.uri }, update, (err, user) => {
      if (user) {
        let response = {
          message: 'User successfully updated',
          id: user._id,
        };
        res.status(200).send(response);
      } else {
        let response = {
          message: 'User was not found',
        };
        res.status(404).send(response);
      }
    });
  });

  server.delete('/api/user', requireLogin, (req, res) => {
    User.findOneAndRemove({ uri: req.body.uri }, (err, user) => {
      if (user) {
        let response = {
          message: 'User successfully deleted',
          id: user._id,
        };
        res.status(200).send(response);
      } else {
        let response = {
          message: 'User was not found',
        };
        res.status(404).send(response);
      }
    });
  });*/
}
