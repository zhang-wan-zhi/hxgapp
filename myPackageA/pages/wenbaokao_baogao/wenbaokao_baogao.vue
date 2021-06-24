<template>
	<view class="gzyx">
		<view class="school-item" v-for="item in xuexiao" :key="item.id">
			<view class="item-img">
				<image :src="item.acPrep4" v-if="item.acPrep4"></image>
			</view>
			<view class="item-main">
				<view class="item-main-top" @click="hint(item.acName)">{{ item.acName }}</view>
				<view class="item-main-btm">{{ item.acMajor }}</view>
			</view>
			<view class="item-percent">{{ (item.askLuquProp*100).toFixed(2) + '%' }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				xuexiao: []
			};
		},
		onLoad() {
			// 获取上一个页面的信息
			uni.$on('bkbaogao', res => {
				console.log('res', res)
				this.xuexiao = res.info
			});
			uni.$emit('baokao');
			console.log('发送请求了');
		},
		methods: {
			cunfollow() {
				uni.showModal({
					title: '提示',
					content: '取消关注该院校？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			hint(e) {
				console.log('item.acName', e);
				uni.showToast({
					title: e,
					icon: 'none',
					duration: 2000
				});
			},
		}
	};
</script>

<style lang="scss" scoped>
	.gzyx {
		padding-top: 40rpx;
	}

	.school-item {
		display: flex;
		width: 640rpx;
		height: 179rpx;
		padding: 21rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin: 0 auto;
		margin-bottom: 30rpx;
		.item-img {
			width: 77rpx;
			height: 77rpx;
			flex-shrink: 0;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.item-main {
			/* flex: 1; */
			flex-grow: 1;
			margin-left: 30rpx;

			.item-main-top {
				width: 100%;
				height: 77rpx;
				line-height: 77rpx;
				font-size: 35rpx;
				color: #273253;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.item-main-btm {
				font-size: 27rpx;
				color: #92969d;
			}
		}

		.item-percent {
			width: 144rpx;
			height: 77rpx;
			font-size: 42rpx;
			font-weight: 400;
			line-height: 98rpx;
			color: #fbbe4b;
		}
	}
</style>
