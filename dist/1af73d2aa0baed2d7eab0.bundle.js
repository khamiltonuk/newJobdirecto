(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BodyComponent_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _BodyComponent_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BodyComponent_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _LanguageButton_LanguageButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(195);










var BodyComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BodyComponent, _Component);

  function BodyComponent(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BodyComponent);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BodyComponent).call(this, props));
    _this.state = {
      languages: _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["languages"].spanish
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BodyComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {//this.props.toggleLanguage();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          attrs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LanguageButton_LanguageButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        changeLanguage: this.props.toggleLanguage
      }), children);
    }
  }]);

  return BodyComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Body":"_2dPxxdBWV6GOmV1CIZwdpW"};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);









var LanguageButton =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LanguageButton, _React$Component);

  function LanguageButton() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LanguageButton);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LanguageButton).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LanguageButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "translateButtonContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        id: "translateButton",
        onClick: this.props.changeLanguage
      }, this.context.currentLanguage === "Español" ? "English" : "Español"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "dissapear"
      }, " ", this.context.currentLanguage === "Español" ? moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale("es") : moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale("en")));
    }
  }]);

  return LanguageButton;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

LanguageButton.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__["LanguageContext"];
/* harmony default export */ __webpack_exports__["default"] = (LanguageButton);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteModal; });
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
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);










var DeleteModal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DeleteModal, _React$Component);

  function DeleteModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DeleteModal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DeleteModal).call(this, props));
    _this.state = {};
    _this.deleteJob = _this.deleteJob.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.deletePersonPost = _this.deletePersonPost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.deleteService = _this.deleteService.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.goPremium = _this.goPremium.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DeleteModal, [{
    key: "deleteJob",
    value: function deleteJob() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/deleteJob/" + this.props.id).then(function (result) {
        _this2.props.getJobs();
      });
      this.props.close();
    }
  }, {
    key: "goPremium",
    value: function goPremium() {
      this.props.close();
      this.props.showPremium();
    }
  }, {
    key: "deletePersonPost",
    value: function deletePersonPost() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/deletePersonPost/" + this.props.id).then(function (result) {
        _this3.props.getPeople();
      });
      this.props.close();
    }
  }, {
    key: "deleteService",
    value: function deleteService() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/deleteService/" + this.props.id).then(function (result) {
        _this4.props.getServices();
      });
      this.props.close();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: this.props.close,
        className: "backgroundBlock"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "deleteModal"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "heading-1 deleteModalTitle"
      }, this.context.deleteModal.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "deleteButtons"
      }, this.props.userstatus == "true" && this.props.postType === "job" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "deleteButton ",
        onClick: this.deleteJob
      }, this.context.deleteModal.yes), this.props.userstatus == "true" && this.props.postType === "person" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "deleteButton ",
        onClick: this.deletePersonPost
      }, this.context.deleteModal.yes), this.props.userstatus !== "true" && this.props.postType === "job" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "deleteButton ",
        onClick: this.goPremium
      }, this.context.deleteModal.yes), this.props.userstatus !== "true" && this.props.postType === "person" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "deleteButton ",
        onClick: this.goPremium
      }, this.context.deleteModal.yes), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "deleteButton ",
        onClick: this.props.close
      }, "No"))));
    }
  }]);

  return DeleteModal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


DeleteModal.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PremiumModal; });
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
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _StripeButton3_StripeButton3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(198);









var PremiumModal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PremiumModal, _React$Component);

  function PremiumModal() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PremiumModal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PremiumModal).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PremiumModal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.props.close,
        className: "backgroundBlock"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "deleteModal"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "heading-1 deleteModalTitle"
      }, this.context.premiumModal.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StripeButton3_StripeButton3__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.props.close,
        className: "buttonOpaque premiumDeny"
      }, this.context.premiumModal.deny))));
    }
  }]);

  return PremiumModal;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


PremiumModal.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"];

/***/ }),

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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalPeople; });
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);









var ModalPeople =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ModalPeople, _React$Component);

  function ModalPeople(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ModalPeople);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ModalPeople).call(this, props));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ModalPeople, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/getPeopleDetails/" + this.props.id).then(function (result) {
        console.log("result of details pip: ", result);

        _this2.setState({
          peopleData: result.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.peopleData) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.props.close,
        className: "backgroundBlock"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.props.close,
        className: "modalButton"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-close"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: "modalPeople"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        id: "jobDetails"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personname)), this.state.peopleData.data.personstatus === "seeksJob" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.status1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personskill)), this.state.peopleData.data.personstatus === "offersService" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.status2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personskill)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.experience), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personexperience)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.schedule), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personschedule)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.area), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personarea)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.phone), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personnumber)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.personModal.extraInfo), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.peopleData.data.personextrainfo)))));
    }
  }]);

  return ModalPeople;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);


ModalPeople.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_7__["LanguageContext"];

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalJob; });
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
/* harmony import */ var _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);











var ModalJob =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ModalJob, _React$Component);

  function ModalJob(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ModalJob);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ModalJob).call(this, props));
    _this.state = {
      pleaseLogin: false,
      reportedAlready: false,
      thanksForReporting: false,
      whoHasReported: ""
    };
    _this.reportPost = _this.reportPost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getJobDetails = _this.getJobDetails.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.whoHasReported = _this.whoHasReported.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ModalJob, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.whoHasReported();
      this.getJobDetails();
    }
  }, {
    key: "whoHasReported",
    value: function whoHasReported() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/whoHasReported/" + this.props.id).then(function (results) {
        _this2.setState({
          whoHasReported: "blah"
        });
      });
    }
  }, {
    key: "getJobDetails",
    value: function getJobDetails() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/getJobDetails/" + this.props.id).then(function (result) {
        _this3.setState({
          jobData: result.data
        });
      });
    }
  }, {
    key: "reportPost",
    value: function reportPost() {
      var _this4 = this;

      if (!this.props.clickerid) {
        this.setState({
          pleaseLogin: true
        });
        return;
      }

      if (this.state.jobData.data.whoreported && this.state.jobData.data.whoreported.includes(this.props.clickerid)) {
        this.setState({
          reportedAlready: true,
          thanksForReporting: false
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/reportPost/" + this.props.id).then(function (result) {
          _this4.setState({
            thanksForReporting: true
          });

          _this4.getJobDetails();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.state.jobData) {
        return null;
      }

      console.log("state in render", this.state);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: this.props.close,
        className: "backgroundBlock"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.props.close,
        className: "modalButton"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fa fa-close"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        className: this.state.jobData.data.urgent === "true" ? "urgentModal" : "modal"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        id: "title",
        className: "heading-1"
      }, "JobDirecto", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "heading-1"
      }, this.context.main.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "heading-1 website"
      }, "(www.jobdirecto.com)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        id: "jobDetails"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.restname)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.position), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.jobtype)), "\\", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.payment), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.hourpay)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.typePay), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.typepay)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.schedule), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.schedule)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.address), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.address)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.area), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.area)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.phone), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.phone)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.Contact), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.contact)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.extraInfo), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.extrainfo), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null))), this.props.facebookid !== null && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modalStarDiv"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "star",
        src: "star.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "toolTipModalText"
      }, this.context.main.tooltip)), this.props.whoReported && this.props.whoReported.data && this.props.whoReported.data.find(function (x) {
        return x.id === _this5.props.id;
      }).whoreported && this.props.whoReported.data.find(function (x) {
        return x.id === _this5.props.id;
      }).whoreported.length > 10 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modalFlagDiv"
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "flag",
        src: "flag.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text"
      }, this.context.main.tooltip2)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "redFlagDiv"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text"
      }, "Si cree que este anuncio es indebido, porfavor reportelo")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "reportContainer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "reportButton",
        onClick: this.reportPost
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "reportDiv"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text reportText"
      }, "Reportar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "flag.png",
        className: "redFlag"
      }))), this.state.thanksForReporting == true && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "redReportText"
      }, this.context.modalJob.thanksForReporting), this.state.pleaseLogin == true && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "redReportText"
      }, this.context.modalJob.pleaseLogin, " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "callToLogin",
        to: "/login"
      }, this.context.modalJob.pleaseLogin2, "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "star starJobForm",
        src: "star.png"
      }))), this.state.reportedAlready == true && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "redReportText"
      }, this.context.modalJob.reportedAlready)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null)));
    }
  }]);

  return ModalJob;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);


ModalJob.contextType = _Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobsController; });
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
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Body_BodyComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(193);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13);
/* harmony import */ var _components_DeleteModal_DeleteModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(196);
/* harmony import */ var _components_PremiumModal_PremiumModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(197);
/* harmony import */ var _components_ModalPeople_ModalPeople__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(207);
/* harmony import */ var _components_ModalJob_ModalJob__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(208);



















var ReactGA = __webpack_require__(209);

