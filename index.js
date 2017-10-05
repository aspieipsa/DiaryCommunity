const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");
const PORT = process.env.PORT || 27016;
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    keys: keys.cookieKeys,
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
);
server.use(passport.initialize());
server.use(passport.session());

//Routes

//Auth
require("./routes/auth.js")(server);
//User manipulation
require("./routes/user.js")(server);

//require("./routes/db/fetch.js");

// Register routes - another way
//server.use("/", require("./routes"));

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//The server needs to listen to requests...
server.listen(PORT, "127.0.0.1", function() {
  console.log(`DiaryCommunity server running at port ${PORT}`);
});
