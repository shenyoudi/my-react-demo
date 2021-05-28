import { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
	render () {
		const route = [
			{path: '/', name: 'Home'},
			{path: '/page1', name: 'Page1'}
		]

		const renderNavLink = () => route.map(({path, name}) => <NavLink to={path}>{name}</NavLink>)

		return (
			<div>
				{renderNavLink()}
			</div>
		)
	}
}