import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const pinia = createPinia()
createApp(App)
.use(VueSweetalert2)
.use(router)
.use(pinia)

.mount('#app')
