    <template>
    <div>
        <form>
            <input type="text" v-model="inputtext" >
            <input type="checkbox" v-model="agree"/>Aceptar los terminos y condiciones
            <select v-model="country">
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
                <option value="Italy">Italy</option>
                <option value="Portugal">Portugal</option>
            </select>
            <h3>{{ inputtext }}</h3>
        </form>
    </div>
    </template>
    
    <script lang="ts" setup>
    import {ref } from 'vue';
    let inputtext = ref('')
    let agree =  ref(true)
    let country = ref('Spain')
    </script>
    <style scoped>
    
    </style>
    