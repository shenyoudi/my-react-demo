import Mock from 'mockjs'
import api from './api'

const mocks = [...api]

for (let {url, type, response} of mocks) {
	Mock.mock(url, type, response)
}