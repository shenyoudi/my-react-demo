import loadable from '@loadable/component'
import Page404 from '../views/404'


interface LazyComponent {
	(name: string): () => void
}

interface Router {
	path: string;
	component: any;
	children?: Router[];
}

function lazyComponent (name: string) {
	return loadable(() => import(`../views/${name}/${name}.tsx`))
}

const routers: Router[] = [
	{
		path: '/',
		component: lazyComponent('Home')
	},
	{
		path: '/page',
		component: lazyComponent('Page'),
		children: [
			{
				path: '/page/page1',
				component: lazyComponent('Page1')
			},
		]
	},
	{
		path: '/login',
		component: lazyComponent('Login')
	},
	{
		path: '/404',
		component: Page404
	}
]

export default routers