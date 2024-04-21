import React, { useState, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import { Remark } from 'react-remark';
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"; // Import Monaco Editor

// Import language support
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";

const textBlockOne = `
# Implementing the Sage NPCs using Google Gemini API

Below, you will be able to examine the source code that runs in the background of our little sage interaction. Together, we will walk through it, so that, by the end of this tutorial, you would be able to implement an NPC conversation on your own.

## Setting up

First let's import the necessary React hooks, as well as the Google Generative AI module. You can find full Google documentation for Node.js [here](https://ai.google.dev/gemini-api/docs/get-started/node).

We initialize the \`GoogleGenerativeAI\` module using our custom API key that can be generated in Google AI Studio. Then, we create three different model objects; first two represent the two sages who are having a conversation before the player comes in. The last model handles interaction between the user and one of the sages. The reason why we create a new model for this interaction is so that we can give a new directive to the model on how to behave when communicating with the player (this will become clear later!).
`

const textBlockTwo = `
Next, let's set up chats for each of the three models. The first directive we give to each model within its \`history\` is very important, as this will usually dictate how it will respond during future interactions. Since the first two models both represent sages we will set up their chats with the same history. Nevertheless, if we wanted to achieve more diversity in their responses, we could give slightly different directives to each one.
`

const MarkdownBlock = ({ text }) => (
  <Remark>{text}</Remark>
);

function CodeEditor() {
  const [codeBlocks, setCodeBlocks] = useState(["", "", ""]); // Initialize with two empty code blocks

  const handleEditorChange = (newValue, index) => {
    setCodeBlocks(prevBlocks => {
      const newBlocks = [...prevBlocks];
      newBlocks[index] = newValue;
      return newBlocks;
    });
  };

  const runCode = () => {
    const combinedCode = codeBlocks.join("\n");
    try {
      const output = document.getElementById("output");
      output.srcdoc = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Output</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <style>
            body { margin: 0; }
            canvas { width: 100%; height: 100%; display: block; }
          </style>
        </head>
        <body>
          <script>
            ${combinedCode}
          </script>
        </body>
        </html>
      `;
    } catch (e) {
      console.error(e);
    }
  };

  // Configure Monaco Editor options
  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: { enabled: false }, // Optionally disable minimap
    language: "javascript", // Specify language for syntax highlighting
  };

  useEffect(() => {
    runCode();
  }, [codeBlocks]);

  return (
    <div className="flex gap-16 pb-2">
      <div className="flex flex-col gap-6 w-1/2">
        <MarkdownBlock text={textBlockOne} />
        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlocks[0]}
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 0)}
        />
        <MarkdownBlock text={textBlockTwo} />
        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlocks[1]}
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 1)}
        />
        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlocks[2]}
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 2)}
        />
      </div>
      <div class="border-2 border-grey"></div>
      <div className="w-1/2">
        <div className="text-xl font-bold mb-4">OUTPUT</div>
        <iframe
          id="output"
          width="100%"
          height="97.5%"
          sandbox="allow-scripts allow-modals"
        ></iframe>
      </div>
    </div>
  );
}

export default CodeEditor;