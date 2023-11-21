<template>
    <div class="post-card">
        <H3>TITULO</H3>    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas, mollitia inventore dignissimos illum cupiditate hic debitis vitae quo autem tempora, dolores unde a, maiores non aperiam possimus. In, cum!</p>
        <PostButton></PostButton>
    </div>
</template>
<script lang="ts" setup>
    import PostButton from './PostButton.vue';
</script>
<style>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>
