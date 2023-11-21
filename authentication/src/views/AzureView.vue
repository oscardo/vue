<template>
    <div>
        <h1>AZURE</h1>
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