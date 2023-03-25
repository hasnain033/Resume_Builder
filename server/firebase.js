import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7GyRlZqzHGPEIvt-MFgMQ990nm_fYGJs",
  authDomain: "my-first-project-9f749.firebaseapp.com",
  projectId: "my-first-project-9f749",
  // storageBucket: "my-first-project-9f749.appspot.com",
  storageBucket: "gs://my-first-project-9f749.appspot.com",
  messagingSenderId: "1055095612371",
  appId: "1:1055095612371:web:a71e256534645acb438526",
  measurementId: "G-2R06BTLPMK",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
