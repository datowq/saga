import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { usePlayerControls } from "../utils";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { meshBounds } from "@react-three/drei";

const capsule = new THREE.BoxGeometry(0.75, 2.5, 0.75);
const red = new THREE.MeshStandardMaterial({ color: "red" });

const Player = (props) => {
  const { forward, backward, left, right, jump, sprint } = usePlayerControls();
  const [canJump, setCanJump] = useState(false);
  const [hitBigBoi, setHitBigBoi] = useState(false);

  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 7;
  const SPRINT_MULTIPLIER = 2;
  const JUMP_FORCE = 0.2;
  const GRAVITY = 0.7;

  const { camera, scene } = useThree();
  const velocity = useRef([0, 0, 0]);
  const playerRef = useRef();
  const positionRef = useRef();

  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  const [lastRaycastTime, setLastRaycastTime] = useState(performance.now());
  const RAYCAST_INTERVAL = 100; // Perform raycasting every 100ms

  useFrame((state, delta) => {
    let prevPos = camera.position.clone();
    camera.getWorldDirection(direction);
    frontVector.set(direction.x, 0, direction.z).normalize();
    sideVector.set(direction.z, 0, -direction.x).normalize();

    speed.set(0, 0, 0);

    if (forward) speed.add(frontVector);
    if (backward) speed.sub(frontVector);
    if (left) speed.add(sideVector);
    if (right) speed.sub(sideVector);

    speed.multiplyScalar(SPEED * delta);
    if (sprint) speed.multiplyScalar(SPRINT_MULTIPLIER);

    if (jump && canJump) {
      setCanJump(false);
      velocity.current[1] = JUMP_FORCE;
    }

    velocity.current[0] = speed.x;
    velocity.current[2] = speed.z;

    let newPos = prevPos.add(
      new THREE.Vector3(
        velocity.current[0],
        velocity.current[1],
        velocity.current[2]
      )
    );

    // positionRef.current.setTranslation(
    //   new THREE.Vector3(newPos.x, newPos.y, newPos.z)
    // );

    camera.position.add(
      new THREE.Vector3(
        velocity.current[0],
        velocity.current[1],
        velocity.current[2]
      )
    );

    velocity.current[1] -= GRAVITY * delta;

    // playerRef.current.position.copy(camera.position);

    if (camera.position.y < 3) {
      camera.position.y = 3;
      velocity.current[1] = 0;
      setCanJump(true);
    }

    const currentTime = performance.now();
    if (currentTime - lastRaycastTime > RAYCAST_INTERVAL) {
      raycaster.setFromCamera(mouse, camera);

      // Find all objects that intersect with the raycaster
      const intersects = raycaster.intersectObjects(scene.children, true);

      // Handle intersections
      if (intersects.length > 0) {
        console.log(intersects[0]);

        if (intersects[0].distance <= 5) {
          // console.log("hit bigboi");
          props.setHitObject(intersects[0].object["name"]);
        } else {
          props.setHitObject("none");
        }
      }
      setLastRaycastTime(currentTime);
    }
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to +1 range
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    console.log(positionRef.current);
  }, []);

  return (
    <group>
      <RigidBody
        colliders={"cuboid"}
        restitution={-999}
        mass={9999}
        ccd={true}
        lockRotations={[true, true, true]}
        ref={positionRef}
        position={[0, 5, 0]}
        userData={"player"}
        onCollisionEnter={(e) => {
          console.log(e);

          if (e.other.rigidBody.userData === "floor") {
            console.log("player hit the floor");
            velocity.current[1] = 0;
          }
        }}
      >
        <mesh
          raycast={meshBounds}
          castShadow
          position={camera.position}
          ref={playerRef}
          geometry={capsule}
          material={red}
        />
      </RigidBody>
    </group>
  );
};

export default Player;
