
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: '/noticias', component: () => import('pages/noticias') },
      { path: '/listarNoticias', component: () => import('pages/listarNoticias') },
      { path: '/abreNoticia/:id/:date', component: () => import('pages/abreNoticia') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
