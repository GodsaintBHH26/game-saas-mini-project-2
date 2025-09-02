import React from "react";

function FeaturedCard({ title, subtext, cover }) {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#616161] to-[#00784E] min-w-208 h-98 rounded-2xl shadow-2xl overflow-hidden snap-center flex items-center ">
        <img src={cover} className="h-98 rounded-l-xl w-156" />
        <div className=" p-2 flex flex-col h-full justify-between items-baseline ">
          <div className="mt-5">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className=" font-semibold">{subtext}</p>
          </div>

          <button className="w-full bg-green-400 duration-150 rounded-md font-bold text-black mt-5 p-2  hover:outline-4 hover:outline-green-300 hover:bg-green-700 hover:text-white mb-2">
            Read more <i className="ri-external-link-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
