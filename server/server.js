const express = require("express"),
  server = express(),
  path = require("path"),
  mongoose = require("mongoose"),
  User = require("./models/User"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  localStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  expressSession = require("express-session");

mongoose.connect("mongodb://localhost/diary");

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//Auth
server.use(
  expressSession({
    secret: "This is pretty damn weird.",
    resave: false,
    saveUninitialized: false
  })
);

server.use(passport.initialize());
server.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Auth register
server.post("/register", function(request, response) {
  User.register(
    new User({ username: request.body.username }),
    request.body.password,
    function(err, user) {
      if (err) {
        response.send(err);
      } else {
        passport.authenticate("local")(request, response, function() {
          response.send(true);
        });
      }
    }
  );
});

// Auth login
server.post("/login", function(request, response) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return console.log(err);
    }
    if (!user) {
      return response.send(false);
    }
    request.logIn(user, function(err) {
      if (err) {
        return console.log(err);
      }
      isLoggedIn(request, response);
      return response.send(true);
    });
  })(request, response);
});

//Auth logout
server.get("/logout", function(request, response) {
  request.logout();
  response.send(true);
});

//Auth isLoggedIn
function isLoggedIn(request, response) {
  if (request.isAuthenticated()) {
    return console.log("authenticated");
  } else {
    return console.log("not authenticated");
  }
}

//Database routes
const dbFetch = require("./routes/db/fetch.js");

server.use("/dbfetch/", dbFetch);

server.use(bodyParser.json()); // to support JSON-encoded bodies

// Serve static assets
//server.use(express.static(path.resolve(__dirname, "..", "public")));

//The server needs to listen to requests...
server.listen(27016, "127.0.0.1", function() {
  console.log("DiaryCommunity server running");
});
