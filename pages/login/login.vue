<template>
	<view class="login">
		<Navigator :name="navigatorName" :showback="showback"></Navigator>
		<text class="title">{{title}} </text>
		<input type="text" :value="title" @input="changeTitle"/>
	</view>
</template>

<script>
	import $http from '../../utils/api'
	import requestUrl from '../../utils/requestUrl'
	
	import  Navigator from '../../components/navigator'

	export default {
		data() {
			return {
				title: '我是这个登录页面',
				navigatorName: '登录',  // 传值下个页面的名称
				showback: true // 是否显示返回按钮
			}
		},
		
		components: {
			Navigator
		},

		onLoad() {
			console.log(navigator)
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

</style>
