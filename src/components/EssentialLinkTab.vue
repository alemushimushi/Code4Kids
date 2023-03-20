<template>
  <q-route-tab :class="clase" :icon="icon" :name="title" :label="title" :to="link" exact />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLinkTab',
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

    clase: {
      type: String,
      default: 'text-cyan-10'
    }
  }
})
</script>
