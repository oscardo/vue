import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import VueCookies  from 'vue-cookies'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const app = createApp(App).use(router)
app.use(VueCookies, { expires: '1d'})
app.mount('#app')

//$cookies.set('auth', 1000, expires, path, domain, secure, sameSite) //setear o guardar
//$cookies.get('auth') //conseguir la cookie
//$cookies.remove('auth') //si sale
//$cookies.isKey('auth') //si existe
//$cookies.Keys() //consigue todas las cookies creadas

