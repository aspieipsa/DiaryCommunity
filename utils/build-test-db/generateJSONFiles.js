const faker = require("faker"),
  JSONfile = require("jsonfile"),
  userFile = "./users.json",
  entryFile = "./entries.json",
  commentFile = "./comments.json",
  userLimit = 10,
  entryLimit = 10 * userLimit,
  commentLimit = 3 * entryLimit;

//Creates a user using fake data. Each user's password is pwd.
function createUser() {
  let username = faker.name.firstName(),
    uri = username.toLowerCase(),
    email = `${uri}@${faker.internet.domainName()}`,
    info = faker.lorem.paragraphs(),
    entryIDs = [],
    commentIDs = [],
    favoriteIDs = [],
    user = {
      username,
      salt: "5bce79d6c564cac41b624fb03db06ec739bf4062d8f5cc23a1c14db9e1cc4ddd",
      hash:
        "9b60fddac7f02ec88851ec86d2c0b9a637b622cf2f8b4404e3c8392a066145541db0b4f25ca3e7c8271724b01330b48c846536d8c3bb21e62d87e28a00f697977d08a68aa1646da3e0c1f048e23ba72f465cec256c26e2f564c3e4ccf3e21eed906b8609c4e5c300223a2248756158a5c9521ebf8591d54413f6e7d59859ed7c0a3f4542c29c3316f41cf677f3e9e96cf524cd10512ba2f8d2f2367ab380cd28ca6a321404dbf81e9861c5e0664032a7d49ef58555c8172687c967a536bb346f0e9ae991403d497dd03a4ef83534eecd172a4649e275a4d0020ecd7bc2bcbc67ac2997fd1af44337d550ebc49dbebdb23b44be6307bf41002912947f51736aa324c674d1bf384bbafa95d9192ade09632b51426293e9e89431fdab102314559db881ef256b0134b1a69529daf3746a5dfe5ba10e6cb8aa8cef364aea423ed7eb77d2398ca6cf8c4b89e4f4ae3848cbb413eba64a719f47904ea9da9fd8381f028d73523872111bbe2462a549bea40544b83413ec7704cdab20da052b297dc59a26cf1231c3d8d49590c62403721f22eda2adebef470c7342558a2dd2bbce5d5b389f8bbeb7abc41ad3657e6d53ac1d8187c6580f66268dc7c67d3e37b6ff2dd61a27664547a6077b51cbca6e05b91574b85fa401803b7a910f4975b88890f254435af1c02201f302b69227bc02b6c8f781326363191ab5ddf5bdb1e619cdc31c",
      uri,
      email,
      info,
      entryIDs,
      commentIDs,
      favoriteIDs,
      __v: 0
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
