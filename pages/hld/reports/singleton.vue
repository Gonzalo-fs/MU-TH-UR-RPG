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
        name: 'SingletonReportHLD',
    
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
                    texts[0] = "INFORME PERSONAL - HANNAH SINGLETON";
                    texts[1] = "[24-03-79 14:02:15] 150623492";
                    texts[2] = "Mañana salimos hasta el procesador atmosférico 9 para realizar unas comprobaciones.";
                    texts[3] = "Espero que el tractor esté listo y a punto para el viaje, la útima vez me tocó dejarlo en el taller y tardaron 1 mes en traer la maldita pieza de recambio que necesitaba desde la estación más cercana.";
                    texts[4] = "Al menos podré alejarme de toda esta crisis en la colonia y disfrutar pisándole un poco.";
                    texts[5] = "SALIR"
    
                    break;
    
                }
                return texts;
            },
            
            options(){
                return {
                    "." : this.texts[5]
                }
            }
    
        },
    
        mounted() {
            clearTimeouts();
            createNewLine(this.texts[0]);
            createNewLine();
            createNewLine(this.texts[1]);
            createNewLine(this.texts[2], "many-text-style");
            createNewLine(this.texts[3], "many-text-style");
            createNewLine(this.texts[4], "many-text-style");
            createNewLine();
            createMenu(this.options);
        },
        
    }
    </script>
    
    <style>
    </style>