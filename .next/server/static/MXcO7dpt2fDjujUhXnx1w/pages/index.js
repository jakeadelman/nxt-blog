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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Flip");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Rotate");

/***/ }),
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8);

// EXTERNAL MODULE: ./index.css
var index = __webpack_require__(7);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/index/MyNavbar.js
var MyNavbar = __webpack_require__(4);

// EXTERNAL MODULE: ./components/index/Fonts.js
var Fonts = __webpack_require__(5);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layouts/HomePage.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var layoutStyle = {
  margin: 20,
  padding: 20
};

var HomePage_default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(Fonts["a" /* default */])();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-2827969642"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2827969642"
      }), external_react_default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2827969642"
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "2827969642",
        css: ["a{color:#000000;font-weight:600;}", "a:hover{color:#808080;}"]
      }), external_react_default.a.createElement("div", {
        className: "jsx-2827969642"
      }, this.props.children));
    }
  }]);

  return _default;
}(external_react_default.a.Component); // style={layoutStyle}



// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Projects.js



/* harmony default export */ var Projects = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-2021109348"
  }, external_react_default.a.createElement(external_reactstrap_["Card"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
    style: {
      display: "flex"
    }
  }, external_react_default.a.createElement("div", {
    className: "jsx-2021109348"
  }, "Project: SocialSlant.io"), external_react_default.a.createElement("div", {
    style: {
      marginLeft: "auto",
      marginRight: 0
    },
    className: "jsx-2021109348" + " " + "linky-div"
  }, external_react_default.a.createElement("a", {
    href: "https://socialslant.io/login",
    className: "jsx-2021109348" + " " + "linky"
  }, "https://socialslant.io"))), external_react_default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "giffy"
  }, external_react_default.a.createElement("img", {
    src: "/static/croppy.gif",
    className: "jsx-2021109348" + " " + "imaa"
  })), external_react_default.a.createElement(external_reactstrap_["CardText"], null, external_react_default.a.createElement("div", {
    style: {
      display: "block",
      margin: "auto",
      marginTop: "2.5em"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348"
  }, "test credentials:"), external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348"
  }, "email=jacobzadelman@gmail.com"), external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348"
  }, "pass=jakeadelman")), external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "1.4em"
    },
    className: "jsx-2021109348"
  }, "Technologies used in this project"), external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      "margin-top": "1em"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "pointdivs"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("li", {
    className: "jsx-2021109348" + " " + "list-header"
  }, "Frontend:"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Javascript"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "React"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Nextjs"))), external_react_default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "pointdivs"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("li", {
    className: "jsx-2021109348" + " " + "list-header"
  }, "Backend:"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Typescript"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Graphql (Apollo)"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Typeorm"), external_react_default.a.createElement("li", {
    className: "jsx-2021109348"
  }, "Python")))), external_react_default.a.createElement("div", {
    style: {
      display: "flex"
    },
    className: "jsx-2021109348" + " " + "button-div"
  }, external_react_default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("button", {
    style: {
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("a", {
    href: "https://socialslant.io/login",
    className: "jsx-2021109348"
  }, "Go to site"))), external_react_default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("a", {
    href: "https://github.com/jakeadelman/react-apollo-sentiment",
    className: "jsx-2021109348"
  }, "Frontend Code"))), external_react_default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348"
  }, external_react_default.a.createElement("a", {
    href: "https://github.com/jakeadelman/type-graphql-server",
    className: "jsx-2021109348"
  }, "Backend Code"))))))), external_react_default.a.createElement(style_default.a, {
    styleId: "2021109348",
    css: [".giffy.jsx-2021109348{max-width:100%;}", ".imaa.jsx-2021109348{max-width:100%;height:auto;}", ".pointdivs.jsx-2021109348{margin:auto;text-align:center;}", "li.jsx-2021109348{list-style-type:none;}", ".list-header.jsx-2021109348{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}", ".linky.jsx-2021109348{font-weight:400;color:blue;}", ".linky.jsx-2021109348:hover{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}", ".linky-div.jsx-2021109348{color:#808080;}", ".linky-div.jsx-2021109348:hover{color:blue;-webkit-text-decoration:underline;text-decoration:underline;}"]
  }));
});
// CONCATENATED MODULE: ./components/index/Explain.js



/* harmony default export */ var Explain = (function () {
  return external_react_default.a.createElement("div", {
    id: "explain",
    className: "jsx-3804224205"
  }, external_react_default.a.createElement(external_reactstrap_["Card"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], {
    id: "inside-explain"
  }, external_react_default.a.createElement(external_reactstrap_["CardText"], {
    id: "text-explain"
  }, external_react_default.a.createElement("p", {
    id: "paragraph-explain",
    className: "jsx-3804224205"
  }, "Hi! My name is Jake Adelman. I build products people love.")))), external_react_default.a.createElement(style_default.a, {
    styleId: "3804224205",
    css: ["#paragraph-explain.jsx-3804224205{font-weight:600;margin:0;padding:0;}"]
  }));
});
// CONCATENATED MODULE: ./components/index/Card.js


