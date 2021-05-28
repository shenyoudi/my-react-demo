import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import RouteHOC from '../../components/router'
import routers from '../../routers'
import Nav from '../Nav/Nav'

export default class Home extends Component{

	render () {
		//const list = ['list1', 'list2', 'list3']
		const getRoute = () => routers.map(({path, component, ...args}) => {
			if (path !== '/login' && path !== '/404' && path !== '/') {
				return <Route key={path} exact {...args} path={path} component={component}></Route>
			}
		})

		return (
			<div>
				<Nav></Nav>
				<Switch>
					{getRoute()}
					<RouteHOC routerConfig={routers}></RouteHOC>
				</Switch>
			</div>
		)
	}
}