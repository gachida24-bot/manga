import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDvB_Zulzyw0nyLHE9Ofo3eP2McAPa52lg",
    authDomain: "universermanga.firebaseapp.com",
    projectId: "universermanga",
    storageBucket: "universermanga.firebasestorage.app",
    messagingSenderId: "508804251809",
    appId: "1:508804251809:web:2a0e0afb38cf0b1fc4b0e0",
    measurementId: "G-KVMYQ7RHD6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Donde mostrar el nombre en el sidebar
  const UserName = document.getElementById("Name_Id");

  onAuthStateChanged(auth, (user) => {
    if (!user || !user.emailVerified) {
       window.location.href = "page_id.html";
    } else {
      
      UserName.textContent = user.displayName || "Usuario";
    }
  });