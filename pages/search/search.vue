<template>
	<view class="searchPage">
		<Navigator :name="'搜索'" :showback="true" ></Navigator>
	</view>
</template>

<script>
	import Navigator from '../../components/navigator'
	
	export default {
		name: 'search',
		data(){
			return {
				
			}
		},
		components:{
			Navigator
		}
	}
</script>

<style lang="less" scoped>
	
</style>
