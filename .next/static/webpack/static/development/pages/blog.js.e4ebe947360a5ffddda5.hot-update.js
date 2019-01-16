webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/blog/BlogItem.js":
/*!*************************************!*\
  !*** ./components/blog/BlogItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/manx/projects/blog/components/blog/BlogItem.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Img = function Img(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "blogpage-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _this.state.img ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _this.state.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }) : null));
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.title)));
};

var BlogItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogItem, _React$Component);

  function BlogItem(props) {
    var _this2;

    _classCallCheck(this, BlogItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BlogItem).call(this, props));
    _this2.state = {};
    return _this2;
  }

  _createClass(BlogItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props) {
        this.setState({
          fields: this.props.post.fields,
          sys: this.props.post.sys
        });
        console.log(this.props);

        if (this.props.post.fields.heroImage && this.props.post.fields.heroImage.sys.type == "Asset") {
          var img = "http:" + this.props.post.fields.heroImage.fields.file.url + "?fit=thumb&f=top_left&h=100&w=100&r=180";
          this.setState({
            img: img
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "blogrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        className: "blogcol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.props.post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.state.fields ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
        title: this.state.fields.title,
        id: this.state.sys.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2293708217",
        css: ".blogpage-img.jsx-2293708217{float:left;margin-right:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEVyxBQUcwQixXQUNNLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9ibG9nL2NvbXBvbmVudHMvYmxvZy9CbG9nSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgSW1nID0gcHJvcHMgPT4gKFxuICA8Q29sPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ3BhZ2UtaW1nXCI+XG4gICAgICB7dGhpcy5zdGF0ZS5pbWcgPyA8aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWd9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgPC9Db2w+XG4pO1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtgL2Jsb2dwYWdlP3RpdGxlPSR7cHJvcHMudGl0bGV9YCArIGAmaWQ9JHtwcm9wcy5pZH1gfT5cbiAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWVsZHM6IHRoaXMucHJvcHMucG9zdC5maWVsZHMsXG4gICAgICAgIHN5czogdGhpcy5wcm9wcy5wb3N0LnN5c1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5oZXJvSW1hZ2UgJiZcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5oZXJvSW1hZ2Uuc3lzLnR5cGUgPT0gXCJBc3NldFwiXG4gICAgICApIHtcbiAgICAgICAgbGV0IGltZyA9XG4gICAgICAgICAgXCJodHRwOlwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgK1xuICAgICAgICAgIFwiP2ZpdD10aHVtYiZmPXRvcF9sZWZ0Jmg9MTAwJnc9MTAwJnI9MTgwXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGltZzogaW1nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJibG9ncm93XCI+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiYmxvZ2NvbFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5wb3N0LmZpZWxkcy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnBvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5maWVsZHMgPyAoXG4gICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9e3RoaXMuc3RhdGUuZmllbGRzLnRpdGxlfSBpZD17dGhpcy5zdGF0ZS5zeXMuaWR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuYmxvZ3BhZ2UtaW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/blog/components/blog/BlogItem.js */",
        __self: this
      }));
    }
  }]);

  return BlogItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=blog.js.e4ebe947360a5ffddda5.hot-update.js.map