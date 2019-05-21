<template>
<div>
    <div>
        <ul>
            <router-link to='home'>HOME</router-link>
            <li @click="changeRoute('home')">Home</li>
            <li @click="changeRoute('account')">Account</li>
            <li>Recipe</li>
            <li>Archive</li>
            <li>Search Results</li>
            <li>Adding Recipe</li>
            <li>Log in</li>
            <li>Register</li>
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
