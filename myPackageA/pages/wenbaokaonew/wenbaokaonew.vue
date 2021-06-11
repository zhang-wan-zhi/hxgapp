<template>
	<view>
		<view class="again" @click="resetAnswer"><text>重新答题</text></view>
		<view class="reportplus" v-if="permissions === '2'">
			<view class="content_top">
				<view class="leftsemicircle"></view>
				<view class="rightsemicircle"></view>
				<view class="university"><text>报考推荐</text></view>
			</view>
			<view class="content-plus">
				<!-- 学校推荐 -->
				<view class="school-recommend">
					<!-- 冲刺学校 -->
					<view :class="['school-list', { 'school-list-check': showChong }]" @click="this.showChong = !this.showChong">冲刺学校</view>
					<view v-if="showChong">
						<view v-if="baogaoinfo.xuexiao.cong.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.cong" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top" @click="hint(item.acName)">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
								<view class="item-percent">{{ item.gailv + '%' }}</view>
							</view>
							<view class="school-item item-filter">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">中国美术学院</view>
									<view class="item-main-btm">垃圾zzs</view>
								</view>
								<view class="item-percent">85%</view>
							</view>
							<view class="more-school">升级专业版查看更多学校...</view>
						</view>
						<view class="school-item2" v-else>没有可以匹配的学校哦~</view>
					</view>
					<!-- 稳定学校 -->
					<view :class="['school-list', { 'school-list-check': showWeng }]" @click="this.showWeng = !this.showWeng">重点学校</view>
					<view v-if="showWeng">
						<view v-if="baogaoinfo.xuexiao.weng.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.weng" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
								<view class="item-percent">{{ item.gailv + '%' }}</view>
							</view>
						</view>
						<view class="school-item2" v-else>没有可以匹配的学校哦~</view>
					</view>
					<!-- 保底学校 -->
					<view :class="['school-list', { 'school-list-check': showBao }]" @click="this.showBao = !this.showBao">保底学校</view>
					<view v-if="showBao">
						<view v-if="baogaoinfo.xuexiao.bao.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.bao" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
								<view class="item-percent">{{ item.gailv + '%' }}</view>
							</view>
						</view>
						<view class="school-item2" v-else>没有可以匹配的学校哦~</view>
					</view>
				</view>
				<!-- 分享 -->
				<view class="share-report">
					<view class="leftsemicircle"></view>
					<view class="rightsemicircle"></view>
					<button type="default">查看考试日程</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getReportByAskStudyCurve } from '../../../api/api.js';
