const express = require("express"),
  server = express(),
  path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

//Databse routes
const dbFetch = require("./routes/db/fetch.js");

server.use("/dbfetch/", dbFetch);

mongoose.connect("mongodb://localhost/diary");

server.use(bodyParser.json()); // to support JSON-encoded bodies
server.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

// Serve static assets
//server.use(express.static(path.resolve(__dirname, "..", "public")));

//The server needs to listen to requests...
server.listen(27016, "127.0.0.1", function() {
  console.log("DiaryCommunity server running");
});
