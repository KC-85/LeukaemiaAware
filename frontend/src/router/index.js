// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Research from "../views/Research.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/research", name: "Research", component: Research },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
