<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-red-10">Lenguajes</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="red-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <h5 class="text-red-10">¿Qué es el lenguaje?</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="red-10" size="sm" @click="reproducirAudio" />
                    El <b>lenguaje</b> es la forma en la que nos comunicamos
                    con los demás. Los niños aprenden a comunicarse desde
                    los primeros días de vida y poco a poco van desarrollando
                    la habilidad de comunicarse mediante acciones, señas y
                    finalmente el habla.
                </p>

                <h5 class="text-red-10">Los lenguajes de programación</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="red-10" size="sm" @click="reproducirAudio" />
                    Un <b>lenguaje de programación</b> permite comunicarnos
                    con un dispositivo digital e indicarle que se debe hacer.
                    Estos lenguajes tienen como objetivo construir otros
                    programas informáticos.
                </p>
            </q-card-section>

            <q-card-section class="text-white bg-red-10">
                No se espera profundizar mucho este apartado, así que en resumen,
                para comunicarnos con alguien más necesitamos saber el mismo
                lenguaje. Algo similar sucede con las computadoras.
            </q-card-section>

            <q-card-section>

                <q-carousel autoplay infinite v-model="slide" swipeable animated control-type="push" control-color="red-10"
                    navigation padding arrows height="300px" class="text-purple rounded-borders">
                    <q-carousel-slide name="style" class="column no-wrap flex-center">
                        <q-img src="../../assets/lgophp.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-indigo-10">PHP</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center">
                        <q-img src="../../assets/logojs.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-amber-10">Javascript</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="layers" class="column no-wrap flex-center">
                        <q-img src="../../assets/logoc.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-blue-10">C++</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="map" class="column no-wrap flex-center">
                        <q-img src="../../assets/logogo.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-grey-8">GO</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="other" class="column no-wrap flex-center">
                        <q-img src="../../assets/logojava.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-indigo-5">Java</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="otherone" class="column no-wrap flex-center">
                        <q-img src="../../assets/logopiton.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-yellow-8">Python</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="othertwo" class="column no-wrap flex-center">
                        <q-img src="../../assets/logoruby.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-red-10">Ruby</b>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="othertree" class="column no-wrap flex-center">
                        <q-img src="../../assets/logoswift.png" style="width: 100%; max-width: 150px;" />
                        <div class="q-mt-md text-center text-black">
                            <b class="text-orange-10">Swift</b>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </q-card-section>
            <q-card-section class="bg-red-10 text-white">
                NOTA IMPORTANTE: existen muchos lenguajes de programación y al igual
                que los lenguajes hablados que conocemos, no son iguales.
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="red-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="red-10" flat @click="showNotif('right')">Continuar</q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { ref } from 'vue'


export default {
    setup() {

        const $q = useQuasar();

        const router = useRouter();

        return {
            // reproducirAudio,
            slide: ref('style'),
            showNotif(position) {
                $q.notify({
                    progress: true,
                    position,
                    message: 'Concluiste la lección de lenguajes, ¡muy bien!',
                    color: 'teal-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/6');
            },
            anterior() {
                router.replace('/4');
            },
            router
        }
    }
}
</script>
