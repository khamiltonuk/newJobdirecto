(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrePayPerson; });
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
/* harmony import */ var _components_StripeButton2_StripeButton2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(234);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);











var PrePayPerson =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PrePayPerson, _React$Component);

  function PrePayPerson(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PrePayPerson);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PrePayPerson).call(this, props));
    _this.state = {};
    _this.cancelPay = _this.cancelPay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // this.wantsToPay = this.wantsToPay.bind(this);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PrePayPerson, [{
    key: "cancelPay",
    value: function cancelPay(event) {
      var _this2 = this;

      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/cancelPay").then(function (resp) {
        _this2.props.navigation.navigate("/");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "prePayPics",
        alt: "",
        src: "personPost.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text"
      }, this.context.PrePayPerson.text1, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "textHighlight"
      }, this.context.PrePayPerson.text2), " ", this.context.PrePayPerson.text3, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "PrePayPersonButtons"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_StripeButton2_StripeButton2__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.cancelPay,
        className: "buttonBasic buttonOpaque prePay"
      }, this.context.PrePayPerson.button), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, this.context.contactInfo.contactInfo))));
    }
  }]);

  return PrePayPerson;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


PrePayPerson.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_9__["LanguageContext"];

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);






function StripeButton2(event) {
  var stripeKey, itemArray, successUrl, failUrl;

  if (window.location.hostname == "localhost") {
    stripeKey = "pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3";
    itemArray = "sku_Fdr59otEvaL6b7";
    successUrl = "//localhost:6543/#/personConfirm";
    failUrl = "//localhost:6543/#/StripeButton";
  } else {
    stripeKey = "pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ";
    itemArray = "sku_Fdanz5rW5EBFPX";
    successUrl = "//www.jobdirecto.com/personConfirm";
    failUrl = "//www.jobdirecto.com/StripeButton";
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]);
  var stripe = Stripe(stripeKey); // eslint-disable-line no-undef

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var handleClick = function handleClick() {
    stripe.redirectToCheckout({
      items: [{
        sku: itemArray,
        quantity: 1
      }],
      successUrl: window.location.protocol + successUrl,
      cancelUrl: window.location.protocol + failUrl
    }).then(function (result) {
      if (result.error) {
        setError(result.error.message);
      }
    });
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/wantsToPay").then(function (resp) {
      console.log("yes pay");
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "buttonBasic",
    onClick: handleClick
  }, context.PrePayPerson.buttonPay, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, error));
}

