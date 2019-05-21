<template>
<div>
    <div>
        <ul>
            <li @click="changeRoute('home')">Home</li>
            <li @click="changeRoute('account')">Account</li>
            <li @click="changeRoute('recipe')">Recipe</li>
            <li @click="changeRoute('archive')">Archive</li>
            <li @click="changeRoute('search-res')">Search Results</li>
            <li @click="changeRoute('add-recipe')">Adding Recipe</li>
            <li @click="changeRoute('login')">Log in</li>
            <li @click="changeRoute('register')">Register</li>
        </ul>
    </div>
</div>
</template>


<script>
export default {
    methods:{
        changeRoute(prop){
            this.$router.push(prop)
        }
    }    
}
</script>


<style>
ul{
    
}

ul li{
    display:inline;
    min-width:50px;
    margin-left: 15px;
}

</style>
