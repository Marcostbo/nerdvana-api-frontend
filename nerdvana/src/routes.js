import {createRouter, createWebHashHistory} from 'vue-router';

import SearchGame from './views/SearchGame.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';
import ValidateEmail from './views/ValidateEmail.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/melhorpreco/:newGameId?/:newConsoleId?', 
            component: SearchGame,
            name: 'searchgame',
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