<template>
	<view class="box">
		<!-- 轮播图区域 -->
		<view style="margin: 30rpx 0rpx;">
			<swiper :current="currentIndex" :duration="duration" @change="swierChange" previous-margin="60rpx" next-margin="40rpx" class="swiper-box">
				<swiper-item>
					<view class="professional">
						<view class="user-info">
							<image src="../../static/icon/gerenzhongxin_icon_active.png" class="img"></image>
							<view class="detail">
								<view class="name">
									百年老字号
									<image src="../../static/img/my/jiangpaixunzhang1.png"></image>
								</view>
								<view class="deadline">会员有效期至：2021-06-6</view>
							</view>
						</view>
						<view class="renew">立即续费</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="members">
						<view class="user-info">
							<image src="../../static/icon/gerenzhongxin_icon_active.png" class="img"></image>
							<view class="detail">
								<view class="name">
									百年老字号
									<image src="../../static/img/my/jiangpaixunzhang.png"></image>
								</view>
								<view class="deadline">会员有效期至：2021-06-6</view>
							</view>
						</view>
						<view class="handle">
							<view class="renew">立即续费</view>
							<view class="renew" style="margin-left: 40rpx;">升级会员</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 特权区域 -->
		<view class="privilege">
			<!-- 专业版特权 -->
			<view class="pro" v-show="currentIndex === 0">
				<view class="title">专业版特权</view>
				<view class="items">
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/apinion.png" mode=""></image></view>
						<text>优质建议</text>
					</view>
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/c1.png" mode=""></image></view>
						<text>专属铭牌</text>
					</view>
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/mark.png" mode=""></image></view>
						<text>资源优享</text>
					</view>
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/face.png" mode=""></image></view>
						<text>贴心交流</text>
					</view>
				</view>
				<!-- 支付 -->
				<view class="cost" @click="toCostOne">支付99元</view>
			</view>
			<!-- 会员版特权 -->
			<view class="pro" v-show="currentIndex == 1">
				<view class="title">会员版特权</view>
				<view class="items">
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/apinion.png" mode=""></image></view>
						<text>优质建议</text>
					</view>
					<view class="item">
						<view class="item-img"><image src="../../static/img/my/c1.png" mode=""></image></view>
						<text>专属铭牌</text>
					</view>
				</view>
				<!-- 支付 -->
				<view class="cost" @click="toCostTwo">支付9.9元</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 索引代表会员类型 0 专业 1 非专业
			currentIndex: 0,
			duration:0,
		};
	},
	onLoad(res) {
		console.log(res);
		this.currentIndex = res.key;
		this.duration=500
	},
	methods: {
		// 轮播图转动时
		swierChange(obj) {
			this.currentIndex = obj.detail.current;
			console.log(this.currentIndex);
		},
		//专业会员支付功能
		async toCostOne() {
			// 获取用户openID
			const oOpenid = uni.getStorageSync('openid');
			uni.showLoading({
				title:'请求中'
			})
			console.log(oOpenid);
			// 向后端发送订单数据
			const res1 = await new Promise((resolve, reject) => {
				uni.request({
					url: 'https://orangezoom.cn:8091/hxg/pay/orders',  
					method: 'POST',
					contentType: 'application/json;charset=UTF-8',
					data: {
						oOpenid,
						oProductid: '1',
						money: '0.01'
					},
					success: res => {
						resolve(res.data.wixinPay);
						console.log(res);
					},
					fail: err => {
						reject(err);
						console.log(err);
						uni.hideLoading();
						uni.showToast({
							title:'服务器端出错',
							duration:2000
						})
					}
				});
			});
			// 获取后端返回结果
			console.log(res1);
			// 获取provider
			const provider = await new Promise((resolve, reject) => {
				uni.getProvider({
					service: 'payment',
					success(res) {
						console.log(res);
						resolve(res.provider[0]);
					},
					fail(res) {
						console.log(res);
						reject(res);
					}
				});
			});
			// console.log(provider)
			// 获取参数信息
			const timeStamp = res1.timeStamp;
			const orderInfo = res1.product_id;
			const nonceStr = res1.nonceStr;
			const packages = res1.package;
			const signType = res1.signType;
			const paySign = res1.paySign;
			console.log(timeStamp, orderInfo, nonceStr, packages, signType, paySign);
			// 发起支付
			uni.hideLoading()
			uni.requestPayment({
				provider,
				timeStamp,
				nonceStr,
				signType,
				paySign,
				orderInfo,
				package: packages,
				success(res) {
					console.log(res);
				},
				fail(res) {
					console.log(res);
				}
			});
		},
		// 普通会员充值
		async toCostTwo() {
			// 获取用户openID
			uni.showLoading({
				title:'请求中'
			})
			const oOpenid = uni.getStorageSync('openid');
			console.log(oOpenid);
			// 向后端发送订单数据
			const res1 = await new Promise((resolve, reject) => {
				uni.request({
					url: 'https://orangezoom.cn:8091/hxg/pay/orders',  
					method: 'POST',
					contentType: 'application/json;charset=UTF-8',
					data: {
						oOpenid,
						oProductid: '2',
						money: '0.01'
					},
					success: res => {
						resolve(res.data.wixinPay);
						console.log(res);
					},
					fail: err => {
						reject(err);
						console.log(err);
					}
				});
			});
			// 获取后端返回结果
			console.log(res1);
			// 获取provider
			const provider = await new Promise((resolve, reject) => {
				uni.getProvider({
					service: 'payment',
					success(res) {
						console.log(res);
						resolve(res.provider[0]);
					},
					fail(res) {
						console.log(res);
						reject(res);
					}
				});
			});
			// console.log(provider)
			// 获取参数信息
			const timeStamp = res1.timeStamp;
			const orderInfo = res1.product_id;
			const nonceStr = res1.nonceStr;
			const packages = res1.package;
			const signType = res1.signType;
			const paySign = res1.paySign;
			console.log(timeStamp, orderInfo, nonceStr, packages, signType, paySign);
			// 发起支付
			uni.hideLoading()
			uni.requestPayment({
				provider,
				timeStamp,
				nonceStr,
				signType,
				paySign,
				orderInfo,
				package: packages,
				success(res) {
					console.log(res);
				},
				fail(res) {
					console.log(res);
				}
			});
		}
	}
};
</script>

