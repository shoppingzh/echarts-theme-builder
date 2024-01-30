import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'

createApp(App)
  .use(createPinia())
  .mount('#app')
