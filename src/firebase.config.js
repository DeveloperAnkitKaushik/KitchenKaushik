import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuUut7K6k0ewsrrsFoi1433BVFjs0sxmA",
  authDomain: "kitchenkaushik.firebaseapp.com",
  databaseURL: "https://kitchenkaushik-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kitchenkaushik",
  storageBucket: "kitchenkaushik.appspot.com",
  messagingSenderId: "871884862498",
  appId: "1:871884862498:web:4160526582226e1054067b",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };