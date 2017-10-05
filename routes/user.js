/* routes for manipulating users */
const User = require("../models/User.js");

module.exports = server => {
  //Get user's favorites
  server.get("/api/user/favorites/:customURL", (req, res) => {
    User.find({ customURL: req.params.customURL }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ favoriteIDs: result[0].favoriteIDs });
      }
    });
  });

  //Get user by searchField
  server.get("/api/user/:searchField/:searchValue", (req, res) => {
    User.find(
      { [req.params.searchField]: req.params.searchValue },
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          res.send(user);
        }
      }
    );
  });
};

/*

/api/user PUT - update existing user

/api/user DELETE - delete existing user

maybe: 

/api/user/list GET - get user list by params
/api/user/favorite GET - get list of user favorite diaries(users)

/api/user/favorite POST - add a user to fav list
/api/user/favorite DELETE - delete a user from fav list

*/
