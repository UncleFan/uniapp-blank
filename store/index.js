import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {  
	login: false,  
	token: '',  
	avatarUrl: 'aaaaaaaa',  
	userName: '',
	age: 0
}

// 我们可以认为，【getters】是store的计算属性(computed),如果很多组件都使用这个处理后的数据,可以在这里进行处理，再输出
const getters = {
	// userName赋一下值
	changeUserName(state){
		state.userName = '小明';
		state.age = 18;
		state.token = 100000000;
		return state
	}
}

const mutations = {
	login(state){
		console.log(state)
	},
	logout(state){
		
	},
	changeToken(state,token){
		setTimeout(()=>{
			state.token = token;
		},2000)
	},
	addAge(state){
		setTimeout(()=>{
			state.age += 1;
		},2000)
	}
}

const actions = {
	getToken(context,token){
		context.commit('changeToken',token)
	},
	addAge(context){
		context.commit('addAge')
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})


export default store