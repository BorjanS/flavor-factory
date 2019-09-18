<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <h3 class="text-center">
          {{recipe.r_title}}
          <div class="faves" @click="fave()">
            <i class="fas fa-heart"></i>
            {{faves.no_of_rows}}
          </div>
        </h3>

        <div class="row justify-content-md-center">
          <div class="col-lg-6">
            <hr class="separator separator--line" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7">
            <img class="recipe-img" :src="recipe.i_url" />
          </div>
          <div class="col-lg-5">
            <div class="ingredients">
              <h5>Ingredients</h5>
              <ul>
                <li
                  v-for="(ingredient, index) in recipe.ingredients"
                  v-bind:key="index"
                >{{ingredient}}</li>
              </ul>
              <p>
                added by:
                <br />
                <router-link :to="'/account/' + recipe.u_u_id" class="simple-link">
                  <img class="user-avatar" :src="recipe.u_image" />
                  {{recipe.u_username}}
                </router-link>
              </p>
                  <span class="tags-style" v-for="tag in tags" v-bind:key="tag.t_t_id">{{tag.t_tag_name}} </span>
              <span class="cats-style "
                v-for="cat in categories"
                v-bind:key="cat.c_c_id"
              >{{cat.c_category_name}}</span>  • {{cost}}
         
            
          
              <br />
            </div>
          </div>
        </div>

        <h5 class="mt-4 mb-4">Instructions</h5>
        <ol class="custom-counter">
          <li v-for="(step, index) in recipe.preparation" v-bind:key="index">{{step}}</li>
        </ol>
      </div>

      <div class="col-lg-4">
        <side></side>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-lg-">
        <h5>Instructions</h5>
        <ol class="custom-counter">
          <li v-for="(step, index) in recipe.preparation" v-bind:key="index">{{step}}</li>
        </ol>
      </div>
      <div class="col-lg-5">
        <h5>Ingredients</h5>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" v-bind:key="index">{{ingredient}}</li>
        </ul>
      </div>
    </div>-->
  </div>
</template>


<script>
import axios from "axios";
import side from "./RecipesSidebar.vue";
export default {
  beforeRouteUpdate (to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.

    const title = to.params.title
    this.recipeSlug = title;
 
    this.getRecipe();
    next()
  },
  components: {
    side
  },
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

  methods: {
    fave() {
      alert("faved");
    },

    getRecipe(){
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
    }
  },

  created() {
    this.getRecipe();
    //get image, title, user, user avatar, cost
    // axios
    //   .get(
    //     "http://localhost:3000/api/xjoin?_join=r.recipes,_j,i.images,_j,u.users&_on1=(r.r_id,eq,i.r_id)&_on2=(r.u_id,eq,u.u_id)&_fields=r.r_id,r.ingredients,r.preparation,r.title,r.cost,u.u_id,u.username,u.image,i.url&_where=(r.slug,eq," +
    //       this.recipeSlug +
    //       ")"
    //   )
    //   .then(response1 => {
    //     this.recipe = response1.data[0];
    //     this.recipe.preparation = JSON.parse(response1.data[0].r_preparation);
    //     this.recipe.ingredients = JSON.parse(response1.data[0].r_ingredients);

    //     //get categories
    //     axios
    //       .get(
    //         "http://localhost:3000/api/xjoin?_join=c.categories,_j,cz.categorize&_on1=(c.c_id,eq,cz.c_id)&_fields=c.c_id,c.category_name&_where=(cz.r_id,eq," +
    //           this.recipe.r_r_id +
    //           ")"
    //       )
    //       .then(response2 => {
    //         this.categories = response2.data;

    //         //get tags
    //         axios
    //           .get(
    //             "http://localhost:3000/api/xjoin?_join=t.tags,_j,tg.tag&_on1=(t.t_id,eq,tg.t_id)&_fields=t.t_id,t.tag_name&_where=(tg.r_id,eq," +
    //               this.recipe.r_r_id +
    //               ")"
    //           )
    //           .then(response3 => {
    //             this.tags = response3.data;

    //             //get fave count
    //             axios
    //               .get(
    //                 "http://localhost:3000/api/fave/count?_where=(r_id,eq," +
    //                   this.recipe.r_r_id +
    //                   ")"
    //               )
    //               .then(response4 => {
    //                 this.faves = response4.data[0];
    //               });
    //           });
    //       });
    //   });
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

.custom-counter {
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 650px;
}

.custom-counter li {
  counter-increment: step-counter;
  margin-bottom: 10px;
}

.custom-counter li::before {
  content: counter(step-counter);
  margin-right: 15px;
  font-size: 80%;
  background-color: #aec85d;
  color: white;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 3px;
  margin-left: -3em;
  text-align:right;
}

.ingredients {
  display: inline-block;
}

.separator {
  margin-top: 25px;
  margin-bottom: 40px;
  border: 0;
}

.separator--line {
  border: 0;
  border-bottom: 5px solid #bada55;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li::before {
  content: "•";
  color: red;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.faves {
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  display: inline;
}

.cats-style {
    background-color: #aec85d;
}


.tags-style {
    background-color: rgb(0,200,200);
}

.tags-style, .cats-style{
     color: white;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 3px;
    margin-right: 5px;
  font-size: 80%;
}
</style>
