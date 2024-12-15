import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANEtM8cKkEsMVOvaS3k9kDD7UzcclN25c",
  authDomain: "job-portal-1245c.firebaseapp.com",
  projectId: "job-portal-1245c",
  storageBucket: "job-portal-1245c.firebasestorage.app",
  messagingSenderId: "293484487372",
  appId: "1:293484487372:web:e7fdc7cb1ba50558f15869"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;



