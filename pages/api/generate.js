import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const basePromptPrefix =
// `
// Make a table of all the key points of the code below, and also make a list of technical details such as time complexity and space complexity if applicable. Include errors (logical, syntactic and semantic) if any:

// Code:
// `
// const generateAction = async (req, res) => {

//   const baseCompletion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: `${basePromptPrefix}${req.body.userInput}`,
//     temperature: 0.7,
//     max_tokens: 250,
//   });
  
//   const basePromptOutput = baseCompletion.data.choices.pop();
  
//   const secondPrompt = 
//     `
//     Use the table of contents and also the code along with it to generate it's explanation such that a 10 year old can understand it

//     Title: ${req.body.userInput}

//     Table of Contents: ${basePromptOutput.text}

//     Code Explanation:
//     `

//     const secondPromptCompletion = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: `${secondPrompt}`,
//         temperature: 0.6,
//         max_tokens: 1500,
//       });

//       const secondPromptOutput = secondPromptCompletion.data.choices.pop();
//       console.log(secondPromptOutput.text);

//   res.status(200).json({ output: secondPromptOutput });
// };

// export default generateAction;

const basePromptPrefix =
`
Make a table of all the key points of the code below, and also make a list of technical details such as time complexity and space complexity if applicable. Include errors (logical, syntactic and semantic) if any:

Code:
`

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt = 
    `
    Use the table of contents and also the code along with it to generate it's explanation such that a 10 year old can understand it

    Code: ${req.body.userInput}

    Table of Contents: ${basePromptOutput.text}

    Code Explanation:
    `
  
  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    // I set a higher temperature for this one. Up to you!
    temperature: 0.85,
		// I also increase max_tokens.
    max_tokens: 1250,
  });
  
  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;