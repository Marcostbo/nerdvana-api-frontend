import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import router from './routes'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
app.use(router);

app.mount('#app');
