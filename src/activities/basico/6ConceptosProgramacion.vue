<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-teal-10">Programación</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="teal-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="text-white text-center text-italic bg-teal-10">
                Es el arte de limpiar, codificar, trazar y proteger el código...
            </q-card-section>
            <q-card-section>

                <h5 class="text-teal-10">Sobre su concepto</h5>
                <p>
                    <q-btn push round icon="volume_up" text-color="teal-10" size="sm" @click="reproducirAudio" />

                    La acción de programar implicar <b> ordenar, estructurar y
                        componer</b> una serie de acciones para resolver un problema
                    o cumplir un objetivo. Detrás de cada programa informático
                    que usamos en nuestra vida, existe un proceso para
                    poder crearlos y que hagan ciertas acciones, por ejemplo:
                </p>

                <div class="row q-col-gutter-md">
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="chat" />
                                </q-avatar>
                                Enviar un mensaje
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="photo_camera" />
                                </q-avatar>
                                Tomar una foto
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="call" />
                                </q-avatar>
                                Llamar a alguien
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="share_location" />
                                </q-avatar>
                                Ubicarnos con el GPS
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <br />
                <div class="row q-col-gutter-md">
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="badge" />
                                </q-avatar>
                                Ver nuestro perfil
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="shopping_cart" />
                                </q-avatar>
                                Comprar en línea
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="open_in_full" />
                                </q-avatar>
                                Abrir una aplicación
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-avatar color="teal-8" text-color="white">
                                    <q-icon name="password" />
                                </q-avatar>
                                Iniciar sesión
                            </q-card-section>
                        </q-card>
                    </div>
                </div>

            </q-card-section>
            <q-card-section class="text-white bg-teal-10">
                El <b>objetivo final</b> de programar es la de crear
                un software (nuestro programa informático), el cual será
                ejecutado de manera directa por un dispositivo digital
                para realizar las labores para las cuales fue diseñado.
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="teal-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="teal-10" flat @click="showNotif('right')">Continuar</q-btn>
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
                    message: '¡Buen trabajo!, continua esforzandote...',
                    color: 'light-blue-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/7');
            },
            anterior() {
                router.replace('/5');
            },

            router
        }
    }
}
</script>
