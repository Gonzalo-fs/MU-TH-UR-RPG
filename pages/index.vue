<template>
  <div>
    <!-- <video muted id="bootup-video">
      <source src="/videos/muthur-bootup.mp4" type="video/mp4">
    </video>
    <audio id="bootup-audio">
      <source src="/audio/bootup-audio.mp3" type="audio/mpeg">
    </audio>  -->

      <p class="muthur-font-style">OVERMONITORING ADDRESS MATRIX</p>
      <div id="terminal-container">

      </div>
      <span> █ </span>

  </div>
</template>

<script>
import { createNewLine } from '~/assets/js/utils.js';
export default {
  name: 'IndexPage',

  mounted() {
    createNewLine("WELCOME GAME MOTHER");
      
    setTimeout(() => {
      createNewLine("WELCOME GAME MOTHER");
    }, 2000);

    setTimeout(() => {
      createNewLine("WELCOME GAME MOTHER");
    }, 4000);

  },

}
</script>

<style>
</style>