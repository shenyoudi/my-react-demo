import Mock from 'mockjs'

const Random = Mock.Random

export default [
	{
		url: '/getUser',
		type: 'post',
		response: () => ({
			code: 200,
			data: {
				token: Random.word(20)
			}
		})
	}
]