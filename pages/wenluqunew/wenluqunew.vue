<template>
	<view class="enroll">
		<view class="enroll__card">
			<view class="enroll__card__center">
				<image src="../../static/img/wenluqu.png"></image>
				<view class="center-text">
					<view class="title-en">xiaokao</view>
					<view class="title-center">问校考</view>
					<view class="title-btm">
						专业分析
					</view>
				</view>
				<view class="center-btn">
					<view class="iconfont icon-iconfontjiantou2">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
@import '../../style/iconfont.css';
.enroll {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f4f4f4;
}
// 问校考
.enroll__card {
	margin-top: 322rpx;
	&__center {
		position: relative;
		width: 595rpx;
		height: 374rpx;
		background: #ffffff;
		border-radius: 58rpx;
		image {
			position: absolute;
			bottom: 120rpx;
			right: 0;
			width: 410rpx;
			height: 410rpx;
		}
		.center-text {
			position: absolute;
			top: 215rpx;
			left: 50rpx;
			.title-en {
				width: 173rpx;
				height: 38rpx;
				font-size: 27rpx;
				font-weight: 300;
				line-height: 38rpx;
				color: #eaeaea;
			}
			.title-center {
				width: 163rpx;
				height: 63rpx;
				font-size: 46rpx;
				font-weight: 400;
				line-height: 63rpx;
				color: #273253;
			}
			.title-btm {
				width: 173rpx;
				height: 38rpx;
				font-size: 27rpx;
				font-weight: 300;
				line-height: 38rpx;
				color: #273253;
			}
		}
		.center-btn {
			position: absolute;
			right: 50rpx;
			bottom: 23rpx;
			width: 92rpx;
			height: 92rpx;
			text-align: center;
			line-height: 92rpx;
			font-size: 54rpx;
			color: #fff;
			background: linear-gradient(270deg, #FE7938 0%, #ED5C4D 100%);
			border-radius: 50%;
		}
	}
}
</style>
