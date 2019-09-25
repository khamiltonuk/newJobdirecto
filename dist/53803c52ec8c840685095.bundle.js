(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrePayJob; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Language_LanguageContext_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _components_StripeButton_StripeButton_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(227);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var PrePayJob =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PrePayJob, _React$Component);

  function PrePayJob(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PrePayJob);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PrePayJob).call(this, props));
    _this.state = {};
    _this.cancelUrgency = _this.cancelUrgency.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)); // this.wantsToPay = this.wantsToPay.bind(this);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PrePayJob, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/publishJob", {
        jobData: {
          data: _objectSpread({}, this.props.navigation.state, {
            active: false,
            urgent: false
          })
        }
      }).then(function (resp) {
        if (resp.data.success) {
          axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/createTransaction");
        }
      });
    }
  }, {
    key: "cancelUrgency",
    value: function cancelUrgency(event) {
      var _this2 = this;

      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/cancelUrgency").then(function (resp) {
        _this2.props.navigation.navigate("/JobConfirm");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "heading-1"
      }, this.context.jobPayPage.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "prePayPics",
        src: "topPost.png",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text"
      }, this.context.jobPayPage.text1, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), this.context.jobPayPage.text2, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "urgentCheckedButtons"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_StripeButton_StripeButton_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.cancelUrgency,
        className: "buttonBasic buttonOpaque"
      }, this.context.jobPayPage.buttonNO), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, this.context.contactInfo.contactInfo))));
    }
  }]);

  return PrePayJob;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


PrePayJob.contextType = _components_Language_LanguageContext_jsx__WEBPACK_IMPORTED_MODULE_9__["LanguageContext"];

/***/ }),

/***/ 227:
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






function StripeButton(props) {
  var stripeKey, itemArray, successUrl, failUrl;

  if (window.location.hostname == "localhost") {
    stripeKey = "pk_test_868ha51gEUHT0PTaFFMXWHYT00AlPjWsY3";
    itemArray = "sku_Fdr59otEvaL6b7";
    successUrl = "//localhost:8080/jobConfirm";
    failUrl = "//localhost:8080/StripeButton";
  } else {
    stripeKey = "pk_live_LLZx6k7fXk26iloU4qf46kvW00DNf15eOQ";
    itemArray = "sku_FdasqwNe7sxEJj";
    successUrl = "//www.jobdirecto.com/jobConfirm";
    failUrl = "//www.jobdirecto.com/StripeButton";
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]);
  var stripe = Stripe(stripeKey);

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
      cancelUrl: window.location.protocol + failUrl,
      clientReferenceId: props.transactionId
    }).then(function (result) {
      if (result.error) {
        setError(result.error.message);
      }
    });
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/wantsToPay").then(function (resp) {});
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "buttonBasic",
    onClick: handleClick
  }, context.jobPayPage.buttonYES, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, error));
}

