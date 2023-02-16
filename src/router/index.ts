import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/dashboard/",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
      children: [
        {
          path: "profile",
          component: () => import("@/views/dashboard/UserView.vue"),
        },
        {
          path: "posts",
          component: () => import("@/views/dashboard/UserPosts.vue"),
        },
      ],
    },
  ],
});

export default router;
