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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by Rasmus on 2018-07-03.
 */

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            console.log("makin the call------------");
                            _context3.next = 3;
                            return api.get('/admins');

                        case 3:
                            res = _context3.sent;


                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Rasmus on 2018-07-03.
                                                                                                                                                                                                                                                                   */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _GamePage = __webpack_require__(15);

var _GamePage2 = _interopRequireDefault(_GamePage);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _UsersListPage = __webpack_require__(20);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(21);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(22);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _GamePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(12);

var _renderer2 = _interopRequireDefault(_renderer);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(25);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _createStore = __webpack_require__(26);

var _createStore2 = _interopRequireDefault(_createStore);

var _cors = __webpack_require__(32);

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = __webpack_require__(33);
var app = (0, _express2.default)();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api", (0, _expressHttpProxy2.default)("http://www.atg.se", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    console.log(opts);
    opts.headers["Access-Control-Allow-Origin"] = "*";
    opts.headers["x-forward-host"] = "localhost:3000";
    return opts;
  }
}));

var router = _express2.default.Router();

router.get("/atg", function (req, res) {
  request("https://www.atg.se/services/racinginfo/v1/api/products/V75", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body); // Print the google web page.
      res.json(JSON.parse(body));
    }
  });
});

// app.use(cors(corsOptions));
app.use(router);
app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    console.log(context);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Rasmus on 2018-07-03.
 */
exports.default = function (req, store, staticContext) {
    console.log(req.path);
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: staticContext },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();
    return '\n        <html>\n            <head>\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n            </head>\n            <body> \n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="bundle.js"></script>\n            </body>\n        </html>\n    ';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            null,
            " im a component da "
        ),
        _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                    return console.log("Hi there!");
                } },
            " Press me! "
        )
    );
};

