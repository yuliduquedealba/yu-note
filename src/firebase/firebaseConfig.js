import { initializeApp } from "firebase/app";
import { getFirestore } from "./firebaseImport";
import { getAuth } from './firebaseImport';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyC0oYLA6Shx355wcAEK-Enn07d8GNrBsTY",
    authDomain: "yunote-88484.firebaseapp.com",
    projectId: "yunote-88484",
    storageBucket: "yunote-88484.appspot.com",
    messagingSenderId: "664418053542",
    appId: "1:664418053542:web:5a9528958bc6ae5e2db367",
    measurementId: "G-13N6MGTNGE"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const dbquery = firestore(app);
const auth =  getAuth(app);

export default auth;
 
//react router DOM (ruteo)