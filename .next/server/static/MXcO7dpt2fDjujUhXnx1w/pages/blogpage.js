module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNavbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MyNavbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyNavbar, _React$Component);

  function MyNavbar(props) {
    var _this;

    _classCallCheck(this, MyNavbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyNavbar).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(MyNavbar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4050728211"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        color: "none",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/profile8.jpg",
        className: "jsx-4050728211" + " " + "navbar-img"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        onClick: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        href: "/resume",
        className: "navbar-link"
      }, "Resume")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        href: "https://github.com/jakeadelman/",
        className: "navbar-link"
      }, "Github"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4050728211",
        css: ["a.jsx-4050728211{color:rgba(0,0,0,0.5);}", "a.jsx-4050728211:hover{color:rgba(0,0,0,0.7);-webkit-text-decoration:none;text-decoration:none;}"]
      }));
    }
  }]);

  return MyNavbar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var FontFaceObserver = __webpack_require__(11);

var Fonts = function Fonts() {
  var link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,500,700,900";
  link.rel = "stylesheet";
  document.head.appendChild(link);
  var josefinSans = new FontFaceObserver("Josefin Sans");
  josefinSans.load().then(function () {
    document.documentElement.classList.add("josefinSans");
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Fonts);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(13);

// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(9);

// CONCATENATED MODULE: ./components/blogpage/BlogHeader.js


var dateFormat = __webpack_require__(12);

/* harmony default export */ var BlogHeader = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "content-page-header-row"
  }, external_react_default.a.createElement("div", {
    className: "content-page-header-column"
  }, external_react_default.a.createElement("div", {
    className: "content-page-header-title-background"
  }, external_react_default.a.createElement("h1", {
    className: "content-page-header-title"
  }, props.title), external_react_default.a.createElement("p", {
    className: "content-page-header-author"
  }, props.author, ", ", dateFormat(props.publishDate, "fullDate")))), external_react_default.a.createElement("div", {
    className: "content-page-header-column"
  }, external_react_default.a.createElement("img", {
    src: props.image,
    className: "content-page-header-image"
  })));
});
// CONCATENATED MODULE: ./components/blogpage/BlogContent.js
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





var marked = __webpack_require__(16);

var BlogContent_BlogContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogContent, _React$Component);

  function BlogContent(props) {
    var _this;

    _classCallCheck(this, BlogContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlogContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "client", external_contentful_["createClient"]({
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
      var title = response.items[0].fields.title;
      var author = response.items[0].fields.author;
      author = author.fields.name;
      var description = response.items[0].fields.description;
      var publishDate = response.items[0].fields.publishDate;
      var slug = response.items[0].fields.slug;
      var tags = response.items[0].fields.tags;

      _this.setState({
        heroImg: heroImg,
        posts: response.items[0],
        markdown: marked(preFormatBody),
        title: title,
        author: author,
        publishDate: publishDate,
        slug: slug,
        tags: tags
      });

      console.log(assets, "THIS RES"); // return response.fields.heroImage.sys.id;
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(BlogHeader, {
        title: this.state.title,
        image: this.state.heroImg,
        author: this.state.author,
        description: this.state.description,
        publishDate: this.state.publishDate
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: this.state.markdown
        }
      })));
    }
  }]);

  return BlogContent;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/index/MyNavbar.js
var MyNavbar = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8);

// EXTERNAL MODULE: ./components/index/Fonts.js
var Fonts = __webpack_require__(5);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/BlogPage.js


function BlogPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlogPage_typeof = function _typeof(obj) { return typeof obj; }; } else { BlogPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlogPage_typeof(obj); }

function BlogPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlogPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlogPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlogPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlogPage_defineProperties(Constructor, staticProps); return Constructor; }

function BlogPage_possibleConstructorReturn(self, call) { if (call && (BlogPage_typeof(call) === "object" || typeof call === "function")) { return call; } return BlogPage_assertThisInitialized(self); }

function BlogPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlogPage_getPrototypeOf(o) { BlogPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlogPage_getPrototypeOf(o); }

function BlogPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlogPage_setPrototypeOf(subClass, superClass); }

function BlogPage_setPrototypeOf(o, p) { BlogPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlogPage_setPrototypeOf(o, p); }






var layoutStyle = {
  margin: 20,
  padding: 20
};

var BlogPage_default =
/*#__PURE__*/
function (_React$Component) {
  BlogPage_inherits(_default, _React$Component);

  function _default(props) {
    BlogPage_classCallCheck(this, _default);

    return BlogPage_possibleConstructorReturn(this, BlogPage_getPrototypeOf(_default).call(this, props));
  }

  BlogPage_createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(Fonts["a" /* default */])();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-2112424073"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2112424073"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2112424073"
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "2827969642",
        css: ["a{color:#000000;font-weight:600;}", "a:hover{color:#808080;}"]
      }), external_react_default.a.createElement(MyNavbar["a" /* default */], null), external_react_default.a.createElement("div", {
        className: "jsx-2112424073" + " " + "fonto"
      }, this.props.children), external_react_default.a.createElement(style_default.a, {
        styleId: "2076033930",
        css: [".fonto.jsx-2112424073{padding:20px;margin:20px;}"]
      }));
    }
  }]);

  return _default;
}(external_react_default.a.Component); // style={layoutStyle}



// EXTERNAL MODULE: ./index.css
var index = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/blogpage.js





var Content = Object(router_["withRouter"])(function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(BlogContent_BlogContent, {
    id: props.router.query.id
  }));
});

var blogpage_BlogPage = function BlogPage(props) {
  return external_react_default.a.createElement(BlogPage_default, null, external_react_default.a.createElement("div", {
    className: "fonty"
  }, external_react_default.a.createElement(Content, null)));
};

/* harmony default export */ var blogpage = __webpack_exports__["default"] = (blogpage_BlogPage);

/***/ })
/******/ ]);