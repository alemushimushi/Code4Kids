<template>
    <CartaAcceso v-if="!isAuthenticated" />
    <q-page padding v-else>



        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg" :height="120">
            <h1 class="text-white">BÁSICO</h1>
        </q-parallax>
        <q-stepper v-model="step" vertical color="primary" animated>
            <q-step :name="1" title="Select campaign settings" icon="settings" :done="step > 1">
                For each ad campaign that you create, you can control how much you're willing to
                spend on clicks and conversions, which networks and geographical locations you want
                your ads to show on, and more.

                <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
            </q-step>

            <q-step :name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="step > 2">
                An ad group contains one or more ads which target a shared set of keywords.

                <q-stepper-navigation>
                    <q-btn @click="step = 4" color="primary" label="Continue" />
                    <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
            </q-step>

            <q-step :name="4" title="Create an ad" icon="add_comment">
                Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with
                your ads, find out how to tell if they're running and how to resolve approval issues.

                <q-stepper-navigation>
                    <q-btn color="primary" label="Finish" />
                    <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
            </q-step>
        </q-stepper>
    </q-page>
</template>
  
<script>
import CartaAcceso from 'src/components/CartaAcceso.vue';
import { ref } from 'vue';
import { auth } from 'src/boot/firebase';
import { useAuth } from '@vueuse/firebase';

export default {
    components: {
        CartaAcceso
    },
    setup() {
        const { isAuthenticated, user } = useAuth(auth);
        return {
            isAuthenticated, user,
            step: ref(1)
        }
    }
}
</script>