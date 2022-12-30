"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
const basePromptPrefix = `
Make a table of all the key points of the code below, and also make a list of technical details such as time complexity and space complexity if applicable. Include errors (logical, syntactic and semantic) if any:

Code:
`;
const generateAction = async (req, res)=>{
    const baseCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: 0.7,
        max_tokens: 250
    });
    const basePromptOutput = baseCompletion.data.choices.pop();
    const secondPrompt = `
    Use the table of contents and also the code along with it to generate it's explanation such that a 10 year old can understand it

    Title: ${req.body.userInput}

    Table of Contents: ${basePromptOutput.text}

    Code Explanation:
    `;
    const secondPromptCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${secondPrompt}`,
        temperature: 0.6,
        max_tokens: 1500
    });
    const secondPromptOutput = secondPromptCompletion.data.choices.pop();
    res.status(200).json({
        output: secondPromptOutput
    });
};
/* harmony default export */ const generate = (generateAction);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();