import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";

function BMO() {

  return (
    <div className="flex justify-around w-full h-128">
      <div className="z-10 flex flex-col h-full justify-between">
        <div className="bg-white w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack"></div>
        <div className="bg-white w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack"></div>
      </div>
      <Spline
        scene="https://prod.spline.design/eZIZxl6IyiQyhNWQ/scene.splinecode"
        className=" absolute top-0 z-0 drop-shadow-2xl"
      />
      <div className="z-10 flex flex-col h-full justify-between">
        <div className="bg-white w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack" ></div>
        <div className="bg-white w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack" ></div>
      </div> 
    </div>
  );
}

export default BMO;
