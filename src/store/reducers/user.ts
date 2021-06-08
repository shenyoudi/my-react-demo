import {ADD_USER, DEL_USER, GET_USER} from '../action/addUser'

const initState = {
	list: []
}

export default function reducer (state = initState, action: any) {
	switch (action.type) {
		case ADD_USER : 
			return {
				list: action.data
			}
		case DEL_USER :
			return {
				list : action.data
			}
		case GET_USER :
			return {
				list: [...action.data]
			}
		default :
			return state
	}
}