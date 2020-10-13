import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
import {
	BasicLayout,
	RouteView
} from '@/layouts'
const routes = [{
		path: '/',
		name: 'index',
		component: BasicLayout,
		meta: {
			title: '首页'
		},
		redirect: '/Home',
		children: [
			{
				path: '/Home',
				name: 'Home',
				redirect: '/Home',
				component: RouteView,
				meta: {
					title: '仪表盘',
					//keepAlive: true,
					//icon: bxAnaalyse
				},
				children: [{
						path: '/Home',
						name: 'Analysis',
						component: () => import('@/views/Home'),
						meta: {
							title: '分析页',
							//keepAlive: false
						}
					},
					// 外部链接
					{
						path: 'https://www.baidu.com/',
						name: 'Monitor',
						meta: {
							title: '监控页（外部）',
							target: '_blank'
						}
					}
				]
			},
		],
	},
	{

		path: '/About',
		name: 'About',
		component: BasicLayout,
		meta: {
			title: '关于'
		},
		redirect: '/About',
		children: [
			{
				path: '/About',
				name: 'About',
				redirect: '/About',
				component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
