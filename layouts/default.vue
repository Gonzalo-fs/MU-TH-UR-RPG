<template>
    <div class="crt">
        <Nuxt />
        <input type="text" id="user-input">
    </div>
</template>
  
<script>
  import { focusInput } from '~/assets/js/utils.js';
  export default {
    name: 'DefaultLayout',

    mounted(){
      focusInput();
    },

  }
</script>
  
<style>
</style>