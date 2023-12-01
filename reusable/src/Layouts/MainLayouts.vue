<template>
    <div class="content">
      <div class="auxbar">
        <AuxBar></AuxBar>
      </div>
      <div class="main-contant-conteiner">
        <div class="menu">
          <MenuSideBar />
        </div>
        <div class="main-content">
            <slot name="main">
            </slot>
        </div>
      </div>
      <div>
        <slot name="aux">
        </slot>
        <!-- Mueve: {{ x }} {{ y }} -->
      </div>
      mover: {{ x }} - {{ y }}
    </div>
    </template>
    
    <script lang="ts" setup>
    import AuxBar from '../components/AuxBar.vue';
    import MenuSideBar from '../components/MenuSidebar.vue';
    import useMove from '../composable/useMouse';
    
      const { x, y} = useMove();
    </script>
    <style scoped>
    
    </style>