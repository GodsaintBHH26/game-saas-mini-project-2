import React, { useEffect, useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const firebase = useFirebase()
    const navigate= useNavigate()
    const [subscription, setSubscription]= useState(null)
    useEffect(()=>{
        const fetchSub=async ()=>{
            const data = await firebase.getSubscription()
            setSubscription(data)
        }
        fetchSub();
    },[firebase])

    if(!firebase.user){
        navigate('/login')
    }

  return (
    <>
      <div className="bg-emerald-500 w-full h-full p-5">
        <div className="p-5 flex gap-5">
          <img
            src="public/img/profile-pic/random-gamer-profile-picture-22.jpg"
            className="h-36 border-2 border-black hover:border-white duration-150"
          />
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-semibold">UserName</h1>
            <i className="ri-edit-line hover:text-black text-2xl"></i>
          </div>
        </div>
        <hr className="p-5 h-[3px]" />
        <div className="p-5 m-5">
            <h1 className=" text-3xl">Your Plans</h1>
            <p className=" p-2 text-xl font-semibold">{subscription?.plan || "No plan"}</p>
            <p className=" p-2 text-xl font-semibold">Price: {subscription?.price || "N/A"}</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
