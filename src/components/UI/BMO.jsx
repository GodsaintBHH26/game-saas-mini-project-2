import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function BMO() {
  return (
    <div className="flex justify-around w-full h-128">
      <div className="z-10 flex flex-col h-full justify-between">
        <Link to="/games">
          <div className="bg-emerald-400 w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack p-5">
            <h1 className="text-2xl font-semibold">Games</h1>
            <p className="p-2 text-sm">Checkout Available games</p>
          </div>
        </Link>
        <Link to="/games">
          <div className="bg-emerald-400 w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack p-5">
            <h1 className="text-2xl font-semibold">Games</h1>
            <p className="p-2 text-sm">Checkout Available games</p>
          </div>
        </Link>
      </div>
      <Spline
        scene="https://prod.spline.design/eZIZxl6IyiQyhNWQ/scene.splinecode"
        className=" absolute top-0 z-0 drop-shadow-2xl"
      />
      <div className="z-10 flex flex-col h-full justify-between">
        <Link to="/games">
          <div className="bg-emerald-400 w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack p-5">
            <h1 className="text-2xl font-semibold">Games</h1>
            <p className="p-2 text-sm">Checkout Available games</p>
          </div>
        </Link>
        <Link to="/games">
          <div className="bg-emerald-400 w-40 h-36 rounded-2xl m-5 hover:outline-2 outline-black shadow-allBlack p-5">
            <h1 className="text-2xl font-semibold">Games</h1>
            <p className="p-2 text-sm">Checkout Available games</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BMO;
