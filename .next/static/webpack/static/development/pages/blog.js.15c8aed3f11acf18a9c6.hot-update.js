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
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2293708217" + " " + "blogpage-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.state.img ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.img,
        className: "jsx-2293708217",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2293708217",
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
        styleId: "2293708217",
        css: ".blogpage-img.jsx-2293708217{float:left;margin-right:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9ibG9nL0Jsb2dJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEVyxBQUcwQixXQUNNLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9ibG9nL2NvbXBvbmVudHMvYmxvZy9CbG9nSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj17YC9ibG9ncGFnZT90aXRsZT0ke3Byb3BzLnRpdGxlfWAgKyBgJmlkPSR7cHJvcHMuaWR9YH0+XG4gICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmllbGRzOiB0aGlzLnByb3BzLnBvc3QuZmllbGRzLFxuICAgICAgICBzeXM6IHRoaXMucHJvcHMucG9zdC5zeXNcbiAgICAgIH0pO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZSAmJlxuICAgICAgICB0aGlzLnByb3BzLnBvc3QuZmllbGRzLmhlcm9JbWFnZS5zeXMudHlwZSA9PSBcIkFzc2V0XCJcbiAgICAgICkge1xuICAgICAgICBsZXQgaW1nID1cbiAgICAgICAgICBcImh0dHA6XCIgK1xuICAgICAgICAgIHRoaXMucHJvcHMucG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybCArXG4gICAgICAgICAgXCI/Zml0PXRodW1iJmY9dG9wX2xlZnQmaD0xMDAmdz0xMDAmcj0xODBcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW1nOiBpbWdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImJsb2dyb3dcIj5cbiAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dwYWdlLWltZ1wiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmltZyA/IDxpbWcgc3JjPXt0aGlzLnN0YXRlLmltZ30gLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZpZWxkcyA/IChcbiAgICAgICAgICAgIDxQb3N0TGluayB0aXRsZT17dGhpcy5zdGF0ZS5maWVsZHMudGl0bGV9IGlkPXt0aGlzLnN0YXRlLnN5cy5pZH0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5ibG9ncGFnZS1pbWcge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/blog/components/blog/BlogItem.js */",
        __self: this
      }));
    }
  }]);

  return BlogItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=blog.js.15c8aed3f11acf18a9c6.hot-update.js.map