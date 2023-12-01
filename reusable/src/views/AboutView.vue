<template>
  <div>
    <MainLayout>
      <template v-slot:main>
        <div>
          About
        </div>
      </template>
      <template v-slot:aux>
        <div>
          AUXILIAR ABOUT
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