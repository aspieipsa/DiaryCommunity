const USERNAME_MIN_LENGTH = 1;
const USERNAME_MAX_LENGTH = 50;
const LATIN_REGEX = /[A-Za-zäëïöüåÄËÏÖÅÜ]/;
const CYRILLICS_REGEX = /[АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя]/;

const NUMSYM_REGEX = /[0-9-_~!@#$&*()+?=/|\\.,;:<>\[\]]/;
const FORBIDDEN_CUSTOM_URLS = ["api", "main", "login", "register"];

const USERNAME_LENGTH_ERR = `Your username must be between ${USERNAME_MIN_LENGTH} and ${USERNAME_MAX_LENGTH} characters long.`,
  USERNAME_CHAR_ERR =
    "Your username must be an alphanumeric string with Latin or Cyrillic characters /but not both) and the following characters: - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ].",
  USERNAME_NO_SIDE_SPACES_ERR =
    "Your username cannot start or end with a space.",
  USERNAME_NO_DOUBLE_SPACES_ERR =
    "Your username cannot contain any number of consecutive spaces.",
  FORBIDDEN_CUSTOM_URL_ERR =
    "The custom URL you have chosen is not allowed. Please, choose a different one.";

module.exports = function validateUser(user) {
  //USERNAME

  //TODO: uniqueness

  //Username length
  if (
    user.username.length < USERNAME_MIN_LENGTH ||
    user.username.length > USERNAME_MAX_LENGTH
  )
    return USERNAME_LENGTH_ERR;

  //Beginning or end spaces
  if (
    user.username[0] === " " ||
    user.username[user.username.length - 1] === " "
  )
    return USERNAME_NO_SIDE_SPACES_ERR;

  //Double spaces after first or before last character
  for (let i = 1; i < user.username.length - 1; i++) {
    if (user.username[i] === " " && user.username[i + 1] === " ")
      return USERNAME_NO_DOUBLE_SPACES_ERR;
  }

  //Only allowed characters
  if (
    !LATIN_REGEX.test(user.username) &&
    !CYRILLICS_REGEX.test(user.username) &&
    !NUMSYM_REGEX.test(user.username)
  )
    return USERNAME_CHAR_ERR;

  //No character mixing
  if (LATIN_REGEX.test(user.username) && CYRILLICS_REGEX.test(user.username))
    return USERNAME_CHAR_ERR;

  console.log(user.customURL);

  //CUSTOM URL

  //TODO: uniqueness

  //Not any of the routes
  if (FORBIDDEN_CUSTOM_URLS.indexOf(user.customURL) > -1)
    return FORBIDDEN_CUSTOM_URL_ERR;

  return true;
};
