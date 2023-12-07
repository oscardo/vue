import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const usePinia = createPinia()
const app = createApp(App)
usePinia.use(piniaPluginPersistedstate)
app.use(usePinia)
app.use(router).mount('#app')
    
//npm i pinia-plugin-persistedstate