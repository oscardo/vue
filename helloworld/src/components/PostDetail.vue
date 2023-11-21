    <template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="mensaje">
        <button @click="handleClick()">{{props.title}}</button>
    </div>
    </template>
    
    <script lang="ts" setup>
    import {defineProps, defineEmits, Ref, ref } from 'vue';
        const props = defineProps({
            title : { type: String, required:true },
            content: { type: String, required: false, default: 'Este dato NO tiene información' }
        })

        const emit = defineEmits(['sayHi'])

        let mensaje:Ref<string> = ref("")
        const handleClick = () => {
            emit('sayHi', mensaje.value)
        }
    </script>

    <style scoped>
    .post{
        width: 300px;
        height: 200px;
        background-color: antiquewhite;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
    </style>