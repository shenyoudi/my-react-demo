import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

export default class Nav extends Component {
	render () {
		const route = [
			{path: '/page-list', name: 'Home'},
			{path: '/page-list/page0', name: 'Page0'},
			{path: '/page-list/page1', name: 'Page1'},
		]

		const renderNavLink = () => route.map(({path, name}) => <NavLink key={path} to={path}>{name}</NavLink>)

		return (
			<div className='nav'>
				{renderNavLink()}
			</div>
		)
	}
}