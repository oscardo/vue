    <template>
    <div class="card">
        <h2>NAME: {{ props.content.name }}</h2>
        <p>AGE: {{ props.content.age }}</p>
        <p>POSITION: {{ props.content.position }}</p>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { defineProps } from 'vue'
    const props = defineProps(['content'])
    </script>
    <style scoped>
        .card{
            background-color: aquamarine;
            border-radius: 10px;
            padding: 10px;
            display: flex;
            flex-direction: columns;
            width: 350px;
            margin: 10px;
        }
    </style>