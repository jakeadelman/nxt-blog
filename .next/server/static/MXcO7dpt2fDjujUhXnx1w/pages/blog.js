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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Flip");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 15 */,
/* 16 */,
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/index/MyNavbar.js
var MyNavbar = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8);

// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blog/BlogItem.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BlogItem_Img = function Img(props) {
  return external_react_default.a.createElement(external_reactstrap_["Col"], {
    className: "img-col"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3741608744" + " " + "blogpage-img"
  }, external_react_default.a.createElement("img", {
    src: props.img,
    className: "jsx-3741608744"
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "3741608744",
    css: [".blogpage-img.jsx-3741608744{max-width:10%;padding:0;margin:0;}"]
  }));
};

var BlogItem_PostLink = function PostLink(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id)
  }, external_react_default.a.createElement("a", null, props.title)));
};

var BlogItem_BlogItem =
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
      return external_react_default.a.createElement(external_reactstrap_["Container"], {
        className: "blog-row-div"
      }, external_react_default.a.createElement(external_reactstrap_["Row"], {
        className: "blogrow"
      }, this.state.img ? external_react_default.a.createElement(BlogItem_Img, {
        img: this.state.img,
        className: "blog-col-img"
      }) : null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        className: "blogcol"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-1831674152"
      }, this.props.post.fields.title)), external_react_default.a.createElement(style_default.a, {
        styleId: "1831674152",
        css: [".blogpage-img.jsx-1831674152{float:left;margin-right:1em;}", ".blog-col-img.jsx-1831674152{max-width:20%;}"]
      })), external_react_default.a.createElement(external_reactstrap_["Row"], {
        className: "desc-row"
      }, external_react_default.a.createElement("p", null, this.props.post.fields.description)));
    }
  }]);

  return BlogItem;
}(external_react_default.a.Component); // <div>
//             {this.state.fields ? (
//               <PostLink
//                 title={this.state.fields.title}
//                 id={this.state.sys.id}
//               />
//             ) : null}
//           </div>



// EXTERNAL MODULE: ./components/index/Fonts.js
var Fonts = __webpack_require__(5);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/BlogArticlesPage.js


function BlogArticlesPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlogArticlesPage_typeof = function _typeof(obj) { return typeof obj; }; } else { BlogArticlesPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlogArticlesPage_typeof(obj); }

function BlogArticlesPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlogArticlesPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlogArticlesPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlogArticlesPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlogArticlesPage_defineProperties(Constructor, staticProps); return Constructor; }

function BlogArticlesPage_possibleConstructorReturn(self, call) { if (call && (BlogArticlesPage_typeof(call) === "object" || typeof call === "function")) { return call; } return BlogArticlesPage_assertThisInitialized(self); }

function BlogArticlesPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlogArticlesPage_getPrototypeOf(o) { BlogArticlesPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlogArticlesPage_getPrototypeOf(o); }

function BlogArticlesPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlogArticlesPage_setPrototypeOf(subClass, superClass); }

function BlogArticlesPage_setPrototypeOf(o, p) { BlogArticlesPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlogArticlesPage_setPrototypeOf(o, p); }






var layoutStyle = {
  margin: 20,
  padding: 20
};

var BlogArticlesPage_default =
/*#__PURE__*/
function (_React$Component) {
  BlogArticlesPage_inherits(_default, _React$Component);

  function _default(props) {
    BlogArticlesPage_classCallCheck(this, _default);

    return BlogArticlesPage_possibleConstructorReturn(this, BlogArticlesPage_getPrototypeOf(_default).call(this, props));
  }

  BlogArticlesPage_createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(Fonts["a" /* default */])();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-1124859661"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-1124859661"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-1124859661"
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "2827969642",
        css: ["a{color:#000000;font-weight:600;}", "a:hover{color:#808080;}"]
      }), external_react_default.a.createElement(MyNavbar["a" /* default */], null), external_react_default.a.createElement("div", {
        className: "jsx-1124859661" + " " + "fonto"
      }, this.props.children), external_react_default.a.createElement(style_default.a, {
        styleId: "564996750",
        css: [".fonto.jsx-1124859661{padding:20px;margin:auto;max-width:50vw;}"]
      }));
    }
  }]);

  return _default;
}(external_react_default.a.Component); // style={layoutStyle}



// CONCATENATED MODULE: ./components/index/BlogArticleCard.js




var BlogArticleCard_PostLink = function PostLink(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id)
  }, external_react_default.a.createElement("a", null, props.title)));
};

/* harmony default export */ var BlogArticleCard = (function (props) {
  return external_react_default.a.createElement(external_reactstrap_["Card"], {
    className: "blog-article-card"
  }, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
    className: "home-blog-article-title"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blogpage?title=".concat(props.title) + "&id=".concat(props.id)
  }, props.title), external_react_default.a.createElement("div", {
    className: "home-date"
  }, "- ", props.date)), external_react_default.a.createElement(external_reactstrap_["CardSubtitle"], null, props.description), external_react_default.a.createElement(external_reactstrap_["CardText"], null, props.text)));
});
// CONCATENATED MODULE: ./components/index/BlogCard2.js
function BlogCard2_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlogCard2_typeof = function _typeof(obj) { return typeof obj; }; } else { BlogCard2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlogCard2_typeof(obj); }

