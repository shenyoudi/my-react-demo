import request from './request'
import URLCONFIG from './config'

export const getUser = (data: any) => request({
	url: URLCONFIG['getUser'],
	method: 'post',
	data
})

export const getList = () => request({
	url: URLCONFIG['getList'],
	method: 'get',
})

export const test = () => request({
	url: '/test',
	method: 'get'
})