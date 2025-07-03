import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmbPudcwAJYDx7-rRyf3WQE5w5SUMs_xg",
  authDomain: "syper-todo.firebaseapp.com",
  databaseURL:
    "https://syper-todo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "syper-todo",
  storageBucket: "syper-todo.firebasestorage.app",
  messagingSenderId: "757785071463",
  appId: "1:757785071463:web:79ac397502d3c8b178a9c2",
  measurementId: "G-QNMBV1B9HZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
