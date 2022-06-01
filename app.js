// 2 Login event function
  console.log("sdf")
  // Import the functions you need from the SDKs you need
  import {initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
  import {getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlEPsim5lBwatlxSVfTIsoZ_dSjLSxAPA",
    authDomain: "suffragio-7cb77.firebaseapp.com",
    projectId: "suffragio-7cb77",
    storageBucket: "suffragio-7cb77.appspot.com",
    messagingSenderId: "55330073671",
    appId: "1:55330073671:web:a98b5374afea868de19562"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Firebase method
  const auth =getAuth(app);


const loginBtn = document.querySelector("#user-login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
 
  //Selecting input

  const email = document.querySelector("#voter_mail").value;
  const password = document.querySelector("#voter_password").value;

  //Login user firebase method

 signInWithEmailAndPassword(auth,email, password)
    .then((cred) => {
      alert("Logged in user!");
      window.location.replace("userpage.html")
    })
    .catch((error) => {
      alert(error.message);
    });
});


