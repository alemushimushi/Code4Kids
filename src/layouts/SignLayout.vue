<template>
    <q-layout view="lHr lpR lFr">
        <q-page-container>
            <q-page class="flex flex-center bg-granadiente" padding>
                <VistaAcceso />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import VistaAcceso from 'src/components/VistaAcceso.vue';

export default {
    components: {
        VistaAcceso
    },
    setup() {
        return {

        }
    }
}
</script>


<style>
.bg-granadiente {
    background: linear-gradient(217deg,
            rgba(255, 0, 0, 0.8),
            rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
}
</style>

