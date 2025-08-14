import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn_Ebb2hDqnjWRgUz9y_glpuaEtKdPsog",
  authDomain: "movieapp-bd1f3.firebaseapp.com",
  projectId: "movieapp-bd1f3",
  storageBucket: "movieapp-bd1f3.firebasestorage.app",
  messagingSenderId: "934538050014",
  appId: "1:934538050014:web:0d4af090f63b73cfbf854f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();