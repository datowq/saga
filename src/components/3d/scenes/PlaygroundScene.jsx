import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

import Lights from "../prefabs/Lights";
import Floor from "../prefabs/Floor";

let mouseSensitivity = 1;

const PlaygroundScene = ({ children }) => {
  // const controlsRef = useRef();
  // const [mouse, setMouse] = React.useState({ x: 0, y: 0, z: 0 });

  // useEffect(() => {
  //   if (!controlsRef.current) return;
  //   setMouse(controlsRef.current.getObject().position);
  // }, [controlsRef.current]);

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        frameloop="always"
        shadows
        camera={{ position: [0, 2, 0], fov: 100 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense>
          <Perf position="top-right" />
          <Lights />

          <Physics debug={true} gravity={[0, -9.8, 0]} interpolate={true}>
            {children}

            <Floor rotation={[Math.PI / -2, 0, 0]} color="#FFFFFF" />
          </Physics>

          <PointerLockControls pointerSpeed={mouseSensitivity} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default PlaygroundScene;
