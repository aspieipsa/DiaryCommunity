export async function isUsernameUnique(username) {
  // call GET "/api/user/" and see if it finds a user with this name

  return true;
}

export async function isUrlUnique(customURL) {
  // call GET "/api/user/" and see if it finds a user with this customURL

  return true;
}

export function validateUsername() {
  // rules for checking all the things
  // if error, return what was wrong

  return [];
}

export function validateEmail() {
  // rules for checking all the things
  // if error, return what was wrong

  return [];
}

export function validateUrl(customURL) {
  // rules for checking latin characters and length 1-50
  return [];
}

export function validatePassword(password) {
  return [];
}

// TODO still
export async function validateAll(regData) {
  let errors = [];

  errors.concat(validatePassword(regData.password));
  errors.concat(validateUsername(regData.username));
  errors.concat(validateEmail(regData.email));
  errors.concat(validateUrl(regData.customURL));

  console.log("errors", errors);
  if (!errors.length) {
    if (!await isUsernameUnique(regData.username)) {
      errors.push("Username already taken :( ");
    }
    if (!await isUrlUnique(regData.url)) {
      errors.push("Url already taken :( ");
    }
  }

  return errors;
}
