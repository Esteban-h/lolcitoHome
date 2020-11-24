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
    _s = $RefreshSig$(),
    _this = undefined;





var ChampScreen = function ChampScreen(_ref) {
  _s();

  var champSelected = _ref.champSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      champion = _useState[0],
      setChampion = _useState[1];

  var urlSplahs = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg";
};

_s(ChampScreen, "yckeqvJimBGUfm1fda85enHTxHY=");

_c = ChampScreen;

var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
    champion = _useState2[0],
    setChampion = _useState2[1];

var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champSelected + "_0.jpg"),
    urlSplash = _useState3[0],
    setUrlSplash = _useState3[1];

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

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), []);

var Changeskin = function Changeskin(url) {
  setUrlSplash(url);
};

_c2 = Changeskin;

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
          lineNumber: 36,
          columnNumber: 32
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 24
    }, _this);
  } else {
    console.log("No hay campeon");
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: "loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 24
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ChampInfoCont,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: urlSplahs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Info,
        children: "informacion"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_champindex_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Skins,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Skins, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }, _this);
};

_c3 = Skins;
/* harmony default export */ __webpack_exports__["default"] = (ChampScreen);

var _c, _c2, _c3;

$RefreshReg$(_c, "ChampScreen");
$RefreshReg$(_c2, "Changeskin");
$RefreshReg$(_c3, "Skins");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY2hhbXBzY3JlZW0vY29tcG9uZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ2hhbXBTY3JlZW4iLCJjaGFtcFNlbGVjdGVkIiwidXNlU3RhdGUiLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidXJsU3BsYWhzIiwidXJsU3BsYXNoIiwic2V0VXJsU3BsYXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiQ2hhbmdlc2tpbiIsIlNraW5zIiwiaWQiLCJza2lucyIsIm51bSIsInRvU3RyaW5nIiwic3R5bGVzIiwiU2tpbnNDb250YWluZXIiLCJtYXAiLCJpdGVtIiwiTWFpbiIsIkNoYW1wSW5mb0NvbnQiLCJpbWFnZUNvbnRhaW5lciIsIkluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQjtBQUFBOztBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7O0FBQUEsa0JBQ0xDLHNEQUFRLEVBREg7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBRXJDLE1BQU1DLFNBQVMsR0FBRyxnRUFBK0RKLGFBQS9ELEdBQThFLFFBQWhHO0FBSUMsQ0FOTDs7R0FBTUQsVzs7S0FBQUEsVzs7aUJBT2tDRSxzREFBUSxFO0lBQWpDQyxRO0lBQVVDLFc7O2lCQUNpQkYsc0RBQVEsQ0FBQyxnRUFBZ0VELGFBQWhFLEdBQWdGLFFBQWpGLEM7SUFBbkNLLFM7SUFBV0MsWTs7QUFFbEJDLHVEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ2lCQyw0Q0FBSyxDQUFDO0FBQ3pCQyxrQkFBTSxFQUFFLEtBRGlCO0FBRXpCQyxlQUFHLEVBQUUsd0VBQXNFVixhQUF0RSxHQUFvRjtBQUZoRSxXQUFELENBRHRCOztBQUFBO0FBQ0FXLGtCQURBO0FBTU5DLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QkYsUUFBUSxDQUFDRyxJQUFULENBQWNBLElBQWQsQ0FBbUJkLGFBQW5CLENBQTdCOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQsSUFPUCxFQVBPLENBQVQ7O0FBUUEsSUFBTWUsVUFBVSxHQUFDLFNBQVhBLFVBQVcsQ0FBQ0wsR0FBRCxFQUFPO0FBQ3BCSixjQUFZLENBQUNJLEdBQUQsQ0FBWjtBQUNILENBRkQ7O01BQU1LLFU7O0FBSU4sSUFBTUMsS0FBSyxHQUFFLFNBQVBBLEtBQU8sR0FBSTtBQUNiSixTQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUFzQ1gsUUFBdEM7O0FBRUEsTUFBR0EsUUFBSCxFQUFZO0FBQ1JVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsZ0VBQWdFWCxRQUFRLENBQUNlLEVBQXpFLEdBQThFLEdBQTlFLEdBQW9GZixRQUFRLENBQUNnQixLQUFULENBQWUsQ0FBZixFQUFrQkMsR0FBbEIsQ0FBc0JDLFFBQXRCLEVBQXBGLEdBQXVILE1BQW5KO0FBQ0Esd0JBQU87QUFBSyxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLGNBQXZCO0FBQUEsZ0JBRUhwQixRQUFRLENBQUNnQixLQUFULENBQWVLLEdBQWYsQ0FBbUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLFlBQU1kLEdBQUcsR0FBQyxnRUFBZ0VSLFFBQVEsQ0FBQ2UsRUFBekUsR0FBOEUsR0FBOUUsR0FBb0ZPLElBQUksQ0FBQ0wsR0FBTCxDQUFTQyxRQUFULEVBQXBGLEdBQTBHLE1BQXBIO0FBQ0EsNEJBQU87QUFBSyxpQkFBTyxFQUFFO0FBQUEsbUJBQUlMLFVBQVUsQ0FBQ0wsR0FBRCxDQUFkO0FBQUEsV0FBZDtBQUFtQyxhQUFHLEVBQUVBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUhEO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBU0gsR0FaRCxNQVlLO0FBQ0RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0Esd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUdIOztBQUVMLHNCQUVJO0FBQUssYUFBUyxFQUFFUSw4REFBTSxDQUFDSSxJQUF2QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFSiw4REFBTSxDQUFDSyxhQUF2QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUwsOERBQU0sQ0FBQ00sY0FBdkI7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBRXZCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUssaUJBQVMsRUFBRWlCLDhEQUFNLENBQUNPLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFLLGVBQVMsRUFBRVAsOERBQU0sQ0FBQ0wsS0FBdkI7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFzQlAsQ0E1Q087O01BQU1BLEs7QUE4Q0NqQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOGNjNGQ0YWM5NzRhMzdkMGRhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NoYW1waW5kZXguc2NzcydcclxuY29uc3QgQ2hhbXBTY3JlZW4gPSAoe2NoYW1wU2VsZWN0ZWR9KSA9PiB7XHJcbiAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IHVybFNwbGFocyA9IFwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIisgY2hhbXBTZWxlY3RlZCArXCJfMC5qcGdcIlxyXG4gICAgXHJcblxyXG5cclxuICAgIH1cclxuICAgICAgICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlKClcclxuICAgICAgICBjb25zdCBbdXJsU3BsYXNoLCBzZXRVcmxTcGxhc2hdID0gdXNlU3RhdGUoXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBTZWxlY3RlZCArIFwiXzAuanBnXCIpXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdChhc3luYygpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTAuMjEuMS9kYXRhL2VzX01YL2NoYW1waW9uLycrY2hhbXBTZWxlY3RlZCsnLmpzb24nLFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW1wZW9uIHRyYWlkb1wiLHJlc3BvbnNlLmRhdGEuZGF0YVtjaGFtcFNlbGVjdGVkXSk7XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICBjb25zdCBDaGFuZ2Vza2luPSh1cmwpPT57XHJcbiAgICAgICAgICAgIHNldFVybFNwbGFzaCh1cmwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBTa2lucyA9KCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW1wZW9uIHRyYWlkbyBlbiBza2luc1wiLGNoYW1waW9uKVxyXG5cclxuICAgICAgICAgICAgaWYoY2hhbXBpb24pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5YSB0ZXJtaW5vIGVsIGdldFwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgQ09NUExFVEFcIiwgXCJodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoL1wiICsgY2hhbXBpb24uaWQgKyBcIl9cIiArIGNoYW1waW9uLnNraW5zWzFdLm51bS50b1N0cmluZygpICsgXCIuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uLnNraW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsPVwiaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9cIiArIGNoYW1waW9uLmlkICsgXCJfXCIgKyBpdGVtLm51bS50b1N0cmluZygpICsgXCIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgb25DbGljaz17KCk9PkNoYW5nZXNraW4odXJsKX0gc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gaGF5IGNhbXBlb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PmxvYWRpbmc8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNoYW1wSW5mb0NvbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsU3BsYWhzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb3JtYWNpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2tpbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lucy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFtcFNjcmVlblxyXG4iXSwic291cmNlUm9vdCI6IiJ9