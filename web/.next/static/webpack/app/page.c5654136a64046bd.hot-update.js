"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/lottery/LotteryCard.tsx":
/*!********************************************!*\
  !*** ./components/lottery/LotteryCard.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LotteryCard: function() { return /* binding */ LotteryCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst LotteryCard = ()=>{\n    _s();\n    const countdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countdownRef.current) {\n            countdownRef.current.style.setProperty(\"--value\", 12);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card bg-base-100 w-96 shadow-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"countdown\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                ref: countdownRef\n            }, void 0, false, {\n                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/lottery/LotteryCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/lottery/LotteryCard.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/lottery/LotteryCard.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LotteryCard, \"rHRXsUr06DqxW8CpYT0XVOkwzT8=\");\n_c = LotteryCard;\nvar _c;\n$RefreshReg$(_c, \"LotteryCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbG90dGVyeS9Mb3R0ZXJ5Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRWpDLE1BQU1FLGNBQWM7O0lBQ3ZCLE1BQU1DLGVBQWVGLDZDQUFNQSxDQUFDO0lBRTVCRCxnREFBU0EsQ0FBQztRQUNOLElBQUlHLGFBQWFDLE9BQU8sRUFBRTtZQUN0QkQsYUFBYUMsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxXQUFXO1FBQ3REO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUtELFdBQVU7c0JBQ1osNEVBQUNDO2dCQUFLQyxLQUFLUDs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixFQUFFO0dBaEJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvdHRlcnkvTG90dGVyeUNhcmQudHN4PzdkMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBMb3R0ZXJ5Q2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudGRvd25SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRkb3duUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvdW50ZG93blJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlJywgMTIpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMTAwIHctOTYgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2NvdW50ZG93blJlZn0+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiTG90dGVyeUNhcmQiLCJjb3VudGRvd25SZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/lottery/LotteryCard.tsx\n"));

/***/ })

});