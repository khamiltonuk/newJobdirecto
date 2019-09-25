/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "" + {"1":"af73d2aa0baed2d7eab0","3":"649f1dfd55be437dc0d6","4":"023dd399c45d69493c49","5":"3803c52ec8c840685095","6":"ebfa064a6a14af6348cf","7":"13529117bd6afe66172f","8":"5542abd84dfc96557afa","9":"f3045bd1dbc953fbf5d2","10":"c0ca0f91c161b2430ac6","11":"d1348ba5a0808cabc14b","12":"1ebe6659d2cd4ea241cb"}[chunkId] + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + {"1":"af73d2aa0baed2d7eab0","3":"649f1dfd55be437dc0d6","4":"023dd399c45d69493c49","5":"3803c52ec8c840685095","6":"ebfa064a6a14af6348cf","7":"13529117bd6afe66172f","8":"5542abd84dfc96557afa","9":"f3045bd1dbc953fbf5d2","10":"c0ca0f91c161b2430ac6","11":"d1348ba5a0808cabc14b","12":"1ebe6659d2cd4ea241cb"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



var JobsController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, 34));
});
var LoginController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 225));
});
var PrePayJobController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 226));
});
var PremiumBuyController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 228));
});
var PremiumSetController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 229));
});
var JobConfirmController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 230));
});
var PersonFormController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 231));
});
var JobFormController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 232));
});
var PrePayPersonController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 233));
});
var PostTypeController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 235));
});
var PersonConfirmController = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function (_) {
  return Promise.all(/* import() */[__webpack_require__.e(2), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 236));
});
var routes = [{
  path: "",
  component: JobsController
}, {
  path: "login",
  component: LoginController
}, {
  path: "prePayJob",
  component: PrePayJobController
}, {
  path: "premiumBuy",
  component: PremiumBuyController
}, {
  path: "premiumSet",
  component: PremiumSetController
}, {
  path: "JobConfirm",
  component: JobConfirmController
}, {
  path: "personForm",
  component: PersonFormController
}, {
  path: "jobForm",
  component: JobFormController
}, {
  path: "PrePayPerson",
  component: PrePayPersonController
}, {
  path: "postType",
  component: PostTypeController
}, {
  path: "personConfirm",
  component: PersonConfirmController
}];
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_router__WEBPACK_IMPORTED_MODULE_2__["Router"], {
  routes: routes
}), document.querySelector("#app"));

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33);















var RouterEvent = null;

function Emptydiv() {
  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null);
}

var Router =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Router, _Component);

  function Router(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Router);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Router).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), "toggleLanguage", function () {
      _this.setState(function (state) {
        return {
          languages: state.languages === _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["languages"].spanish ? _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["languages"].english : _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["languages"].spanish
        };
      });

      _this.forceUpdate();
    });

    RouterEvent = _this.changeRoute.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this));
    _this.state = {
      actualComponent: null,
      lastComponent: props.loadingComponent || Emptydiv,
      languages: _components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["languages"].spanish
    };
    _this.changeRoute = _this.changeRoute.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Router, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.changeRoute();
      window.onpopstate = this.changeRoute.bind(this);
    }
  }, {
    key: "changeRoute",
    value: function () {
      var _changeRoute = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var pathURL, routers, params, actual, i, loadingComponent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pathURL = location.hash;
                pathURL = pathURL.substr(2);

                if (this.props.transferpath) {
                  pathURL = this.props.transferpath;
                }

                if (!(!this.props.routes || !Array.isArray(this.props.routes))) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                routers = getRoutes(this.props.routes);
                params = {};
                actual = null;
                actual = routers.find(function (r) {
                  var parameters = r.path.match(/(\:([A-z]+)\/?)/g);
                  var url = r.path.replace(/(\:([A-z]+)(\/?))/g, '([\\w\-]+)$3');
                  url = url.replace(/\//g, "\\/");

                  if (new RegExp("^".concat(url, "$")).test(pathURL)) {
                    var parametersVals = new RegExp("^".concat(url, "$"), 'g').exec(pathURL);

                    if (parameters) {
                      parameters.forEach(function (e, i) {
                        params[e.replace(/(\/|\:)/g, "")] = parametersVals[i + 1];
                      });
                    }

                    return true;
                  }

                  return false;
                });

                if (!(actual && actual.guard)) {
                  _context.next = 28;
                  break;
                }

                if (!Array.isArray(actual.guard)) {
                  _context.next = 23;
                  break;
                }

                i = 0;

              case 12:
                if (!(i < actual.guard.length)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 15;
                return actual.guard[i]();

              case 15:
                if (_context.sent) {
                  _context.next = 18;
                  break;
                }

                if (this.props.guardFalse) {
                  actual = {
                    component: this.props.guardFalse
                  };
                  params.__guardfalse__ = true;
                  params.__pathguard__ = "/".concat(pathURL);
                } else {
                  actual = null;
                }

                return _context.abrupt("break", 21);

              case 18:
                i++;
                _context.next = 12;
                break;

              case 21:
                _context.next = 28;
                break;

              case 23:
                if (!(typeof actual.guard === "function")) {
                  _context.next = 28;
                  break;
                }

                _context.next = 26;
                return actual.guard();

              case 26:
                if (_context.sent) {
                  _context.next = 28;
                  break;
                }

                if (this.props.guardFalse) {
                  actual = {
                    component: this.props.guardFalse
                  };
                  params.__guardfalse__ = true;
                  params.__pathguard__ = "/".concat(pathURL);
                } else {
                  actual = null;
                }

              case 28:
                loadingComponent = this.props.loadingComponent && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(this.props.loadingComponent);

                if (actual) {
                  this.setState({
                    lastComponent: loadingComponent || this.state.actualComponent || this.state.lastComponent,
                    actualComponent: react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(actual.component, {
                      navigation: {
                        state: history.state,
                        params: params,
                        navigate: navigate,
                        goBack: goBack,
                        push: push,
                        toggleLanguage: this.toggleLanguage
                      }
                    })
                  });
                } else if (this.props.notFound) {
                  this.setState({
                    lastComponent: loadingComponent || this.state.actualComponent || this.state.lastComponent,
                    actualComponent: react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(this.props.notFound, {
                      navigation: {
                        state: history.state,
                        params: params,
                        navigate: navigate,
                        goBack: goBack,
                        push: push,
                        toggleLanguage: this.toggleLanguage
                      }
                    })
                  });
                } else {
                  this.setState({
                    lastComponent: loadingComponent || this.state.actualComponent || this.state.lastComponent,
                    actualComponent: null
                  });
                }

                actual = null;

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function changeRoute() {
        return _changeRoute.apply(this, arguments);
      }

      return changeRoute;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13__["Suspense"], {
        fallback: this.state.lastComponent
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Language_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["LanguageContext"].Provider, {
        value: this.state.languages
      }, this.state.actualComponent)));
    }
  }]);

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

function getRoutes(routers) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var guards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var r = [];
  routers = deepClone(routers);
  routers.forEach(function (e) {
    if (path) {
      path = path.endsWith("/") ? path : path + "/";
      e.path = path + e.path;
    }

    if (guards) {
      e.guard = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(e.guard || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(guards));
    }

    if (e.component) {
      r.push(e);
    }

    if (e.routes && Array.isArray(e.routes)) {
      var subRoutes = getRoutes(e.routes, e.path, e.guard);
      r = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(r), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(subRoutes));
    }
  });
  return r;
}

function deepClone(obj) {
  var clone = null;

  if (Array.isArray(obj)) {
    clone = [];

    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        clone.push(deepClone(obj[k]));
      }
    }
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(obj) == "object") {
    clone = {};

    for (var _k in obj) {
      if (obj.hasOwnProperty(_k)) {
        clone[_k] = deepClone(obj[_k]);
      }
    }
  } else {
    return obj;
  }

  return clone;
}

function navigate(to) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!to) return;

  if (options.replace) {
    history.replaceState(options.state, "", "/#".concat(to));
  } else {
    push(to, options);
  }

  if (RouterEvent) {
    RouterEvent();
  }
}

function push(to) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  history.pushState(options.state, "", "/#".concat(to));
}