/* harmony default export */ var Card = (function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Card"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], null, props.title), external_react_default.a.createElement(external_reactstrap_["CardSubtitle"], null, props.subtitle), external_react_default.a.createElement(external_reactstrap_["CardText"], null, props.text), external_react_default.a.createElement(external_reactstrap_["Button"], null, "button"))));
});
// CONCATENATED MODULE: ./components/index/HomeDiv.js



/* harmony default export */ var HomeDiv = (function () {
  return external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(external_reactstrap_["Row"], {
    id: "containing-row"
  }, external_react_default.a.createElement(external_reactstrap_["Col"], {
    xs: "auto"
  }, external_react_default.a.createElement(Card, {
    title: "Projects",
    subtitle: "my projects",
    text: "the text"
  })), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xs: "auto"
  }, external_react_default.a.createElement(Card, {
    title: "Projects",
    subtitle: "my projects",
    text: "the text"
  })), external_react_default.a.createElement(external_reactstrap_["Col"], {
    xs: "auto"
  }, external_react_default.a.createElement(Card, {
    title: "Projects",
    subtitle: "my projects",
    text: "the text"
  }))));
});
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(18);

// EXTERNAL MODULE: external "react-reveal/Rotate"
var Rotate_ = __webpack_require__(19);

// EXTERNAL MODULE: external "react-reveal/Flip"
var Flip_ = __webpack_require__(10);
var Flip_default = /*#__PURE__*/__webpack_require__.n(Flip_);

// CONCATENATED MODULE: ./components/MyStack.js



/* harmony default export */ var MyStack = (function (props) {
  return external_react_default.a.createElement("div", {
    style: {
      marginTop: "1em"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement(external_reactstrap_["Card"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
    style: {
      display: "flex"
    }
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      margin: "auto",
      fontWeight: 700,
      fontSize: "1em"
    },
    className: "jsx-3045612737"
  }, "My Stack")), external_react_default.a.createElement(external_reactstrap_["CardText"], null, external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      "margin-top": "1em"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header"
  }, "Languages:"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Javascript"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Typescript"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Python"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "SQL"))), external_react_default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header"
  }, "DevOps:"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Serverless"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "AWS"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "bash shell, linux"))), external_react_default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header"
  }, "Libraries:"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "React"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Nextjs"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Expressjs"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "Graphql (Apollo)"), external_react_default.a.createElement("li", {
    className: "jsx-3045612737"
  }, "more..")))), external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      marginTop: "2em"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("a", {
    href: "/resume",
    className: "jsx-3045612737"
  }, "View Resume"))), external_react_default.a.createElement("div", {
    style: {
      marginTop: "2em",
      display: "flex"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("div", {
    style: {
      margin: "auto",
      display: "flex"
    },
    className: "jsx-3045612737"
  }, external_react_default.a.createElement("div", {
    style: {
      marginRight: "10px"
    },
    className: "jsx-3045612737"
  }, "get in touch: "), external_react_default.a.createElement("div", {
    style: {
      fontWeight: 700
    },
    className: "jsx-3045612737"
  }, "jacobzadelman@gmail.com")))))), external_react_default.a.createElement(style_default.a, {
    styleId: "3045612737",
    css: [".buttons.jsx-3045612737{margin:20px;}", ".button-div.jsx-3045612737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".giffy.jsx-3045612737{max-width:100%;}", ".imaa.jsx-3045612737{max-width:100%;height:auto;}", ".pointdivs.jsx-3045612737{margin:auto;text-align:center;}", "li.jsx-3045612737{list-style-type:none;}", ".list-header.jsx-3045612737{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}", ".linky.jsx-3045612737{font-weight:400;color:blue;}", ".linky.jsx-3045612737:hover{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}", ".linky-div.jsx-3045612737{color:#808080;}", ".linky-div.jsx-3045612737:hover{color:blue;-webkit-text-decoration:underline;text-decoration:underline;}", "li.jsx-3045612737{font-weight:300;font-size:1em;}"]
  }));
});
// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }















var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index() {
    pages_classCallCheck(this, Index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).apply(this, arguments));
  }

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(HomePage_default, null, external_react_default.a.createElement("div", {
        id: "backgroundimg"
      }, external_react_default.a.createElement(MyNavbar["a" /* default */], {
        className: "navbar"
      }), external_react_default.a.createElement("div", {
        id: "main-div"
      }, external_react_default.a.createElement("div", {
        className: "inside-main-div"
      }, external_react_default.a.createElement(Flip_default.a, {
        left: true
      }, external_react_default.a.createElement(Explain, null)), external_react_default.a.createElement(Flip_default.a, {
        left: true
      }, external_react_default.a.createElement(Projects, null)), external_react_default.a.createElement(Flip_default.a, {
        left: true
      }, external_react_default.a.createElement(MyStack, null))))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);