import React, { useState } from "react";
import ConfirmPurchase from "./ConfirmPurchase";

function PricingCard({ plan, price, feature, note }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      <div className="h-148 w-108 bg-gradient-to-br  from-[#9EFFDB] to-[#616161] rounded-xl p-1">
        <div className="h-full w-full rounded-xl flex flex-col justify-between">
          <div className="p-5">
            <h1 className="text-5xl text-gray-800 font-bold"> {plan} </h1>
            <div className="flex gap-1.5 items-baseline text-gray-700 my-5">
              {price == "Based on selection" ? (
                <p></p>
              ) : (
                <p className="text-xl">₹</p>
              )}
              {price == "Based on selection" ? (
                <p className="text-3xl"> {price} </p>
              ) : (
                <p className="text-6xl"> {price} </p>
              )}
              {price == "Based on selection" ? (
                <p></p>
              ) : (
                <p className="text-2xl">INR/month</p>
              )}
            </div>
            <button
              className="w-full bg-green-600 p-3 rounded-lg shadow-allBlack text-2xl font-semibold hover:outline-4 hover:outline-green-400 hover:bg-green-800 duration-150"
              onClick={() => setShowConfirm(true)}
            >
              Get {plan}
            </button>
            <ul className="p-5 text-black text-lg list-disc gap-2 flex flex-col">
              {feature.map((el) => {
                return <li>{el}</li>;
              })}
            </ul>
          </div>

          <p className="p-5 text-gray-200 font-semibold">Note: {note} </p>
        </div>
        
      </div>
      {showConfirm ? <ConfirmPurchase plan={plan} price={price} onClose={()=>setShowConfirm(false)}/> : <></>}
    </>
  );
}

export default PricingCard;
