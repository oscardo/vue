    <template>
    <div>
        hola mundo
    </div>
    </template>
    
    <script lang="ts" setup>
        import { onMounted, onUpdated } from "vue";
        onMounted(() => {
            console.log('onMounted');
        }),
        onUpdated(() => {
            console.log('onUpdated');
        })
    </script>
    <style scoped>
    
    </style>