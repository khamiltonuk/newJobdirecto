(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobForm; });
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
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);












var JobForm =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(JobForm, _React$Component);

  function JobForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, JobForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(JobForm).call(this, props));
    _this.state = {
      otherArea: ""
    };
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.submission = _this.submission.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(JobForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "submission",
    value: function submission() {
      if (this.state.area === this.context.jobForm.filterOtherArea) {
        this.setState({
          area: this.state.otherArea,
          otherArea: this.state.area
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, event.target.name, event.target.value), function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "handleCheckboxChange",
    value: function handleCheckboxChange() {
      var _this3 = this;

      this.setState({
        urgent: event.target.checked
      }, function () {
        console.log(_this3.state);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();

      if (this.state.urgent === true) {
        this.props.navigation.navigate("/prePayJob", {
          state: this.state
        });
      } else {
        this.props.navigation.navigate("/JobConfirm", {
          state: this.state
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jobForm"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        id: "formTitle",
        className: "heading-1"
      }, "JobDirecto"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "restname",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.restname : "",
        required: "required",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question2), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "jobtype",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.jobtype : "",
        required: "required",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question3), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "hourpay",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.hourpay : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question4), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "text",
        htmlFor: "Cash"
      }, this.context.jobForm.payType1, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "radio",
        id: "Cash",
        type: "radio",
        name: "typepay",
        value: this.context.jobForm.payType1,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "text",
        htmlFor: "Check"
      }, this.context.jobForm.payType2, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "Check",
        className: "radio ",
        type: "radio",
        name: "typepay",
        value: this.context.jobForm.payType2,
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "text",
        htmlFor: "CashAndCheck"
      }, this.context.jobForm.payType3, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "offersService",
        className: "radio",
        type: "radio",
        name: "typepay",
        value: this.context.jobForm.payType3,
        onChange: this.handleChange
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, " ", this.context.jobForm.question5), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "schedule",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.schedule : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question6), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "address",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.address : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question7), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "areaInput",
        className: "formInputs",
        type: "text",
        name: "area",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.area : "",
        required: "required",
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Manhattan",
        value: "Manhattan"
      }, "Manhattan"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Brooklyn",
        value: "Brooklyn"
      }, "Brooklyn"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Bronx",
        value: "Bronx"
      }, "Bronx"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Queens",
        value: "Queens"
      }, "Queens"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Staten Island",
        value: "Staten Island"
      }, "Staten Island"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: this.state.jobData && this.state.jobData.data && this.state.jobData.data.area == "Otra area en NY",
        value: this.context.jobForm.filterOtherArea
      }, this.context.jobForm.filterOtherArea)), this.state.area === this.context.jobForm.filterOtherArea && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions",
        style: {
          color: "blue"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, this.context.jobForm.extraArea)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        autoFocus: true,
        className: "formInputs",
        type: "text",
        name: "otherArea",
        required: "required",
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question8), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "phone",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.phone : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question9), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "formInputs",
        type: "text",
        name: "contact",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.contact : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "formQuestions"
      }, this.context.jobForm.question10), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        className: "formInputs extraInfo bigInput",
        type: "text",
        name: "extrainfo",
        defaultValue: this.state.jobData && this.state.jobData.data ? this.state.jobData.data.extrainfo : "",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        id: "topPostCall",
        htmlFor: "urgentCheckBox"
      }, this.context.jobForm.question11), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "yesAndCheckbox"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text",
        id: "si"
      }, " ", this.context.jobForm.specialAnswer), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "urgentCheckBox",
        type: "checkbox",
        name: "urgent",
        onChange: this.handleCheckboxChange
      })), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null)), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "buttonBasic",
        onClick: this.submission,
        type: "submit",
        value: this.context.jobForm.jobFormButton
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text verifyCall"
      }, " ", this.context.jobForm.verifyCall1, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        className: "callToLogin",
        to: "/login"
      }, this.context.jobForm.verifyCall2, "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "star starJobForm",
        src: "star.png"
      }), " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null)));
    }
  }]);

  return JobForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


