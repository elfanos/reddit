/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blackBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return whiteBackground; });
var blackBackground = "#4F6272";
var secondary = "#1A659E";
var whiteBackground = "#E7ECEF";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return helvetica; });
var header = {
  fontFamily: "Courier"
};
var helvetica = {
  fontFamily: "Helvetica Neue"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("idx");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_GAMETYPE */
/* unused harmony export GET_GAMERACE */
/* unused harmony export GAMEINFO_ACTIVE */
/* unused harmony export GAMEINFO_INACTIVE */
/* unused harmony export GET_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_idx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_idx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_idx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var GET_GAMETYPE = "GET_GAMETYPE";
var GET_GAMERACE = "GET_GAMERACE";
var GAMEINFO_ACTIVE = "GAMEINFO_ACTIVE";
var GAMEINFO_INACTIVE = "GAMEINFO_INACTIVE";
var GET_ERROR = "GET_ERROR";

var gameTypeReducer = function gameTypeReducer(state, action) {
  switch (action.type) {
    case GET_GAMETYPE:
      return _objectSpread({}, state, {
        gameinfo: action.gameinfo
      });

    case GET_GAMERACE:
      return _objectSpread({}, state, {
        gamerace: action.gamerace
      });

    case GET_ERROR:
      return _objectSpread({}, state, {
        error: action.error
      });

    default:
      {
        return state;
      }
  }
};

var GameContext = __WEBPACK_IMPORTED_MODULE_1_react__["createContext"]({
  selectedGameType: function selectedGameType(id) {},
  betTypes: [],
  data: {
    gamerace: {
      races: []
    },
    gameinfo: {
      betType: []
    }
  }
});

var getLatestRace = function getLatestRace(gameRaces) {
  return gameRaces.sort(function (a, b) {
    return Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["compareDesc"])(Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["parse"])(a.startTime), Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["parse"])(b.startTime));
  })[0];
};

var GameContextProvider = function GameContextProvider(_ref) {
  var children = _ref.children,
      pathname = _ref.pathname;

  var _React$useReducer = __WEBPACK_IMPORTED_MODULE_1_react__["useReducer"](gameTypeReducer, {
    gameinfo: null,
    gamerace: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var selectedGameType =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(betType) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("atg/bettype/".concat(betType)).then(function (res) {
                return dispatch({
                  type: GET_GAMETYPE,
                  gameinfo: res.data
                });
              }).catch(function (error) {
                return dispatch({
                  type: GET_ERROR,
                  error: error
                });
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectedGameType(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getGameRace =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(gameId) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("atg/games/".concat(gameId)).then(function (res) {
                return dispatch({
                  type: GET_GAMERACE,
                  gamerace: res.data
                });
              }).catch(function (error) {
                return dispatch({
                  type: GET_ERROR,
                  error: error
                });
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getGameRace(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  __WEBPACK_IMPORTED_MODULE_1_react__["useEffect"](function () {
    if (pathname) {
      selectedGameType(pathname.replace(/\//g, "").toUpperCase());
    } //null the reducer here maybe


    return function () {
      return undefined;
    };
  }, [pathname]);
  __WEBPACK_IMPORTED_MODULE_1_react__["useEffect"](function () {
    //check if there is uppcoming otherwise get the lates result game
    var upcoming = __WEBPACK_IMPORTED_MODULE_3_idx___default()(state, function (_) {
      return _.gameinfo.upcoming;
    });
    var results = __WEBPACK_IMPORTED_MODULE_3_idx___default()(state, function (_) {
      return _.gameinfo.results;
    });

    if (upcoming) {
      var latestRace = getLatestRace(upcoming);
      latestRace && latestRace.id && getGameRace(latestRace.id);
    } else if (results) {
      var _latestRace = getLatestRace(results);

      _latestRace && _latestRace.id && getGameRace(_latestRace.id);
    }

    return function () {
      return undefined;
    };
  }, [state.gameinfo]);
  return Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])(GameContext.Provider, {
    value: {
      selectedGameType: selectedGameType,
      betTypes: ["V75", "V65", "V64", "V4"],
      data: state
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["b"] = (GameContextProvider);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@emotion/css");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_GamePage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_NotFoundPage__ = __webpack_require__(29);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Rasmus on 2018-07-03.
 */




/* harmony default export */ __webpack_exports__["a"] = ([_objectSpread({}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */], {
  routes: [_objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__pages_GamePage__["a" /* default */], {
    path: "/V75",
    exact: true
  }), _objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__pages_GamePage__["a" /* default */], {
    path: "/V65",
    exact: true
  }), _objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__pages_GamePage__["a" /* default */], {
    path: "/V64",
    exact: true
  }), _objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__pages_GamePage__["a" /* default */], {
    path: "/V4",
    exact: true
  }), _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__pages_NotFoundPage__["a" /* default */])]
})]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return noStyleButton; });
/* unused harmony export UIButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UILink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var noStyleButton = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0",
  font: "inherit",
  cursor: "pointer"
};
var buttonStyle = {
  border: "none",
  cursor: "pointer",
  position: "relative",
  padding: "15px 20px",
  textAlign: "center",
  textOverflow: "ellipsis",
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};
var UIButton = __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()("button", {
  target: "e1bibwyh0",
  label: "UIButton"
})(_objectSpread({}, noStyleButton, buttonStyle), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QiIsImZpbGUiOiIvVXNlcnMvZWR2aW4vYXRncHJvamVrdC9zcmMvY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3ctc3RyaWN0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IHdoaXRlQmFja2dyb3VuZCwgc2Vjb25kYXJ5IH0gZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuZXhwb3J0IGNvbnN0IG5vU3R5bGVCdXR0b24gPSB7XG4gIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICBjb2xvcjogXCJpbmhlcml0XCIsXG4gIGJvcmRlcjogXCJub25lXCIsXG4gIHBhZGRpbmc6IFwiMFwiLFxuICBmb250OiBcImluaGVyaXRcIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIlxufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJvcmRlcjogXCJub25lXCIsXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIHBhZGRpbmc6IFwiMTVweCAyMHB4XCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gIFwiOmRpc2FibGVkXCI6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBVSUJ1dHRvbiA9IHN0eWxlZC5idXR0b24oe1xuICAuLi5ub1N0eWxlQnV0dG9uLFxuICAuLi5idXR0b25TdHlsZVxufSk7XG5leHBvcnQgY29uc3QgVUlMaW5rID0gc3R5bGVkKExpbmspKHtcbiAgLi4uYnV0dG9uU3R5bGUsXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgY29sb3I6IHdoaXRlQmFja2dyb3VuZCxcbiAgXCImOmFjdGl2ZVwiOiB7XG4gICAgY29sb3I6IHNlY29uZGFyeVxuICB9XG59KTtcbiJdfQ== */");
var UILink =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], {
  target: "e1bibwyh1",
  label: "UILink"
})(_objectSpread({}, buttonStyle, {
  textDecoration: "none",
  color: __WEBPACK_IMPORTED_MODULE_1__styles_colors__["c" /* whiteBackground */],
  "&:active": {
    color: __WEBPACK_IMPORTED_MODULE_1__styles_colors__["b" /* secondary */]
  }
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJzQiIsImZpbGUiOiIvVXNlcnMvZWR2aW4vYXRncHJvamVrdC9zcmMvY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3ctc3RyaWN0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IHdoaXRlQmFja2dyb3VuZCwgc2Vjb25kYXJ5IH0gZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuZXhwb3J0IGNvbnN0IG5vU3R5bGVCdXR0b24gPSB7XG4gIGJhY2tncm91bmQ6IFwibm9uZVwiLFxuICBjb2xvcjogXCJpbmhlcml0XCIsXG4gIGJvcmRlcjogXCJub25lXCIsXG4gIHBhZGRpbmc6IFwiMFwiLFxuICBmb250OiBcImluaGVyaXRcIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIlxufTtcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJvcmRlcjogXCJub25lXCIsXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIHBhZGRpbmc6IFwiMTVweCAyMHB4XCIsXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gIFwiOmRpc2FibGVkXCI6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBVSUJ1dHRvbiA9IHN0eWxlZC5idXR0b24oe1xuICAuLi5ub1N0eWxlQnV0dG9uLFxuICAuLi5idXR0b25TdHlsZVxufSk7XG5leHBvcnQgY29uc3QgVUlMaW5rID0gc3R5bGVkKExpbmspKHtcbiAgLi4uYnV0dG9uU3R5bGUsXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgY29sb3I6IHdoaXRlQmFja2dyb3VuZCxcbiAgXCImOmFjdGl2ZVwiOiB7XG4gICAgY29sb3I6IHNlY29uZGFyeVxuICB9XG59KTtcbiJdfQ== */");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_polyfill__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_renderer__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_http_proxy__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_Routes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cors__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_atgendpoints__ = __webpack_require__(36);








var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(__WEBPACK_IMPORTED_MODULE_7__controllers_atgendpoints__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static("public"));
app.get("*", function (req, res) {
  var promises = Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_5__client_Routes__["a" /* default */], req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData() : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_renderer__["a" /* default */])(req, context);

    if (context.url) {
      /* Set a cache controller so that chrome wont
             * cache the redirect and create a infinity loop
             * when user logout*/
      // res.set("Cache-Control", "public, max-age=0");
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});
app.listen(3000, function () {
  console.log("listen on port 3000");
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_Routes__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_styles_normalize_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_styles_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__client_styles_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_contexts_GameContext__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_styles_colors__ = __webpack_require__(2);


/**
 * Created by Rasmus on 2018-07-03.
 */










/* harmony default export */ __webpack_exports__["a"] = (function (req, staticContext) {
  var content = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_9__client_contexts_GameContext__["b" /* default */], {
    pathname: req.path
  }, Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], {
    location: req.path,
    context: staticContext
  }, Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])("div", null, Object(__WEBPACK_IMPORTED_MODULE_5_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_4__client_Routes__["a" /* default */])))));
  var helmet = __WEBPACK_IMPORTED_MODULE_7_react_helmet__["Helmet"].renderStatic();
  return "\n        <html>\n            <head>\n                ".concat(helmet.title.toString(), "\n                ").concat(helmet.meta.toString(), "\n                <style>\n                  ").concat(__WEBPACK_IMPORTED_MODULE_8__client_styles_normalize_css___default.a, "\n                  html{\n                    background: ").concat(__WEBPACK_IMPORTED_MODULE_10__client_styles_colors__["c" /* whiteBackground */], ";\n                    font-family: 'Helvetica Neue';\n                    overflow-x:hidden;\n\n                  }\n                </style>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            </head>\n            <body>\n                <div id=\"root\">").concat(content, "</div>\n\n                <script src=\"bundle.js\"></script>\n            </body>\n        </html>\n    ");
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_fonts__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GameRace__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contexts_GameContext__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_idx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_idx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_idx__);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Container = __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()("div", {
  target: "e1259sai0",
  label: "Container"
})(process.env.NODE_ENV === "production" ? {
  name: "10o7grm",
  styles: "display:flex;width:100%;flex:1;justify-content:center;align-items:center;padding-top:50px;flex-direction:column;@media (min-width: 813px){padding-top:100px;}"
} : {
  name: "10o7grm",
  styles: "display:flex;width:100%;flex:1;justify-content:center;align-items:center;padding-top:50px;flex-direction:column;@media (min-width: 813px){padding-top:100px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBibGFja0JhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IEdhbWVSYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVSYWNlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0dhbWVDb250ZXh0XCI7XG5pbXBvcnQgaWR4IGZyb20gXCJpZHhcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGZsZXg6IDEsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBwYWRkaW5nVG9wOiA1MCxcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogODEzcHgpXCI6IHtcbiAgICBwYWRkaW5nVG9wOiAxMDBcbiAgfVxufSk7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICAuLi5oZWFkZXIsXG4gIGZvbnRTaXplOiAzNlxufSk7XG5jb25zdCBHYW1lUGFnZSA9ICgpID0+IChcbiAgPEdhbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IGJldFR5cGUgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVpbmZvLmJldFR5cGUpO1xuICAgICAgY29uc3QgcmFjZXMgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVyYWNlLnJhY2VzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlcj57YmV0VHlwZSAmJiBiZXRUeXBlfTwvSGVhZGVyPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyYWNlcyAmJiByYWNlcy5tYXAocmFjZSA9PiA8R2FtZVJhY2Uga2V5PXtyYWNlLmlkfSByYWNlPXtyYWNlfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9fVxuICA8L0dhbWVDb250ZXh0LkNvbnN1bWVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBHYW1lUGFnZVxufTtcbiJdfQ== */"
});

