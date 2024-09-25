<template>
  <div class="row mt-5">
    <div class="col-md-6 m-auto">
      <div class="card card-body">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="login">
          <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right"
              >Email</label
            >
            <div class="col-md-8">
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div class="form-group row mt-3">
            <label for="password" class="col-md-4 col-form-label text-md-right"
              >Password</label
            >
            <div class="col-md-8">
              <input
                type="password"
                name="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="form-group row mt-4">
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <p class="lead mt-4 text-center">Go to Home? <a href="/">Home</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Swal from "sweetalert2";

  export default {
    name: "UserLogin",
    data() {
      return {
        email: null,
        password: null,
      };
    },
    methods: {
      async login() {
        try {
          await axios.post("http://localhost:3001/login", {
            email: this.email,
            password: this.password,
          });
          Swal.fire({
            title: "Success!",
            text: "Login Successfully",
            icon: "success",
          });
        } catch (e) {
          Swal.fire({
            title: "Error!",
            text: e.response.data.message,
            icon: "error",
          });
        }
      },
    },
  };
</script>
