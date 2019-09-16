import $http from './HttpRequest'

const ReqPost = function(url,data){
	return $http.fly.post(url,data)
	// console.log(fly.post)
}

const ReqGet = function(url,data){
	return $http.fly.get(url,data)
}

export default {
	ReqPost,
	ReqGet
}