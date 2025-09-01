import { createContext, useContext, useState } from "react";
import { firebaseapp } from "../database/firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseAuth = getAuth(firebaseapp);
const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(undefined);
  // Signing up ----------------------------------------------------------------->

  // Signing up with email & password ------------------------------------------->

  const signUpWithEmail = async ({email, password}) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        console.log("User Login successfull!", e);
      })
      .catch((err) => {
        console.log("There was an error!!", err);
      });
  };

  // Logging in ------------------------------------------------------------------>

  // Logging in with email & password -------------------------------------------->   
  const logInwithEmail = async ({email, password})=>{
    return signInWithEmailAndPassword(firebaseAuth, email, password).then(e=>{
        console.log('user logged in successfully', e)
    }).catch(err=>{
        console.log('there was an error', err)
    })
  }

  // Logging out ------------------------------------------------------------------>
  const logOutUser = ()=>{
    return signOut(firebaseAuth).then(e=>{
      console.log('Logged out the user successfully!', e);
    }).catch(err=>{
      console.log('Error occurred Logging out', err)
    })
  }
  return (
    <FirebaseContext.Provider value={{signUpWithEmail, logInwithEmail, logOutUser}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
