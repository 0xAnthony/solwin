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

/***/ "(app-pages-browser)/./components/swap/SwapWidget.tsx":
/*!****************************************!*\
  !*** ./components/swap/SwapWidget.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwapWidget: function() { return /* binding */ SwapWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/account/account-data-access */ \"(app-pages-browser)/./components/account/account-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SwapWidget = ()=>{\n    _s();\n    const valueToUi = (value)=>{\n        return Math.round(value / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL * 100000) / 100000;\n    };\n    const { publicKey: address } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();\n    const { data: balance } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance)({\n        address\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card bg-base-100 w-96 shadow-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"tablist\",\n                    className: \"tabs tabs-lifted tabs-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab tab-active\",\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab\",\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Amount\",\n                            className: \"input input-bordered w-full max-w-xs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary\",\n                            children: \"MAX\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                !!balance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        valueToUi(balance),\n                        \" SOL\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 31\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: \"DEPOSIT\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SwapWidget, \"Ee/6E/JG4xpeP1QRd7WTmQgoUls=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance\n    ];\n});\n_c = SwapWidget;\nvar _c;\n$RefreshReg$(_c, \"SwapWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVFO0FBQ2hCO0FBQ047QUFFMUMsTUFBTUcsYUFBYTs7SUFDdEIsTUFBTUMsWUFBWSxDQUFDQztRQUNmLE9BQU9DLEtBQUtDLEtBQUssQ0FBQyxRQUFTTCw2REFBZ0JBLEdBQUksVUFBVTtJQUM3RDtJQUVBLE1BQU0sRUFBRU0sV0FBV0MsT0FBTyxFQUFFLEdBQUdSLHVFQUFTQTtJQUN4QyxNQUFNLEVBQUNTLE1BQU1DLE9BQU8sRUFBQyxHQUFHWCxzRkFBYUEsQ0FBQztRQUFFUztJQUFRO0lBQ2hELHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlFLE1BQUs7b0JBQVVELFdBQVU7O3NDQUMxQiw4REFBQ0U7NEJBQUVELE1BQUs7NEJBQU1ELFdBQVU7c0NBQWlCOzs7Ozs7c0NBQ3pDLDhEQUFDRTs0QkFBRUQsTUFBSzs0QkFBTUQsV0FBVTtzQ0FBTTs7Ozs7Ozs7Ozs7OzhCQUVsQyw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBU0wsV0FBVTs7Ozs7O3NDQUNsRCw4REFBQ007NEJBQU9OLFdBQVU7c0NBQWtCOzs7Ozs7Ozs7Ozs7Z0JBRXZDLENBQUMsQ0FBQ0YseUJBQVcsOERBQUNTOzt3QkFBTWhCLFVBQVVPO3dCQUFTOzs7Ozs7OzhCQUN4Qyw4REFBQ1E7b0JBQU9OLFdBQVU7OEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRCxFQUFFO0dBeEJXVjs7UUFLc0JGLG1FQUFTQTtRQUNoQkQsa0ZBQWFBOzs7S0FONUJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeD9lYmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlR2V0QmFsYW5jZX0gZnJvbSBcIkAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtZGF0YS1hY2Nlc3NcIjtcbmltcG9ydCB7dXNlV2FsbGV0fSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHtMQU1QT1JUU19QRVJfU09MfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTd2FwV2lkZ2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlVG9VaSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodmFsdWUgLyBMQU1QT1JUU19QRVJfU09MKSAqIDEwMDAwMCkgLyAxMDAwMDBcbiAgICB9XG5cbiAgICBjb25zdCB7IHB1YmxpY0tleTogYWRkcmVzcyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3Qge2RhdGE6IGJhbGFuY2V9ID0gdXNlR2V0QmFsYW5jZSh7IGFkZHJlc3MgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMTAwIHctOTYgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYmxpc3RcIiBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtbGlmdGVkIHRhYnMtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInRhYlwiIGNsYXNzTmFtZT1cInRhYiB0YWItYWN0aXZlXCI+RGVwb3NpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInRhYlwiIGNsYXNzTmFtZT1cInRhYlwiPldpdGhkcmF3PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFtb3VudFwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TUFYPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyEhYmFsYW5jZSAmJiA8c3Bhbj57dmFsdWVUb1VpKGJhbGFuY2UpfSBTT0w8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+REVQT1NJVDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn07Il0sIm5hbWVzIjpbInVzZUdldEJhbGFuY2UiLCJ1c2VXYWxsZXQiLCJMQU1QT1JUU19QRVJfU09MIiwiU3dhcFdpZGdldCIsInZhbHVlVG9VaSIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwicHVibGljS2V5IiwiYWRkcmVzcyIsImRhdGEiLCJiYWxhbmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/swap/SwapWidget.tsx\n"));

/***/ })

});