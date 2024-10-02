import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu3S22I2xDiJOif6i_nay8ndpJh2YyAK8",
  authDomain: "sns-flatform-b0963.firebaseapp.com",
  projectId: "sns-flatform-b0963",
  storageBucket: "sns-flatform-b0963.appspot.com",
  messagingSenderId: "781265093290",
  appId: "1:781265093290:web:d913ed8681008decfc46d3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
