<template>
<div>
  <!-- 
    <input type="text" v-model="note"/>  
  <button @click="sendToServer">Enviar nota al servidor</button> 
-->
<router-view></router-view>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
let note = ref('')
const sendToServer = async() => {
  const rawResponse = await fetch('https://xxxxxxxxxxx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer YYYYYYYYYYYYY' /*, store.JWS <any>*/
    },
    body: JSON.stringify({
      note: note.value
    })
  })

  const response = await rawResponse.json()
}
</script>