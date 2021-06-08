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
	},
	{
		url: '/getList',
		type: 'get',
		response: () => (Mock.mock({
			code: 200,
			'data|10': [
				{
					'id|+1':0,
					name: () => Random.cname(),
					'age|18-60': 1,
					'gender|1': true,
					address: () => Random.county(true),
					date: () => Random.date('yyyy-MM-dd')
				}
			]
		}))
	},
	{
		url: '/test',
		type: 'get',
		response: () => ({
			code: 200,
			data: {
				test: 'test'
			}
		})
	}
]