import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78tmZOJJcLcZZRVPO6TVyjwZ_gsxGS9U",
  authDomain: "veedchat.firebaseapp.com",
  projectId: "veedchat",
  storageBucket: "veedchat.appspot.com",
  messagingSenderId: "42171896118",
  appId: "1:42171896118:web:ee1a9cfaf2867bed136397"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = !getApps().length ? getAnalytics(app) : getApp();

export default app;
export { db, storage };
