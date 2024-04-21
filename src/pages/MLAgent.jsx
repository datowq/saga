import React, { useEffect, useState, useRef } from "react";
import { Html, Text, Sky } from "@react-three/drei";
import Box from "../components/3d/prefabs/Box";
import Player from "../components/3d/prefabs/Player";
import PlaygroundScene from "../components/3d/scenes/PlaygroundScene";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const einstein = genAI.getGenerativeModel({ model: "gemini-pro" });
const oppenheimer = genAI.getGenerativeModel({ model: "gemini-pro" });
const leBron = genAI.getGenerativeModel({ model: "gemini-pro" });
const suggest = genAI.getGenerativeModel({ model: "gemini-pro" });

const chatEinstein = einstein.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Pretend that you are Albert Einstein, a famous theoretical physicist, who developed the theory of relativity. Next message that will be sent to you is from another theoretical physicist, J. Robert Oppenheimer. Discuss the meaning of life with Oppenheimer. Do not simulate the other person's responses. Just act as Einstein. Also do not output your own thoughts. Response with a maximum of two sentences. WRAP EACH RESPONSE IN QUOTES.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Understood. Ready to talk to Oppenheimer!" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const chatOppenheimer = oppenheimer.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Pretend that you are J. Robert Oppenheimer, a famous theoretical physicist, who led the Manhattan Project. Next message that will be sent to you is from another theoretical physicist, Albert Einstein. Discuss the meaning of life with Einstein. Do not simulate the other person's responses. Just act as Oppenheimer. Also do not output your own thoughts. Response with a maximum of two sentences. WRAP EACH RESPONSE IN QUOTES.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Understood. Ready to talk to Einstein!" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const chatLeBron = leBron.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Pretend that you are an NPC representing LeBron James, a famous basketball player playing for Los Angeles Lakers, who won 4 NBA Championships. Next message that will be sent to you is from a player of the game who would like to you about your career. Discuss the importance of healthy lifestyle with the player. Do not simulate the other person's responses. Only act as LeBron James. Also do not output your own thoughts. Response with a maximum of two sentences. WRAP EACH RESPONSE IN QUOTES.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Understood. Ready to talk to an NPC!" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const suggestions = suggest.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are representing a player of the game who is having a conversation with LeBron James, a famous basketball player. For each prompt you receive from LeBron James, please give a very short response, no longer than one sentence. Give very diverse responses. You should act very humble, and seek LeBron's advice on sport and life. MAX ONE SENTENCE RESPONSES. WRAP EACH RESPONSE IN QUOTES.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Understood. Ready to talk to an NPC!" }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

