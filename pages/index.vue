<template>
  <div>
    <!-- <video muted id="bootup-video">
      <source src="/videos/muthur-bootup.mp4" type="video/mp4">
    </video>
    <audio id="bootup-audio">
      <source src="/audio/bootup-audio.mp3" type="audio/mpeg">
    </audio>  -->

      <p class="muthur-font-style">OVERMONITORING ADDRESS MATRIX</p>
      <span> █ </span>

  </div>
</template>

<script>
  import util from '~/assets/js/terminal.js';
export default {
  name: 'IndexPage',

  
  
  mounted() {

    // util.patata();

    window.addEventListener("click", function() {
      this.document.getElementById("user-input").focus();
    })

    window.addEventListener("keypress", function() {
      this.document.getElementById("user-input").focus();
    })

  },

}
</script>

<style>
</style>