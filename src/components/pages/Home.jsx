import React, { useRef } from "react";
import BMO from "../UI/BMO";
import FeaturedCard from "../UI/FeaturedCard";

function Home() {
  const featuredDivRef=useRef(null)


  return (
    <>
      <div >
        <div className="h-128 w-full relative bg-gradient-to-br from-[#FAFFF7] to-[#9DD69A] to-[#75FF83] text-black">
          <BMO />
        </div>

        <hr />
        <div className="my-5 p-5">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">🎮 Featured Games</h1>
          <p className="text-lg text-gray-600 p-2">Discover our most popular titles, hand-picked for endless fun. Whether you’re into action, strategy, or adventure — there’s something for every gamer.</p>
          </div>

          <div className="p-2 my-5 shadow-sm overflow-x-auto flex gap-5" ref={featuredDivRef} >
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
