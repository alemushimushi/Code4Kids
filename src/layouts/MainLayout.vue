<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar style="height:70px;">
        <q-btn push dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" color="white" text-color="black"
          size="lg" />

        <q-toolbar-title class="text-black text-center">
          Code4Kids
        </q-toolbar-title>


        <div class=" q-gutter-lg">
          <q-btn rounded push dense icon="favorite" color="white" text-color="red-10" size="lg">{{ !isAuthenticated ? '0'
            : 'aqui hay vidas' }}</q-btn>

          <q-btn rounded push dense icon="star" color="white" text-color="yellow-14" size="lg">{{ !isAuthenticated ? '0' :
            'Aqui hay estrellas' }}</q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above elevated>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{ isAuthenticated ? user.email : 'Aún no estas conectado!' }}</div>
          <div>{{ isAuthenticated ? user.email : 'tucorreo@gmail.com' }}</div>
        </div>
      </q-img>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list>
          <q-item-label header>
            RECURSOS
          </q-item-label>

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

          <q-item-label header>
            VER MÁS
          </q-item-label>

          <EssentialLink v-for="link in essentialLinksTwo" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <KeepAlive>
        <router-view />
      </KeepAlive>
    </q-page-container>

    <q-footer elevated v-if="$q.platform.is.android || $q.platform.is.desktop" style="height:70px;">

      <q-tabs switch-indicator dense align="center" class="bg-white" style="height:70px;">
        <EssentialLinkTab v-for="link in essentialLinks" :key="link.title" v-bind="link" />

        <q-btn-dropdown auto-close stretch flat label="" class="text-grey-10" dropdown-icon="more_horiz">
          <q-list>
            <EssentialLink v-for="link in essentialLinksTwo" :key="link.title" v-bind="link" />
          </q-list>
        </q-btn-dropdown>

      </q-tabs>

    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import EssentialLinkTab from 'src/components/EssentialLinkTab.vue'
import { useQuasar } from 'quasar'

import { useAuth } from '@vueuse/firebase/useAuth'
import { auth, db } from 'src/boot/firebase'

const linksList = [
  {
    title: 'Curso',
    icon: 'school',
    //caption: '¡Lecturas, juegos, imágenes y más!',
    link: '/',
    claseActivada: 'bg-pink-10 text-white ',
    clase: 'text-pink-10',
    color: 'pink-10'
  },
  {
    title: 'Tienda',
    icon: 'store',
    //caption: '¿Más monedas? Cómpralas aquí',
    link: '/tienda',
    claseActivada: 'text-white bg-red-10',
    clase: 'text-red-10',
    color: 'red-10'
  },
  {
    title: 'Blogs',
    //caption: 'Las últimas notas de la web',
    icon: 'auto_stories',
    link: '/blogs',
    claseActivada: 'text-white bg-teal-9',
    clase: 'text-teal-9',
    color: 'teal-9'
  },
  {
    title: 'Perfil',
    //caption: 'Personaliza tu perfil',
    icon: 'person',
    link: '/perfil',
    claseActivada: 'text-white bg-cyan-9',
    clase: 'text-blue-9',
    color: 'cyan-9'
  }
]

const linksListTwo = [
  {
    title: 'Temario',
    //caption: 'Todo sobre este gran curso',
    icon: 'format_list_bulleted',
    link: '/temario',
    claseActivada: 'text-white bg-green-10',
    clase: 'text-green-10',
    color: 'green-10'
  },
  {
    title: 'Acerca',
    //caption: 'Conoce más sobre este proyecto',
    icon: 'help',
    link: '/acerca',
    claseActivada: 'text-white bg-purple-10',
    clase: 'text-purple-10',
    color: 'purple-10'
  },
  {
    title: 'Contacto',
    //caption: '¿Te interesaría hablar con nosotros?',
    icon: 'contacts',
    link: '/contacto',
    claseActivada: 'text-white bg-light-blue-10',
    clase: 'text-light-blue-10',
    color: 'light-blue-10'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    EssentialLinkTab
  },

  setup() {
    const $q = useQuasar()

    // showing an example on a method, but
    // can be any part of Vue script
    function show() {
      // prints out Quasar version
      console.log($q.version)
    }

    const leftDrawerOpen = ref(false)

    const { isAuthenticated, user } = useAuth(auth)

    const datosUsuario = () => {
      db.collection('usuarios').doc(user.value.uid).get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        })
    }

    return {
      show,
      essentialLinksTwo: linksListTwo,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      isAuthenticated,
      user,
      datosUsuario
    }
  }
})
</script>
