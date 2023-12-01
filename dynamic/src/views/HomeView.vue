<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<template>
<h2>Home Page</h2>
<div>
  <button @click="handleLayout(ListLayout)">Ver Lista</button>
  <button @click="handleLayout(TableLayout)">Ver Tarjeta</button>
  <button @click="handleLayout(CardLayout)">Ver Tabla</button>
</div>
<div>
  <component :is="layout" :content="users"></component>  
</div>

</template>

<script lang="ts" setup>
  import {ref, defineAsyncComponent } from 'vue'
  //REFERENCIA DE LOS TIPOS DE LAYOUTS QUE TENGAMOS
  const ListLayout = defineAsyncComponent(() => import('../Layouts/ListLayout.vue'))
  const TableLayout = defineAsyncComponent(() => import('../Layouts/TableLayout.vue'))
  const CardLayout = defineAsyncComponent(() => import('../Layouts/CardLayout.vue'))

  const layout = ref(ListLayout)
  //@typescript-eslint/parser
  const handleLayout = (cmp) => layout.value = cmp 

  const users = ref([
  {
    name: "Oscar",
    age: 40,
    position: "CEO"
  },
  {
    name: "Diego",
    age: 23,
    position: "Ministro"
  },
  {
    name: "Marcela",
    age: 29,
    position: "Secretaria"
  },
  {
    name: "Diana",
    age: 34,
    position: "Sistemas"
  },
  {
    name: "Carlos",
    age: 54,
    position: "Vigilante"
  },
])
</script>
