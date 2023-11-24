<template>
    <div>
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
       {{ email }}
       {{ password }}
    </div>
</template>

<script lang="ts" setup>
    
  import { ref } from 'vue';
  //import authservice from '../services/authentication';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import  useAuthStore   from '../store/authenticate';
  let email= ref("")
  let password= ref("")

const authUser = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      useAuthStore().setAuth(auth.name.toString())
    })
    .catch((error) => {
        alert("Error: " + error.message)
    })
}

</script>