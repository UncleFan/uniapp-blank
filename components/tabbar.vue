<template name="Tabbar">
	<view class="tabbar">
		<!-- 自定义tabbar -->
		<view v-for="(item,index) in tabbar" :key="index" class="tab-wrap" @click="choosePage(index,item.path)">
			<image :src="item.choose?item.iconSelected: item.icon" mode=""></image>
			<text :class="item.choose?'choosed': ''">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	import { tabbar } from '../utils/tabbar'
		
	export default {
		name: 'Tabbar',
		props: {
			// tabbar: {
			// 	type: Array,
			// 	value: null
			// }
		},
		computed: {
			tabbar(){
				return tabbar
			}
		},
		
		methods:{
			choosePage(e,path){
				uni.redirectTo({
					url: '/' + path
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../common/theme.less');
	.tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height:  calc(7vh);
		background-color: @white;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
		
		.tab-wrap{
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 0 20upx;
			box-sizing: border-box;
			
			image{
				width: 50upx;
				height: 50upx;
			}
			text{
				font-size: @font16;
				color: #979797;
			}
			text.choosed{
				color: #b4272d;
			}
		}
	}
</style>
