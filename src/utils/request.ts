import Axios from 'axios'

const instance = Axios.create({
	//baseUrl: '',
})

instance.interceptors.request.use(
	config => {
		console.log('interceptors request 拦截 : ', config)
		return config
	},
	err => Promise.reject(err)
)

instance.interceptors.response.use(
	response => {
		console.log('interceptors response 拦截 : ', response)
		if (response.data.code === 200) {
			return response
		}
		return response
	},
	err => Promise.reject(err)
)

export default instance