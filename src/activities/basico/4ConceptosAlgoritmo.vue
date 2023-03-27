<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-green-10">Algoritmos</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="green-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <h5 class="text-green-10">¿Qué es un algoritmo?</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="green-10" size="sm" @click="reproducirAudio" />
                    Un <b>algoritmo informático</b> es un conjunto de instrucciones
                    definidas, ordenadas y tienen como fin resolver un problema, calcular
                    algo o hacer una tarea.
                </p>
            </q-card-section>
            <q-card-section class="text-white bg-green-10">

                Ahora, <b>¿Sabes por qué es importante un algoritmo?</b> porque
                debemos hacerlos para poder programar. Primero
                debemos obtener la solución del problema para luego escribir el código.
            </q-card-section>
            <q-card-section>
                <h5 class="text-green-10">Partes de un algoritmo</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="green-10" size="sm" @click="reproducirAudio" />
                    El algoritmo se compone de 3 partes:
                </p>
                <q-list dense>
                    <q-item>
                        1. <b>Entrada(input):</b> es la información con la que vamos
                        a trabajar para obtener la solución esperada.
                    </q-item>
                    <q-item>
                        2. <b>Proceso: </b> son los pasos que nos llevarán a la solución.
                    </q-item>
                    <q-item>
                        3. <b>Salida(output): </b> es el resultado.
                    </q-item>
                </q-list>
                <h5 class="text-green-10">Características de los algoritmos</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="green-10" size="sm" @click="reproducirAudio" />
                    Los algoritmos deben tener las siguientes características:
                </p>
                <q-list dense>
                    <q-item>
                        - <b>Precisos: </b> son claros, cumplen con un objetivo específico.
                    </q-item>
                    <q-item>
                        - <b>Ordenados: </b> tienen una secuencia clara para llegar a la solución.
                    </q-item>
                    <q-item>
                        - <b>Finitos: </b> el número de pasos a realizar están definidos.
                    </q-item>
                    <q-item>
                        - <b>Concretos: </b> la solución a la que se pretende llegar debe estar calculada.
                    </q-item>
                    <q-item>
                        - <b>Definidos: </b> el algoritmo debe dar el mismo resultado al recibir la misma entrada.
                    </q-item>
                </q-list>
                <div class="text-center">
                    <br />
                    <q-img src="../../assets/algoritmo.png" style="width: 100%; max-width: 400px;" />
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
    </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';

export default {
    setup() {

        const $q = useQuasar();
        const router = useRouter();

        return {
            // reproducirAudio,

            showNotif(position) {
                $q.notify({
                    progress: true,
                    position,
                    message: 'Concluiste la lección de algoritmos. ¡Felicidades!',
                    color: 'red-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/5');
            },
            anterior() {
                router.replace('/3');
            },

            router
        }
    }
}
</script>
