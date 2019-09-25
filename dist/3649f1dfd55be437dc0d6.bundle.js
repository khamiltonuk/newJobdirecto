(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);







function StripeButton3() {
  var stripeKey, itemArray, successUrl, failUrl;

  if (window.location.hostname == "localhost") {
    stripeKey = "pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3";
    itemArray = "plan_FerG4ShuM9GS8D";
    successUrl = "//localhost:8080/premiumSet";
    failUrl = "//localhost:8080/StripeButton";
  } else {
    stripeKey = "pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ";
    itemArray = "plan_Fer31qkbJx0UYm";
    successUrl = "//www.jobdirecto.com/premiumSet";
    failUrl = "//www.jobdirecto.com/StripeButton";
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"]);
  var stripe = Stripe(stripeKey);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var handleClick = function handleClick() {
    stripe.redirectToCheckout({
      items: [{
        plan: itemArray,
        quantity: 1
      }],
      successUrl: window.location.protocol + successUrl,
      cancelUrl: window.location.protocol + failUrl
    }).then(function (result) {
      if (result.error) {
        setError(result.error.message);
      }
    });
    console.log("someone wants to pay");
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/wantsToPay").then(function (resp) {
      console.log("yes pay");
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "buttonBasic buttonPremium",
    onClick: handleClick
  }, context.premiumModal.buyPremium, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, error));
}

/* harmony default export */ __webpack_exports__["default"] = (StripeButton3);
StripeButton3.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"];

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PremiumBuy; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_StripeButton3_StripeButton3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(198);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);









var PremiumBuy =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PremiumBuy, _React$Component);

  function PremiumBuy() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PremiumBuy);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PremiumBuy).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PremiumBuy, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text"
      }, " ", "Las cuentas premium por ahora solo cuestan 5 dolares al mes. Este precio probablemente subira pronto.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Solo las cuentas premium pueden cerrar sus anuncios. Pronto tambien podran editar sus anuncios y tendran un TOP post gratuito cada mes.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), "Puede cancelar su cuenta premium cuando desee"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "PrePayPersonButtons"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_StripeButton3_StripeButton3__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.cancelPay,
        className: "buttonBasic buttonOpaque prePay"
      }, this.context.PrePayPerson.button), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.context.contactInfo.contactInfo))));
    }
  }]);

  return PremiumBuy;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


