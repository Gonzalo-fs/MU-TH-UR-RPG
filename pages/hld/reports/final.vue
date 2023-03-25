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
    import { createNewLine, clearTimeouts, createMenu} from '~/assets/js/utils.js';
    export default {
        name: 'FinalReportHLD',
    
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
                    texts[0] = "HADLEY'S HOPE - INFORME FINAL";
                    texts[1] = "Éste es el informe final de Hadley's Hope. Informa [CENSORED].";
                    texts[2] = "La colonia ha sido invadida por monstruos. De las 158 personas que residían en ella, sólo [CENSORED] han sobrevivido.";
                    texts[3] = "El resto... bueno, tiemblo de sólo pensar lo que le ha podido suceder al resto. Ojalá hayan tenido una muerte piadosamente rápida, aunque lo dudo.";
                    texts[4] = "Si reciben este mensaje, no intenten rescatarlos: aléjense de la colonia y avisen a los marines coloniales lo antes posible. Sólo ellos pueden enfrentarse a esas criaturas.";
                    texts[5] = "Ha informado [CENSORED]."
                    texts[6] = "Fin del informe."
                    texts[7] = "SALIR"
    
                    break;
    
                }
                return texts;
            },
            
            options(){
                return {
                    "." : this.texts[7]
                }
            }
    
        },
    
        mounted() {
            clearTimeouts();
            createNewLine(this.texts[0]);
            createNewLine();
            createNewLine(this.texts[1], "many-text-style");
            createNewLine(this.texts[2], "many-text-style");
            createNewLine(this.texts[3], "many-text-style");
            createNewLine(this.texts[4], "many-text-style");
            createNewLine(this.texts[5], "many-text-style");
            createNewLine();
            createNewLine(this.texts[6], "many-text-style");
            createNewLine();
            createMenu(this.options);
        },
        
    }
    </script>
    
    <style>
    </style>