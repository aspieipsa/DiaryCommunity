const JSONfile = require("jsonfile"),
  request = require("request"),
  faker = require("faker"),
  userFile = "./users.json",
  entryFile = "./entries.json",
  URLs = {
    userURL: "http://localhost:27016/dbDevOps/userIDs"
  },
  IDs = {
    authorIDs: null,
    entryIDs: null,
    commentIDs: null
  };

//Retrieves all nefcessary IDs from the database and assigns them to the corresponding properties of the IDs object.
function initialiseIDs() {
  for (let key in URLs) {
    request(URLs[key], function(error, response, body) {
      setIDs(key, body);
    });
  }

  function setIDs(key, data) {
    IDs[key] = data;
    console.log(IDs[key]);
  }
}

initialiseIDs();

//Creates a user using fake data.
function createUser() {
  let name = faker.name.firstName(),
    customURL = name.toLowerCase(),
    email = `${customURL}@${faker.internet.domainName()}`,
    info = faker.lorem.paragraphs(),
    favorites = [],
    user = {
      name,
      customURL,
      email,
      info,
      favorites
    };

  return user;
}

//Creates a diary entry using fake data.
function createEntry(authorID) {
  let title = faker.lorem.sentence(),
    body = faker.lorem.paragraphs(),
    comments = createComments(),
    entry = {
      authorID,
      title,
      body,
      comments
    };

  return entry;
}

//Creates the desired number of fictitious comments.
function createComments() {
  let commentLimit = 4,
    comments = [];

  for (let i = 1; i < commentLimit; i++) {
    comments.push(createComment());
  }

  return comments;
}

//Creates a fictitious comment using fake data.
function createComment() {
  let randomAuthorID =
    IDs.authorIDs[Math.floor(Math.random() * IDs.authorIDs.length)];

  return {
    // _id: ObjectId(),
    authorID: randomAuthorID,
    body: faker.lorem.sentence()
  };
}

//Creates the desired number of fictitious users into a JSON file.
function createUsersJSON() {
  let userLimit = 11;
  for (let i = 1; i < userLimit; i++) {
    JSONfile.writeFileSync(userFile, createUser(), { spaces: 2, flag: "a" });
  }
}

//Creates the desired number of fictitious entries into a JSON file for each of the given authorIDs.
function createEntries() {
  let entryLimit = 11;

  IDs.authorIDs.forEach(authorID => {
    for (let i = 1; i < entryLimit; i++) {
      JSONfile.writeFileSync(entryFile, createEntry(authorID), {
        spaces: 2,
        flag: "a"
      });
    }
  });
}

//createUsersJSON();
//createEntries();