PremiumBuy.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdHJpcGVCdXR0b24zL1N0cmlwZUJ1dHRvbjMuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9QcmVtaXVtQnV5L1ByZW1pdW1CdXlDb250cm9sbGVyLmpzeCJdLCJuYW1lcyI6WyJTdHJpcGVCdXR0b24zIiwic3RyaXBlS2V5IiwiaXRlbUFycmF5Iiwic3VjY2Vzc1VybCIsImZhaWxVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJMYW5ndWFnZUNvbnRleHQiLCJzdHJpcGUiLCJTdHJpcGUiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbGljayIsInJlZGlyZWN0VG9DaGVja291dCIsIml0ZW1zIiwicGxhbiIsInF1YW50aXR5IiwicHJvdG9jb2wiLCJjYW5jZWxVcmwiLCJ0aGVuIiwicmVzdWx0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwicmVzcCIsInByZW1pdW1Nb2RhbCIsImJ1eVByZW1pdW0iLCJjb250ZXh0VHlwZSIsIlByZW1pdW1CdXkiLCJjYW5jZWxQYXkiLCJQcmVQYXlQZXJzb24iLCJidXR0b24iLCJjb250YWN0SW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixNQUFJQyxTQUFKLEVBQWVDLFNBQWYsRUFBMEJDLFVBQTFCLEVBQXNDQyxPQUF0Qzs7QUFFQSxNQUFJQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLElBQTRCLFdBQWhDLEVBQTZDO0FBQ3pDTixhQUFTLEdBQUcsNENBQVo7QUFDQUMsYUFBUyxHQUFHLHFCQUFaO0FBQ0FDLGNBQVUsR0FBRyw2QkFBYjtBQUNBQyxXQUFPLEdBQUcsK0JBQVY7QUFDSCxHQUxELE1BS087QUFDSEgsYUFBUyxHQUFHLDRDQUFaO0FBQ0FDLGFBQVMsR0FBRyxxQkFBWjtBQUNBQyxjQUFVLEdBQUcsaUNBQWI7QUFDQUMsV0FBTyxHQUFHLG1DQUFWO0FBQ0g7O0FBRUQsTUFBTUksT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx5RUFBRCxDQUExQjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDWCxTQUFELENBQXJCOztBQWpCcUIsa0JBbUJLWSxzREFBUSxFQW5CYjtBQUFBO0FBQUEsTUFtQmRDLEtBbkJjO0FBQUEsTUFtQlBDLFFBbkJPOztBQXFCckIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkwsVUFBTSxDQUNETSxrQkFETCxDQUN3QjtBQUNoQkMsV0FBSyxFQUFFLENBQUM7QUFBRUMsWUFBSSxFQUFFakIsU0FBUjtBQUFtQmtCLGdCQUFRLEVBQUU7QUFBN0IsT0FBRCxDQURTO0FBRWhCakIsZ0JBQVUsRUFBRUUsTUFBTSxDQUFDQyxRQUFQLENBQWdCZSxRQUFoQixHQUEyQmxCLFVBRnZCO0FBR2hCbUIsZUFBUyxFQUFFakIsTUFBTSxDQUFDQyxRQUFQLENBQWdCZSxRQUFoQixHQUEyQmpCO0FBSHRCLEtBRHhCLEVBTUttQixJQU5MLENBTVUsVUFBQUMsTUFBTSxFQUFJO0FBQ1osVUFBSUEsTUFBTSxDQUFDVixLQUFYLEVBQWtCO0FBQ2RDLGdCQUFRLENBQUNTLE1BQU0sQ0FBQ1YsS0FBUCxDQUFhVyxPQUFkLENBQVI7QUFDSDtBQUNKLEtBVkw7QUFZQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUMsU0FBSyxDQUFDQyxjQUFOO0FBQ0FDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCUixJQUExQixDQUErQixVQUFBUyxJQUFJLEVBQUk7QUFDbkNOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSCxLQUZEO0FBR0gsR0FsQkQ7O0FBb0JBLFNBQ0ksd0VBQ0k7QUFBUSxhQUFTLEVBQUMsMkJBQWxCO0FBQThDLFdBQU8sRUFBRVg7QUFBdkQsS0FDS1IsT0FBTyxDQUFDeUIsWUFBUixDQUFxQkMsVUFEMUIsRUFFSSxzRUFGSixDQURKLEVBS0ksd0VBQU1wQixLQUFOLENBTEosQ0FESjtBQVNIOztBQUVjZCw0RUFBZjtBQUNBQSxhQUFhLENBQUNtQyxXQUFkLEdBQTRCekIseUVBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7SUFHcUIwQixVOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQ0wsYUFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQ0ssR0FETCwyR0FJSSxzRUFKSixFQUtJLHNFQUxKLDZJQVNJLHNFQVRKLEVBVUksc0VBVkosa0RBREosRUFjSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLDJEQUFDLCtFQUFELE9BREosRUFHSTtBQUNJLGVBQU8sRUFBRSxLQUFLQyxTQURsQjtBQUVJLGlCQUFTLEVBQUM7QUFGZCxTQUlLLEtBQUs3QixPQUFMLENBQWE4QixZQUFiLENBQTBCQyxNQUovQixDQUhKLEVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxzRUFBSSxLQUFLL0IsT0FBTCxDQUFhZ0MsV0FBYixDQUF5QkEsV0FBN0IsQ0FESixDQVRKLENBZEosQ0FESjtBQThCSDs7OztFQWhDbUNDLDRDQUFLLENBQUNDLFM7OztBQW1DOUNOLFVBQVUsQ0FBQ0QsV0FBWCxHQUF5QnpCLG9GQUF6QixDIiwiZmlsZSI6IjM2NDlmMWRmZDU1YmU0MzdkYzBkNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZhaWwgfSBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIFN0cmlwZUJ1dHRvbjMoKSB7XG4gICAgbGV0IHN0cmlwZUtleSwgaXRlbUFycmF5LCBzdWNjZXNzVXJsLCBmYWlsVXJsO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHN0cmlwZUtleSA9IFwicGtfdGVzdF84NjhoYTUxZ0VVSFQwUFRhRkZNWFdIWVQwMEFsUGpXc1kzXCI7XG4gICAgICAgIGl0ZW1BcnJheSA9IFwicGxhbl9GZXJHNFNodU05R1M4RFwiO1xuICAgICAgICBzdWNjZXNzVXJsID0gXCIvL2xvY2FsaG9zdDo4MDgwL3ByZW1pdW1TZXRcIjtcbiAgICAgICAgZmFpbFVybCA9IFwiLy9sb2NhbGhvc3Q6ODA4MC9TdHJpcGVCdXR0b25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpcGVLZXkgPSBcInBrX2xpdmVfTExaeDZrN2ZYazI2aWxvVTRxZjQ2a3ZXMDBETmYxNWVPUVwiO1xuICAgICAgICBpdGVtQXJyYXkgPSBcInBsYW5fRmVyMzFxa2JKeDBVWW1cIjtcbiAgICAgICAgc3VjY2Vzc1VybCA9IFwiLy93d3cuam9iZGlyZWN0by5jb20vcHJlbWl1bVNldFwiO1xuICAgICAgICBmYWlsVXJsID0gXCIvL3d3dy5qb2JkaXJlY3RvLmNvbS9TdHJpcGVCdXR0b25cIjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaXBlID0gU3RyaXBlKHN0cmlwZUtleSk7XG5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc3RyaXBlXG4gICAgICAgICAgICAucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICAgICAgICAgICAgICBpdGVtczogW3sgcGxhbjogaXRlbUFycmF5LCBxdWFudGl0eTogMSB9XSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzVXJsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBzdWNjZXNzVXJsLFxuICAgICAgICAgICAgICAgIGNhbmNlbFVybDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgZmFpbFVybFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzb21lb25lIHdhbnRzIHRvIHBheVwiKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXhpb3MucG9zdChcIi93YW50c1RvUGF5XCIpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllcyBwYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25CYXNpYyBidXR0b25QcmVtaXVtXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtjb250ZXh0LnByZW1pdW1Nb2RhbC5idXlQcmVtaXVtfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaXBlQnV0dG9uMztcblN0cmlwZUJ1dHRvbjMuY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3RyaXBlQnV0dG9uMyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdHJpcGVCdXR0b24zL1N0cmlwZUJ1dHRvbjNcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pdW1CdXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIExhcyBjdWVudGFzIHByZW1pdW0gcG9yIGFob3JhIHNvbG8gY3Vlc3RhbiA1IGRvbGFyZXMgYWwgbWVzLlxuICAgICAgICAgICAgICAgICAgICBFc3RlIHByZWNpbyBwcm9iYWJsZW1lbnRlIHN1YmlyYSBwcm9udG8uXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgU29sbyBsYXMgY3VlbnRhcyBwcmVtaXVtIHB1ZWRlbiBjZXJyYXIgc3VzIGFudW5jaW9zLiBQcm9udG9cbiAgICAgICAgICAgICAgICAgICAgdGFtYmllbiBwb2RyYW4gZWRpdGFyIHN1cyBhbnVuY2lvcyB5IHRlbmRyYW4gdW4gVE9QIHBvc3RcbiAgICAgICAgICAgICAgICAgICAgZ3JhdHVpdG8gY2FkYSBtZXMuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgUHVlZGUgY2FuY2VsYXIgc3UgY3VlbnRhIHByZW1pdW0gY3VhbmRvIGRlc2VlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlUGF5UGVyc29uQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8U3RyaXBlQnV0dG9uMyAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uQmFzaWMgYnV0dG9uT3BhcXVlIHByZVBheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuUHJlUGF5UGVyc29uLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmNvbnRleHQuY29udGFjdEluZm8uY29udGFjdEluZm99PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUHJlbWl1bUJ1eS5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=