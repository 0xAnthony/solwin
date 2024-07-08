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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwapWidget: function() { return /* binding */ SwapWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/account/account-data-access */ \"(app-pages-browser)/./components/account/account-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst valueToUi = (value)=>{\n    return Math.round(value / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL * 100000) / 100000;\n};\nconst SwapWidget = ()=>{\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"deposit\");\n    const { publicKey: address } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const { data: solBalance } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance)({\n        address\n    });\n    const { data: tokenAccounts } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts)({\n        address\n    });\n    const { wSolBalance, swSolBalance } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        if (!tokenAccounts) {\n            return {};\n        }\n        let wSol = tokenAccounts.find((x)=>x.account.data.parsed.info.mint === _constants__WEBPACK_IMPORTED_MODULE_4__.WSOL_MINTER);\n        let swSol = tokenAccounts.find((x)=>x.account.data.parsed.info.mint === _constants__WEBPACK_IMPORTED_MODULE_4__.SWSOL_MINTER);\n        let res = {\n            wSolBalance: undefined,\n            swSolBalance: undefined\n        };\n        if (wSol) {\n            res.wSolBalance = wSol.account.data.parsed.info.tokenAmount;\n        }\n        if (swSol) {\n            res.swSolBalance = swSol.account.data.parsed.info.tokenAmount;\n        }\n        return res;\n    }, [\n        tokenAccounts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card bg-base-100 w-96 shadow-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"tablist\",\n                    className: \"tabs tabs-lifted tabs-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"deposit\" && \"tab-active\"),\n                            onClick: ()=>{\n                                setAction(\"deposit\");\n                            },\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"withdraw\" && \"tab-active\"),\n                            onClick: ()=>{\n                                setAction(\"withdraw\");\n                            },\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"input input-bordered flex items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"grow\",\n                            placeholder: \"Amount\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary\",\n                            children: \"MAX\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Amount\",\n                    className: \"input input-bordered w-full max-w-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        !!solBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                valueToUi(solBalance),\n                                \" SOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 38\n                        }, undefined),\n                        !!wSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                wSolBalance.uiAmount,\n                                \" wSOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 39\n                        }, undefined),\n                        !!swSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                swSolBalance.uiAmount,\n                                \" swSOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 40\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: action.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SwapWidget, \"Ajdw3AaqmDGRZWLa8FyIQTpyN+w=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts\n    ];\n});\n_c = SwapWidget;\nvar _c;\n$RefreshReg$(_c, \"SwapWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRGO0FBQ3JDO0FBQ047QUFDVDtBQUNjO0FBRXRELE1BQU1RLFlBQVksQ0FBQ0M7SUFDZixPQUFPQyxLQUFLQyxLQUFLLENBQUMsUUFBU1IsNkRBQWdCQSxHQUFJLFVBQVU7QUFDN0Q7QUFFTyxNQUFNUyxhQUFhOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFFckMsTUFBTSxFQUFFVSxXQUFXQyxPQUFPLEVBQUUsR0FBR2QsdUVBQVNBO0lBQ3hDLE1BQU0sRUFBQ2UsTUFBTUMsVUFBVSxFQUFDLEdBQUdsQixzRkFBYUEsQ0FBQztRQUFFZ0I7SUFBUTtJQUVuRCxNQUFNLEVBQUNDLE1BQU1FLGFBQWEsRUFBQyxHQUFHbEIsNEZBQW1CQSxDQUFDO1FBQUVlO0lBQVE7SUFFNUQsTUFBTSxFQUFDSSxXQUFXLEVBQUVDLFlBQVksRUFBQyxHQUFHakIsOENBQU9BLENBQUM7UUFDeEMsSUFBSSxDQUFDZSxlQUFlO1lBQ2hCLE9BQU8sQ0FBQztRQUNaO1FBRUEsSUFBSUcsT0FBT0gsY0FBY0ksSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLENBQUNSLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksS0FBS3JCLG1EQUFXQTtRQUNsRixJQUFJc0IsUUFBUVYsY0FBY0ksSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxPQUFPLENBQUNSLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksS0FBS3RCLG9EQUFZQTtRQUVwRixJQUFJd0IsTUFBTTtZQUNOVixhQUFhVztZQUNiVixjQUFjVTtRQUNsQjtRQUVBLElBQUlULE1BQU07WUFDTlEsSUFBSVYsV0FBVyxHQUFHRSxLQUFLRyxPQUFPLENBQUNSLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxJQUFJLENBQUNLLFdBQVc7UUFDL0Q7UUFFQSxJQUFHSCxPQUFPO1lBQ05DLElBQUlULFlBQVksR0FBR1EsTUFBTUosT0FBTyxDQUFDUixJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSyxXQUFXO1FBQ2pFO1FBRUEsT0FBT0Y7SUFDUCxHQUFHO1FBQUNYO0tBQWM7SUFFdEIscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUUsTUFBSztvQkFBVUQsV0FBVTs7c0NBQzFCLDhEQUFDRTs0QkFBRUQsTUFBSzs0QkFBTUQsV0FBVyxPQUE0QyxPQUFyQ3JCLFdBQVcsYUFBYTs0QkFDckR3QixTQUFTO2dDQUFPdkIsVUFBVTs0QkFBVTtzQ0FDdEM7Ozs7OztzQ0FDRCw4REFBQ3NCOzRCQUFFRCxNQUFLOzRCQUFNRCxXQUFXLE9BQTZDLE9BQXRDckIsV0FBVyxjQUFjOzRCQUN0RHdCLFNBQVM7Z0NBQU92QixVQUFVOzRCQUFXO3NDQUN2Qzs7Ozs7Ozs7Ozs7OzhCQUVELDhEQUFDd0I7b0JBQU1KLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBTUMsTUFBSzs0QkFBT04sV0FBVTs0QkFBT08sYUFBWTs7Ozs7O3NDQUNoRCw4REFBQ0M7NEJBQU9SLFdBQVU7c0NBQWtCOzs7Ozs7Ozs7Ozs7OEJBRXhDLDhEQUFDSztvQkFBTUMsTUFBSztvQkFBT0MsYUFBWTtvQkFBU1AsV0FBVTs7Ozs7OzhCQUN0RCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUNWLENBQUMsQ0FBQ2hCLDRCQUFjLDhEQUFDeUI7O2dDQUFNbkMsVUFBVVU7Z0NBQVk7Ozs7Ozs7d0JBQzdDLENBQUMsQ0FBQ0UsNkJBQWUsOERBQUN1Qjs7Z0NBQU12QixZQUFZd0IsUUFBUTtnQ0FBQzs7Ozs7Ozt3QkFDN0MsQ0FBQyxDQUFDdkIsOEJBQWdCLDhEQUFDc0I7O2dDQUFNdEIsYUFBYXVCLFFBQVE7Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBRXBELDhEQUFDRjtvQkFBT1IsV0FBVTs4QkFBbUJyQixPQUFPZ0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkUsRUFBRTtHQTFEV2pDOztRQUdzQlYsbUVBQVNBO1FBQ2JGLGtGQUFhQTtRQUVWQyx3RkFBbUJBOzs7S0FOeENXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeD9lYmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlR2V0QmFsYW5jZSwgdXNlR2V0VG9rZW5BY2NvdW50c30gZnJvbSBcIkAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQtZGF0YS1hY2Nlc3NcIjtcbmltcG9ydCB7dXNlV2FsbGV0fSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IHtMQU1QT1JUU19QRVJfU09MfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQge3VzZU1lbW8sIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7U1dTT0xfTUlOVEVSLCBXU09MX01JTlRFUn0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHZhbHVlVG9VaSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCh2YWx1ZSAvIExBTVBPUlRTX1BFUl9TT0wpICogMTAwMDAwKSAvIDEwMDAwMFxufVxuXG5leHBvcnQgY29uc3QgU3dhcFdpZGdldCA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoXCJkZXBvc2l0XCIpO1xuXG4gICAgY29uc3QgeyBwdWJsaWNLZXk6IGFkZHJlc3MgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHtkYXRhOiBzb2xCYWxhbmNlfSA9IHVzZUdldEJhbGFuY2UoeyBhZGRyZXNzIH0pO1xuXG4gICAgY29uc3Qge2RhdGE6IHRva2VuQWNjb3VudHN9ID0gdXNlR2V0VG9rZW5BY2NvdW50cyh7IGFkZHJlc3MgfSk7XG5cbiAgICBjb25zdCB7d1NvbEJhbGFuY2UsIHN3U29sQmFsYW5jZX0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbkFjY291bnRzKSB7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3U29sID0gdG9rZW5BY2NvdW50cy5maW5kKHggPT4geC5hY2NvdW50LmRhdGEucGFyc2VkLmluZm8ubWludCA9PT0gV1NPTF9NSU5URVIpO1xuICAgICAgICBsZXQgc3dTb2wgPSB0b2tlbkFjY291bnRzLmZpbmQoeCA9PiB4LmFjY291bnQuZGF0YS5wYXJzZWQuaW5mby5taW50ID09PSBTV1NPTF9NSU5URVIpO1xuXG4gICAgICAgIGxldCByZXMgPSB7XG4gICAgICAgICAgICB3U29sQmFsYW5jZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3dTb2xCYWxhbmNlOiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3U29sKSB7XG4gICAgICAgICAgICByZXMud1NvbEJhbGFuY2UgPSB3U29sLmFjY291bnQuZGF0YS5wYXJzZWQuaW5mby50b2tlbkFtb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3dTb2wpIHtcbiAgICAgICAgICAgIHJlcy5zd1NvbEJhbGFuY2UgPSBzd1NvbC5hY2NvdW50LmRhdGEucGFyc2VkLmluZm8udG9rZW5BbW91bnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSwgW3Rva2VuQWNjb3VudHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1iYXNlLTEwMCB3LTk2IHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3NOYW1lPVwidGFicyB0YWJzLWxpZnRlZCB0YWJzLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJ0YWJcIiBjbGFzc05hbWU9e2B0YWIgJHthY3Rpb24gPT09IFwiZGVwb3NpdFwiICYmICd0YWItYWN0aXZlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0QWN0aW9uKFwiZGVwb3NpdFwiKX19XG4gICAgICAgICAgICAgICAgICAgID5EZXBvc2l0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwidGFiXCIgY2xhc3NOYW1lPXtgdGFiICR7YWN0aW9uID09PSBcIndpdGhkcmF3XCIgJiYgJ3RhYi1hY3RpdmUnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRBY3Rpb24oXCJ3aXRoZHJhd1wiKX19XG4gICAgICAgICAgICAgICAgICAgID5XaXRoZHJhdzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJncm93XCIgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5NQVg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7ISFzb2xCYWxhbmNlICYmIDxzcGFuPnt2YWx1ZVRvVWkoc29sQmFsYW5jZSl9IFNPTDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIHshIXdTb2xCYWxhbmNlICYmIDxzcGFuPnt3U29sQmFsYW5jZS51aUFtb3VudH0gd1NPTDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIHshIXN3U29sQmFsYW5jZSAmJiA8c3Bhbj57c3dTb2xCYWxhbmNlLnVpQW1vdW50fSBzd1NPTDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57YWN0aW9uLnRvVXBwZXJDYXNlKCl9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApO1xufTsiXSwibmFtZXMiOlsidXNlR2V0QmFsYW5jZSIsInVzZUdldFRva2VuQWNjb3VudHMiLCJ1c2VXYWxsZXQiLCJMQU1QT1JUU19QRVJfU09MIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiU1dTT0xfTUlOVEVSIiwiV1NPTF9NSU5URVIiLCJ2YWx1ZVRvVWkiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsIlN3YXBXaWRnZXQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJwdWJsaWNLZXkiLCJhZGRyZXNzIiwiZGF0YSIsInNvbEJhbGFuY2UiLCJ0b2tlbkFjY291bnRzIiwid1NvbEJhbGFuY2UiLCJzd1NvbEJhbGFuY2UiLCJ3U29sIiwiZmluZCIsIngiLCJhY2NvdW50IiwicGFyc2VkIiwiaW5mbyIsIm1pbnQiLCJzd1NvbCIsInJlcyIsInVuZGVmaW5lZCIsInRva2VuQW1vdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImEiLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iLCJ1aUFtb3VudCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/swap/SwapWidget.tsx\n"));

/***/ })

});