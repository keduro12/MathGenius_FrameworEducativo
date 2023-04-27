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
    ],

    history: createWebHistory(),
})

export default router;