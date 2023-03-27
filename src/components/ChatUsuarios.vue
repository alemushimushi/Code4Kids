<template>
    <q-page-sticky position="top" expand class="tabs-zindex">
        <q-tabs v-model="uidSeleccionado" inline-label outside-arrows mobile-arrows
            class="bg-primary text-white shadow-2 full-width">
            <q-tab v-for="user in arraySinUser" :key="user.iud" :name="user.iud" icon="account_circle" :label="user.email"
                :class="user.estado ? 'text-white' : 'text-grey'" />
        </q-tabs>
    </q-page-sticky>
</template>
<script>
import { computed, ref } from 'vue';
import { db } from 'src/boot/firebase';
import { useAuth } from '@vueuse/firebase/useAuth';
import { auth } from 'src/boot/firebase';

export default {
    name: 'ChatUsuarios',
    setup() {
        const uidSeleccionado = ref('emails0');
        const users = ref([]);
        const { user } = useAuth(auth);

        db.collection("usuarios").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("Usuario nuevo: ", change.doc.data());
                    users.value = [...users.value, change.doc.data()];
                    users.value = users.value.sort((a, b) => b.estado - a.estado);
                }
                if (change.type === "modified") {
                    console.log("Usuario modificado: ", change.doc.data());
                    users.value = users.value.map(user =>
                        user.uid === change.doc.data().uid
                            ? { ...user, estado: change.doc.data().estado }
                            : user
                    );
                }
                if (change.type === "removed") {
                    console.log("Usuario removido: ", change.doc.data());
                }
            });
        });

        const arraySinUser = computed(() => {
            return users.value.filter(item => item.uid !== user.value.uid)
        })

        return {
            uidSeleccionado,
            arraySinUser,
        }
    }
}
</script>
<style>
.tabs-zindex {
    z-index: 2000;
}
</style>