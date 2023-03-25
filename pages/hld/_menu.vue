<template>
<div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="terminal-container">
    </div>


</div>
</template>

<script>
import { createNewLine, clearTimeouts, createMenu } from '~/assets/js/utils.js';
export default {
    name: 'MenuHLD',

    computed: {

        isGM(){
            if (typeof window !== 'undefined') {
                return localStorage.getItem("gm-rights")
            }
        },

        texts(){
            if (typeof window !== 'undefined') {
                var lang = localStorage.getItem("lang");
            }
            let texts = []
            switch (lang) {

                default:
                // TEXTS IN ENGLISH
                texts[0] = "CODENAME:   HOPE'S LAST DAY";
                texts[1] = "REPORTS";
                texts[2] = "CREW MEMBERS";
                texts[3] = "EXIT";

                break;

                case "esp":
                // TEXTS IN SPANISH
                texts[0] = "TERMINAL DE HADLEY'S HOPE";
                texts[1] = "INFORMES";
                texts[2] = "TRIPULACIÓN";
                texts[3] = "MAPA";

                break;

            }
            return texts;
        },

        options(){
            return {
                "/hld/reports/menu" : this.texts[1],
                "/hld/crew-members/menu" : this.texts[2],
                // ".." : this.texts[3],
                "/img/hld/maps/hld-Level-01.png" : this.texts[3],
            }
        }

    },

    mounted() {
        clearTimeouts();
        createNewLine(this.texts[0]);
        createNewLine();
        createMenu(this.options);
    },

}
</script>

<style>
</style>