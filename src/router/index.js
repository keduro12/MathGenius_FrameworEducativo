import { createRouter, createWebHistory } from "vue-router";
import {useUserStore} from "@/store/User.js"

const requireAuth = async(to, from, next) =>{
    const useUser = useUserStore();
    const user = await useUser.currentUser();

    // if(user){
    //     next();
    // }else{
    //     next("/login")
    // }

    if(user){
        if(to.meta.requireAdmin && useUser.roles !== 'docente'){
            next("/")
        }else if(to.meta.requireEstudent && useUser.roles !== 'estudiante'){
            next("/mainadmin")
        }else{
            next(); 
        }


    }else{
        next("/login")
    }

    


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
            meta:{
                requireEstudent: true
            },
            component: () => import("@/pages/SelectModule.vue")
        },
        {
            path: '/',
            name: 'Main',
            beforeEnter: requireAuth,
            meta:{
                requireEstudent: true
            },
            component: () => import("@/components/Main.vue")
        },
        {
            path: '/addition',
            name: 'AdditionPage',
            beforeEnter: requireAuth,
            meta:{
                requireEstudent: true
            },
            component: () => import("@/pages/AdditionPage.vue")
        },
        {
            path: '/subtraction',
            name: 'SubtractionPage',
            beforeEnter: requireAuth,
            meta:{
                requireEstudent: true
            },
            component: () => import("@/pages/SubtractionPage.vue")
        },
        {
            path: '/multiplication',
            name: 'MultiplicationPage',
            beforeEnter: requireAuth,
            meta:{
                requireEstudent: true
            },
            component: () => import("@/pages/MultiplicationPage.vue")
        },
        {
            path: '/divide',
            name: 'DividePage',
            beforeEnter: requireAuth,
            meta:{
                requireEstudent: true
            },
            component: () => import("@/pages/DividePage.vue")
        },
        {
            path: '/mainadmin',
            name: 'MainAdmin',
            beforeEnter: requireAuth,
            meta:{
                requireAdmin: true
            },
            component: () => import("@/pages/MainAdmin.vue")
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