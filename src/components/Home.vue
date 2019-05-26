<template>
<div>
    <img class="main-cover" src="../assets/img/main-cover.jpg">
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
        </div>
    </div>
</div>
</template>

<script>
export default {
    // name:'home'
    methods: {
        goToRecipe(){
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
    margin-top: 30px;
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
</style>
