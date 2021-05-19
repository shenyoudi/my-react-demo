import request from './request'
import URLCONFIG from './config'

export const getUser = (data: any) => request({
	url: URLCONFIG['getUser'],
	method: 'post',
	data
})