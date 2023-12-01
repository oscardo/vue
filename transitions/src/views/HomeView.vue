<template>
<TransitionGroup name="list" tag="ul">
    <li v-for="note in notes" :key="note">
      <v-icon name="bi-file-code-fill" />
      {{ note }}
    </li>
</TransitionGroup>
<input type="text" v-model="note" />
<button @click="handleNote">Grabar Nota</button>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
let notes = ref([])
let note = ref('')
const handleNote = () => {
  notes.value.push(note.value)
  note.value = ''
}
</script>
<style scoped>
.v-enter-active, .v-leave-active {
  transition: all 0.5s;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
