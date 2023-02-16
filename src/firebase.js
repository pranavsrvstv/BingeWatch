import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUDGET ,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID ,
};
  

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  const auth =firebase.auth();
  

  export {auth,db}

  // console.log(process.env)