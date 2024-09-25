<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-md-6">
      <div class="card card-body">
        <h1 class="text-center">Registration</h1>
        <form @submit.prevent="register">
          <!-- Email -->
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
                v-model="user.email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <!-- Password -->
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
                v-model="user.password"
                placeholder="Enter your password"
                @input="validatePassword"
              />
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="form-group row mt-3">
            <label for="cnfpass" class="col-md-4 col-form-label text-md-right"
              >Confirm Password</label
            >
            <div class="col-md-8">
              <input
                type="password"
                name="password"
                class="form-control"
                id="cnfpass"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                @input="validatePassword"
              />
            </div>
          </div>

          <!-- Password Match Message -->
          <div class="row">
            <div class="col-md-8 offset-md-4">
              <p
                class="text-success"
                v-if="user.password && confirmPassword && passwordMatch"
              >
                Password match
              </p>
              <p
                class="text-danger"
                v-else-if="user.password && confirmPassword"
              >
                Password not match
              </p>
            </div>
          </div>

          <!-- First Name -->
          <div class="form-group row mt-3">
            <label
              for="first_name"
              class="col-md-4 col-form-label text-md-right"
              >First Name</label
            >
            <div class="col-md-8">
              <input
                type="text"
                name="first_name"
                class="form-control"
                id="first_name"
                v-model="user.first_name"
                placeholder="Enter your First Name"
              />
            </div>
          </div>

          <!-- Last Name -->
          <div class="form-group row mt-3">
            <label for="last_name" class="col-md-4 col-form-label text-md-right"
              >Last Name</label
            >
            <div class="col-md-8">
              <input
                type="text"
                name="last_name"
                class="form-control"
                id="last_name"
                v-model="user.last_name"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>

          <!-- Role -->
          <div class="form-group row mt-3">
            <label for="role" class="col-md-4 col-form-label text-md-right"
              >Role</label
            >
            <div class="col-md-8">
              <select
                name="role"
                id="role"
                class="form-control"
                v-model="user.role"
              >
                <option value="" disabled>Select an Option</option>
                <option :value="role" v-for="role in roles" :key="role">
                  {{ role }}
                </option>
              </select>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-group row mt-4">
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>

        <!-- Links to Home and Login -->
        <div class="row mt-4">
          <div class="col-md-6 text-left">
            <a href="/">Go to Home</a>
          </div>
          <div class="col-md-6 text-right">
            <a href="/login">Go to Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Swal from "sweetalert2";

  export default {
    data() {
      return {
        roles: ["ADMIN", "MEMBER"],
        confirmPassword: null,
        passwordMatch: false,
        user: {
          email: null,
          password: null,
          first_name: null,
          last_name: null,
          role: null,
        },
      };
    },
    methods: {
      validatePassword() {
        this.passwordMatch = this.user.password === this.confirmPassword;
      },
      async register() {
        if (this.passwordMatch) {
          // HTTP call
          try {
            await axios.post("http://localhost:3001/register", {
              user: this.user,
              password: this.password,
            });
            Swal.fire({
              title: "Success!",
              text: "Successfully Registered",
              icon: "success",
            });
          } catch (e) {
            Swal.fire({
              title: "Error!",
              text: e.response.data.message,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Error!",
            text: "Password not match",
            icon: "error",
          });
        }
      },
    },
  };
</script>
