<template>
    <div>
        <img src="/img/index-panel/background.png" alt="background" usemap="#control-panel">

        <map name="control-panel">
            <area alt="open button" coords="1072,682,1129,799" shape="rect" @click="access()">
        </map>
    </div>
</template>
  
<script>

  export default {
    name: 'IndexPage',
  
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