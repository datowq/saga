import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import { MathUtils } from "three";

import vertexShader from "./vertexShader.glsl";
import fragmentShader from "./fragmentShader.glsl";
import { Perf } from "r3f-perf";

const Blob = ({ position }) => {
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  return (
    <RigidBody
      colliders="ball"
      restitution={0}
      mass={20}
      position={position}
      rotation={[0, 0, 0]}
    >
      <mesh
        ref={mesh}
        position={position}
        scale={1.5}
        onPointerOver={() => (hover.current = true)}
        onPointerOut={() => (hover.current = false)}
      >
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </RigidBody>
  );
};

const Floor = () => {
  const { camera } = useThree();

  useFrame(() => {
    console.log(camera.position);
    console.log(camera.rotation);
  }, [camera]);
  return (
    <RigidBody colliders={"cuboid"} restitution={1} userData={"floor"}>
      <mesh receiveShadow rotation={[Math.PI / -2, 0, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="white" transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
};

const Hero3D = () => {
  // Define the initial positions of the blobs
  const [blobs] = useState(() => {
    const positions = [];
    for (let i = 0; i < 50; i++) {
      positions.push([
        Math.random() * 10 - 5,
        110 + i * 2,
        Math.random() * 10 - 5,
      ]);
    }
    return positions;
  });

  return (
    <div className="absolute top-0 z-0 w-full h-full">
      <Canvas
        camera={{ position: [0, -21, -100], rotation: [2.65, 0, -Math.PI] }}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          {blobs.map((position, index) => (
            <Blob key={index} position={position} />
          ))}
          <Floor />
        </Physics>
        {/* <Perf /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Hero3D;
