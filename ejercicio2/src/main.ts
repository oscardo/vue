import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createPinia} from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const pinia = createPinia()

const app = createApp(App)
app.use(store)
app.use(pinia).use(router)
app.mount('#app')
