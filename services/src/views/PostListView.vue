    <template>
    <div>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'PostDetails', params: {id: post.id}}">
                {{ post.title }}
            </router-link>
            
            
        </li>
    </ul>
    </div>
    </template>
    
    <script lang="ts" setup>
    import PostService from '../service/PostService';
    import { onMounted } from 'vue';
    
    const service = new PostService();
    const posts = service.getPosts();
    
    onMounted(async () => {
        await service.fetchAll()
    })

    </script>
    <style scoped lang="sass">
        
    </style>