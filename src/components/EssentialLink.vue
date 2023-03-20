<template>
  <q-item clickable :active-class="claseActivada" :to="link" exact>
    <q-item-section v-if="icon" avatar>
      <q-avatar :icon="icon" :color="color" text-color="white" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    claseActivada: {
      type: String,
      default: ''
    },

    clase: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: ''
    }
  }
})
</script>
