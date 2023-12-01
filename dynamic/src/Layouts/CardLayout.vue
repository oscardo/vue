    <template>
    <div>
        <h1>Card</h1>
        <div class="container">
            <userCard v-for="item in props.content" :key="item.name" :content="item"></userCard>
        </div>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { defineProps } from 'vue'
    import userCard from '@/component/UserCard.vue'
    const props = defineProps(['content'])

    </script>
    <style scoped>
    .container{
        width: 100vw;
        display: flex;
        justify-content: flex-start;
        align-item: flex-start;
        flex-wrap: wrap;
    }
    </style>