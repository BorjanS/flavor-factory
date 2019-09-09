<template>
  <div id="app">
    <Layout />

    <router-view></router-view>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import Layout from "./components/Layout.vue";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* padding-top: 30px; */
  background-color: white;
}
</style>
