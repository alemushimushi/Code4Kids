
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CursoPage.vue') },
      { path: '/perfil', component: () => import('pages/PerfilPage.vue') },
      { path: '/acerca', component: () => import('pages/AcercaPage.vue') },
      { path: '/blogs', component: () => import('pages/BlogsPage.vue') },
      { path: '/contacto', component: () => import('pages/ContactoPage.vue') },
      { path: '/temario', component: () => import('pages/TemarioPage.vue') },
      { path: '/tienda', component: () => import('pages/TiendaPage.vue') },
      { path: '/chat', component: () => import('pages/VistaUsuariosActivos.vue') },



      { path: '/1', component: () => import('../activities/basico/1IntroduccionBasico.vue') },
      { path: '/2', component: () => import('../activities/basico/2EntradaBasico.vue') },
      { path: '/3', component: () => import('../activities/basico/3ConceptosBasico.vue') },
      { path: '/4', component: () => import('../activities/basico/4ConceptosAlgoritmo.vue') },
      { path: '/5', component: () => import('../activities/basico/5ConceptosLenguaje.vue') },
      { path: '/6', component: () => import('../activities/basico/6ConceptosProgramacion.vue') },
      { path: '/7', component: () => import('../activities/basico/7JuegoUno.vue') },
      { path: '/8', component: () => import('../activities/basico/8EntradaProgramador.vue') },
      { path: '/9', component: () => import('../activities/basico/9ProgramadorCosas.vue') },
    ]
  },

  {
    path: '/acceso',
    name: 'acceso',
    component: () => import('layouts/SignLayout.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