var Header = __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()("div", {
  target: "e1259sai1",
  label: "Header"
})(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__styles_fonts__["a" /* header */], {
  fontSize: 36
}), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JlIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBibGFja0JhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IEdhbWVSYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVSYWNlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0dhbWVDb250ZXh0XCI7XG5pbXBvcnQgaWR4IGZyb20gXCJpZHhcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGZsZXg6IDEsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBwYWRkaW5nVG9wOiA1MCxcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogODEzcHgpXCI6IHtcbiAgICBwYWRkaW5nVG9wOiAxMDBcbiAgfVxufSk7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICAuLi5oZWFkZXIsXG4gIGZvbnRTaXplOiAzNlxufSk7XG5jb25zdCBHYW1lUGFnZSA9ICgpID0+IChcbiAgPEdhbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IGJldFR5cGUgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVpbmZvLmJldFR5cGUpO1xuICAgICAgY29uc3QgcmFjZXMgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVyYWNlLnJhY2VzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlcj57YmV0VHlwZSAmJiBiZXRUeXBlfTwvSGVhZGVyPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyYWNlcyAmJiByYWNlcy5tYXAocmFjZSA9PiA8R2FtZVJhY2Uga2V5PXtyYWNlLmlkfSByYWNlPXtyYWNlfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9fVxuICA8L0dhbWVDb250ZXh0LkNvbnN1bWVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBHYW1lUGFnZVxufTtcbiJdfQ== */");

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1hj7x1b-GamePage",
  styles: "display:flex;flex-direction:column;width:100%;align-items:center;label:GamePage;"
} : {
  name: "1hj7x1b-GamePage",
  styles: "display:flex;flex-direction:column;width:100%;align-items:center;label:GamePage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNZIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvcGFnZXMvR2FtZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBibGFja0JhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IEdhbWVSYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWVSYWNlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0dhbWVDb250ZXh0XCI7XG5pbXBvcnQgaWR4IGZyb20gXCJpZHhcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGZsZXg6IDEsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBwYWRkaW5nVG9wOiA1MCxcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgXCJAbWVkaWEgKG1pbi13aWR0aDogODEzcHgpXCI6IHtcbiAgICBwYWRkaW5nVG9wOiAxMDBcbiAgfVxufSk7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICAuLi5oZWFkZXIsXG4gIGZvbnRTaXplOiAzNlxufSk7XG5jb25zdCBHYW1lUGFnZSA9ICgpID0+IChcbiAgPEdhbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnN0IGJldFR5cGUgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVpbmZvLmJldFR5cGUpO1xuICAgICAgY29uc3QgcmFjZXMgPSBpZHgoZGF0YSwgXyA9PiBfLmdhbWVyYWNlLnJhY2VzKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlcj57YmV0VHlwZSAmJiBiZXRUeXBlfTwvSGVhZGVyPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyYWNlcyAmJiByYWNlcy5tYXAocmFjZSA9PiA8R2FtZVJhY2Uga2V5PXtyYWNlLmlkfSByYWNlPXtyYWNlfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9fVxuICA8L0dhbWVDb250ZXh0LkNvbnN1bWVyPlxuKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBHYW1lUGFnZVxufTtcbiJdfQ== */"
};

