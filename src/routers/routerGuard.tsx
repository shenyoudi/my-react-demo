import { Component } from 'react'
import {Redirect} from 'react-router-dom'
//import { RenderRoutesMap } from './router'
import {getToken} from '../utils/auth'
import Login from '@/views/Login/Login'

class RouteGuard extends Component {
	
	render () {
		const token = getToken()
		let {component: Component, routes = [], location: {pathname}, path}: any = this.props
		
		/* const isMatch = path === pathname 
										|| 
										routers.findIndex(({path: routePath}) => {
											console.log('routePath: ', routePath, ', pathname: ', pathname)
											return routePath === pathname
										}) > -1 */
		console.log(Component, pathname, path)								
		//if (token)
			if (pathname === '/')
				return <Redirect to='/page-list/page0' />	
			else
				return (
					Component.render 
					? Component.render({...this.props, routes}) 
					: <Component {...this.props} routes={routes} />
				)
		//else
			//return <Login></Login>
	}
}

export default RouteGuard