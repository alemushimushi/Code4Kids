<template>
    <div v-if="!isAuthenticated">
        <CartaAcceso />
    </div>
    <div v-else>
        <ChatUsuarios />
        <VistaChat />
    </div>
</template>
<script>
import { useAuth } from '@vueuse/firebase/useAuth'
import { auth } from 'src/boot/firebase';
import CartaAcceso from 'src/components/CartaAcceso.vue';
import ChatUsuarios from 'src/components/ChatUsuarios.vue';
import VistaChat from 'src/components/VistaChat.vue';

export default {
    components: {
        CartaAcceso,
        ChatUsuarios,
        VistaChat
    },
    setup() {
        const { user, isAuthenticated } = useAuth(auth);
        return {
            isAuthenticated,
            user
        }
    }
}
</script>