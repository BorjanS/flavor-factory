<template>
  <div class="hello">
    <myHeader class="my-header"></myHeader>
  </div>
</template>

<script>
import myHeader from './Header.vue'
export default {
  name: 'layout',
  components: {
        'myHeader': myHeader,
    },
    data() {
        return {
        }
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

.my-header{
  margin-bottom: 40px;
}
</style>