export default {
	data() {
		return {
			// 判断身份
			permissions: '',
			// 学校列表是否展开
			showChong: false,
			showWeng: false,
			showBao: false,
			// 学校列表
			baogaoinfo: {
				xuexiao: {
					cong: [
						{
							id: 1,
							acName: '中国美术学院中国美术学院',
							acMajor: '垃圾zzs',
							gailv: '85'
						},
						{
							id: 2,
							acName: '垃圾zzs',
							acMajor: '垃圾zzs',
							gailv: '45'
						},
						{
							id: 3,
							acName: '中国美术学院',
							acMajor: '垃圾zzs',
							gailv: '75'
						}
					]
				}
			}
		};
	},
	onLoad() {
		// 查看用户身份0普通，1会员，2专业会员
		/* this.permissions = uni.getStorageSync('huiyuan').type + '' */
		this.permissions = '2';
	},
	/* onUnload() {
		// 移除监听事件
		uni.$off('baogao');
	}, */
	methods: {
		hint(e) {
			console.log('item.acName',e)
			uni.showToast({
			title: e,
			icon:'none',
			duration: 1000
			});
		},
		backTo() {
			uni.reLaunch({
				url: '../shouye/shouye'
			});
		},
		resetAnswer() {
			uni.navigateBack();
			console.log('resetAnswer');
		},
		showText(id) {
			if (this.showTextList.indexOf(id) === -1) {
				this.showTextList.push(id);
			} else {
				let index = this.showTextList.indexOf(id);
				this.showTextList.splice(index, 1);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
// 重新答题
.again {
	width: 643rpx;
	height: 60rpx;
	margin: 0 auto;
	padding: 5rpx;
	text {
		width: 111rpx;
		height: 38rpx;
		font-size: 27rpx;
		font-weight: 400;
		line-height: 42rpx;
		letter-spacing: 2rpx;
		color: #92969d;
	}
}
// 超级会员版
.reportplus {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-plus {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 40rpx;
		width: 643rpx;
		background-color: #ffffff;
		.plus-title {
			color: #7b818b;
			font-size: 35rpx;
			margin: 30rpx 0;
		}
		.nums {
			width: 507rpx;
			height: 177rpx;
			font-size: 173rpx;
			text-align: center;
			font-weight: 400;
			line-height: 177rpx;
			color: #fbbe4b;
			letter-spacing: 7rpx;
		}
		.charts-box {
			width: 100%;
			border-bottom: 2px dotted #dadbdd;
			padding-bottom: 40rpx;
			.charts-data {
				display: flex;
				align-self: flex-start;
				font-size: 35rpx;
				align-items: center;
				margin: 40rpx 0 0 40rpx;
				.minicircle {
					width: 10px;
					height: 10px;
					background-color: #57b5ed;
					border-radius: 50%;
				}
				.data-title {
					margin-left: 20rpx;
					color: #a9afb8;
				}
				.data-num {
					margin-left: 20rpx;
					color: #57b5ed;
				}
			}
		}
		// 学习建议
		.study-suggest {
			width: 100%;
			padding: 40rpx 0;
			align-self: flex-start;
			border-bottom: 2px dotted #dadbdd;
			.study-suggest-item {
				color: #273253;
				width: 541rpx;
				font-size: 31rpx;
				font-weight: 400;
				margin-right: 31rpx;
				margin-top: 30rpx;
				margin-left: 60rpx;
				letter-spacing: 3rpx;
			}
		}
		// 条件分享
		.suggest {
			align-self: flex-start;
			width: 100%;
			padding: 40rpx 0;
			border-bottom: 2px dotted #dadbdd;
			.suggest-item {
				padding: 0 60rpx;
				margin: 20rpx 0 0 0;
				.suggest-item-title {
					font-size: 31rpx;
					color: #57b5ed;
					font-weight: 400;
				}
				.suggest-item-check {
					color: #b0b5bd;
				}
				.suggest-item-text {
					padding: 20rpx 0;
					font-size: 27rpx;
					font-weight: 400;
					letter-spacing: 3rpx;
				}
			}
		}
		// 学校推荐
		.school-recommend {
			width: 566rpx;
			align-self: flex-start;
			padding-bottom: 40rpx;
			.school-list {
				font-size: 35rpx;
				color: #57b5ed;
				margin: 40rpx 0 0 40rpx;
			}
			.school-list-check {
				color: #b0b5bd;
			}
			.school-item2 {
				width: 566rpx;
				height: 140rpx;
				border-bottom: 1px solid #dadbdd;
				text-align: center;
				line-height: 120rpx;
			}
			.item-filter {
				filter: blur(10px);
			}
			.more-school {
				position: relative;
				top: -110rpx;
				text-align: center;
				font-size: 31rpx;
				color: #fcd58c;
			}
			.school-item {
				display: flex;
				width: 566rpx;
				height: 179rpx;
				padding: 21rpx 10rpx 31rpx 10rpx;
				border-bottom: 1px solid #dadbdd;
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
						width: 315rpx;
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
					width: 111rpx;
					height: 77rpx;
					font-size: 42rpx;
					font-weight: 400;
					line-height: 98rpx;
					color: #fbbe4b;
				}
			}
		}
	}
}

// 公共标题
.default-title {
	align-self: flex-start;
	font-size: 35rpx;
	color: #7b818b;
	margin-left: 40rpx;
}
// 公共头部
.content_top {
	width: 643rpx;
	height: 145rpx;
	display: flex;
	// padding-left: 170rpx;
	justify-content: center;
	background-color: #f6f7fb;
	align-items: center;
	position: relative;
	.leftsemicircle {
		// background-color: #F0F0F0;
		position: absolute;
		left: -10px;
		top: 145rpx;
		margin-top: -10px;
		background-color: #f4f4f4;
		height: 20px;
		width: 20px;
		border-radius: 10px;
	}
	.rightsemicircle {
		position: absolute;
		background-color: #f4f4f4;
		right: -10px;
		top: 145rpx;
		margin-top: -10px;
		height: 20px;
		width: 20px;
		border-radius: 10px;
	}
	.user-img {
		width: 96rpx;
		height: 96rpx;
		margin-right: 32rpx;
		// border: 4rpx solid #ed5c4d;
		border-radius: 50%;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.university {
		color: #273253;
		height: 50rpx;
		font-size: 35rpx;
		font-weight: bold;
		line-height: 40rpx;
	}
}
// 分享
.share-report {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 170rpx;
	width: 643rpx;
	border-top: 2px dotted #dadbdd;
	position: relative;
	background-color: #ffffff;
	.leftsemicircle {
		// background-color: #F0F0F0;
		position: absolute;
		left: -10px;
		top: 0;
		margin-top: -10px;
		background-color: #f4f4f4;
		height: 20px;
		width: 20px;
		border-radius: 10px;
	}
	.rightsemicircle {
		position: absolute;
		background-color: #f4f4f4;
		right: -10px;
		top: 0;
		margin-top: -10px;
		height: 20px;
		width: 20px;
		border-radius: 10px;
	}
	button {
		height: 70rpx;
		width: 260rpx;
		line-height: 70rpx;
		color: #ffffff;
		background-color: #57b5ed;
		border-radius: 46rpx;
	}
}
</style>
