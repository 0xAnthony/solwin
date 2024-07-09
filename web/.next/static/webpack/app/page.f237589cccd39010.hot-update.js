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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwapWidget: function() { return /* binding */ SwapWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/account/account-data-access */ \"(app-pages-browser)/./components/account/account-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst valueToUi = (value)=>{\n    return Math.round(value / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL * 100000) / 100000;\n};\nconst SwapWidget = ()=>{\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"deposit\");\n    const { publicKey: address } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    const { data: solBalance } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance)({\n        address\n    });\n    const tokenAccounts = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts)({\n        address\n    });\n    const wSolBalance = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        if (!tokenAccounts.data) {\n            return undefined;\n        }\n        let accounts = tokenAccounts.data.filter((x)=>x.account.data.parsed.info.mint === \"So11111111111111111111111111111111111111112\");\n        if (accounts.length) {\n            return accounts[0].account.data.parsed.info.tokenAmount;\n        }\n        return 0;\n    }, [\n        tokenAccounts.data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card bg-base-100 w-96 shadow-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"tablist\",\n                    className: \"tabs tabs-lifted tabs-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"deposit\" && \"tab-active\"),\n                            onClick: ()=>{\n                                setAction(\"deposit\");\n                            },\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"withdraw\" && \"tab-active\"),\n                            onClick: ()=>{\n                                setAction(\"withdraw\");\n                            },\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Amount\",\n                            className: \"input input-bordered w-full max-w-xs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary\",\n                            children: \"MAX\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        !!solBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                valueToUi(solBalance),\n                                \" SOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 38\n                        }, undefined),\n                        !!wSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                wSolBalance.uiAmount,\n                                \" wSOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 39\n                        }, undefined),\n                        !!swSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                swSolBalance.uiAmount,\n                                \" swSOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 40\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: action.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SwapWidget, \"hnYK3DOE4rOIQp/9lTJdrYlPkj0=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts\n    ];\n});\n_c = SwapWidget;\nvar _c;\n$RefreshReg$(_c, \"SwapWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEY7QUFDckM7QUFDTjtBQUNUO0FBRXhDLE1BQU1NLFlBQVksQ0FBQ0M7SUFDZixPQUFPQyxLQUFLQyxLQUFLLENBQUMsUUFBU04sNkRBQWdCQSxHQUFJLFVBQVU7QUFDN0Q7QUFFTyxNQUFNTyxhQUFhOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsTUFBTSxFQUFFUSxXQUFXQyxPQUFPLEVBQUUsR0FBR1osdUVBQVNBO0lBQ3hDLE1BQU0sRUFBQ2EsTUFBTUMsVUFBVSxFQUFDLEdBQUdoQixzRkFBYUEsQ0FBQztRQUFFYztJQUFRO0lBRW5ELE1BQU1HLGdCQUFnQmhCLDRGQUFtQkEsQ0FBQztRQUFFYTtJQUFRO0lBQ3BELE1BQU1JLGNBQWNkLDhDQUFPQSxDQUFDO1FBQ3hCLElBQUksQ0FBQ2EsY0FBY0YsSUFBSSxFQUFFO1lBQ3JCLE9BQU9JO1FBQ1g7UUFDQSxJQUFJQyxXQUFXSCxjQUFjRixJQUFJLENBQUNNLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsT0FBTyxDQUFDUixJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLEtBQUs7UUFDbEYsSUFBSU4sU0FBU08sTUFBTSxFQUFFO1lBQ2pCLE9BQU9QLFFBQVEsQ0FBQyxFQUFFLENBQUNHLE9BQU8sQ0FBQ1IsSUFBSSxDQUFDUyxNQUFNLENBQUNDLElBQUksQ0FBQ0csV0FBVztRQUMzRDtRQUNBLE9BQU87SUFDUCxHQUFHO1FBQUNYLGNBQWNGLElBQUk7S0FBQztJQUUzQixxQkFDSSw4REFBQ2M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJRSxNQUFLO29CQUFVRCxXQUFVOztzQ0FDMUIsOERBQUNFOzRCQUFFRCxNQUFLOzRCQUFNRCxXQUFXLE9BQTRDLE9BQXJDbkIsV0FBVyxhQUFhOzRCQUNyRHNCLFNBQVM7Z0NBQU9yQixVQUFVOzRCQUFVO3NDQUN0Qzs7Ozs7O3NDQUNELDhEQUFDb0I7NEJBQUVELE1BQUs7NEJBQU1ELFdBQVcsT0FBNkMsT0FBdENuQixXQUFXLGNBQWM7NEJBQ3REc0IsU0FBUztnQ0FBT3JCLFVBQVU7NEJBQVc7c0NBQ3ZDOzs7Ozs7Ozs7Ozs7OEJBRUwsOERBQUNpQjtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFTTixXQUFVOzs7Ozs7c0NBQ2xELDhEQUFDTzs0QkFBT1AsV0FBVTtzQ0FBa0I7Ozs7Ozs7Ozs7Ozs4QkFFeEMsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFDVixDQUFDLENBQUNkLDRCQUFjLDhEQUFDc0I7O2dDQUFNaEMsVUFBVVU7Z0NBQVk7Ozs7Ozs7d0JBQzdDLENBQUMsQ0FBQ0UsNkJBQWUsOERBQUNvQjs7Z0NBQU1wQixZQUFZcUIsUUFBUTtnQ0FBQzs7Ozs7Ozt3QkFDN0MsQ0FBQyxDQUFDQyw4QkFBZ0IsOERBQUNGOztnQ0FBTUUsYUFBYUQsUUFBUTtnQ0FBQzs7Ozs7Ozs7Ozs7Ozs4QkFFcEQsOERBQUNGO29CQUFPUCxXQUFVOzhCQUFtQm5CLE9BQU84QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RSxFQUFFO0dBM0NXL0I7O1FBR3NCUixtRUFBU0E7UUFDYkYsa0ZBQWFBO1FBRWxCQyx3RkFBbUJBOzs7S0FOaENTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeD9lYmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlR2V0QmFsYW5jZSwgdXNlR2V0VG9rZW5BY2NvdW50c30gZnJvbSBcIkAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtZGF0YS1hY2Nlc3NcIjtcbmltcG9ydCB7dXNlV2FsbGV0fSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHtMQU1QT1JUU19QRVJfU09MfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQge3VzZU1lbW8sIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdmFsdWVUb1VpID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbHVlIC8gTEFNUE9SVFNfUEVSX1NPTCkgKiAxMDAwMDApIC8gMTAwMDAwXG59XG5cbmV4cG9ydCBjb25zdCBTd2FwV2lkZ2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZShcImRlcG9zaXRcIik7XG5cbiAgICBjb25zdCB7IHB1YmxpY0tleTogYWRkcmVzcyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3Qge2RhdGE6IHNvbEJhbGFuY2V9ID0gdXNlR2V0QmFsYW5jZSh7IGFkZHJlc3MgfSk7XG5cbiAgICBjb25zdCB0b2tlbkFjY291bnRzID0gdXNlR2V0VG9rZW5BY2NvdW50cyh7IGFkZHJlc3MgfSk7XG4gICAgY29uc3Qgd1NvbEJhbGFuY2UgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbkFjY291bnRzLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudHMgPSB0b2tlbkFjY291bnRzLmRhdGEuZmlsdGVyKHggPT4geC5hY2NvdW50LmRhdGEucGFyc2VkLmluZm8ubWludCA9PT0gXCJTbzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEyXCIpO1xuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudHNbMF0uYWNjb3VudC5kYXRhLnBhcnNlZC5pbmZvLnRva2VuQW1vdW50XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSwgW3Rva2VuQWNjb3VudHMuZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMTAwIHctOTYgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYmxpc3RcIiBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtbGlmdGVkIHRhYnMtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cInRhYlwiIGNsYXNzTmFtZT17YHRhYiAke2FjdGlvbiA9PT0gXCJkZXBvc2l0XCIgJiYgJ3RhYi1hY3RpdmUnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRBY3Rpb24oXCJkZXBvc2l0XCIpfX1cbiAgICAgICAgICAgICAgICAgICAgPkRlcG9zaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJ0YWJcIiBjbGFzc05hbWU9e2B0YWIgJHthY3Rpb24gPT09IFwid2l0aGRyYXdcIiAmJiAndGFiLWFjdGl2ZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldEFjdGlvbihcIndpdGhkcmF3XCIpfX1cbiAgICAgICAgICAgICAgICAgICAgPldpdGhkcmF3PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFtb3VudFwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TUFYPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIHshIXNvbEJhbGFuY2UgJiYgPHNwYW4+e3ZhbHVlVG9VaShzb2xCYWxhbmNlKX0gU09MPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgeyEhd1NvbEJhbGFuY2UgJiYgPHNwYW4+e3dTb2xCYWxhbmNlLnVpQW1vdW50fSB3U09MPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgeyEhc3dTb2xCYWxhbmNlICYmIDxzcGFuPntzd1NvbEJhbGFuY2UudWlBbW91bnR9IHN3U09MPC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPnthY3Rpb24udG9VcHBlckNhc2UoKX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VHZXRCYWxhbmNlIiwidXNlR2V0VG9rZW5BY2NvdW50cyIsInVzZVdhbGxldCIsIkxBTVBPUlRTX1BFUl9TT0wiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ2YWx1ZVRvVWkiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsIlN3YXBXaWRnZXQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwdWJsaWNLZXkiLCJhZGRyZXNzIiwiZGF0YSIsInNvbEJhbGFuY2UiLCJ0b2tlbkFjY291bnRzIiwid1NvbEJhbGFuY2UiLCJ1bmRlZmluZWQiLCJhY2NvdW50cyIsImZpbHRlciIsIngiLCJhY2NvdW50IiwicGFyc2VkIiwiaW5mbyIsIm1pbnQiLCJsZW5ndGgiLCJ0b2tlbkFtb3VudCIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic3BhbiIsInVpQW1vdW50Iiwic3dTb2xCYWxhbmNlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/swap/SwapWidget.tsx\n"));

/***/ })

});