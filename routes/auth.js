const passport = require("passport");
const User = require("../models/User.js");

module.exports = server => {
  server.post("/api/register", function(req, res, next) {
    User.register(
      new User({
        username: req.body.username,
        url: req.body.url,
        email: req.body.email
      }),
      req.body.password,
      function(err) {
        if (err) {
          console.log("error while user register!", err);
          return next(err.message);
        }
        passport.authenticate("local")(req, res, function() {
          res.send({ message: "welcome!" });
        });
      }
    );
  });

  server.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.redirect("/main");
  });

  server.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  server.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
