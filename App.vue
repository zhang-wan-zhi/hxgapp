<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	/*每个页面公共css */
	
	// radio样式
	
	uni-radio .uni-radio-input{
		width: 28rpx !important;
		height: 28rpx !important; 
		border: 1px solid #ED5C4D;
	}
</style>
