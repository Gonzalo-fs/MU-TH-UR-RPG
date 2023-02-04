<template>
  <div class="crt">

      <p class="muthur-font-style">OVERMONITORING ADDRESS MATRIX</p>
      <div id="terminal-container"></div>

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
  },

}
</script>

<style>
</style>