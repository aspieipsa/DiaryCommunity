import mongoose from 'mongoose';
let Identity = mongoose.model('Identity');

export default function(server) {
  // GET /api/identities/:uri - get identity data
  server.get('/api/identities/:uri', (req, res) => {
    Identity.findOne({ uri: req.params.uri }).exec((err, identity) => {
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
        if (err) res.send({ error: 'Something went wrong' });
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
      query = { id: req.query.id };
    }

    if (query) {
      Identity.count(query, (err, result) => {
        if (err) {
          console.log(err);
          res.send({ error: 'Something went wrong' });
        } else {
          res.send({ result: result > 0 });
        }
      });
    } else {
      res.send({ error: 'Invalid params' });
    }
  });
}
