<template>
    <div>
        <h3>{{ counter }}</h3>
        <button @click="addCounterComposition">INCREMENTAR</button>
    </div>    
</template>
  
 <script lang="ts">
    import { defineComponent, Ref, ref } from 'vue';
    export default defineComponent({
        name: 'CounterComposition',
        setup(){
            let counter: Ref = ref(0)
            const addCounterComposition = ():void => {
                counter.value++
            }
            return{counter, addCounterComposition}
        }
    })
 </script>
  
 <style>
  
 </style>
  