<template>
    <q-page class="flex flex-center">
        <CartaAcceso v-if="!isAuthenticated" />
        <div v-else> Aqui andamos logueados
            <q-btn color="negative" @click="salir">Salir</q-btn>
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

        return {
            isAuthenticated,
            user,
            salir
        }
    }
}
</script>
