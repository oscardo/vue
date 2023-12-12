import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from './lang/messages';
const i18n = createI18n({
    //opciones
    locale: 'en',
    fallbackLocale: 'en',
    messages
});

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
