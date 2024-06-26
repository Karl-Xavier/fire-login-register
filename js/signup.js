// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA1LHCQlD_uSZtavlvVWuBZyhGJ6Z5Oo8",
  authDomain: "random-7fc0e.firebaseapp.com",
  projectId: "random-7fc0e",
  storageBucket: "random-7fc0e.appspot.com",
  messagingSenderId: "721961702949",
  appId: "1:721961702949:web:500588faf7f12caf7191cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Main Javascript
const button = document.querySelector(".button");
const showPassword = document.querySelector(".togglePassword");
const passwordField = document.querySelector(".password");

button.addEventListener("click", async (e) => {
    e.preventDefault();
    const password = passwordField.value;
    const email = document.querySelector(".email").value;
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        // Signed Up
        const user = userCredentials.user;
        alert("Account Created Successfully");
        console.log(user);
        window.location.href = 'index.html'
    } catch (error) {
        console.error(error.message);
        alert("Error creating account: " + error.message);
    }
});

showPassword.addEventListener("click", toggle);

function toggle() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPassword.textContent = "Hide";
    } else {
        passwordField.type = 'password';
        showPassword.textContent = "Show";
    }
    console.log(passwordField.type);
}