function goBack() {
  history.back();
}
function Link(props) {
  var to = props.to,
      children = props.children,
      _onClick = props.onClick,
      prop = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["to", "children", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    onClick: function onClick(_) {
      if (_onClick) _onClick(_);
      navigate(to);
    },
    style: {
      cursor: "pointer"
    }
  }, prop), children);
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageContext", function() { return LanguageContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var languages = {
  spanish: {
    currentLanguage: "Español",
    main: {
      title: "Trabajos en Nueva York",
      createPost: "Crear anuncio",
      seeking: "busca",
      seeking2: "busca trabajo de",
      seeking3: "busca",
      seeking4: "ofrece servicios de",
      filterDefault: "Todo Nueva York",
      filterOtherArea: "Otra area en Nueva York",
      login: "Verificar mi cuenta",
      logout: "Salir de mi cuenta",
      welcome: "Bienvenido",
      tooltip: "El creador de este anuncio es un usuario verificado.",
      ambassador: "Embajadores JobDirecto en NY: El Kora Cesar y Oscar Figueroa",
      tooltip2: "Este anuncio ha sido reportado por distintos usuarios. Cuidado!",
      premium: "You are a premium user!"
    },
    premiumModal: {
      title: "Solo los usuarios premium pueden cerrar sus anuncios :)",
      deny: "Otro dia",
      buyPremium: "Comprar cuenta premium ($5)"
    },
    deleteModal: {
      title: "Desea eliminar este anuncio?",
      yes: "Si"
    },
    login: {
      title: "Porfavor ingrese a su cuenta para continuar",
      text: "Luego de iniciar sesion podra hacer nuevas cosas, como reportar anuncios indebidos o borrar sus anuncios cuando ya no los necesite (cuenta premium)",
      button: "Iniciar Sesión con Facebook"
    },
    postType: {
      title: "Que busca?",
      seeksJob: "Busco Trabajo",
      seeksPeople: "Busco Personal",
      offersService: "Ofrezco Servicios",
      button: "Siguiente"
    },
    jobForm: {
      question1: "Como se llama su negocio?",
      question2: "Que busca?",
      question3: "Cuanto paga?",
      question4: "Paga en cheque o cash?",
      question5: "Cual es el horario?",
      question6: "Direccion del local:",
      question7: "En que area se encuentra?",
      question8: "Numero de celular? (opcional)",
      question9: "Por quien preguntar?",
      question10: "Algo que desee agregar?",
      question11: "Desea que su anuncio tenga color y este por encima del resto? Esto cuesta $10.",
      jobFormButton: "Listo",
      payType1: "Cash",
      payType2: "Cheque",
      payType3: "Cash y Cheque",
      filterOtherArea: "Otra area en NY",
      title: "Encuentre al mejor personal para su negocio",
      extraArea: "Cual es el nombre del area donde esta ubicado?",
      specialAnswer: "Si, quiero que mi anuncio sea especial",
      verifyCall1: "Tip: Si desea cerrar sus anuncios cuando ya no los necesite, primero debe",
      verifyCall2: "crear una cuenta.",
      linkReferral: "Todos los trabajos en www.jobdirecto.com"
    },
    jobConfirm: {
      title: "Su anuncio",
      name: "Nombre:",
      position: "Puesto:",
      payment: "Salario:",
      payType: "Paga en:",
      schedule: "Horario:",
      address: "Direccion:",
      area: "Area:",
      phone: "Numero:",
      contact: "Preguntar por:",
      extraInfo: "Mas informacion:",
      button: "Publicar"
    },
    modalJob: {
      reportedAlready: "Usted ya ha reportado este anuncio. Si 10 personas reportan el mismo anuncio, le daremos bandera roja",
      thanksForReporting: "Gracias por reportar este anuncio. Si 10 personas reportan el mismo anuncio, le daremos bandera roja",
      pleaseLogin: "Para poder reportar un anuncio, primero debe",
      pleaseLogin2: "crear una cuenta JobDirecto",
      report: "Reportar",
      pleaseReport: "Si cree que este anuncio es indebido, porfavor reportelo."
    },
    personModal: {
      name: "Nombre:",
      status1: "Busca:",
      status2: "Servicios de:",
      experience: "Experiencia:",
      schedule: "Horario:",
      area: "Area:",
      phone: "Numero:",
      extraInfo: "Mas info:"
    },
    PrePayPerson: {
      text1: "Los anuncios para buscar trabajo tienen un costo de 10 dolares",
      text2: "Su anuncio no sera borrado",
      text3: "y se mantendra al top de la lista de anuncios por 48 horas.",
      button: "Gracias ya no deseo",
      buttonPay: "Pagar $10"
    },
    contactInfo: {
      contactInfo: "Si tiene preguntas, quejas o sugerencias, porfavor envie un correo a me@wilfredocasas.com"
    },
    premiumSet: {
      title: "Gracias por con confiar en JobDirecto!",
      activate: "Activar cuenta premium"
    },
    serviceModal: {
      name: "Nombre:",
      serviceOffered: "Servicio que ofrece:",
      serviceNumber: "Numero:",
      serviceExtraInfo: "Mas info:"
    },
    jobPayPage: {
      title: "Usted a marcado anuncio TOP",
      text1: "Los anuncios TOP son de otro color y se mantienen al top de la lista por 48 horas.",
      text2: "Si desea encontrar al mejor personal lo mas rapido posible, esta es la mejor opcion para usted.",
      buttonNO: "Quiero un anuncio gratis y comun",
      buttonYES: "Pagar $10"
    },
    serviceConfirm: {
      title: "Su anuncio esta listo para ser publicado:",
      serviceOwner: "Nombre: ",
      serviceOffered: "Servicio que ofrece: ",
      area: "Area: ",
      serviceNumber: "Numero:",
      serviceExtraInfo: "Mas info:",
      button: "Publicar anuncio"
    },
    serviceForm: {
      serviceOwner: "Cual es su nombre o el de su compania?",
      serviceOffered: "Que servicios ofrece?",
      serviceNumber: "A que numero pueden llamarlo?",
      serviceExtraInfo: "Algo que desee agregar?",
      button: "Listo",
      placeholder: "Aqui puede poner cualquier informacion que le ayude a vender mejor sus servicios"
    }
  },
  english: {
    currentLanguage: "English",
    main: {
      title: "Jobs in New York",
      createPost: "New Post",
      seeking: "needs",
      seeking2: "is looking for a job as",
      seeking3: "is looking for a",
      seeking4: "offers services as",
      filterDefault: "All NY",
      filterOtherArea: "Other area in NY",
      login: "Verify my account",
      logout: "Logout",
      welcome: "Welcome",
      tooltip: "The author of this post is a verified user.",
      tooltip2: "This post has been reported by different users. Be careful!",
      premium: "You are a premium user!",
      ambassador: "JobDirecto ambassador in NY: El Kora Cesar"
    },
    modalJob: {
      reportedAlready: "You already reported this post.",
      thanksForReporting: "Thanks for reporting this post",
      pleaseLogin: "To report a post, first you must",
      pleaseLogin2: "create an account",
      report: "Report",
      pleaseReport: "If you think this ad is inadequate, please report it."
    },
    serviceForm: {
      serviceOwner: "What is the name of your business?",
      serviceOffered: "What services do you offer?",
      serviceNumber: "How can people reach out to you?",
      serviceExtraInfo: "Any other info you'd like to add?",
      button: "Finish",
      placeholder: "Please add here any info that helps you sell your services better"
    },
    premiumSet: {
      title: "Thanks for trusting JobDirecto!",
      activate: "Activate premium now"
    },
    premiumModal: {
      title: "Only premium users can close their posts :)",
      deny: "Nevermind",
      buyPremium: "Get premium account ($5)"
    },
    login: {
      title: "Please login to continue",
      text: "After logging in with you will be able to do new things, such a report posts or delete your posts when you don't need them anymore (premium account)",
      button: "Login with Facebook"
    },
    postType: {
      title: "What is your post about?",
      seeksJob: "I'm looking for a job",
      seeksPeople: "I'm looking for staff",
      offersService: "I want to promote my services",
      button: "Next"
    },
    jobForm: {
      question1: "Name of your company",
      question2: "What position are you looking to fill?",
      question3: "How much do you pay?",
      question4: "Pay in check or cash?",
      question5: "Schedule",
      question6: "Address",
      question7: "Area",
      question8: "Phone Number (optional)",
      question9: "Contact name",
      question10: "Something you'd like to add?",
      question11: "Would you like this post to have color and be on top of the rest? This costs $10.",
      jobFormButton: "Finish",
      payType1: "Cash",
      payType2: "Check",
      payType3: "Cash and Check",
      filterOtherArea: "Other area in NY",
      title: "Fill out the form and find staff in seconds",
      extraArea: "What''s the name of the area?",
      specialAnswer: "Yes, I want my post to be special",
      verifyCall1: "Tip: If you'd like to delete your posts when you don't need them anymore, please",
      verifyCall2: "sign up first",
      linkReferral: "For more jobs, please go to www.jobdirecto.com"
    },
    contactInfo: {
      contactInfo: "If you have questions, suggestions or complains, please send an email to me@wilfredocasas.com"
    },
    jobConfirm: {
      title: "Your post",
      name: "Name:",
      position: "Looking for:",
      payment: "Salary:",
      payType: "Pays in:",
      schedule: "Schedule:",
      address: "Address:",
      area: "Area:",
      phone: "Number:",
      contact: "Ask for:",
      extraInfo: "More info:",
      button: "Publish"
    },
    deleteModal: {
      title: "Do you want to delete this post?",
      yes: "Yes"
    },
    serviceConfirm: {
      title: "Your post is ready to be published:",
      serviceOwner: "Name: ",
      serviceOffered: "Service: ",
      area: "Area: ",
      serviceNumber: "Phone Number:",
      serviceExtraInfo: "Extra Info:",
      button: "Publish Post"
    },
    PrePayPerson: {
      text1: "Posts to promote services cost $10",
      text2: "Your post will stay on top of the page for 48 hours",
      text3: "and it will have a different color.",
      button: "No thanks",
      buttonPay: "Pay $10"
    },
    personModal: {
      name: "Name:",
      status1: "Looking to work as:",
      status2: "Offers service of:",
      experience: "Experience:",
      schedule: "Schedule:",
      area: "Area:",
      phone: "Number:",
      extraInfo: "More info:"
    },
    serviceModal: {
      name: "Name:",
      serviceOffered: "Service:",
      serviceNumber: "Number:",
      serviceExtraInfo: "Extra info:"
    },
    jobPayPage: {
      title: "You chose TOP post",
      text1: "TOP posts are of a different color and stay on top of the list for 48 hours.",
      text2: "If you are looking for top staff as quickly as possible, this is what you need.",
      buttonNO: "I want a free and normal post",
      buttonYES: "Pay $10"
    }
  }
};
var LanguageContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(languages.spanish);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JvdXRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0LmpzeCJdLCJuYW1lcyI6WyJKb2JzQ29udHJvbGxlciIsIlJlYWN0IiwibGF6eSIsIl8iLCJMb2dpbkNvbnRyb2xsZXIiLCJQcmVQYXlKb2JDb250cm9sbGVyIiwiUHJlbWl1bUJ1eUNvbnRyb2xsZXIiLCJQcmVtaXVtU2V0Q29udHJvbGxlciIsIkpvYkNvbmZpcm1Db250cm9sbGVyIiwiUGVyc29uRm9ybUNvbnRyb2xsZXIiLCJKb2JGb3JtQ29udHJvbGxlciIsIlByZVBheVBlcnNvbkNvbnRyb2xsZXIiLCJQb3N0VHlwZUNvbnRyb2xsZXIiLCJQZXJzb25Db25maXJtQ29udHJvbGxlciIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJvdXRlckV2ZW50IiwiRW1wdHlkaXYiLCJSb3V0ZXIiLCJwcm9wcyIsInNldFN0YXRlIiwic3RhdGUiLCJsYW5ndWFnZXMiLCJzcGFuaXNoIiwiZW5nbGlzaCIsImZvcmNlVXBkYXRlIiwiY2hhbmdlUm91dGUiLCJiaW5kIiwiYWN0dWFsQ29tcG9uZW50IiwibGFzdENvbXBvbmVudCIsImxvYWRpbmdDb21wb25lbnQiLCJ3aW5kb3ciLCJvbnBvcHN0YXRlIiwicGF0aFVSTCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsInRyYW5zZmVycGF0aCIsIkFycmF5IiwiaXNBcnJheSIsInJvdXRlcnMiLCJnZXRSb3V0ZXMiLCJwYXJhbXMiLCJhY3R1YWwiLCJmaW5kIiwiciIsInBhcmFtZXRlcnMiLCJtYXRjaCIsInVybCIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0ZXN0IiwicGFyYW1ldGVyc1ZhbHMiLCJleGVjIiwiZm9yRWFjaCIsImUiLCJpIiwiZ3VhcmQiLCJsZW5ndGgiLCJndWFyZEZhbHNlIiwiX19ndWFyZGZhbHNlX18iLCJfX3BhdGhndWFyZF9fIiwiY3JlYXRlRWxlbWVudCIsIm5hdmlnYXRpb24iLCJoaXN0b3J5IiwibmF2aWdhdGUiLCJnb0JhY2siLCJwdXNoIiwidG9nZ2xlTGFuZ3VhZ2UiLCJub3RGb3VuZCIsIkNvbXBvbmVudCIsImd1YXJkcyIsImRlZXBDbG9uZSIsImVuZHNXaXRoIiwic3ViUm91dGVzIiwib2JqIiwiY2xvbmUiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJ0byIsIm9wdGlvbnMiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJiYWNrIiwiTGluayIsImNoaWxkcmVuIiwib25DbGljayIsInByb3AiLCJjdXJzb3IiLCJjdXJyZW50TGFuZ3VhZ2UiLCJtYWluIiwidGl0bGUiLCJjcmVhdGVQb3N0Iiwic2Vla2luZyIsInNlZWtpbmcyIiwic2Vla2luZzMiLCJzZWVraW5nNCIsImZpbHRlckRlZmF1bHQiLCJmaWx0ZXJPdGhlckFyZWEiLCJsb2dpbiIsImxvZ291dCIsIndlbGNvbWUiLCJ0b29sdGlwIiwiYW1iYXNzYWRvciIsInRvb2x0aXAyIiwicHJlbWl1bSIsInByZW1pdW1Nb2RhbCIsImRlbnkiLCJidXlQcmVtaXVtIiwiZGVsZXRlTW9kYWwiLCJ5ZXMiLCJ0ZXh0IiwiYnV0dG9uIiwicG9zdFR5cGUiLCJzZWVrc0pvYiIsInNlZWtzUGVvcGxlIiwib2ZmZXJzU2VydmljZSIsImpvYkZvcm0iLCJxdWVzdGlvbjEiLCJxdWVzdGlvbjIiLCJxdWVzdGlvbjMiLCJxdWVzdGlvbjQiLCJxdWVzdGlvbjUiLCJxdWVzdGlvbjYiLCJxdWVzdGlvbjciLCJxdWVzdGlvbjgiLCJxdWVzdGlvbjkiLCJxdWVzdGlvbjEwIiwicXVlc3Rpb24xMSIsImpvYkZvcm1CdXR0b24iLCJwYXlUeXBlMSIsInBheVR5cGUyIiwicGF5VHlwZTMiLCJleHRyYUFyZWEiLCJzcGVjaWFsQW5zd2VyIiwidmVyaWZ5Q2FsbDEiLCJ2ZXJpZnlDYWxsMiIsImxpbmtSZWZlcnJhbCIsImpvYkNvbmZpcm0iLCJuYW1lIiwicG9zaXRpb24iLCJwYXltZW50IiwicGF5VHlwZSIsInNjaGVkdWxlIiwiYWRkcmVzcyIsImFyZWEiLCJwaG9uZSIsImNvbnRhY3QiLCJleHRyYUluZm8iLCJtb2RhbEpvYiIsInJlcG9ydGVkQWxyZWFkeSIsInRoYW5rc0ZvclJlcG9ydGluZyIsInBsZWFzZUxvZ2luIiwicGxlYXNlTG9naW4yIiwicmVwb3J0IiwicGxlYXNlUmVwb3J0IiwicGVyc29uTW9kYWwiLCJzdGF0dXMxIiwic3RhdHVzMiIsImV4cGVyaWVuY2UiLCJQcmVQYXlQZXJzb24iLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiLCJidXR0b25QYXkiLCJjb250YWN0SW5mbyIsInByZW1pdW1TZXQiLCJhY3RpdmF0ZSIsInNlcnZpY2VNb2RhbCIsInNlcnZpY2VPZmZlcmVkIiwic2VydmljZU51bWJlciIsInNlcnZpY2VFeHRyYUluZm8iLCJqb2JQYXlQYWdlIiwiYnV0dG9uTk8iLCJidXR0b25ZRVMiLCJzZXJ2aWNlQ29uZmlybSIsInNlcnZpY2VPd25lciIsInNlcnZpY2VGb3JtIiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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RUFDRCxpRkFMSTtBQU1SVyxjQUFRLEVBQUUsK0JBTkY7QUFPUkMsZUFBUyxFQUFFO0FBUEg7QUFqSlA7QUE5SlksQ0FBbEI7QUEyVEEsSUFBTUssZUFBZSxHQUFHdkwsNENBQUssQ0FBQ3dMLGFBQU4sQ0FBb0I5SixTQUFTLENBQUNDLE9BQTlCLENBQXhCLEMiLCJmaWxlIjoiYXNzZXRzL2pzL2luZGV4YTc4NzBiODUyMTc3OWEwZTUxMzcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fVxuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIlwiICsge1wiMVwiOlwiYWY3M2QyYWEwYmFlZDJkN2VhYjBcIixcIjNcIjpcIjY0OWYxZGZkNTViZTQzN2RjMGQ2XCIsXCI0XCI6XCIwMjNkZDM5OWM0NWQ2OTQ5M2M0OVwiLFwiNVwiOlwiMzgwM2M1MmVjOGM4NDA2ODUwOTVcIixcIjZcIjpcImViZmEwNjRhNmExNGFmNjM0OGNmXCIsXCI3XCI6XCIxMzUyOTExN2JkNmFmZTY2MTcyZlwiLFwiOFwiOlwiNTU0MmFiZDg0ZGZjOTY1NTdhZmFcIixcIjlcIjpcImYzMDQ1YmQxZGJjOTUzZmJmNWQyXCIsXCIxMFwiOlwiYzBjYTBmOTFjMTYxYjI0MzBhYzZcIixcIjExXCI6XCJkMTM0OGJhNWEwODA4Y2FiYzE0YlwiLFwiMTJcIjpcIjFlYmU2NjU5ZDJjZDRlYTI0MWNiXCJ9W2NodW5rSWRdICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIENTUyBsb2FkaW5nXG4gXHRcdHZhciBjc3NDaHVua3MgPSB7XCIxXCI6MX07XG4gXHRcdGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSkgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRlbHNlIGlmKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSAhPT0gMCAmJiBjc3NDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0dmFyIGhyZWYgPSBcIlwiICsge1wiMVwiOlwiYWY3M2QyYWEwYmFlZDJkN2VhYjBcIixcIjNcIjpcIjY0OWYxZGZkNTViZTQzN2RjMGQ2XCIsXCI0XCI6XCIwMjNkZDM5OWM0NWQ2OTQ5M2M0OVwiLFwiNVwiOlwiMzgwM2M1MmVjOGM4NDA2ODUwOTVcIixcIjZcIjpcImViZmEwNjRhNmExNGFmNjM0OGNmXCIsXCI3XCI6XCIxMzUyOTExN2JkNmFmZTY2MTcyZlwiLFwiOFwiOlwiNTU0MmFiZDg0ZGZjOTY1NTdhZmFcIixcIjlcIjpcImYzMDQ1YmQxZGJjOTUzZmJmNWQyXCIsXCIxMFwiOlwiYzBjYTBmOTFjMTYxYjI0MzBhYzZcIixcIjExXCI6XCJkMTM0OGJhNWEwODA4Y2FiYzE0YlwiLFwiMTJcIjpcIjFlYmU2NjU5ZDJjZDRlYTI0MWNiXCJ9W2NodW5rSWRdICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdXG4gXHRcdFx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsMl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vdXRpbHMvcm91dGVyXCI7XG5cblxuY29uc3QgSm9ic0NvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvSm9icy9Kb2JzQ29udHJvbGxlclwiKSk7XG5jb25zdCBMb2dpbkNvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvTG9naW4vTG9naW5Db250cm9sbGVyXCIpKTtcbmNvbnN0IFByZVBheUpvYkNvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvUHJlUGF5Sm9iL1ByZVBheUpvYkNvbnRyb2xsZXJcIikpO1xuY29uc3QgUHJlbWl1bUJ1eUNvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvUHJlbWl1bUJ1eS9QcmVtaXVtQnV5Q29udHJvbGxlclwiKSk7XG5jb25zdCBQcmVtaXVtU2V0Q29udHJvbGxlciA9IFJlYWN0LmxhenkoXz0+aW1wb3J0KFwiLi9wYWdlcy9QcmVtaXVtU2V0L1ByZW1pdW1TZXRDb250cm9sbGVyXCIpKTtcbmNvbnN0IEpvYkNvbmZpcm1Db250cm9sbGVyID0gUmVhY3QubGF6eShfPT5pbXBvcnQoXCIuL3BhZ2VzL0pvYkNvbmZpcm0vSm9iQ29uZmlybUNvbnRyb2xsZXJcIikpO1xuY29uc3QgUGVyc29uRm9ybUNvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvUGVyc29uRm9ybS9QZXJzb25Gb3JtQ29udHJvbGxlclwiKSk7XG5jb25zdCBKb2JGb3JtQ29udHJvbGxlciA9IFJlYWN0LmxhenkoXz0+aW1wb3J0KFwiLi9wYWdlcy9Kb2JGb3JtL0pvYkZvcm1Db250cm9sbGVyXCIpKTtcbmNvbnN0IFByZVBheVBlcnNvbkNvbnRyb2xsZXIgPSBSZWFjdC5sYXp5KF89PmltcG9ydChcIi4vcGFnZXMvUHJlUGF5UGVyc29uL1ByZVBheVBlcnNvbkNvbnRyb2xsZXJcIikpO1xuY29uc3QgUG9zdFR5cGVDb250cm9sbGVyID0gUmVhY3QubGF6eShfPT5pbXBvcnQoXCIuL3BhZ2VzL1Bvc3RUeXBlL1Bvc3RUeXBlQ29udHJvbGxlclwiKSk7XG5jb25zdCBQZXJzb25Db25maXJtQ29udHJvbGxlciA9IFJlYWN0LmxhenkoXz0+aW1wb3J0KFwiLi9wYWdlcy9QZXJzb25Db25maXJtL1BlcnNvbkNvbmZpcm1Db250cm9sbGVyXCIpKTtcblxubGV0IHJvdXRlcyA9IFtcbiAgICB7cGF0aDpcIlwiLCBjb21wb25lbnQ6Sm9ic0NvbnRyb2xsZXJ9LFxuICAgIHtwYXRoOlwibG9naW5cIiwgY29tcG9uZW50OkxvZ2luQ29udHJvbGxlcn0sXG4gICAge3BhdGg6XCJwcmVQYXlKb2JcIixjb21wb25lbnQ6UHJlUGF5Sm9iQ29udHJvbGxlcn0sXG4gICAge3BhdGg6XCJwcmVtaXVtQnV5XCIsY29tcG9uZW50OlByZW1pdW1CdXlDb250cm9sbGVyfSxcbiAgICB7cGF0aDpcInByZW1pdW1TZXRcIixjb21wb25lbnQ6UHJlbWl1bVNldENvbnRyb2xsZXJ9LFxuICAgIHtwYXRoOlwiSm9iQ29uZmlybVwiLGNvbXBvbmVudDpKb2JDb25maXJtQ29udHJvbGxlcn0sXG4gICAge3BhdGg6XCJwZXJzb25Gb3JtXCIsY29tcG9uZW50OlBlcnNvbkZvcm1Db250cm9sbGVyfSxcbiAgICB7cGF0aDpcImpvYkZvcm1cIixjb21wb25lbnQ6Sm9iRm9ybUNvbnRyb2xsZXJ9LFxuICAgIHtwYXRoOlwiUHJlUGF5UGVyc29uXCIsY29tcG9uZW50OlByZVBheVBlcnNvbkNvbnRyb2xsZXJ9LFxuICAgIHtwYXRoOlwicG9zdFR5cGVcIixjb21wb25lbnQ6UG9zdFR5cGVDb250cm9sbGVyfSxcbiAgICB7cGF0aDpcInBlcnNvbkNvbmZpcm1cIixjb21wb25lbnQ6UGVyc29uQ29uZmlybUNvbnRyb2xsZXJ9LFxuXTtcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgcm91dGVzPXtyb3V0ZXN9ICAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIikpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LFN1c3BlbnNlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQsIGxhbmd1YWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2UvTGFuZ3VhZ2VDb250ZXh0JztcblxuXG5sZXQgUm91dGVyRXZlbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBFbXB0eWRpdigpe1xuICAgIHJldHVybiA8ZGl2PjwvZGl2PlxufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBSb3V0ZXJFdmVudCA9IHRoaXMuY2hhbmdlUm91dGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdHVhbENvbXBvbmVudDpudWxsLFxuICAgICAgICAgICAgbGFzdENvbXBvbmVudDpwcm9wcy5sb2FkaW5nQ29tcG9uZW50IHx8IEVtcHR5ZGl2LFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBsYW5ndWFnZXMuc3BhbmlzaFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoYW5nZVJvdXRlID0gdGhpcy5jaGFuZ2VSb3V0ZS5iaW5kKHRoaXMpOyAgXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5jaGFuZ2VSb3V0ZSgpO1xuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IHRoaXMuY2hhbmdlUm91dGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVMYW5ndWFnZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgbGFuZ3VhZ2VzOlxuICAgICAgICAgICAgICAgIHN0YXRlLmxhbmd1YWdlcyA9PT0gbGFuZ3VhZ2VzLnNwYW5pc2hcbiAgICAgICAgICAgICAgICAgICAgPyBsYW5ndWFnZXMuZW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICA6IGxhbmd1YWdlcy5zcGFuaXNoXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfTtcblxuICAgIGFzeW5jIGNoYW5nZVJvdXRlKCl7XG4gICAgICAgIGxldCBwYXRoVVJMID0gbG9jYXRpb24uaGFzaDtcbiAgICAgICAgcGF0aFVSTCA9IHBhdGhVUkwuc3Vic3RyKDIpO1xuICAgICAgICBpZih0aGlzLnByb3BzLnRyYW5zZmVycGF0aCl7XG4gICAgICAgICAgICBwYXRoVVJMID0gdGhpcy5wcm9wcy50cmFuc2ZlcnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5wcm9wcy5yb3V0ZXMgfHwgIUFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5yb3V0ZXMpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcm91dGVycyA9IGdldFJvdXRlcyh0aGlzLnByb3BzLnJvdXRlcyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIGxldCBhY3R1YWwgPSBudWxsO1xuICAgICAgICBhY3R1YWwgPSByb3V0ZXJzLmZpbmQocj0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSByLnBhdGgubWF0Y2goLyhcXDooW0Etel0rKVxcLz8pL2cpO1xuICAgICAgICAgICAgbGV0IHVybCA9IHIucGF0aC5yZXBsYWNlKC8oXFw6KFtBLXpdKykoXFwvPykpL2csJyhbXFxcXHdcXC1dKykkMycpXG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvL2csXCJcXFxcL1wiKTtcbiAgICAgICAgICAgIGlmKG5ldyBSZWdFeHAoYF4ke3VybH0kYCkudGVzdChwYXRoVVJMKSl7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnNWYWxzID0gKG5ldyBSZWdFeHAoYF4ke3VybH0kYCwnZycpKS5leGVjKHBhdGhVUkwpO1xuICAgICAgICAgICAgICAgIGlmKHBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLmZvckVhY2goKGUsaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tlLnJlcGxhY2UoLyhcXC98XFw6KS9nLFwiXCIpXSA9IHBhcmFtZXRlcnNWYWxzW2krMV07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICBpZihhY3R1YWwgJiYgYWN0dWFsLmd1YXJkKXtcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoYWN0dWFsLmd1YXJkKSl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpPGFjdHVhbC5ndWFyZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWF3YWl0IGFjdHVhbC5ndWFyZFtpXSgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuZ3VhcmRGYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0ge2NvbXBvbmVudDp0aGlzLnByb3BzLmd1YXJkRmFsc2V9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5fX2d1YXJkZmFsc2VfXyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLl9fcGF0aGd1YXJkX18gPSBgLyR7cGF0aFVSTH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZW9mIGFjdHVhbC5ndWFyZCA9PT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgICAgICBpZighYXdhaXQgYWN0dWFsLmd1YXJkKCkpe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmd1YXJkRmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0ge2NvbXBvbmVudDp0aGlzLnByb3BzLmd1YXJkRmFsc2V9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLl9fZ3VhcmRmYWxzZV9fID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5fX3BhdGhndWFyZF9fID0gYC8ke3BhdGhVUkx9YDtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBsb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5sb2FkaW5nQ29tcG9uZW50ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5sb2FkaW5nQ29tcG9uZW50KTtcbiAgICAgICAgaWYoYWN0dWFsKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxhc3RDb21wb25lbnQ6bG9hZGluZ0NvbXBvbmVudCB8fCB0aGlzLnN0YXRlLmFjdHVhbENvbXBvbmVudCB8fCB0aGlzLnN0YXRlLmxhc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgYWN0dWFsQ29tcG9uZW50OlJlYWN0LmNyZWF0ZUVsZW1lbnQoYWN0dWFsLmNvbXBvbmVudCx7bmF2aWdhdGlvbjp7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOmhpc3Rvcnkuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdvQmFjayxcbiAgICAgICAgICAgICAgICAgICAgcHVzaCxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGFuZ3VhZ2U6IHRoaXMudG9nZ2xlTGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMubm90Rm91bmQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGFzdENvbXBvbmVudDpsb2FkaW5nQ29tcG9uZW50IHx8IHRoaXMuc3RhdGUuYWN0dWFsQ29tcG9uZW50IHx8IHRoaXMuc3RhdGUubGFzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBhY3R1YWxDb21wb25lbnQ6UmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLm5vdEZvdW5kLHtuYXZpZ2F0aW9uOntcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6aGlzdG9yeS5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSxcbiAgICAgICAgICAgICAgICAgICAgZ29CYWNrLFxuICAgICAgICAgICAgICAgICAgICBwdXNoLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYW5ndWFnZTogdGhpcy50b2dnbGVMYW5ndWFnZVxuICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXN0Q29tcG9uZW50OmxvYWRpbmdDb21wb25lbnQgfHwgdGhpcy5zdGF0ZS5hY3R1YWxDb21wb25lbnQgfHwgdGhpcy5zdGF0ZS5sYXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGFjdHVhbENvbXBvbmVudDpudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFjdHVhbCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17dGhpcy5zdGF0ZS5sYXN0Q29tcG9uZW50fT5cbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmxhbmd1YWdlc30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdHVhbENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXMocm91dGVycyxwYXRoPVwiXCIsZ3VhcmRzPVtdKXtcbiAgICBsZXQgciA9IFtdO1xuICAgIHJvdXRlcnMgPSBkZWVwQ2xvbmUocm91dGVycyk7XG4gICAgcm91dGVycy5mb3JFYWNoKGU9PntcbiAgICAgICAgaWYocGF0aCl7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5lbmRzV2l0aChcIi9cIik/cGF0aDpwYXRoK1wiL1wiO1xuICAgICAgICAgICAgZS5wYXRoID0gcGF0aCArIGUucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZihndWFyZHMpe1xuICAgICAgICAgICAgZS5ndWFyZCA9IFsuLi4oZS5ndWFyZHx8W10pLC4uLmd1YXJkc107XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS5jb21wb25lbnQpe1xuICAgICAgICAgICAgci5wdXNoKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUucm91dGVzICYmIEFycmF5LmlzQXJyYXkoZS5yb3V0ZXMpKXtcbiAgICAgICAgICAgIGxldCBzdWJSb3V0ZXMgPSBnZXRSb3V0ZXMoZS5yb3V0ZXMsZS5wYXRoLGUuZ3VhcmQpO1xuICAgICAgICAgICAgciA9IFsuLi5yLC4uLnN1YlJvdXRlc11cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGRlZXBDbG9uZShvYmope1xuICAgIGxldCBjbG9uZSA9IG51bGw7XG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmopKXtcbiAgICAgICAgY2xvbmUgPSBbXTtcbiAgICAgICAgZm9yKGxldCBrIGluIG9iail7XG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykpe1xuICAgICAgICAgICAgICAgIGNsb25lLnB1c2goZGVlcENsb25lKG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWVsc2UgaWYgKHR5cGVvZiBvYmogPT0gXCJvYmplY3RcIil7XG4gICAgICAgIGNsb25lID0ge307XG4gICAgICAgIGZvcihsZXQgayBpbiBvYmope1xuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGspKXtcbiAgICAgICAgICAgICAgICBjbG9uZVtrXSA9IGRlZXBDbG9uZShvYmpba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUodG8sb3B0aW9ucz17fSl7XG4gICAgaWYoIXRvKSByZXR1cm47XG4gICAgaWYob3B0aW9ucy5yZXBsYWNlKXtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUob3B0aW9ucy5zdGF0ZSxcIlwiLGAvIyR7dG99YCk7XG4gICAgfWVsc2V7XG4gICAgICAgIHB1c2godG8sb3B0aW9ucylcbiAgICB9XG4gICAgXG4gICAgaWYoUm91dGVyRXZlbnQpe1xuICAgICAgICBSb3V0ZXJFdmVudCgpXG4gICAgfVxufVxuZnVuY3Rpb24gcHVzaCh0byxvcHRpb25zID0ge30pe1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKG9wdGlvbnMuc3RhdGUsXCJcIixgLyMke3RvfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29CYWNrKCl7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHByb3BzKXtcbiAgICBsZXQge3RvLCBjaGlsZHJlbiwgb25DbGljaywgLi4ucHJvcH0gPSBwcm9wcztcbiAgICByZXR1cm4gKDxhIG9uQ2xpY2s9e189PntpZihvbkNsaWNrKW9uQ2xpY2soXyk7bmF2aWdhdGUodG8pO319IHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gey4uLnByb3B9PntjaGlsZHJlbn08L2E+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9IHtcbiAgICBzcGFuaXNoOiB7XG4gICAgICAgIGN1cnJlbnRMYW5ndWFnZTogXCJFc3Bhw7FvbFwiLFxuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJUcmFiYWpvcyBlbiBOdWV2YSBZb3JrXCIsXG4gICAgICAgICAgICBjcmVhdGVQb3N0OiBcIkNyZWFyIGFudW5jaW9cIixcbiAgICAgICAgICAgIHNlZWtpbmc6IFwiYnVzY2FcIixcbiAgICAgICAgICAgIHNlZWtpbmcyOiBcImJ1c2NhIHRyYWJham8gZGVcIixcbiAgICAgICAgICAgIHNlZWtpbmczOiBcImJ1c2NhXCIsXG4gICAgICAgICAgICBzZWVraW5nNDogXCJvZnJlY2Ugc2VydmljaW9zIGRlXCIsXG4gICAgICAgICAgICBmaWx0ZXJEZWZhdWx0OiBcIlRvZG8gTnVldmEgWW9ya1wiLFxuICAgICAgICAgICAgZmlsdGVyT3RoZXJBcmVhOiBcIk90cmEgYXJlYSBlbiBOdWV2YSBZb3JrXCIsXG4gICAgICAgICAgICBsb2dpbjogXCJWZXJpZmljYXIgbWkgY3VlbnRhXCIsXG4gICAgICAgICAgICBsb2dvdXQ6IFwiU2FsaXIgZGUgbWkgY3VlbnRhXCIsXG4gICAgICAgICAgICB3ZWxjb21lOiBcIkJpZW52ZW5pZG9cIixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwiRWwgY3JlYWRvciBkZSBlc3RlIGFudW5jaW8gZXMgdW4gdXN1YXJpbyB2ZXJpZmljYWRvLlwiLFxuICAgICAgICAgICAgYW1iYXNzYWRvcjpcbiAgICAgICAgICAgICAgICBcIkVtYmFqYWRvcmVzIEpvYkRpcmVjdG8gZW4gTlk6IEVsIEtvcmEgQ2VzYXIgeSBPc2NhciBGaWd1ZXJvYVwiLFxuXG4gICAgICAgICAgICB0b29sdGlwMjpcbiAgICAgICAgICAgICAgICBcIkVzdGUgYW51bmNpbyBoYSBzaWRvIHJlcG9ydGFkbyBwb3IgZGlzdGludG9zIHVzdWFyaW9zLiBDdWlkYWRvIVwiLFxuXG4gICAgICAgICAgICBwcmVtaXVtOiBcIllvdSBhcmUgYSBwcmVtaXVtIHVzZXIhXCJcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbWl1bU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJTb2xvIGxvcyB1c3VhcmlvcyBwcmVtaXVtIHB1ZWRlbiBjZXJyYXIgc3VzIGFudW5jaW9zIDopXCIsXG4gICAgICAgICAgICBkZW55OiBcIk90cm8gZGlhXCIsXG4gICAgICAgICAgICBidXlQcmVtaXVtOiBcIkNvbXByYXIgY3VlbnRhIHByZW1pdW0gKCQ1KVwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJEZXNlYSBlbGltaW5hciBlc3RlIGFudW5jaW8/XCIsXG4gICAgICAgICAgICB5ZXM6IFwiU2lcIlxuICAgICAgICB9LFxuICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUG9yZmF2b3IgaW5ncmVzZSBhIHN1IGN1ZW50YSBwYXJhIGNvbnRpbnVhclwiLFxuICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICBcIkx1ZWdvIGRlIGluaWNpYXIgc2VzaW9uIHBvZHJhIGhhY2VyIG51ZXZhcyBjb3NhcywgY29tbyByZXBvcnRhciBhbnVuY2lvcyBpbmRlYmlkb3MgbyBib3JyYXIgc3VzIGFudW5jaW9zIGN1YW5kbyB5YSBubyBsb3MgbmVjZXNpdGUgKGN1ZW50YSBwcmVtaXVtKVwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIkluaWNpYXIgU2VzacOzbiBjb24gRmFjZWJvb2tcIlxuICAgICAgICB9LFxuICAgICAgICBwb3N0VHlwZToge1xuICAgICAgICAgICAgdGl0bGU6IFwiUXVlIGJ1c2NhP1wiLFxuICAgICAgICAgICAgc2Vla3NKb2I6IFwiQnVzY28gVHJhYmFqb1wiLFxuICAgICAgICAgICAgc2Vla3NQZW9wbGU6IFwiQnVzY28gUGVyc29uYWxcIixcbiAgICAgICAgICAgIG9mZmVyc1NlcnZpY2U6IFwiT2ZyZXpjbyBTZXJ2aWNpb3NcIixcbiAgICAgICAgICAgIGJ1dHRvbjogXCJTaWd1aWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICBqb2JGb3JtOiB7XG4gICAgICAgICAgICBxdWVzdGlvbjE6IFwiQ29tbyBzZSBsbGFtYSBzdSBuZWdvY2lvP1wiLFxuICAgICAgICAgICAgcXVlc3Rpb24yOiBcIlF1ZSBidXNjYT9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uMzogXCJDdWFudG8gcGFnYT9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uNDogXCJQYWdhIGVuIGNoZXF1ZSBvIGNhc2g/XCIsXG4gICAgICAgICAgICBxdWVzdGlvbjU6IFwiQ3VhbCBlcyBlbCBob3JhcmlvP1wiLFxuICAgICAgICAgICAgcXVlc3Rpb242OiBcIkRpcmVjY2lvbiBkZWwgbG9jYWw6XCIsXG4gICAgICAgICAgICBxdWVzdGlvbjc6IFwiRW4gcXVlIGFyZWEgc2UgZW5jdWVudHJhP1wiLFxuICAgICAgICAgICAgcXVlc3Rpb244OiBcIk51bWVybyBkZSBjZWx1bGFyPyAob3BjaW9uYWwpXCIsXG4gICAgICAgICAgICBxdWVzdGlvbjk6IFwiUG9yIHF1aWVuIHByZWd1bnRhcj9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uMTA6IFwiQWxnbyBxdWUgZGVzZWUgYWdyZWdhcj9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uMTE6XG4gICAgICAgICAgICAgICAgXCJEZXNlYSBxdWUgc3UgYW51bmNpbyB0ZW5nYSBjb2xvciB5IGVzdGUgcG9yIGVuY2ltYSBkZWwgcmVzdG8/IEVzdG8gY3Vlc3RhICQxMC5cIixcbiAgICAgICAgICAgIGpvYkZvcm1CdXR0b246IFwiTGlzdG9cIixcbiAgICAgICAgICAgIHBheVR5cGUxOiBcIkNhc2hcIixcbiAgICAgICAgICAgIHBheVR5cGUyOiBcIkNoZXF1ZVwiLFxuICAgICAgICAgICAgcGF5VHlwZTM6IFwiQ2FzaCB5IENoZXF1ZVwiLFxuICAgICAgICAgICAgZmlsdGVyT3RoZXJBcmVhOiBcIk90cmEgYXJlYSBlbiBOWVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiRW5jdWVudHJlIGFsIG1lam9yIHBlcnNvbmFsIHBhcmEgc3UgbmVnb2Npb1wiLFxuICAgICAgICAgICAgZXh0cmFBcmVhOiBcIkN1YWwgZXMgZWwgbm9tYnJlIGRlbCBhcmVhIGRvbmRlIGVzdGEgdWJpY2Fkbz9cIixcbiAgICAgICAgICAgIHNwZWNpYWxBbnN3ZXI6IFwiU2ksIHF1aWVybyBxdWUgbWkgYW51bmNpbyBzZWEgZXNwZWNpYWxcIixcbiAgICAgICAgICAgIHZlcmlmeUNhbGwxOlxuICAgICAgICAgICAgICAgIFwiVGlwOiBTaSBkZXNlYSBjZXJyYXIgc3VzIGFudW5jaW9zIGN1YW5kbyB5YSBubyBsb3MgbmVjZXNpdGUsIHByaW1lcm8gZGViZVwiLFxuICAgICAgICAgICAgdmVyaWZ5Q2FsbDI6IFwiY3JlYXIgdW5hIGN1ZW50YS5cIixcbiAgICAgICAgICAgIGxpbmtSZWZlcnJhbDogXCJUb2RvcyBsb3MgdHJhYmFqb3MgZW4gd3d3LmpvYmRpcmVjdG8uY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAgam9iQ29uZmlybToge1xuICAgICAgICAgICAgdGl0bGU6IFwiU3UgYW51bmNpb1wiLFxuICAgICAgICAgICAgbmFtZTogXCJOb21icmU6XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJQdWVzdG86XCIsXG4gICAgICAgICAgICBwYXltZW50OiBcIlNhbGFyaW86XCIsXG4gICAgICAgICAgICBwYXlUeXBlOiBcIlBhZ2EgZW46XCIsXG4gICAgICAgICAgICBzY2hlZHVsZTogXCJIb3JhcmlvOlwiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJEaXJlY2Npb246XCIsXG4gICAgICAgICAgICBhcmVhOiBcIkFyZWE6XCIsXG4gICAgICAgICAgICBwaG9uZTogXCJOdW1lcm86XCIsXG4gICAgICAgICAgICBjb250YWN0OiBcIlByZWd1bnRhciBwb3I6XCIsXG4gICAgICAgICAgICBleHRyYUluZm86IFwiTWFzIGluZm9ybWFjaW9uOlwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIlB1YmxpY2FyXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9kYWxKb2I6IHtcbiAgICAgICAgICAgIHJlcG9ydGVkQWxyZWFkeTpcbiAgICAgICAgICAgICAgICBcIlVzdGVkIHlhIGhhIHJlcG9ydGFkbyBlc3RlIGFudW5jaW8uIFNpIDEwIHBlcnNvbmFzIHJlcG9ydGFuIGVsIG1pc21vIGFudW5jaW8sIGxlIGRhcmVtb3MgYmFuZGVyYSByb2phXCIsXG4gICAgICAgICAgICB0aGFua3NGb3JSZXBvcnRpbmc6XG4gICAgICAgICAgICAgICAgXCJHcmFjaWFzIHBvciByZXBvcnRhciBlc3RlIGFudW5jaW8uIFNpIDEwIHBlcnNvbmFzIHJlcG9ydGFuIGVsIG1pc21vIGFudW5jaW8sIGxlIGRhcmVtb3MgYmFuZGVyYSByb2phXCIsXG4gICAgICAgICAgICBwbGVhc2VMb2dpbjogXCJQYXJhIHBvZGVyIHJlcG9ydGFyIHVuIGFudW5jaW8sIHByaW1lcm8gZGViZVwiLFxuICAgICAgICAgICAgcGxlYXNlTG9naW4yOiBcImNyZWFyIHVuYSBjdWVudGEgSm9iRGlyZWN0b1wiLFxuICAgICAgICAgICAgcmVwb3J0OiBcIlJlcG9ydGFyXCIsXG4gICAgICAgICAgICBwbGVhc2VSZXBvcnQ6XG4gICAgICAgICAgICAgICAgXCJTaSBjcmVlIHF1ZSBlc3RlIGFudW5jaW8gZXMgaW5kZWJpZG8sIHBvcmZhdm9yIHJlcG9ydGVsby5cIlxuICAgICAgICB9LFxuICAgICAgICBwZXJzb25Nb2RhbDoge1xuICAgICAgICAgICAgbmFtZTogXCJOb21icmU6XCIsXG4gICAgICAgICAgICBzdGF0dXMxOiBcIkJ1c2NhOlwiLFxuICAgICAgICAgICAgc3RhdHVzMjogXCJTZXJ2aWNpb3MgZGU6XCIsXG4gICAgICAgICAgICBleHBlcmllbmNlOiBcIkV4cGVyaWVuY2lhOlwiLFxuICAgICAgICAgICAgc2NoZWR1bGU6IFwiSG9yYXJpbzpcIixcbiAgICAgICAgICAgIGFyZWE6IFwiQXJlYTpcIixcbiAgICAgICAgICAgIHBob25lOiBcIk51bWVybzpcIixcbiAgICAgICAgICAgIGV4dHJhSW5mbzogXCJNYXMgaW5mbzpcIlxuICAgICAgICB9LFxuICAgICAgICBQcmVQYXlQZXJzb246IHtcbiAgICAgICAgICAgIHRleHQxOlxuICAgICAgICAgICAgICAgIFwiTG9zIGFudW5jaW9zIHBhcmEgYnVzY2FyIHRyYWJham8gdGllbmVuIHVuIGNvc3RvIGRlIDEwIGRvbGFyZXNcIixcbiAgICAgICAgICAgIHRleHQyOiBcIlN1IGFudW5jaW8gbm8gc2VyYSBib3JyYWRvXCIsXG4gICAgICAgICAgICB0ZXh0MzpcbiAgICAgICAgICAgICAgICBcInkgc2UgbWFudGVuZHJhIGFsIHRvcCBkZSBsYSBsaXN0YSBkZSBhbnVuY2lvcyBwb3IgNDggaG9yYXMuXCIsXG4gICAgICAgICAgICBidXR0b246IFwiR3JhY2lhcyB5YSBubyBkZXNlb1wiLFxuICAgICAgICAgICAgYnV0dG9uUGF5OiBcIlBhZ2FyICQxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgICBjb250YWN0SW5mbzpcbiAgICAgICAgICAgICAgICBcIlNpIHRpZW5lIHByZWd1bnRhcywgcXVlamFzIG8gc3VnZXJlbmNpYXMsIHBvcmZhdm9yIGVudmllIHVuIGNvcnJlbyBhIG1lQHdpbGZyZWRvY2FzYXMuY29tXCJcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbWl1bVNldDoge1xuICAgICAgICAgICAgdGl0bGU6IFwiR3JhY2lhcyBwb3IgY29uIGNvbmZpYXIgZW4gSm9iRGlyZWN0byFcIixcbiAgICAgICAgICAgIGFjdGl2YXRlOiBcIkFjdGl2YXIgY3VlbnRhIHByZW1pdW1cIlxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlTW9kYWw6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiTm9tYnJlOlwiLFxuICAgICAgICAgICAgc2VydmljZU9mZmVyZWQ6IFwiU2VydmljaW8gcXVlIG9mcmVjZTpcIixcbiAgICAgICAgICAgIHNlcnZpY2VOdW1iZXI6IFwiTnVtZXJvOlwiLFxuICAgICAgICAgICAgc2VydmljZUV4dHJhSW5mbzogXCJNYXMgaW5mbzpcIlxuICAgICAgICB9LFxuICAgICAgICBqb2JQYXlQYWdlOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc3RlZCBhIG1hcmNhZG8gYW51bmNpbyBUT1BcIixcbiAgICAgICAgICAgIHRleHQxOlxuICAgICAgICAgICAgICAgIFwiTG9zIGFudW5jaW9zIFRPUCBzb24gZGUgb3RybyBjb2xvciB5IHNlIG1hbnRpZW5lbiBhbCB0b3AgZGUgbGEgbGlzdGEgcG9yIDQ4IGhvcmFzLlwiLFxuICAgICAgICAgICAgdGV4dDI6XG4gICAgICAgICAgICAgICAgXCJTaSBkZXNlYSBlbmNvbnRyYXIgYWwgbWVqb3IgcGVyc29uYWwgbG8gbWFzIHJhcGlkbyBwb3NpYmxlLCBlc3RhIGVzIGxhIG1lam9yIG9wY2lvbiBwYXJhIHVzdGVkLlwiLFxuICAgICAgICAgICAgYnV0dG9uTk86IFwiUXVpZXJvIHVuIGFudW5jaW8gZ3JhdGlzIHkgY29tdW5cIixcbiAgICAgICAgICAgIGJ1dHRvbllFUzogXCJQYWdhciAkMTBcIlxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlQ29uZmlybToge1xuICAgICAgICAgICAgdGl0bGU6IFwiU3UgYW51bmNpbyBlc3RhIGxpc3RvIHBhcmEgc2VyIHB1YmxpY2FkbzpcIixcbiAgICAgICAgICAgIHNlcnZpY2VPd25lcjogXCJOb21icmU6IFwiLFxuICAgICAgICAgICAgc2VydmljZU9mZmVyZWQ6IFwiU2VydmljaW8gcXVlIG9mcmVjZTogXCIsXG4gICAgICAgICAgICBhcmVhOiBcIkFyZWE6IFwiLFxuICAgICAgICAgICAgc2VydmljZU51bWJlcjogXCJOdW1lcm86XCIsXG4gICAgICAgICAgICBzZXJ2aWNlRXh0cmFJbmZvOiBcIk1hcyBpbmZvOlwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIlB1YmxpY2FyIGFudW5jaW9cIlxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlRm9ybToge1xuICAgICAgICAgICAgc2VydmljZU93bmVyOiBcIkN1YWwgZXMgc3Ugbm9tYnJlIG8gZWwgZGUgc3UgY29tcGFuaWE/XCIsXG4gICAgICAgICAgICBzZXJ2aWNlT2ZmZXJlZDogXCJRdWUgc2VydmljaW9zIG9mcmVjZT9cIixcbiAgICAgICAgICAgIHNlcnZpY2VOdW1iZXI6IFwiQSBxdWUgbnVtZXJvIHB1ZWRlbiBsbGFtYXJsbz9cIixcbiAgICAgICAgICAgIHNlcnZpY2VFeHRyYUluZm86IFwiQWxnbyBxdWUgZGVzZWUgYWdyZWdhcj9cIixcbiAgICAgICAgICAgIGJ1dHRvbjogXCJMaXN0b1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgXCJBcXVpIHB1ZWRlIHBvbmVyIGN1YWxxdWllciBpbmZvcm1hY2lvbiBxdWUgbGUgYXl1ZGUgYSB2ZW5kZXIgbWVqb3Igc3VzIHNlcnZpY2lvc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVuZ2xpc2g6IHtcbiAgICAgICAgY3VycmVudExhbmd1YWdlOiBcIkVuZ2xpc2hcIixcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiSm9icyBpbiBOZXcgWW9ya1wiLFxuICAgICAgICAgICAgY3JlYXRlUG9zdDogXCJOZXcgUG9zdFwiLFxuICAgICAgICAgICAgc2Vla2luZzogXCJuZWVkc1wiLFxuICAgICAgICAgICAgc2Vla2luZzI6IFwiaXMgbG9va2luZyBmb3IgYSBqb2IgYXNcIixcbiAgICAgICAgICAgIHNlZWtpbmczOiBcImlzIGxvb2tpbmcgZm9yIGFcIixcbiAgICAgICAgICAgIHNlZWtpbmc0OiBcIm9mZmVycyBzZXJ2aWNlcyBhc1wiLFxuICAgICAgICAgICAgZmlsdGVyRGVmYXVsdDogXCJBbGwgTllcIixcbiAgICAgICAgICAgIGZpbHRlck90aGVyQXJlYTogXCJPdGhlciBhcmVhIGluIE5ZXCIsXG4gICAgICAgICAgICBsb2dpbjogXCJWZXJpZnkgbXkgYWNjb3VudFwiLFxuICAgICAgICAgICAgbG9nb3V0OiBcIkxvZ291dFwiLFxuICAgICAgICAgICAgd2VsY29tZTogXCJXZWxjb21lXCIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIlRoZSBhdXRob3Igb2YgdGhpcyBwb3N0IGlzIGEgdmVyaWZpZWQgdXNlci5cIixcbiAgICAgICAgICAgIHRvb2x0aXAyOlxuICAgICAgICAgICAgICAgIFwiVGhpcyBwb3N0IGhhcyBiZWVuIHJlcG9ydGVkIGJ5IGRpZmZlcmVudCB1c2Vycy4gQmUgY2FyZWZ1bCFcIixcblxuICAgICAgICAgICAgcHJlbWl1bTogXCJZb3UgYXJlIGEgcHJlbWl1bSB1c2VyIVwiLFxuICAgICAgICAgICAgYW1iYXNzYWRvcjogXCJKb2JEaXJlY3RvIGFtYmFzc2Fkb3IgaW4gTlk6IEVsIEtvcmEgQ2VzYXJcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RhbEpvYjoge1xuICAgICAgICAgICAgcmVwb3J0ZWRBbHJlYWR5OiBcIllvdSBhbHJlYWR5IHJlcG9ydGVkIHRoaXMgcG9zdC5cIixcbiAgICAgICAgICAgIHRoYW5rc0ZvclJlcG9ydGluZzogXCJUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIHBvc3RcIixcbiAgICAgICAgICAgIHBsZWFzZUxvZ2luOiBcIlRvIHJlcG9ydCBhIHBvc3QsIGZpcnN0IHlvdSBtdXN0XCIsXG4gICAgICAgICAgICBwbGVhc2VMb2dpbjI6IFwiY3JlYXRlIGFuIGFjY291bnRcIixcbiAgICAgICAgICAgIHJlcG9ydDogXCJSZXBvcnRcIixcbiAgICAgICAgICAgIHBsZWFzZVJlcG9ydDpcbiAgICAgICAgICAgICAgICBcIklmIHlvdSB0aGluayB0aGlzIGFkIGlzIGluYWRlcXVhdGUsIHBsZWFzZSByZXBvcnQgaXQuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzZXJ2aWNlRm9ybToge1xuICAgICAgICAgICAgc2VydmljZU93bmVyOiBcIldoYXQgaXMgdGhlIG5hbWUgb2YgeW91ciBidXNpbmVzcz9cIixcbiAgICAgICAgICAgIHNlcnZpY2VPZmZlcmVkOiBcIldoYXQgc2VydmljZXMgZG8geW91IG9mZmVyP1wiLFxuICAgICAgICAgICAgc2VydmljZU51bWJlcjogXCJIb3cgY2FuIHBlb3BsZSByZWFjaCBvdXQgdG8geW91P1wiLFxuICAgICAgICAgICAgc2VydmljZUV4dHJhSW5mbzogXCJBbnkgb3RoZXIgaW5mbyB5b3UnZCBsaWtlIHRvIGFkZD9cIixcbiAgICAgICAgICAgIGJ1dHRvbjogXCJGaW5pc2hcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICAgIFwiUGxlYXNlIGFkZCBoZXJlIGFueSBpbmZvIHRoYXQgaGVscHMgeW91IHNlbGwgeW91ciBzZXJ2aWNlcyBiZXR0ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBwcmVtaXVtU2V0OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJUaGFua3MgZm9yIHRydXN0aW5nIEpvYkRpcmVjdG8hXCIsXG4gICAgICAgICAgICBhY3RpdmF0ZTogXCJBY3RpdmF0ZSBwcmVtaXVtIG5vd1wiXG4gICAgICAgIH0sXG4gICAgICAgIHByZW1pdW1Nb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6IFwiT25seSBwcmVtaXVtIHVzZXJzIGNhbiBjbG9zZSB0aGVpciBwb3N0cyA6KVwiLFxuICAgICAgICAgICAgZGVueTogXCJOZXZlcm1pbmRcIixcbiAgICAgICAgICAgIGJ1eVByZW1pdW06IFwiR2V0IHByZW1pdW0gYWNjb3VudCAoJDUpXCJcbiAgICAgICAgfSxcblxuICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlXCIsXG4gICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgIFwiQWZ0ZXIgbG9nZ2luZyBpbiB3aXRoIHlvdSB3aWxsIGJlIGFibGUgdG8gZG8gbmV3IHRoaW5ncywgc3VjaCBhIHJlcG9ydCBwb3N0cyBvciBkZWxldGUgeW91ciBwb3N0cyB3aGVuIHlvdSBkb24ndCBuZWVkIHRoZW0gYW55bW9yZSAocHJlbWl1bSBhY2NvdW50KVwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIkxvZ2luIHdpdGggRmFjZWJvb2tcIlxuICAgICAgICB9LFxuICAgICAgICBwb3N0VHlwZToge1xuICAgICAgICAgICAgdGl0bGU6IFwiV2hhdCBpcyB5b3VyIHBvc3QgYWJvdXQ/XCIsXG4gICAgICAgICAgICBzZWVrc0pvYjogXCJJJ20gbG9va2luZyBmb3IgYSBqb2JcIixcbiAgICAgICAgICAgIHNlZWtzUGVvcGxlOiBcIkknbSBsb29raW5nIGZvciBzdGFmZlwiLFxuICAgICAgICAgICAgb2ZmZXJzU2VydmljZTogXCJJIHdhbnQgdG8gcHJvbW90ZSBteSBzZXJ2aWNlc1wiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIk5leHRcIlxuICAgICAgICB9LFxuICAgICAgICBqb2JGb3JtOiB7XG4gICAgICAgICAgICBxdWVzdGlvbjE6IFwiTmFtZSBvZiB5b3VyIGNvbXBhbnlcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uMjogXCJXaGF0IHBvc2l0aW9uIGFyZSB5b3UgbG9va2luZyB0byBmaWxsP1wiLFxuICAgICAgICAgICAgcXVlc3Rpb24zOiBcIkhvdyBtdWNoIGRvIHlvdSBwYXk/XCIsXG4gICAgICAgICAgICBxdWVzdGlvbjQ6IFwiUGF5IGluIGNoZWNrIG9yIGNhc2g/XCIsXG4gICAgICAgICAgICBxdWVzdGlvbjU6IFwiU2NoZWR1bGVcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uNjogXCJBZGRyZXNzXCIsXG4gICAgICAgICAgICBxdWVzdGlvbjc6IFwiQXJlYVwiLFxuICAgICAgICAgICAgcXVlc3Rpb244OiBcIlBob25lIE51bWJlciAob3B0aW9uYWwpXCIsXG4gICAgICAgICAgICBxdWVzdGlvbjk6IFwiQ29udGFjdCBuYW1lXCIsXG4gICAgICAgICAgICBxdWVzdGlvbjEwOiBcIlNvbWV0aGluZyB5b3UnZCBsaWtlIHRvIGFkZD9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uMTE6XG4gICAgICAgICAgICAgICAgXCJXb3VsZCB5b3UgbGlrZSB0aGlzIHBvc3QgdG8gaGF2ZSBjb2xvciBhbmQgYmUgb24gdG9wIG9mIHRoZSByZXN0PyBUaGlzIGNvc3RzICQxMC5cIixcbiAgICAgICAgICAgIGpvYkZvcm1CdXR0b246IFwiRmluaXNoXCIsXG4gICAgICAgICAgICBwYXlUeXBlMTogXCJDYXNoXCIsXG4gICAgICAgICAgICBwYXlUeXBlMjogXCJDaGVja1wiLFxuICAgICAgICAgICAgcGF5VHlwZTM6IFwiQ2FzaCBhbmQgQ2hlY2tcIixcbiAgICAgICAgICAgIGZpbHRlck90aGVyQXJlYTogXCJPdGhlciBhcmVhIGluIE5ZXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJGaWxsIG91dCB0aGUgZm9ybSBhbmQgZmluZCBzdGFmZiBpbiBzZWNvbmRzXCIsXG4gICAgICAgICAgICBleHRyYUFyZWE6IFwiV2hhdCcncyB0aGUgbmFtZSBvZiB0aGUgYXJlYT9cIixcbiAgICAgICAgICAgIHNwZWNpYWxBbnN3ZXI6IFwiWWVzLCBJIHdhbnQgbXkgcG9zdCB0byBiZSBzcGVjaWFsXCIsXG4gICAgICAgICAgICB2ZXJpZnlDYWxsMTpcbiAgICAgICAgICAgICAgICBcIlRpcDogSWYgeW91J2QgbGlrZSB0byBkZWxldGUgeW91ciBwb3N0cyB3aGVuIHlvdSBkb24ndCBuZWVkIHRoZW0gYW55bW9yZSwgcGxlYXNlXCIsXG4gICAgICAgICAgICB2ZXJpZnlDYWxsMjogXCJzaWduIHVwIGZpcnN0XCIsXG4gICAgICAgICAgICBsaW5rUmVmZXJyYWw6IFwiRm9yIG1vcmUgam9icywgcGxlYXNlIGdvIHRvIHd3dy5qb2JkaXJlY3RvLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICAgICAgICBjb250YWN0SW5mbzpcbiAgICAgICAgICAgICAgICBcIklmIHlvdSBoYXZlIHF1ZXN0aW9ucywgc3VnZ2VzdGlvbnMgb3IgY29tcGxhaW5zLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBtZUB3aWxmcmVkb2Nhc2FzLmNvbVwiXG4gICAgICAgIH0sXG4gICAgICAgIGpvYkNvbmZpcm06IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgcG9zdFwiLFxuICAgICAgICAgICAgbmFtZTogXCJOYW1lOlwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiTG9va2luZyBmb3I6XCIsXG4gICAgICAgICAgICBwYXltZW50OiBcIlNhbGFyeTpcIixcbiAgICAgICAgICAgIHBheVR5cGU6IFwiUGF5cyBpbjpcIixcbiAgICAgICAgICAgIHNjaGVkdWxlOiBcIlNjaGVkdWxlOlwiLFxuICAgICAgICAgICAgYWRkcmVzczogXCJBZGRyZXNzOlwiLFxuICAgICAgICAgICAgYXJlYTogXCJBcmVhOlwiLFxuICAgICAgICAgICAgcGhvbmU6IFwiTnVtYmVyOlwiLFxuICAgICAgICAgICAgY29udGFjdDogXCJBc2sgZm9yOlwiLFxuICAgICAgICAgICAgZXh0cmFJbmZvOiBcIk1vcmUgaW5mbzpcIixcbiAgICAgICAgICAgIGJ1dHRvbjogXCJQdWJsaXNoXCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvc3Q/XCIsXG4gICAgICAgICAgICB5ZXM6IFwiWWVzXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzZXJ2aWNlQ29uZmlybToge1xuICAgICAgICAgICAgdGl0bGU6IFwiWW91ciBwb3N0IGlzIHJlYWR5IHRvIGJlIHB1Ymxpc2hlZDpcIixcbiAgICAgICAgICAgIHNlcnZpY2VPd25lcjogXCJOYW1lOiBcIixcbiAgICAgICAgICAgIHNlcnZpY2VPZmZlcmVkOiBcIlNlcnZpY2U6IFwiLFxuICAgICAgICAgICAgYXJlYTogXCJBcmVhOiBcIixcbiAgICAgICAgICAgIHNlcnZpY2VOdW1iZXI6IFwiUGhvbmUgTnVtYmVyOlwiLFxuICAgICAgICAgICAgc2VydmljZUV4dHJhSW5mbzogXCJFeHRyYSBJbmZvOlwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIlB1Ymxpc2ggUG9zdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFByZVBheVBlcnNvbjoge1xuICAgICAgICAgICAgdGV4dDE6IFwiUG9zdHMgdG8gcHJvbW90ZSBzZXJ2aWNlcyBjb3N0ICQxMFwiLFxuICAgICAgICAgICAgdGV4dDI6IFwiWW91ciBwb3N0IHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIHBhZ2UgZm9yIDQ4IGhvdXJzXCIsXG4gICAgICAgICAgICB0ZXh0MzogXCJhbmQgaXQgd2lsbCBoYXZlIGEgZGlmZmVyZW50IGNvbG9yLlwiLFxuICAgICAgICAgICAgYnV0dG9uOiBcIk5vIHRoYW5rc1wiLFxuICAgICAgICAgICAgYnV0dG9uUGF5OiBcIlBheSAkMTBcIlxuICAgICAgICB9LFxuXG4gICAgICAgIHBlcnNvbk1vZGFsOiB7XG4gICAgICAgICAgICBuYW1lOiBcIk5hbWU6XCIsXG4gICAgICAgICAgICBzdGF0dXMxOiBcIkxvb2tpbmcgdG8gd29yayBhczpcIixcbiAgICAgICAgICAgIHN0YXR1czI6IFwiT2ZmZXJzIHNlcnZpY2Ugb2Y6XCIsXG4gICAgICAgICAgICBleHBlcmllbmNlOiBcIkV4cGVyaWVuY2U6XCIsXG4gICAgICAgICAgICBzY2hlZHVsZTogXCJTY2hlZHVsZTpcIixcbiAgICAgICAgICAgIGFyZWE6IFwiQXJlYTpcIixcbiAgICAgICAgICAgIHBob25lOiBcIk51bWJlcjpcIixcbiAgICAgICAgICAgIGV4dHJhSW5mbzogXCJNb3JlIGluZm86XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZU1vZGFsOiB7XG4gICAgICAgICAgICBuYW1lOiBcIk5hbWU6XCIsXG4gICAgICAgICAgICBzZXJ2aWNlT2ZmZXJlZDogXCJTZXJ2aWNlOlwiLFxuICAgICAgICAgICAgc2VydmljZU51bWJlcjogXCJOdW1iZXI6XCIsXG4gICAgICAgICAgICBzZXJ2aWNlRXh0cmFJbmZvOiBcIkV4dHJhIGluZm86XCJcbiAgICAgICAgfSxcbiAgICAgICAgam9iUGF5UGFnZToge1xuICAgICAgICAgICAgdGl0bGU6IFwiWW91IGNob3NlIFRPUCBwb3N0XCIsXG4gICAgICAgICAgICB0ZXh0MTpcbiAgICAgICAgICAgICAgICBcIlRPUCBwb3N0cyBhcmUgb2YgYSBkaWZmZXJlbnQgY29sb3IgYW5kIHN0YXkgb24gdG9wIG9mIHRoZSBsaXN0IGZvciA0OCBob3Vycy5cIixcbiAgICAgICAgICAgIHRleHQyOlxuICAgICAgICAgICAgICAgIFwiSWYgeW91IGFyZSBsb29raW5nIGZvciB0b3Agc3RhZmYgYXMgcXVpY2tseSBhcyBwb3NzaWJsZSwgdGhpcyBpcyB3aGF0IHlvdSBuZWVkLlwiLFxuICAgICAgICAgICAgYnV0dG9uTk86IFwiSSB3YW50IGEgZnJlZSBhbmQgbm9ybWFsIHBvc3RcIixcbiAgICAgICAgICAgIGJ1dHRvbllFUzogXCJQYXkgJDEwXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGxhbmd1YWdlcy5zcGFuaXNoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=