import React, { useEffect, useState, useRef } from "react";
import { Html, Text, Sky } from "@react-three/drei";
import Box from "../components/3d/prefabs/Box";
import Player from "../components/3d/prefabs/Player";
import PlaygroundScene from "../components/3d/scenes/PlaygroundScene";
import { GoogleGenerativeAI } from '@google/generative-ai';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const einstein = genAI.getGenerativeModel({ model: 'gemini-pro' });
const oppenheimer = genAI.getGenerativeModel({ model: 'gemini-pro' });

const chatEinstein = einstein.startChat({
  history: [
    {
      role: 'user',
      parts: [{ text: 'Pretend that you are Albert Einstein, a famous theoretical physicist, who developed the theory of relativity. Next message that will be sent to you is from another theoretical physicist, J. Robert Oppenheimer. Discuss the meaning of life with Oppenheimer. Do not simulate the other person\'s responses. Just act as Einstein. Also do not output your own thoughts. Response with a maximum of two sentences.' }],
    },
    {
      role: 'model',
      parts: [{ text: 'Understood. Ready to talk to Oppenheimer!' }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const chatOppenheimer = oppenheimer.startChat({
  history: [
    {
      role: 'user',
      parts: [{ text: 'Pretend that you are J. Robert Oppenheimer, a famous theoretical physicist, who led the Manhattan Project. Next message that will be sent to you is from another theoretical physicist, Albert Einstein. Discuss the meaning of life with Einstein. Do not simulate the other person\'s responses. Just act as Oppenheimer. Also do not output your own thoughts. Response with a maximum of two sentences.' }],
    },
    {
      role: 'model',
      parts: [{ text: 'Understood. Ready to talk to Einstein!' }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

function MLAgent() {
  const [hitObject, setHitObject] = useState("none");
  const [showConversationWindow, setConversationWindow] = useState(false);

  const [einsteinResponse, setEinsteinResponse] = useState([]);
  const [oppenheimerResponse, setOppenheimerResponse] = useState([]);
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentSender, setCurrentSender] = useState('Einstein');

  const einsteinResponseRef = useRef('');
  const oppenheimerResponseRef = useRef('');

  let isFirstMessage = true;

  const startConversation = async () => {
    while (true) {
      setIsGenerating(true);

      setEinsteinResponse([]);
      setOppenheimerResponse([]);

      if (isFirstMessage) {
        const result1 = await chatEinstein.sendMessageStream('Hello Albert!');
        einsteinResponseRef.current = '';
        for await (const chunk of result1.stream) {
          const chunkText = chunk.text();
          einsteinResponseRef.current += chunkText;
          setEinsteinResponse(() => [
            { sender: 'Einstein', message: einsteinResponseRef.current },
          ]);
        }
        isFirstMessage = false;
      } else {
        const result1 = await chatEinstein.sendMessageStream(oppenheimerResponseRef.current);
        einsteinResponseRef.current = '';
        for await (const chunk of result1.stream) {
          const chunkText = chunk.text();
          einsteinResponseRef.current += chunkText;
          setEinsteinResponse(() => [
            { sender: 'Einstein', message: einsteinResponseRef.current },
          ]);
        }
      }

      setCurrentSender('Oppenheimer');

      const result2 = await chatOppenheimer.sendMessageStream(einsteinResponseRef.current);
      oppenheimerResponseRef.current = '';
      for await (const chunk of result2.stream) {
        const chunkText = chunk.text();
        oppenheimerResponseRef.current += chunkText;
        setOppenheimerResponse(() => [
          { sender: 'Oppenheimer', message: oppenheimerResponseRef.current },
        ]);
      }

      setCurrentSender('Einstein');
      setIsGenerating(false);

      // Wait for the button to be pressed
      await new Promise((resolve) => {
        const handleButtonClick = () => {
          resolve();
          window.removeEventListener('click', handleButtonClick);
        };
        window.addEventListener('click', handleButtonClick);
      });
    }
  };

  const handleStartConversation = () => {
    setIsConversationStarted(true);
    startConversation();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.key === 'l' || event.key === 'L') && (hitObject === "einstein" || hitObject === "oppenheimer")) {
        setConversationWindow(prevShowWindow => !prevShowWindow);
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [hitObject]);

  // useEffect(() => {
  //   console.log(hitObject);
  // }, [hitObject]);

  const exitConversation = () => {
    setConversationWindow(false);
    setIsConversationStarted(false);
    isFirstMessage = true;
  };

  return (
    <div className="w-full h-full">
      <div className="fixed h-full w-full flex justify-center z-50 items-center">
        +
      </div>
      {(hitObject === "einstein" || hitObject === "oppenheimer") && (
        <div className="fixed h-full w-full flex justify-center z-50 items-end">
          Press L to listen to Oppenheimer and Einstein's conversation!
        </div>
      )}
      {showConversationWindow && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black text-white p-8 rounded-lg shadow-lg border-4 border-yellow-500">
            {!isConversationStarted ? (
          <button onClick={handleStartConversation}>Listen to their conversation</button>
        ) : (
          <div>
            {einsteinResponse.map((message, index) => (
              <div key={index}>
                <strong>{message.sender}:</strong> {message.message}
              </div>
            ))}
            {oppenheimerResponse.map((message, index) => (
              <div key={index}>
                <strong>{message.sender}:</strong> {message.message}
              </div>
            ))}
            {isGenerating ? (
              <p>{currentSender} is thinking...</p>
            ) : (
              <div>
              <button onClick={() => setIsGenerating(true)}>
                Continue {currentSender}'s response
              </button>
              <button onClick={() => exitConversation()}>
                Exit the conversation
              </button>
              </div>
            )}
          </div>
        )}
          </div>
        </div>
      )}
      <PlaygroundScene>
        {/* <Box text={false} position={[0, 0.5, 0]} args={[2, 1, 2]} color="red" /> */}
        <Box
          text={false}
          position={[20, 50, 0]}
          args={[10, 50, 10]}
          color="orange"
          name="bigboi"
        >
          {/* <Html position={[20, 50, 0]}>
            <div className="w-20 h-20 bg-red-500 text-white text-center">
              {hitObject === "bigboi" ? "Hit!" : "Not Hit!"}
            </div>
          </Html> */}
          <Text
            position={[20, 50, 5.2]}
            fontSize={10}
            rotation={[0, 0, Math.PI / 2]}
            color="white"
            anchorX="center"
            anchorY="middle"
            name="bigboi"
          >
            {hitObject === "bigboi" ? "Hit!" : "Not Hit!"}
          </Text>
        </Box>
        <Box
          text={false}
          position={[0, 0.5, 5]}
          args={[3, 1, 1.3]}
          color="green"
          name="smallboi"
        >
          <Text position={[0, 0.5, 6]} fontSize={1} color="white" name="smallboi">
            {hitObject === "smallboi" ? "gyatt!" : "Not Hit!"}
          </Text>
        </Box>

        <Player
          controls
          position={[0, 5, 0]}
          args={[0.5]}
          color="yellow"
          setHitObject={setHitObject}
        />

        <Box
          position={[10, 15, 5]}
          args={[1, 3, 1.3]}
          color="blue"
          name="einstein"
        />

        <Box
          position={[12, 15, 5]}
          args={[1, 3, 1.3]}
          color="purple"
          name="oppenheimer"
        />

        <Sky />
      </PlaygroundScene>
    </div>
  );
}

export default MLAgent;
