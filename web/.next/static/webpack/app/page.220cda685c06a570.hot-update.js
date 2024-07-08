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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwapWidget: function() { return /* binding */ SwapWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/account/account-data-access */ \"(app-pages-browser)/./components/account/account-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst valueToUi = (value)=>{\n    return Math.round(value / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL * 100000) / 100000;\n};\nconst SwapWidget = ()=>{\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"deposit\");\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const setActionDeposit = ()=>{\n        setInputValue(\"\");\n        setAction(\"deposit\");\n    };\n    const setActionWithdraw = ()=>{\n        setInputValue(\"\");\n        setAction(\"withdraw\");\n    };\n    const setMax = ()=>{\n        if (action === \"deposit\") {\n            setInputValue(wSolBalance.uiAmount);\n        } else {\n            setInputValue(swSolBalance.uiAmount);\n        }\n    };\n    const { publicKey: address } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const { data: solBalance } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance)({\n        address\n    });\n    const { data: tokenAccounts } = (0,_components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts)({\n        address\n    });\n    const { wSolBalance, swSolBalance } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        if (!tokenAccounts) {\n            return {};\n        }\n        let wSol = tokenAccounts.find((x)=>x.account.data.parsed.info.mint === _constants__WEBPACK_IMPORTED_MODULE_4__.WSOL_MINTER);\n        let swSol = tokenAccounts.find((x)=>x.account.data.parsed.info.mint === _constants__WEBPACK_IMPORTED_MODULE_4__.SWSOL_MINTER);\n        let res = {\n            wSolBalance: undefined,\n            swSolBalance: undefined\n        };\n        if (wSol) {\n            res.wSolBalance = wSol.account.data.parsed.info.tokenAmount;\n        }\n        if (swSol) {\n            res.swSolBalance = swSol.account.data.parsed.info.tokenAmount;\n        }\n        return res;\n    }, [\n        tokenAccounts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card bg-base-100 w-96 shadow-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    role: \"tablist\",\n                    className: \"tabs tabs-lifted tabs-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"deposit\" && \"tab-active\"),\n                            onClick: setActionDeposit,\n                            children: \"Deposit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            role: \"tab\",\n                            className: \"tab \".concat(action === \"withdraw\" && \"tab-active\"),\n                            onClick: setActionWithdraw,\n                            children: \"Withdraw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"input input-bordered flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"grow\",\n                            placeholder: \"Amount\",\n                            value: inputValue,\n                            onChange: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary btn-sm\",\n                            onClick: setMax,\n                            children: \"MAX\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                !!solBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        valueToUi(solBalance),\n                                        \" SOL\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 42\n                                }, undefined),\n                                !!wSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        wSolBalance.uiAmount,\n                                        \" wSOL\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 43\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, undefined),\n                        !!swSolBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                swSolBalance.uiAmount,\n                                \" swSOL\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 40\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: action.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Chances impact: +0.00%\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/swap/SwapWidget.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SwapWidget, \"6cixk3+jHaL1SG+1qfQc2/tYjPo=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetBalance,\n        _components_account_account_data_access__WEBPACK_IMPORTED_MODULE_1__.useGetTokenAccounts\n    ];\n});\n_c = SwapWidget;\nvar _c;\n$RefreshReg$(_c, \"SwapWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc3dhcC9Td2FwV2lkZ2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRGO0FBQ3JDO0FBQ047QUFDVDtBQUNjO0FBRXRELE1BQU1RLFlBQVksQ0FBQ0M7SUFDZixPQUFPQyxLQUFLQyxLQUFLLENBQUMsUUFBU1IsNkRBQWdCQSxHQUFJLFVBQVU7QUFDN0Q7QUFFTyxNQUFNUyxhQUFhOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1ZLG1CQUFtQjtRQUNyQkQsY0FBYztRQUNkRixVQUFVO0lBQ2Q7SUFFQSxNQUFNSSxvQkFBb0I7UUFDdEJGLGNBQWM7UUFDZEYsVUFBVTtJQUNkO0lBRUEsTUFBTUssU0FBUztRQUNYLElBQUlOLFdBQVcsV0FBVztZQUN0QkcsY0FBY0ksWUFBWUMsUUFBUTtRQUN0QyxPQUFPO1lBQ0hMLGNBQWNNLGFBQWFELFFBQVE7UUFDdkM7SUFDSjtJQUVBLE1BQU0sRUFBRUUsV0FBV0MsT0FBTyxFQUFFLEdBQUd0Qix1RUFBU0E7SUFDeEMsTUFBTSxFQUFDdUIsTUFBTUMsVUFBVSxFQUFDLEdBQUcxQixzRkFBYUEsQ0FBQztRQUFFd0I7SUFBUTtJQUVuRCxNQUFNLEVBQUNDLE1BQU1FLGFBQWEsRUFBQyxHQUFHMUIsNEZBQW1CQSxDQUFDO1FBQUV1QjtJQUFRO0lBRTVELE1BQU0sRUFBQ0osV0FBVyxFQUFFRSxZQUFZLEVBQUMsR0FBR2xCLDhDQUFPQSxDQUFDO1FBQ3hDLElBQUksQ0FBQ3VCLGVBQWU7WUFDaEIsT0FBTyxDQUFDO1FBQ1o7UUFFQSxJQUFJQyxPQUFPRCxjQUFjRSxJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLE9BQU8sQ0FBQ04sSUFBSSxDQUFDTyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxLQUFLM0IsbURBQVdBO1FBQ2xGLElBQUk0QixRQUFRUixjQUFjRSxJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLE9BQU8sQ0FBQ04sSUFBSSxDQUFDTyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxLQUFLNUIsb0RBQVlBO1FBRXBGLElBQUk4QixNQUFNO1lBQ05oQixhQUFhaUI7WUFDYmYsY0FBY2U7UUFDbEI7UUFFQSxJQUFJVCxNQUFNO1lBQ05RLElBQUloQixXQUFXLEdBQUdRLEtBQUtHLE9BQU8sQ0FBQ04sSUFBSSxDQUFDTyxNQUFNLENBQUNDLElBQUksQ0FBQ0ssV0FBVztRQUMvRDtRQUVBLElBQUdILE9BQU87WUFDTkMsSUFBSWQsWUFBWSxHQUFHYSxNQUFNSixPQUFPLENBQUNOLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxJQUFJLENBQUNLLFdBQVc7UUFDakU7UUFFQSxPQUFPRjtJQUNQLEdBQUc7UUFBQ1Q7S0FBYztJQUV0QixxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJRSxNQUFLO29CQUFVRCxXQUFVOztzQ0FDMUIsOERBQUNFOzRCQUFFRCxNQUFLOzRCQUFNRCxXQUFXLE9BQTRDLE9BQXJDM0IsV0FBVyxhQUFhOzRCQUFnQjhCLFNBQVMxQjtzQ0FBa0I7Ozs7OztzQ0FDbkcsOERBQUN5Qjs0QkFBRUQsTUFBSzs0QkFBTUQsV0FBVyxPQUE2QyxPQUF0QzNCLFdBQVcsY0FBYzs0QkFBZ0I4QixTQUFTekI7c0NBQW1COzs7Ozs7Ozs7Ozs7OEJBRXJHLDhEQUFDMEI7b0JBQU1KLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBTUMsTUFBSzs0QkFBT04sV0FBVTs0QkFBT08sYUFBWTs0QkFBU3RDLE9BQU9NOzRCQUFZaUMsVUFBVSxLQUFPOzs7Ozs7c0NBQzdGLDhEQUFDQzs0QkFBT1QsV0FBVTs0QkFBeUJHLFNBQVN4QjtzQ0FBUTs7Ozs7Ozs7Ozs7OzhCQUVwRSw4REFBQ29CO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNWLENBQUMsQ0FBQ2QsNEJBQWMsOERBQUN3Qjs7d0NBQU0xQyxVQUFVa0I7d0NBQVk7Ozs7Ozs7Z0NBQzdDLENBQUMsQ0FBQ04sNkJBQWUsOERBQUM4Qjs7d0NBQU05QixZQUFZQyxRQUFRO3dDQUFDOzs7Ozs7Ozs7Ozs7O3dCQUVqRCxDQUFDLENBQUNDLDhCQUFnQiw4REFBQzRCOztnQ0FBTTVCLGFBQWFELFFBQVE7Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBRXBELDhEQUFDNEI7b0JBQU9ULFdBQVU7OEJBQW1CM0IsT0FBT3NDLFdBQVc7Ozs7Ozs4QkFDdkQsOERBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQixFQUFFO0dBN0VXeEM7O1FBc0JzQlYsbUVBQVNBO1FBQ2JGLGtGQUFhQTtRQUVWQyx3RkFBbUJBOzs7S0F6QnhDVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N3YXAvU3dhcFdpZGdldC50c3g/ZWJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUdldEJhbGFuY2UsIHVzZUdldFRva2VuQWNjb3VudHN9IGZyb20gXCJAL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LWRhdGEtYWNjZXNzXCI7XG5pbXBvcnQge3VzZVdhbGxldH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7TEFNUE9SVFNfUEVSX1NPTH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1NXU09MX01JTlRFUiwgV1NPTF9NSU5URVJ9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuXG5jb25zdCB2YWx1ZVRvVWkgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgodmFsdWUgLyBMQU1QT1JUU19QRVJfU09MKSAqIDEwMDAwMCkgLyAxMDAwMDBcbn1cblxuZXhwb3J0IGNvbnN0IFN3YXBXaWRnZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKFwiZGVwb3NpdFwiKTtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHNldEFjdGlvbkRlcG9zaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldElucHV0VmFsdWUoXCJcIilcbiAgICAgICAgc2V0QWN0aW9uKFwiZGVwb3NpdFwiKVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFjdGlvbldpdGhkcmF3ID0gKCkgPT4ge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgICAgIHNldEFjdGlvbihcIndpdGhkcmF3XCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TWF4ID0gKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlcG9zaXRcIikge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZSh3U29sQmFsYW5jZS51aUFtb3VudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoc3dTb2xCYWxhbmNlLnVpQW1vdW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwdWJsaWNLZXk6IGFkZHJlc3MgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHtkYXRhOiBzb2xCYWxhbmNlfSA9IHVzZUdldEJhbGFuY2UoeyBhZGRyZXNzIH0pO1xuXG4gICAgY29uc3Qge2RhdGE6IHRva2VuQWNjb3VudHN9ID0gdXNlR2V0VG9rZW5BY2NvdW50cyh7IGFkZHJlc3MgfSk7XG5cbiAgICBjb25zdCB7d1NvbEJhbGFuY2UsIHN3U29sQmFsYW5jZX0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbkFjY291bnRzKSB7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3U29sID0gdG9rZW5BY2NvdW50cy5maW5kKHggPT4geC5hY2NvdW50LmRhdGEucGFyc2VkLmluZm8ubWludCA9PT0gV1NPTF9NSU5URVIpO1xuICAgICAgICBsZXQgc3dTb2wgPSB0b2tlbkFjY291bnRzLmZpbmQoeCA9PiB4LmFjY291bnQuZGF0YS5wYXJzZWQuaW5mby5taW50ID09PSBTV1NPTF9NSU5URVIpO1xuXG4gICAgICAgIGxldCByZXMgPSB7XG4gICAgICAgICAgICB3U29sQmFsYW5jZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3dTb2xCYWxhbmNlOiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3U29sKSB7XG4gICAgICAgICAgICByZXMud1NvbEJhbGFuY2UgPSB3U29sLmFjY291bnQuZGF0YS5wYXJzZWQuaW5mby50b2tlbkFtb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3dTb2wpIHtcbiAgICAgICAgICAgIHJlcy5zd1NvbEJhbGFuY2UgPSBzd1NvbC5hY2NvdW50LmRhdGEucGFyc2VkLmluZm8udG9rZW5BbW91bnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSwgW3Rva2VuQWNjb3VudHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1iYXNlLTEwMCB3LTk2IHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3NOYW1lPVwidGFicyB0YWJzLWxpZnRlZCB0YWJzLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJ0YWJcIiBjbGFzc05hbWU9e2B0YWIgJHthY3Rpb24gPT09IFwiZGVwb3NpdFwiICYmICd0YWItYWN0aXZlJ31gfSBvbkNsaWNrPXtzZXRBY3Rpb25EZXBvc2l0fT5EZXBvc2l0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSByb2xlPVwidGFiXCIgY2xhc3NOYW1lPXtgdGFiICR7YWN0aW9uID09PSBcIndpdGhkcmF3XCIgJiYgJ3RhYi1hY3RpdmUnfWB9IG9uQ2xpY2s9e3NldEFjdGlvbldpdGhkcmF3fT5XaXRoZHJhdzwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJncm93XCIgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiB2YWx1ZT17aW5wdXRWYWx1ZX0gb25DaGFuZ2U9eygpID0+IHt9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXtzZXRNYXh9Pk1BWDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ISFzb2xCYWxhbmNlICYmIDxzcGFuPnt2YWx1ZVRvVWkoc29sQmFsYW5jZSl9IFNPTDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICB7ISF3U29sQmFsYW5jZSAmJiA8c3Bhbj57d1NvbEJhbGFuY2UudWlBbW91bnR9IHdTT0w8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyEhc3dTb2xCYWxhbmNlICYmIDxzcGFuPntzd1NvbEJhbGFuY2UudWlBbW91bnR9IHN3U09MPC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPnthY3Rpb24udG9VcHBlckNhc2UoKX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQ2hhbmNlcyBpbXBhY3Q6ICswLjAwJVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VHZXRCYWxhbmNlIiwidXNlR2V0VG9rZW5BY2NvdW50cyIsInVzZVdhbGxldCIsIkxBTVBPUlRTX1BFUl9TT0wiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJTV1NPTF9NSU5URVIiLCJXU09MX01JTlRFUiIsInZhbHVlVG9VaSIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwiU3dhcFdpZGdldCIsImFjdGlvbiIsInNldEFjdGlvbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2V0QWN0aW9uRGVwb3NpdCIsInNldEFjdGlvbldpdGhkcmF3Iiwic2V0TWF4Iiwid1NvbEJhbGFuY2UiLCJ1aUFtb3VudCIsInN3U29sQmFsYW5jZSIsInB1YmxpY0tleSIsImFkZHJlc3MiLCJkYXRhIiwic29sQmFsYW5jZSIsInRva2VuQWNjb3VudHMiLCJ3U29sIiwiZmluZCIsIngiLCJhY2NvdW50IiwicGFyc2VkIiwiaW5mbyIsIm1pbnQiLCJzd1NvbCIsInJlcyIsInVuZGVmaW5lZCIsInRva2VuQW1vdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsImEiLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwic3BhbiIsInRvVXBwZXJDYXNlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/swap/SwapWidget.tsx\n"));

/***/ })

});