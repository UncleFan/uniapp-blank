<template>
	<view class="mine">
		我的
	</view>
</template>

<script>
	export default {
		name: 'Mine',
		data(){
			return {
				
			}
		},
		onShow() {
			let token = uni.getStorageSync('token') || '';
			if(!token) {
				uni.navigateTo({
					url: '/pages/login/login?showback=' + false
				});
			}
		}
	}
</script>

<style>
</style>
