import { useState } from 'react'
import { Button, Input } from 'antd'
import {getUser} from '../../utils/api'
import {setToken} from '../../utils/auth'
import './login.css'

export default function Login () {
	const [info, setInfo] = useState({username: '', password: ''})
	const login = async () => {
		const {data: {data: {token}}} = await getUser(JSON.stringify(info))
		console.log(token)
		setToken(token)
	}
	const userChange = (e: any) => {
		let user = e.target.value
		setInfo({...info, username: user})
	}
	const pwdChange = (e: any) => {
		let pwd = e.target.value
		setInfo({...info, password: pwd})
	}

	return (
		<div className='login'>
			<Input className='login__input' onChange={userChange}/>
			<Input className='login__input' onChange={pwdChange}/>
			<Button className='login__input' type="primary" onClick={login}>click</Button>
		</div>
	)	
}