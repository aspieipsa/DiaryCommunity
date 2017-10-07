const passport = require("passport");
const User = require("../models/User.js");

module.exports = server => {
  server.post("/api/register", function(req, res, next) {
    // TODO: validate

    User.register(
      new User({
        username: req.body.username,
        uri: req.body.uri,
        email: req.body.email
      }),
      req.body.password,
      function(err) {
        if (err) {
          console.log("error while user register!", err);
          return next(err.message);
        }
        passport.authenticate("local")(req, res, function() {
          res.status(200).send({ status: "ok" });
        });
      }
    );
  });

  // passport will return 401 if login fails
  server.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.status(200).send({ status: "ok" });
  });

  server.get("/api/logout", (req, res) => {
    req.logout();
    res.status(200).send({ status: "ok" });
  });

  server.get("/api/current_user", (req, res) => {
    res.status(200).send(req.user);
  });
};
