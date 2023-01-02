import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue"
import NotFound from "@/views/NotFound.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/home'
        },
        { 
            path: '/home',
            name: 'HomePage',
            component: HomePage,
        },
        // { for learning purposes
        //     path: '/business/:name',
        //     name: 'HomePage',
        //     component: HomePage,
        //     children: [
        //         // {
        //         //     path: 'home',
        //         //     name: 'HomePage',
        //         //     component: HomePage,
        //         // }
        //     ]
        // },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound,
        }
    ]
})

export default router;
