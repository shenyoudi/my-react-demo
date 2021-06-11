import {Button, Input} from 'antd'
import {useState, useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import {asyncGetUser} from '@/store/action/addUser'
import './page0.scss'

function mapStateToProps (state: any) {
	return {
		userList: state.User.list
	}
}

const mapActionsToProps = {
	asyncGetUser
}

function Page0 (props: any) {

	const [userInfo, setUserInfo] = useState({})

	const getData = useCallback(async () => {
		await props.asyncGetUser()
	}, [])

	const add = () => {
		console.log(userInfo)
	}

	const del = () => {

	}

	const inputVal = (e: any, type: string) => {
		const value = e.target.value
		setUserInfo({...userInfo, [type]: type==='gender'? !!+value : value})
	}

	useEffect(() => {
		getData()
	}, [getData])

	return (
		<div>
			<div className="add">
				<Input className="add__input" onChange={(e) => inputVal(e, 'name')}></Input>
				<Input className="add__input" onChange={(e) => inputVal(e, 'age')}></Input>
				<Input className="add__input" onChange={(e) => inputVal(e, 'gender')}></Input>
			</div>
			<div>
				<Button type="primary" onClick={add}>Add</Button>
				<Button type="primary" onClick={del}>Del</Button>
			</div>
			<div>
				<span>name</span>
				<span>age</span>
				<span>gender</span>
				<span>address</span>
				<span>date</span>
			</div>
			{props.userList.length && props.userList.map(({name, id, age, gender, address, date}: any) => (
				<div key={id}>
					<span>{name}</span>
					<span>{age}</span>
					<span>{gender? '♂' : '♀'}</span>
					<span>{address}</span>
					<span>{date}</span>
				</div>
			))}
		</div>
	)
}

export default connect(mapStateToProps, mapActionsToProps)(Page0)