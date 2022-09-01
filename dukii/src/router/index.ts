import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainView from "../views/MainView.vue";
import DetailView from "../views/DetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
