"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"egf30eap\",\n    dataset: \"production\",\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlQSxxREFBWSxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsT0FBTyxFQUFFLFlBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJLENBQUMsMkNBQTJDO0NBQ3pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jbGllbnQuanM/OTcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6ICdlZ2YzMGVhcCcsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[]  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                            lineNumber: 42,\n                            columnNumber: 39\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/flukky/work/next-sanity/web/pages/post/[slug].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtJQUM1QywyRUFBMkU7SUFDM0UsTUFBTSxFQUFFSixJQUFJLEVBQUcsRUFBRSxHQUFFLEdBQUdJLE9BQU8sQ0FBQ0gsTUFBTTtJQUNwQyxNQUFNckIsSUFBSSxHQUFHLE1BQU1sQixxREFBWSxDQUFDa0MsS0FBSyxFQUFFO1FBQUVJLElBQUk7S0FBRSxDQUFDO0lBQ2hELE9BQU87UUFDTEssS0FBSyxFQUFFO1lBQ0x6QixJQUFJO1NBQ0w7S0FDRjtDQUNGO0FBQ0QsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IHtQb3J0YWJsZVRleHR9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8ICcgJ31cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KCdtYXgnKS5hdXRvKCdmb3JtYXQnKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxuICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXVxuICB9ID0gcG9zdFxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgIGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c31cbiAgICAgIC8+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBib2R5XG59YFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJkaXYiLCJ1cmwiLCJjb21wb25lbnRzIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();