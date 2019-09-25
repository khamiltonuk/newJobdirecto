(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostType; });
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
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);










var PostType =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PostType, _React$Component);

  function PostType(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PostType);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PostType).call(this, props));
    _this.state = {};
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PostType, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, event.target.name, event.target.value), function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      console.log("where this", this.state);

      if (this.state.posterStatus == "seeksJob") {
        this.props.navigation.navigate("/personForm");
      } else if (this.state.posterStatus == "offersService") {
        this.props.navigation.navigate("/serviceForm");
      } else {
        this.props.navigation.navigate("/jobForm");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "heading-1"
      }, this.context.postType.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "postTypeOptions"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "text",
        htmlFor: "seeksPeople"
      }, this.context.postType.seeksPeople, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "radio postTypeButton",
        id: "seeksPeople",
        type: "radio",
        name: "posterStatus",
        value: "seeksPeople",
        onChange: this.handleChange,
        required: "required"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "postTypeOptions"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "text",
        htmlFor: "seeksJob"
      }, this.context.postType.seeksJob, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "seeksJob",
        className: "radio postTypeButton",
        type: "radio",
        name: "posterStatus",
        value: "seeksJob",
        onChange: this.handleChange,
        required: "required"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "postTypeOptions"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "buttonBasic",
        type: "submit",
        value: this.context.postType.button
      })));
    }
  }]);

  return PostType;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


PostType.contextType = _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvUG9zdFR5cGUvUG9zdFR5cGVDb250cm9sbGVyLmpzeCJdLCJuYW1lcyI6WyJQb3N0VHlwZSIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0ZXJTdGF0dXMiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGUiLCJjb250ZXh0IiwicG9zdFR5cGUiLCJ0aXRsZSIsInNlZWtzUGVvcGxlIiwic2Vla3NKb2IiLCJidXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlIiwiTGFuZ3VhZ2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBR3FCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDRNQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLDRGQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsNEZBQXBCO0FBSmU7QUFLbEI7Ozs7aUNBRVlFLEssRUFBTztBQUFBOztBQUNoQixXQUFLQyxRQUFMLGtGQUVTRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFGdEIsRUFFNkJILEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxLQUYxQyxHQUlJLFlBQU07QUFDRkMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBSSxDQUFDVixLQUFqQjtBQUNILE9BTkw7QUFRSDs7O2lDQUVZSSxLLEVBQU87QUFDaEJLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsS0FBS1YsS0FBL0I7O0FBQ0EsVUFBSSxLQUFLQSxLQUFMLENBQVdXLFlBQVgsSUFBMkIsVUFBL0IsRUFBMkM7QUFDdkMsYUFBS1osS0FBTCxDQUFXYSxVQUFYLENBQXNCQyxRQUF0QixDQUErQixhQUEvQjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUtiLEtBQUwsQ0FBV1csWUFBWCxJQUEyQixlQUEvQixFQUFnRDtBQUNuRCxhQUFLWixLQUFMLENBQVdhLFVBQVgsQ0FBc0JDLFFBQXRCLENBQStCLGNBQS9CO0FBQ0gsT0FGTSxNQUVBO0FBQ0gsYUFBS2QsS0FBTCxDQUFXYSxVQUFYLENBQXNCQyxRQUF0QixDQUErQixVQUEvQjtBQUVIO0FBQ0o7Ozs2QkFFUTtBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFNLGdCQUFRLEVBQUUsS0FBS1Y7QUFBckIsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUEyQixLQUFLVyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JDLEtBQWpELENBREosRUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQU8saUJBQVMsRUFBQyxNQUFqQjtBQUF3QixlQUFPLEVBQUM7QUFBaEMsU0FDSyxLQUFLRixPQUFMLENBQWFDLFFBQWIsQ0FBc0JFLFdBRDNCLEVBRUk7QUFDSSxpQkFBUyxFQUFDLHNCQURkO0FBRUksVUFBRSxFQUFDLGFBRlA7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLFlBQUksRUFBQyxjQUpUO0FBS0ksYUFBSyxFQUFDLGFBTFY7QUFNSSxnQkFBUSxFQUFFLEtBQUtoQixZQU5uQjtBQU9JLGdCQUFRLEVBQUM7QUFQYixRQUZKLENBREosQ0FGSixFQWdCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVJO0FBQU8saUJBQVMsRUFBQyxNQUFqQjtBQUF3QixlQUFPLEVBQUM7QUFBaEMsU0FDSyxLQUFLYSxPQUFMLENBQWFDLFFBQWIsQ0FBc0JHLFFBRDNCLEVBRUk7QUFDSSxVQUFFLEVBQUMsVUFEUDtBQUVJLGlCQUFTLEVBQUMsc0JBRmQ7QUFHSSxZQUFJLEVBQUMsT0FIVDtBQUlJLFlBQUksRUFBQyxjQUpUO0FBS0ksYUFBSyxFQUFDLFVBTFY7QUFNSSxnQkFBUSxFQUFFLEtBQUtqQixZQU5uQjtBQU9JLGdCQUFRLEVBQUM7QUFQYixRQUZKLENBRkosQ0FoQkosRUFnQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFoQ0osRUFvQ0k7QUFDSSxpQkFBUyxFQUFDLGFBRGQ7QUFFSSxZQUFJLEVBQUMsUUFGVDtBQUdJLGFBQUssRUFBRSxLQUFLYSxPQUFMLENBQWFDLFFBQWIsQ0FBc0JJO0FBSGpDLFFBcENKLENBREosQ0FESjtBQThDSDs7OztFQTlFaUNDLDRDQUFLLENBQUNDLFM7OztBQWlGNUN2QixRQUFRLENBQUN3QixXQUFULEdBQXVCQyxvRkFBdkIsQyIsImZpbGUiOiIxMWQxMzQ4YmE1YTA4MDhjYWJjMTRiLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xhbmd1YWdlL0xhbmd1YWdlQ29udGV4dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RUeXBlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndoZXJlIHRoaXNcIiwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBvc3RlclN0YXR1cyA9PSBcInNlZWtzSm9iXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGlvbi5uYXZpZ2F0ZShcIi9wZXJzb25Gb3JtXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucG9zdGVyU3RhdHVzID09IFwib2ZmZXJzU2VydmljZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRpb24ubmF2aWdhdGUoXCIvc2VydmljZUZvcm1cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRpb24ubmF2aWdhdGUoXCIvam9iRm9ybVwiKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy0xXCI+e3RoaXMuY29udGV4dC5wb3N0VHlwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUeXBlT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHRcIiBodG1sRm9yPVwic2Vla3NQZW9wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnBvc3RUeXBlLnNlZWtzUGVvcGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBwb3N0VHlwZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vla3NQZW9wbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9zdGVyU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWVrc1Blb3BsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RUeXBlT3B0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dFwiIGh0bWxGb3I9XCJzZWVrc0pvYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucG9zdFR5cGUuc2Vla3NKb2J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vla3NKb2JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpbyBwb3N0VHlwZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb3N0ZXJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlZWtzSm9iXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0VHlwZU9wdGlvbnNcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbkJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY29udGV4dC5wb3N0VHlwZS5idXR0b259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Qb3N0VHlwZS5jb250ZXh0VHlwZSA9IExhbmd1YWdlQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=