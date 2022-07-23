import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVueIcons from "bootstrap-vue-3"
import BootstrapVue from "bootstrap-vue-3"

const app = createApp(App)
app.use(BootstrapVueIcons)
app.use(BootstrapVue)
app.use(store)
app.use(router)
app.mount('#app')
