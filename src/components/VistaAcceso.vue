<template>
    <q-card bordered>
        <div class="flex flex-center">
            <q-img src="../assets/logo-code-for-kids.svg" width="200px" height="200px" />
        </div>
        <q-card-section>
            <q-btn fab color="pink-10" icon="volume_up" class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);" />
            <br />

            <pre>{{ isAuthenticated }}</pre>
            <q-form @submit.prevent="procesarFormulario" @reset="onReset" class="q-gutter-md" action="/dashboard">

                <h5 class="text-center text-grey-8">{{ acceder ? 'INICIO DE SESIÓN' : 'REGISTRO' }}</h5>

                <q-input v-model="email" standout="bg-teal text-white" label="Email" type="email"
                    hint="Ejemplo: nombreuser@gmail.com" lazy-rules
                    :rules="[val => val && val.length > 0 || 'El email es obligatorio', (val, rules) => rules.email(val) || 'Ingresa un correo válido']">
                    <template v-slot:append>
                        <q-icon name="email" />
                    </template>
                </q-input>

                <q-input v-model="password" standout="bg-teal text-white" :type="isPwd ? 'password' : 'text'"
                    label="Contraseña" hint="Ejemplo: Bbc1tA_br" lazy-rules
                    :rules="[val => val.length >= 8 && val.length <= 30 || 'Escribe un password de 8 - 30 caracteres']">
                    <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                            @click="isPwd = !isPwd" />
                    </template>
                </q-input>

                <div class="text-center">
                    <q-btn-group push>
                        <q-btn v-if="!acceder" push type="submit" label="Registrate" color="teal-10" icon="check_circle" />
                        <q-btn v-else push type="submit" label="Ingresar" color="teal-10" icon="check_circle" />
                        <q-btn push type="reset" label="Cancelar" color="red-10" icon="cancel" />
                    </q-btn-group>
                </div>

                <div class="text-center">
                    <q-btn v-if="!acceder" @click="acceder = true" text-color="grey-8" flat size="sm">¿Ya tienes una
                        cuenta?</q-btn>
                    <q-btn v-else @click="acceder = false" text-color="grey-8" flat size="sm">¿No tienes una
                        cuenta?</q-btn>
                </div>
            </q-form>

        </q-card-section>
    </q-card>
</template>

<script>
import { ref } from 'vue'
import { auth } from 'src/boot/firebase';
import { useAuth } from '@vueuse/firebase/useAuth';
import { useRouter } from 'vue-router';
import { db } from 'src/boot/firebase';

export default {
    name: 'VistaAcceso',
    setup() {
        const email = ref('');
        const password = ref('');

        const acceder = ref(true);

        const { isAuthenticated, user } = useAuth(auth);

        const onReset = () => {
            email.value = '';
            password.value = '';
        }

        const router = useRouter();

        const numeroRandom = (max) => {
            return Math.floor(Math.random() * max);
        };

        const username = 'user' + numeroRandom(100000);

        const procesarFormulario = async () => {
            try {

                if (!acceder.value) {
                    // registrarse
                    const usuario = await auth.createUserWithEmailAndPassword(email.value, password.value);
                    console.log(usuario.user);
                    console.log("usuario Creado");

                    await db.collection('usuarios').doc(usuario.user.uid).set({
                        uid: usuario.user.uid,
                        email: usuario.user.email,
                        username: username,
                        estado: true,
                        estrellas: 0,
                        corazones: 10,
                        puntaje: 0
                    });

                    router.replace('/');
                } else {
                    // login
                    const usuario = await auth.signInWithEmailAndPassword(email.value, password.value);
                    console.log(usuario.user);
                    console.log("usuario logueado");

                    await db.collection('usuarios').doc(usuario.user.uid).update({
                        estado: true
                    });

                    router.replace('/');
                }

            } catch (error) {
                console.log(error);
            }
        };

        return {

            // Variable del campo del ojito del password
            isPwd: ref(true),
            // Retorno de variables del documento
            email,
            password,
            procesarFormulario,
            onReset,
            acceder,

            isAuthenticated, user,
        }
    }
}
</script>