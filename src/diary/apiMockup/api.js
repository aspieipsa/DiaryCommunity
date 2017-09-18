import data from './data.json';

const API = {
  getUserEntries,
  getEntryData,
  getUserProfileData,
  getUserFavoriteFeed
};

function getUserEntries(userURL) {
  console.log('Hello', userURL);
  console.log('Data', data);
  const user = data.users.find(a => a.url === userURL);
  if (user) return data.entries.filter(a => a.author === user.name);
  else return [];
}

function getEntryData(entryID) {
  return data.entries.find(a => a.entryID === entryID);
}

function getUserProfileData(userURL) {
  return data.users.find(a => a.url === userURL);
}

function getUserFavoriteFeed(userURL) {
  const userFavs = data.users.find(a => a.url === userURL).favorites;
  return data.entries.filter(a => userFavs.indexOf(a.userID) > -1);
}

export default API;
