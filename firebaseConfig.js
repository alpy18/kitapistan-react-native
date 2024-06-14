import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBpcFCC1btwq6o0gc1dyjmQJsKcEJgYSMA",
    authDomain: "com.example.kitapistan",
    databaseURL: "https://kitapistan-d320b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kitapistan-d320b",
    storageBucket: "kitapistan-d320b.appspot.com",
    messagingSenderId: "334442491394",
    appId: "1:334442491394:ios:9048da25fe058b1feb411b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { app, database };
