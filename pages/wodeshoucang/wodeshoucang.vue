<template>
	<view class="box">
		<!-- 艺考动态列表 -->
		<view class="dynamic-contents">
			<view v-for="(item, index) in saveList" :key="index">
				<view class="dynamic-content" @click="yikaoDongtai(item.id)">
					<view class="dynamic-img"><image :src="item.aedMinimg"></image></view>
					<view class="dynamic-detail">
						<view class="dynamic-title">{{ item.aedTitle }}</view>
						<view class="dynamic-pub">
							<text>{{ item.aedPublisheder }}</text>
							<image src="../../static/icon/kecheng/shoucang2.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			saveList: [
				{
					aedContent: null,
					aedCreateby: 'admin',
					aedCreatetime: '2021-04-26',
					aedIntro: '春江花月夜----张若虚',
					aedIsvisible: null,
					aedMinimg: 'http://hxg.fastrhino.com.cn/5d98e674aee54e74a8423283c71ef42e.jpg',
					aedPublisheder: '清华大学',
					aedPubtime: '2021-04-19',
					aedState: null,
					aedTitle: '春江花月夜'
				},
				{
					aedContent: null,
					aedCreateby: 'admin',
					aedCreatetime: '2021-04-26',
					aedIntro: '春江花月夜----张若虚',
					aedIsvisible: null,
					aedMinimg: 'http://hxg.fastrhino.com.cn/5d98e674aee54e74a8423283c71ef42e.jpg',
					aedPublisheder: '清华大学',
					aedPubtime: '2021-04-19',
					aedState: null,
					aedTitle: '春江花月夜'
				}
			]
		};
	},
	methods: {}
};
</script>

<style>
.box {
	width: 100%;
}
.dynamic-content {
	display: flex;
	align-items: center;
	width: 600rpx;
	height: 192rpx;
	margin: 30rpx auto 0rpx;
	border-radius: 16rpx;
	background-color: #ffffff;
}
.dynamic-content .dynamic-img {
	width: 232rpx;
	height: 160rpx;
	margin: 0rpx 16rpx;
	border-radius: 8px;
	overflow: hidden;
}
.dynamic-content .dynamic-img image {
	width: 100%;
	height: 100%;
}
.dynamic-detail {
	width: 368rpx;
	height: 160rpx;
	padding-right: 30rpx;
	display: flex;
	flex-direction: column;
}
.dynamic-title {
	width: 100%;
	flex: 1;
	font-size: 28rpx;
	font-weight: 700;
	line-height: 40rpx;
	color: #0f1826;
}
.dynamic-pub {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 34rpx;
	font-size: 12px;
	font-weight: 400;
	line-height: 34rpx;
	color: #a9afb8;
}
.dynamic-pub image {
	width: 34rpx;
	height: 34rpx;
}
</style>
