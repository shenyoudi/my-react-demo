import {Component} from 'react'

interface ListProps {
	data: Array<string>;
}

export default class List extends Component <ListProps> {

	render () {
		const renderList = () => this.props.data.map((item: string) => <li key={item}>{item}</li>)

		return (
			<ul>
				{renderList()}
			</ul>
		)
	}
}