import {getList} from '@/utils/api'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {asyncGetUser} from '@/store/action/addUser'

function mapStateToProps (state: any) {
	return {
		userList: state.User.list
	}
}

const mapActionsToProps = {
	asyncGetUser
}

async function init () {
	const list = await getList()
	return list.data.data
}

function Page0 (props: any) {

	const [list, setList] = useState([])

	useEffect(() => {
		props.asyncGetUser().then(() => {
			console.log(props)
		})
	}, [])

	return (
		<div>
			<div>
				<span>name</span>
				<span>age</span>
				<span>gender</span>
				<span>address</span>
			</div>
			{list.length && list.map(({name, id, age, gender, address}: any) => (
				<div key={id}>
					<span>{name}</span>
					<span>{age}</span>
					<span>{gender}</span>
					<span>{address}</span>
				</div>
			))}
		</div>
	)
}

export default connect(mapStateToProps, mapActionsToProps)(Page0)