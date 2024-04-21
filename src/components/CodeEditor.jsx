import React, { useState, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import { Remark } from "react-remark";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"; // Import Monaco Editor

// Import language support
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";

const introText = `
# Getting Started with Three.js: A Spinning Green Cube

This guide will introduce you to the basics of creating a Three.js scene with a spinning green cube. Three.js is a powerful JavaScript library that lets you build stunning 3D graphics for the web.

Here's a breakdown of the steps involved:

1. **Setting Up the HTML file:** We'll create a basic HTML file (index.html) to serve as the foundation for our scene. This file will include a script tag referencing a JavaScript file (script.js) where we'll write our Three.js code.

2. **Building the Scene in JavaScript:** Inside the script.js file, we'll define the core elements of our 3D scene using Three.js:
    - **Scene:** This object holds all the elements in our 3D world, like the cube.
    - **Camera:** This object specifies how the scene will be viewed, defining the perspective.
    - **Renderer:** This object takes care of drawing the scene onto the web page.

3. **Adding a Green Cube:** We'll create a green cube using Three.js. Here's the process:
    - Define the cube's shape (geometry) using BoxGeometry.
    - Set the cube's color using MeshBasicMaterial.
    - Combine the geometry and material to create a Mesh object, which is the actual 3D cube we'll see.
    - Add the cube mesh to the scene.

4. **Animation: Making the Cube Spin:** We'll create an animation loop to continuously update the cube's rotation, creating the spinning effect. This will involve using the requestAnimationFrame function and updating the cube's rotation properties within each frame.

**Ready to see it in action?** Fill in the empty code blocks below to write the JavaScript code for creating the spinning cube scene. Run the code, and you should see a green cube spinning in the output window!
`;

const codeBlockOne = `
// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
`;

const codeBlockTwo = `
// Geometry (shape)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material (color and appearance)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // green color

// Mesh (combines geometry and material)
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);
`;

const codeBlockThree = `
function animate() {
  requestAnimationFrame(animate);

  // Update cube rotation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

animate();
`;

const MarkdownBlock = ({ text }) => <Remark>{text}</Remark>;

function CodeEditor() {
  const [codeBlocks, setCodeBlocks] = useState(["", "", ""]); // Initialize with two empty code blocks

  const handleEditorChange = (newValue, index) => {
    setCodeBlocks((prevBlocks) => {
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

  useEffect(() => {
    runCode();
  }, []);

  return (
    <div className="flex gap-16 pb-2 h-full">
      <div className="flex flex-col gap-6 w-1/2 overflow-y-scroll">
        <MarkdownBlock text={introText} />
        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlockOne} // Set the default code for the first editor
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 0)}
        />

        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlockTwo} // Set the default code for the second editor
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 1)}
        />

        <MonacoEditor
          height="300"
          language="javascript"
          theme="vs-dark"
          value={codeBlockThree} // Set the default code for the third editor
          options={editorOptions}
          onChange={(newValue) => handleEditorChange(newValue, 2)}
        />
      </div>
      <div class="border-2 border-grey"></div>
      <div className="w-1/2 flex flex-col h-full overflow-hidden">
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
