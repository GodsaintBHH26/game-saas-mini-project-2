import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-200 w-full flex bg-gradient-to-br from-[#3D3D3D] to-[#ADADAD] justify-between p-5 items-center">
        <img
          src="/img/a-game-console-logo.png"
          alt="console-logo"
          className="w-28 h-28 drop-shadow-gray-200 drop-shadow-lg"
        />
        <div className="w-8/10 flex justify-between">
          <div className="flex flex-col gap-5 p-5">
            <h1 className="text-2xl font-bold">GaloGa</h1>
            <div className="flex gap-5">
              <a href="#" className="hover:underline">Help Center</a>
              <a href="#" className="hover:underline">FAQs</a>
              <a href="#" className="hover:underline">Support</a>
            </div>
            <p>&copy;2025 GaloGa. All rights reserved.</p>
          </div>
          <div className="p-5 text-center">
            <h1 className="text-2xl font-bold">Social Links</h1>
            <div className="flex gap-5 text-3xl pt-5">
              <i className="ri-instagram-fill"></i>
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-youtube-fill"></i>
              <i className="ri-twitter-x-fill"></i>
              <i className="ri-github-fill"></i>
            </div>
            <p className="pt-5" >Email: help@galoga.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
