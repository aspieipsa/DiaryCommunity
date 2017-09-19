let JSONfile = require("jsonfile"),
  faker = require("faker"),
  userFile = "./users.json",
  entryFile = "./entries.json";

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

function createUsersJSON() {
  for (let i = 1; i < 11; i++) {
    JSONfile.writeFileSync(userFile, createUser(), { spaces: 2, flag: "a" });
  }
}

createUsersJSON();

/*    

JSONfile.writeFile(file, obj, { spaces: 2 }, function(err) {
  console.error(err);
}); */
