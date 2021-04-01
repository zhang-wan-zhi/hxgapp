<template>
	<view>
		<view class="fanghui">
			<view class="fanghui_content">问卷调查</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
  .fanghui{
	  width:100%;
	  height:70rpx;
	  border:1px solid red;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  .fanghui_content{
		  width:20%;
		  height:70rpx;
		  border:1px solid blue;
		  text-align: center;
		  line-height: 70rpx;
		  border-radius: 5rpx;
	  }
  }
</style>
