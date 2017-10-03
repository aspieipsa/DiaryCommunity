const USERNAME_MIN_LENGTH = 1,
  USERNAME_MAX_LENGTH = 50,
  LATIN_REGEX = /[A-Za-zäëïöüåÄËÏÖÅÜ]/,
  CYRILLICS_REGEX = /[АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя]/,
  NUMSYM_REGEX = /[0-9-_~!@#$&*()+?=/|\\.,;:<>\[\]]/,
  FORBIDDEN_CUSTOM_URLS = ["api", "main", "login", "register"];

const USERNAME_LENGTH_ERR = `Your username must be between ${USERNAME_MIN_LENGTH} and ${USERNAME_MAX_LENGTH} characters long.\n`,
  USERNAME_CHAR_ERR =
    "Your username must be an alphanumeric string with Latin or Cyrillic characters /but not both) and the following characters: - _ ~ ! @ # $ & * ( ) + ? = / |  . , ; : < > [ ].\n",
  USERNAME_NO_SIDE_SPACES_ERR =
    "Your username cannot start or end with a space.\n",
  USERNAME_NO_DOUBLE_SPACES_ERR =
    "Your username cannot contain any number of consecutive spaces.\n",
  FORBIDDEN_CUSTOM_URL_ERR =
    "The custom URL you have chosen is not allowed. Please, choose a different one.\n";

function validateUserName(username) {
  let errorMessage;

  //TODO: uniqueness

  //Username length
  if (
    username.length < USERNAME_MIN_LENGTH ||
    username.length > USERNAME_MAX_LENGTH
  )
    errorMessage += USERNAME_LENGTH_ERR;

  //Beginning or end spaces
  if (username[0] === " " || username[username.length - 1] === " ")
    errorMessage += USERNAME_NO_SIDE_SPACES_ERR;

  //Double spaces after first or before last character
  for (let i = 1; i < username.length - 1; i++) {
    if (username[i] === " " && username[i + 1] === " ")
      errorMessage += USERNAME_NO_DOUBLE_SPACES_ERR;
    break;
  }

  //Only allowed characters
  if (
    !LATIN_REGEX.test(username) &&
    !CYRILLICS_REGEX.test(username) &&
    !NUMSYM_REGEX.test(username)
  )
    errorMessage += USERNAME_CHAR_ERR;

  //No character mixing
  if (LATIN_REGEX.test(username) && CYRILLICS_REGEX.test(username))
    errorMessage += USERNAME_CHAR_ERR;

  return errorMessage;
}
