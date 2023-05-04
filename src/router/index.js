import { createRouter, createWebHistory } from "vue-router";
import {useUserStore} from "@/store/User.js"

const requireAuth = async(to, from, next) =>{
    const useUser = useUserStore();
    const user = await useUser.currentUser();

    if(user){
        next();
    }else{
        next("/login")
    }

    // if(user){
    //     if(useUser.roles == 'docente'){
    //         next("/addition");
    //     }
    // }
    


}

const routes =[
    
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
            beforeEnter: requireAuth,
            component: () => import("@/pages/SelectModule.vue")
        },
        {
            path: '/',
            name: 'Main',
            beforeEnter: requireAuth,
            component: () => import("@/components/Main.vue")
        },
        {
            path: '/addition',
            name: 'AdditionPage',
            beforeEnter: requireAuth,
            component: () => import("@/pages/AdditionPage.vue")
        },
        {
            path: '/subtraction',
            name: 'SubtractionPage',
            beforeEnter: requireAuth,
            component: () => import("@/pages/SubtractionPage.vue")
        },
        {
            path: '/multiplication',
            name: 'MultiplicationPage',
            beforeEnter: requireAuth,
            component: () => import("@/pages/MultiplicationPage.vue")
        },
        {
            path: '/divide',
            name: 'DividePage',
            beforeEnter: requireAuth,
            component: () => import("@/pages/DividePage.vue")
        },
        {
            path: '/quiz',
            name: 'Quiz',
            beforeEnter: requireAuth,
            component: () => import("@/components/Quiz.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'NotFound',
            beforeEnter: requireAuth,
            component: () => import("@/views/NotFound.vue")
    
        }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;