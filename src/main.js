import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import home from "../src/components/Home.vue";
import account from "../src/components/Account.vue";
import recipe from "../src/components/Recipe.vue";
import archive from "../src/components/Archive.vue";
import addRecipe from "../src/components/AddingRecipe.vue";
import login from "../src/components/Login.vue";
import searchRes from "../src/components/SearchResults.vue";
import register from "../src/components/Register.vue";
import category from "../src/components/Category.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: home },
    { path: "/home", component: home },
    { path: "/account/:id", component: account },
    { path: "/recipe/:title", component: recipe },
    { path: "/archive", component: archive },
    { path: "/search-res", component: searchRes },
    { path: "/add-recipe", component: addRecipe },
    { path: "/login", component: login },
    { path: "/register", component: register },
    { path: "/category/:title", component: category },
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
