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
        clearTimeouts()
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