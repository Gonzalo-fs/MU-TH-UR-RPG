<template>
  <div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="terminal-container">
      <div>
        <a href="">
          <p class="muthur-font-style">HOPES LAST DAY</p>  
        </a>
        <a href="">
          <p class="muthur-font-style">CHARIOT OF THE GODS</p>  
        </a>
        <a href="">
          <p class="muthur-font-style">OUTBREAK</p>  
        </a>
        <a href="">
          <p class="muthur-font-style">HOPES LAST DAY</p>
        </a>
      </div>
    </div>


  </div>
</template>

<script>
import { createNewLine, clearTimeouts } from '~/assets/js/utils.js';
export default {
  name: 'StorySelect',

  computed: {

    isGM(){
      return localStorage.getItem("gm-rights")
    },

    texts(){
      let lang = localStorage.getItem("lang");
      let texts = []
      switch (lang) {

        default:
          // TEXTS IN ENGLISH
          texts[0] = this.isGM ? "WHAT'S THE STORY MOTHER?" : "WHAT'S THE STORY?";
        break;

        case "esp":
          // TEXTS IN SPANISH
          texts[0] = this.isGM ? "¿DE QUÉ SE TRATA, MADRE?" : "¿DE QUÉ SE TRATA?";
        break;

      }
      return texts;
    }

  },

  mounted() {
    clearTimeouts();
    createNewLine(this.texts[0]);

  },

}
</script>

<style>
</style>