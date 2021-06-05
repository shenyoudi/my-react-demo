import {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getToken} from '../utils/auth'


export default class RouteHOC extends Component <any>{
	render () {
		console.log('props', this.props)
		const { routerConfig, location: { pathname } } = this.props
		const token = getToken()
		const targetRouterConfig = routerConfig.find(
      (item: any) => {
				return item.path.replace(/\s*/g,"") === pathname
			}
		)
		console.log(targetRouterConfig)

		if (token)
			if (pathname === '/login')
				return <Redirect to='/page-list' />
			else if (pathname === '/')
				return <Redirect to='/page-list' />
			else if (targetRouterConfig)
				return <Route exact path={pathname} component={targetRouterConfig.component}></Route>
			else if (pathname.includes('/page-list'))
				return <Redirect to={pathname} />
			else
				return <Redirect to='/404' />
		
		else if (targetRouterConfig)
			return <Redirect to='/login' />

		else
			return <Redirect to='/404'/>
	}
}