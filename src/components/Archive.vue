<template>
<div>
    <div>
        
<div class="container">
      <div class="row justify-content-md-center">
           <h3 class="mt-3 ">All Recipes</h3>
      </div>
     
       <div class="row justify-content-md-center">
          <div class="col-lg-6 ">  
              <hr class="separator separator--line">
          </div>
          
        </div>
    <div class="row mywrap">
            <div
          v-for="recipe in recipes"
          v-bind:key="recipe.id"
          class="card col-lg3 m-4 p-0 pb-2 text-center"
        >
          <img :src="recipe.url" class="card-img-top rounded-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title mb-4">{{recipe.title}}</h5>
            <router-link :to="'/recipe/' +  recipe.slug" class="black-box">Read more</router-link>
          </div>
        </div>

    </div>
</div>
        
   

    </div>
</div>
</template>


<script>
import axios from "axios";
export default {
    
  data: function() {
    return {
    recipes: []
    };
  },

   methods: {
    goToRecipe(recipeId) {
      this.$router.push("/recipe/" + recipeId);
    },

   },

   created() {
    axios.get("http://localhost:3000/api/recipecard").then(response => {
      this.recipes = response.data.reverse();
 
    });

  }

}
</script>


<style scoped>
.mywrap {
    display: flex;
    word-wrap:break-word;
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
  height: 230px;
  width: 230px;
}

.card-img-top-smaller {
  height: 230px;
  width: 230px;
}

.card-title,
h3 {
  font-family: "Lora", serif;
  word-wrap:break-word;

}

.card-body{
    word-wrap:break-word;
    max-width: 230px;
}
h3 {
    font-style: italic;
}

</style>