var GamePage = function GamePage() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_6__contexts_GameContext__["a" /* GameContext */].Consumer, null, function (_ref) {
    var data = _ref.data;
    var betType = __WEBPACK_IMPORTED_MODULE_7_idx___default()(data, function (_) {
      return _.gameinfo.betType;
    });
    var races = __WEBPACK_IMPORTED_MODULE_7_idx___default()(data, function (_) {
      return _.gamerace.races;
    });
    return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(Container, null, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(Header, null, betType && betType), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
      css: _ref2
    }, races && races.map(function (race) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_5__components_GameRace__["a" /* default */], {
        key: race.id,
        race: race
      });
    })));
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: GamePage
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emotion_styled__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emotion_styled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__emotion_styled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GameStart__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_fonts__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_locale_sv__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_locale_sv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_locale_sv__);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "9tyd14-GameRace",
  styles: "display:flex;flex-direction:column;font-size:25px;padding-top:20px;width:90%;@media (min-width: 813px){width:unset;}label:GameRace;"
} : {
  name: "9tyd14-GameRace",
  styles: "display:flex;flex-direction:column;font-size:25px;padding-top:20px;width:90%;@media (min-width: 813px){width:unset;}label:GameRace;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lUmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkkiLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0dhbWVSYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gXCIuL0dhbWVTdGFydFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5LCB3aGl0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc3YgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9zdlwiO1xuXG50eXBlIFByb3BzID0ge1xuICByYWNlOiAqXG59O1xuY29uc3QgR2FtZVJhY2UgPSAoe1xuICByYWNlOiB7IG51bWJlciwgbmFtZSwgc3RhcnRUaW1lLCBzcG9ydCwgc3RhcnRzIH1cbn06IFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICB3aWR0aDogXCJ1bnNldFwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+e2BSYWNlOiAke251bWJlcn1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID57YE5hbW46ICR7bmFtZSA/IG5hbWUuc3BsaXQoXCIsXCIpWzBdLnN1YnN0cmluZygwLCAyMCkgOiBzcG9ydH1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2BEYXR1bTogJHtmb3JtYXQobmV3IERhdGUoc3RhcnRUaW1lKSwgXCJkZGRkIFwiLCB7IGxvY2FsZTogc3YgfSkgK1xuICAgICAgICAgIFwia2xvY2thbjogXCIgK1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShzdGFydFRpbWUpLCBcIkhIOk1NXCIpfWB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogXCJ1bnNldFwiXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3N0YXJ0cy5tYXAoKHN0YXJ0LCBpbmRleCkgPT4gPEdhbWVTdGFydCBrZXk9e2luZGV4fSBzdGFydD17c3RhcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmFjZTtcbiJdfQ== */"
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "7aginy-GameRace",
  styles: "font-size:0.6em;@media (min-width: 813px){font-size:1em;}label:GameRace;"
} : {
  name: "7aginy-GameRace",
  styles: "font-size:0.6em;@media (min-width: 813px){font-size:1em;}label:GameRace;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lUmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1EiLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0dhbWVSYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gXCIuL0dhbWVTdGFydFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5LCB3aGl0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc3YgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9zdlwiO1xuXG50eXBlIFByb3BzID0ge1xuICByYWNlOiAqXG59O1xuY29uc3QgR2FtZVJhY2UgPSAoe1xuICByYWNlOiB7IG51bWJlciwgbmFtZSwgc3RhcnRUaW1lLCBzcG9ydCwgc3RhcnRzIH1cbn06IFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICB3aWR0aDogXCJ1bnNldFwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+e2BSYWNlOiAke251bWJlcn1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID57YE5hbW46ICR7bmFtZSA/IG5hbWUuc3BsaXQoXCIsXCIpWzBdLnN1YnN0cmluZygwLCAyMCkgOiBzcG9ydH1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2BEYXR1bTogJHtmb3JtYXQobmV3IERhdGUoc3RhcnRUaW1lKSwgXCJkZGRkIFwiLCB7IGxvY2FsZTogc3YgfSkgK1xuICAgICAgICAgIFwia2xvY2thbjogXCIgK1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShzdGFydFRpbWUpLCBcIkhIOk1NXCIpfWB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogXCJ1bnNldFwiXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3N0YXJ0cy5tYXAoKHN0YXJ0LCBpbmRleCkgPT4gPEdhbWVTdGFydCBrZXk9e2luZGV4fSBzdGFydD17c3RhcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmFjZTtcbiJdfQ== */"
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "7aginy-GameRace",
  styles: "font-size:0.6em;@media (min-width: 813px){font-size:1em;}label:GameRace;"
} : {
  name: "7aginy-GameRace",
  styles: "font-size:0.6em;@media (min-width: 813px){font-size:1em;}label:GameRace;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lUmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFEiLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0dhbWVSYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gXCIuL0dhbWVTdGFydFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5LCB3aGl0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc3YgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9zdlwiO1xuXG50eXBlIFByb3BzID0ge1xuICByYWNlOiAqXG59O1xuY29uc3QgR2FtZVJhY2UgPSAoe1xuICByYWNlOiB7IG51bWJlciwgbmFtZSwgc3RhcnRUaW1lLCBzcG9ydCwgc3RhcnRzIH1cbn06IFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICB3aWR0aDogXCJ1bnNldFwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+e2BSYWNlOiAke251bWJlcn1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID57YE5hbW46ICR7bmFtZSA/IG5hbWUuc3BsaXQoXCIsXCIpWzBdLnN1YnN0cmluZygwLCAyMCkgOiBzcG9ydH1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2BEYXR1bTogJHtmb3JtYXQobmV3IERhdGUoc3RhcnRUaW1lKSwgXCJkZGRkIFwiLCB7IGxvY2FsZTogc3YgfSkgK1xuICAgICAgICAgIFwia2xvY2thbjogXCIgK1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShzdGFydFRpbWUpLCBcIkhIOk1NXCIpfWB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogXCJ1bnNldFwiXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3N0YXJ0cy5tYXAoKHN0YXJ0LCBpbmRleCkgPT4gPEdhbWVTdGFydCBrZXk9e2luZGV4fSBzdGFydD17c3RhcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmFjZTtcbiJdfQ== */"
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "80u5m9-GameRace",
  styles: "display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center;@media (min-width: 813px){align-items:unset;}label:GameRace;"
} : {
  name: "80u5m9-GameRace",
  styles: "display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center;@media (min-width: 813px){align-items:unset;}label:GameRace;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lUmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RE0iLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0dhbWVSYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gXCIuL0dhbWVTdGFydFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5LCB3aGl0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc3YgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9zdlwiO1xuXG50eXBlIFByb3BzID0ge1xuICByYWNlOiAqXG59O1xuY29uc3QgR2FtZVJhY2UgPSAoe1xuICByYWNlOiB7IG51bWJlciwgbmFtZSwgc3RhcnRUaW1lLCBzcG9ydCwgc3RhcnRzIH1cbn06IFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICB3aWR0aDogXCJ1bnNldFwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+e2BSYWNlOiAke251bWJlcn1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID57YE5hbW46ICR7bmFtZSA/IG5hbWUuc3BsaXQoXCIsXCIpWzBdLnN1YnN0cmluZygwLCAyMCkgOiBzcG9ydH1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2BEYXR1bTogJHtmb3JtYXQobmV3IERhdGUoc3RhcnRUaW1lKSwgXCJkZGRkIFwiLCB7IGxvY2FsZTogc3YgfSkgK1xuICAgICAgICAgIFwia2xvY2thbjogXCIgK1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShzdGFydFRpbWUpLCBcIkhIOk1NXCIpfWB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogXCJ1bnNldFwiXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3N0YXJ0cy5tYXAoKHN0YXJ0LCBpbmRleCkgPT4gPEdhbWVTdGFydCBrZXk9e2luZGV4fSBzdGFydD17c3RhcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmFjZTtcbiJdfQ== */"
};

