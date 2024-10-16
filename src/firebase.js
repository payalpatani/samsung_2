import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyBdEFBgUIAgao_3aRCqyNV1U7LsfNnjGFc",
  authDomain: "react-11-e576d.firebaseapp.com",
  projectId: "react-11-e576d",
  storageBucket: "react-11-e576d.appspot.com",
  messagingSenderId: "1087787292748",
  appId: "1:1087787292748:web:c6556a7a18e6d626c7bce9",
  database:"https://react-11-e576d-default-rtdb.firebaseio.com"
};


const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
export { provider };
export default app;



