// ✅ USE THIS FOR BROWSER WITH COMPAT SDK
const firebaseConfig = {
  apiKey: "AIzaSyB8seXg4eegh8_669sGOn5X6WAWk1gGBa0",
  authDomain: "share-2d952.firebaseapp.com",
  projectId: "share-2d952",
  storageBucket: "share-2d952.appspot.com", // 🔁 fixed .app to .appspot.com
  messagingSenderId: "899792264946",
  appId: "1:899792264946:web:1631b18f7d0a2dcc993a6b",
  measurementId: "G-VN1CZK5R2P"
};

// Initialize Firebase (compat-style)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
firebase.analytics();
