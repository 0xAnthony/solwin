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

/***/ "(app-pages-browser)/./components/ui/ui-layout.tsx":
/*!*************************************!*\
  !*** ./components/ui/ui-layout.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppHero: function() { return /* binding */ AppHero; },\n/* harmony export */   AppModal: function() { return /* binding */ AppModal; },\n/* harmony export */   UiLayout: function() { return /* binding */ UiLayout; },\n/* harmony export */   ellipsify: function() { return /* binding */ ellipsify; },\n/* harmony export */   useTransactionToast: function() { return /* binding */ useTransactionToast; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_solana_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solana/solana-provider */ \"(app-pages-browser)/./components/solana/solana-provider.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _account_account_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account/account-ui */ \"(app-pages-browser)/./components/account/account-ui.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-pages-browser)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/../node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ UiLayout,AppModal,AppHero,ellipsify,useTransactionToast auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction UiLayout(param) {\n    let { children, links } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar bg-base-300 text-neutral-content flex-col md:flex-row space-y-2 md:space-y-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"btn btn-ghost normal-case text-xl\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-4 md:h-6\",\n                                    alt: \"Logo\",\n                                    src: \"/logo.png\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"menu menu-horizontal px-1 space-x-2\",\n                                children: links.map((param)=>{\n                                    let { label, path } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: pathname.startsWith(path) ? \"active\" : \"\",\n                                            href: path,\n                                            children: label\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, path, false, {\n                                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-none space-x-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_solana_provider__WEBPACK_IMPORTED_MODULE_1__.WalletButton, {}, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_6__.ClusterChecker, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_account_account_ui__WEBPACK_IMPORTED_MODULE_5__.AccountChecker, {}, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mx-4 lg:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center my-32\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"loading loading-spinner loading-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, void 0),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {\n                        position: \"bottom-right\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(UiLayout, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = UiLayout;\nfunction AppModal(param) {\n    let { children, title, hide, show, submit, submitDisabled, submitLabel } = param;\n    _s1();\n    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!dialogRef.current) return;\n        if (show) {\n            dialogRef.current.showModal();\n        } else {\n            dialogRef.current.close();\n        }\n    }, [\n        show,\n        dialogRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        className: \"modal\",\n        ref: dialogRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal-box space-y-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"font-bold text-lg\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-action\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"join space-x-2\",\n                        children: [\n                            submit ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs lg:btn-md btn-primary\",\n                                onClick: submit,\n                                disabled: submitDisabled,\n                                children: submitLabel || \"Save\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: hide,\n                                className: \"btn\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s1(AppModal, \"9PxoOcTjzEwd023cmhgaBdjzFyE=\");\n_c1 = AppModal;\nfunction AppHero(param) {\n    let { children, title, subtitle } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hero py-[64px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-2xl\",\n                children: [\n                    typeof title === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-bold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this) : title,\n                    typeof subtitle === \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"py-6\",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, this) : subtitle,\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n_c2 = AppHero;\nfunction ellipsify() {\n    let str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", len = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;\n    if (str.length > 30) {\n        return str.substring(0, len) + \"..\" + str.substring(str.length - len, str.length);\n    }\n    return str;\n}\nfunction useTransactionToast() {\n    return (signature)=>{\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-lg\",\n                    children: \"Transaction sent\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                    lineNumber: 169,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_6__.ExplorerLink, {\n                    path: \"tx/\".concat(signature),\n                    label: \"View Transaction\",\n                    className: \"btn btn-xs btn-primary\"\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/WebstormProjects/solwin/web/components/ui/ui-layout.tsx\",\n            lineNumber: 168,\n            columnNumber: 7\n        }, this));\n    };\n}\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"UiLayout\");\n$RefreshReg$(_c1, \"AppModal\");\n$RefreshReg$(_c2, \"AppHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvdWktbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDMUI7QUFDZ0M7QUFFbEM7QUFDaUI7QUFFUztBQUt4QjtBQUNrQjtBQUUxQyxTQUFTWSxTQUFTLEtBTXhCO1FBTndCLEVBQ3ZCQyxRQUFRLEVBQ1JDLEtBQUssRUFJTixHQU53Qjs7SUFPdkIsTUFBTUMsV0FBV1QsNERBQVdBO0lBRTVCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNaLGtEQUFJQTtnQ0FBQ1ksV0FBVTtnQ0FBb0NDLE1BQUs7MENBQ3ZELDRFQUFDQztvQ0FBSUYsV0FBVTtvQ0FBYUcsS0FBSTtvQ0FBT0MsS0FBSTs7Ozs7Ozs7Ozs7MENBRTdDLDhEQUFDQztnQ0FBR0wsV0FBVTswQ0FDWEgsTUFBTVMsR0FBRyxDQUFDO3dDQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO3lEQUN6Qiw4REFBQ0M7a0RBQ0MsNEVBQUNyQixrREFBSUE7NENBQ0hZLFdBQVdGLFNBQVNZLFVBQVUsQ0FBQ0YsUUFBUSxXQUFXOzRDQUNsRFAsTUFBTU87c0RBRUxEOzs7Ozs7dUNBTElDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FXZiw4REFBQ1Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNqQixpRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDUSwrREFBY0E7MEJBQ2IsNEVBQUNELCtEQUFjQTs7Ozs7Ozs7OzswQkFFakIsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2YsMkNBQVFBO3dCQUNQMEIsd0JBQ0UsOERBQUNaOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDWTtnQ0FBS1osV0FBVTs7Ozs7Ozs7Ozs7a0NBSW5CSjs7Ozs7O2tDQUVILDhEQUFDRixvREFBT0E7d0JBQUNtQixVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7R0FwRGdCbEI7O1FBT0dOLHdEQUFXQTs7O0tBUGRNO0FBc0RULFNBQVNtQixTQUFTLEtBZ0J4QjtRQWhCd0IsRUFDdkJsQixRQUFRLEVBQ1JtQixLQUFLLEVBQ0xDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLGNBQWMsRUFDZEMsV0FBVyxFQVNaLEdBaEJ3Qjs7SUFpQnZCLE1BQU1DLFlBQVlsQyw2Q0FBTUEsQ0FBMkI7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDbUMsVUFBVUMsT0FBTyxFQUFFO1FBQ3hCLElBQUlMLE1BQU07WUFDUkksVUFBVUMsT0FBTyxDQUFDQyxTQUFTO1FBQzdCLE9BQU87WUFDTEYsVUFBVUMsT0FBTyxDQUFDRSxLQUFLO1FBQ3pCO0lBQ0YsR0FBRztRQUFDUDtRQUFNSTtLQUFVO0lBRXBCLHFCQUNFLDhEQUFDSTtRQUFPekIsV0FBVTtRQUFRMEIsS0FBS0w7a0JBQzdCLDRFQUFDdEI7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUMyQjtvQkFBRzNCLFdBQVU7OEJBQXFCZTs7Ozs7O2dCQUNsQ25COzhCQUNELDhEQUFDRztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUNaa0IsdUJBQ0MsOERBQUNVO2dDQUNDNUIsV0FBVTtnQ0FDVjZCLFNBQVNYO2dDQUNUWSxVQUFVWDswQ0FFVEMsZUFBZTs7Ozs7dUNBRWhCOzBDQUNKLDhEQUFDUTtnQ0FBT0MsU0FBU2I7Z0NBQU1oQixXQUFVOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5EO0lBcERnQmM7TUFBQUE7QUFzRFQsU0FBU2lCLFFBQVEsS0FRdkI7UUFSdUIsRUFDdEJuQyxRQUFRLEVBQ1JtQixLQUFLLEVBQ0xpQixRQUFRLEVBS1QsR0FSdUI7SUFTdEIscUJBQ0UsOERBQUNqQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1osT0FBT2UsVUFBVSx5QkFDaEIsOERBQUNrQjt3QkFBR2pDLFdBQVU7a0NBQXNCZTs7Ozs7K0JBRXBDQTtvQkFFRCxPQUFPaUIsYUFBYSx5QkFDbkIsOERBQUNFO3dCQUFFbEMsV0FBVTtrQ0FBUWdDOzs7OzsrQkFFckJBO29CQUVEcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7TUE1QmdCbUM7QUE4QlQsU0FBU0k7UUFBVUMsTUFBQUEsaUVBQU0sSUFBSUMsTUFBQUEsaUVBQU07SUFDeEMsSUFBSUQsSUFBSUUsTUFBTSxHQUFHLElBQUk7UUFDbkIsT0FDRUYsSUFBSUcsU0FBUyxDQUFDLEdBQUdGLE9BQU8sT0FBT0QsSUFBSUcsU0FBUyxDQUFDSCxJQUFJRSxNQUFNLEdBQUdELEtBQUtELElBQUlFLE1BQU07SUFFN0U7SUFDQSxPQUFPRjtBQUNUO0FBRU8sU0FBU0k7SUFDZCxPQUFPLENBQUNDO1FBQ05oRCx1REFBS0EsQ0FBQ2lELE9BQU8sZUFDWCw4REFBQzNDO1lBQUlDLFdBQVc7OzhCQUNkLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFBVTs7Ozs7OzhCQUN6Qiw4REFBQ1IsNkRBQVlBO29CQUNYZ0IsTUFBTSxNQUFnQixPQUFWaUM7b0JBQ1psQyxPQUFPO29CQUNQUCxXQUFVOzs7Ozs7Ozs7Ozs7SUFJbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL3VpLWxheW91dC50c3g/NGM3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4uL3NvbGFuYS9zb2xhbmEtcHJvdmlkZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmltcG9ydCB7IEFjY291bnRDaGVja2VyIH0gZnJvbSAnLi4vYWNjb3VudC9hY2NvdW50LXVpJztcbmltcG9ydCB7XG4gIENsdXN0ZXJDaGVja2VyLFxuICBDbHVzdGVyVWlTZWxlY3QsXG4gIEV4cGxvcmVyTGluayxcbn0gZnJvbSAnLi4vY2x1c3Rlci9jbHVzdGVyLXVpJztcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFVpTGF5b3V0KHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtzLFxufToge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsaW5rczogeyBsYWJlbDogc3RyaW5nOyBwYXRoOiBzdHJpbmcgfVtdO1xufSkge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1iYXNlLTMwMCB0ZXh0LW5ldXRyYWwtY29udGVudCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBzcGFjZS15LTIgbWQ6c3BhY2UteS0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBub3JtYWwtY2FzZSB0ZXh0LXhsXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC00IG1kOmgtNlwiIGFsdD1cIkxvZ29cIiBzcmM9XCIvbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudSBtZW51LWhvcml6b250YWwgcHgtMSBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKHsgbGFiZWwsIHBhdGggfSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtwYXRofT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZS5zdGFydHNXaXRoKHBhdGgpID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3BhdGh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8V2FsbGV0QnV0dG9uIC8+XG4gICAgICAgICAgey8qPENsdXN0ZXJVaVNlbGVjdCAvPiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPENsdXN0ZXJDaGVja2VyPlxuICAgICAgICA8QWNjb3VudENoZWNrZXIgLz5cbiAgICAgIDwvQ2x1c3RlckNoZWNrZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBteC00IGxnOm14LWF1dG9cIj5cbiAgICAgICAgPFN1c3BlbnNlXG4gICAgICAgICAgZmFsbGJhY2s9e1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8VG9hc3RlciBwb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKjxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGZvb3Rlci1jZW50ZXIgcC00IGJnLWJhc2UtMzAwIHRleHQtYmFzZS1jb250ZW50XCI+PC9mb290ZXI+Ki99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBNb2RhbCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbiAgaGlkZSxcbiAgc2hvdyxcbiAgc3VibWl0LFxuICBzdWJtaXREaXNhYmxlZCxcbiAgc3VibWl0TGFiZWwsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhpZGU6ICgpID0+IHZvaWQ7XG4gIHNob3c6IGJvb2xlYW47XG4gIHN1Ym1pdD86ICgpID0+IHZvaWQ7XG4gIHN1Ym1pdERpc2FibGVkPzogYm9vbGVhbjtcbiAgc3VibWl0TGFiZWw/OiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IGRpYWxvZ1JlZiA9IHVzZVJlZjxIVE1MRGlhbG9nRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaWFsb2dSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlmIChzaG93KSB7XG4gICAgICBkaWFsb2dSZWYuY3VycmVudC5zaG93TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlhbG9nUmVmLmN1cnJlbnQuY2xvc2UoKTtcbiAgICB9XG4gIH0sIFtzaG93LCBkaWFsb2dSZWZdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaWFsb2cgY2xhc3NOYW1lPVwibW9kYWxcIiByZWY9e2RpYWxvZ1JlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJveCBzcGFjZS15LTVcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1hY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvaW4gc3BhY2UteC0yXCI+XG4gICAgICAgICAgICB7c3VibWl0ID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBsZzpidG4tbWQgYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3VibWl0TGFiZWwgfHwgJ1NhdmUnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoaWRlfSBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGlhbG9nPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwSGVybyh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICB0aXRsZTogUmVhY3ROb2RlO1xuICBzdWJ0aXRsZTogUmVhY3ROb2RlO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBweS1bNjRweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsXCI+XG4gICAgICAgICAge3R5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dHlwZW9mIHN1YnRpdGxlID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTZcIj57c3VidGl0bGV9PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBzdWJ0aXRsZVxuICAgICAgICAgICl9XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzaWZ5KHN0ciA9ICcnLCBsZW4gPSA0KSB7XG4gIGlmIChzdHIubGVuZ3RoID4gMzApIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RyLnN1YnN0cmluZygwLCBsZW4pICsgJy4uJyArIHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIGxlbiwgc3RyLmxlbmd0aClcbiAgICApO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUcmFuc2FjdGlvblRvYXN0KCkge1xuICByZXR1cm4gKHNpZ25hdHVyZTogc3RyaW5nKSA9PiB7XG4gICAgdG9hc3Quc3VjY2VzcyhcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGV4dC1jZW50ZXInfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+VHJhbnNhY3Rpb24gc2VudDwvZGl2PlxuICAgICAgICA8RXhwbG9yZXJMaW5rXG4gICAgICAgICAgcGF0aD17YHR4LyR7c2lnbmF0dXJlfWB9XG4gICAgICAgICAgbGFiZWw9eydWaWV3IFRyYW5zYWN0aW9uJ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiV2FsbGV0QnV0dG9uIiwiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIkFjY291bnRDaGVja2VyIiwiQ2x1c3RlckNoZWNrZXIiLCJFeHBsb3JlckxpbmsiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJVaUxheW91dCIsImNoaWxkcmVuIiwibGlua3MiLCJwYXRobmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpbWciLCJhbHQiLCJzcmMiLCJ1bCIsIm1hcCIsImxhYmVsIiwicGF0aCIsImxpIiwic3RhcnRzV2l0aCIsImZhbGxiYWNrIiwic3BhbiIsInBvc2l0aW9uIiwiQXBwTW9kYWwiLCJ0aXRsZSIsImhpZGUiLCJzaG93Iiwic3VibWl0Iiwic3VibWl0RGlzYWJsZWQiLCJzdWJtaXRMYWJlbCIsImRpYWxvZ1JlZiIsImN1cnJlbnQiLCJzaG93TW9kYWwiLCJjbG9zZSIsImRpYWxvZyIsInJlZiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiQXBwSGVybyIsInN1YnRpdGxlIiwiaDEiLCJwIiwiZWxsaXBzaWZ5Iiwic3RyIiwibGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwidXNlVHJhbnNhY3Rpb25Ub2FzdCIsInNpZ25hdHVyZSIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ui-layout.tsx\n"));

/***/ })

});