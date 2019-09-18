<template>
	<view class="login">
		<Navigator :name="navigatorName" :showback="showback"></Navigator>
		<view class="headico">
			<image src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		
		<view class="form">
			<Input :inputType="'icon-user'"></Input>
			<Code></Code>
			<view class="agreements">
				<view class="circle" :class="checked?'checked':''" @tap="checkAgreement"></view>
				<view class="texts">本人已阅读并同意<text>《用户注册服务协议》</text></view>
			</view>
			
			<button class="submit" type="primary">登录</button>
		</view>
		
	</view>
</template>

<script>
	import $http from '../../utils/api'
	import requestUrl from '../../utils/requestUrl'
	
	import Navigator from '../../components/navigator'
	import Input from '../../components/input'
	import Code from '../../components/code'
	
	
	import { tabbar,getPagesPath } from '../../utils/tabbar'
	
	export default {
		data() {
			return {
				title: '我是这个登录页面',
				navigatorName: '登录',  // 传值下个页面的名称
				showback: false, // 是否显示返回按钮
				showTabbar: false,
				checked: false    // 是否同意用户协议
			}
		},
		
		components: {
			Navigator,
			Input,
			Code
		},

		onLoad(e) {
			// getPagesPath()
			/* $http.ReqPost(requestUrl.newsList,{}).then((res) => {
				// console.log(res)
			}).catch(e => {
				// console.log(e)
			}) */
				
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
			},
			checkAgreement(){
				this.checked = !this.checked
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
		height: calc(100vh - 50px);
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
		
		.agreements{
			width: 650upx;
			font-size: @font24;
			color: #FFF;
			margin: 60upx auto 20upx auto;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			
			.circle{
				width: 35upx;
				height: 35upx;
				border-radius: @radius-circle;
				background-color: #FFF;
				margin-right: 10upx;
			}
			.circle.checked {
				width: 35upx;
				height: 35upx;
				border-radius: @radius-circle;
				background: url('../../static/check.png') no-repeat;
				background-size: contain;
				background-color: #FFF;
			}
			
			text{
				color: #028E9B;
				text-decoration: underline;
			}
		}
		
		.submit{
			width: 650upx;
			background-color: #d8c9b1;
			font-size: @font30;
			line-height: 90upx;
		}
	}

	

</style>
