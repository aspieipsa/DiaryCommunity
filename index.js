import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import errorhandler from 'errorhandler';
import keys from './config/keys';
import path from 'path';
const isProduction = process.env.NODE_ENV === 'production';

import User from './models/User.js';
import Identity from './models/Identity.js';
import Entry from './models/Entry.js';

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//server.use(express.static(__dirname + '/public'));

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

server.use(
  cookieSession({
    keys: keys.cookieKeys,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  })
);
server.use(passport.initialize());
server.use(passport.session());

mongoose.Promise = Promise;
if (isProduction) {
  mongoose.connect(process.env.MONGO_URI);
} else {
  mongoose.connect(process.env.MONGO_URI || keys.mongoURI);
  mongoose.set('debug', true);
}

// Routes
import AuthRoutes from './routes/authRoutes';
import UserRoutes from './routes/userRoutes';
import IdentityRoutes from './routes/identityRoutes';
import EntryRoutes from './routes/entryRoutes';
import CommentRoutes from './routes/commentRoutes';
AuthRoutes(server);
UserRoutes(server);
IdentityRoutes(server);
EntryRoutes(server);
CommentRoutes(server);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// redirect to client
if (isProduction) {
  server.use(express.static('client/build'));
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  server.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const PORT = process.env.PORT || 27016;
server.listen(PORT);