var JobsController =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(JobsController, _React$Component);

  function JobsController(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, JobsController);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(JobsController).call(this, props));
    _this.state = {
      addClass: false,
      showModalJob: false,
      showPremiumModal: false,
      showModalPeople: false,
      user: "true",
      showDeleteModal: false
    };
    _this.handleChangeArea = _this.handleChangeArea.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.showModalPeople = _this.showModalPeople.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.hideModalJob = _this.hideModalJob.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.hideModalPeople = _this.hideModalPeople.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.urgentJobInterval = _this.urgentJobInterval.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.trackCreatecloseJob = _this.trackCreateJob.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.showDeleteModal = _this.showDeleteModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.hideDeleteModal = _this.hideDeleteModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.hidePremiumModal = _this.hidePremiumModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getJobs = _this.getJobs.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getUserStatus = _this.getUserStatus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.getPeople = _this.getPeople.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.logOut = _this.logOut.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.showPremium = _this.showPremium.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(JobsController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getJobs();
      this.getPeople();
      this.getUserStatus();
      return axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: 'get',
        url: '/user',
        params: {},
        withCredentials: true
      }).then(function (result) {
        _this2.setState({
          user: result.data
        }, function () {});
      });
    }
  }, {
    key: "handleChangeArea",
    value: function handleChangeArea(event) {
      var _this$setState;

      this.setState((_this$setState = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_this$setState, event.target.name, event.target.value), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_this$setState, "userSelectionArea", event.target.value), _this$setState));
    }
  }, {
    key: "getJobs",
    value: function getJobs() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/getJobs").then(function (result) {
        _this3.setState({
          jobData: result.data
        }, function () {});
      });
    }
  }, {
    key: "getUserStatus",
    value: function getUserStatus() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/getUserStatus").then(function (result) {
        if (result.data) {
          _this4.setState({
            userStatus: result.data
          }, function () {});
        }
      });
    }
  }, {
    key: "getPeople",
    value: function getPeople() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/getPeople").then(function (result) {
        _this5.setState({
          peopleData: result.data
        }, function () {});
      });
    }
  }, {
    key: "logOut",
    value: function logOut() {
      return axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: 'get',
        url: '/logout',
        params: {},
        withCredentials: true
      }).then(function (result) {
        window.location.reload();
      });
    }
  }, {
    key: "lockScroll",
    value: function lockScroll() {
      this.setState({
        addClass: !this.state.addClass
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.props.navigation.navigate("/postType");
    }
  }, {
    key: "showModalJob",
    value: function showModalJob(event, id_user) {
      document.body.classList.add('lockBackground');
      this.setState({
        showModalJob: true,
        selectedJobId: event,
        id_user: id_user
      });
    }
  }, {
    key: "showPremium",
    value: function showPremium() {
      document.body.classList.add('lockBackground');
      this.setState({
        showPremiumModal: true
      });
    }
  }, {
    key: "showDeleteModal",
    value: function showDeleteModal(event, id, posttype, userstatus) {
      event.preventDefault();
      document.body.classList.add('lockBackground');
      event.stopPropagation();
      this.setState({
        showDeleteModal: true,
        selectedJobId: id,
        posttype: posttype
      });
    }
  }, {
    key: "showModalPeople",
    value: function showModalPeople(event) {
      document.body.classList.add('lockBackground');
      this.setState({
        showModalPeople: true,
        selectedPersonId: event
      });
    }
  }, {
    key: "hideModalJob",
    value: function hideModalJob() {
      document.body.classList.remove('lockBackground');
      this.setState({
        showModalJob: false
      });
    }
  }, {
    key: "hideDeleteModal",
    value: function hideDeleteModal() {
      document.body.classList.remove('lockBackground');
      this.setState({
        showDeleteModal: false
      }, function () {});
    }
  }, {
    key: "hidePremiumModal",
    value: function hidePremiumModal() {
      document.body.classList.remove('lockBackground');
      this.setState({
        showPremiumModal: false
      }, function () {});
    }
  }, {
    key: "hideModalPeople",
    value: function hideModalPeople() {
      document.body.classList.remove('lockBackground');
      this.setState({
        showModalPeople: false
      });
    }
  }, {
    key: "trackCreateJob",
    value: function trackCreateJob(event) {
      ga("send", "event", {
        eventCategory: "button",
        eventAction: "createJob",
        eventLabel: event.target.href
      });
    }
  }, {
    key: "urgentJobInterval",
    value: function urgentJobInterval(created_at) {
      // job timestamp in miliseconds
      var timeStampMili = new Date(created_at); // now in miliseconds

      var nowMili = Date.now(); // urgent job interval in hours

      var jobIntervalHours = 48; // job interval in miliseconds

      var jobIntervalMili = jobIntervalHours * 60 * 60 * 1000; //condition

      var intervalOp = nowMili - timeStampMili < jobIntervalMili;
      return intervalOp;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var bodyClass = ["bodyClass"];
      var date = new Date(); // si no pongo esto y estoy logeado, nada funciona, porque?

      if (!this.state.jobData || !this.state.peopleData) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Body_BodyComponent__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"], {
        toggleLanguage: this.props.navigation.toggleLanguage
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "itAll"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        id: "title",
        className: "heading-1"
      }, "JobDirecto", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-1"
      }, this.context.main.title)), !this.state.user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        to: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "buttonsAuth"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "star starMini",
        src: "star.png"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "authText"
      }, this.context.main.login))), this.state.user && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "buttonsAuth",
        onClick: this.logOut
      }, this.context.main.logout), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null)), this.state.showModalJob && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ModalJob_ModalJob__WEBPACK_IMPORTED_MODULE_17__["default"], {
        id: this.state.selectedJobId,
        close: this.hideModalJob,
        id_user: this.state.id_user,
        clickerid: this.state.user.id,
        whoReported: this.state.jobData
      }), this.state.showDeleteModal && this.state.userStatus && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_DeleteModal_DeleteModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: this.state.selectedJobId,
        userstatus: this.state.userStatus.data,
        close: this.hideDeleteModal,
        showPremium: this.showPremium,
        "delete": this.deletePost,
        postType: this.state.posttype,
        getJobs: this.getJobs,
        getPeople: this.getPeople
      }), this.state.showPremiumModal && this.state.userStatus && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PremiumModal_PremiumModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        close: this.hidePremiumModal
      }), this.state.showModalPeople && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ModalPeople_ModalPeople__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: this.state.selectedPersonId,
        close: this.hideModalPeople
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "buttonsAndFilters"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "buttonAndWelcome"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "buttonCreatePost",
        className: "buttonBasic",
        type: "submit",
        value: this.context.main.createPost,
        onClick: this.handleSubmit
      }), this.state.user && this.state.userStatus && this.state.userStatus.data && this.state.userStatus.data !== "true" && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        id: "welcomeText",
        className: "text"
      }, this.context.main.welcome, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), " ", this.state.user.name, " "), this.state.user && this.state.userStatus && this.state.userStatus.data && this.state.userStatus.data == "true" && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        id: "welcomeText",
        className: "text"
      }, this.context.main.welcome, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), " ", this.state.user.name, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), this.context.main.premium)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        onSubmit: this.handleSubmit
      }, "onSubmit", this.trackCreateJob), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        className: "filter",
        type: "text",
        name: "area",
        onChange: this.handleChangeArea
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: ""
      }, "\xA0\xA0", this.context.main.filterDefault), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Manhattan"
      }, "\xA0\xA0Manhattan"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Brooklyn"
      }, "\xA0\xA0Brooklyn"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Queens"
      }, "\xA0\xA0Queens"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Bronx"
      }, "\xA0\xA0Bronx"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Staten Island"
      }, "\xA0\xA0Staten Island"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "Otra area en NY"
      }, "\xA0\xA0", this.context.main.filterOtherArea)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "allPosts"
      }, !this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (data.urgent === "true" && _this6.urgentJobInterval(data.created_at) === true) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData paidPostData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton deletePaidButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterName"
          }, data.restname, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector paidPostConnector"
          }, _this6.context.main.seeking, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal paidPosterGoal"
          }, data.jobtype))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            className: "postMomentChild",
            fromNow: true
          }, data.created_at)));
        }
      }), this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (_this6.state.userSelectionArea === data.area && data.urgent === "true" && _this6.urgentJobInterval(data.created_at) === true) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData paidPostData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id);
            },
            className: "deletePostButton deletePaidButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterName"
          }, data.restname, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector paidPostConnector"
          }, _this6.context.main.seeking, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal paidPosterGoal"
          }, data.jobtype)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fromNow: true
          }, data.created_at)));
        }
      }), this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (_this6.state.userSelectionArea !== _this6.context.main.filterOtherArea && data.urgent === "true" && data.area !== "Queens" && data.area !== "Bronx" && data.area !== "Brooklyn" && data.area !== "Manhattan" && data.area !== "Staten Island") {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton deletePaidButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector paidPostConnector"
          }, _this6.context.main.seeking3, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal"
          }, data.jobtype)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fromNow: true
          }, data.created_at)));
        }
      }), !this.state.userSelectionArea && this.state.peopleData.data.map(function (data) {
        if (_this6.urgentJobInterval(data.created_at) === true) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalPeople(data.id);
            },
            className: "postData paidPostData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton deletePaidButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterName"
          }, data.personname), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector paidPostConnector"
          }, " ", _this6.context.main.seeking2, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal paidPosterGoal"
          }, " ", data.personskill, " "))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fromNow: true
          }, data.created_at)));
        }
      }), this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (_this6.state.userSelectionArea === data.area && data.urgent !== "true") {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector"
          }, _this6.context.main.seeking3, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal"
          }, data.jobtype))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fromNow: true
          }, data.created_at)));
        }
      }), this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (_this6.state.userSelectionArea !== _this6.context.main.filterOtherArea && data.urgent !== "true" && data.area !== "Queens" && data.area !== "Bronx" && data.area !== "Brooklyn" && data.area !== "Manhattan" && data.area !== "Staten Island") {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector"
          }, _this6.context.main.seeking3, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal"
          }, data.jobtype))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            fromNow: true
          }, data.created_at)));
        }
      }), !this.state.userSelectionArea && this.state.jobData.data.map(function (data) {
        if (data.urgent !== "true") {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this6.showModalJob(data.id, data.id_user);
            },
            className: "postData",
            key: data.id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "flexContainer"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postIcons"
          }, data.id_user === _this6.state.user.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            onClick: function onClick(event) {
              return _this6.showDeleteModal(event, data.id, data.posttype, _this6.state.userStatus.data);
            },
            className: "deletePostButton"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "fa fa-close"
          })), data.id_user !== null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "star",
            src: "star.png"
          })), data.whoreported && data.whoreported.length && data.whoreported.length > 10 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            "data-tooltip": _this6.context.main.tooltip2
          }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "flag",
            src: "flag.png"
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "postConnector"
          }, " ", _this6.context.main.seeking3, " "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "posterGoal"
          }, data.jobtype))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "postArea"
          }, data.area), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "postMoment"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_9___default.a, {
            className: "postMomentChild",
            fromNow: true
          }, data.created_at)));
        }
      }))));
    }
  }]);

  return JobsController;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


