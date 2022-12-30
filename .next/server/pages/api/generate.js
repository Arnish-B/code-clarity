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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `\nMake a table of all the key points of the code below, and also make a list of technical details such as time complexity and space complexity if applicable. Include errors (logical, syntactic and semantic) if any:\n\nCode:\n`;\nconst generateAction = async (req, res)=>{\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.7,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    const secondPrompt = `\n    Use the table of contents and also the code along with it to generate it's explanation such that a 10 year old can understand it\n\n    Title: ${req.body.userInput}\n\n    Table of Contents: ${basePromptOutput.text}\n\n    Code Explanation:\n    `;\n    const secondPromptCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${secondPrompt}`,\n        temperature: 0.6,\n        max_tokens: 1500\n    });\n    const secondPromptOutput = secondPromptCompletion.data.choices.pop();\n    res.status(200).json({\n        output: secondPromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3RDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sbUJBQ04sQ0FBQzs7OztBQUlELENBQUM7QUFDRCxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUV6QyxNQUFNQyxpQkFBaUIsTUFBTUwsT0FBT00sZ0JBQWdCLENBQUM7UUFDbkRDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVQLGlCQUFpQixFQUFFRSxJQUFJTSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xEQyxhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLG1CQUFtQlIsZUFBZVMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUc7SUFFeEQsTUFBTUMsZUFDSixDQUFDOzs7V0FHTSxFQUFFZCxJQUFJTSxJQUFJLENBQUNDLFNBQVMsQ0FBQzs7dUJBRVQsRUFBRUcsaUJBQWlCSyxJQUFJLENBQUM7OztJQUczQyxDQUFDO0lBRUQsTUFBTUMseUJBQXlCLE1BQU1uQixPQUFPTSxnQkFBZ0IsQ0FBQztRQUN6REMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRVMsYUFBYSxDQUFDO1FBQ3pCTixhQUFhO1FBQ2JDLFlBQVk7SUFDZDtJQUVBLE1BQU1RLHFCQUFxQkQsdUJBQXVCTCxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV0RVosSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUUg7SUFBbUI7QUFDcEQ7QUFFQSxpRUFBZWxCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmNvbnN0IGJhc2VQcm9tcHRQcmVmaXggPVxuYFxuTWFrZSBhIHRhYmxlIG9mIGFsbCB0aGUga2V5IHBvaW50cyBvZiB0aGUgY29kZSBiZWxvdywgYW5kIGFsc28gbWFrZSBhIGxpc3Qgb2YgdGVjaG5pY2FsIGRldGFpbHMgc3VjaCBhcyB0aW1lIGNvbXBsZXhpdHkgYW5kIHNwYWNlIGNvbXBsZXhpdHkgaWYgYXBwbGljYWJsZS4gSW5jbHVkZSBlcnJvcnMgKGxvZ2ljYWwsIHN5bnRhY3RpYyBhbmQgc2VtYW50aWMpIGlmIGFueTpcblxuQ29kZTpcbmBcbmNvbnN0IGdlbmVyYXRlQWN0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgY29uc3QgYmFzZUNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAzJyxcbiAgICBwcm9tcHQ6IGAke2Jhc2VQcm9tcHRQcmVmaXh9JHtyZXEuYm9keS51c2VySW5wdXR9YCxcbiAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgIG1heF90b2tlbnM6IDI1MCxcbiAgfSk7XG4gIFxuICBjb25zdCBiYXNlUHJvbXB0T3V0cHV0ID0gYmFzZUNvbXBsZXRpb24uZGF0YS5jaG9pY2VzLnBvcCgpO1xuICBcbiAgY29uc3Qgc2Vjb25kUHJvbXB0ID0gXG4gICAgYFxuICAgIFVzZSB0aGUgdGFibGUgb2YgY29udGVudHMgYW5kIGFsc28gdGhlIGNvZGUgYWxvbmcgd2l0aCBpdCB0byBnZW5lcmF0ZSBpdCdzIGV4cGxhbmF0aW9uIHN1Y2ggdGhhdCBhIDEwIHllYXIgb2xkIGNhbiB1bmRlcnN0YW5kIGl0XG5cbiAgICBUaXRsZTogJHtyZXEuYm9keS51c2VySW5wdXR9XG5cbiAgICBUYWJsZSBvZiBDb250ZW50czogJHtiYXNlUHJvbXB0T3V0cHV0LnRleHR9XG5cbiAgICBDb2RlIEV4cGxhbmF0aW9uOlxuICAgIGBcblxuICAgIGNvbnN0IHNlY29uZFByb21wdENvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXG4gICAgICAgIHByb21wdDogYCR7c2Vjb25kUHJvbXB0fWAsXG4gICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gICAgICAgIG1heF90b2tlbnM6IDE1MDAsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2Vjb25kUHJvbXB0T3V0cHV0ID0gc2Vjb25kUHJvbXB0Q29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvdXRwdXQ6IHNlY29uZFByb21wdE91dHB1dCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWN0aW9uOyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsImJhc2VQcm9tcHRQcmVmaXgiLCJnZW5lcmF0ZUFjdGlvbiIsInJlcSIsInJlcyIsImJhc2VDb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiYm9keSIsInVzZXJJbnB1dCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImJhc2VQcm9tcHRPdXRwdXQiLCJkYXRhIiwiY2hvaWNlcyIsInBvcCIsInNlY29uZFByb21wdCIsInRleHQiLCJzZWNvbmRQcm9tcHRDb21wbGV0aW9uIiwic2Vjb25kUHJvbXB0T3V0cHV0Iiwic3RhdHVzIiwianNvbiIsIm91dHB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();