<template>
	<view>
		<view class="history">
			<view class="search" :class="{active:true}">
				<input type="text" @input="getInput">
				<view class="cancle" @click="Searchs">搜索</view>
			</view>
		</view>

	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				// 输入框的数据
				input_value:''
			}
		},
		methods: {
		    //获取输入框的数据
			getInput(e){
				// console.log(e.target.value);
                this.input_value=e.target.value;
			},
			// 取消搜索
			Searchs(){
				console.log(this.input_value);
				uni.request({
					url: `${this.$serverUrl}api/TestSearchPost`,
					//#ifdef H5
					url:'/api/api/TestSearchPost',
					//#endif
					method: "POST",
					contentType: 'application/json;charset=UTF-8',
					data: {
						content: this.input_value
					}
				}).then((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.history{
	.search {
	box-sizing: border-box;
	padding: 20rpx 16rpx;
	// background-color: red;
	position: relative;
	 input {
		height: 60rpx;
		background-color: #fff;
	 }
	}
	.active{
			display: flex;
			background-color: #f4f4f4;
			input{
				flex: 1;
				margin-right: 50rpx;
			}
			.cancle{
				width: 120rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 30rpx;
				text-align: center;
				border: 1px solid #ccc;
				background-color: #fff;
				box-sizing: border-box;
			}
		}

}
</style>
