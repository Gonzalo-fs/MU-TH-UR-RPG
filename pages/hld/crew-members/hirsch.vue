<template>
<div class="crt">

    <audio autoplay loop id="bootup-audio">
        <source src="/audio/background-audio.mp3" type="audio/mpeg">
    </audio> 

    <div id="content-container">
        <div id="terminal-container"></div>
        
        <img id="profile-image" src="/img/hld/Hirsch.jpg" alt="Hirsch profile image">
    </div>


</div>
</template>

<script>
import { createNewLine, clearTimeouts } from '~/assets/js/utils.js';
export default {
    name: 'CrewHirsch',

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
                texts[0] = "NOMBRE EN CLAVE:   EL ÚLTIMO DÍA DE HADLEY'S HOPE";
                texts[1] = "INFORMES";
                texts[2] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quo qui illo, ea delectus itaque saepe non nihil voluptas, aspernatur dolorum veritatis quia sunt labore eum tempore dolorem eos.";
                texts[3] = "SALIR";
                
                break;

            }
            return texts;
        },


    },

    mounted() {
        clearTimeouts();
        createNewLine(this.texts[0]);
        createNewLine(this.texts[1]);
        createNewLine(this.texts[2]);
        createNewLine(this.texts[3]);
    },

}
</script>

<style scoped>
#content-container{
    width: 99vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

#terminal-container{
    width: 50%;
    margin: unset;
}

#profile-image{
    height: 600px;
    margin-bottom: 50px;
}


</style>