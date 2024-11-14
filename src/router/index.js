import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'
import {auth} from '@/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistroView.vue'),
    },    
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue'),
      meta: {
        login: true
      },    
    },
  ],
})

router.beforeEach((to, from, next) => {
const authRequired = to.meta.login
const isAuthenticated = auth.currentUser !== null //Verificar si el usuario esta registrado

//La ruta necesita autenticación
if (authRequired && !isAuthenticated) {
  next({name: 'home'}) //redirecciona a home
  // router.push('/') no sirve es de una versión mas antigua
}  
else next()
})

export default router
