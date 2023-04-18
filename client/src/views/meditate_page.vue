<template>
  <div id="landing_page">
    <div class="landing-component">
      <div class="greeting">
    <h1 class="greeting-line">Lets start the meditation. </h1>
    <h2 class="greeting-line">{{ selectedMeditationText }}</h2>
    </div>
<div class="musicplayer">
  <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=2092988025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://edamame.bandcamp.com/album/virga">Virga by Edamame</a></iframe>
</div>
    </div>
  </div>
</template>

<script>

//import axios from 'axios'
export default {
  name: 'meditate_page',

  data() {
  return {
    meditationTexts: [
      `Mindful Breathing:
- Sit or lie comfortably.
- Close eyes, breathe deeply.
- Focus on breath.
- Notice inhalation, exhalation.
- 5 minutes.`,
      
      `Body Scan:
- Sit or lie comfortably.
- Close eyes, breathe deeply.
- Focus on body, head to toes.
- Notice sensations.
- Scan back up to head.
- 5 minutes.`,
      
      `Loving-Kindness:
- Sit or lie comfortably.
- Close eyes, breathe deeply.
- Silently repeat phrases.
- "May I be happy, healthy, safe, at ease."
- Think of loved one, repeat phrases.
- 5 minutes.`,
      
      `Visualization:
- Sit or lie comfortably.
- Close eyes, breathe deeply.
- Imagine peaceful place.
- Explore with senses.
- 5 minutes.`
    ],
    selectedMeditationText: '',
  };
},


  created() {
    this.selectedMeditationText = this.meditationTexts[Math.floor(
      Math.random() * this.meditationTexts.length)];
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
.musicplayer{
  display: flex;
    justify-content: center;
    align-items: center;
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