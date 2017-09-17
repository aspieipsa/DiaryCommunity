import data from './data.json';

const API = {
  getUserPosts,
  getPostData,
  getUserProfileData,
  getUserFavoriteFeed
};

function getUserPosts(userID) {
  return data.posts.filter(a => a.userID === userID);
}

function getPostData(postID) {
  return data.posts.find(a => a.postID === postID);
}

function getUserProfileData(userID) {
  return data.users.find(a => a.userID === userID);
}

function getUserFavoriteFeed(userID) {
  const userFavs = data.users.find(a => a.userID === userID).favorites;
  return data.posts.filter(a => userFavs.indexOf(a.userID));
}

export default API;
