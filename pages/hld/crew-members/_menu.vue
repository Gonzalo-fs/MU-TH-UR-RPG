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
    name: 'CrewMenuHLD',

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
                texts[0] = "CREW MEMBERS:";
                texts[1] = "HIRSCH";
                texts[2] = "HOLROYD";
                texts[3] = "MACWHIRR";

                break;

                case "esp":
                // TEXTS IN SPANISH
                texts[0] = "TRIPULACIÓN:";
                texts[1] = "MACWHIRR";
                texts[2] = "HIRSCH";
                texts[3] = "SINGLETON";
                texts[4] = "HOLROYD";
                texts[5] = "SIGG";
                texts[6] = "SALIR";

                break;

            }
            return texts;
        },

        options(){
            return [
                    {
                        "/hld/crew-members/macwhirr" : this.texts[1],
                        "/hld/crew-members/hirsch" : this.texts[2],
                        "/hld/crew-members/singleton" : this.texts[3],
                        "/hld/crew-members/holroyd" : this.texts[4],
                        "/hld/crew-members/sigg" : this.texts[5],
                    },
                    {
                        ".." : this.texts[6],
                    }
                ]
        }

    },

    mounted() {
        clearTimeouts();
        createNewLine(this.texts[0]);
        createNewLine();
        createMenu(this.options[0]);
        createNewLine();
        createMenu(this.options[1]);


    },

}
</script>

<style>
</style>