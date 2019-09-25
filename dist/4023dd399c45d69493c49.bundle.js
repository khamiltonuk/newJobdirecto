(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginController; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);










var LoginController =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LoginController, _React$Component);

  function LoginController(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginController);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginController).call(this, props));
    _this.state = {};
    _this.facebookLogin = _this.facebookLogin.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.error;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginController, [{
    key: "facebookLogin",
    value: function facebookLogin() {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/loginFacebook");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "heading-1"
      }, this.context.login.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text"
      }, this.context.login.text), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "facebookContainer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        id: "facebook-button",
        href: "/loginFacebook"
      }, this.context.login.button))), "  ");
    }
  }]);

  return LoginController;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


LoginController.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTG9naW4vTG9naW5Db250cm9sbGVyLmpzeCJdLCJuYW1lcyI6WyJMb2dpbkNvbnRyb2xsZXIiLCJwcm9wcyIsInN0YXRlIiwiZmFjZWJvb2tMb2dpbiIsImJpbmQiLCJlcnJvciIsImF4aW9zIiwiZ2V0IiwiY29udGV4dCIsImxvZ2luIiwidGl0bGUiLCJ0ZXh0IiwiYnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZSIsIkxhbmd1YWdlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFJcUJBLGU7Ozs7O0FBQ2pCLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsbU5BQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsNEZBQXJCO0FBQ0EsVUFBS0MsS0FBTDtBQUplO0FBS2xCOzs7O29DQUVlO0FBQ1pDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBVjtBQUVIOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FBMkIsS0FBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CQyxLQUE5QyxDQUZKLEVBR0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBcUIsS0FBS0YsT0FBTCxDQUFhQyxLQUFiLENBQW1CRSxJQUF4QyxDQUhKLEVBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwyRUFBVztBQUFHLFVBQUUsRUFBQyxpQkFBTjtBQUF3QixZQUFJLEVBQUM7QUFBN0IsU0FBZ0QsS0FBS0gsT0FBTCxDQUFhQyxLQUFiLENBQW1CRyxNQUFuRSxDQUFYLENBREosQ0FKSixPQURKO0FBU0g7Ozs7RUF2QndDQyw0Q0FBSyxDQUFDQyxTOzs7QUEwQm5EZCxlQUFlLENBQUNlLFdBQWhCLEdBQThCQyxvRkFBOUIsQyIsImZpbGUiOiI0MDIzZGQzOTljNDVkNjk0OTNjNDkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmZhY2Vib29rTG9naW4gPSB0aGlzLmZhY2Vib29rTG9naW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lcnJvcjtcbiAgICB9XG5cbiAgICBmYWNlYm9va0xvZ2luKCkge1xuICAgICAgICBheGlvcy5nZXQoXCIvbG9naW5GYWNlYm9va1wiKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy0xXCI+e3RoaXMuY29udGV4dC5sb2dpbi50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57dGhpcy5jb250ZXh0LmxvZ2luLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjZWJvb2tDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgID48YSBpZD1cImZhY2Vib29rLWJ1dHRvblwiIGhyZWY9XCIvbG9naW5GYWNlYm9va1wiID57dGhpcy5jb250ZXh0LmxvZ2luLmJ1dHRvbn08L2E+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxvZ2luQ29udHJvbGxlci5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=