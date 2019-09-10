<template>
<div class="container">
 
    <div class="row">
        <div class="col-lg-6">
            
              <h3>{{recipe.title}}</h3> 
                <span  v-for="cat in categories"
          v-bind:key="cat.ca_category_name"
      > {{cat.ca_category_name}}</span>
            
        </div>
        <div class="col-lg-6">
            <img class="recipe-img" :src="image.url">
        </div>
    </div>

    <div class="row">
        <div class="col-lg-7">
            <h5>Instructions</h5>
            
        </div>
        <div class="col-lg-5">
            <h5>Ingredients</h5>
        </div>
    </div>
</div>
</template>


<script>
import axios from "axios";
export default {
    data: function() {
    return {
        recipeSlug: this.$route.params.title,
        recipe: {},
        image: {},
        categories: [],
    };
  },

  created() {




    axios.get("http://localhost:3000/api/recipes?_where=(slug,eq," + this.recipeSlug + ")")
    .then(response1 => {
  this.recipe = response1.data[0];
     return axios.get("http://localhost:3000/api/images?_where=(r_id,eq," + this.recipe.r_id + ")")
    .then(response2 => {
        
  this.image = response2.data[0];
        
        return  axios.get("http://localhost:3000/api/xjoin?_join=r.recipes,_j,cz.categorize,_j,ca.categories&_on1=(r.r_id,eq,cz.r_id)&_on2=(cz.c_id,eq,ca.c_id)&_fields=ca.category_name&_where=(r.r_id,eq," + this.recipe.r_id + ")")
    .then(response3 => {
        
  this.categories = response3.data;
        
    });
    });
    });

    
  }
 
}
</script>


<style>
.recipe-img{
    width:400px;
    height:400px;
}
</style>
