"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/book/page",{

/***/ "(app-pages-browser)/./src/app/book/Book.tsx":
/*!*******************************!*\
  !*** ./src/app/book/Book.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Crud; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/notification/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/space/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/row/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/col/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Modal,Row,Space,Table,Typography,notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/table/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ExclamationCircleFilled_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ExclamationCircleFilled!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/book/api.ts\");\n/* harmony import */ var _components_book_BookModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/book/BookModal */ \"(app-pages-browser)/./src/components/book/BookModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst { Title } = _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst ModalType = {\n    CREATE: \"create\",\n    UPDATE: \"update\"\n};\nfunction Crud() {\n    _s();\n    const [modalConfig, setModalConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        type: \"\",\n        data: null\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const openModal = (type, data)=>{\n        setModalConfig({\n            type: type,\n            data: data || null\n        });\n    };\n    const closeModal = ()=>{\n        setModalConfig({\n            type: \"\",\n            data: null\n        });\n    };\n    const handleDelete = (id)=>{\n        _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].confirm({\n            title: \"Delete confirm\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ExclamationCircleFilled_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            content: \"Are you sure to delete this book?\",\n            cancelText: \"Close\",\n            okText: \"Confirm\",\n            maskClosable: true,\n            onOk () {\n                try {\n                    (0,_api__WEBPACK_IMPORTED_MODULE_2__.deleteBooks)(id).then(()=>{\n                        handleReload();\n                        _barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success({\n                            message: \"Delete success!\"\n                        });\n                    });\n                } catch (e) {\n                    console.log(e);\n                }\n            },\n            onCancel () {\n                console.log(\"Cancel\");\n            }\n        });\n    };\n    const handleReload = ()=>{\n        handleRequest();\n    };\n    const handleRequest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setLoading(true);\n        (0,_api__WEBPACK_IMPORTED_MODULE_2__.getBooks)().then((response)=>{\n            setData(response);\n        }).catch((error)=>{\n            console.log(error);\n        }).finally(()=>{\n            setLoading(false);\n        });\n    }, [\n        setLoading,\n        setData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleRequest();\n    }, [\n        handleRequest\n    ]);\n    const columns = [\n        {\n            title: \"ID\",\n            dataIndex: \"id\",\n            key: \"id\"\n        },\n        {\n            title: \"T\\xean s\\xe1ch\",\n            dataIndex: \"bookName\",\n            key: \"bookName\"\n        },\n        {\n            title: \"T\\xean t\\xe1c giả\",\n            dataIndex: \"author\",\n            key: \"author\"\n        },\n        {\n            title: \"Ng\\xe0y xuất bản\",\n            dataIndex: \"release_day\",\n            key: \"release_day\"\n        },\n        {\n            title: \"Gi\\xe1 s\\xe1ch\",\n            dataIndex: \"price\",\n            key: \"price\",\n            render: (price)=>\"$\".concat(price)\n        },\n        {\n            title: \"M\\xf4 tả\",\n            dataIndex: \"description\",\n            key: \"description\"\n        },\n        {\n            title: \"Ng\\xf4n ngữ\",\n            dataIndex: \"language\",\n            key: \"language\",\n            render: _\n        },\n        {\n            title: \"Trạng th\\xe1i\",\n            dataIndex: \"status\",\n            key: \"status\",\n            render: (_1, param)=>{\n                let { status } = param;\n                return status === \"inStock\" ? \"C\\xf2n h\\xe0ng\" : \"Hết h\\xe0ng\";\n            }\n        },\n        {\n            title: \"Đ\\xe1nh gi\\xe1\",\n            dataIndex: \"judge\",\n            key: \"judge\",\n            render: (_1, param)=>{\n                let { publisher } = param;\n                switch(publisher){\n                    case \"kimdong\":\n                        return \"Kim Đồng\";\n                    case \"thanhnien\":\n                        return \"Thanh Ni\\xean\";\n                    case \"tuoitre\":\n                        return \"Tuổi Trẻ\";\n                }\n            }\n        },\n        {\n            title: \"Thao t\\xe1c\",\n            key: \"action\",\n            align: \"center\",\n            render: (record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    size: \"middle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            type: \"primary\",\n                            onClick: ()=>{\n                                openModal(ModalType.UPDATE, record);\n                            },\n                            children: \"Sửa\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            type: \"primary\",\n                            danger: true,\n                            onClick: ()=>{\n                                handleDelete(record.id);\n                            },\n                            children: \"X\\xf3a\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, this)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                justify: \"space-between\",\n                align: \"bottom\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            level: 3,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: \"Danh s\\xe1ch c\\xe1c cuốn s\\xe1ch hay nhất thế giới\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                            lineNumber: 168,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            type: \"primary\",\n                            onClick: ()=>{\n                                openModal(ModalType.CREATE);\n                            },\n                            style: {\n                                marginBottom: 8\n                            },\n                            children: \"Th\\xeam s\\xe1ch ➕\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                            lineNumber: 171,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                lineNumber: 166,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Modal_Row_Space_Table_Typography_notification_antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                columns: columns,\n                dataSource: data,\n                rowKey: (record)=>record === null || record === void 0 ? void 0 : record.id,\n                loading: loading,\n                pagination: {\n                    pageSize: 5\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this),\n            modalConfig.type && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_book_BookModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: true,\n                onClose: closeModal,\n                formType: modalConfig.type === \"create\" ? \"create\" : \"update\",\n                data: modalConfig.data,\n                handleReload: handleReload\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\React-CRUD\\\\src\\\\app\\\\book\\\\Book.tsx\",\n                lineNumber: 182,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Crud, \"DXYUQeXuxsOtEr9PFMsp4OZQ3qI=\");\n_c = Crud;\nvar _c;\n$RefreshReg$(_c, \"Crud\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYm9vay9Cb29rLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3RztBQUN4QztBQUVOO0FBQ2Q7QUFDUTtBQUVwRCxNQUFNLEVBQUVnQixLQUFLLEVBQUUsR0FBR1QsNEhBQVVBO0FBRTVCLE1BQU1VLFlBQVk7SUFDaEJDLFFBQVE7SUFDUkMsUUFBUTtBQUNWO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBZTtRQUMzRFksTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBSyxDQUFDYSxNQUFNRyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBSyxFQUFFO0lBRXRDLE1BQU1pQixZQUFZLENBQUNMLE1BQWNDO1FBQy9CRixlQUFlO1lBQ2JDLE1BQU1BO1lBQ05DLE1BQU1BLFFBQVE7UUFDaEI7SUFDRjtJQUVBLE1BQU1LLGFBQWE7UUFDakJQLGVBQWU7WUFDYkMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1NLGVBQWUsQ0FBQ0M7UUFDcEI3Qiw0SEFBS0EsQ0FBQzhCLE9BQU8sQ0FBQztZQUNaQyxPQUFPO1lBQ1BDLG9CQUFNLDhEQUFDdEIsdUdBQXVCQTs7Ozs7WUFDOUJ1QixTQUFTO1lBQ1RDLFlBQVk7WUFDWkMsUUFBUTtZQUNSQyxjQUFjO1lBQ2RDO2dCQUNFLElBQUc7b0JBQ0QxQixpREFBV0EsQ0FBQ2tCLElBQUlTLElBQUksQ0FBQzt3QkFDbkJDO3dCQUNBdEMsNEhBQVlBLENBQUN1QyxPQUFPLENBQUM7NEJBQ25CQyxTQUFTO3dCQUNYO29CQUVGO2dCQUNGLEVBQUMsT0FBTUMsR0FBRTtvQkFDUEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDZDtZQUNGO1lBQ0FHO2dCQUNFRixRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGO0lBQ0Y7SUFFQSxNQUFNTCxlQUFlO1FBQ25CTztJQUNGO0lBRUEsTUFBTUEsZ0JBQWdCdkMsa0RBQVdBLENBQUM7UUFDaENpQixXQUFXO1FBQ1haLDhDQUFRQSxHQUNMMEIsSUFBSSxDQUFDLENBQUNTO1lBQ0x0QixRQUFRc0I7UUFDVixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTk4sUUFBUUMsR0FBRyxDQUFDSztRQUNkLEdBQ0NDLE9BQU8sQ0FBQztZQUNQMUIsV0FBVztRQUNiO0lBQ0osR0FBRztRQUFDQTtRQUFZQztLQUFRO0lBQ3hCakIsZ0RBQVNBLENBQUM7UUFDUnNDO0lBQ0YsR0FBRztRQUFDQTtLQUFjO0lBRWxCLE1BQU1LLFVBQTRDO1FBQ2hEO1lBQ0VwQixPQUFPO1lBQ1BxQixXQUFXO1lBQ1hDLEtBQUs7UUFDUDtRQUNBO1lBQ0V0QixPQUFPO1lBQ1BxQixXQUFXO1lBQ1hDLEtBQUs7UUFDUDtRQUNBO1lBQ0V0QixPQUFPO1lBQ1BxQixXQUFXO1lBQ1hDLEtBQUs7UUFDUDtRQUNBO1lBQ0V0QixPQUFPO1lBQ1BxQixXQUFXO1lBQ1hDLEtBQUs7UUFDUDtRQUNBO1lBQ0V0QixPQUFPO1lBQ1BxQixXQUFXO1lBQ1hDLEtBQUs7WUFDTEMsUUFBUSxDQUFDQyxRQUFVLElBQVUsT0FBTkE7UUFDekI7UUFDQTtZQUNFeEIsT0FBTztZQUNQcUIsV0FBVztZQUNYQyxLQUFLO1FBQ1A7UUFFQTtZQUNFdEIsT0FBTztZQUNQcUIsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLFFBQVNFO1FBQ1g7UUFDQTtZQUNFekIsT0FBTztZQUNQcUIsV0FBVztZQUNYQyxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0U7b0JBQUcsRUFBQ0MsTUFBTSxFQUFDO3VCQUFLQSxXQUFXLFlBQVksbUJBQWE7O1FBQy9EO1FBQ0E7WUFDRTFCLE9BQU87WUFDUHFCLFdBQVc7WUFDWEMsS0FBSztZQUNMQyxRQUFRLENBQUNFO29CQUFHLEVBQUNFLFNBQVMsRUFBQztnQkFDakIsT0FBT0E7b0JBQ0wsS0FBSzt3QkFDSCxPQUFPO29CQUNULEtBQUs7d0JBQ0gsT0FBTztvQkFDVCxLQUFLO3dCQUNILE9BQU87Z0JBQ1g7WUFDRjtRQUNOO1FBQ0E7WUFDRTNCLE9BQU87WUFDUHNCLEtBQUs7WUFDTE0sT0FBTztZQUNQTCxRQUFRLENBQUNNLHVCQUNQLDhEQUFDekQsNEhBQUtBO29CQUFDMEQsTUFBSzs7c0NBQ1YsOERBQUMvRCw0SEFBTUE7NEJBQUN1QixNQUFLOzRCQUFVeUMsU0FBUztnQ0FDOUJwQyxVQUFVWCxVQUFVRSxNQUFNLEVBQUUyQzs0QkFDOUI7c0NBQUc7Ozs7OztzQ0FDSCw4REFBQzlELDRIQUFNQTs0QkFBQ3VCLE1BQUs7NEJBQVUwQyxNQUFNOzRCQUFDRCxTQUFTO2dDQUNyQ2xDLGFBQWFnQyxPQUFPL0IsRUFBRTs0QkFDeEI7c0NBQUc7Ozs7Ozs7Ozs7OztRQUdUO0tBRUQ7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUMzQiw2SEFBR0E7Z0JBQUM4RCxTQUFRO2dCQUFnQkwsT0FBTTs7a0NBQ2pDLDhEQUFDNUQsNkhBQUdBO2tDQUNGLDRFQUFDZTs0QkFBTW1ELE9BQU87c0NBQUcsNEVBQUNDO2dDQUFFQyxXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUU3Qyw4REFBQ3BFLDZIQUFHQTtrQ0FDRiw0RUFBQ0QsNEhBQU1BOzRCQUFDdUIsTUFBSzs0QkFDWHlDLFNBQVM7Z0NBQU9wQyxVQUFVWCxVQUFVQyxNQUFNOzRCQUMxQzs0QkFDQW9ELE9BQU87Z0NBQUNDLGNBQWM7NEJBQUM7c0NBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLUCw4REFBQ2pFLDZIQUFLQTtnQkFBQytDLFNBQVNBO2dCQUFTbUIsWUFBWWhEO2dCQUFNaUQsUUFBUVgsQ0FBQUEsU0FBVUEsbUJBQUFBLDZCQUFBQSxPQUFRL0IsRUFBRTtnQkFBRU4sU0FBU0E7Z0JBQVNpRCxZQUFZO29CQUFDQyxVQUFVO2dCQUFDOzs7Ozs7WUFDaEh0RCxZQUFZRSxJQUFJLGtCQUNmLDhEQUFDUixrRUFBU0E7Z0JBQ1I2RCxJQUFJO2dCQUNKQyxTQUFTaEQ7Z0JBQ1RpRCxVQUFVekQsWUFBWUUsSUFBSSxLQUFLLFdBQVcsV0FBVztnQkFDckRDLE1BQU1ILFlBQVlHLElBQUk7Z0JBQ3RCaUIsY0FBY0E7Ozs7Ozs7O0FBSzFCO0dBaEx3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYm9vay9Cb29rLnRzeD8zYWM4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbCwgTW9kYWwsIG5vdGlmaWNhdGlvbiwgUm93LCBTcGFjZSwgVGFibGUsIFRhYmxlUHJvcHMsIFRhZywgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0lNb2RhbENvbmZpZywgSURhdGFUeXBlfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7ZGVsZXRlQm9va3MsIGdldEJvb2tzfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IEJvb2tNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL2Jvb2svQm9va01vZGFsXCI7XHJcblxyXG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgTW9kYWxUeXBlID0ge1xyXG4gIENSRUFURTogXCJjcmVhdGVcIixcclxuICBVUERBVEU6IFwidXBkYXRlXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydWQoKSB7XHJcbiAgY29uc3QgW21vZGFsQ29uZmlnLCBzZXRNb2RhbENvbmZpZ10gPSB1c2VTdGF0ZTxJTW9kYWxDb25maWc+KHtcclxuICAgIHR5cGU6IFwiXCIsXHJcbiAgICBkYXRhOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFtdPihbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9ICh0eXBlOiBzdHJpbmcsIGRhdGE/OiBJRGF0YVR5cGUpID0+IHtcclxuICAgIHNldE1vZGFsQ29uZmlnKHtcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgZGF0YTogZGF0YSB8fCBudWxsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbENvbmZpZyh7XHJcbiAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkOiBzdHJpbmcpID0+e1xyXG4gICAgTW9kYWwuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAnRGVsZXRlIGNvbmZpcm0nLFxyXG4gICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVGaWxsZWQvPixcclxuICAgICAgY29udGVudDogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBib29rPycsXHJcbiAgICAgIGNhbmNlbFRleHQ6ICdDbG9zZScsXHJcbiAgICAgIG9rVGV4dDogXCJDb25maXJtXCIsXHJcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgb25Paygpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgIGRlbGV0ZUJvb2tzKGlkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVsb2FkKCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRlbGV0ZSBzdWNjZXNzIVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25DYW5jZWwoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsJylcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT57XHJcbiAgICBoYW5kbGVSZXF1ZXN0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZXF1ZXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGdldEJvb2tzKClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfSwgW3NldExvYWRpbmcsIHNldERhdGFdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXF1ZXN0KCk7XHJcbiAgfSwgW2hhbmRsZVJlcXVlc3RdKVxyXG5cclxuICBjb25zdCBjb2x1bW5zOiBUYWJsZVByb3BzPElEYXRhVHlwZT5bJ2NvbHVtbnMnXSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSURcIixcclxuICAgICAgZGF0YUluZGV4OiBcImlkXCIsXHJcbiAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVMOqbiBzw6FjaFwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiYm9va05hbWVcIixcclxuICAgICAga2V5OiBcImJvb2tOYW1lXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlTDqm4gdMOhYyBnaeG6o1wiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwiYXV0aG9yXCIsXHJcbiAgICAgIGtleTogXCJhdXRob3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTmfDoHkgeHXhuqV0IGLhuqNuXCIsXHJcbiAgICAgIGRhdGFJbmRleDogXCJyZWxlYXNlX2RheVwiLFxyXG4gICAgICBrZXk6IFwicmVsZWFzZV9kYXlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiR2nDoSBzw6FjaFwiLFxyXG4gICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcclxuICAgICAga2V5OiBcInByaWNlXCIsXHJcbiAgICAgIHJlbmRlcjogKHByaWNlKSA9PiBgJCR7cHJpY2V9YFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTcO0IHThuqNcIixcclxuICAgICAgZGF0YUluZGV4OiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgIGtleTogXCJkZXNjcmlwdGlvblwiXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTmfDtG4gbmfhu69cIixcclxuICAgICAgZGF0YUluZGV4OiBcImxhbmd1YWdlXCIsXHJcbiAgICAgIGtleTogXCJsYW5ndWFnZVwiLFxyXG4gICAgICByZW5kZXI6IChfLCApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUcuG6oW5nIHRow6FpXCIsXHJcbiAgICAgIGRhdGFJbmRleDogXCJzdGF0dXNcIixcclxuICAgICAga2V5OiBcInN0YXR1c1wiLFxyXG4gICAgICByZW5kZXI6IChfLCB7c3RhdHVzfSkgPT4oc3RhdHVzID09PSBcImluU3RvY2tcIiA/IFwiQ8OybiBow6BuZ1wiIDogXCJI4bq/dCBow6BuZ1wiKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIsSQw6FuaCBnacOhXCIsXHJcbiAgICAgIGRhdGFJbmRleDogXCJqdWRnZVwiLFxyXG4gICAgICBrZXk6IFwianVkZ2VcIixcclxuICAgICAgcmVuZGVyOiAoXywge3B1Ymxpc2hlcn0pID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2gocHVibGlzaGVyKXtcclxuICAgICAgICAgICAgICBjYXNlIFwia2ltZG9uZ1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2ltIMSQ4buTbmdcIjtcclxuICAgICAgICAgICAgICBjYXNlIFwidGhhbmhuaWVuXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGFuaCBOacOqblwiO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJ0dW9pdHJlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdeG7lWkgVHLhurtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGhhbyB0w6FjXCIsXHJcbiAgICAgIGtleTogXCJhY3Rpb25cIixcclxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHJlbmRlcjogKHJlY29yZCkgPT4gKFxyXG4gICAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBvcGVuTW9kYWwoTW9kYWxUeXBlLlVQREFURSwgcmVjb3JkKTtcclxuICAgICAgICAgIH19PlPhu61hPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgZGFuZ2VyIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHJlY29yZC5pZClcclxuICAgICAgICAgIH19PljDs2E8L0J1dHRvbj5cclxuICAgICAgICA8L1NwYWNlPlxyXG4gICAgICApLFxyXG4gICAgfVxyXG5cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwiYm90dG9tXCI+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxUaXRsZSBsZXZlbD17M30+PHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkRhbmggc8OhY2ggY8OhYyBjdeG7kW4gc8OhY2ggaGF5IG5o4bqldCB0aOG6vyBnaeG7m2k8L3A+PC9UaXRsZT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtvcGVuTW9kYWwoTW9kYWxUeXBlLkNSRUFURSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA4fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaMOqbSBzw6FjaCDinpVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e2RhdGF9IHJvd0tleT17cmVjb3JkID0+IHJlY29yZD8uaWR9IGxvYWRpbmc9e2xvYWRpbmd9IHBhZ2luYXRpb249e3twYWdlU2l6ZTogNX19Lz5cclxuICAgICAgICB7bW9kYWxDb25maWcudHlwZSAmJiAoXHJcbiAgICAgICAgICA8Qm9va01vZGFsXHJcbiAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH0gIFxyXG4gICAgICAgICAgICBmb3JtVHlwZT17bW9kYWxDb25maWcudHlwZSA9PT0gXCJjcmVhdGVcIiA/IFwiY3JlYXRlXCIgOiBcInVwZGF0ZVwifVxyXG4gICAgICAgICAgICBkYXRhPXttb2RhbENvbmZpZy5kYXRhfVxyXG4gICAgICAgICAgICBoYW5kbGVSZWxvYWQ9e2hhbmRsZVJlbG9hZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbCIsIk1vZGFsIiwibm90aWZpY2F0aW9uIiwiUm93IiwiU3BhY2UiLCJUYWJsZSIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCIsImRlbGV0ZUJvb2tzIiwiZ2V0Qm9va3MiLCJCb29rTW9kYWwiLCJUaXRsZSIsIk1vZGFsVHlwZSIsIkNSRUFURSIsIlVQREFURSIsIkNydWQiLCJtb2RhbENvbmZpZyIsInNldE1vZGFsQ29uZmlnIiwidHlwZSIsImRhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldERhdGEiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJjb25maXJtIiwidGl0bGUiLCJpY29uIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJva1RleHQiLCJtYXNrQ2xvc2FibGUiLCJvbk9rIiwidGhlbiIsImhhbmRsZVJlbG9hZCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNhbmNlbCIsImhhbmRsZVJlcXVlc3QiLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5IiwiY29sdW1ucyIsImRhdGFJbmRleCIsImtleSIsInJlbmRlciIsInByaWNlIiwiXyIsInN0YXR1cyIsInB1Ymxpc2hlciIsImFsaWduIiwicmVjb3JkIiwic2l6ZSIsIm9uQ2xpY2siLCJkYW5nZXIiLCJqdXN0aWZ5IiwibGV2ZWwiLCJwIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJkYXRhU291cmNlIiwicm93S2V5IiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwib3BlbiIsIm9uQ2xvc2UiLCJmb3JtVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/book/Book.tsx\n"));

/***/ })

});