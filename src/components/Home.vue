<template>
<div>
  <div class="container">
      <h3 class="text-center mt-3">Fresh out the oven</h3>

    <div class="card-group ">
      <div  v-for='recipe in recipes.reverse().slice(0, 3)'  v-bind:key="recipe.id" class="card col-lg-4 m-4 p-0 pb-2 text-center" >
        <img :src="recipe.url" class="card-img-top rounded-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title mb-4">{{recipe.title}}</h5>
          <a href="#" class="black-box">Read more</a>
        </div>
      </div>
     
    </div>
</div>
    <h3 class="text-center mt-3 mb-3">More recipes</h3>

    <div class="container-fluid gray-bg search-box parent mt-3 mb-3">
        <div class="row child" >
    <div class="col-md-12 m-auto ">
     <div class="input-group  ">
  <input type="text" class="form-control " placeholder="Ex. chicken nuggets " aria-label="Ex. chicken nuggets" aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
  </div>
</div>
    </div>
  </div>
    </div>
<div class="container text-center">
 <div class="card-group ">
      <div  v-for='recipe in recipes.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value).slice(0, 4)'  v-bind:key="recipe.id" class="card col-lg-4 m-4 p-0 pb-2 text-center" >
        <img :src="recipe.url" class="card-img-top-smaller rounded-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title mb-4">{{recipe.title}}</h5>
          <a href="#" class="black-box">Read more</a>
        </div>
      </div>
     
    </div>
     <button class="btn btn-danger mt-4" type="button" >See all</button>


        
                <div class="col-lg-7 join-fun">
                    <p>JOIN THE FUN</p>
                </div>

                <div class="col-lg-5 submit-recipe">
                    <button>Submit recipe ></button>
                </div>

            <div class="categories">
                <div class="single-category"><p>Category1</p></div>
                <div class="single-category"><p>Category2</p></div>
                <div class="single-category"><p>Category3</p></div>
                <div style="margin-right:0!important" class="single-category"><p>Category4</p></div>
            </div>

            <div style="height:200px; width:100%; margin:70px 0; border:1px solid #aaa"><p style="text-align:center; margin-top:8%">QUICK LINKS</p></div>
     

</div>


  
  </div>
</template>

<script>
import axios from 'axios'


export default {
  // name:'home'

data: function () {
    return {
      recipes: []
    }
  },

  methods: {
    goToRecipe() {
      this.$router.push("recipe");
    }
  },

  

  created() {

    axios.get('http://localhost:3000/api/recipecard').then((response) => {
        this.recipes = response.data;
    })

  }
};
</script>

<style>
.main-cover {
  width: 100%;
  object-fit: cover;
}

.boxes {
  margin-top: 60px;
}

.single-box {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}

.single-box img {
  width: 100%;
  height: 250px;
  border: 1px solid #aaa;
  cursor: pointer;
}

.single-box-content {
  padding: 15px;
  border: 1px solid #aaa;
  height: 150px;
  cursor: pointer;
}

.our-recepies {
  transform: translateX(-50%);
  margin-left: 50%;
  width: 100%;
  margin-top: 70px;
}

.our-recepies button {
  padding: 5px 10px;
  background-color: #ff0000;
  color: white;
  font-weight: 600;
  border-color: #ff0000;
}

.search-div {
  transform: translateX(-50%);
  margin-left: 50% !important;
  margin: 30px 0 70px 0;
}

input::placeholder {
  padding-left: 10px;
}

.search-icon {
}

.join-fun {
  margin-top: 60px;
}

.submit-recipe {
  margin-top: 60px;
}

.categories {
  display: inline-flex;
  margin-top: 70px;
  margin-bottom: 40px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.single-category {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #aaa;
  margin-right: 50px;
  cursor: pointer;
}

.single-category p {
  margin-top: 90px;
}

.card {
background-color: #fff;
border: none;
border-radius: 0 !important;
box-shadow: 0 .46875rem 2.1875rem rgba(90,97,105,.1),0 .9375rem 1.40625rem rgba(90,97,105,.1),0 .25rem .53125rem rgba(90,97,105,.12),0 .125rem .1875rem rgba(90,97,105,.1);
}

.rounded-top{
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0!important;
}

.card-img-top{
    height: 322px;
    width: 322px;
}

.card-img-top-smaller{
    height: 230px;
    width: 230px;
}

.card-title, h3{
    font-family: "Lora", serif;
    
}

.search-box{
    height: 120px;
}
.divider{
  text-align:center;
  /* padding:30px 0; */
  /* margin:0 30%; */
  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, .25);
}

.black-box{
    background-color: black;
    padding: 7px;
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
}

.black-box:hover {
    color: white;
    text-decoration: none;
}


.gray-bg {
    background-color: #eaeaea;
}

.btn-danger {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
}


.center-vert {
  margin: auto !important;
  width: 100%;
  padding: 10px;
}

.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
