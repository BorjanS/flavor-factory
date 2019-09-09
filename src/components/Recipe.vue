<template>
  <div class="container">
    {{recipe.title}}
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
      recipe: {}
    };
  },

  created() {
    axios
      .get(
        "http://localhost:3000/api/recipes?_where=(slug,eq," +
          this.recipeSlug +
          ")"
      )
      .then(response => {
        this.recipe = response.data[0];
      });
  }
};
</script>


<style>
</style>
