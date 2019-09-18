<template>
  <div>
    <div class="row header-class center-vert text-center">
      <!-- Left side -->
      <div class="col-lg-5 center-vert">
        <!-- <li @click="changeRoute('home')">Home</li>
                <li @click="changeRoute('account')">Account</li>
                <li @click="changeRoute('recipe')">Recipe</li>
                <li @click="changeRoute('archive')">Archive</li>
        <li @click="changeRoute('search-res')">Search Results</li>-->
        <router-link to="/add-recipe" class="simple-link">Add new Recipe</router-link>
      </div>

      <!-- Center / logo -->
      <div class="col-lg-2 hand-cursor center-vert logo-div">
        <router-link to="/" class="simple-link">
          <img src="../assets/img/logonew.png" />
        </router-link>
      </div>

      <!-- Right side -->
      <div class="col-lg-5 center-vert">
        <div v-if="!isUserLoggedIn">
        <router-link to="/login" class="simple-link">Log in</router-link>
        <router-link to="/register" class="simple-link">Register</router-link>
        </div>
        <div v-if="isUserLoggedIn">
         
                  <img class="user-avatar" :src="loggedInUserImage" />
                  {{loggedInUsername}}
         
        <router-link to="/register" class="simple-link">Log out</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeRoute(prop) {
      this.$router.push(prop);
    }
  },
  watch: {
    isUserLoggedIn: function(val, oldVal) {
     
    }
  }
};
</script>

<style>
.simple-link {
  display: inline;
  min-width: 50px;
  margin-right: 15px;
  cursor: pointer;
  color: #230b0b !important;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
}

.hand-cursor {
  cursor: pointer;
}

.simple-link:hover {
  text-decoration: underline;
}

.logo-div img {
  width: 100%;
}

.header-class {
  height: 120px;
}

.center-vert {
  margin: auto !important;
  width: 100%;
  padding: 10px;
}

.user-avatar {
  height: 23px;
  width: 23px;
}
</style>
