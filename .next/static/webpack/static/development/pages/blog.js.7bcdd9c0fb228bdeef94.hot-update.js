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
var _jsxFileName = "/Users/manx/projects/blog/components/blog/BlogItem.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title)));
};

var BlogItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogItem, _React$Component);

  function BlogItem(props) {
    var _this;

    _classCallCheck(this, BlogItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogItem).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(BlogItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props) {
        this.setState({
          fields: this.props.post.fields,
          sys: this.props.post.sys
        });

        if (this.props.post.fields.heroImage && this.props.post.fields.heroImage.sys.type == "Asset") {
          var img = "http:" + this.props.post.fields.heroImage.fields.file.url + "?w=150&h=150&r=100";
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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2805761248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2805761248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2805761248" + " " + "blogpage-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.state.img ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.img,
        className: "jsx-2805761248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2805761248",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.fields ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
        title: this.state.fields.title,
        id: this.state.sys.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2805761248",
        css: ".blogpage-img.jsx-2805761248{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEVyxBQUcwQixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtgL2Jsb2dwYWdlP3RpdGxlPSR7cHJvcHMudGl0bGV9YCArIGAmaWQ9JHtwcm9wcy5pZH1gfT5cbiAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWVsZHM6IHRoaXMucHJvcHMucG9zdC5maWVsZHMsXG4gICAgICAgIHN5czogdGhpcy5wcm9wcy5wb3N0LnN5c1xuICAgICAgfSk7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJvcHMucG9zdC5maWVsZHMuaGVyb0ltYWdlICYmXG4gICAgICAgIHRoaXMucHJvcHMucG9zdC5maWVsZHMuaGVyb0ltYWdlLnN5cy50eXBlID09IFwiQXNzZXRcIlxuICAgICAgKSB7XG4gICAgICAgIGxldCBpbWcgPVxuICAgICAgICAgIFwiaHR0cDpcIiArXG4gICAgICAgICAgdGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsICtcbiAgICAgICAgICBcIj93PTE1MCZoPTE1MCZyPTEwMFwiO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbWc6IGltZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYmxvZ3Jvd1wiPlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e3RoaXMucHJvcHMuY29udGVudH08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ3BhZ2UtaW1nXCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaW1nID8gPGltZyBzcmM9e3RoaXMuc3RhdGUuaW1nfSAvPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmllbGRzID8gKFxuICAgICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPXt0aGlzLnN0YXRlLmZpZWxkcy50aXRsZX0gaWQ9e3RoaXMuc3RhdGUuc3lzLmlkfSAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmJsb2dwYWdlLWltZyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/blog/components/blog/BlogItem.js */",
        __self: this
      }));
    }
  }]);

  return BlogItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=blog.js.7bcdd9c0fb228bdeef94.hot-update.js.map