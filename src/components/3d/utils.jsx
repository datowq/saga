import { useState, useEffect } from "react";
import { shiftLeft } from "three/examples/jsm/nodes/Nodes.js";

/*****************
 * Player Controls
 ****************/
export const usePlayerControls = () => {
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
    ShiftLeft: "sprint",
  };
  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    sprint: false,
  });

  // useEffect(() => {
  //   console.log(movement);
  // }, [movement]);

  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};
