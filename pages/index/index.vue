<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @tap="toLogin"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import { tabbar,getPagesPath } from '../../utils/tabbar' 
	import Tabbar from '../../components/tabbar'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			Tabbar
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
