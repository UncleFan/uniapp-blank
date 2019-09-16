<template>
	<view class="login">
		<Navigator :name="navigatorName" :showback="showback"></Navigator>
		<view class="headico">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		
		<view class="form">
			<Input :inputType="'icon-user'"></Input>
		</view>
		
		<!-- <text class="title">{{title}} </text>
		<input type="text" :value="title" @input="changeTitle"/> -->
		
		
		
		<!-- <Tabbar></Tabbar> -->
	</view>
</template>

<script>
	import $http from '../../utils/api'
	import requestUrl from '../../utils/requestUrl'
	
	import Navigator from '../../components/navigator'
	import Input from '../../components/input'
	
	
	import { tabbar,getPagesPath } from '../../utils/tabbar'
	
	export default {
		data() {
			return {
				title: '我是这个登录页面',
				navigatorName: '登录',  // 传值下个页面的名称
				showback: false, // 是否显示返回按钮
				showTabbar: false
			}
		},
		
		components: {
			Navigator,
			Input
		},

		onLoad(e) {
			getPagesPath()
			/* $http.ReqPost(requestUrl.newsList,{}).then((res) => {
				// console.log(res)
			}).catch(e => {
				// console.log(e)
			}) */
				
			
			
			/* uni.request({
				url: 'https://www.imovietrailer.com/superhero/index/carousel/list?qq='+ 644742791,
				data: {
					
				},
				method: 'POST',
				success: (res) => {
					console.log(res.data);
					// debugger;
				}
			}); */
		},
		methods: {
			backToIndex(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			},
			changeTitle(e){
				this.title = e.detail.value
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../common/theme.less');
	
	.title{
		font-size: @font20;
		color: @028E9B;
		text-align: center;
	}
	
	.login{
		width: 100%;
		height: calc(100vh);
		background: url('../../static/denglubg.jpg') no-repeat;
		background-size: cover;
	}
	
	.headico{
		padding: 10% 0 0 0;
		display: flex;
		justify-content: center;
		
		image{
			width: 160upx;
			height: 160upx;
			border-radius: @radius-circle;
			border: 2upx solid #85bbbd;
		}
	}
	
	.form{
		padding: 60upx 0;
		vertical-align: baseline;
	}

</style>
