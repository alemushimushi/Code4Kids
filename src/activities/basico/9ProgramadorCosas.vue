<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-green-10">¿Qué necesita un programador?</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="green-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="bg-green-8">
                <p class="text-white text-center">Por favor, da click en los siguientes botones para ver la información que
                    contiene:
                </p>
                <div class="row q-col-gutter-md">
                    <div class="col text-center">
                        <q-btn round push size="20px" color="white" text-color="green-10" label="1"
                            @click="alert1 = true" />
                    </div>
                    <div class="col text-center">
                        <q-btn round push size="20px" color="white" text-color="green-10" label="2"
                            @click="alert2 = true" />
                    </div>
                    <div class="col text-center">
                        <q-btn round push size="20px" color="white" text-color="green-10" label="3"
                            @click="alert3 = true" />
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="green-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="green-10" flat @click="showNotif('right')">Continuar</q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>

        <q-dialog v-model="alert1">
            <q-card>
                <q-card-section class="bg-light-green-10">
                    <div class="text-h6 text-white">Conocimiento</div>
                </q-card-section>
                <q-card-section>
                    Aunque sea obvio, debes tener conocimientos de programación. Algunas
                    de ellas pueden ser el <b>conocimiento de algún lenguaje</b>, <b>uso de algún IDE</b>,
                    <b>redes informáticas</b>, entre otros conocimientos.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="light-green-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert2">
            <q-card>
                <q-card-section class="bg-green-10">
                    <div class="text-h6 text-white">Análisis y lógica</div>
                </q-card-section>
                <q-card-section>
                    El hecho de solamente querer realizar un programa no es suficiente.
                    Debes tener la <b>capacidad de razonar de forma analítica y lógica</b> para
                    crear los pasos a seguir que te llevarán a la solución.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="green-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert3">
            <q-card>
                <q-card-section class="bg-light-green-10">
                    <div class="text-h6 text-white">Prestar atención</div>
                </q-card-section>
                <q-card-section>
                    En programación, un solo <b>error de lógica o en la escritura</b>
                    de tu programa, ¡puede hacer que no funcione!. Debes ser <b>cuidadoso</b>
                    y prestar mucha atención a los detalles para evitar los errores.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="light-green-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

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
            alert1: ref(false),
            alert2: ref(false),
            alert3: ref(false),
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
