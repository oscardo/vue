    <template>
    <div>
        <h3>Hijo</h3>
        <p>percentage completed: {{  percentage }}</p>
    </div>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return {
                percentage: 10
            }
        },
        methods: {
            recalcularPercentaje(){
                this.percentage = 50
            }
        },
        onMounted(){
            this.percentage = 25
        }
    })
    
    
    </script>
    <style scoped>
    
    </style>