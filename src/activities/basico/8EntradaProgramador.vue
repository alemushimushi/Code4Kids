<template>
    <q-page padding class="text-justify">
        <q-card bordered>
            <q-card-section>
                <div class="row">
                    <div class="col-10">
                        <p class="text-h5 text-bold text-amber-10">Aplicaciones de la programación</p>
                    </div>
                    <div class="col-2">
                        <div class="text-right">
                            <q-btn round push icon="close" color="amber-10" to="/" exact />
                        </div>
                    </div>
                </div>
            </q-card-section>
            <q-separator />

            <q-parallax src="../../assets/programador.png" :height="200">
                <h5 class="text-white text-bold">¿QUÉ PUEDO CREAR?</h5>
            </q-parallax>

            <q-card-section>
                <div class="row q-col-gutter-md">
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert1 = true">
                                    <q-avatar color="amber-8" text-color="white">
                                        <q-icon size="sm" name="sports_esports" />
                                    </q-avatar>
                                </q-btn>
                                Videojuegos
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert2 = true">
                                    <q-avatar color="red-8" text-color="white">
                                        <q-icon size="sm" name="smart_toy" />
                                    </q-avatar>
                                </q-btn>
                                Inteligencia artificial
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert3 = true">
                                    <q-avatar color="amber-8" text-color="white">
                                        <q-icon size="sm" name="smartphone" />
                                    </q-avatar>
                                </q-btn>
                                App movil
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert4 = true">
                                    <q-avatar color="red-8" text-color="white">
                                        <q-icon size="sm" name="language" />
                                    </q-avatar>
                                </q-btn>
                                App web
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
                <br />
                <div class="row q-col-gutter-md">
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert5 = true">
                                    <q-avatar color="amber-8" text-color="white">
                                        <q-icon size="sm" name="tv" />
                                    </q-avatar>
                                </q-btn>
                                IoT
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert6 = true">
                                    <q-avatar color="red-8" text-color="white">
                                        <q-icon size="sm" name="devices" />
                                    </q-avatar>
                                </q-btn>
                                OS
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn flat round @click="alert7 = true">
                                    <q-avatar color="amber-8" text-color="white">
                                        <q-icon size="sm" name="desktop_windows" />
                                    </q-avatar>
                                </q-btn>
                                Desktop
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <q-card bordered flat class="text-center">
                            <q-card-section avatar class="text-bold">
                                <q-btn round flat @click="alert8 = true">
                                    <q-avatar color="red-8" text-color="white">
                                        <q-icon size="sm" name="settings_input_component" />
                                    </q-avatar>
                                </q-btn>
                                Circuitos
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-card-section>

            <q-card-section class="text-white bg-amber-10 text-center">
                * Da click al icono para más información
            </q-card-section>

            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col text-left">
                        <q-btn class="text-bold" text-color="amber-10" flat @click="anterior">Anterior</q-btn>
                    </div>
                    <div class="col text-right">
                        <q-btn class="text-bold" text-color="amber-10" flat @click="showNotif('right')">Continuar</q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>


        <q-dialog v-model="alert1">
            <q-card>
                <q-card-section class="bg-amber-8">
                    <div class="text-h6 text-white">Videojuegos</div>
                </q-card-section>
                <q-card-section>
                    Puedes crear juegos para consolas xbox, playstation,
                    smartphone o para escritorio, como Mario Bros, Fifa,
                    The last of us, Halo, Gears of wars, etc.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="amber-8" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert2">
            <q-card>
                <q-card-section class="bg-red-10">
                    <div class="text-h6 text-white">Inteligencia artificial</div>
                </q-card-section>
                <q-card-section>
                    Puedes automatizar procesos o crear bots que
                    hagan cosas por ti, por ejemplo Alexa de Amazon,
                    ChartGPT, Google assistant, Lents
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="red-8" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert3">
            <q-card>
                <q-card-section class="bg-amber-8">
                    <div class="text-h6 text-white">Aplicaciones móviles</div>
                </q-card-section>
                <q-card-section>
                    Estas están destinadas a los smartphones principalmente,
                    por ejemplo Facebook, Whatsapp, Gmail, Galerías, entre muchas más.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="amber-8" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert4">
            <q-card>
                <q-card-section class="bg-red-10">
                    <div class="text-h6 text-white">Aplicaciones web</div>
                </q-card-section>
                <q-card-section>
                    Son aplicaciones que se ejecutan en el navegador
                    y no solo puedes crear sitios web,
                    también puedes crear aplicaciones web como las plataformas
                    de Netflix, Crunchyroll, Canva, iLovePDF, Traductor de Google, etc.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="red-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert5">
            <q-card>
                <q-card-section class="bg-amber-10">
                    <div class="text-h6 text-white">Internet de las cosas</div>
                </q-card-section>
                <q-card-section>
                    Esta parte está en gran crecimiento, por ejemplo los
                    televisores inteligentes, relojes y electrodomesticos
                    que se conectan a la red.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="amber-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert6">
            <q-card>
                <q-card-section class="bg-red-10">
                    <div class="text-h6 text-white">Sistemas operativos</div>
                </q-card-section>
                <q-card-section>
                    Se encarga de mover todo el apartado lógico de
                    un dispositivo y que así podamos utilizar otras
                    aplicaciones. Ejemplo de ello es Windows, Linux,
                    IOS, Android, WebOS, entre otros.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="red-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert7">
            <q-card>
                <q-card-section class="bg-amber-10">
                    <div class="text-h6 text-white">Aplicaciones de escritorio</div>
                </q-card-section>
                <q-card-section>
                    Son aquellas que se ejecutan en un computador, por ejemplo,
                    la paquetería de ofimática de Office, Chrome, Visual Studio,
                    Android Studio, etc.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="amber-10" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="alert8">
            <q-card>
                <q-card-section class="bg-red-10">
                    <div class="text-h6 text-white">Circuitos</div>
                </q-card-section>
                <q-card-section>
                    Son programas de bajo nivel a los cuales se le
                    agregan a varios circuitos integrados para que
                    realicen una función concreta, por ejemplo, la
                    BIOS.
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="OK" text-color="red-10" v-close-popup />
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

        const $q = useQuasar();

        const router = useRouter();

        return {
            alert1: ref(false),
            alert2: ref(false),
            alert3: ref(false),
            alert4: ref(false),
            alert5: ref(false),
            alert6: ref(false),
            alert7: ref(false),
            alert8: ref(false),
            // reproducirAudio,

            showNotif(position) {
                $q.notify({
                    progress: true,
                    position,
                    message: 'Espero tus dudas se hayan despejado, ¡Continua!',
                    color: 'green-10',
                    textColor: 'white',
                }, 1000)
                router.replace('/9');
            },
            anterior() {
                router.replace('/7');
            },

            router
        }
    }
}
</script>
