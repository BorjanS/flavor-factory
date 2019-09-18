<template>
  <div class="footer-class">
    <div class="container">
    <div class="row  center-vert ">
      <!-- Left side -->
      <div class="col-lg-4 center-vert ">
        <!-- <li @click="changeRoute('home')">Home</li>
                <li @click="changeRoute('account')">Account</li>
                <li @click="changeRoute('recipe')">Recipe</li>
                <li @click="changeRoute('archive')">Archive</li>
        <li @click="changeRoute('search-res')">Search Results</li>-->
      
      </div>

      <!-- Center / logo -->
      <div class="col-lg-4 text-center mt-4">
       <img class="footer-logo" src="../assets/img/Flavor Factory logo.png" /> <br>
       <p class=text-light><small>All rights reserved 2019 <sup>©</sup></small></p>
      </div>

      <!-- Right side -->
      <div class="col-lg-4 center-vert">

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
  }
};
</script>

<style scoped>
.simple-link {
  display: inline;
  min-width: 50px;
  margin-right: 15px;
  cursor: pointer;
  color:white!important;
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

.footer-logo {
    width: 150px;
}
.footer-class {
  height: 120px;

}

.center-vert {
  margin: auto !important;
  width: 100%;
  padding: 10px;
}
</style>
