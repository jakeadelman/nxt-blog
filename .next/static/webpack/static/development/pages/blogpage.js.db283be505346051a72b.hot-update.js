webpackHotUpdate("static/development/pages/blogpage.js",{

/***/ "./components/BlogContent.js":
/*!***********************************!*\
  !*** ./components/BlogContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
var _jsxFileName = "/Users/manx/projects/blog/components/BlogContent.js";

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


 //images api: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/assets/asset/get-a-single-asset/console
// const rtfm = require("@contentful/rich-text-from-markdown");

var marked = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");

var BlogContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogContent, _React$Component);

  function BlogContent(props) {
    var _this;

    _classCallCheck(this, BlogContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "client", contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"]({
      space: "mtpe83yxj293",
      accessToken: "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchImg", function (entry) {
      return _this.client.getAssets(entry);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchPosts", function (entry) {
      return _this.client.getEntries({
        "sys.id": entry
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setImg", function (response) {
      console.log(response);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPosts", function (response) {
      var assets = response.includes.Asset;
      var heroImg = assets[0];
      heroImg = heroImg.fields.file.url;
      heroImg = "https:" + heroImg + "?w=700&h=700";
      var preFormatBody = response.items[0].fields.body;

      _this.setState({
        heroImg: heroImg,
        posts: response.items[0],
        markdown: marked(preFormatBody)
      });

      console.log(_this.state.posts); // return response.fields.heroImage.sys.id;
    });

    _this.state = {
      posts: []
    };
    return _this;
  }

  _createClass(BlogContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPosts(this.props.id).then(this.setPosts); // .then(response => this.fetchImg(response).then(this.setImg));
    } // this.fetchImg(this.state.heroImage).then(this.setImg)

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.state.posts.fields.title, ", this is the title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.heroImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: this.state.markdown
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    }
  }]);

  return BlogContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=blogpage.js.db283be505346051a72b.hot-update.js.map