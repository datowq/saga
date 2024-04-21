import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Box = ({ children, ...props }) => {
  const ref = useRef();

  return (
    <RigidBody colliders={"cuboid"} restitution={-9999} mass={9999}>
      {children}
      <mesh name={props.name} castShadow position={props.position} ref={ref}>
        <boxGeometry args={props.args} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </RigidBody>
  );
};

export default Box;
