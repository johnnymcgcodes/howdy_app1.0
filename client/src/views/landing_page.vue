<template>
  <div id="landing_page">
    <div class="landing-component">
      <div class="greeting">
    <h1 class="greeting-line">Great to see you, {{username}}!</h1>
    <h2 class="greeting-line">How ya feelin today?</h2>
    </div>
    <div class="buttons">
      <div class="btngroup">
      <button @click="selected = 'happy'; getRandomQuote()">
        <img src="../assets/happy.png" alt="Happy Emoji" width="59" height="59">
      </button>
      <label for="happy-button">Happy</label>
      </div>
      <div class="btngroup">
      <button @click="selected = 'chill'; getRandomQuote()">
        <img src="../assets/cool.png" alt="Chill Emoji" width="59" height="59">
      </button>
      <label for="chill-button">Chill</label>
      </div>
      <div class="btngroup">
      <button @click="selected = 'sad'; getRandomQuote()">
        <img src="../assets/sad.png" alt="Sad Emoji" width="59" height="59">
      </button>
      <label for="sad-button">Sad</label>
      </div>
      <div class="btngroup">
      <button @click="selected = 'anxious'; getRandomQuote()">
        <img src="../assets/anxious.png" alt="Anxious Emoji" width="59" height="59">
      </button>
      <label for="anxious-button">Anxious</label>
      </div>
    </div>
    <div class="quote" v-if="selected">
      <p class="quotes">{{ currentQuote }}</p>
      <button class="cast-off-button" v-if="selected" @click="castOff">Click to Cast Off</button>
    </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
//import axios from 'axios'
export default {
  name: 'landing_page',
  
   setup() {
    const store = useStore();
    const username = computed(() => store.state.username);

    return {
      username
    };
  },
  data() {
  return {
    selected: null,
    quotes: {
      happy: [
         "\"Don't cry because it's over, smile because it happened.\" - Dr. Seuss",
        "\"Happiness is a warm puppy.\" - Charles M. Schulz",
        "\"The happiness of your life depends upon the quality of your thoughts.\" - Marcus Aurelius",
        "\"The most important thing is to enjoy your life—to be happy—it's all that matters.\" - Audrey Hepburn",
        "\"The only way to do great work is to love what you do.\" - Steve Jobs",
        "\"Don't cry because it's over, smile because it happened.\" - Dr. Seuss"
      ],
      chill: [
        "\"The best way out is always through.\" — Robert Frost",
        "\"The quieter you become, the more you can hear.\" — Ram Dass",
        "\"The present moment is filled with joy and happiness. If you are attentive, you will see it.\" — Thích Nhất Hạnh",
        "\"The more tranquil a man becomes, the greater is his success, his influence, his power for good.\" - James Allen"
      ],
      sad: [
        "\"Tears are words that need to be written.\" - Paulo Coelho",
        "\"The wound is the place where the light enters you.\" - Rumi",
        "\"Don't be ashamed to weep; 'tis right to grieve. Tears are only water, and flowers, trees, and fruit cannot grow without water.\" - Brian Jacques",
        "\"When it rains, look for rainbows. When it's dark, look for stars.\" - Oscar Wilde"
      ],
      anxious: [
        "\"You are valuable just because you exist. Not because of what you do or what you have done, but simply because you are.\" — Max Lucado",
        "\"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.\" - Marie Curie",
        "\"Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained.\" - Arthur Somers Roche",
        "\"The greatest weapon against stress is our ability to choose one thought over another.\" - William James",
        "\"Nothing diminishes anxiety faster than action.\" - Walter Anderson",
        "\"The best way out is always through.\" - Robert Frost"
      ]
    },
    currentQuote: null
  };
},

   methods: {
    getRandomQuote() {
    if (this.selected) {
      const quotesArray = this.quotes[this.selected];
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      this.currentQuote = quotesArray[randomIndex];
    }
  },
  castOff() {
    this.$router.push({ name: 'meditate_page' });
  }
},
  beforeRouteEnter(to, from, next) {
    if (to.meta.username) {
      next(vm => {
        vm.username = to.meta.username;
        console.log('username prop value:', vm.username);
      });
    } else {
      next();
    }
  },
};
</script>
<style>
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
label {
  /* color: white; */
  color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;

  font-size: 1 rem;
  font-weight: bold;
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.btngroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fade-in-up 1s ease forwards; 
}
.buttons button {
  margin: 0 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.cast-off-button{
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  text-transform: uppercase;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3);
}
.quote {
  margin-top: 20px;
  opacity: 0; 
  animation: fade-in-up 1s ease forwards;
  animation-delay: 1s; 
}
.quotes {
  color: black;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;

  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}
.landing-component {
  height: 100vh;
  background-image: url("../assets/Rectangle1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
}
.greeting {
  padding-top: 3rem;
}

.greeting-line {
  opacity: 0;
  animation: greeting-fade-in 1s ease forwards;
}

.btngroup:nth-child(2) {
  animation-delay: 0.25s;
}
.btngroup:nth-child(3) {
  animation-delay: 0.5s;
}
.btngroup:nth-child(4) {
  animation-delay: 0.75s;
}

@keyframes greeting-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


.greeting-line:nth-child(2) {
  animation-delay: .75s;
}

.greeting-line:nth-child(3) {
  animation-delay: 2.2s;
}

</style>