import React from "react";

function GameCard({ game, cover, subtext }) {
  return (
    <>
      <div className="w-80 h-80 bg-gradient-to-bl from-emerald-600 to-green-400 shadow-md rounded-md overflow-hidden">
        <img src={cover} className="pb-3" />

        <div className="p-5">
          <h1 className="font-bold text-2xl text-white">{game}</h1>
          <p className="font-semibold p-1 text-white">{subtext}</p>
        </div>
      </div>
    </>
  );
}

export default GameCard;