var GameRace = function GameRace(_ref) {
  var _ref$race = _ref.race,
      number = _ref$race.number,
      name = _ref$race.name,
      startTime = _ref$race.startTime,
      sport = _ref$race.sport,
      starts = _ref$race.starts;
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref2
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__emotion_css___default()(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_5__styles_fonts__["a" /* header */], {
      width: "100%",
      display: "flex",
      fontSize: "1em",
      maxWidth: 900,
      flexDirection: "column",
      alignItems: "center"
    }), "label:GameRace;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lUmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qk0iLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0dhbWVSYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZVN0YXJ0IGZyb20gXCIuL0dhbWVTdGFydFwiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IHsgc2Vjb25kYXJ5LCB3aGl0ZUJhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgc3YgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9zdlwiO1xuXG50eXBlIFByb3BzID0ge1xuICByYWNlOiAqXG59O1xuY29uc3QgR2FtZVJhY2UgPSAoe1xuICByYWNlOiB7IG51bWJlciwgbmFtZSwgc3RhcnRUaW1lLCBzcG9ydCwgc3RhcnRzIH1cbn06IFByb3BzKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHBhZGRpbmdUb3A6IDIwLFxuICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICB3aWR0aDogXCJ1bnNldFwiXG4gICAgICB9XG4gICAgfX1cbiAgPlxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjFlbVwiLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+e2BSYWNlOiAke251bWJlcn1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID57YE5hbW46ICR7bmFtZSA/IG5hbWUuc3BsaXQoXCIsXCIpWzBdLnN1YnN0cmluZygwLCAyMCkgOiBzcG9ydH1gfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2BEYXR1bTogJHtmb3JtYXQobmV3IERhdGUoc3RhcnRUaW1lKSwgXCJkZGRkIFwiLCB7IGxvY2FsZTogc3YgfSkgK1xuICAgICAgICAgIFwia2xvY2thbjogXCIgK1xuICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShzdGFydFRpbWUpLCBcIkhIOk1NXCIpfWB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogXCJ1bnNldFwiXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3N0YXJ0cy5tYXAoKHN0YXJ0LCBpbmRleCkgPT4gPEdhbWVTdGFydCBrZXk9e2luZGV4fSBzdGFydD17c3RhcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmFjZTtcbiJdfQ== */"))
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, "Race: ".concat(number)), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref3
  }, "Namn: ".concat(name ? name.split(",")[0].substring(0, 20) : sport)), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref4
  }, "Datum: ".concat(Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["format"])(new Date(startTime), "dddd ", {
    locale: __WEBPACK_IMPORTED_MODULE_8_date_fns_locale_sv___default.a
  }) + "klockan: " + Object(__WEBPACK_IMPORTED_MODULE_7_date_fns__["format"])(new Date(startTime), "HH:MM")))), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref5
  }, starts.map(function (start, index) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_4__GameStart__["a" /* default */], {
      key: index,
      start: start
    });
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (GameRace);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Horse__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_fonts__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_idx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_idx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_idx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_colors__ = __webpack_require__(2);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var getFirstLastName = function getFirstLastName(firstName, lastName) {
  return "".concat(firstName || "", " ").concat(lastName || "");
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "2fu92a-GameStart",
  styles: "display:flex;flex-direction:column;font-size:0.6em;max-width:600px;width:100%;label:GameStart;"
} : {
  name: "2fu92a-GameStart",
  styles: "display:flex;flex-direction:column;font-size:0.6em;max-width:600px;width:100%;label:GameStart;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJNIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub1N0eWxlQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgSG9yc2UgZnJvbSBcIi4vSG9yc2VcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpZHggZnJvbSBcImlkeFwiO1xuaW1wb3J0IHsgYmxhY2tCYWNrZ3JvdW5kLCB3aGl0ZUJhY2tncm91bmQsIHNlY29uZGFyeSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzXCI7XG50eXBlIFByb3BzID0ge1xuICBzdGFydDogKlxufTtcbmNvbnN0IGdldEZpcnN0TGFzdE5hbWUgPSAoZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykgPT5cbiAgYCR7Zmlyc3ROYW1lIHx8IFwiXCJ9ICR7bGFzdE5hbWUgfHwgXCJcIn1gO1xuY29uc3QgR2FtZVN0YXJ0ID0gKHsgc3RhcnQ6IHsgZHJpdmVyLCBob3JzZSwgbnVtYmVyIH0gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByYWNlSW5mbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIC8vY29uc3Qgc2V0UHJvcGVydHkgPSBpZHgocmFjZUluZm8sIF8gPT4gX3JhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkpO1xuICAgICAgaWYgKHJhY2VJbmZvICYmIHJhY2VJbmZvLmN1cnJlbnQgJiYgcmFjZUluZm8uY3VycmVudC5zdHlsZSkge1xuICAgICAgICByZXR1cm4gY29sbGFwc2VkXG4gICAgICAgICAgPyByYWNlSW5mby5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIilcbiAgICAgICAgICA6IHJhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb2xsYXBzZWRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xsYXBzZWQoY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4ubm9TdHlsZUJ1dHRvbixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUJhY2tncm91bmQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnksXG4gICAgICAgICAgZGl2OiB7IHBhZGRpbmdMZWZ0OiAxMCB9LFxuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43ZW1cIixcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgd2lkdGg6IDI1IH19PntudW1iZXJ9PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e2BIb3JzZTogJHtob3JzZS5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdj57YE5hbW46ICR7Z2V0Rmlyc3RMYXN0TmFtZShcbiAgICAgICAgICAgIGRyaXZlci5maXJzdE5hbWUsXG4gICAgICAgICAgICBkcml2ZXIubGFzdE5hbWVcbiAgICAgICAgICApfWB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyYWNlSW5mb31cbiAgICAgID5cbiAgICAgICAgPEhvcnNlIGhvcnNlPXtob3JzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFydDtcbiJdfQ== */"
};

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "yhbnf4-GameStart",
  styles: "align-self:center;width:25px;label:GameStart;"
} : {
  name: "yhbnf4-GameStart",
  styles: "align-self:center;width:25px;label:GameStart;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERhIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub1N0eWxlQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgSG9yc2UgZnJvbSBcIi4vSG9yc2VcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpZHggZnJvbSBcImlkeFwiO1xuaW1wb3J0IHsgYmxhY2tCYWNrZ3JvdW5kLCB3aGl0ZUJhY2tncm91bmQsIHNlY29uZGFyeSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzXCI7XG50eXBlIFByb3BzID0ge1xuICBzdGFydDogKlxufTtcbmNvbnN0IGdldEZpcnN0TGFzdE5hbWUgPSAoZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykgPT5cbiAgYCR7Zmlyc3ROYW1lIHx8IFwiXCJ9ICR7bGFzdE5hbWUgfHwgXCJcIn1gO1xuY29uc3QgR2FtZVN0YXJ0ID0gKHsgc3RhcnQ6IHsgZHJpdmVyLCBob3JzZSwgbnVtYmVyIH0gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByYWNlSW5mbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIC8vY29uc3Qgc2V0UHJvcGVydHkgPSBpZHgocmFjZUluZm8sIF8gPT4gX3JhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkpO1xuICAgICAgaWYgKHJhY2VJbmZvICYmIHJhY2VJbmZvLmN1cnJlbnQgJiYgcmFjZUluZm8uY3VycmVudC5zdHlsZSkge1xuICAgICAgICByZXR1cm4gY29sbGFwc2VkXG4gICAgICAgICAgPyByYWNlSW5mby5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIilcbiAgICAgICAgICA6IHJhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb2xsYXBzZWRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xsYXBzZWQoY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4ubm9TdHlsZUJ1dHRvbixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUJhY2tncm91bmQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnksXG4gICAgICAgICAgZGl2OiB7IHBhZGRpbmdMZWZ0OiAxMCB9LFxuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43ZW1cIixcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgd2lkdGg6IDI1IH19PntudW1iZXJ9PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e2BIb3JzZTogJHtob3JzZS5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdj57YE5hbW46ICR7Z2V0Rmlyc3RMYXN0TmFtZShcbiAgICAgICAgICAgIGRyaXZlci5maXJzdE5hbWUsXG4gICAgICAgICAgICBkcml2ZXIubGFzdE5hbWVcbiAgICAgICAgICApfWB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyYWNlSW5mb31cbiAgICAgID5cbiAgICAgICAgPEhvcnNlIGhvcnNlPXtob3JzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFydDtcbiJdfQ== */"
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "zh128l-GameStart",
  styles: "display:flex;flex-direction:column;align-items:flex-start;label:GameStart;"
} : {
  name: "zh128l-GameStart",
  styles: "display:flex;flex-direction:column;align-items:flex-start;label:GameStart;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERVIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub1N0eWxlQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgSG9yc2UgZnJvbSBcIi4vSG9yc2VcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpZHggZnJvbSBcImlkeFwiO1xuaW1wb3J0IHsgYmxhY2tCYWNrZ3JvdW5kLCB3aGl0ZUJhY2tncm91bmQsIHNlY29uZGFyeSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzXCI7XG50eXBlIFByb3BzID0ge1xuICBzdGFydDogKlxufTtcbmNvbnN0IGdldEZpcnN0TGFzdE5hbWUgPSAoZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykgPT5cbiAgYCR7Zmlyc3ROYW1lIHx8IFwiXCJ9ICR7bGFzdE5hbWUgfHwgXCJcIn1gO1xuY29uc3QgR2FtZVN0YXJ0ID0gKHsgc3RhcnQ6IHsgZHJpdmVyLCBob3JzZSwgbnVtYmVyIH0gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByYWNlSW5mbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIC8vY29uc3Qgc2V0UHJvcGVydHkgPSBpZHgocmFjZUluZm8sIF8gPT4gX3JhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkpO1xuICAgICAgaWYgKHJhY2VJbmZvICYmIHJhY2VJbmZvLmN1cnJlbnQgJiYgcmFjZUluZm8uY3VycmVudC5zdHlsZSkge1xuICAgICAgICByZXR1cm4gY29sbGFwc2VkXG4gICAgICAgICAgPyByYWNlSW5mby5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIilcbiAgICAgICAgICA6IHJhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb2xsYXBzZWRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xsYXBzZWQoY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4ubm9TdHlsZUJ1dHRvbixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUJhY2tncm91bmQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnksXG4gICAgICAgICAgZGl2OiB7IHBhZGRpbmdMZWZ0OiAxMCB9LFxuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43ZW1cIixcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgd2lkdGg6IDI1IH19PntudW1iZXJ9PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e2BIb3JzZTogJHtob3JzZS5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdj57YE5hbW46ICR7Z2V0Rmlyc3RMYXN0TmFtZShcbiAgICAgICAgICAgIGRyaXZlci5maXJzdE5hbWUsXG4gICAgICAgICAgICBkcml2ZXIubGFzdE5hbWVcbiAgICAgICAgICApfWB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyYWNlSW5mb31cbiAgICAgID5cbiAgICAgICAgPEhvcnNlIGhvcnNlPXtob3JzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFydDtcbiJdfQ== */"
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "9u24yy-GameStart",
  styles: "background:white;display:none;justify-content:center;text-align:center;label:GameStart;"
} : {
  name: "9u24yy-GameStart",
  styles: "background:white;display:none;justify-content:center;text-align:center;label:GameStart;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVRIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub1N0eWxlQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgSG9yc2UgZnJvbSBcIi4vSG9yc2VcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpZHggZnJvbSBcImlkeFwiO1xuaW1wb3J0IHsgYmxhY2tCYWNrZ3JvdW5kLCB3aGl0ZUJhY2tncm91bmQsIHNlY29uZGFyeSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzXCI7XG50eXBlIFByb3BzID0ge1xuICBzdGFydDogKlxufTtcbmNvbnN0IGdldEZpcnN0TGFzdE5hbWUgPSAoZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykgPT5cbiAgYCR7Zmlyc3ROYW1lIHx8IFwiXCJ9ICR7bGFzdE5hbWUgfHwgXCJcIn1gO1xuY29uc3QgR2FtZVN0YXJ0ID0gKHsgc3RhcnQ6IHsgZHJpdmVyLCBob3JzZSwgbnVtYmVyIH0gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByYWNlSW5mbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIC8vY29uc3Qgc2V0UHJvcGVydHkgPSBpZHgocmFjZUluZm8sIF8gPT4gX3JhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkpO1xuICAgICAgaWYgKHJhY2VJbmZvICYmIHJhY2VJbmZvLmN1cnJlbnQgJiYgcmFjZUluZm8uY3VycmVudC5zdHlsZSkge1xuICAgICAgICByZXR1cm4gY29sbGFwc2VkXG4gICAgICAgICAgPyByYWNlSW5mby5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIilcbiAgICAgICAgICA6IHJhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb2xsYXBzZWRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xsYXBzZWQoY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4ubm9TdHlsZUJ1dHRvbixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUJhY2tncm91bmQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnksXG4gICAgICAgICAgZGl2OiB7IHBhZGRpbmdMZWZ0OiAxMCB9LFxuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43ZW1cIixcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgd2lkdGg6IDI1IH19PntudW1iZXJ9PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e2BIb3JzZTogJHtob3JzZS5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdj57YE5hbW46ICR7Z2V0Rmlyc3RMYXN0TmFtZShcbiAgICAgICAgICAgIGRyaXZlci5maXJzdE5hbWUsXG4gICAgICAgICAgICBkcml2ZXIubGFzdE5hbWVcbiAgICAgICAgICApfWB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyYWNlSW5mb31cbiAgICAgID5cbiAgICAgICAgPEhvcnNlIGhvcnNlPXtob3JzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFydDtcbiJdfQ== */"
};

