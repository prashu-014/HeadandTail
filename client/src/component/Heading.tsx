import React from "react";
import NavigateButtons from "./NaviagteButton";

const Heading = () => {
  return (
    <div className="flex-1 px-2 py-5 flex items-center justify-center background-color gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-sm md:text-lg text-center text-white">
          <span className="text-xl md:text-3xl font-bold">
            Welcome to Toss Tracker
          </span>
          <br />
          The Head & Tail Logic Game! Test your luck and logic by stacking coin
          flips in a smart visual grid.
        </h1>

        <NavigateButtons />
      </div>
    </div>
  );
};

export default Heading;
