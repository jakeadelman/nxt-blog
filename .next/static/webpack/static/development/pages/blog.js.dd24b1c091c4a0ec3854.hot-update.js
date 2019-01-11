webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/components/BlogMain.js":
/*!**************************************!*\
  !*** ./pages/components/BlogMain.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogMain; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/manx/projects/blog/pages/components/BlogMain.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BlogMain =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogMain, _React$Component);

  function BlogMain() {
    _classCallCheck(this, BlogMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogMain).apply(this, arguments));
  }

  _createClass(BlogMain, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        id: "blog-content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, eum duis habeo ornatus ex, te modus everti vivendum nec, ut iusto prompta noluisse mel. Eu sea dolorem vivendo, ea vim quis commune voluptatibus. Utamur minimum probatus eu per, ei his dolores placerat. Agam volumus vis an, ornatus epicuri honestatis no pro. Est omittam sensibus eleifend ea, qui cu suavitate voluptatum. Qui veri nusquam reprimique cu, nominati constituto vim ad. Vidit munere adipisci pri te, at alia persecuti persequeris vix. Vis ea vidit ullum, ei altera consetetur eam, ut aliquip atomorum vel. Sonet inermis placerat qui te. Pro persius facilisis gloriatur ea. An nulla homero vel, te vim iisque dissentiet, everti offendit at duo. Atomorum sadipscing eu vix, mea eu eruditi percipitur. Ne nam harum instructior, pri an alia saepe, ut sed quis elit malorum. Euismod inermis te vel, eu has sale doming dicunt, eos ut semper nominavi. Vel ea equidem lucilius, eum sint cotidieque an. Cum cu quas delectus mediocritatem. Quis vivendum concludaturque nam ad. Sit etiam decore regione ea, aperiam volumus disputationi eam eu, nec te esse nostrud delectus. Luptatum qualisque eum cu, no aeterno nonumes singulis vis. Everti debitis apeirian ex mel, ne veniam consequuntur vel, mel ei quod recusabo. Lobortis vituperata accommodare vis te, at ius nominavi vituperatoribus. Ius eu ipsum suavitate conceptam, inermis detraxit temporibus id duo. Quo cu adhuc iracundia. Omnesque conclusionemque vix ei, cu eos tempor invidunt. Homero menandri instructior in sed, tollit decore labitur vim ne."))));
    }
  }]);

  return BlogMain;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/BlogMain")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blog.js.dd24b1c091c4a0ec3854.hot-update.js.map