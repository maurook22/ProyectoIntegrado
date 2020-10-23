import { createWebHistory, createRouter } from 'vue-router'

import Productos from '../components/Productos.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/productos', name: 'Productos', component: Productos}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router