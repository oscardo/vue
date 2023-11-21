    <template>
    <div>
        <p v-bind:style="{
            'background-color': '#ccc',
            color: col
        }">El mensaje se ha enviado correctamente.</p>
        <button v-on:click="haddleClick()">Cambio Color</button>
        <button @click="haddleClick_1()">Cambio Color Modelo</button>
    </div>
    </template>
    
    <script lang="ts" setup>
        import { ref } from 'vue';
        let col = ref('#fff');
    const haddleClick = () => col.value = '#000'
    const haddleClick_1 = () => col.value = 'blue'
    </script> 
    
    <style>
    
    </style>
    