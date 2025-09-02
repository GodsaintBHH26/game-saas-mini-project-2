import { createContext, useContext, useEffect, useState } from "react";
import { firebaseapp } from "../database/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseAuth = getAuth(firebaseapp);
const FirebaseContext = createContext(null);
const firestore = getFirestore(firebaseapp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(undefined);
  // Signing up ----------------------------------------------------------------->

  // Signing up with email & password ------------------------------------------->

  const signUpWithEmail = async ({ email, password }) => {
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
  const logInwithEmail = async ({ email, password }) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        console.log("user logged in successfully", e);
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  };

  // Logging out ------------------------------------------------------------------>
  const logOutUser = async () => {
    return signOut(firebaseAuth)
      .then((e) => {
        console.log("Logged out the user successfully!", e);
      })
      .catch((err) => {
        console.log("Error occurred Logging out", err);
      });
  };

  // Checking whether the user is logged in or not --------------------------------->
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log("Hey there, ", user.email);
      } else {
        console.log("You are logged out!");
        setUser(null);
      }
    });
    return () => unsubscribe;
  }, []);

  // Creating Database to store subscription data -------------------------->
  const saveSubscription = async (plan, price) => {
    if (!user) {
      console.log("No user Logged in");
      return;
    }

    try {
      await setDoc(doc(firestore, "subscriptions", user.uid), {
        plan,
        price,
        createdAt: new Date(),
      });
      console.log("Subscription saved!");
    } catch (error) {
      console.log("There was an error Adding the subscription: ", error);
    }
  };

  // Fetching subscription data from the database ------------------------------>
  const getSubscription = async () => {
    if (!user) {
      console.log("No user logged in");
      return null;
    }

    try {
      const subscriptionRef = doc(firestore, "subscriptions", user.uid);
      const docSnap = await getDoc(subscriptionRef);

      if (docSnap.exists()) {
        console.log("Subscription data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No subscription found for this user.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching subscription:", error);
      return null;
    }
  };
  
  return (
    <FirebaseContext.Provider
      value={{
        signUpWithEmail,
        logInwithEmail,
        logOutUser,
        saveSubscription,
        getSubscription,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
