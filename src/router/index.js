import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AnotherPage from "@/views/AnotherPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/page", component: AnotherPage },
  ],
});

export default router;
