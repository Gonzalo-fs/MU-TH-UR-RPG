<template>
  <div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="terminal-container">
      <!-- <h1 class="laser-jump"><span>_-■▓</span></h1> -->
      <!-- <div class="laser-jump"><span>▓■-_</span></div> -->
    </div>


  </div>
</template>

<script>
import { createNewLine, clearTimeouts, createMenu, addLaserJump } from '~/assets/js/utils.js';
export default {
  name: 'StorySelect',

  computed: {

    isGM(){
      if (typeof window !== 'undefined') {
        return localStorage.getItem("gm-rights")
      }
    },

    texts(){
      if (typeof window !== 'undefined') {
        var lang = localStorage.getItem("lang");
      }
      let texts = []
      switch (lang) {

        default:
          // TEXTS IN ENGLISH
          texts[0] = this.isGM ? "WHAT'S THE STORY MOTHER?" : "WHAT'S THE STORY?";
          texts[1] = "HOPE'S LAST DAY";
          texts[2] = "CHARIOT OF THE GODS";
          texts[3] = "OUTBREAK - HOMEBREW ONESHOT TEST";

        break;

        case "esp":
          // TEXTS IN SPANISH
          texts[0] = this.isGM ? "¿DE QUÉ SE TRATA, MADRE?" : "¿DE QUÉ SE TRATA?";
          texts[1] = "HLD 652";
          texts[2] = "COTG 794";
          texts[3] = "OTB - PRUEBA DE ONESHOT";

        break;

      }
      return texts;
    },

    options(){
      return {
        "/page1" : this.texts[1],
        "/page2" : this.texts[2],
        "/page3" : this.texts[3],
      }
    }

  },

  mounted() {
    clearTimeouts();
    addLaserJump();
    createNewLine(this.texts[0]);
    createNewLine();
    addLaserJump();
    createMenu(this.options);
  },

}
</script>

<style>
</style>