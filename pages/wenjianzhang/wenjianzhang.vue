<template>
	<view class="jianzhang">
		<!-- 搜索区域 -->
		<view class="Search_content" @click="getFocus">
			<text class="iconfont icon-sousuo sousuo"></text>
			<input :disabled="true" :placeholder="placeholders" placeholder-style=" font-size: 32rpx; color:#A9AFB8;" />
		</view>
		<!-- 列表 -->
		<view class="time-list">
			<view class="time-item" v-for="item in schoolTimeList" :key="item.id" @click="yikaoDongtai(item.id)">
				<image class="item-img" :src="item.aedMinimg" mode="scaleToFill"></image>
				<view class="item-conter">
					<view class="conter-title">
						{{item.aedTitle}}
					</view>
					<view class="conter-btm">
						<view class="btm-text">
							{{item.aedPublisheder}}
						</view>
						<view class="btm-text">
							{{item.aedPubtime}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getJianZhang
	} from "../../api/api.js"
	export default {
		data() {
			return {
				schoolTimeList: []
			}
		},
		mounted() {
			getJianZhang().then(res => {
				console.log('res', res.data.rows)
				this.schoolTimeList = res.data.rows
			})
		},
		methods: {
			goToSchool() {

			},
			//点击输入框，获得焦点时
			getFocus() {
				uni.navigateTo({
					url: "../test_search/test_search",
				});
			},
			//点击查看某一篇的艺考动态信息
			yikaoDongtai(ids) {
				console.log('2111112',ids)
				uni.navigateTo({
					url: "../yikaoxiangqing/yikaoxiangqing?id=" + ids,
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.time-list {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.time-item {
			display: flex;
			width: 670rpx;
			height: 192rpx;
			background-color: #fff;
			border-radius: 16rpx;
			padding: 16rpx 34rpx 14rpx 16rpx;
			margin-bottom: 28rpx;

			.item-img {
				width: 232rpx;
				height: 160rpx;
				border-radius: 16rpx;
			}

			.item-conter {
				flex: 1;
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;

				.conter-title {
					flex: 1;
				}

				.conter-btm {
					width: 100%;
					height: 32rpx;
					display: flex;
					justify-content: space-between;

					.btm-text {
						font-size: 24rpx;
						color: #a9afb8;
					}
				}
			}
		}
	}

	.Search_content {
		position: relative;
		width: 670rpx;
		height: 60rpx;
		margin: 24rpx auto;

		.sousuo {
			position: absolute;
			left: 28rpx;
			top: 14rpx;
			color: #ed5c4d;
		}

		input {
			width: 100%;
			height: 60rpx;
			border: 2rpx solid #ed5c4d;
			border-radius: 40rpx;
			background-color: #ffffff;
			padding-left: 80rpx;
		}
	}
</style>
