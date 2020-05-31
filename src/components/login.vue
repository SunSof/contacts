<template>
  <div class="container b-card-login">
    <h2 class="b-card-login__h2">Login</h2>
    <h4 class="b-card-login__h4">Email</h4>
    <input
      type="text"
      name="title"
      id="title"
      class="form-control mb-3"
      v-model="login"
      placeholder="Login"
    />
    <h4 class="b-card-login__h4">Password</h4>
    <input
      type="password"
      name="body"
      class="form-control mb-3"
      v-model="password"
      placeholder="Password"
    />
    <div v-if="errorVisible">
      <h3 class="b-card-error">Please fill the form correctly</h3>
    </div>

    <button class="login-button btn" @click="submitLogin">
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: null,
      password: null,
      errorVisible: false
    }
  },
  methods: {
    submitLogin () {
      const vm = this
      vm.axios
        .post('http://localhost:3000/login', {
          login: vm.login,
          password: vm.password
        })
        .then(function (response) {
          localStorage.token = response.headers.token
          vm.$router.push('/')
        })
        .catch(function (error) {
          if (vm.password === '') {
            vm.errorVisible = true
          } else {
            vm.errorVisible = false
          }
          console.log(error)
        })
    }
  }
}
</script>

<style>
.b-card-login {
  background-color: rgb(233, 240, 241);
  padding: 20px;
  margin-top: 40px;
  font-family: "Raleway", sans-serif;
}
.b-card-login__h2 {
  font-size: 35px;
  padding-bottom: 20px;
}
.b-card-login__h4 {
  font-size: 15px;
}
.login-button {
  background-color: rgb(122, 206, 236);
}
.b-card-error {
  background-color: rgb(248, 131, 77);
  padding: 10px;
  width: 230px;
}
</style>