JobForm.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_10__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvSm9iRm9ybS9Kb2JGb3JtQ29udHJvbGxlci5qc3giXSwibmFtZXMiOlsiSm9iRm9ybSIsInByb3BzIiwic3RhdGUiLCJvdGhlckFyZWEiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJzdWJtaXNzaW9uIiwiYXJlYSIsImNvbnRleHQiLCJqb2JGb3JtIiwiZmlsdGVyT3RoZXJBcmVhIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1cmdlbnQiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGUiLCJxdWVzdGlvbjEiLCJqb2JEYXRhIiwiZGF0YSIsInJlc3RuYW1lIiwicXVlc3Rpb24yIiwiam9idHlwZSIsInF1ZXN0aW9uMyIsImhvdXJwYXkiLCJxdWVzdGlvbjQiLCJwYXlUeXBlMSIsInBheVR5cGUyIiwicGF5VHlwZTMiLCJxdWVzdGlvbjUiLCJzY2hlZHVsZSIsInF1ZXN0aW9uNiIsImFkZHJlc3MiLCJxdWVzdGlvbjciLCJjb2xvciIsImV4dHJhQXJlYSIsInF1ZXN0aW9uOCIsInBob25lIiwicXVlc3Rpb245IiwiY29udGFjdCIsInF1ZXN0aW9uMTAiLCJleHRyYWluZm8iLCJxdWVzdGlvbjExIiwic3BlY2lhbEFuc3dlciIsImpvYkZvcm1CdXR0b24iLCJ2ZXJpZnlDYWxsMSIsInZlcmlmeUNhbGwyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZSIsIkxhbmd1YWdlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBQ2pCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsMk1BQU1BLEtBQU47QUFD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cFJKLEVBcVJJLHNFQXJSSixFQXNSSTtBQUNJLGlCQUFTLEVBQUMsYUFEZDtBQUVJLGVBQU8sRUFBRSxLQUFLQyxVQUZsQjtBQUdJLFlBQUksRUFBQyxRQUhUO0FBSUksYUFBSyxFQUFFLEtBQUtFLE9BQUwsQ0FBYUMsT0FBYixDQUFxQnlDO0FBSmhDLFFBdFJKLEVBNFJJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQ0ssR0FETCxFQUVLLEtBQUsxQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIwQyxXQUYxQixFQUV1QyxHQUZ2QyxFQUdJLDJEQUFDLGtEQUFEO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUE4QixVQUFFLEVBQUM7QUFBakMsU0FDSyxLQUFLM0MsT0FBTCxDQUFhQyxPQUFiLENBQXFCMkMsV0FEMUIsVUFHSTtBQUNJLGlCQUFTLEVBQUMsa0JBRGQ7QUFFSSxXQUFHLEVBQUM7QUFGUixRQUhKLEVBTU8sR0FOUCxDQUhKLENBNVJKLEVBd1NJLHNFQXhTSixFQXlTSSxzRUF6U0osRUEwU0ksc0VBMVNKLENBREosQ0FESjtBQWdUSDs7OztFQXpXZ0NDLDRDQUFLLENBQUNDLFM7OztBQTRXM0N4RCxPQUFPLENBQUN5RCxXQUFSLEdBQXNCQyxxRkFBdEIsQyIsImZpbGUiOiI5ZjMwNDViZDFkYmM5NTNmYmY1ZDIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb2JGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvdGhlckFyZWE6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoZWNrYm94Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWlzc2lvbiA9IHRoaXMuc3VibWlzc2lvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdWJtaXNzaW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcmVhID09PSB0aGlzLmNvbnRleHQuam9iRm9ybS5maWx0ZXJPdGhlckFyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFyZWE6IHRoaXMuc3RhdGUub3RoZXJBcmVhLFxuICAgICAgICAgICAgICAgIG90aGVyQXJlYTogdGhpcy5zdGF0ZS5hcmVhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGVja2JveENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmdlbnQ6IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS51cmdlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9wcmVQYXlKb2JcIix7c3RhdGU6dGhpcy5zdGF0ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0aW9uLm5hdmlnYXRlKFwiL0pvYkNvbmZpcm1cIix7c3RhdGU6dGhpcy5zdGF0ZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwiZm9ybVRpdGxlXCIgY2xhc3NOYW1lPVwiaGVhZGluZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBKb2JEaXJlY3RvXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1RdWVzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iRm9ybS5xdWVzdGlvbjF9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJiB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnJlc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1RdWVzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iRm9ybS5xdWVzdGlvbjJ9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJqb2J0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhICYmIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuam9idHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtUXVlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0ucXVlc3Rpb24zfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG91cnBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJiB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmhvdXJwYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybVF1ZXN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JGb3JtLnF1ZXN0aW9uNH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dFwiIGh0bWxGb3I9XCJDYXNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0ucGF5VHlwZTF9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jb250ZXh0LmpvYkZvcm0ucGF5VHlwZTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHRcIiBodG1sRm9yPVwiQ2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iRm9ybS5wYXlUeXBlMn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZXBheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY29udGV4dC5qb2JGb3JtLnBheVR5cGUyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0XCIgaHRtbEZvcj1cIkNhc2hBbmRDaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JGb3JtLnBheVR5cGUzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib2ZmZXJzU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVwYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jb250ZXh0LmpvYkZvcm0ucGF5VHlwZTN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1RdWVzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iRm9ybS5xdWVzdGlvbjV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hlZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJiB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLnNjaGVkdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtUXVlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0ucXVlc3Rpb242fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJiB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm1RdWVzdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuam9iRm9ybS5xdWVzdGlvbjd9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcmVhSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJiB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5hcmVhID09IFwiTWFuaGF0dGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJNYW5oYXR0YW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5oYXR0YW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmFyZWEgPT0gXCJCcm9va2x5blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQnJvb2tseW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9va2x5blxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuYXJlYSA9PSBcIkJyb254XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJCcm9ueFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb254XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5hcmVhID09IFwiUXVlZW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJRdWVlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9iRGF0YS5kYXRhLmFyZWEgPT0gXCJTdGF0ZW4gSXNsYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdGF0ZW4gSXNsYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVuIElzbGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGEuYXJlYSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPdHJhIGFyZWEgZW4gTllcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jb250ZXh0LmpvYkZvcm0uZmlsdGVyT3RoZXJBcmVhfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0uZmlsdGVyT3RoZXJBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcmVhID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmpvYkZvcm0uZmlsdGVyT3RoZXJBcmVhICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybVF1ZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3RoaXMuY29udGV4dC5qb2JGb3JtLmV4dHJhQXJlYX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtUXVlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0ucXVlc3Rpb244fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybUlucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEgJiYgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5waG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybVF1ZXN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JGb3JtLnF1ZXN0aW9uOX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1JbnB1dHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEgJiYgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5jb250YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtUXVlc3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0ucXVlc3Rpb24xMH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1JbnB1dHMgZXh0cmFJbmZvIGJpZ0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHRyYWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYkRhdGEgJiYgdGhpcy5zdGF0ZS5qb2JEYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmpvYkRhdGEuZGF0YS5leHRyYWluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7LyoqL31cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJ0b3BQb3N0Q2FsbFwiIGh0bWxGb3I9XCJ1cmdlbnRDaGVja0JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JGb3JtLnF1ZXN0aW9uMTF9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInllc0FuZENoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiIGlkPVwic2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0uc3BlY2lhbEFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXJnZW50Q2hlY2tCb3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJnZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbkJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY29udGV4dC5qb2JGb3JtLmpvYkZvcm1CdXR0b259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgdmVyaWZ5Q2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5qb2JGb3JtLnZlcmlmeUNhbGwxfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNhbGxUb0xvZ2luXCIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LmpvYkZvcm0udmVyaWZ5Q2FsbDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGFyIHN0YXJKb2JGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwic3Rhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Kb2JGb3JtLmNvbnRleHRUeXBlID0gTGFuZ3VhZ2VDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==