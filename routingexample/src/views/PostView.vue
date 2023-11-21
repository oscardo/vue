    <template>
    <div>
        Post View!!! Item: {{ postID }}
    </div>
    </template>
    <script lang="ts" setup>
        import { onMounted,ref } from 'vue';
        import { useRoute } from 'vue-router';
        
        let postID = ref('')

        onMounted(()=> {
            const route = useRoute();
            postID.value = route.params.id.toString();
            
        })
    </script>
    
    