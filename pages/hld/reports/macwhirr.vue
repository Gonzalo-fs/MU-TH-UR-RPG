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
        name: 'MacwhirrReportHLD',
    
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
                    texts[0] = "INFORME PERSONAL - JANICE MACWHIRR";
                    texts[1] = "[20-03-79 22:01:02] 180924609";
                    texts[2] = "Un día más en esta maldita colonia, una colonia “de quita y pon” puesta con prisa y sin pensarlo dos veces, joder, si en 2157 ni siquiera se había cartografiado la superficie de esta luna. Se nos prometió un nuevo hogar, que seríamos pioneros y tendríamos nuevas oportunidades, con lo que nos encontramos fue con una colonia a medio construir, que era azotada por tormentas constantes y unos salarios de mierda.";
                    texts[3] = "Una colonia clasista en la que en cuanto llega algún ejecutivo de visita no disimulará en mirar a todos por encima del hombro. En fin, a pesar de todo conseguimos que la colonia prosperase y generamos nuevas oportunidades. ";
                    texts[4] = "No puedo dejar que eso se eche a perder.";
                    texts[5] = "[23-03-79 10:33:19] 180924609";
                    texts[6] = "Me han llegado rumores de que Hirsch es un ex-marine colonial que desertó y ahora se busca una nueva vida aquí, no me gusta, esto lo único que nos puede causar son problemas. Además solo lo veo deambular por ahí, y aquí tenemos que trabajar duro todos si queremos que esto tire adelante.";
                    texts[7] = "Y entre eso y que los androides de weyland nos quitan el trabajo, no nos podemos permitir estas cosas";
                    texts[8] = "Porque tan solo soy el contacto sindical con la administración de colonias, pero si estuviera en mi mano despediría a Hirsch y a Holroyd.";
                    texts[9] = "[24-03-79 13:32:05] 180924609";
                    texts[10] = "Desde el incidente con Russ Jorden la cosa está tensa, Simpson no quiere que se hable del tema…";
                    texts[11] = "De todas formas seguimos teniendo trabajo que hacer, lo bueno es que mi equipo y yo vamos a poder alejarnos de toda esta locura ya que nos han asignado ir al procesador atmosférico nº9 a realizar unas comprobaciones.";
                    texts[12] = "Ahora mismo se agradece cualquier excusa para escapar de aquí.";
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
            createNewLine(this.texts[2], "many-text-style");
            createNewLine(this.texts[3], "many-text-style");
            createNewLine(this.texts[4], "many-text-style");
            createNewLine();
            createNewLine(this.texts[5]);
            createNewLine(this.texts[6], "many-text-style");
            createNewLine(this.texts[7], "many-text-style");
            createNewLine(this.texts[8], "many-text-style");
            createNewLine();
            createNewLine(this.texts[9]);
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