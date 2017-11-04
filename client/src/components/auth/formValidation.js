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
  const INVALID_LENGTH = `Псевдоним должен быть от ${MIN_LENGTH} до ${MAX_LENGTH} символов`;
  const INVALID_CHARACTERS =
    'Можно использовать кириллицу, латиницу и символы: - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ]';
  const IS_MANDATORY = 'Обязательно';
  const NO_MIXING = 'Смешивать латиницу и кирилицу нельзя';
  const MUST_HAVE_LETTERS = 'Нужно хотя бы одну букву добавить';
  const NO_SIDE_SPACES = 'Имя не может начинаться или заканчиваться пробелом';
  const NO_DOUBLE_SPACES = 'Имя не может содержать больше одного пробела подряд';

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
      errors.push('Псевдоним занят');
    }
  }
  return errors;
}

export async function validateEmail(email) {
  const INVALID_EMAIL = 'Не похоже на email';
  const NO_EMAIL = 'Email обязателен';
  let errors = [];
  if (email.length === 0) {
    errors.push(NO_EMAIL);
    return errors;
  } else if (!validator.isEmail(email)) {
    errors.push(INVALID_EMAIL);
  }

  if (errors.length === 0) {
    if (!await isEmailUnique(email)) {
      errors.push('Этот email уже зарегистрирован');
    }
  }

  return errors;
}

export async function validateUri(uri) {
  const MIN_LENGTH = 3;
  const MAX_LENGTH = 30;
  const INVALID = /[^a-z0-9]/gi;

  const IS_MANDATORY = 'Обязательно';
  const INVALID_LENGTH = 'Адрес должен быть от 3 до 30 символов';
  const INVALID_CHARACTERS = 'Адрес может содержать только латиницу и цифры';

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
  const MIN_LENGTH = 5;
  const MAX_LENGTH = 50;
  const INVALID = /[^a-zа-я0-9\-_~!@#$&*()+?=/\|\\.,;:<>\[\]]/gi;

  const IS_MANDATORY = 'Обязательно';
  const INVALID_LENGTH = 'Длина пароля должна быть от 5 до 50 символов';
  const INVALID_CHARACTERS =
    'Можно использовать латиницу, кирилицу, цифры и символы : - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ].';

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
  const PASSWORD_MISMATCH = "Пароли не совпадают. А должны.";
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
      errors.push('Псевдоним занят');
    }
    if (!await isUriUnique(regData.uri)) {
      console.log('URI already taken');
      errors.push('Адрес занят');
    }
  }

  return errors;
}
