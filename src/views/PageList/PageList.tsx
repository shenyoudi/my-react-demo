import {Component} from 'react'
import Nav from '../Nav/Nav'
import {Switch, Route} from 'react-router-dom'
import routeConfig from '@/routers'
import './pagelist.scss'
import RouteHOC from '@/components/router'


export default class PageList extends Component{

	render () {
		/* const getRoute = (pName: string) => {
			let {children}: any = routeConfig.find(({name}) => pName === name)
			return children.map(
				({path, component}: {path:any, component:any}) => (
					<Route exact key={path} path={`/${pName}${path}`} component={component}></Route>
				)
			)
		} */
		const Routers = ((pName: string) => {
			let {children}: any = routeConfig.find(({name}) => pName === name)
			return children.map(
				(item: any) => {
					const path = item.path === '/' ? '/' + pName : `/${pName}${item.path}`
					return Object.assign({}, item, {path})
				}
			)
		})('page-list')

		return (
			<div className="pagelist">
				<Nav></Nav>
				<div className="pagelist__main">
					<Switch>
						<RouteHOC routerConfig={Routers}></RouteHOC>
					</Switch>
				</div>
			</div>
		)
	}
}