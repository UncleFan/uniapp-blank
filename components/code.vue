<template name="Code">
	<view class="code">
		<view class="iconfont icon-password"></view>
		<view class="input">
			<input type="password" value="" placeholder="输入验证码" />
		</view>
		<view class="codeBtn">
			<text>获取验证码</text>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'Code',
		props: {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	@import url('../common/theme.less');
	@import url('//at.alicdn.com/t/font_1355568_2q9vzas3kwg.css');
	
	.code{
		width: 650upx;
		height: 90upx;
		margin: 36upx auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		background-color: #FFF;
		border-radius: @radius-lg;
		
		.input{
			width: 360upx;
			input{
				font-size: @font28;
				line-height: 90upx;
				padding-left: 5upx;
			}
		}
		
		.codeBtn{
			width: 224upx;
			height: 90upx;
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				width: 100%;
				font-size: @font28;
				color: #b4272d;
				text-align: center;
				border-left: 1upx solid rgba(180,39,45,.8);
				box-sizing: border-box;
				opacity: .8;
			}
		}
	}
	
	.iconfont.icon-password{
		font-size: 36upx;
		color: #979797;
		padding: 0 10upx 0 20upx;
	}
	
	.code input{
		font-size: @font28;
		
	}
	
	
</style>
