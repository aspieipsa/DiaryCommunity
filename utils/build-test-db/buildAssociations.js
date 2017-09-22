var db = connect("localhost:27017/diary");

//Get all existing users.
var users = db.users.find({}, { _id: 1, entries: 1, comments: 1 }).toArray();

//Get all existing entries.
var entries = db.entries
  .find({}, { _id: 1, authorID: 1, comments: 1 })
  .toArray();

//Get all existing comments.
var comments = db.comments
  .find({}, { _id: 1, authorID: 1, entryID: 1 })
  .toArray();

//Select a random number of favorites for each user.
print("\n Associating user favorites...");
users.forEach(function(user, userIndex) {
  //Make a new user array that doesn't contain user.
  var userPool = users.slice();
  userPool.splice(userIndex, 1);

  //Pick a random number to be the number of favorites, between zero and the number of remaining users.
  var favoriteLimit = Math.floor(Math.random() * (userPool.length + 1));

  var favorites = [];

  for (var i = 0; i < favoriteLimit; i++) {
    var randomIndex = Math.floor(Math.random() * userPool.length);
    favorites.push(userPool.splice(randomIndex, 1)[0]._id);
  }
  db.users.update({ _id: user._id }, { $set: { favorites: favorites } });
});
print(" Done.");

//Associate the same number of entries to each user, and add the associated entries to the user's entry array.
print("\n Associating users with their authors and vice-versa...");
entries.forEach(function(entry, entryIndex) {
  // Determine the user to be associated with this entry.
  var userIndex = Math.floor(entryIndex / users.length);
  var user = users[userIndex];

  //Set user as the author of entry.
  db.entries.update({ _id: entry._id }, { $set: { authorID: user._id } });

  //Add entry to the entry array of user.
  var userEntries = user.entries;
  userEntries.push(entry._id);
  db.users.update({ _id: user._id }, { $set: { entries: userEntries } });
});
print(" Done.");

//Associate each comment to a random user; also, associate the same number of comments to each entry.
print(
  "\n Associating comments with their entries and authors, and vice-versa..."
);
comments.forEach(function(comment, commentIndex) {
  //Pick a random user to be the author of the comment.
  var randomAuthor = users[Math.floor(Math.random() * users.length)];

  //Determine the entry to be associated with this comment.
  var entryIndex = Math.floor(commentIndex / 3);
  var entry = entries[entryIndex];

  //Set entry as the parent entry of comment, and set randomAuthor as the comment's author.
  db.comments.update(
    { _id: comment._id },
    { $set: { entryID: entry._id, authorID: randomAuthor._id } }
  );

  //Add comment to randomAuthor's comment array.
  var randomAuthorComments = randomAuthor.comments;
  randomAuthorComments.push(comment._id);
  db.users.update(
    { _id: randomAuthor._id },
    { $set: { comments: randomAuthorComments } }
  );

  //Add comment to entry's comment array.
  var entryComments = entry.comments;
  entryComments.push(comment._id);
  db.entries.update({ _id: entry._id }, { $set: { comments: entryComments } });
});
print(" Done.");
