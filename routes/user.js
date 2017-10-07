/* routes for manipulating users */
const User = require("../models/User.js");

module.exports = server => {
  server.get("/api/user/exists", (req, res) => {
    let query;
    if (req.query.uri) {
      query = { uri: req.query.uri };
    } else if (req.query.username) {
      query = { username: req.query.username };
    } else if (req.query.id) {
      query = { id: req.query.id };
    }

    if (query) {
      User.count(query, (err, result) => {
        if (err) {
          console.log(err);
          res.send({ error: "Something went wrong" });
        } else {
          res.send({ result: result > 0 });
        }
      });
    } else {
      res.send({ error: "Invalid params" });
    }
  });

  server.get("/api/user", (req, res) => {
    User.findOne({ uri: req.query.uri }).exec((err, result) => {
      if (err) {
        console.log(err);
        res.send({ error: "Something went wrong" });
      } else {
        res.send(result);
      }
    });
  });

  server.get("/api/user/list", (req, res) => {
    User.findAll({})
      .limit(10)
      .sort("-username")
      .exec((err, result) => {
        if (err) {
          console.log(err);
          res.send({ error: "Something went wrong" });
        } else {
          res.send({ result: result > 0 });
        }
      });
  });

  server.patch("/api/user", (req, res) => {
    let update = {};
    if (req.body.new_username) {
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
          message: "User successfully updated",
          id: user._id
        };
        res.status(200).send(response);
      } else {
        let response = {
          message: "User was not found"
        };
        res.status(404).send(response);
      }
    });
  });

  server.delete("/api/user", (req, res) => {
    console.log(req.body);
    User.findOneAndRemove({ uri: req.body.uri }, (err, user) => {
      if (user) {
        let response = {
          message: "User successfully deleted",
          id: user._id
        };
        res.status(200).send(response);
      } else {
        let response = {
          message: "User was not found"
        };
        res.status(404).send(response);
      }
    });
  });
};
