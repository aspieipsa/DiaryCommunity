const passport = require("passport"),
  User = require("../models/User.js");
validateUser = require("./userValidation.js");

module.exports = server => {
  server.post("/api/register", function(req, res, next) {
    let userIsValidated = validateUser(req.body);
    if (userIsValidated === true) {
      console.log("Validated");
      /*User.register(
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
            res.redirect("/");
          });
        }
      ); */
    } else {
      console.log(userIsValidated);
    }
  });

  server.post("/api/login", passport.authenticate("local"), (req, res) => {
    //console.log(req);
    res.redirect("/");
  });

  server.get("/api/logout", (req, res) => {
    req.logout();
    //res.send();
    res.redirect("/");
  });

  server.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
