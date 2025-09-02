import React from "react";
import { useFirebase } from "../../context/Firebase";

function ConfirmPurchase({ plan, price, onClose }) {
  const firebase = useFirebase();

  const handleConfirm = async () => {
    await firebase.saveSubscription(plan, price);
    alert(`You have subscribed to the ${plan} plan!`);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <>
      <div
        className="z-50 fixed top-0 flex justify-center w-full h-full items-center"
        c
      >
        <div className=" backdrop-blur-sm h-full w-full inset-0 bg-black/10"></div>
        <div className="bg-emerald-400 absolute w-96 h-72 rounded-lg flex flex-col justify-between">
          <div className="p-5 w-full justify-center items-center flex flex-col text-shadow-sm text-white">
            <i className="ri-checkbox-circle-line text-8xl  "></i>
            <h1 className="font-bold text-3xl">Confirm Purchase</h1>
          </div>
          <div className="flex gap-5 p-5 justify-around">
            <button className="text-2xl font-semibold bg-black/40 px-5 p-2 rounded-md hover:bg-blue-700" onClick={handleConfirm}>
              Yes
            </button>
            <button
              className="text-2xl font-semibold bg-black/40 px-5 p-2 rounded-md hover:bg-red-700"
              onClick={handleCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmPurchase;
