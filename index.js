import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import keys from './config/keys';
import { Strategy as LocalStrategy } from 'passport-local';
const PORT = process.env.PORT || 27016;

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

import User from './models/User.js';
import Entry from './models/Entry.js';

import AuthRoutes from './routes/auth.js';
import UserRoutes from './routes/user.js';
import EntryRoutes from './routes/entry.js';

mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI);

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    keys: keys.cookieKeys,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })
);
server.use(passport.initialize());
server.use(passport.session());

//Routes
AuthRoutes(server);
UserRoutes(server);
EntryRoutes(server);

//require("./routes/db/fetch.js");

// Register routes - another way
//server.use("/", require("./routes"));

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//The server needs to listen to requests...
server.listen(PORT, '127.0.0.1', function() {
  console.log(`DiaryCommunity server running at port ${PORT}`);
});