var GameStart = function GameStart(_ref) {
  var _ref$start = _ref.start,
      driver = _ref$start.driver,
      horse = _ref$start.horse,
      number = _ref$start.number;

  var _React$useState = __WEBPACK_IMPORTED_MODULE_2_react__["useState"](true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      collapsed = _React$useState2[0],
      setCollapsed = _React$useState2[1];

  var raceInfo = __WEBPACK_IMPORTED_MODULE_2_react__["useRef"](null);
  __WEBPACK_IMPORTED_MODULE_2_react__["useEffect"](function () {
    //const setProperty = idx(raceInfo, _ => _raceInfo.current.style.setProperty);
    if (raceInfo && raceInfo.current && raceInfo.current.style) {
      return collapsed ? raceInfo.current.style.setProperty("display", "none", "important") : raceInfo.current.style.setProperty("display", "flex", "important");
    }
  }, [collapsed]);
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref2
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("button", {
    onClick: function onClick() {
      return setCollapsed(collapsed ? false : true);
    },
    css:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__emotion_css___default()(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__Button__["b" /* noStyleButton */], {
      "&:focus": {
        outline: "none"
      }
    }, __WEBPACK_IMPORTED_MODULE_5__styles_fonts__["a" /* header */], {
      cursor: "pointer",
      border: "none",
      width: "100%",
      display: "flex",
      color: __WEBPACK_IMPORTED_MODULE_7__styles_colors__["c" /* whiteBackground */],
      backgroundColor: __WEBPACK_IMPORTED_MODULE_7__styles_colors__["b" /* secondary */],
      div: {
        paddingLeft: 10
      },
      height: 40,
      fontSize: "0.7em",
      "@media (min-width: 813px)": {
        fontSize: "1em"
      }
    }), "label:GameStart;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NRIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9HYW1lU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub1N0eWxlQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgSG9yc2UgZnJvbSBcIi4vSG9yc2VcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpZHggZnJvbSBcImlkeFwiO1xuaW1wb3J0IHsgYmxhY2tCYWNrZ3JvdW5kLCB3aGl0ZUJhY2tncm91bmQsIHNlY29uZGFyeSB9IGZyb20gXCIuLi9zdHlsZXMvY29sb3JzXCI7XG50eXBlIFByb3BzID0ge1xuICBzdGFydDogKlxufTtcbmNvbnN0IGdldEZpcnN0TGFzdE5hbWUgPSAoZmlyc3ROYW1lPzogc3RyaW5nLCBsYXN0TmFtZT86IHN0cmluZykgPT5cbiAgYCR7Zmlyc3ROYW1lIHx8IFwiXCJ9ICR7bGFzdE5hbWUgfHwgXCJcIn1gO1xuY29uc3QgR2FtZVN0YXJ0ID0gKHsgc3RhcnQ6IHsgZHJpdmVyLCBob3JzZSwgbnVtYmVyIH0gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByYWNlSW5mbyA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIC8vY29uc3Qgc2V0UHJvcGVydHkgPSBpZHgocmFjZUluZm8sIF8gPT4gX3JhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkpO1xuICAgICAgaWYgKHJhY2VJbmZvICYmIHJhY2VJbmZvLmN1cnJlbnQgJiYgcmFjZUluZm8uY3VycmVudC5zdHlsZSkge1xuICAgICAgICByZXR1cm4gY29sbGFwc2VkXG4gICAgICAgICAgPyByYWNlSW5mby5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIilcbiAgICAgICAgICA6IHJhY2VJbmZvLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb2xsYXBzZWRdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBmb250U2l6ZTogXCIwLjZlbVwiLFxuICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xsYXBzZWQoY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlKX1cbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgLi4ubm9TdHlsZUJ1dHRvbixcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUJhY2tncm91bmQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWNvbmRhcnksXG4gICAgICAgICAgZGl2OiB7IHBhZGRpbmdMZWZ0OiAxMCB9LFxuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgZm9udFNpemU6IFwiMC43ZW1cIixcbiAgICAgICAgICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMWVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY3NzPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgd2lkdGg6IDI1IH19PntudW1iZXJ9PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e2BIb3JzZTogJHtob3JzZS5uYW1lfWB9PC9kaXY+XG4gICAgICAgICAgPGRpdj57YE5hbW46ICR7Z2V0Rmlyc3RMYXN0TmFtZShcbiAgICAgICAgICAgIGRyaXZlci5maXJzdE5hbWUsXG4gICAgICAgICAgICBkcml2ZXIubGFzdE5hbWVcbiAgICAgICAgICApfWB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyYWNlSW5mb31cbiAgICAgID5cbiAgICAgICAgPEhvcnNlIGhvcnNlPXtob3JzZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFydDtcbiJdfQ== */"))
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref3
  }, number), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref4
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, "Horse: ".concat(horse.name)), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, "Namn: ".concat(getFirstLastName(driver.firstName, driver.lastName))))), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css: _ref5,
    ref: raceInfo
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_4__Horse__["a" /* default */], {
    horse: horse
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (GameStart);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_idx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_idx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_idx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_formatName__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_fonts__ = __webpack_require__(4);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Horse = function Horse(_ref) {
  var horse = _ref.horse;
  var name = __WEBPACK_IMPORTED_MODULE_3_idx___default()(horse, function (_) {
    return _.pedigree.father.name;
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", {
    css:
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__emotion_css___default()(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_5__styles_fonts__["b" /* helvetica */], {
      textAlign: "left"
    }), "label:Horse;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9Ib3JzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUyIsImZpbGUiOiIvVXNlcnMvZWR2aW4vYXRncHJvamVrdC9zcmMvY2xpZW50L2NvbXBvbmVudHMvSG9yc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaWR4IGZyb20gXCJpZHhcIjtcbmltcG9ydCB7IGZvcm1hdE5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0TmFtZVwiO1xuaW1wb3J0IHsgaGVsdmV0aWNhIH0gZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuY29uc3QgSG9yc2UgPSAoeyBob3JzZSB9OiAqKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBpZHgoaG9yc2UsIF8gPT4gXy5wZWRpZ3JlZS5mYXRoZXIubmFtZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3sgLi4uaGVsdmV0aWNhLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxuICAgICAgPGRpdj57YEjDpHN0ZW5zIHBhcHBhOiAke25hbWUgfHwgXCJcIn1gfTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2BUcsOkbmFyZTogJHtmb3JtYXROYW1lKFxuICAgICAgICAgIGlkeChob3JzZSwgXyA9PiBfLnRyYWluZXIuZmlyc3ROYW1lKSB8fCBcIlwiLFxuICAgICAgICAgIGlkeChob3JzZSwgXyA9PiBfLnRyYWluZXIubGFzdE5hbWUpIHx8IFwiXCJcbiAgICAgICAgKX1gfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3JzZTtcbiJdfQ== */"))
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, "H\xE4stens pappa: ".concat(name || "")), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, "Tr\xE4nare: ".concat(Object(__WEBPACK_IMPORTED_MODULE_4__utils_formatName__["a" /* formatName */])(__WEBPACK_IMPORTED_MODULE_3_idx___default()(horse, function (_) {
    return _.trainer.firstName;
  }) || "", __WEBPACK_IMPORTED_MODULE_3_idx___default()(horse, function (_) {
    return _.trainer.lastName;
  }) || ""))));
};

