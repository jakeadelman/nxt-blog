webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index_MyNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index/MyNavbar */ "./components/index/MyNavbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _components_blog_BlogItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/blog/BlogItem */ "./components/blog/BlogItem.js");
/* harmony import */ var _components_layouts_BlogPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layouts/BlogPage */ "./components/layouts/BlogPage.js");
var _jsxFileName = "/Users/manx/projects/blog/pages/blog.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Blog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Blog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      posts: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "client", contentful__WEBPACK_IMPORTED_MODULE_4__["createClient"]({
      space: "mtpe83yxj293",
      accessToken: "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchPosts", function () {
      return _this.client.getEntries();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPosts", function (response) {
      _this.setState({
        posts: response.items
      });
    });

    return _this;
  }

  _createClass(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layouts_BlogPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-4215759685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4215759685" + " " + "boxy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.state.posts.map(function (each, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_blog_BlogItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          post: each,
          key: i,
          className: "boxy",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4215759685",
        css: "boxy.jsx-4215759685{display:block;max-width:40vw;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1csQUFHNkIsY0FDQyxlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvYmxvZy9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE15TmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4L015TmF2YmFyXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCAqIGFzIGNvbnRlbnRmdWwgZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCBCbG9nSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvQmxvZ1BhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBvc3RzOiBbXVxuICB9O1xuXG4gIGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogXCJtdHBlODN5eGoyOTNcIixcbiAgICBhY2Nlc3NUb2tlbjpcbiAgICAgIFwiNWM4NzA5YjY1YmY2ZTBjYjY3YzllYjJkZjFmZTQ5ODgyOTE3NDEwMjMwY2E0ZjQzNzQzMDUxOGVkNGVkNTk1N1wiXG4gIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hQb3N0cygpLnRoZW4odGhpcy5zZXRQb3N0cyk7XG4gIH1cblxuICBmZXRjaFBvc3RzID0gKCkgPT4gdGhpcy5jbGllbnQuZ2V0RW50cmllcygpO1xuXG4gIHNldFBvc3RzID0gcmVzcG9uc2UgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9zdHM6IHJlc3BvbnNlLml0ZW1zXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3h5XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKChlYWNoLCBpKSA9PiAoXG4gICAgICAgICAgICA8QmxvZ0l0ZW0gcG9zdD17ZWFjaH0ga2V5PXtpfSBjbGFzc05hbWU9XCJib3h5XCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJveHkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/blog/pages/blog.js */",
        __self: this
      }));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blog.js.42e0efdf1e54019fbfac.hot-update.js.map