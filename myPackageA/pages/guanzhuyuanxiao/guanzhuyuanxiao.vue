<template>
	<view>
		<view class="schedule-item" v-for="item in xuexiao" :key="item.id">
			<view class="schedule-top">
				<view class="schedule-img"><image :src="item.acPrep4"></image></view>
				<view class="schedule-main-top" @click="hint(item.acName)">
					<view class="schedule-text">{{ item.acName }}</view>
				</view>
				<view class="schedule-main-btm" @click="hint(item.acMajor)">{{ item.acMajor }}</view>
			</view>
			<view class="schedule-btm">
				<view class="schedule-time-title">考试时间</view>
				<view class="schedule-time-title schedule-time">{{ item.acFirsttrytime }}</view>
				<view class="iconfont icon-10" @click="cunfollow"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			xuexiao: [
				{
					id: 0,
					acPrep4: '../../static/img/hubeimeishu.jpg',
					acName: '湖北美术学院',
					acMajor: 'lajizzs',
					acFirsttrytime: '2021-02-6'
				},
				{
					id: 0,
					acPrep4: '../../static/img/hubeimeishu.jpg',
					acName: '湖北美术学院',
					acMajor: 'lajizzs',
					acFirsttrytime: '2021-02-6'
				},
				{
					id: 0,
					acPrep4: '../../static/img/hubeimeishu.jpg',
					acName: '湖北美术学院',
					acMajor: 'lajizzs',
					acFirsttrytime: '2021-02-6'
				}
			]
		};
	},
	methods: {
		cunfollow() {
			uni.showModal({
			    title: '提示',
			    content: '取消关注该院校？',
			    success: function (res) {
			        if (res.confirm) {
			            console.log('用户点击确定');
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.schedule-item {
	width: 643rpx;
	height: 179rpx;
	padding: 38rpx 10rpx;
	background: #ffffff;
	border-radius: 15rpx;
	margin: 0 auto;
	margin-bottom: 38rpx;
	.schedule-top {
		display: flex;
		width: 100%;
		height: 77rpx;
		.schedule-img {
			width: 77rpx;
			height: 77rpx;
			overflow: hidden;
			image {
				width: 77rpx;
				height: 77rpx;
			}
		}
		.schedule-main-top {
			margin-left: 35rpx;
			flex: 1;
			.schedule-text {
				width: 285rpx;
				height: 48rpx;
				line-height: 48rpx;
				font-size: 35rpx;
				font-weight: 400;
				color: #273253;
				letter-spacing: 2rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.schedule-main-btm {
			width: 173rpx;
			height: 48rpx;
			line-height: 48rpx;
			font-size: 27rpx;
			font-weight: 400;
			color: #92969d;
			letter-spacing: 2rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.schedule-btm {
		display: flex;
		width: 100%;
		height: 38rpx;
		padding-left: 112rpx;
		padding-right: 10rpx;
		.schedule-time-title {
			width: 123rpx;
			height: 38rpx;
			font-size: 27rpx;
			font-weight: 400;
			line-height: 38rpx;
			color: #92969d;
			letter-spacing: 2rpx;
		}
		.schedule-time {
			flex: 1;
			width: 144rpx;
			margin-left: 8rpx;
		}
		.iconfont {
			width: 38rpx;
			height: 38rpx;
			color: #ed5c4d;
		}
	}
}
</style>
