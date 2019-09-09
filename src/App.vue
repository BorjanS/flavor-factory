<template>
  <div id="app">
     <Header class="my-header mb-5 divider"></Header>

    <router-view></router-view>

     <Footer class="my-footer"></Footer>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Footer,
    Header
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
.divider{

  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, .25);
}

.my-header{
background-color: white;
}

@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');


.my-footer{
  background-color:#333333;
}
</style>