/* harmony default export */ __webpack_exports__["a"] = (Horse);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatName; });
var formatName = function formatName(firstName, lastName) {
  return "".concat(firstName || "", " ").concat(lastName || "");
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/sv");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contexts_GameContext__ = __webpack_require__(6);



/**
 * Created by Rasmus on 2018-07-04.
 */





var Layout = __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()("div", {
  target: "eygwyav0",
  label: "Layout"
})(process.env.NODE_ENV === "production" ? {
  name: "9wk4fj",
  styles: "padding-left:0;height:100%;@media (min-width: 813px){padding-left:120px;}"
} : {
  name: "9wk4fj",
  styles: "padding-left:0;height:100%;@media (min-width: 813px){padding-left:120px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNlIiwiZmlsZSI6Ii9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJhc211cyBvbiAyMDE4LTA3LTA0LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgR2FtZUNvbnRleHRQcm92aWRlciBmcm9tIFwiLi9jb250ZXh0cy9HYW1lQ29udGV4dFwiO1xuXG5jb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2KHtcbiAgcGFkZGluZ0xlZnQ6IDAsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIFwiQG1lZGlhIChtaW4td2lkdGg6IDgxM3B4KVwiOiB7XG4gICAgcGFkZGluZ0xlZnQ6IDEyMFxuICB9XG59KTtcblxuY29uc3QgQXBwID0gKHsgcm91dGUsIGxvY2F0aW9uIH06ICopID0+IChcbiAgPEdhbWVDb250ZXh0UHJvdmlkZXIgcGF0aG5hbWU9e2xvY2F0aW9uLnBhdGhuYW1lfT5cbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPExheW91dD57cmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcyl9PC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIDwvR2FtZUNvbnRleHRQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBBcHBcbn07XG4iXX0= */"
});

var App = function App(_ref) {
  var route = _ref.route,
      location = _ref.location;
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_5__contexts_GameContext__["b" /* default */], {
    pathname: location.pathname
  }, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])("div", null, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], null), Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(Layout, null, Object(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["renderRoutes"])(route.routes))));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: App
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_styled_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BetTypes__ = __webpack_require__(28);






