import Mock from 'mockjs'

const Random = Mock.Random

export default [
	{
		url: '/getUser',
		type: 'post',
		response: config => ({
			code: 200,
			data: {
				token: Random.word(20)
			}
		})
	}
]