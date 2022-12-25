import * as Vue from "vue";
import * as VueRouter from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      keepAlive: true,
    },
  },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp(App);

app.use(router);

app.mount("#app");
