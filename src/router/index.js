import { createWebHistory, createRouter } from "vue-router";
import MyHome from "../components/MyHome.vue";
import UserRegist from "../components/UserRegist.vue";
import UserLogin from "../components/UserLogin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/register",
    name: "UserRegist",
    component: UserRegist,
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
