var mongoose = require("mongoose");
var User = mongoose.model("User");

exports.getUserList = function(req, res) {
  console.log("GET USER LIST");
  User.find({}, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.createUser = function(req, res) {
  console.log("CREATE USER");
  console.log("req.body", req.body);
  var user = new User(req.body);
  user.save(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.getUser = function(req, res) {
  console.log("GET USER");
  User.findById(req.params.name, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.updateUser = function(req, res) {
  console.log("UPDATE USER");
  User.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true },
    function(err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.deleteUser = function(req, res) {
  console.log("DELETE USER");
  User.remove(
    {
      name: req.params.name
    },
    function(err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully deleted" });
    }
  );
};
