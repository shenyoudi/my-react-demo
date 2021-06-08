import loadable from '@loadable/component'
import Page404 from '../views/404'


function lazyComponent (name: string) {
	return loadable(() => import(`../views/${name}/${name}.tsx`))
}

interface Router {
	path: string;
	name: string;
	component: any;
	exact ?: boolean;
	routes ?: Router[]
}

const routers: Router[] = [
	/*{
		path: '/',
		name: 'home',
		exact: true,
		component: lazyComponent('Home'),
		 routes: [
			{
				path: '/page0',
				name: 'page0',
				exact: true,
				component: lazyComponent('Page0')
			},
			{
				path: '/page1',
				name: 'page1',
				exact: true,
				component: lazyComponent('Page1'),
			}
		] 
	},*/
	{
		path: '/page-list',
		name: 'page-list',
		component: lazyComponent('PageList'),
		routes: [
			{
				path: '/page-list/page0',
				name: 'page0',
				exact: true,
				component: lazyComponent('Page0')
			},
			{
				path: '/page-list/page1',
				name: 'page1',
				exact: true,
				component: lazyComponent('Page1'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		exact: true,
		component: lazyComponent('Login'),
	},
	{
		path: '/404',
		name: '404',
		exact: true,
		component: Page404
	}
]

export default routers