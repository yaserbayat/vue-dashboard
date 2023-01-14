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
      path: "/dashboard/:id/",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue"),
      children: [
        {
          path: "profile",
          component: () => import("@/views/dashboard/UserView.vue"),
        },
        {
          path: "stats",
          component: () => import("@/views/dashboard/UserStats.vue"),
        },
      ],
    },
  ],
});

export default router;
