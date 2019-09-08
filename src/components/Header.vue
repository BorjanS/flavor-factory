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
        <span @click="changeRoute('add-recipe')">Add new Recipe</span>
      </div>

      <!-- Center / logo -->  
      <div class="col-lg-2 hand-cursor center-vert logo-div">
        <img @click="changeRoute('home')" src="../assets/img/logo.jpg" />
      </div>

      <!-- Right side -->  
      <div class="col-lg-5 center-vert">
        <span @click="changeRoute('login')">Log in</span>
        <span @click="changeRoute('register')">Register</span>
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
  }
};
</script>

<style>
.header-class span {
  display: inline;
  min-width: 50px;
  margin-left: 15px;
  cursor: pointer;
  color: #230b0b !important;
  text-transform: uppercase;
  font-size:12px;
  font-weight: 600;
}

.hand-cursor {
  cursor: pointer;
}

.header-class span:hover {
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
</style>
