<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-teal-8">El comienzo</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="cyan-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>

                <q-btn id="play" push round icon="volume_up" text-color="grey" @click="reproducirAudio" />

            </q-card-section>
            <q-separator />
            <q-card-actions align="right">
                <q-btn class="text-bold" text-color="cyan-10" flat @click="showNotif('right')">Continuar</q-btn>
            </q-card-actions>
        </q-card>
    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';

export default {
    setup() {
        // var estaReproduciendo = false;

        /*
        const reproducirAudio = () => {
            var audio = new Audio("../../audios/A1-1.m4a");
            // codigo del audio
            // var play = document.getElementById("play");
            if (estaReproduciendo == false) {
                audio.play();
                estaReproduciendo = true;
            } else if (estaReproduciendo == true) {
                audio.pause();
                estaReproduciendo == false;
            }
        }
        */

        const $q = useQuasar();

        const router = useRouter();

        return {
            // reproducirAudio,

            showNotif(position) {
                $q.notify({
                    progress: true,
                    position,
                    message: 'Concluiste la lección del comienzo. ¡Toma tu trofeo!',
                    color: 'cyan-10',
                    textColor: 'white',
                }, 1000)
                //router.replace('/2');
            },

            router
        }
    }
}
</script>
