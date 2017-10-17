import passport from 'passport';
import mongoose from 'mongoose';
let User = mongoose.model('User');
let Identity = mongoose.model('Identity');

export default function(server) {
  server.post('/api/register', function(req, res, next) {
    // TODO: validate

    // check that user does not exist
    User.count({ email: req.body.email }, (err, c) => {
      if (err) {
        return next(err);
      }
      if (c > 0) return next({ error: 'user email already registered' });
    });

    // create an identity first
    Identity.create(
      {
        uri: req.body.uri,
        name: req.body.name,
      },
      function(err, identity) {
        if (err) return next(err);
        // register (only after the identity is created, so we get the id)

        User.register(
          new User({
            email: req.body.email,
            identities: [identity.id],
          }),
          req.body.password,
          err => {
            if (err) {
              Identity.remove({ id: identity.id });
              return next(err);
            }
            passport.authenticate('local')(req, res, function() {
              res.status(200).send();
            });
          }
        );
      }
    );
  });

  // passport will return 401 if login fails
  server.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send();
  });

  server.get('/api/logout', (req, res) => {
    req.logout();
    res.status(200).send();
  });

  server.get('/api/current_user', (req, res) => {
    res.status(200).json(req.user);
  });
}
