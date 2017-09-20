let express = require("express"),
  router = express.Router(),
  User = require("../models/User.js"),
  _ = require("lodash");

//Get all user IDs.
router.get("/userIDs", function(req, res) {
  User.find({}, { _id: 1 }, function(err, results) {
    if (err) {
      res.send(err);
    } else {
      res.send(_.map(results, "_id"));
    }
  });
});

module.exports = router;
