import validator from 'validator';
import axios from 'axios';

export async function isNameUnique(name) {
  try {
    let res = await axios.get(`/api/identity/exists?name=${name}`);
    return !res.data.result;
  } catch (err) {}
}

export async function isUriUnique(uri) {
  try {
    let res = await axios.get(`/api/identity/exists?uri=${uri}`);
    return !res.data.result;
  } catch (err) {}
}

export async function isEmailUnique(email) {
  try {
    let res = await axios.get(`/api/user/exists?email=${email}`);
    return !res.data.result;
  } catch (err) {}
}

export async function validateName(name) {
  let errors = [];

  const MIN_LENGTH = 1;
  const MAX_LENGTH = 50;
  const INVALID_LENGTH = `Your username must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters long.`;
  const INVALID_CHARACTERS =
    'Your username must be an alphanumeric string with Latin or Cyrillic characters and the following characters: - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ].';
  const IS_MANDATORY = 'You must provide a username.';
  const NO_MIXING = 'Your username can contain Latin or Cyrillic characters, but not both.';
  const MUST_HAVE_LETTERS = 'Your username must contain at least one Latin or Cyrillic alphabetic character.';
  const NO_SIDE_SPACES = 'Your username cannot start or end with a space.';
  const NO_DOUBLE_SPACES = 'Your username cannot contain any number of consecutive spaces.';

  //Length
  if (name.length === 0) {
    errors.push(IS_MANDATORY);
    return errors;
  } else if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
    errors.push(INVALID_LENGTH);
  }

  //Side spaces
  if (name[0] === ' ' || name[name.length - 1] === ' ') {
    errors.push(NO_SIDE_SPACES);
  }

  //Double spaces after first or before last character
  if (name.search('  ') > -1) {
    errors.push(NO_DOUBLE_SPACES);
  }

  const LATIN = /[a-z]/gi;
  const CYRILLICS = /[а-я]/gi;
  //The final space before the closing ] is IMPORTANT! LEAVE IT THERE.
  const INVALID = /[^a-zа-я0-9\-_~!@#$&*()+?=/\|\\.,;:<>\[\] ]/gi;

  let hasLatin = LATIN.test(name);
  let hasCyrillics = CYRILLICS.test(name);

  //Invalid characters
  if (INVALID.test(name)) errors.push(INVALID_CHARACTERS);

  //At least some alphabetic characters
  if (!hasLatin && !hasCyrillics) errors.push(MUST_HAVE_LETTERS);

  //Mixed characters
  if (hasLatin && hasCyrillics) errors.push(NO_MIXING);

  if (errors.length === 0) {
    if (!await isNameUnique(name)) {
      errors.push('Username already taken :( ');
    }
  }
  return errors;
}

export async function validateEmail(email) {
  const INVALID_EMAIL = 'The email address you provided appears to be invalid.';
  const NO_EMAIL = 'You must provide an email address.';
  let errors = [];
  if (email.length === 0) {
    errors.push(NO_EMAIL);
    return errors;
  } else if (!validator.isEmail(email)) {
    errors.push(INVALID_EMAIL);
  }

  if (errors.length === 0) {
    if (!await isEmailUnique(email)) {
      errors.push('Email already used');
    }
  }

  return errors;
}

export async function validateUri(uri) {
  const MIN_LENGTH = 1;
  const MAX_LENGTH = 50;
  const INVALID = /[^a-z\-]/gi;

  const IS_MANDATORY = 'You must provide a custom URI.';
  const INVALID_LENGTH = 'Your custom URI must be between 1 and 50 characters long.';
  const INVALID_CHARACTERS = 'Your custom URI may contain only Latin characters and dashes (-).';

  let errors = [];

  //Length
  if (uri.length === 0) {
    errors.push(IS_MANDATORY);
    return errors;
  } else if (uri.length < MIN_LENGTH || uri.length > MAX_LENGTH) {
    errors.push(INVALID_LENGTH);
  }

  //Invalid characters
  if (INVALID.test(uri)) errors.push(INVALID_CHARACTERS);

  if (errors.length === 0) {
    if (!await isUriUnique(uri)) {
      errors.push('Uri already taken :( ');
    }
  }

  return errors;
}

export function validatePassword(password) {
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 50;
  const INVALID = /[^a-zа-я0-9\-_~!@#$&*()+?=/\|\\.,;:<>\[\]]/gi;

  const IS_MANDATORY = 'You must provide a password.';
  const INVALID_LENGTH = 'Your password must be between 8 and 50 characters long.';
  const INVALID_CHARACTERS =
    'Your password must be an alphanumeric string with Latin or Cyrillic characters and the following characters: - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ].';

  let errors = [];

  //Length
  if (password.length === 0) {
    errors.push(IS_MANDATORY);
    return errors;
  } else if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
    errors.push(INVALID_LENGTH);
  }

  //Invalid characters
  if (INVALID.test(password)) errors.push(INVALID_CHARACTERS);

  return errors;
}

export function validateConfirmPassword(password, confirmedPassword) {
  const PASSWORD_MISMATCH = "The confirmed password doesn't match the original password.";
  let errors = [];

  if (password.length >= 8 && password !== confirmedPassword) errors.push(PASSWORD_MISMATCH);

  return errors;
}

// TODO still
export async function validateAll(regData) {
  let errors = [];

  errors.concat(validatePassword(regData.password));
  errors.concat(validateName(regData.name));
  errors.concat(validateEmail(regData.email));
  errors.concat(validateUri(regData.uri));

  console.log('errors', errors);
  if (!errors.length) {
    if (!await isNameUnique(regData.name)) {
      console.log('Username already taken');
      errors.push('Username already taken :( ');
    }
    if (!await isUriUnique(regData.uri)) {
      console.log('URI already taken');
      errors.push('URI already taken :( ');
    }
  }

  return errors;
}
