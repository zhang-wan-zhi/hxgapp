<template>
	<view class="box">
		<!-- 艺考动态列表 -->
		<view class="dynamic-contents">
			<view v-for="(item, index) in saveList" :key="index">
				<view class="dynamic-content">
					<view class="dynamic-img"><image :src="item.artexam.aeImgurl"></image></view>
					<view class="dynamic-detail">
						<view class="dynamic-title">{{ item.artexam.aeTitle }}</view>
						<view class="dynamic-pub">
							<text>{{ item.artexam.aeCreatetime }}</text>
							<image src="../../static/icon/kecheng/shoucang2.png" @click="cancelSave(item.artexam.aeId)"></image>
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
			saveList: []
		};
	},
	onLoad() {
		let openid=uni.getStorageSync('openid');
		//获取收藏的课程
		new Promise((res,rej)=>{
			uni.request({
				url:'http://192.168.3.215:8091/hxg/getColls',
				method:'POST',
				data:{
					openid
				},
				success(result) {
					res(result)
				},
				fail(result) {
					console.log(result)
				}
			})
		}).then((res)=>{
			this.saveList=res.data.data
			console.log('this', this.saveList)
		})
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