<style>
.box {
	width: 100%;
	padding-top: 30rpx;
}
.swiper-box {
	height: 320rpx;
}

.professional,
.members {
	width: 95%;
	height: 320rpx;
	background: url(../../static/img/my/huiyuan1.png) no-repeat 0px 0px;
	background-size: 100% 320rpx;
	border-radius: 16rpx;
	overflow: hidden;
}

.members {
	background: url(../../static/img/my/huiyuan2.png) no-repeat 0px 0px;
}

.user-info {
	display: flex;
	width: 100%;
	height: 100rpx;
	align-items: center;
	margin: 40rpx 0rpx 60rpx;
	letter-spacing: 2rpx;
}

.user-info .img {
	width: 84rpx;
	height: 84rpx;
	margin: 0rpx 40rpx;
}

.detail {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	height: 100rpx;
}

.name {
	font-size: 16px;
	font-weight: 400;
	line-height: 44rpx;
	color: #ffffff;
}

.name image {
	width: 36rpx;
	height: 36rpx;
	margin: 0rpx 0rpx 4rpx 10rpx;
	vertical-align: middle;
}

.deadline {
	font-size: 12px;
	font-weight: 400;
	line-height: 34rpx;
	color: #ffffff;
}

.handle {
	display: flex;
	width: 100%;
}

.renew {
	width: 152rpx;
	height: 60rpx;
	margin-left: 164rpx;
	background: #ffffff;
	text-align: center;
	line-height: 60rpx;
	font-size: 24rpx;
	color: #273253;
	border-radius: 30rpx;
}

.privilege {
	padding: 0rpx 60rpx;
}

.pro .title {
	width: 100%;
	height: 44rpx;
	font-size: 16px;
	font-weight: 400;
	line-height: 44rpx;
	color: #273253;
}
.pro {
	position: relative;
}
.items {
	display: flex;
	flex-wrap: wrap;
}

.item {
	display: flex;
	width: 25%;
	flex-direction: column;
	align-items: center;
	margin-top: 60rpx ;
}

.item-img {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100rpx;
	height: 100rpx;
	background: #ffffff;
	border: 1px solid #ed5c4d;
	border-radius: 50%;
}

.item-img image {
	width: 60rpx;
	height: 60rpx;
}
.item text {
	font-size: 24rpx;
	font-weight: 400;
	line-height: 40rpx;
	margin-top: 20rpx;
	color: #273253;
}
.cost {
	position: absolute;
	top: 300rpx;
	left: 0rpx;
	width: 100%;
	height: 88rpx;
	background: #ed5c4d;
	margin-top: 300rpx;
	line-height: 88rpx;
	text-align: center;
	border-radius: 24px;
	font-size: 18px;
	font-weight: 400;
	color: #ffffff;
}
</style>
