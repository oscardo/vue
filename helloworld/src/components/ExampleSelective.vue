<template>
<div>
<h1 v-show="age < 18">ERES MENOR DE EDAD</h1>
<h1 v-show="age >= 18">ERES MAYOR DE EDAD</h1>
</div>
</template>
<!-- 
    <script lang="ts" setup>
    let age = 10;
</script> 
-->
<script lang="ts">
import { DefineComponent, defineComponent } from 'vue';
export default defineComponent({
    name: 'ExampleSelective',
    setup(){
        let age = 19
        return { age }
    }
})
</script>
<style>

</style>
