<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h3>{{recipe.r_title}}</h3>
        <p>
          by
          <router-link :to="'/account/' + recipe.u_u_id" class="simple-link">
            <img class="user-avatar" :src="recipe.u_image" />
            {{recipe.u_username}}
          </router-link>
        </p>
        <span v-for="cat in categories" v-bind:key="cat.c_c_id">{{cat.c_category_name}} • {{cost}}</span>
        <br />

        <span v-for="tag in tags" v-bind:key="tag.t_t_id">{{tag.t_tag_name}} /</span>
        <br />

        <span>Faves: {{faves.no_of_rows}}</span>
      </div>

      <div class="col-lg-6">
        <img class="recipe-img" :src="recipe.i_url" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-7">
        <h5>Instructions</h5>
        <ol>
          <li v-for="(step, index) in recipe.preparation" v-bind:key="index">{{step}}</li>
        </ol>
      </div>
      <div class="col-lg-5">
        <h5>Ingredients</h5>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" v-bind:key="index">{{ingredient}}</li>
        </ul>
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
      tags: [],
      faves: 0
    };
  },

  created() {
    //get image, title, user, user avatar, cost
    axios
      .get(
        "http://localhost:3000/api/xjoin?_join=r.recipes,_j,i.images,_j,u.users&_on1=(r.r_id,eq,i.r_id)&_on2=(r.u_id,eq,u.u_id)&_fields=r.r_id,r.ingredients,r.preparation,r.title,r.cost,u.u_id,u.username,u.image,i.url&_where=(r.slug,eq," +
          this.recipeSlug +
          ")"
      )
      .then(response1 => {
        this.recipe = response1.data[0];
        this.recipe.preparation = JSON.parse(response1.data[0].r_preparation);
        this.recipe.ingredients = JSON.parse(response1.data[0].r_ingredients);

        //get categories
        axios
          .get(
            "http://localhost:3000/api/xjoin?_join=c.categories,_j,cz.categorize&_on1=(c.c_id,eq,cz.c_id)&_fields=c.c_id,c.category_name&_where=(cz.r_id,eq," +
              this.recipe.r_r_id +
              ")"
          )
          .then(response2 => {
            this.categories = response2.data;

            //get tags
            axios
              .get(
                "http://localhost:3000/api/xjoin?_join=t.tags,_j,tg.tag&_on1=(t.t_id,eq,tg.t_id)&_fields=t.t_id,t.tag_name&_where=(tg.r_id,eq," +
                  this.recipe.r_r_id +
                  ")"
              )
              .then(response3 => {
                this.tags = response3.data;

                //get fave count
                axios
                  .get(
                    "http://localhost:3000/api/fave/count?_where=(r_id,eq," +
                      this.recipe.r_r_id +
                      ")"
                  )
                  .then(response4 => {
                    this.faves = response4.data[0];
                  });
              });
          });
      });
  },

  computed: {
    // a computed getter
    cost: function() {
      // `this` points to the vm instance

      switch (this.recipe.r_cost) {
        case "1":
          return "$";

        case "2":
          return "$$";

        case "3":
          return "$$$";

        default:
          return "$";
      }
    }
  }
};
</script>


<style>
.recipe-img {
  width: 400px;
  height: 400px;
}
.user-avatar {
  height: 23px;
  width: 23px;
}
</style>
