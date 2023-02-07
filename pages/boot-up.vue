<template>
    <div class="crt">
        
      <video autoplay muted id="bootup-video">
        <source src="/videos/muthur-bootup.mp4" type="video/mp4">
      </video>
      <audio autoplay id="bootup-audio">
        <source src="/audio/bootup-audio.mp3" type="audio/mpeg">
      </audio> 

    </div>
  </template>
  
  <script>
  export default {
    name: 'BootUpVideo',
  
    mounted() {
      setTimeout(() => {
        this.$nuxt.$options.router.push("/welcome");
      }, 10500);
    },
  
  }
  </script>
  
  <style scoped>
    #bootup-video {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%; 
      min-height: 100%;
    }
  </style>