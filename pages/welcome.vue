<template>
  <div class="crt">

      <p class="muthur-font-style">OVERMONITORING ADDRESS MATRIX</p>
      <div id="terminal-container">

      </div>
      <span> █ </span>

  </div>
</template>

<script>
import { createNewLine } from '~/assets/js/utils.js';
export default {
  name: 'WelcomePage',

  mounted() {
    createNewLine("MAINFRAME UNIT . . . . . . . . . . . . . . . . . . . . . . [CHECK]");
      
    setTimeout(() => {
      createNewLine("TERABYTE HARD-DRIVE . . . . . . . . . . . . [CHECK]");
    }, 2000);

    setTimeout(() => {
      createNewLine("USER RESPONSIVE . . . . . . . . . . . . . . . . . [CHECK]");
    }, 4000);

  },

}
</script>

<style>
</style>