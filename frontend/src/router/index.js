// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Condition from "../views/Condition.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/conditions/:conditionId", name: "Condition", component: Condition, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
