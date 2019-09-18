<template>
	<view class="content">
		<view>{{avatarUrl}}</view>
		<button type="primary" size="small" @tap="changeToken">获取token: {{tokens}}</button>
		<button type="warn" size="small" @tap="addAge">增加后的年龄为：{{age}}</button>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import { tabbar,getPagesPath } from '../../utils/tabbar' 
	import Tabbar from '../../components/tabbar'
	import {  
	        mapState,  
	        mapMutations  
	    } from 'vuex';  
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			Tabbar
		},
		computed:{
			avatarUrl(){
				return this.$store.state.avatarUrl
			},
			tokens(){
				return this.$store.state.token
			},
			age(){
				return this.$store.state.age
			}
		},
		onLoad() {
			getPagesPath()
			// console.log(tabbar)
		},
		methods: {
			toLogin(){
				uni.navigateTo({
				    url: '../login/login',
				    animationType: 'pop-in',
				    animationDuration: 100
				});
			},
			changeToken(){
				let token = Math.floor(Math.random() * (200000000 - 100000000 + 1) + 100000000);
				this.$store.dispatch('getToken',token)
			},
			addAge(){
				this.$store.dispatch('addAge')
			}
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
