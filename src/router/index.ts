import { createWebHistory, createRouter } from 'vue-router'

// import {useCounterStore} from "@/store/user"
// const userStore = useCounterStore()

import login from './models/Login'
// import Layout from './modles/Layout'

// import Login from '../view/Login/index.vue'
const routes = createRouter({
    history: createWebHistory(),
    routes: [		
        login,
        // Layout,
		{
			path:'/:catchAll(.*)',
			redirect:'/404'
		},
		{
			path:'/404',
			component:() =>import('@/views/404/index.vue')
		},
    ]
})

// // 全局守卫：登录拦截 本地没有存token,请重新登录
// routes.beforeEach((to, from, next) => {
// 	// 判断有没有登录
// 	if (!localStorage.getItem('Shoptoken')) {
// 		if (to.name == "login" || to.name == "404") {
// 			next();
// 		} else {
// 			routes.push('login')
// 		}
// 	} else {
// 		next();
// 	}
// });


export default routes
