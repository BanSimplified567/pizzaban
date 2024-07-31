// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyAQeLwUJJFowFFMuFi2wgxdMqKddj7tVbo',
   authDomain: 'pizzaban-877e8.firebaseapp.com',
   projectId: 'pizzaban-877e8',
   storageBucket: 'pizzaban-877e8.appspot.com',
   messagingSenderId: '795301224706',
   appId: '1:795301224706:web:74921fcb59c06e435ba21b',
   measurementId: 'G-ETC64F08Q1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
