import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./LogIn.vue";
import landing_page from "./views/landing_page.vue";
import meditate_page from "./views/meditate_page.vue"
import SignUp from "./SignUp.vue"

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/landing_page",
    name: "landing_page",
    component: landing_page,
    // props: true,
  },
  {
    path: "/SignUp.vue",
    name: "SignUp",
    component: SignUp,
    // props: true,
  },
  {
    path: "/meditate_page",
    name: "meditate_page",
    component: meditate_page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
