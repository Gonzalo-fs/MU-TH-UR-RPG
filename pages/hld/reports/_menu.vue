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
    name: 'ReportsMenuHLD',

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
                texts[0] = "-";
                texts[1] = "-";
                texts[2] = "-";
                texts[3] = "-";

                break;

                case "esp":
                // TEXTS IN SPANISH
                texts[0] = "INFORMES";
                texts[1] = "INFORME DE HADLEY'S HOPE [2179]";
                texts[2] = "INFORME PERSONAL - MACWHIRR";
                texts[3] = "INFORME PERSONAL - SIGG";
                texts[4] = "INFORME PERSONAL - SINGLETON";
                texts[5] = "SALIR";

                break;

            }
            return texts;
        },

        options(){
            return {
                "/hld/reports/hadleys-hope" : this.texts[1],
                "/hld/reports/macwhirr" : this.texts[2],
                "/hld/reports/sigg" : this.texts[3],
                "/hld/reports/singleton" : this.texts[4],
                ".." : this.texts[5],
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