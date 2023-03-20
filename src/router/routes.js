
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
      { path: '/chat', component: () => import('pages/VistaUsuariosActivos.vue') }
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
