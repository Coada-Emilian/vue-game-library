import { createRouter, createWebHistory } from "vue-router";
import ExploreView from "../pages/ExploreView.vue";
import HomeView from "../pages/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
    },
  ],
});

export default router;
