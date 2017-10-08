/* routes for manipulating entries */
import requireLogin from '../middlewares/requireLogin';
import mongoose from 'mongoose';
import Entry from '../models/Entry';

export default function(server) {
  server.get('/api/entry', (req, res) => {
    Entry.findById(req.query.id).exec((err, result) => {
      if (err) {
        console.log(err);
        res.send({ error: 'Something went wrong' });
      } else {
        res.send(result);
      }
    });
  });

  server.get('/api/entry/list', (req, res) => {
    let query = {};
    if (req.query.authorID) {
      query._authorID = req.query.authorID;
    }

    Entry.find(query)
      .limit(10)
      .sort('-createdAt')
      .exec((err, result) => {
        if (err) {
          res.send({ error: 'Something went wrong' });
        } else {
          res.send({ result });
        }
      });
  });

  server.post('/api/entry', requireLogin, (req, res) => {
    const { title, body } = req.body;

    let entry = new Entry({
      _authorID: req.user.id,
      title,
      body,
    });

    entry.save(err => {
      if (err) res.status(422).send({ error: err });
      else res.send({ entry });
    });
  });

  server.patch('/api/entry', requireLogin, (req, res) => {
    let update = {
      title: req.body.title,
      body: req.body.body,
    };

    Entry.findByIdAndUpdate(req.body.id, update, { new: true }, (err, entry) => {
      if (entry) {
        res.status(200).send({ entry });
      } else {
        res.status(404).send({ message: 'Entry was not found' });
      }
    });
  });

  server.delete('/api/entry', requireLogin, (req, res) => {
    Entry.findByIdAndRemove(req.body.id, (err, entry) => {
      if (entry) {
        let response = {
          message: 'Entry successfully deleted',
          id: entry._id,
        };
        res.status(200).send(response);
      } else {
        res.status(404).send({ message: 'Entry was not found' });
      }
    });
  });
}
