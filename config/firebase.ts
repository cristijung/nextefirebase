import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXPRkDYYQzQddA1FuY1f5PNCGkReCdpI8",
  authDomain: "purrfectcarecat.firebaseapp.com",
  projectId: "purrfectcarecat",
  storageBucket: "purrfectcarecat.firebasestorage.app",
  messagingSenderId: "819594514039",
  appId: "1:819594514039:web:32c93c074cf1a2a1ddc072",
  measurementId: "G-MK707Q4MF4"
};

// no Next.js, a página recarrega muito qdo salvamos o código
// este código abaixo garante q o Firebase seja inicializado somente 1x
const app = getApps().lenght > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);