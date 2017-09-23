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

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _api = require("../apiMockup/api");

var _api2 = _interopRequireDefault(_api);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

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
      var _props$user = this.props.user,
          name = _props$user.name,
          info = _props$user.info;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Diary is the best, ", name, "!"), _react2.default.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Hello ", name, "!"), _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Here is your profile info: "), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, info));
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
                return _api2.default.getUserProfileData(query.name);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOlsiSGVhZCIsImFwaSIsImZldGNoIiwiUGFnZSIsInByb3BzIiwidXNlciIsIm5hbWUiLCJpbmZvIiwicGF0aG5hbWUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyUHJvZmlsZURhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7OzZCQVNWO3dCQUNjLEtBQUEsQUFBSyxNQURuQixBQUN5QjtVQUR6QixBQUNELG1CQURDLEFBQ0Q7VUFEQyxBQUNLLG1CQURMLEFBQ0ssQUFDWjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBMkIsdUJBQTNCLE1BREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2lCQUZGLEFBRVU7O29CQUZWO3NCQUhKLEFBQ0UsQUFFRSxBQUtGO0FBTEU7QUFDRSwyQkFJSixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBVyxVQUFYLE1BUkYsQUFRRSxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRGLEFBU0UsQUFDQSxnREFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFJO0FBQUo7QUFBQSxTQVhKLEFBQ0UsQUFVRSxBQUdMOzs7Ozs7WSxBQXhCOEIsZ0JBQUEsQTtZQUFVLEEsYUFBQSxBOzs7OzttQkFDdkM7QUFDQTt3QkFBQSxBQUFRLElBQVIsQUFBWSxTQUFaLEFBQXFCOzt1QkFDSixjQUFBLEFBQUksbUJBQW1CLE1BQXZCLEEsQUFBNkI7O21CQUExQztBOzt3QixBQUNHO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU40QixnQkFBTSxBOztBQTRCeEM7Ozs7Ozs7Ozs7Ozs7a0JBNUJxQixBIiwiZmlsZSI6InVzZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FubmFrcnVnbGFpYS9kZXYvRGlhcnlDb20vY2xpZW50In0=