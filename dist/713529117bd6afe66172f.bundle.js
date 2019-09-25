(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobConfirm; });
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
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var JobConfirm =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(JobConfirm, _React$Component);

  function JobConfirm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, JobConfirm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(JobConfirm).call(this, props));
    _this.state = {
      value: ""
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(JobConfirm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.navigation.state) {
        this.props.navigation.navigate("/jobForm");
        return null;
      } else {
        this.setState({
          jobData: {
            data: _objectSpread({}, this.props.navigation.state, {
              active: true
            })
          }
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      console.log("aliens");
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/publishJob", _objectSpread({}, this.state)).then(function (resp) {
        console.log("common");

        if (resp.data.success) {
          console.log("success?");

          _this2.setState({
            jobData: ""
          }); //this.props.navigation.navigate("/");

        }
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/minusCounter").then(function (resp) {
        console.log("/minus meow");
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.jobData) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jobConfirmPage"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        className: "confirmTitle"
      }, "className", "heading-1"), this.context.jobConfirm.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.restname)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.position), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.jobtype)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.payment), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.hourpay)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.payType), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.typepay)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.schedule), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.schedule)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.address), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.address)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.phone), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.phone)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.contact), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.contact)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.context.jobConfirm.extraInfo), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.jobData.data.extrainfo))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "confirmButtons"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onClick: this.handleSubmit,
        className: "buttonBasic",
        type: "submit",
        value: this.context.jobConfirm.button
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, this.context.contactInfo.contactInfo))));
    }
  }]);

  return JobConfirm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


JobConfirm.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_9__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSm9iQ29uZmlybS9Kb2JDb25maXJtQ29udHJvbGxlci5qc3giXSwibmFtZXMiOlsiSm9iQ29uZmlybSIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGUiLCJzZXRTdGF0ZSIsImpvYkRhdGEiLCJkYXRhIiwiYWN0aXZlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3AiLCJzdWNjZXNzIiwiY29udGV4dCIsImpvYkNvbmZpcm0iLCJ0aXRsZSIsInJlc3RuYW1lIiwicG9zaXRpb24iLCJqb2J0eXBlIiwicGF5bWVudCIsImhvdXJwYXkiLCJwYXlUeXBlIiwidHlwZXBheSIsInNjaGVkdWxlIiwiYWRkcmVzcyIsInBob25lIiwiY29udGFjdCIsImV4dHJhSW5mbyIsImV4dHJhaW5mbyIsImJ1dHRvbiIsImNvbnRhY3RJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZSIsIkxhbmd1YWdlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztJQUdxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4TUFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUU7QUFERSxLQUFiO0FBR0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiw0RkFBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLDRGQUFwQjtBQU5lO0FBT2xCOzs7O3dDQUVtQjtBQUNoQixVQUFJLENBQUMsS0FB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O0FBRUksaUJBQVMsRUFBQyxhQUZkO0FBR0ksWUFBSSxFQUFDLFFBSFQ7QUFJSSxhQUFLLEVBQUUsS0FBS2tCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmU7QUFKbkMsUUFESixDQU5KLENBakZKLEVBZ0dJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQTZCLHNFQUFJLEtBQUtoQixPQUFMLENBQWFpQixXQUFiLENBQXlCQSxXQUE3QixDQUE3QixDQWhHSixDQURKLENBREo7QUF1R0g7Ozs7RUFqS21DQyw0Q0FBSyxDQUFDQyxTOzs7QUFvSzlDM0MsVUFBVSxDQUFDNEMsV0FBWCxHQUF5QkMsb0ZBQXpCLEMiLCJmaWxlIjoiNzEzNTI5MTE3YmQ2YWZlNjYxNzJmLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvYkNvbmZpcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMubmF2aWdhdGlvbi5zdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKFwiL2pvYkZvcm1cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGpvYkRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5uYXZpZ2F0aW9uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGllbnNcIik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF4aW9zLnBvc3QoXCIvcHVibGlzaEpvYlwiLCB7IC4uLnRoaXMuc3RhdGUgfSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tbW9uXCIpO1xuICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzP1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgam9iRGF0YTogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKFwiL1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXhpb3MucG9zdChcIi9taW51c0NvdW50ZXJcIikudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiL21pbnVzIG1lb3dcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuam9iRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JDb25maXJtUGFnZVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb25maXJtVGl0bGVcIiBjbGFzc05hbWU9XCJoZWFkaW5nLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cblxuXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj57dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEucmVzdG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuam9idHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0ucGF5bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuaG91cnBheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JDb25maXJtLnBheVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnR5cGVwYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5zY2hlZHVsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuc2NoZWR1bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iQ29uZmlybS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0ucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnBob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkNvbmZpcm0uY29udGFjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuY29udGFjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JDb25maXJtLmV4dHJhSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuZXh0cmFpbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICA8TGluayB0bz1cIi9qb2JGb3JtXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ29ycmVnaXJcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPiovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY29udGV4dC5qb2JDb25maXJtLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0SW5mb1wiPjxwPnt0aGlzLmNvbnRleHQuY29udGFjdEluZm8uY29udGFjdEluZm99PC9wPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Kb2JDb25maXJtLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==