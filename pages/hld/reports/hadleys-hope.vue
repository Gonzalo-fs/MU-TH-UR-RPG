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
        name: 'HadleysHopeReportHLD',
    
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
                    texts[0] = "INFORME DE HADLEY'S HOPE [2179]";
                    texts[1] = "UBICACIÓN:  LV-426.";
                    texts[2] = "FUNDADA EN:  2157.";
                    texts[3] = "PROPIEDAD:  WEYLAND-YUTANI & LAS AMÉRICAS UNIDAS.";
                    texts[4] = "SUPERVISOR:  AL SIMPSON.";
                    texts[5] = "POBLACIÓN:  158 HABITANTES.";
                    texts[6] = "Informe de la colonia Hadley's Hope a fecha del  2179, por el supervisor Al Simpson.";
                    texts[7] = "Situada en la luna de Calpamos, LV-426, esta colonia se asienta sobre un terreno desértico y escarpado, con polvo y rocas de color plomizo que acompañan a un cielo poblado por densas nubes y multitud de tormentas eléctricas, la atmósfera ya es respirable gracias a los procesadores atmosféricos pero todavía sigue algo congestionada.";
                    texts[8] = "Se ha proseguido con las labores de terraformación, investigación y minería.";
                    texts[9] = "Este año se han contabilizado 158 colonos, incluyendo a los primeros ciudadanos nativos, nacidos en esta colonia.";
                    texts[10] = "La colonia ha conseguido prosperar sobreponiéndose a las duras condiciones meteorológicas y a la violenta actividad geológica de la luna.";
                    texts[11] = "Con un poco de suerte podremos seguir prosperando en los años venideros.";
                    texts[12] = "Fin del informe.";
                    texts[13] = "SALIR"
    
                    break;
    
                }
                return texts;
            },
            
            options(){
                return {
                    "." : this.texts[13]
                }
            }
    
        },
    
        mounted() {
            clearTimeouts();
            createNewLine(this.texts[0]);
            createNewLine();
            createNewLine(this.texts[1]);
            createNewLine(this.texts[2]);
            createNewLine(this.texts[3]);
            createNewLine(this.texts[4]);
            createNewLine(this.texts[5]);
            createNewLine();
            createNewLine(this.texts[6], "many-text-style");
            createNewLine(this.texts[7], "many-text-style");
            createNewLine(this.texts[8], "many-text-style");
            createNewLine(this.texts[9], "many-text-style");
            createNewLine(this.texts[10], "many-text-style");
            createNewLine(this.texts[11], "many-text-style");
            createNewLine(this.texts[12], "many-text-style");
            createNewLine();
            createMenu(this.options);
        },
        
    }
    </script>
    
    <style>
    </style>