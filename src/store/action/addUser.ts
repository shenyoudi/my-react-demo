import {getList} from '@/utils/api'

export const ADD_USER = 'ADD_USER'
export const DEL_USER = 'DEL_USER'
export const GET_USER = 'GET_USER'

interface User {
	id: number;
	name: string;
	gender: boolean;
	address: string;
	age: number;
}

export const addUser = (data: User[]) => ({
	type: ADD_USER,
	data
})

export const delUser = (id: number) => ({
	type: DEL_USER,
	data: id
})

export const getUser = (data: User[]) => ({
	type: GET_USER,
	data
})

export const asyncAddUser = (data: User) => {

}

export const asyncGetUser = () => async (dispatch: any, getState: any) => {
	const list = await getList()
	dispatch(getUser(list.data.data))
}