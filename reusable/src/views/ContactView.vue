<template>
  <div>
    <MainLayout>
      <!-- # o v-slot pueden llamarse desde cualquier función -->
      <template #main>
        <div>
          Contact
        </div>
      </template>
      <template #aux>
        <div>
          AUXILIAR Contact
        </div>
      </template>
    </MainLayout>
  </div>
  </template>
  
  <script lang="ts" setup>
    import MainLayout from '../Layouts/MainLayouts.vue'
  </script>
  <style scoped>
  
  </style>