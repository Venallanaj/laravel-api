import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Posts from "../views/posts/Index.vue";
import PostCreate from "../views/posts/Create.vue";
import PostEdit from "../views/posts/Edit.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/posts",
            name: "posts",
            component: Posts,
        },
        {
            path: "/posts/create",
            name: "posts.create",
            component: PostCreate,
        },
        {
            path: "/posts/:id",
            name: "posts.edit",
            component: PostEdit,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;
