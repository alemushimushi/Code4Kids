<template>
    <q-page padding>
        <CartaAcceso v-if="!isAuthenticated" />
        <div v-else>
            <h5 class="text-center text-bold">Perfil</h5>
            <q-card bordered>
                <q-card-section>
                    <div class="text-center text-bold" style="font-size: large;">Datos del usuario</div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                    <div class="row q-col-gutter-md">
                        <div class="col-8 col-xs-8 col-md-8 col-lg-8 col-xl-8">
                            <p class="text-bold" style="font-size: large">NombreDelUsuario</p>
                            <p><b>Fecha de registro:</b> fecha/fecha/fecha</p>
                            <p><b>Correo:</b> email@ejemplo.com</p>
                            <div class="row q-col-gutter-md">
                                <div class="col">
                                    <q-btn icon="edit" class="full-width" push color="cyan-10" @click="editar">Editar
                                        perfil</q-btn>
                                </div>
                                <div class="col">
                                    <q-btn icon="logout" class="full-width" push color="negative"
                                        @click="salir">Salir</q-btn>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 col-xs-4 col-md-4 col-lg-4 col-xl-4">

                            <div>
                                <q-avatar size="80px" class="q-mb-sm">
                                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                    <div class="text-center text-bold" style="font-size: large;">Estadísticas</div>
                </q-card-section>
                <q-separator />
                <q-card-section>
                    <div class="row q-col-gutter-md">
                        <div class="col">

                            <b>Estrellas: </b><q-btn rounded push dense icon="star" color="white" text-color="yellow-14"
                                size="lg">{{
                                    !isAuthenticated
                                    ? '0' :
                                    '6' }}</q-btn>
                        </div>
                        <div class="col">
                            <b>Vidas: </b><q-btn rounded push dense icon="favorite" color="white" text-color="red-10"
                                size="lg">{{
                                    !isAuthenticated ? '0'
                                    : '20' }}</q-btn>


                        </div>
                        <div class="col">
                            <b>Puntos: </b><q-btn rounded push dense icon="timeline" color="white" text-color="cyan-10"
                                size="lg">{{
                                    !isAuthenticated ? '0'
                                    : '20522' }}</q-btn>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>


    </q-page>
</template>
<script>
import CartaAcceso from 'src/components/CartaAcceso.vue';
import { useAuth } from '@vueuse/firebase/useAuth'
import { auth } from 'src/boot/firebase'
import { useRouter } from 'vue-router';
import { db } from 'src/boot/firebase';

export default {
    components: {
        CartaAcceso
    },
    setup() {
        const { isAuthenticated, user } = useAuth(auth);

        const router = useRouter();

        const salir = async () => {
            try {
                await db.collection('usuarios').doc(user.value.uid).update({
                    estado: false
                });
                await auth.signOut();
                console.log("ya te saliste, adios");
                router.replace('/acceso');
            } catch (error) {
                console.log(error);
            }
        };

        const editar = () => {
            console.log("Editando");
        }

        return {
            isAuthenticated,
            user,
            salir,
            editar
        }
    }
}
</script>
