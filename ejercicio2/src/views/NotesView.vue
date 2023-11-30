    <template>
      <RouterLink :to="{name: 'NoteCreate'}">Create New Note</RouterLink> 
      <button @click.prevent="logout">Logout</button>
       <div>
            <table class="table" v-if="notes">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="note in notes" :key="note.id"> 
                    <th scope="row">{{note.id}}</th>
                    <td>{{ note.content }}</td>
                  </tr>
                </tbody>
              </table>
              <p v-else>No data yet</p>
        </div> 
        Revision <br>
        {{notes}}
    </template>
    
    <script lang="ts" setup>
    import useAuth from '@/store/auth';
    import { ref, Ref, onMounted } from 'vue';
    import INote from '@/interfaces/INote'
    import router from '@/router/index';

    const store = useAuth();
    const notes:Ref<Array<INote>> = ref([])
    
    onMounted(async () => {
      notes.value = await store.getNotes()
    })
    const logout = () => {
        store.logout()
        router.push({name: 'login'})
    }
    </script>
    <style scoped>
    
    </style>