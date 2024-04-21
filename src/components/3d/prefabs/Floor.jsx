import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Floor = (props) => {
  const ref = useRef();

  return (
    <RigidBody colliders={"cuboid"} restitution={1} userData={"floor"}>
      <mesh receiveShadow rotation={props.rotation} ref={ref}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
