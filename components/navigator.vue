<template name='Navigator'>
	<view class="navigator">
		<view v-if="showback" class="backIcon" @tap="navigatorBack">
			<text class="iconfont icon-xiangzuo" style="font-weight: bold;"></text>
			<text class="line"></text>
			<text class="iconfont">返回</text>
		</view>
		<view v-else class="backIcon" @tap="switchToIndex">
			<text class="iconfont icon-shouyex"></text>
			<text class="line"></text>
			<text class="iconfont">首页</text>
		</view>
		<view class="navigator-name">{{name}}</view>
	</view>
</template>

<script>
	export default {
		name: 'Navigator',
		props: {
			name: {
				type: String,
				value: '登录名称'
			},
			showback: {
				type: Boolean,
				value: true
			}
		},
		mounted(){
			/* // 组件属性值获取
			console.log(this.name)
			console.log(this.$props.name) */
			// console.log("created=============>start")
			// console.log("created=============>end")
		},
		
		methods: {
			navigatorBack(){
				uni.navigateBack({delta:1})
			},
			switchToIndex(){
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		}
		
		
	}
	
</script>

<style lang="less" scoped>
	@import url('../common/theme.less');
	@import url('//at.alicdn.com/t/font_1355568_jmls8lyqyv.css');
	
	.navigator{
		width: 100%;
		height: 110upx;
		padding: 11upx 15upx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		
		.backIcon{
			width: 150upx;
			height: 50upx;
			position: absolute;
			left: 30upx;
			border-radius: 25upx;
			background-color: #f8f8f8;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 5upx 10upx;
			color: @028E9B;
			box-sizing: border-box;
			.iconfont{
				font-size: 28upx;
				line-height: 28upx;
			}
			.line{
				display: block;
				width: 1upx;
				height: 24upx;
				background-color: @028E9B;
			}
		}
	}
	
	.navigator-name{
		font-size: 32upx;
		color: @028E9B;
	}
</style>
