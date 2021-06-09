<template>
	<view>
		<view class="again" @click="resetAnswer"><text>重新答题</text></view>
		<view class="reportplus" v-if="permissions === '2'">
			<view class="content_top">
				<view class="leftsemicircle"></view>
				<view class="rightsemicircle"></view>
				<view class="user-img"><image :src="bgurl"></image></view>
				<!-- <view style="background:url({{bgurl}});" class="portrait" >
				</view> -->
				<view class="university">
					<text>{{ nickName }}的性格评估</text>
				</view>
			</view>
			<view class="content-plus">
				<text class="plus-title">综合得分</text>
				<view class="charts-box">
					<qiun-data-charts
						type="radar"
						:opts="{ legend: { show: false }, extra: { radar: { gridType: 'circle', max: 10000 }, tooltip: { showBox: false } } }"
						:chartData="chartsData"
					/>
					<view class="charts-data" v-for="item in reportData" :key="item.title">
						<view class="minicircle"></view>
						<view class="data-title">{{ item.title + ':' }}</view>
						<view class="data-num">{{ item.data }}</view>
					</view>
				</view>
				<!-- 学习建议 -->
				<view class="study-suggest">
					<view class="default-title">学习建议</view>
					<view class="study-suggest-item" v-for="item in studySuggests" :key="item.id">{{ item.asdsName }}</view>
				</view>
				<!-- 专业建议 -->
				<view class="study-suggest">
					<view class="default-title">专业建议</view>
					<view class="study-suggest-item" v-for="item in suitAbleMajor" :key="item.id">{{ item }}</view>
				</view>
				<!-- 条件分享 -->
				<view class="suggest">
					<view class="suggest-item" v-for="item in suggestList" :key="item.id">
						<view :class="['suggest-item-title', { 'suggest-item-check': showTextList.indexOf(item.id) !== -1 }]" @click="showText(item.id)">{{ item.asdcTitle }}</view>
						<view v-show="showTextList.indexOf(item.id) !== -1">
							<view class="suggest-item-text" v-for="text in item.askstudydiatoselects" :key="text.id">{{ text.asdsName }}</view>
						</view>
					</view>
				</view>
				<!-- 学校推荐 -->
				<view class="school-recommend">
					<view :class="['school-list', { 'school-list-check': showChong }]" @click="this.showChong = !this.showChong">冲刺学校</view>
					<view v-if="showChong">
						<view v-if="baogaoinfo.xuexiao.cong.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.cong" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
							</view>
						</view>
						<view class="school-item" v-else>没有可以匹配的学校哦~</view>
					</view>
					<view :class="['school-list', { 'school-list-check': showWeng }]" @click="this.showWeng = !this.showWeng">重点学校</view>
					<view v-if="showWeng">
						<view v-if="baogaoinfo.xuexiao.weng.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.weng" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
							</view>
						</view>
						<view class="school-item" v-else>没有可以匹配的学校哦~</view>
					</view>
					<view :class="['school-list', { 'school-list-check': showBao }]" @click="this.showBao = !this.showBao">保底学校</view>
					<view v-if="showBao">
						<view v-if="baogaoinfo.xuexiao.bao.length > 0">
							<view class="school-item" v-for="item in baogaoinfo.xuexiao.bao" :key="item.id">
								<view class="item-img"><image src="../../static/img/hubeimeishu.jpg"></image></view>
								<view class="item-main">
									<view class="item-main-top">{{ item.acName }}</view>
									<view class="item-main-btm">{{ item.acMajor }}</view>
								</view>
							</view>
						</view>
						<view class="school-item" v-else>没有可以匹配的学校哦~</view>
					</view>
				</view>
				<!-- 分享 -->
				<view class="share-report">
					<view class="leftsemicircle"></view>
					<view class="rightsemicircle"></view>
					<button type="default">分享</button>
				</view>
			</view>
		</view>
		<!-- 会员版 -->
		<view class="reportpro" v-else>
			<view class="content_top">
				<view class="leftsemicircle"></view>
				<view class="rightsemicircle"></view>
				<view class="user-img"><image :src="bgurl"></image></view>

				<view class="university">
					<text>{{ nickName }}的性格评估</text>
				</view>
			</view>
			<!-- content -->
			<view class="reportpro__content">
				<view class="reportpro__content__title">综合得分</view>
				<view class="reportpro__content__nums">{{ baogaoinfo.overAllScore }}</view>
				<view class="reportpro__content__text">继续努力呀~</view>
				<view class="reportpro__content__sug" v-if="permissions === '1'">
					<view class="sug-title">学习时机</view>
					<view class="sug-text">国庆节起</view>
					<view class="sug-title">整体印象</view>
					<view class="sug-text">比较合适</view>
				</view>
			</view>
			<!-- 分享 -->
			<view class="share-report">
				<view class="leftsemicircle"></view>
				<view class="rightsemicircle"></view>
				<button type="default">分享</button>
			</view>
			<!-- more -->
			<view class="reportpro__more">
				<button type="default">{{ permissions == '1' ? '升级专业版查看更多' : '升级查看更多' }}</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//适配手机高度
			phoneHeight: 0,
			//测试的结果对象
			pingce: [],
			// 体验版的状态
			isTiyan: false,
			// 微信头像
			bgurl: '',
			//微信名字
			nickName: '',
			turenum: '4',
			falsenum: '6',
			score: '0',
			permissions: '',
			reportData: [],
			chartsData: {},
			baogaoinfo: '',
			showChong: false,
			showWeng: false,
			showBao: false,
			showTextList: [],
			suggestList: '',
			studySuggests: '',
			// 专业建议
			suitAbleMajor: ''
		};
	},
	onLoad() {
		// 查看用户身份0普通，1会员，2专业会员
		/* this.permissions = uni.getStorageSync('huiyuan').type + '' */
		this.permissions = '2';
		// 获取上一个页面的信息
		uni.$on('baogao', res => {
			this.baogaoinfo = res;
			this.suggestList = res.haomai[1].childAskstudydiagnosiscatalogs;
			this.studySuggests = res.haomai[0].childAskstudydiagnosiscatalogs[0].askstudydiatoselects;
			this.chartsData = res.chartsData;
			this.suitAbleMajor = res.suitAbleMajor;
			console.log('接受成功', res);
		});
		uni.$emit('need');
		// 数据显示

		for (let i = 0; i < this.chartsData.categories.length; i++) {
			let dataNums = this.chartsData.series[0].data[i] / 100;
			this.reportData.push({
				title: this.chartsData.categories[i],
				data: Math.round(dataNums * 100) / 100
			});
		}
		// 获取用户信息
		let userinfo = uni.getStorageSync('userData').userInfo;
		this.bgurl = userinfo.avatarUrl;
		this.nickName = userinfo.nickName;

		// 获取页面高度
		this.getWindowHeight();
	},
	/* onUnload() {
		// 移除监听事件
		uni.$off('baogao');
	}, */
	methods: {
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
		backTo() {
			uni.reLaunch({
				// url: 'test?id=1&name=uniapp'  c传递参数

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
		width: 643rpx;
		background-color: #ffffff;
		.plus-title {
			color: #7b818b;
			font-size: 35rpx;
			margin: 30rpx 0;
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
				font-size: 31rpx;
				font-weight: 400;
				margin-top: 30rpx;
				margin-left: 60rpx;
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
				margin: 40rpx 0 40rpx 40rpx;
			}
			.school-list-check {
				color: #b0b5bd;
			}
			.school-item {
				display: flex;
				width: 566rpx;
				margin-left: 60rpx;
				padding: 20rpx 0 30rpx 0;
				border-bottom: 1px solid #dadbdd;
				.item-img {
					width: 40px;
					height: 40px;
					flex-shrink: 0;
					border-radius: 50%;
					overflow: hidden;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.item-main {
					margin-left: 30rpx;
					.item-main-top {
						height: 35px;
						line-height: 35px;
						font-size: 35rpx;
						color: #273253;
					}
					.item-main-btm {
						font-size: 27rpx;
						color: #92969d;
					}
				}
			}
		}
	}
}
// 会员版
.reportpro {
	display: flex;
	flex-direction: column;
	align-items: center;
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 643rpx;
		height: 830rpx;
		background-color: #ffffff;
		&__title {
			width: 142rpx;
			height: 48rpx;
			margin-top: 18rpx;
			font-size: 35rpx;
			font-weight: 400;
			line-height: 48rpx;
			color: #6e7580;
		}
		&__nums {
			width: 507rpx;
			height: 177rpx;
			margin-top: 90rpx;
			font-size: 173rpx;
			text-align: center;
			font-weight: 400;
			line-height: 177rpx;
			color: #fbbe4b;
			letter-spacing: 7rpx;
		}
		&__text {
			width: 157rpx;
			height: 38rpx;
			margin-top: 8rpx;
			margin-bottom: 86rpx;
			font-size: 27rpx;
			font-weight: 400;
			line-height: 38rpx;
			color: #f4e9da;
		}
		&__sug {
			width: 567rpx;
			height: 377rpx;
			border-top: 2px dotted #dadbdd;
			.sug-title {
				height: 48rpx;
				margin-top: 67rpx;
				font-size: 35rpx;
				font-weight: 400;
				line-height: 42rpx;
				color: #a9afb8;
				letter-spacing: 7rpx;
			}
			.sug-text {
				width: 567rpx;
				height: 42rpx;
				font-size: 31rpx;
				text-align: center;
				font-weight: 400;
				line-height: 42rpx;
				color: #273253;
				letter-spacing: 3rpx;
			}
		}
		.leftsemicircle1 {
			// background-color: #F0F0F0;
			position: absolute;
			background-color: #f0f0f0;
			height: 40rpx;
			width: 40rpx;
			border-radius: 20rpx;
			margin-top: -150rpx;
			margin-left: 650rpx;
		}
		.rightsemicircle1 {
			position: absolute;
			background-color: #f0f0f0;
			height: 40rpx;
			width: 40rpx;
			border-radius: 20rpx;
			margin-top: -150rpx;
			margin-left: -20rpx;
		}
	}
	&__more {
		button {
			width: 628rpx;
			height: 84rpx;
			margin-top: 48rpx;
			background: #fbbe4b;
			opacity: 1;
			border-radius: 46rpx;
			line-height: 84rpx;
			color: #ffffff;
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
		height: 58rpx;
		width: 230rpx;
		line-height: 58rpx;
		color: #ffffff;
		background-color: #57b5ed;
		border-radius: 46rpx;
	}
}
</style>
