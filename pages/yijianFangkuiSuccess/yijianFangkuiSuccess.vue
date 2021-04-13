<template>
	<view>
		<view class="yijianFangkui_success">
			<view class="yijianFangkui_success_success">
				<view class="yijianFangkui_success1">
					<view class="yijianFangkui_success1_img">
						<image src="../../static/img/yijianfankuoi_success_img.png"></image>
					</view>
				</view>
				<view class="yijianFangkui_success2">提交成功</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.yijianFangkui_success{
		margin-top:300rpx;
		width:100%;
		height:300rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.yijianFangkui_success_success{
			width:200rpx;
			height:250rpx;
			// border:1px solid red;
			.yijianFangkui_success1{
				width:200rpx;
				height:200rpx;
				// border:1px solid pink;
				.yijianFangkui_success1_img{
					width:200rpx;
					height:200rpx;
					// border:1px solid orange;
					image{
						width:100%;
						height:100%;
					}
				}
			}
			.yijianFangkui_success2{
				width:100%;
				height:50rpx;
				line-height: 50rpx;
				text-align: center;
				// border:1px solid pink;
				color:#1296DB;
				font-size: 35rpx;
				font-weight:bold;
			}
		}
	}
</style>
