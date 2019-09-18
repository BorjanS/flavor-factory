import Vue from "vue";
import App from "./App";
import router from "../router";
import axios from "axios";
import VueAxios from "vue-axios";

// import home from "../src/components/Home.vue";
// import account from "../src/components/Account.vue";
// import recipe from "../src/components/Recipe.vue";
// import archive from "../src/components/Archive.vue";
// import addRecipe from "../src/components/AddingRecipe.vue";
// import login from "../src/components/Login.vue";
// import searchRes from "../src/components/SearchResults.vue";
// import register from "../src/components/Register.vue";
// import category from "../src/components/Category.vue";


// Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// const router = new VueRouter({
//   mode: "history",
//   base: __dirname,
//   routes: [
//     { path: "/", component: home },
//     { path: "/home", component: home },
//     { path: "/account/:id", component: account },
//     { path: "/recipe/:title", component: recipe },
//     { path: "/archive", component: archive },
//     { path: "/search-res", component: searchRes },
//     { path: "/add-recipe", component: addRecipe },
//     { path: "/login", component: login },
//     { path: "/register", component: register },
//     { path: "/category/:title", component: category },

//   ]
// });

Vue.mixin({
  data: function () {
    return {
      isUserLoggedIn: 0,
      loggedInUserEmail: '',
      loggedInUserId: 0,
      loggedInUsername: '',
      loggedInUserImage: '',
      loggedInUserIsAdmin: 0,
      message: ''
    }
  },
  methods: {
    logIn(email,password){
      axios.get("http://localhost:3000/api/users?_where=(email,eq," + email + ")~and(password,eq," + password + ")").then(response => {
       if(response.data[0]){
        this.loggedInUserEmail = response.data[0].email;
        this.loggedInUserId = response.data[0].u_id;
        this.loggedInUsername = response.data[0].username;
        this.loggedInUserImage = response.data[0].image
        this.isUserLoggedIn = 1;
        this.loggedInUserIsAdmin = response.data[0].isadmin;

        this.message = "You have successfully logged in, <strong>" + this.loggedInUsername + "</strong>. <br> Redirecting to homepage.";

       }else {
        this.message = "Wrong username / password combination";
       }
      });
     
    }
  },

})

new Vue({

  router,
  render: h => h(App)
}).$mount("#app");

