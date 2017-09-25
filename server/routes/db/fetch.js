let express = require("express"),
  router = express.Router(),
  _ = require("lodash"),
  User = require("../../models/User"),
  Entry = require("../../models/Entry"),
  Comment = require("../../models/Comment");

//Finds a given user.
router.get("/users/:userURL", (request, response) => {
  User.findOne({ customURL: request.params.userURL }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      response.send(user);
    }
  });
});

//Find all entries of a given user.
router.get("/entries/:userURL", (request, response) => {
  User.findOne(
    { customURL: request.params.userURL },
    { entryIDs: 1 },
    (err, data) => {
      //Get the actual entries.
      Entry.find({ _id: { $in: data.entryIDs } }, (err, entries) => {
        if (err) {
          console.log(err);
        } else {
          response.send(entries);
        }
      });
    }
  );
});

//Find the specified entry of a given user, plus all its comments.
router.get("/singleEntry/:userURL/:entryID", (request, response) => {
  User.findOne(
    { customURL: request.params.userURL },
    { name: 1, entryIDs: 1 },
    (err, result) => {
      //If the given entry doesn't belong to the user, return an error.
      if (result.entryIDs.indexOf(request.params.entryID) < 0)
        response.send(["No such entry"]);

      Entry.findById(request.params.entryID, (err, result) => {
        let data = result._doc;

        Comment.find({ _id: { $in: data.commentIDs } }, (err, comments) => {
          data.comments = comments;
          response.send(data);
        });
      });
    }
  );
});

module.exports = router;
