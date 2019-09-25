(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PremiumSet; });
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










var PremiumSet =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PremiumSet, _React$Component);

  function PremiumSet(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PremiumSet);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PremiumSet).call(this, props));
    _this.state = {};
    _this.setPremium = _this.setPremium.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getUserStatus = _this.getUserStatus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  } //haz que el id aparezca aqui, el fb id


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PremiumSet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getUserStatus();
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/user").then(function (result) {
        _this2.setState({
          userId: result.data.id
        }, function () {
          console.log("id in state?", _this2.state.userId);
        });
      });
    }
  }, {
    key: "getUserStatus",
    value: function getUserStatus() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/getUserStatus").then(function (result) {
        _this3.setState({
          userStatus: result.data
        }, function () {});
      });
    }
  }, {
    key: "setPremium",
    value: function setPremium() {
      var _this4 = this;

      if (this.state.userStatus !== true) {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/setPremium").then(function (result) {
          _this4.props.navigation.navigate("/");
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text"
      }, " ", this.context.premiumSet.title, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "PrePayPersonButtons"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setPremium,
        className: "buttonBasic buttonPremium"
      }, this.context.premiumSet.activate), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "contactInfo"
      }, this.context.contactInfo.contactInfo))));
    }
  }]);

  return PremiumSet;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


PremiumSet.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJlbWl1bVNldC9QcmVtaXVtU2V0Q29udHJvbGxlci5qc3giXSwibmFtZXMiOlsiUHJlbWl1bVNldCIsInByb3BzIiwic3RhdGUiLCJzZXRQcmVtaXVtIiwiYmluZCIsImdldFVzZXJTdGF0dXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInVzZXJJZCIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyU3RhdHVzIiwicG9zdCIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0ZSIsImNvbnRleHQiLCJwcmVtaXVtU2V0IiwidGl0bGUiLCJhY3RpdmF0ZSIsImNvbnRhY3RJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZSIsIkxhbmd1YWdlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFHcUJBLFU7Ozs7O0FBQ2pCLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOE1BQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsNEZBQWxCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQiw0RkFBckI7QUFKZTtBQUtsQixHLENBQ0Q7Ozs7O3dDQUVvQjtBQUFBOztBQUNoQixXQUFLQyxhQUFMO0FBQ0FDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVSxPQUFWLEVBQW1CQyxJQUFuQixDQUF3QixVQUFBQyxNQUFNLEVBQUk7QUFDOUIsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsZ0JBQU0sRUFBRUYsTUFBTSxDQUFDRyxJQUFQLENBQVlDO0FBQXRCLFNBQWQsRUFBMEMsWUFBTTtBQUM1Q0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsTUFBSSxDQUFDYixLQUFMLENBQVdTLE1BQXZDO0FBQ0gsU0FGRDtBQUdILE9BSkQ7QUFLSDs7O29DQUVlO0FBQUE7O0FBQ1pMLGtEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBVixFQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQUMsTUFBTSxFQUFJO0FBQ3ZDLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVNLG9CQUFVLEVBQUVQLE1BQU0sQ0FBQ0c7QUFBckIsU0FBZCxFQUEyQyxZQUFNLENBRWhELENBRkQ7QUFHSCxPQUpEO0FBS0g7OztpQ0FFWTtBQUFBOztBQUNULFVBQUksS0FBS1YsS0FBTCxDQUFXYyxVQUFYLEtBQTBCLElBQTlCLEVBQW9DO0FBRWhDVixvREFBSyxDQUFDVyxJQUFOLENBQVcsYUFBWCxFQUEwQlQsSUFBMUIsQ0FBK0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3JDLGdCQUFJLENBQUNSLEtBQUwsQ0FBV2lCLFVBQVgsQ0FBc0JDLFFBQXRCLENBQStCLEdBQS9CO0FBQ0gsU0FGRDtBQUdIO0FBQ0o7Ozs2QkFFUTtBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUNLLEdBREwsRUFFSyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLEtBRjdCLEVBR0ksc0VBSEosQ0FESixFQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFDSSxlQUFPLEVBQUUsS0FBS25CLFVBRGxCO0FBRUksaUJBQVMsRUFBQztBQUZkLFNBR0ssS0FBS2lCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkUsUUFIN0IsQ0FESixFQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FDSyxLQUFLSCxPQUFMLENBQWFJLFdBQWIsQ0FBeUJBLFdBRDlCLENBREosQ0FOSixDQU5KLENBREo7QUFxQkg7Ozs7RUF6RG1DQyw0Q0FBSyxDQUFDQyxTOzs7QUE0RDlDMUIsVUFBVSxDQUFDMkIsV0FBWCxHQUF5QkMsb0ZBQXpCLEMiLCJmaWxlIjoiNmViZmEwNjRhNmExNGFmNjM0OGNmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pdW1TZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnNldFByZW1pdW0gPSB0aGlzLnNldFByZW1pdW0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyU3RhdHVzID0gdGhpcy5nZXRVc2VyU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIC8vaGF6IHF1ZSBlbCBpZCBhcGFyZXpjYSBhcXVpLCBlbCBmYiBpZFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlclN0YXR1cygpO1xuICAgICAgICBheGlvcy5nZXQoXCIvdXNlclwiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcklkOiByZXN1bHQuZGF0YS5pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZCBpbiBzdGF0ZT9cIiwgdGhpcy5zdGF0ZS51c2VySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVzZXJTdGF0dXMoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRVc2VyU3RhdHVzXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyU3RhdHVzOiByZXN1bHQuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0UHJlbWl1bSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlclN0YXR1cyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBheGlvcy5wb3N0KFwiL3NldFByZW1pdW1cIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucHJlbWl1bVNldC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlUGF5UGVyc29uQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldFByZW1pdW19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25CYXNpYyBidXR0b25QcmVtaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnByZW1pdW1TZXQuYWN0aXZhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250YWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuY29udGFjdEluZm8uY29udGFjdEluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QcmVtaXVtU2V0LmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==