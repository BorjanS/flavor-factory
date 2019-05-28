<template>
<div>
    <div class="container boxes">
        <div class="row">
            <div class="single-box col-lg-4" @click="goToRecipe">
                <img src="../assets/img/pizza.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make pizza?</h5>
                    <p>Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/burek.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make burek?</h5>
                    <p>Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet! </p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/fries.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make fries?</h5>
                    <p>Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <!-- Button and search -->
            <div class="our-recepies">
                <button>Our recepies</button>
            </div>
            <div class="search-div">
                <input class="search" type="text" placeholder="Search...">
                <button><span class="fa fa-search search-icon"></span></button>
            </div>

            <!-- Seccond grid -->
            <div class="single-box col-lg-4">
                <img src="../assets/img/hamburger.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make hamburger?</h5>
                    <p>Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/burito.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make burito?</h5>
                    <p>Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/chicken-nuggets.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make chicken nuggets?</h5>
                    <p>Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <div class="single-box col-lg-4" @click="goToRecipe">
                <img src="../assets/img/pizza.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make pizza?</h5>
                    <p>Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/burek.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make burek?</h5>
                    <p>Lorem ipsum dolor sit amet!Lorem ipsum dolor sit amet! </p>
                </div>
            </div>

            <div class="single-box col-lg-4">
                <img src="../assets/img/fries.jpg">
                <div class="single-box-content">
                    <h5>Wanna learn how to make fries?</h5>
                    <p>Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet!</p>
                </div>
            </div>

          
                <div class="col-lg-7 join-fun">
                    <p>JOIN THE FUN</p>
                </div>

                <div class="col-lg-5 submit-recipe">
                    <button>Submit recipe ></button>
                </div>

            <div class="categories">
                <div class="single-category"><p>Category1</p></div>
                <div class="single-category"><p>Category2</p></div>
                <div class="single-category"><p>Category3</p></div>
                <div style="margin-right:0!important" class="single-category"><p>Category4</p></div>
            </div>

            <div style="height:200px; width:100%; margin:70px 0; border:1px solid #aaa"><p style="text-align:center; margin-top:8%">QUICK LINKS</p></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    // name:'home'
    methods: {
        goToRecipe() {
            this.$router.push('recipe')
        }
    }
}
</script>

<style>
.main-cover {
    width: 100%;
    object-fit: cover;
}

.boxes {
    margin-top: 60px;
}

.single-box {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
}

.single-box img {
    width: 100%;
    height: 250px;
    border: 1px solid #aaa;
    cursor: pointer;
}

.single-box-content {
    padding: 15px;
    border: 1px solid #aaa;
    height: 150px;
    cursor: pointer;
}

.our-recepies {
    transform: translateX(-50%);
    margin-left: 50%;
    width: 100%;
    margin-top: 70px;
}

.our-recepies button {
    padding: 5px 10px;
    background-color: #FF0000;
    color: white;
    font-weight: 600;
    border-color: #FF0000;
}

.search-div {
    transform: translateX(-50%);
    margin-left: 50% !important;
    margin: 30px 0 70px 0;
}

input::placeholder {
    padding-left: 10px;
}

.search-icon {}

.join-fun{
    margin-top:60px;
}

.submit-recipe{
    margin-top:60px;
}

.categories{   
    display: inline-flex;
    margin-top:70px;
    margin-bottom:40px;
    margin-left:50%;
    transform:translateX(-50%);
}

.single-category{
    width:80px; 
    height:80px; 
    border-radius:50%; 
    background-color:#aaa; 
    margin-right:50px;
    cursor:pointer;
}

.single-category p{
    margin-top:90px;
}
</style>
