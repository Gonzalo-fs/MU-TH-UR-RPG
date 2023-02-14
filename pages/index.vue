<template>
    <div>
        <img src="/img/index-panel/background.png" alt="background" usemap="#control-panel">

        <map name="control-panel">
            <area alt="open button" coords="1072,682,1129,799" shape="rect" @click="access()">
        </map>
    </div>
</template>
  
<script>
  import { clearTimeouts } from '~/assets/js/utils.js';
  export default {
    name: 'IndexPage',
    
    mounted(){

        // if (localStorage.getItem("lang")) {
        //     this.$nuxt.$options.router.push("/whats-the-story");
        // }

        clearTimeouts()

        // localStorage.setItem("lang", "eng")
        localStorage.setItem("lang", "esp")

        localStorage.setItem("gm-rights", true)
        // localStorage.removeItem("gm-rights")
    },

    methods: {
        access: function() {
            document.documentElement.requestFullscreen();
            this.$nuxt.$options.router.push("/boot-up");
        }
    }
  
  }
</script>
  
<style scoped>
    area{
        cursor: pointer;
    }
</style>