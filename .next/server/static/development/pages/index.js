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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyStack.js":
/*!*******************************!*\
  !*** ./components/MyStack.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects/blog/components/MyStack.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "1em"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center",
      margin: "auto",
      fontWeight: 700,
      fontSize: "1em"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "My Stack")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      "margin-top": "1em"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Languages:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Typescript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Python"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "SQL"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "DevOps:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Serverless"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "AWS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "bash shell, linux"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3045612737" + " " + "pointdivs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737" + " " + "list-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Libraries:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Nextjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Expressjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Graphql (Apollo)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "more..")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      marginTop: "2em"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/resume",
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "View Resume"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "2em",
      display: "flex"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "auto",
      display: "flex"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginRight: "10px"
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "get in touch: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      fontWeight: 700
    },
    className: "jsx-3045612737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "jacobzadelman@gmail.com")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3045612737",
    css: ".buttons.jsx-3045612737{margin:20px;}.button-div.jsx-3045612737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.giffy.jsx-3045612737{max-width:100%;}.imaa.jsx-3045612737{max-width:100%;height:auto;}.pointdivs.jsx-3045612737{margin:auto;text-align:center;}li.jsx-3045612737{list-style-type:none;}.list-header.jsx-3045612737{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}.linky.jsx-3045612737{font-weight:400;color:blue;}.linky.jsx-3045612737:hover{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.linky-div.jsx-3045612737{color:#808080;}.linky-div.jsx-3045612737:hover{color:blue;-webkit-text-decoration:underline;text-decoration:underline;}li.jsx-3045612737{font-weight:300;font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9NeVN0YWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFTyxBQUd1QixBQUdDLEFBR0UsQUFHQSxBQUlILEFBSVMsQUFHTCxBQUlBLEFBSUEsQUFLRixBQUdILEFBSUssV0FIVSxDQXBDNUIsQUFhb0IsRUFvQnBCLENBM0JBLEFBR2MsQ0FXYyxBQUlmLEFBSWUsQUFZWixLQXZCaEIsTUFQQSxBQWVBLEdBWEEsQUEyQkEseUNBSkEsR0FsQ0EsRUFrQkEsQUFRaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvYmxvZy9jb21wb25lbnRzL015U3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IChcbiAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMWVtXCIgfX0+XG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEJvZHk+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE15IFN0YWNrXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZFRpdGxlPlxuXG4gICAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIm1hcmdpbi10b3BcIjogXCIxZW1cIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRkaXZzXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5MYW5ndWFnZXM6PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SmF2YXNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlR5cGVzY3JpcHQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5QeXRob248L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TUUw8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZGl2c1wiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+RGV2T3BzOjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlNlcnZlcmxlc3M8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BV1M8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5iYXNoIHNoZWxsLCBsaW51eDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGRpdnNcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkxpYnJhcmllczo8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5SZWFjdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5leHRqczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkV4cHJlc3NqczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkdyYXBocWwgKEFwb2xsbyk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5tb3JlLi48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjJlbVwiIH19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYWM5ZTFcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3Jlc3VtZVwiPlZpZXcgUmVzdW1lPC9hPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0+Z2V0IGluIHRvdWNoOiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+amFjb2J6YWRlbG1hbkBnbWFpbC5jb208L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgPC9DYXJkQm9keT5cbiAgICA8L0NhcmQ+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1kaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmdpZmZ5IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWEge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnBvaW50ZGl2cyB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3kge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmt5OmhvdmVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGlua3ktZGl2IHtcbiAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgfVxuICAgICAgICAubGlua3ktZGl2OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/blog/components/MyStack.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects/blog/components/Projects.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    style: {
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Project: SocialSlant.io"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginLeft: "auto",
      marginRight: 0
    },
    className: "jsx-2021109348" + " " + "linky-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://socialslant.io/login",
    className: "jsx-2021109348" + " " + "linky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "https://socialslant.io"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "giffy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/croppy.gif",
    className: "jsx-2021109348" + " " + "imaa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "block",
      margin: "auto",
      marginTop: "2.5em"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "test credentials:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "email=jacobzadelman@gmail.com"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 400,
      fontSize: "0.8em",
      color: "#808080"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "pass=jakeadelman")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "1.4em"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Technologies used in this project"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      "margin-top": "1em"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "pointdivs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348" + " " + "list-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Frontend:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Javascript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "React"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Nextjs"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2021109348" + " " + "pointdivs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348" + " " + "list-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Backend:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Typescript"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Graphql (Apollo)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Typeorm"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Python")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex"
    },
    className: "jsx-2021109348" + " " + "button-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://socialslant.io/login",
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Go to site"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/jakeadelman/react-apollo-sentiment",
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Frontend Code"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "auto"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      margin: "auto",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#2ac9e1"
    },
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/jakeadelman/type-graphql-server",
    className: "jsx-2021109348",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Backend Code"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2021109348",
    css: ".giffy.jsx-2021109348{max-width:100%;}.imaa.jsx-2021109348{max-width:100%;height:auto;}.pointdivs.jsx-2021109348{margin:auto;text-align:center;}li.jsx-2021109348{list-style-type:none;}.list-header.jsx-2021109348{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}.linky.jsx-2021109348{font-weight:400;color:blue;}.linky.jsx-2021109348:hover{font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.linky-div.jsx-2021109348{color:#808080;}.linky-div.jsx-2021109348:hover{color:blue;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SU8sQUFHMEIsQUFHQSxBQUlILEFBSVMsQUFHTCxBQUlBLEFBSUEsQUFLRixBQUdILFdBQ2UsQ0F2QlIsRUFvQnBCLENBM0JBLEFBR2MsQ0FXYyxBQUlmLEFBSWUsS0FYNUIsTUFQQSxBQWVBLEdBWEEseUNBdUJBLEtBaEJBLEFBUWlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkQm9keSxcbiAgQ2FyZFRpdGxlLFxuICBDYXJkU3VidGl0bGUsXG4gIEJ1dHRvblxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEJvZHk+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgPGRpdj5Qcm9qZWN0OiBTb2NpYWxTbGFudC5pbzwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmt5LWRpdlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua3lcIiBocmVmPVwiaHR0cHM6Ly9zb2NpYWxzbGFudC5pby9sb2dpblwiPlxuICAgICAgICAgICAgICBodHRwczovL3NvY2lhbHNsYW50LmlvXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpZmZ5XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2Nyb3BweS5naWZcIiBjbGFzc05hbWU9XCJpbWFhXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIuNWVtXCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjODA4MDgwXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgdGVzdCBjcmVkZW50aWFsczpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjODA4MDgwXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZW1haWw9amFjb2J6YWRlbG1hbkBnbWFpbC5jb21cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjODA4MDgwXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgcGFzcz1qYWtlYWRlbG1hblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxLjRlbVwiIH19PlxuICAgICAgICAgICAgVGVjaG5vbG9naWVzIHVzZWQgaW4gdGhpcyBwcm9qZWN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJtYXJnaW4tdG9wXCI6IFwiMWVtXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZGl2c1wiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+RnJvbnRlbmQ6PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SmF2YXNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlJlYWN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TmV4dGpzPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGRpdnNcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPkJhY2tlbmQ6PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+VHlwZXNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkdyYXBocWwgKEFwb2xsbyk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5UeXBlb3JtPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+UHl0aG9uPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZGl2XCIgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmFjOWUxXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc29jaWFsc2xhbnQuaW8vbG9naW5cIj5HbyB0byBzaXRlPC9hPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJhYzllMVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFrZWFkZWxtYW4vcmVhY3QtYXBvbGxvLXNlbnRpbWVudFwiPlxuICAgICAgICAgICAgICAgICAgRnJvbnRlbmQgQ29kZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcImF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmFjOWUxXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlYWRlbG1hbi90eXBlLWdyYXBocWwtc2VydmVyXCI+XG4gICAgICAgICAgICAgICAgICBCYWNrZW5kIENvZGVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZFRleHQ+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgIDwvQ2FyZD5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmdpZmZ5IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWEge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnBvaW50ZGl2cyB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAubGlua3kge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmt5OmhvdmVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGlua3ktZGl2IHtcbiAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgfVxuICAgICAgICAubGlua3ktZGl2OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/manx/projects/blog/components/Projects.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/index/Card.js":
/*!**********************************!*\
  !*** ./components/index/Card.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/manx/projects/blog/components/index/Card.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "button"))));
});

/***/ }),

