import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import Logout from "../UI/Logout";

function HeaderSection() {
  const location = useLocation();
  const firebase = useFirebase();
  const [showProfileBar, setShowProfileBar] = useState(false);

  return (
    <>
      <div className="h-16 w-full bg-[rgb(0,255,143,0.4)] shadow-sm text-blue-500 p-3 flex justify-between">
        <div className="flex gap-3 w-1/2 items-center">
          <Link to="/">
            <img src="/img/Site-logo-galoga.png" alt="" className="w-12" />
          </Link>
          <h1 className="text-2xl font-bold">GaloGa</h1>
        </div>
        <div className="text-black flex gap-5 items-center">
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          {firebase.user ? (
            <div
              className=""
              onClick={(e) => setShowProfileBar(!showProfileBar)}
            >
              <img
                src="/img/profile-pic/random-gamer-profile-picture-22.jpg"
                alt=""
                className="h-10 rounded-full border-2 border-black"
              />
            </div>
          ) : (
            <Link to="/login" state={{ background: location }}>
              Login
            </Link>
          )}
        </div>
        {showProfileBar && firebase.user ? (
          <div className="absolute bg-emerald-100 w-52 h-48 right-2 z-90 top-16 rounded-lg shadow-allBlack overflow-hidden">
            <div className="flex flex-col items-center gap-1 p-5">
              <div className="flex flex-col items-center">
                <img
                  src="/img/profile-pic/random-gamer-profile-picture-22.jpg"
                  alt=""
                  className="h-18 rounded-full border-2 border-emerald-700"
                />
                <h1 className="text-emerald-900 font-semibold">{firebase.user.email}</h1>
              </div>

              <Link to='/profile'><button className="text-emerald-700 hover:text-gray-700 hover:underline">Go to Profile</button></Link>
              <Logout/>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default HeaderSection;
