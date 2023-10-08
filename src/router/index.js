import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Index",
            component: () => import ('../pages/VH.vue')
        },
        {
            path: "/vh",
            name: "VH",
            component: () => import ('../pages/VH.vue')
        },
        {
            path: "/svh",
            name: "SVH",
            component: () => import('../pages/SVH.vue')
        },
        {
            path: "/html-full",
            name: "HTML Full",
            component: () => import('../pages/HTMLFull.vue')
        }
    ],
});

export default router;