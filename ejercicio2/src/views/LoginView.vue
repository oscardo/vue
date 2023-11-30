<template>
    <div>
        <form align="center">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="LoginUser()">Submit</button>
            <p style="color: red;">{{ feedback }}</p>
          </form>
    </div>
    </template>
    
    <script lang="ts" setup>
        import {ref} from 'vue'
        import useAuth from '@/store/auth';
        import router from '@/router';
        const store = useAuth();
        const email = ref('')
        const password = ref('')
        const feedback = ref('')
        const LoginUser = async () => {
            feedback.value = "Sending...."
            const response = await store.login(email.value, password.value)
            if(response){
                router.push({name: 'NoteView'})
            }else{
              feedback.value = "Error de registro"
              router.push({name: 'Register'})
            }
        }
    </script>
    <style scoped>
    
    </style>