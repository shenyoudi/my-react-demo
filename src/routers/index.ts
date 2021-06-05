import loadable from '@loadable/component'
import Page404 from '../views/404'


function lazyComponent (name: string) {
	return loadable(() => import(`../views/${name}/${name}.tsx`))
}

interface Router {
	path: string;
	name: string;
	component: any;
	children ?: Router[]
}

const routers: Router[] = [
	{
		path: '/',
		name: 'home',
		component: lazyComponent('Home'),
	},
	{
		path: '/page-list',
		name: 'page-list',
		component: lazyComponent('PageList'),
		children: [
			{
				path: '/',
				name: 'home',
				component: lazyComponent('Home')
			},
			{
				path: '/page0',
				name: 'page0',
				component: lazyComponent('Page0')
			},
			{
				path: '/page1',
				name: 'page1',
				component: lazyComponent('Page1'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: lazyComponent('Login'),
	},
	{
		path: '/404',
		name: '404',
		component: Page404
	}
]

export function getRouters () {
	let arr:any = []
	routers.map((router) => {
		arr.push(router)
		router.hasOwnProperty('children') 
		&&
		arr.push(...(router as any).children.map((item: Router) => {
			const path = item.path === '/' ? router.path : router.path+item.path
			return Object.assign({}, item, {path})
		}))
	})
	return arr
}

export default routers