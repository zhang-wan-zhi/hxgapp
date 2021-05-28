<template>
	<view class="all_content">
		<!-- 搜索区域 -->
		<view class="Search_content" @click="getFocus">
			<text class="iconfont icon-sousuo sousuo"></text>
			<input :disabled="true" :placeholder="placeholders" placeholder-style=" margin-left:300rpx; font-size: 32rpx; color:#A9AFB8;" />
		</view>

		<!-- 轮播图区域 -->
		<view class="swiper-box">
			<swiper
				:autoplay="true"
				:current="currentIndex"
				:circular="true"
				previous-margin="56rpx"
				next-margin="56rpx"
				:interval="3000"
				:duration="500"
				@animationfinish="swierChange"
			>
				<swiper-item v-for="(item, index) in swipers" :key="index" @click="handleSwiperClick(item.banType, item.banSkipurl)">
					<view class="swiper-item-box"><image :src="item.banUrl" class="slide-image" :class="currentIndex === index ? 'active' : ''"></image></view>
				</swiper-item>
			</swiper>
			<view class="dots-container">
				<view v-for="(ad, index) in swipers" :key="index"><view :class="['dot', index === currentDotIndex ? 'active' : '']"></view></view>
			</view>
		</view>

		<!-- 在线测评和精准测评 -->
		<view class="test-box">
			<view class="online" @click="xinggepinggu">
				<view class="test-logo-one"><image src="../../static/img/firstIcon/online-test.png" mode=""></image></view>
				<view class="test-title">
					<view class="test-title-top">在线测评</view>
					<view class="test-title-bottom">答题评测</view>
				</view>
			</view>

			<button class="to-service" open-type="contact">
				<view class="accurate">
					<view class="test-logo-two "><image src="../../static/img/firstIcon/accurate.png" mode=""></image></view>
					<view class="test-title">
						<view class="test-title-top">精准测评</view>
						<view class="test-title-bottom">一对一评测</view>
					</view>
				</view>
			</button>
		</view>

		<!-- 艺考动态，课程区域 -->
		<view class="Shouye_content">
			<view class="content_title" v-if="isSearch">
				<view class="dct-title" @click="yikaoDongtai2" :class="isactive ? 'isActive' : ''">
					<image src="../../static/img/firstIcon/dongtai.png"></image>
					<text>动态</text>
				</view>
				<view class="dct-title divider-line" @click="yikaoKecheng" :class="isactive1 ? 'isActive' : ''">
					<image src="../../static/img/firstIcon/class.png" mode=""></image>
					<text>视频</text>
				</view>
				<view class="dct-title" @click="yikaiTiku" :class="isactive2 ? 'isActive' : ''">
					<image src="../../static/img/firstIcon/question.png"></image>
					<text>测试</text>
				</view>
			</view>
			<!-- 艺考动态列表 -->
			<view class="dynamic-contents" v-show="yikaoDongtaiStatus">
				<view v-for="(item, index) in yikaoDongtaiList" :key="index">
					<view class="dynamic-content" @click="yikaoDongtai(item.id)">
						<view class="dynamic-img"><image :src="item.aedMinimg"></image></view>
						<view class="dynamic-detail">
							<view class="dynamic-title">{{ item.aedTitle }}</view>
							<view class="dynamic-pub">
								<text>{{ item.aedPublisheder }}</text>
								<text>{{ item.aedCreatetime }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 艺考课程列表 -->
			<view v-show="yikaoKechengStatus">
				<view class="class-contents" v-for="(item, index) in yikaoKechengList" :key="index">
					<view class="class-content" @click="yikaokecheng_click(item.aeId)">
						<view class="class-img"><image :src="item.aeImgurl"></image></view>
						<view class="class-detail">
							<view class="class-title">{{ item.aeTitle }}</view>
							<view class="class-number">
								<image src="../../static/img/firstIcon/watch.png"></image>
								<text>{{ item.peopleNum + '次观看' }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 艺考题库列表 -->
			<view v-show="yikaoTikuStatus">
				<view class="question-content" v-for="(item, index) in yikaoTikuList" :key="index">
					<view class="question-img"><image src="../../static/img/firstIcon/tiku.png" mode=""></image></view>
					<view @click="zhenti_next(item.id)">{{ item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title }}</view>
				</view>
			</view>
			<!-- <yikaoDongtai></yikaoDongtai> -->
		</view>

		<!-- <yikaoKecheng></yikaoKecheng> -->
	</view>
</template>

<script>
import { yikaoDongtai } from '../../components/index/yikaoDongtai.vue';
import { yikaoKecheng } from '../../components/index/yikaoKecheng.vue';
import { getWenxuexiTestList } from '../../api/api.js';
import {
	getLunboList,
	getyikaoDongtaiList,
	getmoreList,
	getmoreList1,
	getyikaoDongtaiList_one,
	getyikaoKechengList,
	getyikaoTikuList,
	getyikaoTikuList_one
} from '../../api/api.js';
export default {
	components: {
		yikaoDongtai,
		yikaoKecheng
	},
	data() {
		return {
			currentIndex: 0,
			// 输入框的数据
			input_value: '',
			//新输入框的值
			inputs_text: '',
			//输入框默认的值
			placeholders: '搜索',
			//输入框默认的样式
			// placeholders_styles:'iconfont icon-sousuo',
			//轮播图的数组地址
			swipers: [],
			// 当前显示的指示点
			currentDotIndex: 0,
			//艺考动态标题栏的切换
			isactive: true,
			//艺考课程标题栏的切换
			isactive1: false,
			//艺考题库标题栏的切换
			isactive2: false,
			//适配手机高度
			phoneHeight: 0,
			//艺考动态显示隐藏的状态
			yikaoDongtaiStatus: true,
			//艺考课程显示隐藏的状态
			yikaoKechengStatus: false,
			//艺考题库显示隐藏的状态
			yikaoTikuStatus: false,
			//艺考动态列表数据
			yikaoDongtaiList: [],
			//艺考课程列表数据
			yikaoKechengList: [],
			//艺考题库列表数据
			yikaoTikuList: [],
			//艺考动态目前的页码
			currentPage: 1,
			isSearch: true,
			//默认状态为艺考动态的
			sousuoTyoe: 1
		};
	},
	onLoad() {
		//模拟ajax获取数据，uni.request({...});注意回调的this指向
		// this.swipers=['../../static/img/lunbo1.jpg',
		// "../../static/img/lunbo2.jpg",
		// "../../static/img/lunbo3.jpg"
		// ];
		//获取窗口高度，适配手机
		this.getWindowHeight();
		//获取轮播图数据
		this.getLunboLists();
		//获取艺考动态列表数据
		this.getyikaoDongtaiLists();
	},
	//下拉触底的时候触发
	onReachBottom() {
		// console.log(222);
		//1为艺考动态，2为艺考课程，3为艺考题库
		let sousuoTyoe = this.sousuoTyoe;
		let currentPage = this.currentPage;
		let pageSize = 4;
		currentPage = currentPage + 1;
		getmoreList(sousuoTyoe, currentPage, pageSize).then(res => {
			console.log(res.data.artexamdynamicList);
			// console.log(res.data.msg);
			if (res.data.msg == '页码超出了哦!') {
				return false
			} else {
				this.yikaoDongtaiList = this.yikaoDongtaiList.concat(res.data.artexamdynamicList);
				this.currentPage = currentPage;
				uni.setStorage({
					key: 'yikaoDongtaiList',
					data: this.yikaoDongtaiList
				});
			}
		});
	},
	methods: {
		swierChange(e) {
			// console.log(e.detail);
			this.currentDotIndex = e.detail.current;
			this.currentIndex = e.detail.current;
		},
		// 轮播图跳转
		handleSwiperClick(type, id) {
			console.log(type, id);
			if (type == 1) {
				this.yikaoDongtai(id);
			} else if (type == 2) {
				this.yikaokecheng_click(id);
			} else {
				this.zhenti_next(id);
			}
		},
		//获取艺考动态列表数据
		getyikaoDongtaiLists() {
			getyikaoDongtaiList().then(res => {
				// console.log(res.data.artexamdynamicList);
				this.yikaoDongtaiList = res.data.artexamdynamicList;
				uni.setStorage({
					key: 'yikaoDongtaiList',
					data: this.yikaoDongtaiList
				});
			});
		},
		//获取轮播图数据
		getLunboLists() {
			// console.log(111);
			getLunboList().then(res => {
				console.log(res.data.banners);
				this.swipers = res.data.banners;
			});
		},
		//获取窗口高度，适配手机
		getWindowHeight() {
			uni.getSystemInfo({
				success: res => {
					// console.log(res);
					// console.log("手机可用高度:"+res.windowHeight*2+"rpx");
					this.phoneHeight = res.windowHeight;
					// console.log(res.windowHeight);
					// console.log(this.phoneHeight);
					// this.$store.commit('set_window_height',res.windowHeight*2);
				}
			});
		},
		//艺考课程
		yikaokecheng_click(id) {
			// console.log(id);
			uni.navigateTo({
				url: '../yikaokecheng_item/yikaokecheng_item?ids=' + id
			});
		},
		//点击向右箭头触发，打开题库,打开为id的试卷
		zhenti_next(id) {
			console.log(id);
			// uni.navigateTo({
			// 	url: '../xinggepinggu/xinggepinggu?ids=' + id
			// });
			uni.navigateTo({
				url: '../question/question?id=' + id
			});
		},
		//点击艺考题库触发
		yikaiTiku() {
			this.isactive = false;
			this.isactive1 = false;
			this.isactive2 = true;
			this.yikaoDongtaiStatus = false;
			this.yikaoKechengStatus = false;
			this.yikaoTikuStatus = true;
			//获取艺考题库列表
			getyikaoTikuList().then(res => {
				console.log(res.data.rows);
				this.yikaoTikuList = res.data.rows;
			});
			this.sousuoTyoe = 3;
		},
		//点击艺考课程触发
		yikaoKecheng() {
			// console.log(1111);
			this.isactive = false;
			this.isactive1 = true;
			this.isactive2 = false;

			this.yikaoDongtaiStatus = false;
			this.yikaoKechengStatus = true;
			this.yikaoTikuStatus = false;
			getyikaoKechengList().then(res => {
				console.log(res.data.artexams);
				this.yikaoKechengList = res.data.artexams;
			});
			this.sousuoTyoe = 2;
		},
		//点击艺考动态触发
		yikaoDongtai2() {
			this.isactive = true;
			this.isactive1 = false;
			this.isactive2 = false;

			this.yikaoDongtaiStatus = true;
			this.yikaoKechengStatus = false;
			this.yikaoTikuStatus = false;

			console.log(this.yikaoDongtaiList);
		},
		//点击查看某一篇的艺考动态信息
		yikaoDongtai(ids) {
			uni.navigateTo({
				url: '../yikaoxiangqing/yikaoxiangqing?id=' + ids
			});
		},
		//点击输入框，获得焦点时
		getFocus() {
			uni.navigateTo({
				url: '../test_search/test_search'
			});
		},
		//点击进入性格评估
		xinggepinggu() {
			let ids = 0;
			getWenxuexiTestList(ids)
				.then(res => {
					console.log(res.data.data);
					let arr = res.data.data;
					let newArr = [];
					//去除没有达到一项的数据
					for (let i = 0; i < arr.length; i++) {
						// console.log(arr[i]);
						if (arr[i].optionsList.length > 1) {
							newArr.push(arr[i]);
						}
					}

					uni.setStorage({
						key: 'lists1',
						data: newArr
					});
					console.log(newArr);
				})
				.then(() => {
					let valueArr = [];
					uni.navigateTo({
						url: '../xinggepinggu2/xinggepinggu2?id=' + ids + '&valueArr=' + valueArr
					});
				});
		}
	}
};
</script>

<style lang="scss">
@import '../../style/iconfont.css';

// 轮播图样式
.swiper-box {
	position: relative;
	width: 100%;
	height: 292rpx;
}

.swiper-item-box {
	padding-right: 18rpx;
}

.slide-image {
	display: block;
	height: 292rpx;
	width: 100%;
	z-index: 5;
	opacity: 0.8;
	border-radius: 16rpx;
}

.active {
	opacity: 1;
	z-index: 10;
}

// 指示点样式
.dots-container {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 24rpx;
	display: flex;
	justify-content: center;
}

.dot {
	margin: 0 2rpx;
	width: 16rpx;
	height: 10rpx;
	background-color: #fff;
	opacity: 1;
	border-radius: 10rpx;
	transition: all 0.2s linear;
}

.dots-container .active {
	width: 30rpx;
	height: 10rpx;
	background-color: #ed5c4d;
}

// 测评模块
.test-box {
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	margin: 28rpx 0rpx;
}
.to-service {
	width: 320rpx;
	height: 140rpx;
	margin: 0rpx;
	padding: 0rpx;
	border-width: 0px;
	background-color: #ffffff;
}
.to-service::after {
	border-width: 0rpx;
}
.test-box .online,
.accurate {
	width: 320rpx;
	height: 140rpx;
	background-color: #ffffff;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
}

.test-box .test-logo-one {
	width: 80rpx;
	height: 90rpx;
	margin: 0rpx 30rpx;
}
.test-box .test-logo-two {
	width: 80rpx;
	height: 80rpx;
	margin: 0rpx 30rpx;
}

.test-box .test-logo-one image,
.test-box .test-logo-two image {
	width: 100%;
	height: 100%;
}

.test-box .test-title {
	width: 160rpx;
}

.test-box .test-title-top {
	font-size: 16px;
	font-weight: 400;
	line-height: 50rpx;
	color: #ed5c4d;
}

.test-box .test-title-bottom {
	margin-top: 8rpx;
	font-size: 12px;
	font-weight: 400;
	line-height: 17px;
	color: #6e7580;
}

// 根盒子
.all_content {
	width: 100%;
	height: 100%;

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
		}
	}

	.home {
		width: 100%;
		height: 340rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		swiper {
			width: 90%;
			height: 335rpx;
		}

		image {
			width: 100%;
			height: 100%;
		}
	}

	// 艺考动态,课程样式
	.Shouye_content {
		width: 100%;

		.content_title {
			width: 100%;
			display: flex;

			.dct-title {
				display: flex;
				flex: 1;
				height: 40rpx;
				align-items: center;
				justify-content: center;
				margin-bottom: 32rpx;
				font-size: 28rpx;
				font-weight: 300px;

				image {
					width: 36rpx;
					height: 36rpx;
					margin-right: 6rpx;
				}
			}
			// 分割线
			.divider-line {
				border-left: 1px solid #a9afb8;
				border-right: 1px solid #a9afb8;
			}
			.isActive {
				font-weight: 400px;
				font-size: 32rpx;
				color: #ed5c4d;
			}
		}

		// 艺考动态列表样式
		.dynamic-content,
		.class-content {
			display: flex;
			align-items: center;
			width: 670rpx;
			height: 192rpx;
			margin: 0rpx auto 28rpx;
			border-radius: 16rpx;
			background-color: #ffffff;
		}
		.dynamic-content .dynamic-img,
		.class-content .class-img {
			width: 232rpx;
			height: 160rpx;
			margin: 0rpx 16rpx;
			border-radius: 8px;
			overflow: hidden;
		}
		.dynamic-content .dynamic-img image,
		.class-content .class-img image {
			width: 100%;
			height: 100%;
		}
		.dynamic-detail,
		.class-detail {
			width: 368rpx;
			height: 160rpx;
			display: flex;
			flex-direction: column;
		}
		.dynamic-title,
		.class-title {
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
		// 艺考题库样式
		.question-content {
			display: flex;
			align-items: center;
			width: 670rpx;
			height: 112rpx;
			margin: 10rpx auto 0rpx;
			background: #ffffff;
			border-radius: 14rpx;
			font-size: 28rpx;
			font-weight: 700;
			color: #0f1826;
		}
		.question-img {
			width: 40rpx;
			height: 40rpx;
			margin: 0rpx 30rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
//查看更多的样式
.see_more {
	width: 100%;
	height: 100rpx;
	// border:1px solid pink;
	display: flex;
	align-items: center;
	justify-content: center;

	.see_more_title {
		width: 150rpx;
		height: 50rpx;
		// border:1px solid blue;
		text-align: center;
		border-radius: 25rpx;
		background-color: #196ad4;
		color: #fff;
		font-weight: bold;
	}
}
</style>
