<template>
  <div>
    <div class="container">
      <h3 class="text-center mt-3 ">Fresh out the oven</h3>

      <div class="card-group">
        <div
          v-for="recipe in latestRecipes"
          v-bind:key="recipe.id"
          class="card col-lg-4 m-4 p-0 pb-2 text-center"
        >
          <img :src="recipe.url" class="card-img-top rounded-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title mb-4">{{recipe.title}}</h5>
            <router-link :to="'/recipe/' +  recipe.slug" class="black-box">Read more</router-link>
          </div>
        </div>
      </div>
    </div>
    <h3 class="text-center mt-5 mb-5">More recipes</h3>

    <div class="container-fluid gray-bg search-box parent mt-5 mb-5">
      <div class="row child">
        <div class="col-md-12 m-auto">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Ex. chicken nuggets "
              aria-label="Ex. chicken nuggets"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="card-group">
        <div
          v-for="recipe in allRecipesRandom"
          v-bind:key="recipe.id"
          class="card col-lg-4 m-4 p-0 pb-2 text-center"
        >
          <img :src="recipe.url" class="card-img-top-smaller rounded-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title mb-4">{{recipe.title}}</h5>
            <router-link :to="'/recipe/' +  recipe.slug" class="black-box">Read more</router-link>
          </div>
        </div>
      </div>

      <router-link to="/archive" class="btn btn-danger mt-5 mb-5">See all</router-link>
    </div>
    <div class="container-fluid bg-image join-the-fun text-center">
      <div class=" pt-5">
        <span class=" highlight">Join the fun!</span>
        <p class="mt-4">Submit your own recipe and share the love :)</p>
        <router-link to="/add-recipe" class="btn btn-danger mt-2">Add new recipe</router-link>
      </div>

    </div>
    
    <div class="container">

 <h3 class="text-center mt-5">Explore</h3>
        <div class="row align-items-center">

            <div class="col-lg-3"></div>
      <div class="categories col-lg-6 mt-5 mb-5">
        <div v-for="category in categories"
          v-bind:key="category.c_id"
          class="single-category">
          <router-link :to="'/category/' + category.slug" class=" no-style-link mt-2"><img class="cat-icon" :src="category.image">
          <p>{{category.category_name}}</p></router-link>
        </div>
      </div>
       <div class="col-lg-3"></div>
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // name:'home'

  data: function() {
    return {
      latestRecipes: [],
      allRecipesRandom: [],
      categories: []
    };
  },

  methods: {
    goToRecipe(recipeId) {
      this.$router.push("/recipe/" + recipeId);
    },
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  },

  created() {
    axios.get("http://localhost:3000/api/recipecard").then(response => {
      this.latestRecipes = response.data.reverse().splice(0, 3);
      this.shuffle(response.data);
      this.allRecipesRandom = response.data.splice(0, 4);
    });

    axios.get("http://localhost:3000/api/categories").then(response => {
        this.shuffle(response.data);
      this.categories = response.data.splice(0, 5);
    });
  }
};
</script>

<style>
.join-the-fun {
  height: 250px;
font-family: "Lora", serif;
}

.no-style-link, .no-style-link:hover{
    color: black;

}


.join-the-fun p {
    font-size: 22px;
}
.highlight{
    background-color:darkgreen;
    padding: 7px 15px;
    font-style: italic;
    color:white;
    font-family: "Lora", serif;
    font-size: 28px;
}
.search-div {
  transform: translateX(-50%);
  margin-left: 50% !important;
  margin: 30px 0 70px 0;
}

input::placeholder {
  padding-left: 10px;
}

.categories {
    display:flex;
     justify-content: space-between;
}
.single-category {
   border-radius:100%;
   /* width:55px; */
    height:55px;
   text-align: center;
   /* background-color: #eaeaea; */
    
}

.cat-icon {

     width:55px;
    height: 55px;
    padding: 10px;
    border-radius: 0%;
}
.card {
  background-color: #fff;
  border: none;
  border-radius: 0 !important;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}

.rounded-top {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.card-img-top {
  height: 322px;
  width: 322px;
}

.card-img-top-smaller {
  height: 230px;
  width: 230px;
}

.card-title,
h3 {
  font-family: "Lora", serif;

}

h3 {
    font-style: italic;
}

.search-box {
  height: 120px;
}
.divider {
  text-align: center;
  /* padding:30px 0; */
  /* margin:0 30%; */
  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.25);
}

.black-box {
  background-color: black;
  padding: 7px 15px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
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
  font-family: 'Avenir', 'Helvetica', sans-serif;
border-radius: 0;
}

.center-vert {
  margin: auto !important;
  width: 100%;
  padding: 10px;
}

.bg-image {
  background-image: url("../assets/img/background-search.jpg");
  background-size: cover;
  background-position: center center;
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
