let Fly = require("flyio/dist/npm/wx")
let fly = new Fly;
import requestURL from './requestUrl'
import baseUrl from './baseUrl'

// 请求超时
fly.config.timeout = 10000
fly.config.baseURL = 'https://www.imovietrailer.com';

// 添加请求拦截
fly.interceptors.request.use((request) => {

	// 请求头配置
	if (request.method == 'GET' || request.method == '' || request.method == 'get') {
		// get 请求
		fly.config.headers['content-type'] = 'application/json'
	} else {
		// post 请求
		fly.config.headers['content-type'] = 'application/x-www-form-urlencoded'
	};

	let token = uni.getStorageSync('token') || '';
	/* if (!token) {
		// backToLogin();
		//终止请求
		uni.showToast({
			title: 'token过期',
			duration: 2000,
			icon: 'none'
		});
		return Promise.reject('token过期')
	} else {
		request.headers['token'] = token;
	}; */
	return request
}, function(error) {
	return Promise.reject('token过期')
})

// 添加反应拦截
fly.interceptors.response.use((response) => {
	console.log(response)
	if(response.status == 401 ){
		uni.showToast({
			title: 'token过期',
			duration: 2000,
			icon: 'none'
		});
		return Promise.reject('token过期')
	}else if(response.status == 404){
		uni.showToast({
			title: '请求链接不存在',
			duration: 2000,
			icon: 'none'
		});
		return Promise.reject('请求链接不存在')
	}
	return Promise.resolve("成功")
}, function(error) {
	console.log(error)
})

export default {
	fly
}
