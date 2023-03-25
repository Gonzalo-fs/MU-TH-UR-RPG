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
        name: 'SiggReportHLD',
    
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
                    texts[0] = "INFORME PERSONAL - SONNY SIGG";
                    texts[1] = "[23-03-79 14:02:15] 190327652";
                    texts[2] = "No sé si describir la situación como fascinante u horripilante, pero según los rumores, el prospector Russ Jorden regresó a la colonia de su expedición con una nueva especie de parásito.";
                    texts[3] = "Una criatura nunca vista antes, los compañeros que lo vieron la describían como con forma arácnida, pero no está nada claro.";
                    texts[4] = "Desgraciadamente Russ Jorden ha fallecido y se cree que otras personas han sido contagiadas. Al Simpson ha insistido en que debemos tranquilizarnos y ha emitido un comunicado por megafonía en el que rogaba calma";
                    texts[5] = "[25-03-79 07:36:04] 190327652";
                    texts[6] = "Esta mañana, antes de partir hacia el procesador 9 me fijé en que acababa de aterrizar una nave de W-Y en la colonia, creo que iban a bordo un equipo de inspectores de la compañía, y si me he enterado bien, este equipo está liderado por Reynolds y Komiskey.";
                    texts[7] = "Escuché una conversación por casualidad y por lo visto estaban preparando la nave para huir sin que nadie se enterase.";
                    texts[8] = "Pues resulta que Reynolds fue precisamente la que ordenó la expedixción de Jorden, no me parece justo que ahora se larguen para evadir responsabilidades y nos dejen a nosotros para que nos comamos el marrón.";
                    texts[9] = "SALIR"
    
                    break;
    
                }
                return texts;
            },
            
            options(){
                return {
                    "." : this.texts[9]
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
            createNewLine(this.texts[5]);
            createNewLine(this.texts[6], "many-text-style");
            createNewLine(this.texts[7], "many-text-style");
            createNewLine(this.texts[8], "many-text-style");
            createNewLine();
            createMenu(this.options);
        },
        
    }
    </script>
    
    <style>
    </style>