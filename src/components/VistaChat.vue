<template>
    <q-page-sticky position="bottom" expand class="tabs-zindex">
        <q-footer>
            <q-toolbar class="bg-grey-3 text-black row full-width">
                <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
                <q-input rounded outlined dense class="col-grow q-mr-sm" bg-color="white" v-model="message"
                    placeholder="Type a message" />
                <q-btn round flat icon="send" />
            </q-toolbar>
        </q-footer>
    </q-page-sticky>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'VistaChat',
    setup() {
        const message = ref('');
        return {
            message
        }
    }
}
</script>

<style>
.tabs-zindex {
    /* z-index: 3000; */
    margin-bottom: 20px;
}
</style>