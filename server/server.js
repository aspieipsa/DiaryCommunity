const express = require("express"),
  server = express(),
  path = require("path"),
  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/diary");

// Serve static assets
//server.use(express.static(path.resolve(__dirname, "..", "public")));

//Routes
let dbDevOpsRoutes = require("./routes/dbDevOps.js");

server.use("/dbDevOps", dbDevOpsRoutes);

server.get("/test", (req, res) => {
  res.send("Mao");
});

//The server needs to listen to requests...
server.listen(27016, "127.0.0.1", function() {
  console.log("DiaryCommunity server running");
});
