webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/champscreem/components/index.jsx":
/*!***************************************************!*\
  !*** ./frontend/champscreem/components/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/champindex.scss */ "./frontend/champscreem/styles/champindex.scss");
/* harmony import */ var _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\esteb\\Desktop\\Curso\\Lolcito\\frontend\\champscreem\\components\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      champion = _useState[0],
      setChampion = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg"),
      urlSplash = _useState2[0],
      setUrlSplash = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'get',
              url: 'http://ddragon.leagueoflegends.com/cdn/10.21.1/data/es_MX/champion/' + champSelected + '.json'
            });

          case 2:
            response = _context.sent;
            console.log("campeon traido", response.data.data[champSelected]);
            setChampion(response.data.data[champSelected]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var Changeskin = function Changeskin(url) {
    setUrlSplash(url);
  };

  var Skins = function Skins() {
    console.log("Campeon traido en skins", champion);

    if (champion) {
      console.log("ya termino el get");
      console.log("URL COMPLETA", "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + champion.skins[1].num.toString() + ".jpg");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SkinsContainer,
        children: champion.skins.map(function (item) {
          var url = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_" + item.num.toString() + ".jpg";
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            onClick: function onClick() {
              return Changeskin(url);
            },
            src: url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 24
      }, _this);
    } else {
      console.log("No hay campeon");
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: "loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 24
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: urlSplash
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }, _this);
};

_s(ChampScreen, "GdrP58ao2c+pTjmZdlls9bd8on0=");

_c = ChampScreen;
/* harmony default export */ __webpack_exports__["default"] = (ChampScreen);

var _c;

$RefreshReg$(_c, "ChampScreen");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW0vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlU3RhdGUiLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidXJsU3BsYXNoIiwic2V0VXJsU3BsYXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiQ2hhbmdlc2tpbiIsIlNraW5zIiwiaWQiLCJza2lucyIsIm51bSIsInRvU3RyaW5nIiwic3R5bGVzIiwiU2tpbnNDb250YWluZXIiLCJtYXAiLCJpdGVtIiwiTWFpbiIsIkNoYW1wSW5mb0NvbnQiLCJpbWFnZUNvbnRhaW5lciIsIkluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBQUEsbUJBRUhGLHNEQUFRLENBQUMsZ0VBQWdFRCxhQUFoRSxHQUFnRixRQUFqRixDQUZMO0FBQUEsTUFFOUJJLFNBRjhCO0FBQUEsTUFFbkJDLFlBRm1COztBQUtqQ0MseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUM7QUFDekJDLG9CQUFNLEVBQUUsS0FEaUI7QUFFekJDLGlCQUFHLEVBQUUsd0VBQXNFVCxhQUF0RSxHQUFvRjtBQUZoRSxhQUFELENBRHRCOztBQUFBO0FBQ0FVLG9CQURBO0FBTU5DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QkYsUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJiLGFBQW5CLENBQTdCO0FBQ0FHLHVCQUFXLENBQUNPLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQSxJQUFkLENBQW1CYixhQUFuQixDQUFELENBQVg7O0FBUE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVNQLEVBVE8sQ0FBVDs7QUFXQSxNQUFNYyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDTCxHQUFELEVBQU87QUFDcEJKLGdCQUFZLENBQUNJLEdBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTU0sS0FBSyxHQUFFLFNBQVBBLEtBQU8sR0FBSTtBQUNiSixXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUFzQ1YsUUFBdEM7O0FBRUEsUUFBR0EsUUFBSCxFQUFZO0FBQ1JTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsZ0VBQWdFVixRQUFRLENBQUNjLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxHQUFsQixDQUFzQkMsUUFBdEIsRUFBcEYsR0FBdUgsTUFBbko7QUFDQSwwQkFBTztBQUFLLGlCQUFTLEVBQUVDLDhEQUFNLENBQUNDLGNBQXZCO0FBQUEsa0JBRUhuQixRQUFRLENBQUNlLEtBQVQsQ0FBZUssR0FBZixDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsY0FBTWQsR0FBRyxHQUFDLGdFQUFnRVAsUUFBUSxDQUFDYyxFQUF6RSxHQUE4RSxHQUE5RSxHQUFvRk8sSUFBSSxDQUFDTCxHQUFMLENBQVNDLFFBQVQsRUFBcEYsR0FBMEcsTUFBcEg7QUFDQSw4QkFBTztBQUFLLG1CQUFPLEVBQUU7QUFBQSxxQkFBSUwsVUFBVSxDQUFDTCxHQUFELENBQWQ7QUFBQSxhQUFkO0FBQW1DLGVBQUcsRUFBRUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBSEQ7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFTSCxLQVpELE1BWUs7QUFDREUsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0g7QUFDSixHQW5CRDs7QUFxQkEsc0JBRUk7QUFBSyxhQUFTLEVBQUVRLDhEQUFNLENBQUNJLElBQXZCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVKLDhEQUFNLENBQUNLLGFBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFTCw4REFBTSxDQUFDTSxjQUF2QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxFQUFFdEI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFZ0IsOERBQU0sQ0FBQ08sSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVVJO0FBQUssZUFBUyxFQUFFUCw4REFBTSxDQUFDTCxLQUF2QjtBQUFBLDZCQUNJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQXNCUCxDQS9ERDs7R0FBTWhCLFc7O0tBQUFBLFc7QUFpRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1NzJkMTE4ZmQzOWExMTVhMGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2hhbXBpbmRleC5zY3NzJ1xyXG5jb25zdCBDaGFtcFNjcmVlbiA9ICh7Y2hhbXBTZWxlY3RlZH0pID0+IHtcclxuICAgIGNvbnN0IFtjaGFtcGlvbiwgc2V0Q2hhbXBpb25dID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3VybFNwbGFzaCwgc2V0VXJsU3BsYXNoXSA9IHVzZVN0YXRlKFwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIiArIGNoYW1wU2VsZWN0ZWQgKyBcIl8wLmpwZ1wiKVxyXG5cclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMC4yMS4xL2RhdGEvZXNfTVgvY2hhbXBpb24vJytjaGFtcFNlbGVjdGVkKycuanNvbicsXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbXBlb24gdHJhaWRvXCIscmVzcG9uc2UuZGF0YS5kYXRhW2NoYW1wU2VsZWN0ZWRdKTtcclxuICAgICAgICAgICAgc2V0Q2hhbXBpb24ocmVzcG9uc2UuZGF0YS5kYXRhW2NoYW1wU2VsZWN0ZWRdKVxyXG5cclxuICAgICAgICB9LFtdKVxyXG5cclxuICAgICAgICBjb25zdCBDaGFuZ2Vza2luPSh1cmwpPT57XHJcbiAgICAgICAgICAgIHNldFVybFNwbGFzaCh1cmwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBTa2lucyA9KCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW1wZW9uIHRyYWlkbyBlbiBza2luc1wiLGNoYW1waW9uKVxyXG5cclxuICAgICAgICAgICAgaWYoY2hhbXBpb24pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5YSB0ZXJtaW5vIGVsIGdldFwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgQ09NUExFVEFcIiwgXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGNoYW1waW9uLnNraW5zWzFdLm51bS50b1N0cmluZygpICsgXCIuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uLnNraW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsPVwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIiArIGNoYW1waW9uLmlkICsgXCJfXCIgKyBpdGVtLm51bS50b1N0cmluZygpICsgXCIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgb25DbGljaz17KCk9PkNoYW5nZXNraW4odXJsKX0gc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gaGF5IGNhbXBlb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYW1wSW5mb0NvbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsU3BsYXNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYWNpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lucy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFtcFNjcmVlblxyXG4iXSwic291cmNlUm9vdCI6IiJ9