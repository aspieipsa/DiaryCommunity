webpackHotUpdate(6,{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(112);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(113);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(247);

var _head2 = _interopRequireDefault(_head);

var _api = __webpack_require__(572);

var _api2 = _interopRequireDefault(_api);

var _isomorphicFetch = __webpack_require__(574);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/annakruglaia/dev/DiaryCom/client/pages/user.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/annakruglaia/dev/DiaryCom/client/pages/user.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/user")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iNTQyNDg0YjI3NmQ4ODdhMTk5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci5qcz9mODQ2ODkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaU1vY2t1cC9hcGlcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHBhdGhuYW1lLCBxdWVyeSB9KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJFUVwiLCByZXEpOyAvLyBjYW4gYmUgc2VlbiBpbiB0aGUgc2VydmUgY29uc29sZSwgbm90IGJyb3dzZXJcbiAgICBjb25zb2xlLmxvZyhcIlF1ZXJ5XCIsIHF1ZXJ5KTtcbiAgICBsZXQgdXNlciA9IGF3YWl0IGFwaS5nZXRVc2VyUHJvZmlsZURhdGEocXVlcnkubmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBuYW1lLCBpbmZvIH0gPSB0aGlzLnByb3BzLnVzZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5EaWFyeSBpcyB0aGUgYmVzdCwge25hbWV9ITwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aDM+SGVsbG8ge25hbWV9ITwvaDM+XG4gICAgICAgIDxoND5IZXJlIGlzIHlvdXIgcHJvZmlsZSBpbmZvOiA8L2g0PlxuICAgICAgICA8cD57aW5mb308L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qXG5nZXRJbml0aWFsUHJvcHMgcmVjZWl2ZXMgYSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblxucGF0aG5hbWUgLSBwYXRoIHNlY3Rpb24gb2YgVVJMXG5xdWVyeSAtIHF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIFVSTCBwYXJzZWQgYXMgYW4gb2JqZWN0XG5hc1BhdGggLSBTdHJpbmcgb2YgdGhlIGFjdHVhbCBwYXRoIChpbmNsdWRpbmcgdGhlIHF1ZXJ5KSBzaG93cyBpbiB0aGUgYnJvd3NlclxucmVxIC0gSFRUUCByZXF1ZXN0IG9iamVjdCAoc2VydmVyIG9ubHkpXG5yZXMgLSBIVFRQIHJlc3BvbnNlIG9iamVjdCAoc2VydmVyIG9ubHkpXG5qc29uUGFnZVJlcyAtIEZldGNoIFJlc3BvbnNlIG9iamVjdCAoY2xpZW50IG9ubHkpXG5lcnIgLSBFcnJvciBvYmplY3QgaWYgYW55IGVycm9yIGlzIGVuY291bnRlcmVkIGR1cmluZyB0aGUgcmVuZGVyaW5nXG5cbiovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy91c2VyLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBckJBO0FBQUE7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBMkJBOzs7Ozs7Ozs7Ozs7O0FBNUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=