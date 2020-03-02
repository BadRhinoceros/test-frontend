import axios from 'axios'

// console.log('process.env.BASE_API',process.env.BASE_API)

const service = axios.create({
	// baseURL: process.env.BASE_API, // api base_url,
	baseURL: 'http://timentys.kz/api',
	timeout: 5000, // request timeout
	xsrfCookieName: '',
	xsrfHeaderName: ''
})

// request interceptor
service.interceptors.request.use(config => {
	// Do something before request is sent
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error)
	}
)

export default service