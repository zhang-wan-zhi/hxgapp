<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			// 获取上一个页面的信息
			uni.$on('gailvbaogao', res => {
				console.log(res)
			});
			uni.$emit('gailv');
			// 折线图数据
			console.log('发送请求了');
		},
		onUnload() {
			// 移除监听事件，防止重复监听
			uni.$off('gailvbaogao');
		}
	}
</script>

<style lang="scss">

</style>
