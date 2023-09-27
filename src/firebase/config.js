// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyAQmw4VivXppUx3FAeLVgLP1T61l28DaR8",
  authDomain: "app-galeri-vue3.firebaseapp.com",
  projectId: "app-galeri-vue3",
  storageBucket: "app-galeri-vue3.appspot.com",
  messagingSenderId: "894875436079",
  appId: "1:894875436079:web:712dd171c926757e08f2da"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

import 'firebase/firestore';
import 'firebase/storage';

const depo = firebase.storage();
const veritabanı = firebase.firestore();
const tarih = firebase.firestore.FieldValue.serverTimestamp;

export{ depo, veritabanı, tarih}