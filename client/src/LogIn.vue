<template>
  <div id="app">
  <div class="my-component">
    <div class="greeting">
      <h1 class="greeting-line">Howdy There, Friend</h1>
      <h2 class="greeting-line">Find Peace of Mind Here</h2>
      <h2 class="greeting-line">Assess, Meditate.</h2>
    </div>
     <button v-show="!showLoginForm" @click="showLoginForm = true">Log In</button>
    <button v-show="!showLoginForm">Sign Up</button>
<div v-if="showLoginForm" class="login-form fade-in" >
      <h3></h3>
      <form @submit.prevent="login">
        <label>
          Username:
          <input v-model="username" type="text">
        </label>
        <label>
          Password:
          <input v-model="password" type="password">
        </label>
        <button class="sub-button" type="submit">Log In</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import landing_page from './views/landing_page.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios'

export default {
  name: "LogIn",
  setup() {
    const router = useRouter();
  const store = useStore();
    const showLoginForm = ref(false);
    const username = ref('');
    const password = ref('');

    async function login() {
      try {
        const response = await axios.post('/api/users/login', {
          username: username.value,
          password: password.value
        });

        console.log(response.data);
        
        // Update the username in the Vuex store
        store.commit('setUsername', username.value);
        // Navigate to the LandingPage
        router.push({ name: 'landing_page'});
       
      } catch (error) {
        console.error(error);
        // handle login error here
      }
    }

    return {
      showLoginForm,
      username,
      password,
      login
    };
  },
};
</script>;

<style >
h1 {
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
}
h2 {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;

}

button {
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: transparent;
  color: white;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

button:hover {
  background-color: transparent;
   color: white;
  opacity: 1;
  font-size: 2rem;
  transform: scale(1.1);
}

.my-component {
  height: 100vh;
  background-image: url("../src/assets/Rectangle1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
}
.greeting {
  padding-top: 7rem;
}

.greeting-line {
  opacity: 0;
  animation: greeting-fade-in 1s ease forwards;
}

@keyframes greeting-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.greeting-line:nth-child(2) {
  animation-delay: .75s;
}

.greeting-line:nth-child(3) {
  animation-delay: 2.2s;
}

.login-form {
  margin-top: 2rem;
  padding: 2rem;
  background-color: transparent;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.login-form input {
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  outline: none; /* Remove blue highlight */
}
.login-form h3 {
  margin-bottom: 1rem;
}
.fade-in {
    animation: fade-in 0.5s ease-in-out forwards;
    animation-delay: 0.2s; /* add a delay to create the effect of the form sliding up */
  transform: translateY(100%);
  }
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
.sub-button {
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
/* fallback for browsers that don't support text-stroke */
  text-shadow: 
  -1px -1px 0 #000,  
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
}
</style>
