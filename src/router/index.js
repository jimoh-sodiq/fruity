import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FruitView from "../views/FruitView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fruits",
      name: "fruits",
      component: FruitView,
    },
  ],
});

export default router;
