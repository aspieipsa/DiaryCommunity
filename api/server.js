const express = require("express"),
  server = express(),
  //path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

var User = require("./models/User");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/diary", {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected!");
  //

  var kittySchema = mongoose.Schema({
    name: String
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function() {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  var Kitten = mongoose.model("Kitten", kittySchema);

  var silence = new Kitten({ name: "Silence" });
  silence.save();
  console.log(silence.name); // 'Silence'
  silence.speak();

  var fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"

  Kitten.find(function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  });
});

server.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
server.use(bodyParser.json()); // to support JSON-encoded bodies

server.get("/test", (req, res) => {
  res.send("Mao");
});

// message for an unknown route
server.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

//The server needs to listen to requests...
server.listen(27016, "127.0.0.1", function() {
  console.log("DiaryCommunity server running on localhost:27016");
});
