    <template>
    <div>
        <h1>POST DETAILS VIEW</h1>
        <div class="post-container">
            <div class="post-card">
               <h3>{{post.title}}</h3>     
               <p>{{post.body}}</p>
            </div>
        </div>
        <RouterLink :to="{name: 'PostList'}">Volver Atrás</RouterLink>
    </div>
    </template>
    
    
    <script lang="ts" setup>
    import PostService from '../service/PostService';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    
    const service = new PostService();
    const post = service.getPost();
    
    onMounted(async () => {
        const route = useRoute()
        let elm = route.params.id;
        await service.fetchByID(elm.toString())
    })
    
    </script>
    
    <style scoped>
    
    </style>