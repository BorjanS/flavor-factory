<template>
  <div>
    <div>
      <main class="login-form">
        <div class="cotainer">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">Log in</div>
                <div class="card-body">
                  <form>
                    <div class="form-group row">
                      <label
                        for="email_address"
                        class="col-md-4 col-form-label text-md-right"
                      >E-Mail Address</label>
                      <div class="col-md-6">
                        <input type="text" id="email_address" class="form-control" v-model="email" />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                      <div class="col-md-6">
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          v-model="password"
                        />
                      </div>
                    </div>

                    <div class="col-md-6 offset-md-4">
                      <button type="button" @click="callLogIn()" class="btn btn-primary">Log in</button>
                      <p v-html="message" class="mt-4"></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import router from "../../router"
export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    callLogIn: function() {
      this.logIn(this.email, this.password);
    }
  },

  watch: {
    message: function(val, oldVal) {
      if (val.includes("successfully")) {
        var delay = 3000; // time in milliseconds

        setTimeout(function() {
      router.push({ path: `/` });
        }, delay);
      } else {
      }
    }
  }
};
</script>


<style>
.my-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.my-form .row {
  margin-left: 0;
  margin-right: 0;
}

.login-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.login-form .row {
  margin-left: 0;
  margin-right: 0;
}
</style>