function MLAgent() {
  const [hitObject, setHitObject] = useState("none");
  const [showConversationWindow, setConversationWindow] = useState(false);
  const [showInteractionWindow, setInteractionWindow] = useState(false);

  const [einsteinResponse, setEinsteinResponse] = useState([]);
  const [oppenheimerResponse, setOppenheimerResponse] = useState([]);
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentSender, setCurrentSender] = useState("Einstein");

  const [lebronResponse, setLebronResponse] = useState("");
  const [isInteractionStarted, setIsInteractionStarted] = useState(false);
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");

  const lebronResponseRef = useRef("");

  const handleSendPrompt = async (prompt) => {
    if (prompt.trim() !== "") {
      // console.log('Sending prompt:', prompt);
      const result = await chatLeBron.sendMessageStream(prompt);
      // console.log('Received response:', result);
      lebronResponseRef.current = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        lebronResponseRef.current += chunkText;
        setLebronResponse(lebronResponseRef.current);
      }

      const result1 = await suggestions.sendMessage(lebronResponseRef.current);
      const response1 = await result1.response;
      setResponse1(response1.text);

      const result2 = await suggestions.sendMessage(lebronResponseRef.current);
      const response2 = await result2.response;
      setResponse2(response2.text);

      const result3 = await suggestions.sendMessage(lebronResponseRef.current);
      const response3 = await result3.response;
      setResponse3(response3.text);
    }
  };

  const handleSuggestedResponse = (response) => {
    setResponse1("");
    setResponse2("");
    setResponse3("");
    handleSendPrompt(response);
  };

  const startInteraction = async () => {
    setIsInteractionStarted(true);
    const result = await chatLeBron.sendMessageStream("Hello, LeBron James!");
    lebronResponseRef.current = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      lebronResponseRef.current += chunkText;
      setLebronResponse(lebronResponseRef.current);
    }

    const result1 = await suggestions.sendMessage(lebronResponseRef.current);
    const response1 = await result1.response;
    setResponse1(response1.text);

    const result2 = await suggestions.sendMessage(lebronResponseRef.current);
    const response2 = await result2.response;
    setResponse2(response2.text);

    const result3 = await suggestions.sendMessage(lebronResponseRef.current);
    const response3 = await result3.response;
    setResponse3(response3.text);
  };

  const einsteinResponseRef = useRef("");
  const oppenheimerResponseRef = useRef("");

  let isFirstMessage = true;

  const startConversation = async () => {
    while (true) {
      setIsGenerating(true);

      setEinsteinResponse([]);
      setOppenheimerResponse([]);

      if (isFirstMessage) {
        const result1 = await chatEinstein.sendMessageStream("Hello Albert!");
        einsteinResponseRef.current = "";
        for await (const chunk of result1.stream) {
          const chunkText = chunk.text();
          einsteinResponseRef.current += chunkText;
          setEinsteinResponse(() => [
            { sender: "Einstein", message: einsteinResponseRef.current },
          ]);
        }
        isFirstMessage = false;
      } else {
        const result1 = await chatEinstein.sendMessageStream(
          oppenheimerResponseRef.current
        );
        einsteinResponseRef.current = "";
        for await (const chunk of result1.stream) {
          const chunkText = chunk.text();
          einsteinResponseRef.current += chunkText;
          setEinsteinResponse(() => [
            { sender: "Einstein", message: einsteinResponseRef.current },
          ]);
        }
      }

      setCurrentSender("Oppenheimer");

      const result2 = await chatOppenheimer.sendMessageStream(
        einsteinResponseRef.current
      );
      oppenheimerResponseRef.current = "";
      for await (const chunk of result2.stream) {
        const chunkText = chunk.text();
        oppenheimerResponseRef.current += chunkText;
        setOppenheimerResponse(() => [
          { sender: "Oppenheimer", message: oppenheimerResponseRef.current },
        ]);
      }

      setCurrentSender("Einstein");
      setIsGenerating(false);

      // Wait for the button to be pressed
      await new Promise((resolve) => {
        const handleButtonClick = () => {
          resolve();
          window.removeEventListener("click", handleButtonClick);
        };
        window.addEventListener("click", handleButtonClick);
      });
    }
  };

  const handleStartConversation = () => {
    setIsConversationStarted(true);
    startConversation();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        (event.key === "l" || event.key === "L") &&
        (hitObject === "einstein" || hitObject === "oppenheimer")
      ) {
        setConversationWindow((prevShowWindow) => !prevShowWindow);
      } else if (
        (event.key === "i" || event.key === "I") &&
        hitObject === "lebron"
      ) {
        setInteractionWindow((prevShowWindow) => !prevShowWindow);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
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

  const exitInteraction = () => {
    setInteractionWindow(false);
    setIsInteractionStarted(false);
  };

  return (
    <div className="w-full h-full">
      <div className="fixed h-full w-full text-2xl flex justify-center z-50 items-center">
        +
      </div>
      {(hitObject === "einstein" || hitObject === "oppenheimer") && (
        <div className=" fixed h-full w-full flex justify-center z-50 items-end">
          <div className="p-4 m-2 bg-white text-lg rounded-lg translate-y-[-8rem] drop-shadow-lg">
            <span className="font-bold">Press L</span> to listen to Oppenheimer
            and Einstein's conversation!
          </div>
        </div>
      )}
      {hitObject === "lebron" && (
        <div className="fixed h-full w-full flex justify-center z-50 items-end">
          <div className="p-4 m-2 bg-white text-lg rounded-lg translate-y-[-8rem] drop-shadow-lg">
            <span className="font-bold">Press i</span> to interact with LeBron
          </div>
        </div>
      )}
      {showConversationWindow && (
        <div className="fixed inset-8 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded shadow">
            {!isConversationStarted ? (
              <button onClick={handleStartConversation}>
                Listen to their conversation
              </button>
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
      {showInteractionWindow && (
        <div className="fixed inset-8 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded shadow-lg drop-shadow">
            {!isInteractionStarted ? (
              <button
                onClick={startInteraction}
                className="w-full text-black text-center hover:bg-black hover:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <span className="font-bold">Click</span> to greet LeBron!
              </button>
            ) : (
              <div>
                <div>
                  <h2>LeBron:</h2>
                  <p>{lebronResponse}</p>
                </div>
                {response1.length > 0 &&
                  response2.length > 0 &&
                  response3.length > 0 && (
                    <div>
                      <h3>Suggested Responses:</h3>
                      <button
                        onClick={() => handleSuggestedResponse(response1)}
                      >
                        {response1}
                      </button>
                      <button
                        onClick={() => handleSuggestedResponse(response2)}
                      >
                        {response2}
                      </button>
                      <button
                        onClick={() => handleSuggestedResponse(response3)}
                      >
                        {response3}
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
          position={[-5, 15, -80]}
          args={[80, 10, 50]}
          color="orange"
          name="bigboi"
        >
          {/* <Html position={[20, 50, 0]}>
            <div className="w-20 h-20 bg-red-500 text-white text-center">
              {hitObject === "bigboi" ? "Hit!" : "Not Hit!"}
            </div>
          </Html> */}
          {/* <Text
            position={[20, 50, 5.2]}
            fontSize={10}
            rotation={[0, 0, Math.PI / 2]}
            color="white"
            anchorX="center"
            anchorY="middle"
            name="bigboi"
          >
            {hitObject === "bigboi" ? "Hit!" : "Not Hit!"}
          </Text> */}
        </Box>
        {/* <Box
          text={false}
          position={[0, 0.5, 5]}
          args={[3, 1, 1.3]}
          color="green"
          name="smallboi"
        >
          <Text
            position={[0, 0.5, 6]}
            fontSize={1}
            color="white"
            name="smallboi"
          >
            {hitObject === "smallboi" ? "gyatt!" : "Not Hit!"}
          </Text>
        </Box> */}

        <Player
          controls
          position={[0, 5, 0]}
          args={[0.5]}
          color="yellow"
          setHitObject={setHitObject}
        />

        <Box
          position={[12, 2, -14]}
          args={[1, 3.5, 1.3]}
          color="red"
          name="einstein"
        >
          <Text
            position={[12, 4.5, -14]}
            rotation={[0, -Math.PI / 2 - 0.2, 0]}
            fontSize={1}
            color="red"
            name="einstein"
          >
            EINSTEIN
          </Text>
        </Box>

        <Box
          position={[10, 2, -15]}
          args={[1, 3.5, 1.3]}
          color="purple"
          name="oppenheimer"
        >
          <Text
            position={[10, 4.5, -15]}
            rotation={[0, 1, 0]}
            fontSize={1}
            color="purple"
            name="oppenheimer"
          >
            OPPENHEIMER
          </Text>
        </Box>

        <Box
          position={[0, 2.5, -15]}
          args={[2, 5, 2]}
          color="blue"
          name="lebron"
        >
          <Text
            position={[0, 5.6, -15]}
            fontSize={1}
            color="blue"
            name="lebron"
          >
            LEBRON JAMES
          </Text>
        </Box>

        <Sky />
      </PlaygroundScene>
    </div>
  );
}

export default MLAgent;
