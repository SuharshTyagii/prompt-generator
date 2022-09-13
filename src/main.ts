import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueScrollPicker from 'vue-scroll-picker'
import './assets/tailwind.css'; // Here

import store from './store'
import 'vue-scroll-picker/lib/style.css'

createApp(App).use(store).use(router).use(VueScrollPicker).mount('#app')
