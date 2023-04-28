import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes:[
        {
            path: '/login', 
            name: 'Login', 
            component: () => import("@/pages/Login.vue")
        },
        {
            path: '/register', 
            name: 'Register', 
            component: () => import("@/pages/Register.vue")
        },
        {
            path: '/module',
            name: 'SelectModule',
            component: () => import("@/pages/SelectModule.vue")
        },
        {
            path: '/addition',
            name: 'AdditionPage',
            component: () => import("@/pages/AdditionPage.vue")
        },
        {
            path: '/subtraction',
            name: 'SubtractionPage',
            component: () => import("@/pages/SubtractionPage.vue")
        }

        
    ],

    history: createWebHistory(),
})

export default router;