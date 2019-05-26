<template>
<div class="container">
    <div class="row">
        <div class="col-lg-4 logo-div">
            <img src="../assets/img/logo.png">
        </div>  
        <div class="col-lg-8">
            <div class="first-ul">
            <ul>
                <li @click="changeRoute('login')">Log in</li>
                <li @click="changeRoute('register')">Register</li>
            </ul>
            </div>
            <div>
            <ul>
                <li @click="changeRoute('home')">Home</li>
                <li @click="changeRoute('account')">Account</li>
                <li @click="changeRoute('recipe')">Recipe</li>
                <li @click="changeRoute('archive')">Archive</li>
                <li @click="changeRoute('search-res')">Search Results</li>
                <li @click="changeRoute('add-recipe')">Adding Recipe</li>
            </ul>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    methods: {
        changeRoute(prop) {
            this.$router.push(prop)
        }
    }
}
</script>

<style>
ul {}

ul li {
    display: inline;
    min-width: 50px;
    margin-left: 15px;
    padding: 10px;
    cursor: pointer;
    color: #230B0B!important;
}

ul li:hover{
    background-color:#FF0000;
    color:white!important;
    font-weight: 600;
    border-radius: 10%;
}

.logo-div img{
    width:100%;
}

.first-ul{
    float:right;
    width:38%;
}
</style>
