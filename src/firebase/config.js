import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_CLIENT_APIKEY,
  authDomain: process.env.REACT_APP_CLIENT_AUTHDOMAIN,
  projectId: process.env.REACT_APP_CLIENT_PROJECTID,
  storageBucket: process.env.REACT_APP_CLIENT_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_CLIENT_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_CLIENT_APPID,
  measurementId: process.env.REACT_APP_CLIENT_MEASUREMENTID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth()

export { storage, db, auth };
