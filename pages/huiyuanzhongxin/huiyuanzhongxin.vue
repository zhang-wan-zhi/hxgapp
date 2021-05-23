<template>
	<view class="box">
		<!-- 轮播图区域 -->
		<view style="margin: 30rpx 0rpx;">
			<swiper :current="currentIndex" :duration="500" @change="swierChange" previous-margin="60rpx"
				next-margin="40rpx">
				<swiper-item>
					<view class="professional">
						<view class="user-info">
							<image src="../../static/icon/gerenzhongxin_icon_active.png" class="img"></image>
							<view class="detail">
								<view class="name">
									百年老字号
									<image src="../../static/img/my/jiangpaixunzhang1.png"></image>
								</view>
								<view class="deadline">
									会员有效期至：2021-06-6
								</view>
							</view>
						</view>
						<view class="renew">
							立即续费
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="members">
						<view class="user-info">
							<image src="../../static/icon/gerenzhongxin_icon_active.png" class="img"></image>
							<view class="detail">
								<view class="name">
									百年老字号
									<image src="../../static/img/my/jiangpaixunzhang.png"></image>
								</view>
								<view class="deadline">
									会员有效期至：2021-06-6
								</view>
							</view>
						</view>
						<view class="handle">
							<view class="renew">
								立即续费
							</view>
							<view class="renew" style="margin-left: 40rpx;">
								升级会员
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 特权区域 -->
		<view class="privilege">
			<!-- 专业版特权 -->
			<view class="pro">
				<view class="title">
					专业版特权
				</view>
				<view class="items">
					<view class="item">
						<view class="item-img">
							<image src="../../static/img/my/01_会员信息管理.png" mode=""></image>
						</view>
						<text>优质建议</text>
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
		},
		methods: {}
	};
</script>

<style>
	.box {
		width: 100%;
	}

	uni-swiper {
		height: 320rpx;
	}

	.professional,
	.members {
		width: 95%;
		height: 320rpx;
		background: url(../../static/img/my/huiyuan1.png) no-repeat 0px 0px;
		background-size: 100% 320rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}

	.members {
		background: url(../../static/img/my/huiyuan2.png) no-repeat 0px 0px;
	}

	.user-info {
		display: flex;
		width: 100%;
		height: 100rpx;
		align-items: center;
		margin: 40rpx 0rpx 60rpx;
		letter-spacing: 2rpx;
	}

	.user-info .img {
		width: 84rpx;
		height: 84rpx;
		margin: 0rpx 40rpx;
	}

	.detail {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		height: 100rpx;
	}

	.name {
		font-size: 16px;
		font-weight: 400;
		line-height: 44rpx;
		color: #FFFFFF;
	}

	.name image {
		width: 36rpx;
		height: 36rpx;
		margin: 0rpx 0rpx 4rpx 10rpx;
		vertical-align: middle;
	}

	.deadline {
		font-size: 12px;
		font-weight: 400;
		line-height: 34rpx;
		color: #FFFFFF;
	}

	.handle {
		display: flex;
		width: 100%;
	}

	.renew {
		width: 152rpx;
		height: 60rpx;
		margin-left: 164rpx;
		background: #FFFFFF;
		text-align: center;
		line-height: 60rpx;
		font-size: 24rpx;
		color: #273253;
		border-radius: 30rpx;
	}

	.privilege {
		padding: 0rpx 60rpx;
	}

	.pro .title {
		width: 100%;
		height: 44rpx;
		font-size: 16px;
		font-weight: 400;
		line-height: 44rpx;
		color: #273253;
	}

	.items {
		display: flex;
	}

	.item {
		display: flex;
		width: 100rpx;
		flex-direction: column;
		align-items: center;
	}

	.item-img {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100rpx;
		height: 100rpx;
		background: #FFFFFF;
		border: 1px solid #ED5C4D;
		border-radius: 50%;
	}

	.item-img image {
		width: 60rpx;
		height: 60rpx;
	}
	.item text{
		width: 52px;
		font-size: 24rpx;
		font-weight: 400;
		line-height: 40rpx;
		margin-top: 20rpx;
		color: #273253;
	}
</style>
