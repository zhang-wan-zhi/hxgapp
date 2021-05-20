<template>
	<view>
		<!-- 视频 -->
		<view class="class-item">
			<view class="class-video"><video :src="yikaoKechengList_one.aeVideourl" objectFit="cover"></video></view>
			<!-- 视频详情 -->
			<view class="detail">
				<text class="title">{{ yikaoKechengList_one.aeTitle }}</text>
				<view class="watch">
					<image src="../../static/img/firstIcon/watch.png" mode=""></image>
					<text class="watch-number">{{ yikaoKechengList_one.peopleNum }}人正在观看</text>
				</view>
			</view>
			<!-- 点赞分享 -->
			<view class="handle">
				<view @click="click_dianzan">
					<image src="../../static/icon/kecheng/dianzan1.png" v-show="!isDianzan"></image>
					<image src="../../static/icon/kecheng/dianzan.png" v-show="isDianzan"></image>
					<text>赞</text>
				</view>
				<view>
					<image src="../../static/icon/kecheng/comment.png"></image>
					<text>评论</text>
				</view>
				<view>
					<image src="../../static/icon/kecheng/shoucang1.png"></image>
					<text>收藏</text>
				</view>
				<view>
					<image src="../../static/icon/kecheng/fenxiang.png" mode=""></image>
					<text>分享</text>
				</view>
			</view>
		</view>

		<!-- 分割线 -->
		<view class="line"></view>

		<!-- 更多视频 -->
		<view class="more">
			<view class="tip">更多视频</view>
			<!-- 艺考课程列表 -->
			<view>
				<view class="class-contents" v-for="(item, index) in yikaoKechengList" :key="index">
					<view class="class-content" @click="yikaokecheng_click(item.aeId)">
						<view class="class-img"><image :src="item.aeImgurl"></image></view>
						<view class="class-detail">
							<view class="class-title">{{ item.aeTitle }}</view>
							<view class="class-number">
								<image src="../../static/img/firstIcon/watch.png"></image>
								<text>{{ item.peopleNum + '人正在观看' }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
import { getyikaoKechengList_one, getyikaoKechengList } from '../../api/api.js';
export default {
	data() {
		return {
			yikaoKechengList_one: [],
			//艺考课程列表数据
			yikaoKechengList: [],
			//是否显示icon图标
			isIcon: true,
			//是否显示课程
			isKecheng: true,
			//是否显示评论
			comment: false,
			//是否处于收藏状态
			isShouchang: false,
			//是否处于点赞状态
			isDianzan: false,
			isDianzanArr: ['../../static/img/dianzan_icon1.png', '../../static/img/dianzan_icon.png'],
			isDianzanArrstr: '../../static/img/dianzan_icon.png'
		};
	},

	methods: {
		//艺考课程
		yikaokecheng_click(id) {
			// console.log(id);
			uni.navigateTo({
				url: '../yikaokecheng_item/yikaokecheng_item?ids=' + id
			});
		},
		//获取窗口高度，适配手机
		getWindowHeight() {
			uni.getSystemInfo({
				success: res => {
					this.phoneHeight = res.windowHeight;
				}
			});
		},
		//点击收藏图标触发
		click_shouchang() {
			this.isShouchang = !this.isShouchang;
		},
		//点击点赞图标触发
		click_dianzan() {
			this.isDianzan = !this.isDianzan;
		},
	},
	onLoad(id) {
		//获取窗口高度，适配手机
		this.getWindowHeight();
		console.log('onload');
		//获取指定艺考课程的数据
		getyikaoKechengList_one(id.ids).then(res => {
			console.log(res.data.hxgArtexam);
			let oldStr = res.data.hxgArtexam.aeCreatetime;
			this.yikaoKechengList_one = res.data.hxgArtexam;
			//对时间进行处理
			this.yikaoKechengList_one.aeCreatetime = oldStr.split('-').join('/');
		});
		//获取艺考课程列表
		getyikaoKechengList().then(res => {
			// console.log(res.data.artexams);
			this.yikaoKechengList = res.data.artexams;
		});
	},
	onUnload(){
		console.log('onback');
	}
};
</script>

<style lang="scss" scoped>
.class-video {
	width: 100%;
	height: 440rpx;
	video {
		width: 100%;
		height: 100%;
	}
}

.detail {
	width: 100%;
	padding: 30rpx 40rpx;
}

.title {
	font-size: 18px;
	font-weight: 400;
	color: #0f1826;
}
.watch {
	display: flex;
	width: 100%;
	height: 80rpx;
	align-items: center;
}
.watch image {
	width: 36rpx;
	height: 36rpx;
}
.watch-number {
	padding: 0rpx 10rpx;
	font-size: 12px;
	font-weight: 400;
	line-height: 22px;
	color: #a9afb8;
}
// 用户操作样式

.handle {
	display: flex;
	width: 100%;
	height: 120rpx;
	justify-content: space-between;
	padding: 0rpx 40rpx;
	view {
		display: flex;
		width: 60rpx;
		flex-direction: column;
		align-items: center;
		image {
			width: 52rpx;
			height: 52rpx;
		}
	}
}

// 分割线
.line {
	width: 100%;
	height: 6rpx;
	margin: 30rpx 0rpx;
	background-color: #cccccc;
}
// 更多视频样式
.more {
	padding: 10rpx 40rpx;
	font-size: 16px;
	line-height: 22px;
	color: #6e7580;
}
.tip {
	margin-bottom: 20rpx;
}

// 艺考动态列表样式

.class-content {
	display: flex;
	align-items: center;
	width: 670rpx;
	height: 192rpx;
	margin: 0rpx auto 28rpx;
	border-radius: 16rpx;
	background-color: #ffffff;
}

.class-content .class-img {
	width: 232rpx;
	height: 160rpx;
	margin: 0rpx 16rpx;
	border-radius: 8px;
	overflow: hidden;
}

.class-content .class-img image {
	width: 100%;
	height: 100%;
}

.class-detail {
	width: 368rpx;
	height: 160rpx;
	display: flex;
	flex-direction: column;
}

.class-title {
	width: 100%;
	flex: 1;
	font-size: 28rpx;
	font-weight: 700;
	line-height: 40rpx;
	color: #0f1826;
}
// 艺考课程样式

.class-number {
	height: 36rpx;
	font-size: 12px;
	font-weight: 400;
	line-height: 36rpx;
	color: #a9afb8;
	display: flex;
	align-items: center;
	image {
		width: 36rpx;
		height: 36rpx;
		margin-right: 10rpx;
	}
}
// 评论样式
</style>
