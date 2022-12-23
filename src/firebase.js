import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default app;
