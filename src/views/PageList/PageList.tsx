import {Component} from 'react'
import Nav from '../Nav/Nav'
import {RenderRoutesMap} from '@/routers/router'
import './pagelist.scss'


export default class PageList extends Component{

	render () {
		const {routes = []}: any = this.props
		return (
			<div className="pagelist">
				<Nav></Nav>
				<div className='pagelist__main'>
					{RenderRoutesMap(routes)}
				</div>
			</div>
		)
	}
}