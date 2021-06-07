import {Route, Redirect, Switch} from 'react-router-dom'
import RouterGuard from './routerGuard'

export function RenderRoutesMap (routers: any) {
	//console.log('render routers map', routers)
	
	return (
	routers.map((route:any) => (
		<Route
			key={route.name}
			path={route.path}
			exact={route.exact || false}
			render={props => <RouterGuard {...props} {...route} />}
		></Route>
	))
)}

export default function RenderRoutes ({routes}: any) {
	//console.log('RenderRoutes', routes)
	return (
		<Switch>
			{RenderRoutesMap(routes)}
		</Switch>
	)
}