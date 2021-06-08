import {combineReducers} from 'redux'
import reducerUser from './user'

const reducer = combineReducers({
	User: reducerUser
})

export default reducer