import '@/assets/main.css'

import App from '@/App.vue'
import { i18nConfig } from '@/configs/i18n.config'
import router from '@/router'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n(i18nConfig)
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
