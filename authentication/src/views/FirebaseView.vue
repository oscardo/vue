<template>
    <div>
        <div class="container">
        <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-3" @click.prevent="authUser">Submit</button>
          </form>  
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
let email= ref("")
let password= ref("")

const authUser = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        alert("Exito!!!")
    })
    .catch((error) => {
        alert("Error" + error.message)
    })
}
</script>
<style scoped>
    
</style>