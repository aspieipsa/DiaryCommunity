db = connect("localhost:27017/diary");
print("\n" + wipeCollections());

//remove all documents from all collections.
function wipeCollections() {
  return (
    "Wipe users: " +
    db.users.remove({}) +
    "\n" +
    "Wipe entries: " +
    db.entries.remove({}) +
    "\n" +
    "Wipe comments: " +
    db.comments.remove({})
  );
}
