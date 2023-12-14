    <template>
    <div>
      Cuenta: {{ objeto.count }}
      <br>
      <button @click="objeto.count++">Incrementar</button>
      <button @click="objeto.count--">Decrementar</button>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { reactive } from 'vue'
    //esto es un objeto
    const objeto = reactive({
      count: 0
    })


    

    </script>
    