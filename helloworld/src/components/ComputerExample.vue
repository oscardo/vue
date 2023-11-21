    <template>
    <div>
        <label v-font-size>SUBTOTAL</label>    
        <br>
        <input type="number" v-model="subtotal">
        <h2 v-custom-size="25">Total impuesto a pagar {{totalvat}} ({{ vat }}%)</h2>
        <h3 v-tamannio-size:x>TOTAL {{total}}</h3>
        <h3 v-custom-font.blue.xxx>TOTAL {{total}}</h3>
    </div>
    </template>
    
    <script lang="ts" setup>
        import { ref, Ref, computed } from 'vue';
        const vat = 21
        let subtotal: Ref<number> = ref(0)
        const totalvat = computed(() => (vat*subtotal.value)/100)
        const total = computed(() => (vat*subtotal.value)/100+subtotal.value)
    </script>
    <style scoped>
    
    </style>