/* harmony default export */ __webpack_exports__["default"] = (StripeButton2);
StripeButton2.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJlUGF5UGVyc29uL1ByZVBheVBlcnNvbkNvbnRyb2xsZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0cmlwZUJ1dHRvbjIvU3RyaXBlQnV0dG9uMi5qc3giXSwibmFtZXMiOlsiUHJlUGF5UGVyc29uIiwicHJvcHMiLCJzdGF0ZSIsImNhbmNlbFBheSIsImJpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3AiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGUiLCJjb250ZXh0IiwidGV4dDEiLCJ0ZXh0MiIsInRleHQzIiwiYnV0dG9uIiwiY29udGFjdEluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlIiwiTGFuZ3VhZ2VDb250ZXh0IiwiU3RyaXBlQnV0dG9uMiIsInN0cmlwZUtleSIsIml0ZW1BcnJheSIsInN1Y2Nlc3NVcmwiLCJmYWlsVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZUNvbnRleHQiLCJzdHJpcGUiLCJTdHJpcGUiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbGljayIsInJlZGlyZWN0VG9DaGVja291dCIsIml0ZW1zIiwic2t1IiwicXVhbnRpdHkiLCJwcm90b2NvbCIsImNhbmNlbFVybCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uUGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsWTs7Ozs7QUFDakIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixnTkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsNEZBQWpCLENBSGUsQ0FJ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RUFBa0I7QUFDZEMsZ0JBQVEsQ0FBQ1EsTUFBTSxDQUFDVCxLQUFQLENBQWFVLE9BQWQsQ0FBUjtBQUNIO0FBQ0osS0FWTDtBQVlBeEMsU0FBSyxDQUFDQyxjQUFOO0FBQ0FDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCQyxJQUExQixDQUErQixVQUFBQyxJQUFJLEVBQUk7QUFDbkNvQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0gsS0FGRDtBQUdILEdBakJEOztBQW1CQSxTQUNJLHdFQUNJO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFdBQU8sRUFBRVY7QUFBekMsS0FDS3hCLE9BQU8sQ0FBQ2IsWUFBUixDQUFxQmdELFNBRDFCLEVBR0ksc0VBSEosQ0FESixFQU1JLHdFQUFNYixLQUFOLENBTkosQ0FESjtBQVVIOztBQUVjWiw0RUFBZjtBQUNBQSxhQUFhLENBQUNGLFdBQWQsR0FBNEJDLHlFQUE1QixDIiwiZmlsZSI6IjEwYzBjYTBmOTFjMTYxYjI0MzBhYzYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFN0cmlwZUJ1dHRvbjIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3RyaXBlQnV0dG9uMi9TdHJpcGVCdXR0b24yXCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlUGF5UGVyc29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXkgPSB0aGlzLmNhbmNlbFBheS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLndhbnRzVG9QYXkgPSB0aGlzLndhbnRzVG9QYXkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjYW5jZWxQYXkoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXhpb3MucG9zdChcIi9jYW5jZWxQYXlcIikudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZVBheVBpY3NcIiBhbHQ9XCJcIiBzcmM9XCJwZXJzb25Qb3N0LnBuZ1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuUHJlUGF5UGVyc29uLnRleHQxfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRIaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuUHJlUGF5UGVyc29uLnRleHQyfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LlByZVBheVBlcnNvbi50ZXh0M31cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVQYXlQZXJzb25CdXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdHJpcGVCdXR0b24yIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uQmFzaWMgYnV0dG9uT3BhcXVlIHByZVBheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuUHJlUGF5UGVyc29uLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmNvbnRleHQuY29udGFjdEluZm8uY29udGFjdEluZm99PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUHJlUGF5UGVyc29uLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIFN0cmlwZUJ1dHRvbjIoZXZlbnQpIHtcbiAgICBsZXQgc3RyaXBlS2V5LCBpdGVtQXJyYXksIHN1Y2Nlc3NVcmwsIGZhaWxVcmw7XG5cbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgICAgc3RyaXBlS2V5ID0gXCJwa190ZXN0Xzg2OGhhNTFnRVVIVDBQVGFGRk1YV0hZVDAwQWxQaldzWTNcIjtcbiAgICAgICAgaXRlbUFycmF5ID0gXCJza3VfRmRyNTlvdEV2YUw2YjdcIjtcbiAgICAgICAgc3VjY2Vzc1VybCA9IFwiLy9sb2NhbGhvc3Q6NjU0My8jL3BlcnNvbkNvbmZpcm1cIjtcbiAgICAgICAgZmFpbFVybCA9IFwiLy9sb2NhbGhvc3Q6NjU0My8jL1N0cmlwZUJ1dHRvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmlwZUtleSA9IFwicGtfbGl2ZV9MTFp4Nms3ZlhrMjZpbG9VNHFmNDZrdlcwMEROZjE1ZU9RXCI7XG4gICAgICAgIGl0ZW1BcnJheSA9IFwic2t1X0ZkYW56NXJXNUVCRlBYXCI7XG4gICAgICAgIHN1Y2Nlc3NVcmwgPSBcIi8vd3d3LmpvYmRpcmVjdG8uY29tL3BlcnNvbkNvbmZpcm1cIjtcbiAgICAgICAgZmFpbFVybCA9IFwiLy93d3cuam9iZGlyZWN0by5jb20vU3RyaXBlQnV0dG9uXCI7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcblxuICAgIGNvbnN0IHN0cmlwZSA9IFN0cmlwZShzdHJpcGVLZXkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc3RyaXBlXG4gICAgICAgICAgICAucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICAgICAgICAgICAgICBpdGVtczogW3sgc2t1OiBpdGVtQXJyYXksIHF1YW50aXR5OiAxIH1dLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NVcmw6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIHN1Y2Nlc3NVcmwsXG4gICAgICAgICAgICAgICAgY2FuY2VsVXJsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBmYWlsVXJsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKHJlc3VsdC5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBheGlvcy5wb3N0KFwiL3dhbnRzVG9QYXlcIikudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzIHBheVwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbkJhc2ljXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtjb250ZXh0LlByZVBheVBlcnNvbi5idXR0b25QYXl9XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj57ZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmlwZUJ1dHRvbjI7XG5TdHJpcGVCdXR0b24yLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==