import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import  example from '../plugins/example'
const app = createApp(App)
app.use(example, {message:'Hola Soy Oscardo'})
app.use(router)
app.mount('#app')
