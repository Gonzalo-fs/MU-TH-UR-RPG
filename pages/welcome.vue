<template>
  <div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="terminal-container">
    </div>

  </div>
</template>

<script>
import { createNewLine, clearTimeouts, redirectAfterQueue } from '~/assets/js/utils.js';
export default {
  name: 'WelcomePage',

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
          texts[0] = this.isGM ? "WELCOME, GAME MOTHER" : "WELCOME, CREW MEMBER";
        break;

        case "esp":
          // TEXTS IN SPANISH
          texts[0] = this.isGM ? "BIENVENIDA, DIRECTORA MADRE" : "BIENVENIDO, TRIPULANTE";
        break;

      }
      return texts;
    }

  },

  mounted() {
    clearTimeouts();
    createNewLine("MAINFRAME UNIT . . . . . . . . . . . . . . . . . [CHECK]");
    createNewLine("TERABYTE HARD-DRIVE . . . . . . . . . . . . . [CHECK]");
    createNewLine("USER RESPONSIVE . . . . . . . . . . . . . . . . . [CHECK]");
    createNewLine("");
    createNewLine(this.texts[0]);

    // redirectAfterQueue("/whats-the-story");
    redirectAfterQueue("/hld/menu");

  },

}
</script>

<style>
</style>