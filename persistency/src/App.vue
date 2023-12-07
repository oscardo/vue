<template>
<div>
  <h1>Notas: </h1>
  <input type="text" v-model="note">
</div>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
      const note = ref('')
      watchEffect(() => {
        alert("Cambio: " + note.value)
        localStorage.setItem('note', note.value)
      })
</script>

<style>

</style>


