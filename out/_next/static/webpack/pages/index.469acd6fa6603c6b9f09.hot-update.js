webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/mainscreen/components/BodyContainer.jsx":
/*!**********************************************************!*\
  !*** ./frontend/mainscreen/components/BodyContainer.jsx ***!
  \**********************************************************/
/*! exports provided: BodyContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContainer", function() { return BodyContainer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Body.scss */ "./frontend/mainscreen/styles/Body.scss");
/* harmony import */ var _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Body_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _champContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./champContainer */ "./frontend/mainscreen/components/champContainer.jsx");




var _jsxFileName = "C:\\Users\\esteb\\Desktop\\Curso\\Lolcito\\frontend\\mainscreen\\components\\BodyContainer.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var BodyContainer = function BodyContainer(_ref) {
  _s();

  var setShowList = _ref.setShowList,
      setChampSelected = _ref.setChampSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      champions = _useState2[0],
      setchampions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      newChampionsList = _useState3[0],
      setNewChampionsList = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, array, property;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_5___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json'
            });

          case 2:
            response = _context.sent;
            array = [];

            for (property in response.data.data) {
              array.push(response.data.data[property]);
            }

            setchampions(array);
            setNewChampionsList(array);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var handleChange = function handleChange(e) {
    setState(e.target.value);
    var newChampionsList = champions.filter(function (item) {
      console.log(item.id);

      if (item.id.toLowerCase().includes(e.target.value.toLowerCase())) {
        console.log("si contiene el texte", item.id);
        return item;
      }

      return;
    });
    setNewChampionsList(newChampionsList);
    console.log("Champ ");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SearchContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        value: state,
        name: "champion",
        onChange: handleChange,
        type: "text",
        placeholder: "Campeon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Body_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ChampContainer,
      children: newChampionsList.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_champContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          setShowList: setShowList,
          setChampSelected: setChampSelected,
          data: item
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(BodyContainer, "LY5S0AZqnbD+FSawftPV5aJXp5g=");

_c = BodyContainer;

var _c;

$RefreshReg$(_c, "BodyContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./frontend/mainscreen/components/champContainer.jsx":
/*!***********************************************************!*\
  !*** ./frontend/mainscreen/components/champContainer.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Champ.scss */ "./frontend/mainscreen/styles/Champ.scss");
/* harmony import */ var _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\esteb\\Desktop\\Curso\\Lolcito\\frontend\\mainscreen\\components\\champContainer.jsx",
    _this = undefined;




var ChampContainer = function ChampContainer(_ref) {
  var data = _ref.data,
      setShowList = _ref.setShowList,
      setChampSelected = _ref.setChampSelected;

  var handleClick = function handleClick() {
    console.log("clicked to show", data);
    setShowList(false);
    setChampSelected(data);
  };

  console.log("Campeon Seleccionado", setChampSelected);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Main,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Champ_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Card,
      onClick: handleClick,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/" + data.image.full
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: data.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: data.title.charAt(0).toUpperCase() + data.title.slice(1)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_c = ChampContainer;
/* harmony default export */ __webpack_exports__["default"] = (ChampContainer);

var _c;

$RefreshReg$(_c, "ChampContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvbWFpbnNjcmVlbi9jb21wb25lbnRzL0JvZHlDb250YWluZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9mcm9udGVuZC9tYWluc2NyZWVuL2NvbXBvbmVudHMvY2hhbXBDb250YWluZXIuanN4Il0sIm5hbWVzIjpbIkJvZHlDb250YWluZXIiLCJzZXRTaG93TGlzdCIsInNldENoYW1wU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGFtcGlvbnMiLCJzZXRjaGFtcGlvbnMiLCJuZXdDaGFtcGlvbnNMaXN0Iiwic2V0TmV3Q2hhbXBpb25zTGlzdCIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJhcnJheSIsInByb3BlcnR5IiwiZGF0YSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImlkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsIk1haW4iLCJTZWFyY2hDb250YWluZXIiLCJDaGFtcENvbnRhaW5lciIsIm1hcCIsImhhbmRsZUNsaWNrIiwiQ2FyZCIsImltYWdlIiwiZnVsbCIsInRpdGxlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBb0M7QUFBQTs7QUFBQSxNQUFsQ0MsV0FBa0MsUUFBbENBLFdBQWtDO0FBQUEsTUFBdEJDLGdCQUFzQixRQUF0QkEsZ0JBQXNCOztBQUFBLGtCQUVuQ0Msc0RBQVEsQ0FBQyxFQUFELENBRjJCO0FBQUEsTUFFdERDLEtBRnNEO0FBQUEsTUFFL0NDLFFBRitDOztBQUFBLG1CQUczQkYsc0RBQVEsQ0FBQyxFQUFELENBSG1CO0FBQUEsTUFHdERHLFNBSHNEO0FBQUEsTUFHM0NDLFlBSDJDOztBQUFBLG1CQUliSixzREFBUSxDQUFDLEVBQUQsQ0FKSztBQUFBLE1BSXRESyxnQkFKc0Q7QUFBQSxNQUlwQ0MsbUJBSm9DOztBQU03REMseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUM7QUFDekJDLG9CQUFNLEVBQUUsS0FEaUI7QUFFekJDLGlCQUFHLEVBQUU7QUFGb0IsYUFBRCxDQUR0Qjs7QUFBQTtBQUNBQyxvQkFEQTtBQU1FQyxpQkFORixHQU1VLEVBTlY7O0FBT0osaUJBQVVDLFFBQVYsSUFBc0JGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFwQyxFQUF5QztBQUNyQ0YsbUJBQUssQ0FBQ0csSUFBTixDQUFXSixRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBZCxDQUFtQkQsUUFBbkIsQ0FBWDtBQUNIOztBQUVEVCx3QkFBWSxDQUFDUSxLQUFELENBQVo7QUFDQU4sK0JBQW1CLENBQUNNLEtBQUQsQ0FBbkI7O0FBWkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQWVOLEVBZk0sQ0FBVDs7QUFpQkEsTUFBTUksWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQ0MsQ0FBRCxFQUFLO0FBQ3JCZixZQUFRLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDQSxRQUFNZCxnQkFBZ0IsR0FBQ0YsU0FBUyxDQUFDaUIsTUFBVixDQUFpQixVQUFBQyxJQUFJLEVBQUU7QUFDMUNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEVBQWpCOztBQUNBLFVBQUdILElBQUksQ0FBQ0csRUFBTCxDQUFRQyxXQUFSLEdBQXNCQyxRQUF0QixDQUErQlQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZU0sV0FBZixFQUEvQixDQUFILEVBQWdFO0FBQzVESCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFtQ0YsSUFBSSxDQUFDRyxFQUF4QztBQUNBLGVBQU9ILElBQVA7QUFDSDs7QUFDRDtBQUNILEtBUHNCLENBQXZCO0FBUUFmLHVCQUFtQixDQUFDRCxnQkFBRCxDQUFuQjtBQUNBaUIsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNILEdBWkQ7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVJLHdEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELHdEQUFNLENBQUNFLGVBQXZCO0FBQUEsNkJBQ0E7QUFBTyxhQUFLLEVBQUU1QixLQUFkO0FBQXFCLFlBQUksRUFBQyxVQUExQjtBQUFxQyxnQkFBUSxFQUFFZSxZQUEvQztBQUE2RCxZQUFJLEVBQUMsTUFBbEU7QUFBeUUsbUJBQVcsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxlQUFTLEVBQUVXLHdEQUFNLENBQUNHLGNBQXZCO0FBQUEsZ0JBRVF6QixnQkFBZ0IsQ0FBQzBCLEdBQWpCLENBQXFCLFVBQUNWLElBQUQsRUFBVTtBQUMzQiw0QkFBTyxxRUFBQyx1REFBRDtBQUFnQixxQkFBVyxFQUFFdkIsV0FBN0I7QUFBMEMsMEJBQWdCLEVBQUVDLGdCQUE1RDtBQUE0RixjQUFJLEVBQUVzQjtBQUFsRyxXQUFtRkEsSUFBSSxDQUFDRyxFQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0gsT0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBcERNOztHQUFNM0IsYTs7S0FBQUEsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0piO0FBQ0E7O0FBQ0EsSUFBTWlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBMkM7QUFBQSxNQUF6Q2hCLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DaEIsV0FBbUMsUUFBbkNBLFdBQW1DO0FBQUEsTUFBdEJDLGdCQUFzQixRQUF0QkEsZ0JBQXNCOztBQUM5RCxNQUFNaUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUNyQlYsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBOEJULElBQTlCO0FBQ0FoQixlQUFXLENBQUUsS0FBRixDQUFYO0FBQ0FDLG9CQUFnQixDQUFDZSxJQUFELENBQWhCO0FBQ0gsR0FKRDs7QUFLQVEsU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0N4QixnQkFBcEM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRTRCLHlEQUFNLENBQUNDLElBQXZCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVELHlEQUFNLENBQUNNLElBQXZCO0FBQTZCLGFBQU8sRUFBRUQsV0FBdEM7QUFBQSw4QkFHQTtBQUFLLFdBQUcsRUFBRSxpRUFBK0RsQixJQUFJLENBQUNvQixLQUFMLENBQVdDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQSxlQUtJO0FBQUEsa0JBQ0lyQixJQUFJLENBQUNVO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBU0E7QUFBQSxrQkFDR1YsSUFBSSxDQUFDc0IsS0FBTCxDQUFXQyxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxXQUFyQixLQUFtQ3hCLElBQUksQ0FBQ3NCLEtBQUwsQ0FBV0csS0FBWCxDQUFpQixDQUFqQjtBQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBeEJEOztLQUFNVCxjO0FBMEJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjlhY2Q2ZmE2NjAzYzZiOWYwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQm9keS5zY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBDaGFtcENvbnRhaW5lciBmcm9tICcuL2NoYW1wQ29udGFpbmVyJ1xyXG5leHBvcnQgY29uc3QgQm9keUNvbnRhaW5lciA9ICh7c2V0U2hvd0xpc3Qsc2V0Q2hhbXBTZWxlY3RlZH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NoYW1waW9ucywgc2V0Y2hhbXBpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW25ld0NoYW1waW9uc0xpc3QsIHNldE5ld0NoYW1waW9uc0xpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMi4xL2RhdGEvZW5fVVMvY2hhbXBpb24uanNvbicsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICAgICBmb3IoY29uc3QgcHJvcGVydHkgaW4gcmVzcG9uc2UuZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICBhcnJheS5wdXNoKHJlc3BvbnNlLmRhdGEuZGF0YVtwcm9wZXJ0eV0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0Y2hhbXBpb25zKGFycmF5KVxyXG4gICAgICAgICAgc2V0TmV3Q2hhbXBpb25zTGlzdChhcnJheSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPShlKT0+e1xyXG4gICAgICAgIHNldFN0YXRlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnN0IG5ld0NoYW1waW9uc0xpc3Q9Y2hhbXBpb25zLmZpbHRlcihpdGVtPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpIGNvbnRpZW5lIGVsIHRleHRlXCIsaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0TmV3Q2hhbXBpb25zTGlzdChuZXdDaGFtcGlvbnNMaXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbXAgXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3RhdGV9IG5hbWU9XCJjaGFtcGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYW1wZW9uXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGFtcENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFtcGlvbnNMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENoYW1wQ29udGFpbmVyIHNldFNob3dMaXN0PXtzZXRTaG93TGlzdH0gc2V0Q2hhbXBTZWxlY3RlZD17c2V0Q2hhbXBTZWxlY3RlZH0ga2V5PXtpdGVtLmlkfSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NoYW1wLnNjc3MnXHJcbmNvbnN0IENoYW1wQ29udGFpbmVyID0gKHtkYXRhLCBzZXRTaG93TGlzdCwgc2V0Q2hhbXBTZWxlY3RlZH0pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvIHNob3dcIixkYXRhKVxyXG4gICAgICAgIHNldFNob3dMaXN0IChmYWxzZSlcclxuICAgICAgICBzZXRDaGFtcFNlbGVjdGVkKGRhdGEpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkNhbXBlb24gU2VsZWNjaW9uYWRvXCIsIHNldENoYW1wU2VsZWN0ZWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2FyZH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEwLjIyLjEvaW1nL2NoYW1waW9uL1wiK2RhdGEuaW1hZ2UuZnVsbH0vPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgIHtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHtkYXRhLnRpdGxlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2RhdGEudGl0bGUuc2xpY2UoMSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1wQ29udGFpbmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=