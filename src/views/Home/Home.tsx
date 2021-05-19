import {Component} from 'react'
import List from './list'

export default class Home extends Component{

	render () {
		const list = ['list1', 'list2', 'list3']

		return (
			<div>
				<List data={list}></List>
			</div>
		)
	}
}