<template>
  <div class="crt">

    <div id="terminal-container">
      <!-- <p class="muthur-font-style">OVERMONITORING ADDRESS MATRIX</p> -->
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