/***/ "./components/index/Explain.js":
/*!*************************************!*\
  !*** ./components/index/Explain.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/manx/projects/blog/components/index/Explain.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "explain",
    className: "jsx-3804224205",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    id: "inside-explain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    id: "text-explain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    id: "paragraph-explain",
    className: "jsx-3804224205",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Hi! My name is Jake Adelman. I build products people love.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3804224205",
    css: "#paragraph-explain.jsx-3804224205{font-weight:600;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9pbmRleC9FeHBsYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCTyxBQUcyQixnQkFDUCxTQUNDLFVBQ1oiLCJmaWxlIjoiL1VzZXJzL21hbngvcHJvamVjdHMvYmxvZy9jb21wb25lbnRzL2luZGV4L0V4cGxhaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYXJkLFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZEJvZHksXG4gIENhcmRUaXRsZSxcbiAgQ2FyZFN1YnRpdGxlLFxuICBCdXR0b25cbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGlkPVwiZXhwbGFpblwiPlxuICAgIDxDYXJkPlxuICAgICAgPENhcmRCb2R5IGlkPVwiaW5zaWRlLWV4cGxhaW5cIj5cbiAgICAgICAgPENhcmRUZXh0IGlkPVwidGV4dC1leHBsYWluXCI+XG4gICAgICAgICAgPHAgaWQ9XCJwYXJhZ3JhcGgtZXhwbGFpblwiPlxuICAgICAgICAgICAgSGkhIE15IG5hbWUgaXMgSmFrZSBBZGVsbWFuLiBJIGJ1aWxkIHByb2R1Y3RzIHBlb3BsZSBsb3ZlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgPC9DYXJkPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAjcGFyYWdyYXBoLWV4cGxhaW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/manx/projects/blog/components/index/Explain.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/index/Fonts.js":
/*!***********************************!*\
  !*** ./components/index/Fonts.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

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

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./components/index/HomeDiv.js":
/*!*************************************!*\
  !*** ./components/index/HomeDiv.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/index/Card.js");
var _jsxFileName = "/Users/manx/projects/blog/components/index/HomeDiv.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    id: "containing-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Projects",
    subtitle: "my projects",
    text: "the text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Projects",
    subtitle: "my projects",
    text: "the text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Projects",
    subtitle: "my projects",
    text: "the text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/index/MyNavbar.js":
/*!**************************************!*\
  !*** ./components/index/MyNavbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyNavbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/manx/projects/blog/components/index/MyNavbar.js";


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
        className: "jsx-4050728211",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        color: "none",
        light: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/profile8.jpg",
        className: "jsx-4050728211" + " " + "navbar-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        href: "/resume",
        className: "navbar-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Resume")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
        href: "https://github.com/jakeadelman/",
        className: "navbar-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Github"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4050728211",
        css: "a.jsx-4050728211{color:rgba(0,0,0,0.5);}a.jsx-4050728211:hover{color:rgba(0,0,0,0.7);-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9pbmRleC9NeU5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBR3NDLEFBR0Esc0JBRjNCLEFBR3VCLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvbWFueC9wcm9qZWN0cy9ibG9nL2NvbXBvbmVudHMvaW5kZXgvTXlOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgXCIuLi8uLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgY29sb3I9XCJub25lXCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgICA8TmF2YmFyQnJhbmQ+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvcHJvZmlsZTguanBnXCIgY2xhc3NOYW1lPVwibmF2YmFyLWltZ1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0gLz5cbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gbmF2YmFyPlxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3Jlc3VtZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCI+XG4gICAgICAgICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFrZWFkZWxtYW4vXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHaXRodWJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8qIDxVbmNvbnRyb2xsZWREcm9wZG93biBuYXYgaW5OYXZiYXI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldD5cbiAgICAgICAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPk9wdGlvbiAxPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPk9wdGlvbiAyPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+UmVzZXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj4gKi9cbiJdfQ== */\n/*@ sourceURL=/Users/manx/projects/blog/components/index/MyNavbar.js */",
        __self: this
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

