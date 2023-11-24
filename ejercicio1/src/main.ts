import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJoP0YTrjOYkROJ-i48V99cUsF9NBopKE",
    authDomain: "curso-vue-62500.firebaseapp.com",
    projectId: "curso-vue-62500",
    storageBucket: "curso-vue-62500.appspot.com",
    messagingSenderId: "613643371654",
    appId: "1:613643371654:web:8445b496a5437c0f5d7d07",
    measurementId: "G-1GJ2DGZMS1"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  
createApp(App).use(router).mount('#app')
