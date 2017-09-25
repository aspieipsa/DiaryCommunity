const faker = require("faker"),
  JSONfile = require("jsonfile"),
  userFile = "./users.json",
  entryFile = "./entries.json",
  commentFile = "./comments.json",
  userLimit = 10,
  entryLimit = 10 * userLimit,
  commentLimit = 3 * entryLimit;

//Creates a user using fake data.
function createUser() {
  let name = faker.name.firstName(),
    customURL = name.toLowerCase(),
    email = `${customURL}@${faker.internet.domainName()}`,
    info = faker.lorem.paragraphs(),
    entryIDs = [],
    commentIDs = [],
    favoriteIDs = [],
    user = {
      name,
      customURL,
      email,
      info,
      entryIDs,
      commentIDs,
      favoriteIDs
    };

  return user;
}

//Creates a diary entry using fake data.
function createEntry() {
  let title = faker.lorem.sentence(),
    body = faker.lorem.paragraphs(),
    commentIDs = [],
    entry = {
      authorID: null,
      author: "",
      title,
      body,
      commentIDs
    };

  return entry;
}

//Creates a fictitious comment using fake data.
function createComment() {
  return {
    entryID: null,
    authorID: null,
    author: "",
    body: faker.lorem.sentence()
  };
}

function createUsersJSON() {
  console.log("Creating " + userLimit + " users...\n");
  for (let i = 0; i < userLimit; i++) {
    JSONfile.writeFileSync(userFile, createUser(), { spaces: 2, flag: "a" });
  }
  console.log("Users created.\n");
}

function createEntriesJSON() {
  console.log("Creating " + entryLimit + " entries...\n");
  for (let i = 0; i < entryLimit; i++) {
    JSONfile.writeFileSync(entryFile, createEntry(), { spaces: 2, flag: "a" });
  }
  console.log("Entries created.\n");
}

function createCommentsJSON() {
  console.log("Creating " + commentLimit + " comments...\n");
  for (let i = 0; i < commentLimit; i++) {
    JSONfile.writeFileSync(commentFile, createComment(), {
      spaces: 2,
      flag: "a"
    });
  }
  console.log("Entries created.\n");
}

createUsersJSON();
createEntriesJSON();
createCommentsJSON();

process.exit();
