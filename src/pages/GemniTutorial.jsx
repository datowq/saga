import React, { useState } from "react";
import { Html, Text, Sky } from "@react-three/drei";
import Box from "../components/3d/prefabs/Box";
import Player from "../components/3d/prefabs/Player";
import PlaygroundScene from "../components/3d/scenes/PlaygroundScene";

function GemniTutorial() {
  const [hitObject, setHitObject] = useState("none");

  return (
    <div className="w-full h-full">
      <div className="fixed h-full w-full flex justify-center z-50 items-center">
        +
      </div>
      {hitObject === "bigboi" && (
        <div className="fixed h-full w-full flex justify-center z-50 items-end">
          Press E to interact with the box!
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
          <Text position={[0, 0.5, 6]} fontSize={1} color="white">
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

        <Sky />
      </PlaygroundScene>
    </div>
  );
}

export default GemniTutorial;
