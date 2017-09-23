module.exports = function(app) {
  var User = require("../methods/user");
  console.log("routes!");
  // User Routes
  app
    .route("/users")
    .get(User.getUserList)
    .post(User.createUser);

  app
    .route("/users/:name")
    .get(User.getUser)
    .put(User.updateUser)
    .delete(User.deleteUser);
};
