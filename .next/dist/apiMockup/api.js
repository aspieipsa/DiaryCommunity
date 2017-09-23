'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = {
  getUserEntries: getUserEntries,
  getEntryData: getEntryData,
  getUserProfileData: getUserProfileData,
  getUserFavoriteFeed: getUserFavoriteFeed
};

function getUserEntries(userURL) {
  console.log('Hello', userURL);
  console.log('Data', _data2.default);
  var user = _data2.default.users.find(function (a) {
    return a.url === userURL;
  });
  if (user) return _data2.default.entries.filter(function (a) {
    return a.author === user.name;
  });else return [];
}

function getEntryData(entryID) {
  return _data2.default.entries.find(function (a) {
    return a.entryID === entryID;
  });
}

function getUserProfileData(userURL) {
  return _data2.default.users.find(function (a) {
    return a.url === userURL;
  });
}

function getUserFavoriteFeed(userURL) {
  var userFavs = _data2.default.users.find(function (a) {
    return a.url === userURL;
  }).favorites;
  return _data2.default.entries.filter(function (a) {
    return userFavs.indexOf(a.userID) > -1;
  });
}

exports.default = API;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaU1vY2t1cC9hcGkuanMiXSwibmFtZXMiOlsiZGF0YSIsIkFQSSIsImdldFVzZXJFbnRyaWVzIiwiZ2V0RW50cnlEYXRhIiwiZ2V0VXNlclByb2ZpbGVEYXRhIiwiZ2V0VXNlckZhdm9yaXRlRmVlZCIsInVzZXJVUkwiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZXJzIiwiZmluZCIsImEiLCJ1cmwiLCJlbnRyaWVzIiwiZmlsdGVyIiwiYXV0aG9yIiwibmFtZSIsImVudHJ5SUQiLCJ1c2VyRmF2cyIsImZhdm9yaXRlcyIsImluZGV4T2YiLCJ1c2VySUQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQU07a0JBQU0sQUFFVjtnQkFGVSxBQUdWO3NCQUhVLEFBSVY7dUJBSkYsQUFBWTtBQUFBLEFBQ1Y7O0FBTUYsU0FBQSxBQUFTLGVBQVQsQUFBd0IsU0FBUyxBQUMvQjtVQUFBLEFBQVEsSUFBUixBQUFZLFNBQVosQUFBcUIsQUFDckI7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUFRLEFBQ3BCO01BQU0sc0JBQU8sQUFBSyxNQUFMLEFBQVcsS0FBSyxhQUFBO1dBQUssRUFBQSxBQUFFLFFBQVAsQUFBZTtBQUE1QyxBQUFhLEFBQ2IsR0FEYTtNQUNiLEFBQUksNEJBQWEsQUFBSyxRQUFMLEFBQWEsT0FBTyxhQUFBO1dBQUssRUFBQSxBQUFFLFdBQVcsS0FBbEIsQUFBdUI7QUFBNUQsQUFBVSxBQUFPLEdBQUEsQ0FBUCxNQUNMLE9BQUEsQUFBTyxBQUNiOzs7QUFFRCxTQUFBLEFBQVMsYUFBVCxBQUFzQixTQUFTLEFBQzdCO3dCQUFPLEFBQUssUUFBTCxBQUFhLEtBQUssYUFBQTtXQUFLLEVBQUEsQUFBRSxZQUFQLEFBQW1CO0FBQTVDLEFBQU8sQUFDUixHQURROzs7QUFHVCxTQUFBLEFBQVMsbUJBQVQsQUFBNEIsU0FBUyxBQUNuQzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxLQUFLLGFBQUE7V0FBSyxFQUFBLEFBQUUsUUFBUCxBQUFlO0FBQXRDLEFBQU8sQUFDUixHQURROzs7QUFHVCxTQUFBLEFBQVMsb0JBQVQsQUFBNkIsU0FBUyxBQUNwQztNQUFNLDBCQUFXLEFBQUssTUFBTCxBQUFXLEtBQUssYUFBQTtXQUFLLEVBQUEsQUFBRSxRQUFQLEFBQWU7QUFBL0IsR0FBQSxFQUFqQixBQUF5RCxBQUN6RDt3QkFBTyxBQUFLLFFBQUwsQUFBYSxPQUFPLGFBQUE7V0FBSyxTQUFBLEFBQVMsUUFBUSxFQUFqQixBQUFtQixVQUFVLENBQWxDLEFBQW1DO0FBQTlELEFBQU8sQUFDUixHQURRO0FBR1Q7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbm5ha3J1Z2xhaWEvZGV2L0RpYXJ5Q29tL2NsaWVudCJ9