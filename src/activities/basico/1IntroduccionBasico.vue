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

                <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
                    control-color="white" navigation padding arrows height="400px"
                    class="bg-cyan-10 text-white shadow-1 rounded-borders">
                    <q-carousel-slide name="style" class="column no-wrap flex-center">
                        <q-icon name="style" size="56px" />
                        <div class="q-mt-md text-center">
                            Has llegado a este punto del curso, ¡Comencemos!
                            Antes de empezar a aprender debes de conocer cuáles son
                            algunas de las cosas que necesitan las personas para poder
                            entrar en este maravilloso mundo. Recuerda que <b>no necesitas ser
                                un profesional </b> para empezar a programar.

                            <q-btn push round icon="volume_up" text-color="white" size="sm" @click="reproducirAudio" />
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center">
                        <q-icon name="live_tv" size="56px" />
                        <div class="q-mt-md text-center">
                            Una de las principales virtudes que debes tener es ser <b>observador</b>,
                            normalmente las fallas siempre están en los detalles, por lo que
                            tu deber es ver bien y no perderte nada.

                            <q-btn push round icon="volume_up" text-color="white" size="sm" @click="reproducirAudio" />
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="layers" class="column no-wrap flex-center">
                        <q-icon name="layers" size="56px" />
                        <div class="q-mt-md text-center">
                            Otra habilidad que aprenderás y debes desarrollar es <b>tener pensamiento
                                lógico</b>, esto es super importante, lo que queremos decir es que
                            siempre tienes que hacer lo que parezca correcto y lo que te llevará
                            a tu meta más fácil.

                            <q-btn push round icon="volume_up" text-color="white" size="sm" @click="reproducirAudio" />
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="map" class="column no-wrap flex-center">
                        <q-icon name="terrain" size="56px" />
                        <div class="q-mt-md text-center">
                            Si ya posees estos superpoderes, estamos listos para aprender, así que ¡Vamos!

                            <q-btn push round icon="volume_up" text-color="white" size="sm" @click="reproducirAudio" />
                        </div>
                        <div class="text-center">
                            <q-btn class="text-bold" text-color="cyan-10" color="white"
                                @click="showNotif('right')">Continuar</q-btn>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        //var sound1 = new Audio();
        //sound1.src = "../../audios/dillom.mp3";
        const reproducirAudio = () => {
            // codigo del audio
            //sound1.play();
        }



        const $q = useQuasar();

        const router = useRouter();

        return {
            slide: ref('style'),

            reproducirAudio,

            showNotif(position) {
                $q.notify({
                    progress: true,
                    position,
                    message: 'Concluiste la lección del comienzo. ¡Toma tu trofeo!',
                    color: 'cyan-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/2');
            },

            router
        }
    }
}
</script>