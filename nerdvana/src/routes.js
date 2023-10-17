import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';
import ValidateEmail from './views/ValidateEmail.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/home/:game_id?', 
            component: Home,
            props: true
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/cadastro',
            component: CreateAccount
        },
        {
            path: '/validar-email',
            component: ValidateEmail
        }
    ]
});

export default router;