JobsController.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_12__["LanguageContext"];

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 66,
	"./af.js": 66,
	"./ar": 67,
	"./ar-dz": 68,
	"./ar-dz.js": 68,
	"./ar-kw": 69,
	"./ar-kw.js": 69,
	"./ar-ly": 70,
	"./ar-ly.js": 70,
	"./ar-ma": 71,
	"./ar-ma.js": 71,
	"./ar-sa": 72,
	"./ar-sa.js": 72,
	"./ar-tn": 73,
	"./ar-tn.js": 73,
	"./ar.js": 67,
	"./az": 74,
	"./az.js": 74,
	"./be": 75,
	"./be.js": 75,
	"./bg": 76,
	"./bg.js": 76,
	"./bm": 77,
	"./bm.js": 77,
	"./bn": 78,
	"./bn.js": 78,
	"./bo": 79,
	"./bo.js": 79,
	"./br": 80,
	"./br.js": 80,
	"./bs": 81,
	"./bs.js": 81,
	"./ca": 82,
	"./ca.js": 82,
	"./cs": 83,
	"./cs.js": 83,
	"./cv": 84,
	"./cv.js": 84,
	"./cy": 85,
	"./cy.js": 85,
	"./da": 86,
	"./da.js": 86,
	"./de": 87,
	"./de-at": 88,
	"./de-at.js": 88,
	"./de-ch": 89,
	"./de-ch.js": 89,
	"./de.js": 87,
	"./dv": 90,
	"./dv.js": 90,
	"./el": 91,
	"./el.js": 91,
	"./en-SG": 92,
	"./en-SG.js": 92,
	"./en-au": 93,
	"./en-au.js": 93,
	"./en-ca": 94,
	"./en-ca.js": 94,
	"./en-gb": 95,
	"./en-gb.js": 95,
	"./en-ie": 96,
	"./en-ie.js": 96,
	"./en-il": 97,
	"./en-il.js": 97,
	"./en-nz": 98,
	"./en-nz.js": 98,
	"./eo": 99,
	"./eo.js": 99,
	"./es": 100,
	"./es-do": 101,
	"./es-do.js": 101,
	"./es-us": 102,
	"./es-us.js": 102,
	"./es.js": 100,
	"./et": 103,
	"./et.js": 103,
	"./eu": 104,
	"./eu.js": 104,
	"./fa": 105,
	"./fa.js": 105,
	"./fi": 106,
	"./fi.js": 106,
	"./fo": 107,
	"./fo.js": 107,
	"./fr": 108,
	"./fr-ca": 109,
	"./fr-ca.js": 109,
	"./fr-ch": 110,
	"./fr-ch.js": 110,
	"./fr.js": 108,
	"./fy": 111,
	"./fy.js": 111,
	"./ga": 112,
	"./ga.js": 112,
	"./gd": 113,
	"./gd.js": 113,
	"./gl": 114,
	"./gl.js": 114,
	"./gom-latn": 115,
	"./gom-latn.js": 115,
	"./gu": 116,
	"./gu.js": 116,
	"./he": 117,
	"./he.js": 117,
	"./hi": 118,
	"./hi.js": 118,
	"./hr": 119,
	"./hr.js": 119,
	"./hu": 120,
	"./hu.js": 120,
	"./hy-am": 121,
	"./hy-am.js": 121,
	"./id": 122,
	"./id.js": 122,
	"./is": 123,
	"./is.js": 123,
	"./it": 124,
	"./it-ch": 125,
	"./it-ch.js": 125,
	"./it.js": 124,
	"./ja": 126,
	"./ja.js": 126,
	"./jv": 127,
	"./jv.js": 127,
	"./ka": 128,
	"./ka.js": 128,
	"./kk": 129,
	"./kk.js": 129,
	"./km": 130,
	"./km.js": 130,
	"./kn": 131,
	"./kn.js": 131,
	"./ko": 132,
	"./ko.js": 132,
	"./ku": 133,
	"./ku.js": 133,
	"./ky": 134,
	"./ky.js": 134,
	"./lb": 135,
	"./lb.js": 135,
	"./lo": 136,
	"./lo.js": 136,
	"./lt": 137,
	"./lt.js": 137,
	"./lv": 138,
	"./lv.js": 138,
	"./me": 139,
	"./me.js": 139,
	"./mi": 140,
	"./mi.js": 140,
	"./mk": 141,
	"./mk.js": 141,
	"./ml": 142,
	"./ml.js": 142,
	"./mn": 143,
	"./mn.js": 143,
	"./mr": 144,
	"./mr.js": 144,
	"./ms": 145,
	"./ms-my": 146,
	"./ms-my.js": 146,
	"./ms.js": 145,
	"./mt": 147,
	"./mt.js": 147,
	"./my": 148,
	"./my.js": 148,
	"./nb": 149,
	"./nb.js": 149,
	"./ne": 150,
	"./ne.js": 150,
	"./nl": 151,
	"./nl-be": 152,
	"./nl-be.js": 152,
	"./nl.js": 151,
	"./nn": 153,
	"./nn.js": 153,
	"./pa-in": 154,
	"./pa-in.js": 154,
	"./pl": 155,
	"./pl.js": 155,
	"./pt": 156,
	"./pt-br": 157,
	"./pt-br.js": 157,
	"./pt.js": 156,
	"./ro": 158,
	"./ro.js": 158,
	"./ru": 159,
	"./ru.js": 159,
	"./sd": 160,
	"./sd.js": 160,
	"./se": 161,
	"./se.js": 161,
	"./si": 162,
	"./si.js": 162,
	"./sk": 163,
	"./sk.js": 163,
	"./sl": 164,
	"./sl.js": 164,
	"./sq": 165,
	"./sq.js": 165,
	"./sr": 166,
	"./sr-cyrl": 167,
	"./sr-cyrl.js": 167,
	"./sr.js": 166,
	"./ss": 168,
	"./ss.js": 168,
	"./sv": 169,
	"./sv.js": 169,
	"./sw": 170,
	"./sw.js": 170,
	"./ta": 171,
	"./ta.js": 171,
	"./te": 172,
	"./te.js": 172,
	"./tet": 173,
	"./tet.js": 173,
	"./tg": 174,
	"./tg.js": 174,
	"./th": 175,
	"./th.js": 175,
	"./tl-ph": 176,
	"./tl-ph.js": 176,
	"./tlh": 177,
	"./tlh.js": 177,
	"./tr": 178,
	"./tr.js": 178,
	"./tzl": 179,
	"./tzl.js": 179,
	"./tzm": 180,
	"./tzm-latn": 181,
	"./tzm-latn.js": 181,
	"./tzm.js": 180,
	"./ug-cn": 182,
	"./ug-cn.js": 182,
	"./uk": 183,
	"./uk.js": 183,
	"./ur": 184,
	"./ur.js": 184,
	"./uz": 185,
	"./uz-latn": 186,
	"./uz-latn.js": 186,
	"./uz.js": 185,
	"./vi": 187,
	"./vi.js": 187,
	"./x-pseudo": 188,
	"./x-pseudo.js": 188,
	"./yo": 189,
	"./yo.js": 189,
	"./zh-cn": 190,
	"./zh-cn.js": 190,
	"./zh-hk": 191,
	"./zh-hk.js": 191,
	"./zh-tw": 192,
	"./zh-tw.js": 192
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 65;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb2R5L0JvZHlDb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JvZHkvQm9keUNvbXBvbmVudC5zY3NzPzY3ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VCdXR0b24vTGFuZ3VhZ2VCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RlbGV0ZU1vZGFsL0RlbGV0ZU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QcmVtaXVtTW9kYWwvUHJlbWl1bU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdHJpcGVCdXR0b24zL1N0cmlwZUJ1dHRvbjMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsUGVvcGxlL01vZGFsUGVvcGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEpvYi9Nb2RhbEpvYi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0pvYnMvSm9ic0NvbnRyb2xsZXIuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJCb2R5Q29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsImxhbmd1YWdlcyIsInNwYW5pc2giLCJjaGlsZHJlbiIsImF0dHJzIiwidG9nZ2xlTGFuZ3VhZ2UiLCJDb21wb25lbnQiLCJMYW5ndWFnZUJ1dHRvbiIsImNoYW5nZUxhbmd1YWdlIiwiY29udGV4dCIsImN1cnJlbnRMYW5ndWFnZSIsIm1vbWVudCIsImxvY2FsZSIsIlJlYWN0IiwiY29udGV4dFR5cGUiLCJMYW5ndWFnZUNvbnRleHQiLCJEZWxldGVNb2RhbCIsImRlbGV0ZUpvYiIsImJpbmQiLCJkZWxldGVQZXJzb25Qb3N0IiwiZGVsZXRlU2VydmljZSIsImdvUHJlbWl1bSIsImF4aW9zIiwiZ2V0IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZ2V0Sm9icyIsImNsb3NlIiwic2hvd1ByZW1pdW0iLCJnZXRQZW9wbGUiLCJnZXRTZXJ2aWNlcyIsImRlbGV0ZU1vZGFsIiwidGl0bGUiLCJ1c2Vyc3RhdHVzIiwicG9zdFR5cGUiLCJ5ZXMiLCJQcmVtaXVtTW9kYWwiLCJwcmVtaXVtTW9kYWwiLCJkZW55IiwiU3RyaXBlQnV0dG9uMyIsInN0cmlwZUtleSIsIml0ZW1BcnJheSIsInN1Y2Nlc3NVcmwiLCJmYWlsVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZUNvbnRleHQiLCJzdHJpcGUiLCJTdHJpcGUiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDbGljayIsInJlZGlyZWN0VG9DaGVja291dCIsIml0ZW1zIiwicGxhbiIsInF1YW50aXR5IiwicHJvdG9jb2wiLCJjYW5jZWxVcmwiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicmVzcCIsImJ1eVByZW1pdW0iLCJNb2RhbFBlb3BsZSIsInNldFN0YXRlIiwicGVvcGxlRGF0YSIsImRhdGEiLCJwZXJzb25Nb2RhbCIsIm5hbWUiLCJwZXJzb25uYW1lIiwicGVyc29uc3RhdHVzIiwic3RhdHVzMSIsInBlcnNvbnNraWxsIiwic3RhdHVzMiIsImV4cGVyaWVuY2UiLCJwZXJzb25leHBlcmllbmNlIiwic2NoZWR1bGUiLCJwZXJzb25zY2hlZHVsZSIsImFyZWEiLCJwZXJzb25hcmVhIiwicGhvbmUiLCJwZXJzb25udW1iZXIiLCJleHRyYUluZm8iLCJwZXJzb25leHRyYWluZm8iLCJNb2RhbEpvYiIsInBsZWFzZUxvZ2luIiwicmVwb3J0ZWRBbHJlYWR5IiwidGhhbmtzRm9yUmVwb3J0aW5nIiwid2hvSGFzUmVwb3J0ZWQiLCJyZXBvcnRQb3N0IiwiZ2V0Sm9iRGV0YWlscyIsInJlc3VsdHMiLCJqb2JEYXRhIiwiY2xpY2tlcmlkIiwid2hvcmVwb3J0ZWQiLCJpbmNsdWRlcyIsInVyZ2VudCIsIm1haW4iLCJqb2JDb25maXJtIiwicmVzdG5hbWUiLCJwb3NpdGlvbiIsImpvYnR5cGUiLCJwYXltZW50IiwiaG91cnBheSIsInR5cGVQYXkiLCJ0eXBlcGF5IiwiYWRkcmVzcyIsIkNvbnRhY3QiLCJjb250YWN0IiwiZXh0cmFpbmZvIiwiZmFjZWJvb2tpZCIsInRvb2x0aXAiLCJ3aG9SZXBvcnRlZCIsImZpbmQiLCJ4IiwibGVuZ3RoIiwidG9vbHRpcDIiLCJtb2RhbEpvYiIsInBsZWFzZUxvZ2luMiIsIlJlYWN0R0EiLCJyZXF1aXJlIiwiSm9ic0NvbnRyb2xsZXIiLCJhZGRDbGFzcyIsInNob3dNb2RhbEpvYiIsInNob3dQcmVtaXVtTW9kYWwiLCJzaG93TW9kYWxQZW9wbGUiLCJ1c2VyIiwic2hvd0RlbGV0ZU1vZGFsIiwiaGFuZGxlQ2hhbmdlQXJlYSIsImhhbmRsZVN1Ym1pdCIsImhpZGVNb2RhbEpvYiIsImhpZGVNb2RhbFBlb3BsZSIsInVyZ2VudEpvYkludGVydmFsIiwidHJhY2tDcmVhdGVjbG9zZUpvYiIsInRyYWNrQ3JlYXRlSm9iIiwiaGlkZURlbGV0ZU1vZGFsIiwiaGlkZVByZW1pdW1Nb2RhbCIsImdldFVzZXJTdGF0dXMiLCJsb2dPdXQiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJTdGF0dXMiLCJyZWxvYWQiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGUiLCJpZF91c2VyIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwic2VsZWN0ZWRKb2JJZCIsInBvc3R0eXBlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRQZXJzb25JZCIsInJlbW92ZSIsImdhIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImhyZWYiLCJjcmVhdGVkX2F0IiwidGltZVN0YW1wTWlsaSIsIkRhdGUiLCJub3dNaWxpIiwibm93Iiwiam9iSW50ZXJ2YWxIb3VycyIsImpvYkludGVydmFsTWlsaSIsImludGVydmFsT3AiLCJib2R5Q2xhc3MiLCJkYXRlIiwibG9naW4iLCJsb2dvdXQiLCJkZWxldGVQb3N0IiwiY3JlYXRlUG9zdCIsIndlbGNvbWUiLCJwcmVtaXVtIiwiZmlsdGVyRGVmYXVsdCIsImZpbHRlck90aGVyQXJlYSIsInVzZXJTZWxlY3Rpb25BcmVhIiwibWFwIiwiZSIsInNlZWtpbmciLCJzZWVraW5nMyIsInNlZWtpbmcyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsYUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSx5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGlOQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGVBQVMsRUFBRUEsbUVBQVMsQ0FBQ0M7QUFEWixLQUFiO0FBSGU7QUFNbEI7O0FBUEw7QUFBQTtBQUFBLHdDQVN1QixDQUNmO0FBQ0g7QUFYTDtBQUFBO0FBQUEsNkJBYVk7QUFBQSx3QkFDdUIsS0FBS0gsS0FENUI7QUFBQSxVQUNDSSxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNjQyxLQURkOztBQUdKLGFBQVEsd0VBRUosMkRBQUMsc0VBQUQ7QUFBZ0Isc0JBQWMsRUFBRSxLQUFLTCxLQUFMLENBQVdNO0FBQTNDLFFBRkksRUFHQ0YsUUFIRCxDQUFSO0FBTUg7QUF0Qkw7O0FBQUE7QUFBQSxFQUFtQ0csK0NBQW5DLEU7Ozs7Ozs7QUNOQTtBQUNBLGtCQUFrQixrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEI7QUFDQTtBQUNBOztJQUVNQyxjOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFDSTtBQUFLLFVBQUUsRUFBQztBQUFSLFNBQ0k7QUFBUSxVQUFFLEVBQUMsaUJBQVg7QUFBNkIsZUFBTyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1M7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUIiLCJmaWxlIjoiMWFmNzNkMmFhMGJhZWQyZDdlYWIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tICcuL0JvZHlDb21wb25lbnQuc2Nzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQsIGxhbmd1YWdlcyB9IGZyb20gXCIuLi9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHRcIjtcbmltcG9ydCBMYW5ndWFnZUJ1dHRvbiBmcm9tIFwiLi4vTGFuZ3VhZ2VCdXR0b24vTGFuZ3VhZ2VCdXR0b25cIjtcblxuXG5leHBvcnQgY2xhc3MgQm9keUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhbmd1YWdlczogbGFuZ3VhZ2VzLnNwYW5pc2hcbiAgICAgICAgfTsgICAgXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy90aGlzLnByb3BzLnRvZ2dsZUxhbmd1YWdlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIC4uLmF0dHJzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxMYW5ndWFnZUJ1dHRvbiBjaGFuZ2VMYW5ndWFnZT17dGhpcy5wcm9wcy50b2dnbGVMYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PilcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJvZHlcIjpcIl8yZFB4eGRCV1Y2R09tVjFDSVp3ZHBXXCJ9OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4uL0xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dFwiO1xuXG5jbGFzcyBMYW5ndWFnZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRyYW5zbGF0ZUJ1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0cmFuc2xhdGVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUxhbmd1YWdlfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5jdXJyZW50TGFuZ3VhZ2UgPT09IFwiRXNwYcOxb2xcIiA/IFwiRW5nbGlzaFwiIDogXCJFc3Bhw7FvbFwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXNzYXBlYXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmN1cnJlbnRMYW5ndWFnZSA9PT0gXCJFc3Bhw7FvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1vbWVudC5sb2NhbGUoXCJlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb21lbnQubG9jYWxlKFwiZW5cIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxhbmd1YWdlQnV0dG9uLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZUJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuZGVsZXRlSm9iID0gdGhpcy5kZWxldGVKb2IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxldGVQZXJzb25Qb3N0ID0gdGhpcy5kZWxldGVQZXJzb25Qb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZXRlU2VydmljZSA9IHRoaXMuZGVsZXRlU2VydmljZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdvUHJlbWl1bSA9IHRoaXMuZ29QcmVtaXVtLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZGVsZXRlSm9iKCkge1xuICAgICAgICBheGlvcy5nZXQoXCIvZGVsZXRlSm9iL1wiICsgdGhpcy5wcm9wcy5pZCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRKb2JzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgZ29QcmVtaXVtKCkge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgICAgIHRoaXMucHJvcHMuc2hvd1ByZW1pdW0oKTtcbiAgICB9XG5cbiAgICBkZWxldGVQZXJzb25Qb3N0KCkge1xuICAgICAgICBheGlvcy5nZXQoXCIvZGVsZXRlUGVyc29uUG9zdC9cIiArIHRoaXMucHJvcHMuaWQpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UGVvcGxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlU2VydmljZSgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2RlbGV0ZVNlcnZpY2UvXCIgKyB0aGlzLnByb3BzLmlkKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFNlcnZpY2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9IGNsYXNzTmFtZT1cImJhY2tncm91bmRCbG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxldGVNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0xIGRlbGV0ZU1vZGFsVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuZGVsZXRlTW9kYWwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbGV0ZUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJzdGF0dXMgPT0gXCJ0cnVlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RUeXBlID09PSBcImpvYlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlQnV0dG9uIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZUpvYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5kZWxldGVNb2RhbC55ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2Vyc3RhdHVzID09IFwidHJ1ZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0VHlwZSA9PT0gXCJwZXJzb25cIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbGV0ZUJ1dHRvbiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVQZXJzb25Qb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmRlbGV0ZU1vZGFsLnllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlcnN0YXR1cyAhPT0gXCJ0cnVlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RUeXBlID09PSBcImpvYlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlQnV0dG9uIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvUHJlbWl1bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5kZWxldGVNb2RhbC55ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2Vyc3RhdHVzICE9PSBcInRydWVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdFR5cGUgPT09IFwicGVyc29uXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGVCdXR0b24gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29QcmVtaXVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmRlbGV0ZU1vZGFsLnllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbGV0ZUJ1dHRvbiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGVsZXRlTW9kYWwuY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgU3RyaXBlQnV0dG9uMyBmcm9tIFwiLi4vU3RyaXBlQnV0dG9uMy9TdHJpcGVCdXR0b24zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZW1pdW1Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kQmxvY2tcIiAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxldGVNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0xIGRlbGV0ZU1vZGFsVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucHJlbWl1bU1vZGFsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8U3RyaXBlQnV0dG9uMyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uT3BhcXVlIHByZW1pdW1EZW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnByZW1pdW1Nb2RhbC5kZW55fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QcmVtaXVtTW9kYWwuY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZhaWwgfSBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIFN0cmlwZUJ1dHRvbjMoKSB7XG4gICAgbGV0IHN0cmlwZUtleSwgaXRlbUFycmF5LCBzdWNjZXNzVXJsLCBmYWlsVXJsO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PSBcImxvY2FsaG9zdFwiKSB7XG4gICAgICAgIHN0cmlwZUtleSA9IFwicGtfdGVzdF84NjhoYTUxZ0VVSFQwUFRhRkZNWFdIWVQwMEFsUGpXc1kzXCI7XG4gICAgICAgIGl0ZW1BcnJheSA9IFwicGxhbl9GZXJHNFNodU05R1M4RFwiO1xuICAgICAgICBzdWNjZXNzVXJsID0gXCIvL2xvY2FsaG9zdDo4MDgwL3ByZW1pdW1TZXRcIjtcbiAgICAgICAgZmFpbFVybCA9IFwiLy9sb2NhbGhvc3Q6ODA4MC9TdHJpcGVCdXR0b25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpcGVLZXkgPSBcInBrX2xpdmVfTExaeDZrN2ZYazI2aWxvVTRxZjQ2a3ZXMDBETmYxNWVPUVwiO1xuICAgICAgICBpdGVtQXJyYXkgPSBcInBsYW5fRmVyMzFxa2JKeDBVWW1cIjtcbiAgICAgICAgc3VjY2Vzc1VybCA9IFwiLy93d3cuam9iZGlyZWN0by5jb20vcHJlbWl1bVNldFwiO1xuICAgICAgICBmYWlsVXJsID0gXCIvL3d3dy5qb2JkaXJlY3RvLmNvbS9TdHJpcGVCdXR0b25cIjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RyaXBlID0gU3RyaXBlKHN0cmlwZUtleSk7XG5cbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc3RyaXBlXG4gICAgICAgICAgICAucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICAgICAgICAgICAgICBpdGVtczogW3sgcGxhbjogaXRlbUFycmF5LCBxdWFudGl0eTogMSB9XSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzVXJsOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBzdWNjZXNzVXJsLFxuICAgICAgICAgICAgICAgIGNhbmNlbFVybDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgZmFpbFVybFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzb21lb25lIHdhbnRzIHRvIHBheVwiKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXhpb3MucG9zdChcIi93YW50c1RvUGF5XCIpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllcyBwYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25CYXNpYyBidXR0b25QcmVtaXVtXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtjb250ZXh0LnByZW1pdW1Nb2RhbC5idXlQcmVtaXVtfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaXBlQnV0dG9uMztcblN0cmlwZUJ1dHRvbjMuY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tIFwiLi4vTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsUGVvcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2dldFBlb3BsZURldGFpbHMvXCIgKyB0aGlzLnByb3BzLmlkKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBvZiBkZXRhaWxzIHBpcDogXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwZW9wbGVEYXRhOiByZXN1bHQuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnBlb3BsZURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfSBjbGFzc05hbWU9XCJtb2RhbEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtb2RhbFBlb3BsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJqb2JEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucGVyc29uTW9kYWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZW9wbGVEYXRhLmRhdGEucGVyc29ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGVvcGxlRGF0YS5kYXRhLnBlcnNvbnN0YXR1cyA9PT0gXCJzZWVrc0pvYlwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnBlcnNvbk1vZGFsLnN0YXR1czF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGVvcGxlRGF0YS5kYXRhLnBlcnNvbnNraWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZW9wbGVEYXRhLmRhdGEucGVyc29uc3RhdHVzID09PSBcIm9mZmVyc1NlcnZpY2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5wZXJzb25Nb2RhbC5zdGF0dXMyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlb3BsZURhdGEuZGF0YS5wZXJzb25za2lsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5wZXJzb25Nb2RhbC5leHBlcmllbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlb3BsZURhdGEuZGF0YS5wZXJzb25leHBlcmllbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5wZXJzb25Nb2RhbC5zY2hlZHVsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZW9wbGVEYXRhLmRhdGEucGVyc29uc2NoZWR1bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnBlcnNvbk1vZGFsLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGVvcGxlRGF0YS5kYXRhLnBlcnNvbmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnBlcnNvbk1vZGFsLnBob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlb3BsZURhdGEuZGF0YS5wZXJzb25udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucGVyc29uTW9kYWwuZXh0cmFJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlb3BsZURhdGEuZGF0YS5wZXJzb25leHRyYWluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Nb2RhbFBlb3BsZS5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi9MYW5ndWFnZS9MYW5ndWFnZUNvbnRleHRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsSm9iIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwbGVhc2VMb2dpbjogZmFsc2UsXG4gICAgICAgICAgICByZXBvcnRlZEFscmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgdGhhbmtzRm9yUmVwb3J0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHdob0hhc1JlcG9ydGVkOiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVwb3J0UG9zdCA9IHRoaXMucmVwb3J0UG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEpvYkRldGFpbHMgPSB0aGlzLmdldEpvYkRldGFpbHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy53aG9IYXNSZXBvcnRlZCA9IHRoaXMud2hvSGFzUmVwb3J0ZWQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy53aG9IYXNSZXBvcnRlZCgpO1xuICAgICAgICB0aGlzLmdldEpvYkRldGFpbHMoKTtcbiAgICB9XG5cbiAgICB3aG9IYXNSZXBvcnRlZCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL3dob0hhc1JlcG9ydGVkL1wiICsgdGhpcy5wcm9wcy5pZCkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdob0hhc1JlcG9ydGVkOiBcImJsYWhcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEpvYkRldGFpbHMoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRKb2JEZXRhaWxzL1wiICsgdGhpcy5wcm9wcy5pZCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgam9iRGF0YTogcmVzdWx0LmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXBvcnRQb3N0KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY2xpY2tlcmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwbGVhc2VMb2dpbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEud2hvcmVwb3J0ZWQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLndob3JlcG9ydGVkLmluY2x1ZGVzKHRoaXMucHJvcHMuY2xpY2tlcmlkKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJlcG9ydGVkQWxyZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aGFua3NGb3JSZXBvcnRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvcmVwb3J0UG9zdC9cIiArIHRoaXMucHJvcHMuaWQpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGhhbmtzRm9yUmVwb3J0aW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRKb2JEZXRhaWxzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmpvYkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgaW4gcmVuZGVyXCIsIHRoaXMuc3RhdGUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRCbG9ja1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0gY2xhc3NOYW1lPVwibW9kYWxCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPG1haW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnVyZ2VudCA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidXJnZW50TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCIgY2xhc3NOYW1lPVwiaGVhZGluZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBKb2JEaXJlY3RvXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQubWFpbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy0xIHdlYnNpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod3d3LmpvYmRpcmVjdG8uY29tKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJqb2JEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5yZXN0bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JDb25maXJtLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5qb2J0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JDb25maXJtLnBheW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmhvdXJwYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS50eXBlUGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS50eXBlcGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0uc2NoZWR1bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnNjaGVkdWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0uYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JDb25maXJtLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5Db250YWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5jb250YWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0uZXh0cmFJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5leHRyYWluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZhY2Vib29raWQgIT09IG51bGwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFN0YXJEaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN0YXJcIiBzcmM9XCJzdGFyLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9vbFRpcE1vZGFsVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2hvUmVwb3J0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2hvUmVwb3J0ZWQuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53aG9SZXBvcnRlZC5kYXRhLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LmlkID09PSB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICApLndob3JlcG9ydGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndob1JlcG9ydGVkLmRhdGEuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHguaWQgPT09IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICkud2hvcmVwb3J0ZWQubGVuZ3RoID4gMTAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxGbGFnRGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbGFnXCIgc3JjPVwiZmxhZy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkRmxhZ0RpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpIGNyZWUgcXVlIGVzdGUgYW51bmNpbyBlcyBpbmRlYmlkbywgcG9yZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwb3J0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlcG9ydFBvc3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0RGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgcmVwb3J0VGV4dFwiPlJlcG9ydGFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImZsYWcucG5nXCIgY2xhc3NOYW1lPVwicmVkRmxhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRoYW5rc0ZvclJlcG9ydGluZyA9PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWRSZXBvcnRUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQubW9kYWxKb2IudGhhbmtzRm9yUmVwb3J0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGVhc2VMb2dpbiA9PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWRSZXBvcnRUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1vZGFsSm9iLnBsZWFzZUxvZ2lufXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjYWxsVG9Mb2dpblwiIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1vZGFsSm9iLnBsZWFzZUxvZ2luMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXIgc3RhckpvYkZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cInN0YXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlcG9ydGVkQWxyZWFkeSA9PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWRSZXBvcnRUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQubW9kYWxKb2IucmVwb3J0ZWRBbHJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Nb2RhbEpvYi5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50L2xvY2FsZS9lc1wiO1xuaW1wb3J0IHsgQm9keUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JvZHkvQm9keUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlclwiO1xuaW1wb3J0IERlbGV0ZU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RlbGV0ZU1vZGFsL0RlbGV0ZU1vZGFsXCI7XG5pbXBvcnQgUHJlbWl1bU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByZW1pdW1Nb2RhbC9QcmVtaXVtTW9kYWxcIjtcbmltcG9ydCBNb2RhbFBlb3BsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb2RhbFBlb3BsZS9Nb2RhbFBlb3BsZVwiO1xuaW1wb3J0IE1vZGFsSm9iIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsSm9iL01vZGFsSm9iXCI7XG5cblxuXG52YXIgUmVhY3RHQSA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9ic0NvbnRyb2xsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dNb2RhbEpvYjogZmFsc2UsXG4gICAgICAgICAgICBzaG93UHJlbWl1bU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dNb2RhbFBlb3BsZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VyOiBcInRydWVcIixcbiAgICAgICAgICAgIHNob3dEZWxldGVNb2RhbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VBcmVhID0gdGhpcy5oYW5kbGVDaGFuZ2VBcmVhLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93TW9kYWxQZW9wbGUgPSB0aGlzLnNob3dNb2RhbFBlb3BsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVNb2RhbEpvYiA9IHRoaXMuaGlkZU1vZGFsSm9iLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsUGVvcGxlID0gdGhpcy5oaWRlTW9kYWxQZW9wbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cmdlbnRKb2JJbnRlcnZhbCA9IHRoaXMudXJnZW50Sm9iSW50ZXJ2YWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50cmFja0NyZWF0ZWNsb3NlSm9iID0gdGhpcy50cmFja0NyZWF0ZUpvYi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dEZWxldGVNb2RhbCA9IHRoaXMuc2hvd0RlbGV0ZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZURlbGV0ZU1vZGFsID0gdGhpcy5oaWRlRGVsZXRlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUHJlbWl1bU1vZGFsID0gdGhpcy5oaWRlUHJlbWl1bU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0Sm9icyA9IHRoaXMuZ2V0Sm9icy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFVzZXJTdGF0dXMgPSB0aGlzLmdldFVzZXJTdGF0dXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRQZW9wbGUgPSB0aGlzLmdldFBlb3BsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd1ByZW1pdW0gPSB0aGlzLnNob3dQcmVtaXVtLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Sm9icygpO1xuICAgICAgICB0aGlzLmdldFBlb3BsZSgpO1xuICAgICAgICB0aGlzLmdldFVzZXJTdGF0dXMoKTtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6ICcvdXNlcicsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiByZXN1bHQuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VBcmVhKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgdXNlclNlbGVjdGlvbkFyZWE6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldEpvYnMoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRKb2JzXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqb2JEYXRhOiByZXN1bHQuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlclN0YXR1cygpIHtcbiAgICAgICAgXG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRVc2VyU3RhdHVzXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyU3RhdHVzOiByZXN1bHQuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQZW9wbGUoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRQZW9wbGVcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlb3BsZURhdGE6IHJlc3VsdC5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvZ091dCgpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6ICcvbG9nb3V0JyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxvY2tTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRDbGFzczogIXRoaXMuc3RhdGUuYWRkQ2xhc3MgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9wb3N0VHlwZVwiKVxuICAgIH1cblxuICAgIHNob3dNb2RhbEpvYihldmVudCwgaWRfdXNlcikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2tCYWNrZ3JvdW5kJylcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dNb2RhbEpvYjogdHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSm9iSWQ6IGV2ZW50LFxuICAgICAgICAgICAgaWRfdXNlcjogaWRfdXNlclxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcmVtaXVtKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2tCYWNrZ3JvdW5kJylcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93UHJlbWl1bU1vZGFsOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob3dEZWxldGVNb2RhbChldmVudCwgaWQsIHBvc3R0eXBlLCB1c2Vyc3RhdHVzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2tCYWNrZ3JvdW5kJylcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0RlbGV0ZU1vZGFsOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRKb2JJZDogaWQsXG4gICAgICAgICAgICBwb3N0dHlwZTogcG9zdHR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dNb2RhbFBlb3BsZShldmVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2tCYWNrZ3JvdW5kJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TW9kYWxQZW9wbGU6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RlZFBlcnNvbklkOiBldmVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxKb2IoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja0JhY2tncm91bmQnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsSm9iOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBoaWRlRGVsZXRlTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja0JhY2tncm91bmQnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RlbGV0ZU1vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVQcmVtaXVtTW9kYWwoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja0JhY2tncm91bmQnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1ByZW1pdW1Nb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxQZW9wbGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja0JhY2tncm91bmQnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsUGVvcGxlOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB0cmFja0NyZWF0ZUpvYihldmVudCkge1xuICAgICAgICBnYShcInNlbmRcIiwgXCJldmVudFwiLCB7XG4gICAgICAgICAgICBldmVudENhdGVnb3J5OiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgZXZlbnRBY3Rpb246IFwiY3JlYXRlSm9iXCIsXG4gICAgICAgICAgICBldmVudExhYmVsOiBldmVudC50YXJnZXQuaHJlZlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cmdlbnRKb2JJbnRlcnZhbChjcmVhdGVkX2F0KSB7XG4gICAgICAgIC8vIGpvYiB0aW1lc3RhbXAgaW4gbWlsaXNlY29uZHNcbiAgICAgICAgbGV0IHRpbWVTdGFtcE1pbGkgPSBuZXcgRGF0ZShjcmVhdGVkX2F0KTtcbiAgICAgICAgLy8gbm93IGluIG1pbGlzZWNvbmRzXG4gICAgICAgIGxldCBub3dNaWxpID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gdXJnZW50IGpvYiBpbnRlcnZhbCBpbiBob3Vyc1xuICAgICAgICBsZXQgam9iSW50ZXJ2YWxIb3VycyA9IDQ4O1xuICAgICAgICAvLyBqb2IgaW50ZXJ2YWwgaW4gbWlsaXNlY29uZHNcbiAgICAgICAgbGV0IGpvYkludGVydmFsTWlsaSA9IGpvYkludGVydmFsSG91cnMgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgLy9jb25kaXRpb25cbiAgICAgICAgbGV0IGludGVydmFsT3AgPSBub3dNaWxpIC0gdGltZVN0YW1wTWlsaSA8IGpvYkludGVydmFsTWlsaTtcbiAgICAgICAgcmV0dXJuIGludGVydmFsT3A7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9keUNsYXNzID0gW1wiYm9keUNsYXNzXCJdO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIC8vIHNpIG5vIHBvbmdvIGVzdG8geSBlc3RveSBsb2dlYWRvLCBuYWRhIGZ1bmNpb25hLCBwb3JxdWU/XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5qb2JEYXRhIHx8ICF0aGlzLnN0YXRlLnBlb3BsZURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qm9keUNvbXBvbmVudCB0b2dnbGVMYW5ndWFnZT17dGhpcy5wcm9wcy5uYXZpZ2F0aW9uLnRvZ2dsZUxhbmd1YWdlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRBbGxcIj5cbiAgICAgICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImhlYWRpbmctMVwiPlxuICAgICAgICAgICAgICAgICAgICBKb2JEaXJlY3RvXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLTFcIj57dGhpcy5jb250ZXh0Lm1haW4udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnVzZXIgJiYgPExpbmsgdG89XCIvbG9naW5cIj48ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNBdXRoXCIgPjxpbWcgY2xhc3NOYW1lPVwic3RhciBzdGFyTWluaVwiIHNyYz1cInN0YXIucG5nXCIgLz48cCBjbGFzc05hbWU9XCJhdXRoVGV4dFwiPnt0aGlzLmNvbnRleHQubWFpbi5sb2dpbn08L3A+PC9kaXY+PC9MaW5rPn1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyICYmIDxwIGNsYXNzTmFtZT1cImJ1dHRvbnNBdXRoXCIgb25DbGljaz17dGhpcy5sb2dPdXR9Pnt0aGlzLmNvbnRleHQubWFpbi5sb2dvdXR9PC9wPn1cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbEpvYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEpvYiBpZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEpvYklkfSBjbG9zZT17dGhpcy5oaWRlTW9kYWxKb2J9IGlkX3VzZXI9e3RoaXMuc3RhdGUuaWRfdXNlcn0gY2xpY2tlcmlkPXt0aGlzLnN0YXRlLnVzZXIuaWR9IHdob1JlcG9ydGVkPXt0aGlzLnN0YXRlLmpvYkRhdGF9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RGVsZXRlTW9kYWwgJiYgdGhpcy5zdGF0ZS51c2VyU3RhdHVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZU1vZGFsIGlkPXt0aGlzLnN0YXRlLnNlbGVjdGVkSm9iSWR9IHVzZXJzdGF0dXM9e3RoaXMuc3RhdGUudXNlclN0YXR1cy5kYXRhfSBjbG9zZT17dGhpcy5oaWRlRGVsZXRlTW9kYWx9IHNob3dQcmVtaXVtPXt0aGlzLnNob3dQcmVtaXVtfSBkZWxldGU9e3RoaXMuZGVsZXRlUG9zdH0gcG9zdFR5cGU9e3RoaXMuc3RhdGUucG9zdHR5cGV9IGdldEpvYnM9e3RoaXMuZ2V0Sm9ic30gZ2V0UGVvcGxlPXt0aGlzLmdldFBlb3BsZX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQcmVtaXVtTW9kYWwgJiYgdGhpcy5zdGF0ZS51c2VyU3RhdHVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFByZW1pdW1Nb2RhbCBjbG9zZT17dGhpcy5oaWRlUHJlbWl1bU1vZGFsfSAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93TW9kYWxQZW9wbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxQZW9wbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUGVyc29uSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17dGhpcy5oaWRlTW9kYWxQZW9wbGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc0FuZEZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25BbmRXZWxjb21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJ1dHRvbkNyZWF0ZVBvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbkJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jb250ZXh0Lm1haW4uY3JlYXRlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyICYmIHRoaXMuc3RhdGUudXNlclN0YXR1cyAmJiB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSAmJiB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSAhPT0gXCJ0cnVlXCIgJiYgPGgzIGlkPVwid2VsY29tZVRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RoaXMuY29udGV4dC5tYWluLndlbGNvbWV9PGJyIC8+IHt0aGlzLnN0YXRlLnVzZXIubmFtZX0gPC9oMz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyICYmIHRoaXMuc3RhdGUudXNlclN0YXR1cyAmJiB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSAmJiB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSA9PSBcInRydWVcIiAmJiA8aDMgaWQ9XCJ3ZWxjb21lVGV4dFwiIGNsYXNzTmFtZT1cInRleHRcIj57dGhpcy5jb250ZXh0Lm1haW4ud2VsY29tZX08YnIgLz4ge3RoaXMuc3RhdGUudXNlci5uYW1lfSA8YnIgLz57dGhpcy5jb250ZXh0Lm1haW4ucHJlbWl1bX08L2gzPn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qKi99XG5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBvblN1Ym1pdD17dGhpcy50cmFja0NyZWF0ZUpvYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzE2MDsmIzE2MDt7dGhpcy5jb250ZXh0Lm1haW4uZmlsdGVyRGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFuaGF0dGFuXCI+JiMxNjA7JiMxNjA7TWFuaGF0dGFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJyb29rbHluXCI+JiMxNjA7JiMxNjA7QnJvb2tseW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUXVlZW5zXCI+JiMxNjA7JiMxNjA7UXVlZW5zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJyb254XCI+JiMxNjA7JiMxNjA7QnJvbng8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RhdGVuIElzbGFuZFwiPiYjMTYwOyYjMTYwO1N0YXRlbiBJc2xhbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3RyYSBhcmVhIGVuIE5ZXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjMTYwOyYjMTYwO3t0aGlzLmNvbnRleHQubWFpbi5maWx0ZXJPdGhlckFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFBvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKnVyZ2VudCBqb2IgcG9zdHMgaGVyZSovfVxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUudXNlclNlbGVjdGlvbkFyZWEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJnZW50ID09PSBcInRydWVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVyZ2VudEpvYkludGVydmFsKGRhdGEuY3JlYXRlZF9hdCkgPT09IHRydWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5zaG93TW9kYWxKb2IoZGF0YS5pZCwgZGF0YS5pZF91c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0RGF0YSBwYWlkUG9zdERhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0SWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgPT09IHRoaXMuc3RhdGUudXNlci5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5zaG93RGVsZXRlTW9kYWwoZXZlbnQsIGRhdGEuaWQsIGRhdGEucG9zdHR5cGUsIHRoaXMuc3RhdGUudXNlclN0YXR1cy5kYXRhKX0gY2xhc3NOYW1lPVwiZGVsZXRlUG9zdEJ1dHRvbiBkZWxldGVQYWlkQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuaWRfdXNlciAhPT0gbnVsbCAmJiA8ZGl2IGRhdGEtdG9vbHRpcD17dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcH0+IDxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz1cInN0YXIucG5nXCIgLz48L2Rpdj59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVyTmFtZVwiPntkYXRhLnJlc3RuYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0Q29ubmVjdG9yIHBhaWRQb3N0Q29ubmVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5tYWluLnNlZWtpbmd9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVyR29hbCBwYWlkUG9zdGVyR29hbFwiPntkYXRhLmpvYnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0QXJlYVwiPntkYXRhLmFyZWF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdE1vbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9tZW50IGNsYXNzTmFtZT1cInBvc3RNb21lbnRDaGlsZFwiIGZyb21Ob3c+e2RhdGEuY3JlYXRlZF9hdH08L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhID09PSBkYXRhLmFyZWEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmdlbnQgPT09IFwidHJ1ZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJnZW50Sm9iSW50ZXJ2YWwoZGF0YS5jcmVhdGVkX2F0KSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5zaG93TW9kYWxKb2IoZGF0YS5pZCwgZGF0YS5pZF91c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0RGF0YSBwYWlkUG9zdERhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0SWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgPT09IHRoaXMuc3RhdGUudXNlci5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5zaG93RGVsZXRlTW9kYWwoZXZlbnQsIGRhdGEuaWQpfSBjbGFzc05hbWU9XCJkZWxldGVQb3N0QnV0dG9uIGRlbGV0ZVBhaWRCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgIT09IG51bGwgJiYgPGRpdiBkYXRhLXRvb2x0aXA9e3RoaXMuY29udGV4dC5tYWluLnRvb2x0aXB9PiA8aW1nIGNsYXNzTmFtZT1cInN0YXJcIiBzcmM9XCJzdGFyLnBuZ1wiIC8+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0ZXJOYW1lXCI+e2RhdGEucmVzdG5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdENvbm5lY3RvciBwYWlkUG9zdENvbm5lY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5tYWluLnNlZWtpbmd9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RlckdvYWwgcGFpZFBvc3RlckdvYWxcIj57ZGF0YS5qb2J0eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0QXJlYVwiPntkYXRhLmFyZWF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdE1vbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9tZW50IGZyb21Ob3c+e2RhdGEuY3JlYXRlZF9hdH08L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyU2VsZWN0aW9uQXJlYSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VyU2VsZWN0aW9uQXJlYSAhPT0gdGhpcy5jb250ZXh0Lm1haW4uZmlsdGVyT3RoZXJBcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJnZW50ID09PSBcInRydWVcIiAmJiBkYXRhLmFyZWEgIT09IFwiUXVlZW5zXCIgJiYgZGF0YS5hcmVhICE9PSBcIkJyb254XCIgJiYgZGF0YS5hcmVhICE9PSBcIkJyb29rbHluXCIgJiYgZGF0YS5hcmVhICE9PSBcIk1hbmhhdHRhblwiICYmIGRhdGEuYXJlYSAhPT0gXCJTdGF0ZW4gSXNsYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuc2hvd01vZGFsSm9iKGRhdGEuaWQsIGRhdGEuaWRfdXNlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdERhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0SWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgPT09IHRoaXMuc3RhdGUudXNlci5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5zaG93RGVsZXRlTW9kYWwoZXZlbnQsIGRhdGEuaWQsIGRhdGEucG9zdHR5cGUsIHRoaXMuc3RhdGUudXNlclN0YXR1cy5kYXRhKX0gY2xhc3NOYW1lPVwiZGVsZXRlUG9zdEJ1dHRvbiBkZWxldGVQYWlkQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pZF91c2VyICE9PSBudWxsICYmIDxkaXYgZGF0YS10b29sdGlwPXt0aGlzLmNvbnRleHQubWFpbi50b29sdGlwfT4gPGltZyBjbGFzc05hbWU9XCJzdGFyXCIgc3JjPVwic3Rhci5wbmdcIiAvPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RDb25uZWN0b3IgcGFpZFBvc3RDb25uZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQubWFpbi5zZWVraW5nM317XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVyR29hbFwiPntkYXRhLmpvYnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RBcmVhXCI+e2RhdGEuYXJlYX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0TW9tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57ZGF0YS5jcmVhdGVkX2F0fTwvTW9tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cblxuICAgICAgICAgICAgICAgICAgICB7LypwZW9wbGUgc2Vla2luZyBqb2JzKi99XG5cbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBlb3BsZURhdGEuZGF0YS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJnZW50Sm9iSW50ZXJ2YWwoZGF0YS5jcmVhdGVkX2F0KSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5zaG93TW9kYWxQZW9wbGUoZGF0YS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdERhdGEgcGFpZFBvc3REYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pZF91c2VyID09PSB0aGlzLnN0YXRlLnVzZXIuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuc2hvd0RlbGV0ZU1vZGFsKGV2ZW50LCBkYXRhLmlkLCBkYXRhLnBvc3R0eXBlLCB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSl9IGNsYXNzTmFtZT1cImRlbGV0ZVBvc3RCdXR0b24gZGVsZXRlUGFpZEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuaWRfdXNlciAhPT0gbnVsbCAmJiA8ZGl2IGRhdGEtdG9vbHRpcD17dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcH0+IDxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz1cInN0YXIucG5nXCIgLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3Rlck5hbWVcIj57ZGF0YS5wZXJzb25uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RDb25uZWN0b3IgcGFpZFBvc3RDb25uZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5tYWluLnNlZWtpbmcyfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RlckdvYWwgcGFpZFBvc3RlckdvYWxcIj4ge2RhdGEucGVyc29uc2tpbGx9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0TW9tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57ZGF0YS5jcmVhdGVkX2F0fTwvTW9tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIHsvKm5vcm1hbCBwb3N0cyBoZXJlKi99XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhID09PSBkYXRhLmFyZWEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cmdlbnQgIT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLnNob3dNb2RhbEpvYihkYXRhLmlkLCBkYXRhLmlkX3VzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3REYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pZF91c2VyID09PSB0aGlzLnN0YXRlLnVzZXIuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuc2hvd0RlbGV0ZU1vZGFsKGV2ZW50LCBkYXRhLmlkLCBkYXRhLnBvc3R0eXBlLCB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSl9IGNsYXNzTmFtZT1cImRlbGV0ZVBvc3RCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuaWRfdXNlciAhPT0gbnVsbCAmJiA8ZGl2IGRhdGEtdG9vbHRpcD17dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcH0+IDxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz1cInN0YXIucG5nXCIgLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RDb25uZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1haW4uc2Vla2luZzN9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVyR29hbFwiPntkYXRhLmpvYnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0QXJlYVwiPntkYXRhLmFyZWF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdE1vbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9tZW50IGZyb21Ob3c+e2RhdGEuY3JlYXRlZF9hdH08L01vbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyU2VsZWN0aW9uQXJlYSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VyU2VsZWN0aW9uQXJlYSAhPT0gdGhpcy5jb250ZXh0Lm1haW4uZmlsdGVyT3RoZXJBcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXJnZW50ICE9PSBcInRydWVcIiAmJiBkYXRhLmFyZWEgIT09IFwiUXVlZW5zXCIgJiYgZGF0YS5hcmVhICE9PSBcIkJyb254XCIgJiYgZGF0YS5hcmVhICE9PSBcIkJyb29rbHluXCIgJiYgZGF0YS5hcmVhICE9PSBcIk1hbmhhdHRhblwiICYmIGRhdGEuYXJlYSAhPT0gXCJTdGF0ZW4gSXNsYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuc2hvd01vZGFsSm9iKGRhdGEuaWQsIGRhdGEuaWRfdXNlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdERhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0SWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgPT09IHRoaXMuc3RhdGUudXNlci5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXZlbnQgPT4gdGhpcy5zaG93RGVsZXRlTW9kYWwoZXZlbnQsIGRhdGEuaWQsIGRhdGEucG9zdHR5cGUsIHRoaXMuc3RhdGUudXNlclN0YXR1cy5kYXRhKX0gY2xhc3NOYW1lPVwiZGVsZXRlUG9zdEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuaWRfdXNlciAhPT0gbnVsbCAmJiA8ZGl2IGRhdGEtdG9vbHRpcD17dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcH0+IDxpbWcgY2xhc3NOYW1lPVwic3RhclwiIHNyYz1cInN0YXIucG5nXCIgLz48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RDb25uZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0Lm1haW4uc2Vla2luZzN9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdGVyR29hbFwiPntkYXRhLmpvYnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RBcmVhXCI+e2RhdGEuYXJlYX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0TW9tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgZnJvbU5vdz57ZGF0YS5jcmVhdGVkX2F0fTwvTW9tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnVzZXJTZWxlY3Rpb25BcmVhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudXJnZW50ICE9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLnNob3dNb2RhbEpvYihkYXRhLmlkLCBkYXRhLmlkX3VzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3REYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdEljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5pZF91c2VyID09PSB0aGlzLnN0YXRlLnVzZXIuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuc2hvd0RlbGV0ZU1vZGFsKGV2ZW50LCBkYXRhLmlkLCBkYXRhLnBvc3R0eXBlLCB0aGlzLnN0YXRlLnVzZXJTdGF0dXMuZGF0YSl9IGNsYXNzTmFtZT1cImRlbGV0ZVBvc3RCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkX3VzZXIgIT09IG51bGwgJiYgPGRpdiBkYXRhLXRvb2x0aXA9e3RoaXMuY29udGV4dC5tYWluLnRvb2x0aXB9PiA8aW1nIGNsYXNzTmFtZT1cInN0YXJcIiBzcmM9XCJzdGFyLnBuZ1wiIC8+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEud2hvcmVwb3J0ZWQgJiYgZGF0YS53aG9yZXBvcnRlZC5sZW5ndGggJiYgZGF0YS53aG9yZXBvcnRlZC5sZW5ndGggPiAxMCAmJiA8ZGl2IGRhdGEtdG9vbHRpcD17dGhpcy5jb250ZXh0Lm1haW4udG9vbHRpcDJ9PiA8aW1nIGNsYXNzTmFtZT1cImZsYWdcIiBzcmM9XCJmbGFnLnBuZ1wiIC8+PC9kaXY+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RDb25uZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5tYWluLnNlZWtpbmczfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RlckdvYWxcIj57ZGF0YS5qb2J0eXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RBcmVhXCI+e2RhdGEuYXJlYX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0TW9tZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnQgY2xhc3NOYW1lPVwicG9zdE1vbWVudENoaWxkXCIgZnJvbU5vdz57ZGF0YS5jcmVhdGVkX2F0fTwvTW9tZW50PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm9keUNvbXBvbmVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkpvYnNDb250cm9sbGVyLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IDY2LFxuXHRcIi4vYWYuanNcIjogNjYsXG5cdFwiLi9hclwiOiA2Nyxcblx0XCIuL2FyLWR6XCI6IDY4LFxuXHRcIi4vYXItZHouanNcIjogNjgsXG5cdFwiLi9hci1rd1wiOiA2OSxcblx0XCIuL2FyLWt3LmpzXCI6IDY5LFxuXHRcIi4vYXItbHlcIjogNzAsXG5cdFwiLi9hci1seS5qc1wiOiA3MCxcblx0XCIuL2FyLW1hXCI6IDcxLFxuXHRcIi4vYXItbWEuanNcIjogNzEsXG5cdFwiLi9hci1zYVwiOiA3Mixcblx0XCIuL2FyLXNhLmpzXCI6IDcyLFxuXHRcIi4vYXItdG5cIjogNzMsXG5cdFwiLi9hci10bi5qc1wiOiA3Myxcblx0XCIuL2FyLmpzXCI6IDY3LFxuXHRcIi4vYXpcIjogNzQsXG5cdFwiLi9hei5qc1wiOiA3NCxcblx0XCIuL2JlXCI6IDc1LFxuXHRcIi4vYmUuanNcIjogNzUsXG5cdFwiLi9iZ1wiOiA3Nixcblx0XCIuL2JnLmpzXCI6IDc2LFxuXHRcIi4vYm1cIjogNzcsXG5cdFwiLi9ibS5qc1wiOiA3Nyxcblx0XCIuL2JuXCI6IDc4LFxuXHRcIi4vYm4uanNcIjogNzgsXG5cdFwiLi9ib1wiOiA3OSxcblx0XCIuL2JvLmpzXCI6IDc5LFxuXHRcIi4vYnJcIjogODAsXG5cdFwiLi9ici5qc1wiOiA4MCxcblx0XCIuL2JzXCI6IDgxLFxuXHRcIi4vYnMuanNcIjogODEsXG5cdFwiLi9jYVwiOiA4Mixcblx0XCIuL2NhLmpzXCI6IDgyLFxuXHRcIi4vY3NcIjogODMsXG5cdFwiLi9jcy5qc1wiOiA4Myxcblx0XCIuL2N2XCI6IDg0LFxuXHRcIi4vY3YuanNcIjogODQsXG5cdFwiLi9jeVwiOiA4NSxcblx0XCIuL2N5LmpzXCI6IDg1LFxuXHRcIi4vZGFcIjogODYsXG5cdFwiLi9kYS5qc1wiOiA4Nixcblx0XCIuL2RlXCI6IDg3LFxuXHRcIi4vZGUtYXRcIjogODgsXG5cdFwiLi9kZS1hdC5qc1wiOiA4OCxcblx0XCIuL2RlLWNoXCI6IDg5LFxuXHRcIi4vZGUtY2guanNcIjogODksXG5cdFwiLi9kZS5qc1wiOiA4Nyxcblx0XCIuL2R2XCI6IDkwLFxuXHRcIi4vZHYuanNcIjogOTAsXG5cdFwiLi9lbFwiOiA5MSxcblx0XCIuL2VsLmpzXCI6IDkxLFxuXHRcIi4vZW4tU0dcIjogOTIsXG5cdFwiLi9lbi1TRy5qc1wiOiA5Mixcblx0XCIuL2VuLWF1XCI6IDkzLFxuXHRcIi4vZW4tYXUuanNcIjogOTMsXG5cdFwiLi9lbi1jYVwiOiA5NCxcblx0XCIuL2VuLWNhLmpzXCI6IDk0LFxuXHRcIi4vZW4tZ2JcIjogOTUsXG5cdFwiLi9lbi1nYi5qc1wiOiA5NSxcblx0XCIuL2VuLWllXCI6IDk2LFxuXHRcIi4vZW4taWUuanNcIjogOTYsXG5cdFwiLi9lbi1pbFwiOiA5Nyxcblx0XCIuL2VuLWlsLmpzXCI6IDk3LFxuXHRcIi4vZW4tbnpcIjogOTgsXG5cdFwiLi9lbi1uei5qc1wiOiA5OCxcblx0XCIuL2VvXCI6IDk5LFxuXHRcIi4vZW8uanNcIjogOTksXG5cdFwiLi9lc1wiOiAxMDAsXG5cdFwiLi9lcy1kb1wiOiAxMDEsXG5cdFwiLi9lcy1kby5qc1wiOiAxMDEsXG5cdFwiLi9lcy11c1wiOiAxMDIsXG5cdFwiLi9lcy11cy5qc1wiOiAxMDIsXG5cdFwiLi9lcy5qc1wiOiAxMDAsXG5cdFwiLi9ldFwiOiAxMDMsXG5cdFwiLi9ldC5qc1wiOiAxMDMsXG5cdFwiLi9ldVwiOiAxMDQsXG5cdFwiLi9ldS5qc1wiOiAxMDQsXG5cdFwiLi9mYVwiOiAxMDUsXG5cdFwiLi9mYS5qc1wiOiAxMDUsXG5cdFwiLi9maVwiOiAxMDYsXG5cdFwiLi9maS5qc1wiOiAxMDYsXG5cdFwiLi9mb1wiOiAxMDcsXG5cdFwiLi9mby5qc1wiOiAxMDcsXG5cdFwiLi9mclwiOiAxMDgsXG5cdFwiLi9mci1jYVwiOiAxMDksXG5cdFwiLi9mci1jYS5qc1wiOiAxMDksXG5cdFwiLi9mci1jaFwiOiAxMTAsXG5cdFwiLi9mci1jaC5qc1wiOiAxMTAsXG5cdFwiLi9mci5qc1wiOiAxMDgsXG5cdFwiLi9meVwiOiAxMTEsXG5cdFwiLi9meS5qc1wiOiAxMTEsXG5cdFwiLi9nYVwiOiAxMTIsXG5cdFwiLi9nYS5qc1wiOiAxMTIsXG5cdFwiLi9nZFwiOiAxMTMsXG5cdFwiLi9nZC5qc1wiOiAxMTMsXG5cdFwiLi9nbFwiOiAxMTQsXG5cdFwiLi9nbC5qc1wiOiAxMTQsXG5cdFwiLi9nb20tbGF0blwiOiAxMTUsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiAxMTUsXG5cdFwiLi9ndVwiOiAxMTYsXG5cdFwiLi9ndS5qc1wiOiAxMTYsXG5cdFwiLi9oZVwiOiAxMTcsXG5cdFwiLi9oZS5qc1wiOiAxMTcsXG5cdFwiLi9oaVwiOiAxMTgsXG5cdFwiLi9oaS5qc1wiOiAxMTgsXG5cdFwiLi9oclwiOiAxMTksXG5cdFwiLi9oci5qc1wiOiAxMTksXG5cdFwiLi9odVwiOiAxMjAsXG5cdFwiLi9odS5qc1wiOiAxMjAsXG5cdFwiLi9oeS1hbVwiOiAxMjEsXG5cdFwiLi9oeS1hbS5qc1wiOiAxMjEsXG5cdFwiLi9pZFwiOiAxMjIsXG5cdFwiLi9pZC5qc1wiOiAxMjIsXG5cdFwiLi9pc1wiOiAxMjMsXG5cdFwiLi9pcy5qc1wiOiAxMjMsXG5cdFwiLi9pdFwiOiAxMjQsXG5cdFwiLi9pdC1jaFwiOiAxMjUsXG5cdFwiLi9pdC1jaC5qc1wiOiAxMjUsXG5cdFwiLi9pdC5qc1wiOiAxMjQsXG5cdFwiLi9qYVwiOiAxMjYsXG5cdFwiLi9qYS5qc1wiOiAxMjYsXG5cdFwiLi9qdlwiOiAxMjcsXG5cdFwiLi9qdi5qc1wiOiAxMjcsXG5cdFwiLi9rYVwiOiAxMjgsXG5cdFwiLi9rYS5qc1wiOiAxMjgsXG5cdFwiLi9ra1wiOiAxMjksXG5cdFwiLi9ray5qc1wiOiAxMjksXG5cdFwiLi9rbVwiOiAxMzAsXG5cdFwiLi9rbS5qc1wiOiAxMzAsXG5cdFwiLi9rblwiOiAxMzEsXG5cdFwiLi9rbi5qc1wiOiAxMzEsXG5cdFwiLi9rb1wiOiAxMzIsXG5cdFwiLi9rby5qc1wiOiAxMzIsXG5cdFwiLi9rdVwiOiAxMzMsXG5cdFwiLi9rdS5qc1wiOiAxMzMsXG5cdFwiLi9reVwiOiAxMzQsXG5cdFwiLi9reS5qc1wiOiAxMzQsXG5cdFwiLi9sYlwiOiAxMzUsXG5cdFwiLi9sYi5qc1wiOiAxMzUsXG5cdFwiLi9sb1wiOiAxMzYsXG5cdFwiLi9sby5qc1wiOiAxMzYsXG5cdFwiLi9sdFwiOiAxMzcsXG5cdFwiLi9sdC5qc1wiOiAxMzcsXG5cdFwiLi9sdlwiOiAxMzgsXG5cdFwiLi9sdi5qc1wiOiAxMzgsXG5cdFwiLi9tZVwiOiAxMzksXG5cdFwiLi9tZS5qc1wiOiAxMzksXG5cdFwiLi9taVwiOiAxNDAsXG5cdFwiLi9taS5qc1wiOiAxNDAsXG5cdFwiLi9ta1wiOiAxNDEsXG5cdFwiLi9tay5qc1wiOiAxNDEsXG5cdFwiLi9tbFwiOiAxNDIsXG5cdFwiLi9tbC5qc1wiOiAxNDIsXG5cdFwiLi9tblwiOiAxNDMsXG5cdFwiLi9tbi5qc1wiOiAxNDMsXG5cdFwiLi9tclwiOiAxNDQsXG5cdFwiLi9tci5qc1wiOiAxNDQsXG5cdFwiLi9tc1wiOiAxNDUsXG5cdFwiLi9tcy1teVwiOiAxNDYsXG5cdFwiLi9tcy1teS5qc1wiOiAxNDYsXG5cdFwiLi9tcy5qc1wiOiAxNDUsXG5cdFwiLi9tdFwiOiAxNDcsXG5cdFwiLi9tdC5qc1wiOiAxNDcsXG5cdFwiLi9teVwiOiAxNDgsXG5cdFwiLi9teS5qc1wiOiAxNDgsXG5cdFwiLi9uYlwiOiAxNDksXG5cdFwiLi9uYi5qc1wiOiAxNDksXG5cdFwiLi9uZVwiOiAxNTAsXG5cdFwiLi9uZS5qc1wiOiAxNTAsXG5cdFwiLi9ubFwiOiAxNTEsXG5cdFwiLi9ubC1iZVwiOiAxNTIsXG5cdFwiLi9ubC1iZS5qc1wiOiAxNTIsXG5cdFwiLi9ubC5qc1wiOiAxNTEsXG5cdFwiLi9ublwiOiAxNTMsXG5cdFwiLi9ubi5qc1wiOiAxNTMsXG5cdFwiLi9wYS1pblwiOiAxNTQsXG5cdFwiLi9wYS1pbi5qc1wiOiAxNTQsXG5cdFwiLi9wbFwiOiAxNTUsXG5cdFwiLi9wbC5qc1wiOiAxNTUsXG5cdFwiLi9wdFwiOiAxNTYsXG5cdFwiLi9wdC1iclwiOiAxNTcsXG5cdFwiLi9wdC1ici5qc1wiOiAxNTcsXG5cdFwiLi9wdC5qc1wiOiAxNTYsXG5cdFwiLi9yb1wiOiAxNTgsXG5cdFwiLi9yby5qc1wiOiAxNTgsXG5cdFwiLi9ydVwiOiAxNTksXG5cdFwiLi9ydS5qc1wiOiAxNTksXG5cdFwiLi9zZFwiOiAxNjAsXG5cdFwiLi9zZC5qc1wiOiAxNjAsXG5cdFwiLi9zZVwiOiAxNjEsXG5cdFwiLi9zZS5qc1wiOiAxNjEsXG5cdFwiLi9zaVwiOiAxNjIsXG5cdFwiLi9zaS5qc1wiOiAxNjIsXG5cdFwiLi9za1wiOiAxNjMsXG5cdFwiLi9zay5qc1wiOiAxNjMsXG5cdFwiLi9zbFwiOiAxNjQsXG5cdFwiLi9zbC5qc1wiOiAxNjQsXG5cdFwiLi9zcVwiOiAxNjUsXG5cdFwiLi9zcS5qc1wiOiAxNjUsXG5cdFwiLi9zclwiOiAxNjYsXG5cdFwiLi9zci1jeXJsXCI6IDE2Nyxcblx0XCIuL3NyLWN5cmwuanNcIjogMTY3LFxuXHRcIi4vc3IuanNcIjogMTY2LFxuXHRcIi4vc3NcIjogMTY4LFxuXHRcIi4vc3MuanNcIjogMTY4LFxuXHRcIi4vc3ZcIjogMTY5LFxuXHRcIi4vc3YuanNcIjogMTY5LFxuXHRcIi4vc3dcIjogMTcwLFxuXHRcIi4vc3cuanNcIjogMTcwLFxuXHRcIi4vdGFcIjogMTcxLFxuXHRcIi4vdGEuanNcIjogMTcxLFxuXHRcIi4vdGVcIjogMTcyLFxuXHRcIi4vdGUuanNcIjogMTcyLFxuXHRcIi4vdGV0XCI6IDE3Myxcblx0XCIuL3RldC5qc1wiOiAxNzMsXG5cdFwiLi90Z1wiOiAxNzQsXG5cdFwiLi90Zy5qc1wiOiAxNzQsXG5cdFwiLi90aFwiOiAxNzUsXG5cdFwiLi90aC5qc1wiOiAxNzUsXG5cdFwiLi90bC1waFwiOiAxNzYsXG5cdFwiLi90bC1waC5qc1wiOiAxNzYsXG5cdFwiLi90bGhcIjogMTc3LFxuXHRcIi4vdGxoLmpzXCI6IDE3Nyxcblx0XCIuL3RyXCI6IDE3OCxcblx0XCIuL3RyLmpzXCI6IDE3OCxcblx0XCIuL3R6bFwiOiAxNzksXG5cdFwiLi90emwuanNcIjogMTc5LFxuXHRcIi4vdHptXCI6IDE4MCxcblx0XCIuL3R6bS1sYXRuXCI6IDE4MSxcblx0XCIuL3R6bS1sYXRuLmpzXCI6IDE4MSxcblx0XCIuL3R6bS5qc1wiOiAxODAsXG5cdFwiLi91Zy1jblwiOiAxODIsXG5cdFwiLi91Zy1jbi5qc1wiOiAxODIsXG5cdFwiLi91a1wiOiAxODMsXG5cdFwiLi91ay5qc1wiOiAxODMsXG5cdFwiLi91clwiOiAxODQsXG5cdFwiLi91ci5qc1wiOiAxODQsXG5cdFwiLi91elwiOiAxODUsXG5cdFwiLi91ei1sYXRuXCI6IDE4Nixcblx0XCIuL3V6LWxhdG4uanNcIjogMTg2LFxuXHRcIi4vdXouanNcIjogMTg1LFxuXHRcIi4vdmlcIjogMTg3LFxuXHRcIi4vdmkuanNcIjogMTg3LFxuXHRcIi4veC1wc2V1ZG9cIjogMTg4LFxuXHRcIi4veC1wc2V1ZG8uanNcIjogMTg4LFxuXHRcIi4veW9cIjogMTg5LFxuXHRcIi4veW8uanNcIjogMTg5LFxuXHRcIi4vemgtY25cIjogMTkwLFxuXHRcIi4vemgtY24uanNcIjogMTkwLFxuXHRcIi4vemgtaGtcIjogMTkxLFxuXHRcIi4vemgtaGsuanNcIjogMTkxLFxuXHRcIi4vemgtdHdcIjogMTkyLFxuXHRcIi4vemgtdHcuanNcIjogMTkyXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjU7Il0sInNvdXJjZVJvb3QiOiIifQ==