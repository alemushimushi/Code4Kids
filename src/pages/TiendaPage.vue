<template>
    <q-page class="flex flex-center">
        <CartaAcceso v-if="!isAuthenticated" />
        <div v-else> Aqui andamos logueados </div>
    </q-page>
</template>
  
<script>
import CartaAcceso from 'src/components/CartaAcceso.vue';
import { auth } from 'src/boot/firebase';
import { useAuth } from '@vueuse/firebase';

export default {
    components: {
        CartaAcceso
    },
    setup() {
        const { isAuthenticated, user } = useAuth(auth);
        return {
            isAuthenticated, user
        }
    }
}
</script>