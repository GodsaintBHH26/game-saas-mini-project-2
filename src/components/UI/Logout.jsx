import React from "react";
import { useFirebase } from "../../context/Firebase";

function Logout() {
  const firebase = useFirebase();
  return (
    <>
      <button
        className="bg-red-600 text-yellow-200 font-bold text-lg px-2 p-1 rounded-md"
        onClick={() => {
          firebase.logOutUser();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;
