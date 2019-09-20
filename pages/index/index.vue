<template>
	<view class="content">
		<view class="header">
			<view class="searchbar">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" :value="search" placeholder="输入商品关键词" @focus="getSearchFocus"/>
			</view>
			<view class="swiper-container">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image class="swiper-img" :src="item" ></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="cells">
			<view class="cells-top">
				<view class="cell" v-for="(item,index) in cells.top" :key="index">
					<image :src="item.src" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="cells-bottom">
				<view class="cell" v-for="(item,index) in cells.bottom" :key="index">
					<image :src="item.src" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="line"></view>
			<view class="quicknews">
				<text class="quick-title">神雀快报</text>
				<view class="quick-tuijain">
					<image src="../../static/index_recommend.png"></image>
				</view>
				<view class="quicknews-swiper">
					<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" :vertical="true" :circular="true" :touchable="false">
						<swiper-item v-for="(item,index) in [1,2,3]" :key="index">
							<view class="swiper-item">{{item}}. 却是省钱很省钱省钱的很却是省钱很省钱省钱的很却是省钱</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="quicknews-more">
					<text>更多</text>
					<text class="iconfont icon-youyou-"></text>
				</view>
			</view>
		</view>
		<!-- 产品 -->
		<view class="explosive-products">
			<!-- 爆品 -->
			<view class="products">
				爆品专区
			</view>
		</view>
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
				search: '',
				swipers: [
					"https://image.sqqmall.com/2019/08/28/072d49e2a53af5b0.png",
					"https://image.sqqmall.com/2019/08/28/072d49e2a53af5b0.png"
				],
				cells: {
					top: [
						{
							src: 'https://image.sqqmall.com/2019/06/04/8d3adaf4c25e4651.png',
							name: '游戏/动漫'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/32bac761aaa8145c.png',
							name: '服饰箱包'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/067bc388fed3584f.png',
							name: '日用家纺'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/8d1d709af3ec6229.png',
							name: '食品饮料'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/7932bf932a6ace22.png',
							name: '美妆护肤'
						}
					],
					bottom: [
						{
							src: 'https://image.sqqmall.com/2019/06/04/e9ee5341c1676663.png',
							name: '数码办公'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/2ceb2f6a426e65de.png',
							name: '母婴玩具'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/55ea7bfcf0683f95.png',
							name: '运动户外'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/56bb478ec9be2e4d.png',
							name: '钟表首饰'
						},
						{
							src: 'https://image.sqqmall.com/2019/06/04/101a5d02ab4b6279.png',
							name: '家用电器'
						}
					]
				}
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
			},
			getSearchFocus(){
				console.log('focus')
				uni.navigateTo({
				    url: '../search/search',
				    animationType: 'pop-in',
				    animationDuration: 100
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../common/theme.less');
	@import url('//at.alicdn.com/t/font_1355568_oxejudbeig.css');
	
	.header{
		width: 100%;
		height: 320upx;
		background-color: @orange;
		padding: 30upx 0 200upx 0;
		position: relative;
		box-sizing: border-box;
		.searchbar{
			width: 620upx;
			height: 60upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 0 auto;
			background-color: #FFF;
			border-radius: 30upx;
			.iconfont{
				font-size: 40upx;
				color: #979797;
				padding: 0 20upx;
			}
			input{
				display: block;
				width: 80%;
				font-size: @font28;
			}
		}
		.swiper-container{
			width: 90%;
			position: absolute;
			top: 110upx;
			left: 5%;
			border-radius: @radius-lg;
			overflow: hidden;
		}
	}
	
	.swiper-img{
		width: 100%;
		height: 100%;
		border-radius: @radius-lg;
	}
	
	.cells{
		width: 100%;
		background-color: #FFF;
		padding-top: 100upx;
		.cells-top,.cells-bottom{
			width: 100%;
			padding: 10upx 30upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.cell{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width: 72upx;
					height: 72upx;
					padding: 10upx 0;
				}
				text{
					font-size: @font24;
					color: #181818;
				}
			}
		}
		.cells-bottom{
			border-top: 20upx solid #f8f8f8;
		}
		.line{
			width: 690upx;
			height: 1upx;
			background-color: #e2e2e2;
			margin: 0 auto;
		}
	}
	
	.quicknews{
		width: 690upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25upx 0;
		.quick-title{
			display: block;
			height: @font28;
			line-height: @font28;
			font-size: @font28;
			font-weight: bold;
			border-right: 1upx solid #999;
			padding-right: 24upx;
		}
		.quick-tuijain{
			width: 54upx;
			height: 28upx;
			image{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.quicknews-swiper{
			width: 345upx;
			height: 40upx;
			
			swiper{
				width: 100%;
				height: 100%;
				font-size: @font24;
				.swiper-item{ .textoverflow }
				.swiper-item{
					line-height: 40upx;
				}
			}
		}
		.quicknews-more{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: @font24;
			text{
				display: block;
				font-size: @font24;
				color: #9b9b9b;
				line-height: @font24;
			}
		} 
	}
	
	.explosive-products{
		width: 100%;
		padding: 0 20upx;
		background-color: #f3f3f3;
	}
	
	
</style>
