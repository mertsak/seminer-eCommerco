import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyCUk9whoouXqkwHq_6ed-zdaXRUMmsS8NI",
  authDomain: "ecommerce-ec41d.firebaseapp.com",
  projectId: "ecommerce-ec41d",
  storageBucket: "ecommerce-ec41d.appspot.com",
  messagingSenderId: "160977481610",
  appId: "1:160977481610:web:c0804df9f18a6b5a252273",
  measurementId: "G-DWL65ZLLMG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      toast.success("You have successfully registered");
    }
    return user;
  } catch (error) {
    if (error) {
      toast.error(error.message);
    }
  }
};

export const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      toast.success("You have successfully logged in");
    }
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("You have successfully logged out");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