function BlogCard2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlogCard2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlogCard2_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlogCard2_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlogCard2_defineProperties(Constructor, staticProps); return Constructor; }

function BlogCard2_possibleConstructorReturn(self, call) { if (call && (BlogCard2_typeof(call) === "object" || typeof call === "function")) { return call; } return BlogCard2_assertThisInitialized(self); }

function BlogCard2_getPrototypeOf(o) { BlogCard2_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlogCard2_getPrototypeOf(o); }

function BlogCard2_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlogCard2_setPrototypeOf(subClass, superClass); }

function BlogCard2_setPrototypeOf(o, p) { BlogCard2_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlogCard2_setPrototypeOf(o, p); }

function BlogCard2_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var formatDate = __webpack_require__(12); // const BlogCard = props => (
//   <div id="explain">
//     <Card>
//       <CardBody id="inside-explain">
//         <CardText>
//           <p>From the Blog</p>
//         </CardText>
//       </CardBody>
//     </Card>
//   </div>
// );


var BlogCard2_default =
/*#__PURE__*/
function (_React$Component) {
  BlogCard2_inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    BlogCard2_classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BlogCard2_possibleConstructorReturn(this, (_getPrototypeOf2 = BlogCard2_getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(BlogCard2_assertThisInitialized(BlogCard2_assertThisInitialized(_this)), "state", {
      posts: []
    });

    _defineProperty(BlogCard2_assertThisInitialized(BlogCard2_assertThisInitialized(_this)), "client", external_contentful_["createClient"]({
      space: "mtpe83yxj293",
      accessToken: "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
    }));

    _defineProperty(BlogCard2_assertThisInitialized(BlogCard2_assertThisInitialized(_this)), "fetchPosts", function () {
      return _this.client.getEntries();
    });

    _defineProperty(BlogCard2_assertThisInitialized(BlogCard2_assertThisInitialized(_this)), "setPosts", function (response) {
      _this.setState({
        posts: response.items
      });

      console.log(response);
      return response.items;
    });

    return _this;
  }

  BlogCard2_createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "blog-cards-homepage"
      }, external_react_default.a.createElement("h1", {
        className: "home-blog-title-2"
      }, "Latest"), this.state.posts.map(function (each, i) {
        return external_react_default.a.createElement(BlogArticleCard, {
          title: each.fields.title,
          description: each.fields.description,
          id: each.sys.id,
          date: formatDate(each.fields.publishDate, "mediumDate"),
          key: i
        });
      }));
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-reveal/Flip"
var Flip_ = __webpack_require__(10);
var Flip_default = /*#__PURE__*/__webpack_require__.n(Flip_);

// CONCATENATED MODULE: ./pages/blog.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blog_Blog; });
function blog_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { blog_typeof = function _typeof(obj) { return typeof obj; }; } else { blog_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return blog_typeof(obj); }

function blog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function blog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function blog_createClass(Constructor, protoProps, staticProps) { if (protoProps) blog_defineProperties(Constructor.prototype, protoProps); if (staticProps) blog_defineProperties(Constructor, staticProps); return Constructor; }

function blog_possibleConstructorReturn(self, call) { if (call && (blog_typeof(call) === "object" || typeof call === "function")) { return call; } return blog_assertThisInitialized(self); }

function blog_getPrototypeOf(o) { blog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return blog_getPrototypeOf(o); }

function blog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) blog_setPrototypeOf(subClass, superClass); }

function blog_setPrototypeOf(o, p) { blog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return blog_setPrototypeOf(o, p); }

function blog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var blog_Blog =
/*#__PURE__*/
function (_React$Component) {
  blog_inherits(Blog, _React$Component);

  function Blog() {
    var _getPrototypeOf2;

    var _this;

    blog_classCallCheck(this, Blog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = blog_possibleConstructorReturn(this, (_getPrototypeOf2 = blog_getPrototypeOf(Blog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    blog_defineProperty(blog_assertThisInitialized(blog_assertThisInitialized(_this)), "state", {
      posts: []
    });

    blog_defineProperty(blog_assertThisInitialized(blog_assertThisInitialized(_this)), "client", external_contentful_["createClient"]({
      space: "mtpe83yxj293",
      accessToken: "5c8709b65bf6e0cb67c9eb2df1fe49882917410230ca4f437430518ed4ed5957"
    }));

    blog_defineProperty(blog_assertThisInitialized(blog_assertThisInitialized(_this)), "fetchPosts", function () {
      return _this.client.getEntries();
    });

    blog_defineProperty(blog_assertThisInitialized(blog_assertThisInitialized(_this)), "setPosts", function (response) {
      _this.setState({
        posts: response.items
      });
    });

    return _this;
  }

  blog_createClass(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BlogArticlesPage_default, null, external_react_default.a.createElement("br", null), external_react_default.a.createElement(Flip_default.a, {
        left: true
      }, external_react_default.a.createElement(BlogCard2_default, null)));
    }
  }]);

  return Blog;
}(external_react_default.a.Component); // <div className="boxy">
//           {this.state.posts.map((each, i) => (
//             <BlogItem post={each} key={i} className="boxy" />
//           ))}
//         </div>




/***/ })
/******/ ]);