/***/ "./components/layouts/HomePage.js":
/*!****************************************!*\
  !*** ./components/layouts/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_MyNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index/MyNavbar */ "./components/index/MyNavbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_Fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index/Fonts */ "./components/index/Fonts.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/manx/projects/blog/components/layouts/HomePage.js";


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

var _default =
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
      Object(_index_Fonts__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-2827969642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-2827969642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2827969642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2827969642",
        css: "a{color:#000000;font-weight:600;}a:hover{color:#808080;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9sYXlvdXRzL0hvbWVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCMkIsQUFHMkIsQUFJQSxjQUhFLEFBSWxCLGdCQUhBIiwiZmlsZSI6Ii9Vc2Vycy9tYW54L3Byb2plY3RzL2Jsb2cvY29tcG9uZW50cy9sYXlvdXRzL0hvbWVQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vaW5kZXgvTXlOYXZiYXJcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvbnRzIGZyb20gXCIuLi9pbmRleC9Gb250c1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAyMCxcbiAgcGFkZGluZzogMjBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBGb250cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gc3R5bGU9e2xheW91dFN0eWxlfVxuIl19 */\n/*@ sourceURL=/Users/manx/projects/blog/components/layouts/HomePage.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-2827969642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component); // style={layoutStyle}




/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/HomePage */ "./components/layouts/HomePage.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_index_Explain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index/Explain */ "./components/index/Explain.js");
/* harmony import */ var _components_index_HomeDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index/HomeDiv */ "./components/index/HomeDiv.js");
/* harmony import */ var _components_index_MyNavbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index/MyNavbar */ "./components/index/MyNavbar.js");
/* harmony import */ var _components_index_Fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/Fonts */ "./components/index/Fonts.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_reveal_Rotate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Rotate */ "react-reveal/Rotate");
/* harmony import */ var react_reveal_Rotate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Rotate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Flip */ "react-reveal/Flip");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_MyStack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MyStack */ "./components/MyStack.js");
var _jsxFileName = "/Users/manx/projects/blog/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layouts_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "backgroundimg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_index_MyNavbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "main-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "inside-main-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_index_Explain__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_11___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyStack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Flip":
/*!************************************!*\
  !*** external "react-reveal/Flip" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Flip");

/***/ }),

/***/ "react-reveal/Rotate":
/*!**************************************!*\
  !*** external "react-reveal/Rotate" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Rotate");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map