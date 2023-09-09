import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/home', 
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
});

export default router;