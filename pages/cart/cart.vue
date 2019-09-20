<template>
	<view>
		购物车
	</view>
</template>

<script>
	export default {
		name: 'Cart',
		data (){
			return {
				
			}
		},
		
		onLoad() {
			// 判断是否登录
			let token = uni.getStorageSync('token') || '';
			if(!token) uni.navigateTo({
				url: '/pages/login/login'
			});
		}
	}
</script>

<style>
</style>
