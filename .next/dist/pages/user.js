"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _api = require("../apiMockup/api");

var _api2 = _interopRequireDefault(_api);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _PageHeaders = require("./components/PageHeaders");

var _PageHeaders2 = _interopRequireDefault(_PageHeaders);

var _UserProfile = require("./components/UserProfile");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/annakruglaia/dev/DiaryCom/client/pages/user.js?entry";


var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_PageHeaders2.default, { title: "Profile page of " + this.props.user.name, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_UserProfile2.default, { user: this.props.user, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var pathname = _ref.pathname,
            query = _ref.query;
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log("REQ", req); // can be seen in the serve console, not browser
                console.log("Query", query);

                _context.next = 3;
                return _api2.default.getUserProfileData(query.userURL);

              case 3:
                user = _context.sent;
                return _context.abrupt("return", {
                  user: user
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(_react2.default.Component);

/*
getInitialProps receives a context object with the following properties:

pathname - path section of URL
query - query string section of URL parsed as an object
asPath - String of the actual path (including the query) shows in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
jsonPageRes - Fetch Response object (client only)
err - Error object if any error is encountered during the rendering

*/

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsiYXBpIiwiZmV0Y2giLCJQYWdlSGVhZGVycyIsIlVzZXJQcm9maWxlIiwiUGFnZSIsInByb3BzIiwidXNlciIsIm5hbWUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldFVzZXJQcm9maWxlRGF0YSIsInVzZXJVUkwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjOzs7Ozs7Ozs7Ozs2QkFVVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx1Q0FBWSw0QkFBMEIsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFsRCxBQUF1RDtvQkFBdkQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx1Q0FBWSxNQUFNLEtBQUEsQUFBSyxNQUF4QixBQUE4QjtvQkFBOUI7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISzs7Ozs7OztZQWJ5QixBLGdCQUFBLEE7WUFBVSxBLGFBQUEsQTs7Ozs7bUJBQ3ZDO0FBQ0E7d0JBQUEsQUFBUSxJQUFSLEFBQVksU0FBWixBQUFxQjs7O3VCQUVKLGNBQUEsQUFBSSxtQkFBbUIsTUFBdkIsQUFBNkIsQTs7bUJBQTFDO0E7O3dCQUNHLEE7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUDRCLGdCQUFNLEE7O0FBb0J4Qzs7Ozs7Ozs7Ozs7OztrQkFwQnFCLEEiLCJmaWxlIjoidXNlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5uYWtydWdsYWlhL2Rldi9EaWFyeUNvbS9jbGllbnQifQ==