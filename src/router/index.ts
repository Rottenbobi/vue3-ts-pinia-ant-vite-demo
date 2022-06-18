import { createWebHistory, createRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import { Layoutstore } from '@/state/Layout'
import * as LayoutD from '@/dts/Layout.D'

// import {useCounterStore} from "@/store/user"
// const userStore = useCounterStore()

import login from './models/Login'
import Layout from './models/Layout'

// import Login from '../view/Login/index.vue'
const routes = createRouter({
	history: createWebHistory(),
	routes: [
		login,

	]
})

// // 全局守卫：登录拦截 本地没有存token,请重新登录
routes.beforeEach(async (to, from, next) => {
	// 判断有没有登录
	if (!localStorage.getItem('CRMtoken')) {
		if (to.name == "login" || to.name == "404") {
			next();
		} else {
			routes.push('login')
		}
	} else {
		const LayoutS = Layoutstore()
		const getRouters = async () => {
			try {
				const res = await LayoutS.getRouters()
				// console.log(res);
				// routerList.value = res.data.data
				if (LayoutS.routerList.length > 0) return next()
				LayoutS.SetrouterList(res.data.data)
				// console.log(routerList.value );
				LayoutS.routerList.forEach(item => {
					if (item.children) {
						item.children.forEach((child: LayoutD.IrouterList) => {
							Layout.children.push({
								path: `/${child.path}`,
								component: defineAsyncComponent(() => import(/* @vite-ignore */`@/views/${child.component}`)),//vue3 必须使用defineAsyncComponent
								name: child.name,
							})
						})

					}
				})
				routes.addRoute("layout", Layout as any)
				routes.addRoute('1', {
					path: '/:catchAll(.*)',
					redirect: '/404'
				})
				routes.addRoute('404', {
					path: '/404',
					component: () => import('@/views/404/index.vue')
				})
				// {
				// 	path: '/:catchAll(.*)',
				// 	redirect: '/404'
				// },
				// {
				// 	path: '/404',
				// 	component: () => import('@/views/404/index.vue')
				// },


			} catch (error) {

			}
		}
		await getRouters()
		next(to.path) // to.path 路由已知缺陷 动态路由必须next(to.path) 但是加上就会触发递归照成的死循环



	}

});


export default routes
