import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "../src/components/Home.vue";
import account from "../src/components/Account.vue";
import recipe from "../src/components/Recipe.vue";
import archive from "../src/components/Archive.vue";
import addRecipe from "../src/components/AddingRecipe.vue";
import login from "../src/components/Login.vue";
import searchRes from "../src/components/SearchResults.vue";
import register from "../src/components/Register.vue";
import category from "../src/components/Category.vue";


Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    base: __dirname,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      },
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
})

