// forgot-password.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA9alSnNl-YfFT_4lwn4JqidqiBTqxsZdY",
  authDomain: "lab6-84bb5.firebaseapp.com",
  databaseURL: "https://lab6-84bb5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lab6-84bb5",
  storageBucket: "lab6-84bb5.appspot.com",
  messagingSenderId: "52859298118",
  appId: "1:52859298118:web:1b77b82f87e31b050fc547"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reset-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("reset-email").value;

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent. Please check your inbox.");
  } catch (error) {
    alert("Error: " + error.message);
  }
});
