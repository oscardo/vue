    <template>
    <div>
        <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Notes: </label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Text" v-model="note">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="saveNote()">Submit</button>
      </div>
      <p style="color: red;">{{feedback}}</p>
    </div>
    </template>
    
    <script lang="ts" setup>
      import {ref} from 'vue'
      import UseAuth from '@/store/auth'
      import router from '@/router/index'
      const note = ref('')
      const feedback = ref('')
      const store = UseAuth()
      
      const saveNote = async () => {
        feedback.value = "Sending...."
        const response = await store.CreateNotes(note.value)
            if(response){
                router.push({name: 'NoteView'})
            }else{
                feedback.value = "Error registered!"
            }
         feedback.value = "Creating..."
      }

    </script>
    <style scoped>
    
    </style>