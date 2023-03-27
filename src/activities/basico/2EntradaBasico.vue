<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-teal-8">Inicio</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="cyan-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />

            <q-parallax src="../../assets/portadaProgramacion.png" :height="300">
                <h5 class="text-white text-bold">¿QUÉ ES LA PROGRAMACIÓN?</h5>
            </q-parallax>

            <q-card-section>
                <div>
                    <q-btn push round icon="volume_up" text-color="cyan-10" size="sm" @click="reproducirAudio" />
                    En este <b>primer apartado</b> que pertenece a la
                    <b>unidad básica</b> conocerás los conceptos que
                    necesitas saber para comprender qué es la programación:
                </div>
                <q-list dense padding>
                    <q-item>
                        1. Algoritmo
                    </q-item>
                    <q-item>
                        2. Instrucción
                    </q-item>
                    <q-item>
                        3. Programación
                    </q-item>
                    <q-item>
                        4. Lenguajes de programación
                    </q-item>
                </q-list>
                <div>
                    Entonces, si más por el momento, comencemos...
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="cyan-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="cyan-10" flat @click="showNotif('right')">Continuar</q-btn>
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
                    message: '¡Listo, es momento de aprender!',
                    color: 'purple-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/3');
            },
            anterior() {
                router.replace('/1');
            },
            router
        }
    }
}
</script>
