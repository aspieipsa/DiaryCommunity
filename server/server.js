const express = require("express"),
  server = express(),
  path = require("path");

// Serve static assets
//server.use(express.static(path.resolve(__dirname, "..", "public")));

server.get("/test", (req, res) => {
  res.send("Mao");
});

//The server needs to listen to requests...
server.listen(27016, "127.0.0.1", function() {
  console.log("DiaryCommunity server running");
});
