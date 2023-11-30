<template>
    <div align="center">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter your name" v-model="name">
          </div>  
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="createUser()">Submit</button>
          <p style="color:red;">{{ feedback }}</p>
          <RouterLink :to="{name: 'login'}">Login</RouterLink>
    </div>
    </template>
    
    <script lang="ts" setup>
        import { ref } from 'vue';
        import useAuth from '@/store/auth';
        import router from '@/router';
        const store = useAuth();
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const feedback = ref('')
        const createUser = async () => {
            feedback.value = "Sending...."
            const response = await store.register(name.value, email.value, password.value)
            if(response){
                router.push({name: 'NoteView'})
            }else{
                feedback.value = "Error registered!"
            }
        }
    </script>
    <style scoped>
    
    </style>