/* harmony default export */ __webpack_exports__["default"] = (StripeButton);
StripeButton.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUHJlUGF5Sm9iL1ByZVBheUpvYkNvbnRyb2xsZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0cmlwZUJ1dHRvbi9TdHJpcGVCdXR0b24uanN4Il0sIm5hbWVzIjpbIlByZVBheUpvYiIsInByb3BzIiwic3RhdGUiLCJjYW5jZWxVcmdlbmN5IiwiYmluZCIsImF4aW9zIiwicG9zdCIsImpvYkRhdGEiLCJkYXRhIiwibmF2aWdhdGlvbiIsImFjdGl2ZSIsInVyZ2VudCIsInRoZW4iLCJyZXNwIiwic3VjY2VzcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0ZSIsImNvbnRleHQiLCJqb2JQYXlQYWdlIiwidGl0bGUiLCJ0ZXh0MSIsInRleHQyIiwiYnV0dG9uTk8iLCJjb250YWN0SW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGUiLCJMYW5ndWFnZUNvbnRleHQiLCJTdHJpcGVCdXR0b24iLCJzdHJpcGVLZXkiLCJpdGVtQXJyYXkiLCJzdWNjZXNzVXJsIiwiZmFpbFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJ1c2VDb250ZXh0Iiwic3RyaXBlIiwiU3RyaXBlIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2xpY2siLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJpdGVtcyIsInNrdSIsInF1YW50aXR5IiwicHJvdG9jb2wiLCJjYW5jZWxVcmwiLCJjbGllbnRSZWZlcmVuY2VJZCIsInRyYW5zYWN0aW9uSWQiLCJyZXN1bHQiLCJtZXNzYWdlIiwiYnV0dG9uWUVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBSXFCQSxTOzs7OztBQUNqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDZNQUFNQSxLQUFOO0FBQ0Es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LE1BbUJYQyxRQW5CVzs7QUFxQnpCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJMLFVBQU0sQ0FDRE0sa0JBREwsQ0FDd0I7QUFDaEJDLFdBQUssRUFBRSxDQUFDO0FBQUVDLFdBQUcsRUFBRWYsU0FBUDtBQUFrQmdCLGdCQUFRLEVBQUU7QUFBNUIsT0FBRCxDQURTO0FBR2hCZixnQkFBVSxFQUFFRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JhLFFBQWhCLEdBQTJCaEIsVUFIdkI7QUFLaEJpQixlQUFTLEVBQUVmLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmEsUUFBaEIsR0FBMkJmLE9BTHRCO0FBTWhCaUIsdUJBQWlCLEVBQUNqRCxLQUFLLENBQUNrRDtBQU5SLEtBRHhCLEVBU0t2QyxJQVRMLENBU1UsVUFBQXdDLE1BQU0sRUFBSTtBQUNaLFVBQUlBLE1BQU0sQ0FBQ1gsS0FBWCxFQUFrQjtBQUNkQyxnQkFBUSxDQUFDVSxNQUFNLENBQUNYLEtBQVAsQ0FBYVksT0FBZCxDQUFSO0FBQ0g7QUFDSixLQWJMO0FBZUF0QyxTQUFLLENBQUNDLGNBQU47QUFDQVgsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsRUFBMEJNLElBQTFCLENBQStCLFVBQUFDLElBQUksRUFBSSxDQUFFLENBQXpDO0FBQ0gsR0FsQkQ7O0FBb0JBLFNBQ0ksd0VBQ0k7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBZ0MsV0FBTyxFQUFFOEI7QUFBekMsS0FDS3pCLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQm1DLFNBRHhCLEVBRUksc0VBRkosQ0FESixFQUtJLHdFQUFNYixLQUFOLENBTEosQ0FESjtBQVNIOztBQUVjWiwyRUFBZjtBQUNBQSxZQUFZLENBQUNGLFdBQWIsR0FBMkJDLHlFQUEzQixDIiwiZmlsZSI6IjUzODAzYzUyZWM4Yzg0MDY4NTA5NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHQuanN4XCI7XG5pbXBvcnQgU3RyaXBlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N0cmlwZUJ1dHRvbi9TdHJpcGVCdXR0b24uanN4XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVQYXlKb2IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmNhbmNlbFVyZ2VuY3kgPSB0aGlzLmNhbmNlbFVyZ2VuY3kuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy53YW50c1RvUGF5ID0gdGhpcy53YW50c1RvUGF5LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgYXhpb3MucG9zdChcIi9wdWJsaXNoSm9iXCIsIHtqb2JEYXRhOntkYXRhOnsuLi50aGlzLnByb3BzLm5hdmlnYXRpb24uc3RhdGUsYWN0aXZlOmZhbHNlLHVyZ2VudDpmYWxzZX19fSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvY3JlYXRlVHJhbnNhY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbmNlbFVyZ2VuY3koZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXhpb3MucG9zdChcIi9jYW5jZWxVcmdlbmN5XCIpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRpb24ubmF2aWdhdGUoXCIvSm9iQ29uZmlybVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0xXCI+e3RoaXMuY29udGV4dC5qb2JQYXlQYWdlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmVQYXlQaWNzXCIgc3JjPVwidG9wUG9zdC5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JQYXlQYWdlLnRleHQxfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iUGF5UGFnZS50ZXh0Mn1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidXJnZW50Q2hlY2tlZEJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0cmlwZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jYW5jZWxVcmdlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uQmFzaWMgYnV0dG9uT3BhcXVlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JQYXlQYWdlLmJ1dHRvbk5PfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuY29udGV4dC5jb250YWN0SW5mby5jb250YWN0SW5mb308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QcmVQYXlKb2IuY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHRcIjtcblxuZnVuY3Rpb24gU3RyaXBlQnV0dG9uKHByb3BzKSB7XG4gICAgXG4gICAgbGV0IHN0cmlwZUtleSwgaXRlbUFycmF5LCBzdWNjZXNzVXJsLCBmYWlsVXJsO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHN0cmlwZUtleSA9IFwicGtfdGVzdF84NjhoYTUxZ0VVSFQwUFRhRkZNWFdIWVQwMEFsUGpXc1kzXCI7XG4gICAgICAgIGl0ZW1BcnJheSA9IFwic2t1X0ZkcjU5b3RFdmFMNmI3XCI7XG4gICAgICAgIHN1Y2Nlc3NVcmwgPSBcIi8vbG9jYWxob3N0OjgwODAvam9iQ29uZmlybVwiO1xuICAgICAgICBmYWlsVXJsID0gXCIvL2xvY2FsaG9zdDo4MDgwL1N0cmlwZUJ1dHRvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmlwZUtleSA9IFwicGtfbGl2ZV9MTFp4Nms3ZlhrMjZpbG9VNHFmNDZrdlcwMEROZjE1ZU9RXCI7XG4gICAgICAgIGl0ZW1BcnJheSA9IFwic2t1X0ZkYXNxd05lN3N4RUpqXCI7XG4gICAgICAgIHN1Y2Nlc3NVcmwgPSBcIi8vd3d3LmpvYmRpcmVjdG8uY29tL2pvYkNvbmZpcm1cIjtcbiAgICAgICAgZmFpbFVybCA9IFwiLy93d3cuam9iZGlyZWN0by5jb20vU3RyaXBlQnV0dG9uXCI7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdHJpcGUgPSBTdHJpcGUoc3RyaXBlS2V5KTtcblxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzdHJpcGVcbiAgICAgICAgICAgIC5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBbeyBza3U6IGl0ZW1BcnJheSwgcXVhbnRpdHk6IDEgfV0sXG5cbiAgICAgICAgICAgICAgICBzdWNjZXNzVXJsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBzdWNjZXNzVXJsLFxuXG4gICAgICAgICAgICAgICAgY2FuY2VsVXJsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBmYWlsVXJsLFxuICAgICAgICAgICAgICAgIGNsaWVudFJlZmVyZW5jZUlkOnByb3BzLnRyYW5zYWN0aW9uSWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IocmVzdWx0LmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF4aW9zLnBvc3QoXCIvd2FudHNUb1BheVwiKS50aGVuKHJlc3AgPT4ge30pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25CYXNpY1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICB7Y29udGV4dC5qb2JQYXlQYWdlLmJ1dHRvbllFU31cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj57ZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmlwZUJ1dHRvbjtcblN0cmlwZUJ1dHRvbi5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=