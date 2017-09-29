const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  keys = require("./config/keys"),
  PORT = process.env.PORT || 27016;

require("./services/passport.js");
mongoose.connect("mongodb://localhost/diary");

const server = express();

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(bodyParser.json());

server.use(cookieSession({ keys: keys.cookieKeys }));
server.use(passport.initialize());
server.use(passport.session());

//Routes
require("./routes/auth.js")(server, passport);
require("./routes/db/fetch.js");

//The server needs to listen to requests...
server.listen(PORT, "127.0.0.1", function() {
  console.log(`DiaryCommunity server running at port ${PORT}`);
});
