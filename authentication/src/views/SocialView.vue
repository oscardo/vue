<template>
    <div>
        <h1>Social Login</h1>
        <button @click="loginGoogle()">Login with google</button>
        <button>Login with Facebok</button>
        <button>Login with Twitter</button>
        <button>Login with Github</button>
    </div>
</template>
    
<script lang="ts" setup>

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
let auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const loginGoogle=() => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const credencial =GoogleAuthProvider.credentialFromResult(result);
        const token = credencial?.accessToken;
        const id = credencial?.idToken;
        const json = credencial?.toJSON()

        const total = token + " + " + id?.toString() + " + " + json
        alert("Éxito!!!!" + total)
    })
    .catch((error) => {
        alert(error)
    })
}


</script>
<style scoped>
    
</style>