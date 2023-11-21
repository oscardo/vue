    <template>
    <div class="container">
        <PostDetail v-for="information in info" 
        :key="information.title" 
        :title="information.title" 
        :content="information.content" 
        @sayHi="showAlert"
        />
        
    </div>
    </template>
    
    <script lang="ts" setup>
    import PostDetail from './PostDetail.vue';
    interface IPost{
        title: string,
        content: string
    }
    
    let info:Array<IPost> = [
        {
            title: "Este es e post 1",
            content: "Texto ejemplo 1"
        },
        {
            title: "Este es e post 2",
            content: "Texto ejemplo 2"
        },
        {
            title: "Este es e post 3",
            content: "Texto ejemplo 3"
        },
        {
            title: "Este es e post 4",
            content: "Texto ejemplo 4"
        },
        {
            title: "Este es e post 5",
            content: "Texto ejemplo 5"
        }
    ]

    function showAlert(msg:string){
        alert(msg);
    }
    
    </script>
    <style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;

    }
    </style>