var Nav = __WEBPACK_IMPORTED_MODULE_0__emotion_styled_base___default()("nav", {
  target: "e730una0",
  label: "Nav"
})({
  position: "fixed",
  width: "100%",
  height: 50,
  top: "0",
  left: "0",
  bottom: "0",
  backgroundColor: __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* blackBackground */],
  flexDirection: "row",
  justifyContent: "center",
  display: "flex",
  "@media (min-width: 813px)": {
    display: "flex",
    width: 120,
    flexDirection: "column",
    height: "unset",
    justifyContent: "unset"
  }
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZHZpbi9hdGdwcm9qZWt0L3NyYy9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1kiLCJmaWxlIjoiL1VzZXJzL2VkdmluL2F0Z3Byb2pla3Qvc3JjL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBibGFja0JhY2tncm91bmQgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IEJldFR5cGVzIGZyb20gXCIuL0JldFR5cGVzXCI7XG5cbmNvbnN0IE5hdiA9IHN0eWxlZC5uYXYoe1xuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogNTAsXG4gIHRvcDogXCIwXCIsXG4gIGxlZnQ6IFwiMFwiLFxuICBib3R0b206IFwiMFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGJsYWNrQmFja2dyb3VuZCxcbiAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxuICBcIkBtZWRpYSAobWluLXdpZHRoOiA4MTNweClcIjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIHdpZHRoOiAxMjAsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBoZWlnaHQ6IFwidW5zZXRcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJ1bnNldFwiXG4gIH1cbn0pO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxOYXY+XG4gICAgPEJldFR5cGVzIC8+XG4gIDwvTmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */");

var Header = function Header() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(Nav, null, Object(__WEBPACK_IMPORTED_MODULE_1__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_4__BetTypes__["a" /* default */], null));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contexts_GameContext__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(12);





var BetTypes = function BetTypes() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_2__contexts_GameContext__["a" /* GameContext */].Consumer, null, function (_ref) {
    var betTypes = _ref.betTypes,
        selectedGameType = _ref.selectedGameType;
    return betTypes.map(function (betType) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])(__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* UILink */], {
        key: betType,
        to: "/".concat(betType)
      }, betType);
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (BetTypes);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__emotion_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/**
 * Created by Rasmus on 2018-07-04.
 */


var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  return Object(__WEBPACK_IMPORTED_MODULE_0__emotion_core__["jsx"])("h1", null, "Ooops, route not found. ");
};

/* harmony default export */ __webpack_exports__["a"] = ({
  component: NotFoundPage
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// Module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type='button'],\n/* 1 */ [type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type='search']::-webkit-search-cancel-button,\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails,\n/* 1 */ menu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var request = __webpack_require__(37);

var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
router.get("/atg/bettype/:betypeId", function (req, res) {
  request("http://www.atg.se/services/racinginfo/v1/api/products/".concat(req.params.betypeId), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  });
});
router.get("/atg/games/:gameId", function (req, res) {
  request("https://www.atg.se/services/racinginfo/v1/api/games/".concat(req.params.gameId), function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ })
/******/ ]);