import { db, auth as firebaseAuth } from "./firebase_config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import {  useRouter } from "expo-router";

export const AuthContext = createContext({
  isLoggedIn: false,
  isReady: false,
  LogIn: async () => null,
  LogOut: async () => {},
  SignUp: async () => null,
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  // Handle auto navigation based on auth state
  useEffect(() => {
    if (!isReady) return;
    const navigate = async () => {
      
      if (!isLoggedIn) {
        router.replace("/signin");
      } else {
        router.replace("(tabs)/home");
      }
    };
    navigate();
  }, [isLoggedIn, isReady]);

  
  // authstate.SignUp(values.fullname, values.staffId, values.email, values.password)

  const SignUp = async (fullname, staffId, email, password) => {
    console.log("signing up with", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      await saveSignupEvent(user, fullname, staffId); 
      return user;
    } catch (error) {
      console.log("error signing up", error);
      throw error; 
    }
  };
// login function
  const LogIn = async (email, password) => {
    console.log("attempt login with", email);
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      await saveLoginEvent(user);
      return user;
    } catch (error) {
      console.log("error logging in", error);
      throw error;
    }
  };

  // logout function
  const LogOut = async () => {
    try {
      if (currentUser) {
        await saveLogoutEvent(currentUser);
      }
      await firebaseSignOut(firebaseAuth);
    } catch (error) {
      console.log("error logging out", error);
    }
  };

//  save signup event to db
  const saveSignupEvent = async (user, fullname, staffId) => {
    try {
      if (user.uid) {
        await setDoc(
          doc(db, "users", user.uid, "signupHistory", new Date().toISOString()),
          {
            event: "signup",
            createdAt: new Date().getTime(),
            email: user.email,
            uid: user.uid,
          }
        );
        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            uid: user.uid,
            fullname: fullname || null,  
            staffId: staffId || null,    
            createdAt: new Date().getTime(),
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.log("error saving signup event", error);
    }
  };
// save loginevent to db
  const saveLoginEvent = async (user) => {
    try {
      if (user.uid) {
        await setDoc(
          doc(db, "users", user.uid, "loginHistory", new Date().toISOString()),
          {
            event: "login",
            createdAt: new Date().getTime(),
            email: user.email,
            uid: user.uid,
          }
        );
        await setDoc(
          doc(db, "users", user.uid),
          {
            lastLogin: new Date().getTime(),
            email: user.email,
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.log("error saving login event", error);
    }
  };

  // save logoutevent to db
  const saveLogoutEvent = async (user) => {
    try {
      if (user.uid) {
        await setDoc(
          doc(db, "users", user.uid, "loginOutHistory", new Date().toISOString()),
          {
            event: "logout",
            createdAt: new Date().getTime(),
            email: user.email,
            uid: user.uid,
          }
        );
        await setDoc(
          doc(db, "users", user.uid),
          { lastLogOut: new Date().getTime() },
          { merge: true }
        );
      }
    } catch (error) {
      console.log("error saving logout event", error);
    }
  };

// auth persistence
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("auth state changed", user ? "logged in" : "logged out");
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
      setIsReady(true);
    });
    return unsubscribe;
  }, []);

  // return the context in provider
  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, LogIn, LogOut, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
}