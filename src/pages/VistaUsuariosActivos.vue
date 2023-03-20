<template>
    <q-page>
        <div v-if="!isAuthenticated">
            <CartaAcceso />
        </div>
        <div v-else>
            <q-tabs v-model="tab" inline-label outside-arrows mobile-arrows class="bg-primary text-white shadow-2">
                <q-tab name="mails" icon="mail" label="Mails" />
                <q-tab name="alarms" icon="alarm" label="Alarms" />
                <q-tab name="movies" icon="movie" label="Movies" />
                <q-tab name="photos" icon="photo" label="Photos" />
                <q-tab name="videos" icon="slow_motion_video" label="Videos" />
                <q-tab name="addressbook" icon="people" label="Address Book" />
            </q-tabs>
        </div>
    </q-page>
</template>
<script>
import { ref } from 'vue'
import { useAuth } from '@vueuse/firebase/useAuth'
import { auth } from 'src/boot/firebase';
import CartaAcceso from 'src/components/CartaAcceso.vue';

export default {
    components: {
        CartaAcceso
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