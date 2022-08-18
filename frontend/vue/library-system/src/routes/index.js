import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home/Home.vue";
import Login from "../pages/Login/Login.vue";
import Explore from "../pages/Explore/Explore.vue";
import Register from "../pages/Register/Register.vue";
import Profile from "@/pages/Profile/Profile.vue";
import Loan from "../pages/Loan/Loan.vue";
import Book from "@/pages/Book/Book.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: Home,
  },
  {
    name: "LoginPage",
    path: "/login",
    component: Login,
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: Register,
  },
  {
    name: "ExplorePage",
    path: "/explore",
    component: Explore,
  },
  {
    name: "ProfilePage",
    path: "/profile",
    component: Profile,
  },
  {
    name: "BookPage",
    path: "/book",
    component: Book,
  },
  {
    name: "LoanPage",
    path: "/loan",
    component: Loan,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
