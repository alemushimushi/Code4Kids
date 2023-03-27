<template>
    <q-page class="flex flex-center">
        <q-card class="my-card" style="width:280px;">
            <div class="text-center">
                <img src="../assets/logo-code-for-kids.svg" style="width:200px; height: 200px;">

            </div>
            <q-card-section class="text-justify">
                <div class="text-h5 text-center">Ups!</div>
                <div class="text-center">Al parecer no estás conectado. Inicia sesión para continuar con el curso.</div>
            </q-card-section>
            <q-list>
                <q-item clickable to="/acceso" exact>
                    <q-item-section avatar>
                        <q-icon color="teal-10" name="logout" size="md" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>Inicia sesión</q-item-label>
                        <q-item-label caption>Ingresa o crea una cuenta.</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable to="/temario" exact>
                    <q-item-section avatar>
                        <q-icon color="red" name="menu_book" size="md" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>Ver temario</q-item-label>
                        <q-item-label caption>Dale un vistazo al contenido.</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable to="/contacto" exact>
                    <q-item-section avatar>
                        <q-icon color="amber" name="connect_without_contact" size="md" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>Contactos</q-item-label>
                        <q-item-label caption>¿Quieres contactarnos?</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </q-page>
</template>
<script>
export default {
    name: 'CartaAcceso',
    setup() {
        return {

        }
    }
}
</script>