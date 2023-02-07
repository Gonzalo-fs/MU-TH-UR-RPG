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
import { createNewLine } from '~/assets/js/utils.js';
export default {
  name: 'WelcomePage',

  mounted() {
    createNewLine("MAINFRAME UNIT . . . . . . . . . . . . . . . . . [CHECK]");
    createNewLine("TERABYTE HARD-DRIVE . . . . . . . . . . . . . [CHECK]");
    createNewLine("USER RESPONSIVE . . . . . . . . . . . . . . . . . [CHECK]");
    createNewLine("");
    createNewLine("WELCOME, GAME MOTHER");

  },

}
</script>

<style>
</style>