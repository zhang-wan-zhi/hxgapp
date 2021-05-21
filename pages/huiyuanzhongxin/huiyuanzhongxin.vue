<template>
	<view class="box">
		<!-- 轮播图区域 -->
		<view>
			<swiper :current="currentIndex"  :duration="500" previous-margin='34px' next-margin='34px' @change="swierChange">
				<swiper-item><view class="professional"></view></swiper-item>
				<swiper-item><view class="members"></view></swiper-item>
			</swiper>
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
uni-swiper{
	height: 340rpx;
}
.professional {
	width: 100%;
	height: 340rpx;
	background: url(../../static/img/my/huiyuan1.png) no-repeat 0px 0px;
	background-size: 100% 340rpx;
}
.members {
	width: 100%;
	height: 340rpx;
	background: url(../../static/img/my/huiyuan2.png) no-repeat 0px 0px;
	background-size: 100% 340rpx;
}
</style>
