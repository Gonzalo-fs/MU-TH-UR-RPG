<template>
  <div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="terminal-container">
      <div>
        <a href="">HOPES LAST DAY</a>
        <a href="">CHARIOT OF THE GODS</a>
        <a href="">ONESHOT</a>
        <a href="">ONESHOT</a>
      </div>
    </div>


  </div>
</template>

<script>
import { createNewLine, clearTimeouts } from '~/assets/js/utils.js';
export default {
  name: 'StorySelect',

  mounted() {
    clearTimeouts();
    createNewLine("WHAT'S THE STORY, MOTHER?");

  },

}
</script>

<style>
</style>