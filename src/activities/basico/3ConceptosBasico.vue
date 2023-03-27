<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-purple-10">Instrucciones</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="purple-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <p>
                    <q-btn push round icon="volume_up" text-color="purple-10" size="sm" @click="reproducirAudio" />
                    Una <b>instrucción</b> es una enseñanza que le das a
                    alguien más. Las intrucciones son <b>indicaciones</b> que se
                    dan cuando le enseñamos a alguien a cómo hacer algo.
                </p>
                <p>
                    En programación, para programar necesitamos darle Instrucciones
                    a la computadora. Los programas de informática operan mediante
                    instrucciones que nosotros como programadores le damos.
                </p>
                <p>
                    Para dar instrucciones a una computadora, necesitamos hacerlo
                    a partir de un <b>lenguaje de programación</b> (y lo haremos con
                    letras, números y signos).
                </p>
            </q-card-section>
            <q-card-section>
                <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
                    control-color="white" navigation padding arrows height="200px"
                    class="bg-purple-10 text-white shadow-1 rounded-borders">
                    <q-carousel-slide name="style" class="column no-wrap flex-center">
                        <q-icon name="next_plan" size="56px" />
                        <div class="q-mt-md text-center">
                            EJEMPLOS DE INSTRUCCIONES
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center">
                        <q-icon name="cookie" size="56px" />
                        <div class="q-mt-md text-center">
                            Recetas de cocina
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="layers" class="column no-wrap flex-center">
                        <q-icon name="menu_book" size="56px" />
                        <div class="q-mt-md text-center">
                            Un manual para armar algo
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="map" class="column no-wrap flex-center">
                        <q-icon name="school" size="56px" />
                        <div class="q-mt-md text-center">
                            Las indicaciones de un trabajo escolar
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="program" class="column no-wrap flex-center">
                        <q-icon name="devices" size="56px" />
                        <div class="q-mt-md text-center">
                            Un programa informático
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="purple-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="purple-10" flat @click="showNotif('right')">Continuar</q-btn>
                    </div>
                </div>
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
        const reproducirAudio = () => {
            // codigo del audio
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
                    message: '¡Concluiste la lección de algoritmos!',
                    color: 'green-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/4');
            },
            anterior() {
                router.replace('/2');
            },

            router
        }
    }
}
</script>