<template>
  <div class="relative-cl">
    <myHeader class="my-header mb-3 divider"></myHeader>
   
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
<style>

.divider{

  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, .25);
}

.my-header{
background-color: white;
}

@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');

</style>
