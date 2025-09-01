import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

function Signup() {
  const firebase=useFirebase()
  const [email, setEmail]=useState(null)
  const [password, setPassword]=useState(null)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const close = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="inset-0 z-50 fixed flex justify-center items-center">
        <div className="absolute backdrop-blur-sm inset-0 bg-black/10" onClick={close}></div>
        <div className="relative w-96  mt-5 bg-white rounded-2xl text-black shadow-allBlack p-5 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold ">Register</h1>
            <p>Register now to create an account</p>
          </div>

          <form
            action=""
            className="flex flex-col mt-3 m-3 p-2 items-center gap-2"
          >
            <div>
              <label htmlFor="" className="pt-5 text-xl font-semibold ">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                className="bg-white outline-2 w-72 h-8 rounded outline-gray-600 focus:outline-blue-500 focus:outline-4 p-2 m-1"
                onChange={e=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="" className="pt-5 text-xl font-semibold">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                className="bg-white outline-2 w-72 h-8 rounded outline-gray-600 focus:outline-blue-500 focus:outline-4 p-2 m-1"
                onChange={e=>setPassword(e.target.value)}
              />
              <label htmlFor="">
                <input
                  type="checkbox"
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                Show Password
              </label>
            </div>

            <button type='button'
             className="mt-3 bg-amber-500 rounded-lg w-full p-3 text-xl text-white" onClick={()=>{
              firebase.signUpWithEmail({email, password})
            }}>
              Submit
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              <div
                className="flex-1 h-px sm:w-16 dark:bg-gray-300"
                bis_skin_checked="1"
              ></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div
                className="flex-1 h-px sm:w-16 bg-gray-300"
                bis_skin_checked="1"
              ></div>
            </div>

            <div className="text-xl">
              <i className="ri-google-fill"></i>
            </div>

            <p>
              Already have an account?{" "}
              <Link
                className="text-amber-700"
                to="/login"
                state={{ background: location }}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
