<template>
	<view>
		<view class="gerenzhongxin_updates">
			<view class="gerenzhongxin_updates1">
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">头像</view>
					<view class="gerenzhongxin_updates_content_center">
						<image src="../../static/img/touxiang_img.png"></image>
					</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">用户名</view>
					<view class="gerenzhongxin_updates_content_center2">加油吧，少年</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">性别</view>
					<view class="gerenzhongxin_updates_content_center2">男</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">省份</view>
					<view class="gerenzhongxin_updates_content_center2">浙江省</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.gerenzhongxin_updates{
		width:100%;
		height:420rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:30rpx;
		.gerenzhongxin_updates1{
			width:90%;
			height:400rpx;
			// border:1px solid orange;
			.gerenzhongxin_updates_content{
				width:90%;
				height:80rpx;
				border-bottom:1px solid #BBBBBB;
				display: flex;
				flex-direction: wrap;
				margin-left:5%;
				// justify-content: space-between;
				.gerenzhongxin_updates_content_left{
					width:120rpx;
					height:80rpx;
					line-height: 80rpx;
					text-align: center;
					// border:1px solid green;
					font-size: 30rpx;
					font-weight: bold;
				}
				.gerenzhongxin_updates_content_center{
					width:80rpx;
					height:70rpx;
					// border:1px solid green;
					margin-left:350rpx;
					image{
						width:100%;
						height:100%;
					}
				}
				.gerenzhongxin_updates_content_center2{
					width:230rpx;
					height:70rpx;
					line-height: 70rpx;
					text-align: center;
					// border:1px solid green;
					margin-left:220rpx;
					font-size:30rpx;
					// font-weight: bold;
				}
				.gerenzhongxin_updates_content_right{
					width:50rpx;
					height:50rpx;
					// border:1px solid green;
					margin-left:20rpx;
					margin-top:28rpx;
					image{
						width:100%;
						height:100%;
					}
				}
			}
		}
		
	}
</style>