exports.default = {
    component: Home
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import { Formik } from "formik";

// import styled from "react-emotion";


var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _colors = __webpack_require__(16);

var _styled = __webpack_require__(17);

var _styled2 = _interopRequireDefault(_styled);

var _GameContext = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Container = _styled2.default.div({
  color: "red",
  backgroundColor: _colors.blackBackground,
  display: "flex",
  width: "100%",
  flex: 1
});

var GamePage = function GamePage() {
  console.log("rendering");
  var mounted = false;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gameTypes = _React$useState2[0],
      setGameTypes = _React$useState2[1];

  var getGameType = function getGameType() {
    return console.log("yoo");
  };

  React.useEffect(function () {
    mounted = true;
    return function () {
      mounted = false;
    };
  }, []);
  var callApi = function callApi(id) {
    return console.log("id", id);
  };
  var checkGameType = function checkGameType(id) {
    console.log(gameTypes, mounted);
    if (mounted) {
      console.log("wow", id.target.name, mounted);
      if (gameTypes.includes(id.target.name)) {
        return setGameTypes(gameTypes.filter(function (gameType) {
          return gameType !== id.target.name;
        }));
      }
      return setGameTypes([].concat(_toConsumableArray(gameTypes), [id.target.name]));
    }
  };
  return React.createElement(
    _GameContext.GameContext.Consumer,
    null,
    function (_ref) {
      var selectedGameType = _ref.selectedGameType;
      return React.createElement(
        Container,
        null,
        "hola",
        React.createElement("input", {
          type: "checkbox",
          name: "V75",
          onChange: function onChange(e) {
            return selectedGameType(e);
          }
        }),
        React.createElement("input", {
          type: "checkbox",
          name: "V4",
          onChange: function onChange(e) {
            return selectedGameType(e);
          }
        }),
        React.createElement("input", {
          type: "checkbox",
          name: "V64",
          onChange: function onChange(e) {
            return selectedGameType(e);
          }
        }),
        React.createElement("input", {
          type: "checkbox",
          name: "V65",
          onChange: function onChange(e) {
            return selectedGameType(e);
          }
        })
      );
    }
  );
};
exports.default = {
  component: GamePage
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blackBackground = exports.blackBackground = "#4F6272";
var secondary = exports.secondary = "#1A659E";
var whiteBackground = exports.whiteBackground = "#E7ECEF";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameContext = exports.GAMEINFO_INACTIVE = exports.GAMEINFO_ACTIVE = exports.GET_GAMETYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import fetch from "whatwg-fetch";
// import { getGameType } from "../api";

// class GameInfo {
//   status: string;
//   id: string;
//   startTime: string;
// }
//
// export class RaceStart {
//   number: string;
//   driver: {
//     firsName: string,
//     lastName: string
//   };
//   horse: {
//     name: string,
//     trainer: {
//       firstName: string,
//       lastName: string
//     },
//     pedigree: {
//       father: {
//         name: string
//       }
//     }
//   };
// }
// export class GameRace {
//   date: string;
//   name: string;
//   scheduledStartTime: string;
//   starts: Array<RaceStart>;
// }

var GET_GAMETYPE = exports.GET_GAMETYPE = "GET_GAMETYPE";
var GAMEINFO_ACTIVE = exports.GAMEINFO_ACTIVE = "GAMEINFO_ACTIVE";
var GAMEINFO_INACTIVE = exports.GAMEINFO_INACTIVE = "GAMEINFO_INACTIVE";

var ATG_API_CONTANTS = {
  gameType: function gameType(type) {
    return "https://www.atg.se/services/racinginfo/v1/api/products/" + type;
  },
  games: function games(id) {
    return "https://www.atg.se/services/racinginfo/v1/api/games/" + id;
  } // look like this "V75_2018-05-12_6_5"
};

var gameReducer = function gameReducer(state, action) {
  switch (action.type) {
    case GET_GAMETYPE:
      return _extends({}, state, {
        gameinfo: Object.assign(new GameInfo(), action.gameinfo)
      });

    default:
      {
        return state;
      }
  }
};

var GameContext = exports.GameContext = React.createContext({
  selectedGameType: function selectedGameType(id) {},
  data: {}
});

var GameContextProvider = function GameContextProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = React.useReducer(gameReducer, {
    gameinfo: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var selectedGameType = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("hola", e, dispatch);
              _context.next = 3;
              return _axios2.default.get("atg").then(function (res) {
                return console.log(res);
              }).catch(function (err) {
                return console.log(err);
              });

            case 3:
              res = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function selectedGameType(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return React.createElement(
    GameContext.Provider,
    { value: { selectedGameType: selectedGameType, data: state } },
    children
  );
};
exports.default = GameContextProvider;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};
// import Header from "./components/Header";
/**
 * Created by Rasmus on 2018-07-04.
 */
exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _index.fetchCurrentUser)());
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'header',
        value: function header() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.users.length + ' Users Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.header(),
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

function mapStateToProps(state) {
    return { users: state.users };
}
function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}
exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Ooops, route not found. '
    );
}; /**
    * Created by Rasmus on 2018-07-04.
    */
exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _index = __webpack_require__(1);

var _requireAuth = __webpack_require__(23);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Rasmus on 2018-07-04.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AdminsListPage = function (_React$Component) {
    _inherits(AdminsListPage, _React$Component);

    function AdminsListPage() {
        _classCallCheck(this, AdminsListPage);

        return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
    }

    _createClass(AdminsListPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Protected list of admins'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsListPage;
}(_react2.default.Component);

function mapStateToProps(_ref) {
    var admins = _ref.admins;

    return { admins: admins };
}
exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _index.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _index.fetchAdmins)());
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Rasmus on 2018-07-04.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


exports.default = function (ChildComponent) {
    var RequireAuth = function (_React$Component) {
        _inherits(RequireAuth, _React$Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading....'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react2.default.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }
    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(28);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Rasmus on 2018-07-03.
 */
exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _userReducer = __webpack_require__(29);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _authReducers = __webpack_require__(30);

var _authReducers2 = _interopRequireDefault(_authReducers);

var _adminsReducers = __webpack_require__(31);

var _adminsReducers2 = _interopRequireDefault(_adminsReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Rasmus on 2018-07-03.
 */
exports.default = (0, _redux.combineReducers)({
    users: _userReducer2.default,
    auth: _authReducers2.default,
    admins: _adminsReducers2.default
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}; /**
    * Created by Rasmus on 2018-07-03.
    */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _index.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _index = __webpack_require__(1);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    // console.log("action?", action.payload);
    switch (action.type) {
        case _index.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
}; /**
    * Created by Rasmus on 2018-07-04.
    */

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ })
/******/ ]);