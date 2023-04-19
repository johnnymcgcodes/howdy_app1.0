<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form @submit.prevent="submitForm">
      <label>
        Username:
        <input v-model="username" type="text" required>
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required>
      </label>
      <label>
        Email:
        <input v-model="email" type="email" required>
      </label>
      <button type="submit">Sign Up</button>
    </form>
    <button @click="goToLogin">Back to Log In</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log("submitting sign up...");
        await axios.post("/api/users/signup", {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        console.log("moving to login...")
        this.$router.push({ name: "LogIn" });
      } catch (error) {
        console.error(error);
      }
    },
    goToLogin() {
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>

<style>
  

  .form-container {
    width: 500px;
    height: auto;
    padding: 40px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-group {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #E1E1E1;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #00B2FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: #0073B3;
  }

  .login-link {
    margin-top: 20px;
    text-align: center;
  }

  .login-link a {
    color: #0073B3;
    font-weight: bold;
    text-decoration: none;
  }

  .login-link a:hover {
    text-decoration: underline;
  }
</style>
