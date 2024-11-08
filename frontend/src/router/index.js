// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Research from "../views/Research.vue";

const routes = [
  { path: "/", name: "Home", component: Home }, // Default route
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/research", name: "Research", component: Research },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
