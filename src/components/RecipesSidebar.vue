<template>
<div>
    <div>
    
    
    <div  v-for="recipe in allRecipesRandom"
          v-bind:key="recipe.id" class="card mb-3">

  <div class="card-body">
      <div class="row">
      <div class="col-lg-4">
    <img :src="recipe.url" class="small-img rounded-top" alt="..." />
      </div>
    <div class="col-lg-8">
            <h5 class="card-title-inline mb-4">{{recipe.title}}</h5>
    <span  @click="openRecipe(recipe.slug)"  class="black-box">Read more</span>
    </div>
    </div>

  </div>
</div>


  

    </div>
</div>
</template>


<script>

import axios from "axios";
import router from "../../router"
export default {


     data: function() {
    return {
        allRecipesRandom: [],
        

        
    };
  },

    methods: {
  
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },

    openRecipe(slug) 

    {     
            router.push({ path: `/recipe/${slug}` });
             
    }

  },

   created() {
   
    axios.get("http://localhost:3000/api/recipecard").then(response => {
      this.shuffle(response.data);
      this.allRecipesRandom = response.data.splice(0, 4);
    });
   }
    
}


</script>


<style>
.small-img {
    width: 100px;
    height: 100px;
}
.card-title-inline {
    display: inline-block;
    
}
</style>
