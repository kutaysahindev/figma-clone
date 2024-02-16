//This serves as a collection of all live functionalities w/Liveblocks

import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursors from "./cursor/LiveCursors";
import { useCallback } from "react";

const Live = () => {
  const others = useOthers(); //From Liveblocks, returns a list of all other users in the same room
  const [{ cursor }, updateMyPresence] = useMyPresence() as any; //From Liveblocks, sends user information

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    //This subtraction happens to get more precise pointer position.
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  //Hides the cursor when we leave the screen
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    updateMyPresence({ cursor: null, message: null });
  }, []);

  //When the cursor returns to the screen
  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    //This subtraction happens to get more precise pointer position.
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-[100vh] w-full flex justify-center items-center text-center"
    >
      <h1 className="text-2xl text-white">Liveblocks Figma Clone</h1>

      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
