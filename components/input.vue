<template name="Input">
	<view class="input">
		<view class="iconfont" :class="inputType"></view>
		<view>
			<input type="text" value="" placeholder="请输入电话号码"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Input',
		props: {
			inputType: {
				type: String,
				value: ''
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../common/theme.less');
	@import url('//at.alicdn.com/t/font_1355568_2q9vzas3kwg.css');
	
	.icon-user{
		font-size: 50upx;
		color: #979797;
		padding: 0 10upx;
	}
	
	.input{
		width: 650upx;
		height: 90upx;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #FFF;
		border-radius: @radius-lg;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.input input{
		font-size: @font28;
		line-height: 90upx;
	}
</style>
