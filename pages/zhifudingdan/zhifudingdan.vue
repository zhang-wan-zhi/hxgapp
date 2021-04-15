<template>
	<view class="zhfu_content">
		
		<view class="zhfu_content_top" :style="{height:phoneHeight*0.3+'px;'}">
			<view class="zhfu_content_top_content">
				<view class="zhfu_content_top_title1">支付金额</view>
				<view class="zhfu_content_top_title2">￥9.9</view>
			</view>
		</view>
		
		<view class="zhfu_content_center" :style="{height:phoneHeight*0.1+'px;'}">
			<view class="zhfu_content_center_content">		
				<view class="zhfu_content_center_content_left">
					<image src="../../static/img/zhifu_weixin_img.png"></image>
				</view>
				<view class="zhfu_content_center_content_center">微信支付</view>
				<view class="zhfu_content_center_content_right">
					<radio class="zhfu_content_center_content_right_radio" :checked="active== index" :value="index" @click="radioChange(index)"></radio>
				</view>
			</view>
		</view>
		
		<view class="zhfu_content_bottom" :style="{height:phoneHeight*0.6+'px;'}">
			<view class="zhfu_content_bottom_content">确认支付</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				//手机的高度
				phoneHeight:0,
				//单选的值
				// values:1,
				active: null // 选中的序号
			}
		},
		methods:{
			radioChange(index) {
				if (this.active== index) { // 如果已经选中，则取消选中
					this.active= null;
				} else { // 否则进行选中赋值
					this.active= index;
				}
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success:(res)=>{
					// console.log(res);
					// console.log("手机可用高度:"+res.windowHeight*2+"rpx");
					this.phoneHeight=res.windowHeight;
					// console.log(res.windowHeight);
					// console.log(this.phoneHeight);
					// this.$store.commit('set_window_height',res.windowHeight*2);
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
	.zhfu_content{
		width:100%;
		height:100%;
		background-color: #F3F3F3;
		.zhfu_content_top{
			width:100%;
			height:30%;
			// border:1px solid red;
			display: flex;
			justify-content: center;
			align-items: center;
			
			.zhfu_content_top_content{
				width:200rpx;
				height:200rpx;
				// border:1px solid green;
				text-align: center;
				color:#101010;
				.zhfu_content_top_title1{
					width:200rpx;
					height:100rpx;
					line-height: 100rpx;
					font-weight: bold;
					// border:1px solid pink;
					font-size: 40rpx;
				}
				.zhfu_content_top_title2{
					width:200rpx;
					height:100rpx;
					line-height: 100rpx;
					font-weight: bold;
					// border:1px solid pink;
					font-size: 45rpx;
				}
			}
			
		}
		.zhfu_content_center{
			width:100%;
			height:10%;
			// border:1px solid red;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			.zhfu_content_center_content{
				width:90%;
				height:60rpx;
				// border:1px solid pink;
				.zhfu_content_center_content_left{
					width:60rpx;
					height:60rpx;
					// border:1px solid blue;
					float:left;
					image{
						width:100%;
						height:100%;
					}
				}
				.zhfu_content_center_content_center{
					width:150rpx;
					height:60rpx;
					line-height: 60rpx;
					text-align: center;
					// border:1px solid blue;
					float:left;
					font-size: 20rpx;
					color:#101010;
					margin-left:10rpx;
				}
				.zhfu_content_center_content_right{
					width:60rpx;
					height:60rpx;
					line-height: 60rpx;
					text-align: center;
					// border:1px solid blue;
					float:right;
					.zhfu_content_center_content_right_radio{
						width:60rpx;
						height:60rpx;
			            // border:1px solid pink;
					}
				}
			}
		}
		.zhfu_content_bottom{
			width:100%;
			height:60%;
			// border:1px solid red;
			display: flex;
			justify-content: center;
			align-items: center;
			.zhfu_content_bottom_content{
				width:80%;
				height:70rpx;
				line-height: 70rpx;
				text-align: center;
				// border:1px solid pink;
				border-radius: 10rpx;
				background-color: #03DC06;
				color:#fff;
			}
		}
	}
</style>
