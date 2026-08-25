import { createRouter, createWebHistory } from "vue-router";
import ExploreView from "../pages/ExploreView.vue";
import GameDetailsView from "../pages/GameDetailsView.vue";
import HomeView from "../pages/HomeView.vue";
import MyGamesListView from "../pages/MyGamesListView.vue";
import MyGamesView from "../pages/MyGamesView.vue";

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
    {
      path: "/games/:id",
      name: "game-details",
      component: GameDetailsView,
    },
    {
      path: "/my-games",
      name: "my-games",
      component: MyGamesView,
    },
    {
      path: "/my-games/:status",
      name: "my-games-list",
      component: MyGamesListView,
    },
  ],
});

export default router;
