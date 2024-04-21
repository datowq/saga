import React, { useState, useEffect } from "react";
import { Html, Text, Sky } from "@react-three/drei";
import Box from "../components/3d/prefabs/Box";
import { Box as CoolBox } from "@react-three/drei";
import Player from "../components/3d/prefabs/Player";
import PlaygroundScene from "../components/3d/scenes/PlaygroundScene";
import { RigidBody } from "@react-three/rapier";
import CodeEditorButton from "../components/CodeEditorButton";

function Game() {
  const numCubes = 100;
  const [cubes, setCubes] = useState([]);
  const [hitObject, setHitObject] = useState("none");

  useEffect(() => {
    console.log(cubes);
  }, [cubes]);

  const spawnCubes = () => {
    let tmpcubes = [];
    for (let i = 0; i < numCubes; i++) {
      // Generate random dimensions
      const width = Math.random() * 5 + 1; // Example: Random width between 1 and 6
      const height = Math.random() * 5 + 1; // Example: Random height between 1 and 6
      const depth = Math.random() * 5 + 1; // Example: Random depth between 1 and 6

      // Generate random color for each cube
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const color = `rgb(${red}, ${green}, ${blue})`;

      tmpcubes.push(
        <RigidBody key={cubes.length + i} colliders={"cuboid"} restitution={1}>
          <CoolBox
            position={[
              Math.random() * 50 - 10,
              Math.random() * 50 - 10,
              Math.random() * 50 - 10,
            ]}
            args={[width, height, depth]} // Set the random dimensions
            color={color} // Set the random color for each cube
          >
            <meshStandardMaterial color={color} />
          </CoolBox>
        </RigidBody>
      );
    }
    setCubes([
      ...cubes,
      ...tmpcubes.map((cube) => {
        return cube;
      }),
    ]);
  };

  return (
    <div className="w-full h-full">
      <div className="fixed h-full w-full flex justify-center z-50 items-center select-none">
        +
      </div>
      {hitObject === "bigboi" && (
        <div className="fixed h-full w-full flex justify-center z-50 items-end">
          Press E to interact with the box!
        </div>
      )}
      <div
        className="absolute top-0 left-0 z-50 bg-black text-white p-4 cursor-pointer select-none"
        onClick={() => {
          spawnCubes();
        }}
      >
        click here for awesome
      </div>
      <CodeEditorButton />
      <PlaygroundScene>
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
            {hitObject === "smallboi" ? "LEBRON!" : "Not Hit!"}
          </Text>
        </Box>

        <Player
          controls
          position={[0, 5, 0]}
          args={[0.5]}
          color="yellow"
          setHitObject={setHitObject}
        />

        {cubes.map((cube) => {
          return cube;
        })}
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

export default Game;
