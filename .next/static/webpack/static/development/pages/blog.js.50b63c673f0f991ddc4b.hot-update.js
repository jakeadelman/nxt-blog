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





var Img = function Img(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "img-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3741608744" + " " + "blogpage-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.img,
    className: "jsx-3741608744",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3741608744",
    css: ".blogpage-img.jsx-3741608744{max-width:10%;padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBR3lCLGNBQ0osVUFDRCxTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBJbWcgPSBwcm9wcyA9PiAoXG4gIDxDb2wgY2xhc3NOYW1lPVwiaW1nLWNvbFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ3BhZ2UtaW1nXCI+XG4gICAgICA8aW1nIHNyYz17cHJvcHMuaW1nfSAvPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuYmxvZ3BhZ2UtaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0NvbD5cbik7XG5cbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3BhZ2U/dGl0bGU9JHtwcm9wcy50aXRsZX1gICsgYCZpZD0ke3Byb3BzLmlkfWB9PlxuICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpZWxkczogdGhpcy5wcm9wcy5wb3N0LmZpZWxkcyxcbiAgICAgICAgc3lzOiB0aGlzLnByb3BzLnBvc3Quc3lzXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZSAmJlxuICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZS5zeXMudHlwZSA9PSBcIkFzc2V0XCJcbiAgICAgICkge1xuICAgICAgICBsZXQgaW1nID1cbiAgICAgICAgICBcImh0dHA6XCIgK1xuICAgICAgICAgIHRoaXMucHJvcHMucG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybCArXG4gICAgICAgICAgXCI/Zml0PXRodW1iJmY9dG9wX2xlZnQmaD0xMDAmdz0xMDAmcj0xODBcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW1nOiBpbWdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImJsb2dyb3dcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pbWcgPyAoXG4gICAgICAgICAgICA8SW1nIGltZz17dGhpcy5zdGF0ZS5pbWd9IGNsYXNzTmFtZT1cImJsb2ctY29sLWltZ1wiIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJibG9nY29sXCI+XG4gICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMucG9zdC5maWVsZHMudGl0bGV9PC9oMT5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuYmxvZ3BhZ2UtaW1nIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYmxvZy1jb2wtaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA8ZGl2PlxuLy8gICAgICAgICAgICAge3RoaXMuc3RhdGUuZmllbGRzID8gKFxuLy8gICAgICAgICAgICAgICA8UG9zdExpbmtcbi8vICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5maWVsZHMudGl0bGV9XG4vLyAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUuc3lzLmlkfVxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgKSA6IG51bGx9XG4vLyAgICAgICAgICAgPC9kaXY+XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/blog/components/blog/BlogItem.js */",
    __self: this
  }));
};

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "blogrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.state.img ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
        img: this.state.img,
        className: "blog-col-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        className: "blogcol",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1831674152",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.props.post.fields.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1831674152",
        css: ".blogpage-img.jsx-1831674152{float:left;margin-right:1em;}.blog-col-img.jsx-1831674152{max-width:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFYSxBQUc0QixBQUlHLFdBSEcsR0FJbkIsY0FIQSIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9ibG9nL2NvbXBvbmVudHMvYmxvZy9CbG9nSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgSW1nID0gcHJvcHMgPT4gKFxuICA8Q29sIGNsYXNzTmFtZT1cImltZy1jb2xcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dwYWdlLWltZ1wiPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltZ30gLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmJsb2dwYWdlLWltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMCU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9Db2w+XG4pO1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtgL2Jsb2dwYWdlP3RpdGxlPSR7cHJvcHMudGl0bGV9YCArIGAmaWQ9JHtwcm9wcy5pZH1gfT5cbiAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWVsZHM6IHRoaXMucHJvcHMucG9zdC5maWVsZHMsXG4gICAgICAgIHN5czogdGhpcy5wcm9wcy5wb3N0LnN5c1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5oZXJvSW1hZ2UgJiZcbiAgICAgICAgdGhpcy5wcm9wcy5wb3N0LmZpZWxkcy5oZXJvSW1hZ2Uuc3lzLnR5cGUgPT0gXCJBc3NldFwiXG4gICAgICApIHtcbiAgICAgICAgbGV0IGltZyA9XG4gICAgICAgICAgXCJodHRwOlwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgK1xuICAgICAgICAgIFwiP2ZpdD10aHVtYiZmPXRvcF9sZWZ0Jmg9MTAwJnc9MTAwJnI9MTgwXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGltZzogaW1nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJibG9ncm93XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaW1nID8gKFxuICAgICAgICAgICAgPEltZyBpbWc9e3RoaXMuc3RhdGUuaW1nfSBjbGFzc05hbWU9XCJibG9nLWNvbC1pbWdcIiAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiYmxvZ2NvbFwiPlxuICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnBvc3QuZmllbGRzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmJsb2dwYWdlLWltZyB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJsb2ctY29sLWltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPHA+e3RoaXMucHJvcHMucG9zdC5maWVsZHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gPGRpdj5cbi8vICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpZWxkcyA/IChcbi8vICAgICAgICAgICAgICAgPFBvc3RMaW5rXG4vLyAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmllbGRzLnRpdGxlfVxuLy8gICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLnN5cy5pZH1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICkgOiBudWxsfVxuLy8gICAgICAgICAgIDwvZGl2PlxuIl19 */\n/*@ sourceURL=/Users/manx/projects/blog/components/blog/BlogItem.js */",
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.post.fields.description)));
    }
  }]);

  return BlogItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // <div>
//             {this.state.fields ? (
//               <PostLink
//                 title={this.state.fields.title}
//                 id={this.state.sys.id}
//               />
//             ) : null}
//           </div>




/***/ })

})
//# sourceMappingURL=blog.js.50b63c673f0f991ddc4b.hot-update.js.map