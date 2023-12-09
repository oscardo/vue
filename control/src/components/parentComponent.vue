    <template>
    <div>
        Directamente
        <img 
        v-lazy="{
            src:'https://picsum.photos/500/500',
            loading: 'loading.png', 
            error: 'error.png',
            delay: 500
        }" 
        alt="sitio web" >
        Con Lazy Option
        <img 
        v-lazy="{
            src: lazyOption.src, 
            lifecycle: lazyOption.lifecycle,
            delay: lazyOption.delay
        }" 
        alt="sitio web" >
    </div>
    </template>
    
    <script lang="ts" setup>
    import { ref } from 'vue';

        const lazyOption = ref({
            src: 'https://picsum.photos/500/500',
            delay: 600,
            lifecycle: {
                loading: (el: string) => {
                    console.log('Cargando Imagen: ' + el)
                },
                error: (el: string) => {
                    console.error('Error Imagen: ' + el)
                },
                loader: (el: string) => {
                    console.log('Loader Imagen: ' + el)
                }
            }
        })
    </script>
    <style scoped>
    
    </style>

    