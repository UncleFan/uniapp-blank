<template name='Navigator'>
	<view class="navigator">
		<view v-if="showback" class="backIcon" @tap="navigatorBack">
			<b class="iconfont icon-xiangzuo"></b>
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
			}
		}
		
		
	}
	
</script>

<style lang="less" scoped>
	@import url('../common/theme.less');
	@import url('//at.alicdn.com/t/font_1355568_2q9vzas3kwg.css');
	
	.navigator{
		width: 100%;
		height: 110upx;
		padding: 11upx 15upx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		
		.iconfont{
			font-size: @font28;
			font-weight: bold;
			color: @028E9B;
		}
		.backIcon{
			position: absolute;
			left: 30upx;
		}
		
	}
	
	.navigator-name{
		font-size: @font28;
		color: @028E9B;
	}
</style>
