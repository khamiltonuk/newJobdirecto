(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonConfirm", function() { return PersonConfirm; });
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











var PersonConfirm =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PersonConfirm, _React$Component);

  function PersonConfirm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PersonConfirm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PersonConfirm).call(this, props));
    _this.state = {
      value: ""
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PersonConfirm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/getPersonInfo").then(function (result) {
        if (result.data.success == false) {
          return null;
        } else {
          _this2.setState({
            personData: result.data
          });
        }
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, event.target.name, event.target.value));
      this.props.navigation.navigate("/");
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/publishPerson", this.state).then(function (resp) {
        if (resp.data.success) {
          _this3.setState({
            personData: ""
          });

          _this3.props.history.push("/");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.personData) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jobConfirmPage"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "confirmTitle heading-1"
      }, "Su anuncio esta listo para ser publicado:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Nombre:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Busca de:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personSkill)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Area de preferencia:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personArea)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Horario de preferencia:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personSchedule)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Numero:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personNumber)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, "Mas informacion:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jobDetailsText"
      }, this.state.personData.data.personExtraInfo))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "confirmButtons"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onClick: this.handleSubmit,
        className: "buttonBasic",
        type: "submit",
        value: "Publicar"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "contactInfo"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, this.context.contactInfo.contactInfo))));
    }
  }]);

  return PersonConfirm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
PersonConfirm.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_9__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUGVyc29uQ29uZmlybS9QZXJzb25Db25maXJtQ29udHJvbGxlci5qc3giXSwibmFtZXMiOlsiUGVyc29uQ29uZmlybSIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwic3VjY2VzcyIsInNldFN0YXRlIiwicGVyc29uRGF0YSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0ZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInJlc3AiLCJoaXN0b3J5IiwicHVzaCIsInBlcnNvbk5hbWUiLCJwZXJzb25Ta2lsbCIsInBlcnNvbkFyZWEiLCJwZXJzb25TY2hlZHVsZSIsInBlcnNvbk51bWJlciIsInBlcnNvbkV4dHJhSW5mbyIsImNvbnRleHQiLCJjb250YWN0SW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGUiLCJMYW5ndWFnZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsaU5BQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFO0FBREUsS0FBYjtBQUdBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsNEZBQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQiw0RkFBcEI7QUFOZTtBQU9sQjs7QUFSTDtBQUFBO0FBQUEsd0NBVXdCO0FBQUE7O0FBQ2hCRSxrREFBSyxDQUFDQyxHQUFOLENBQVUsZ0JBQVYsRUFBNEJDLElB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QVMsRUFBQyxhQUZkO0FBR0ksWUFBSSxFQUFDLFFBSFQ7QUFJSSxhQUFLLEVBQUM7QUFKVixRQURKLENBSkosQ0EvQ0osRUE0REk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSxzRUFBSSxLQUFLeUIsT0FBTCxDQUFhQyxXQUFiLENBQXlCQSxXQUE3QixDQURKLENBNURKLENBREosQ0FESjtBQW9FSDtBQWxITDs7QUFBQTtBQUFBLEVBQW1DQyw0Q0FBSyxDQUFDQyxTQUF6QztBQXFIQWxDLGFBQWEsQ0FBQ21DLFdBQWQsR0FBNEJDLG9GQUE1QixDIiwiZmlsZSI6IjEyMWViZTY2NTlkMmNkNGVhMjQxY2IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgUGVyc29uQ29uZmlybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldChcIi9nZXRQZXJzb25JbmZvXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdWNjZXNzID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwZXJzb25EYXRhOiByZXN1bHQuZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9cIik7XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF4aW9zLnBvc3QoXCIvcHVibGlzaFBlcnNvblwiLCB0aGlzLnN0YXRlKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkRhdGE6IFwiXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnBlcnNvbkRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iQ29uZmlybVBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29uZmlybVRpdGxlIGhlYWRpbmctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3UgYW51bmNpbyBlc3RhIGxpc3RvIHBhcmEgc2VyIHB1YmxpY2FkbzpcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPk5vbWJyZTo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJzb25EYXRhLmRhdGEucGVyc29uTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5CdXNjYSBkZTo8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJzb25EYXRhLmRhdGEucGVyc29uU2tpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJlYSBkZSBwcmVmZXJlbmNpYTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJzb25EYXRhLmRhdGEucGVyc29uQXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiam9iRGV0YWlsc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9yYXJpbyBkZSBwcmVmZXJlbmNpYTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJqb2JEZXRhaWxzVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJzb25EYXRhLmRhdGEucGVyc29uU2NoZWR1bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+TnVtZXJvOjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlcnNvbkRhdGEuZGF0YS5wZXJzb25OdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+TWFzIGluZm9ybWFjaW9uOjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImpvYkRldGFpbHNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlcnNvbkRhdGEuZGF0YS5wZXJzb25FeHRyYUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlybUJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgPExpbmsgdG89XCIvam9iRm9ybVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvcnJlZ2lyXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uQmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJQdWJsaWNhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLmNvbnRleHQuY29udGFjdEluZm8uY29udGFjdEluZm99PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBlcnNvbkNvbmZpcm0uY29udGV4dFR5cGUgPSBMYW5ndWFnZUNvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9