import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ServicesView from '../views/ServicesView.vue'
import TeamView from '../views/TeamView.vue'
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: '/about',
                    name: 'about',
                    component: AboutView
                },
                {
                    path: '/products',
                    name: 'products',
                    component: ProductsView
                },
                {
                    path: '/services',
                    name: 'services',
                    component: ServicesView
                },
                {
                    path: '/team',
                    name: 'team',
                    component: TeamView
                }
            ],
        }
    ]
})

export default router
