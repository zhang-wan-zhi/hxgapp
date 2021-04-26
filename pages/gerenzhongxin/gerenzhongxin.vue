<template>
	<view>
		<view class="content2">
			<view class="content2_bg">
				<image src='../../static/img/gerenzhongxin_bg.png'></image>
			</view>
			<!-- :style="{height:phoneHeight*0.25+'px;'}" -->
			<view class="content2_user" >
				<view class="content2_user_content">
					<view class="content2_user_content_bg">
						<image :src="userData.avatarUrl"></image>
					</view>
					<!-- <view class="content2_user_title">{{userData.nickName}}</view> -->
					<view class="content2_user_update">
						<view class="content2_user_update_content" @click="click_shouquan" >
							<view  class="content2_user_img">{{userData.nickName}}</view>
							<!-- <view class="content2_user_update_img">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</view> -->
						</view>
						
					</view>
				</view>
			</view>
			<view class="content2_content">
				<view class="content2_content_body" >
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/fenxiang.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">分享好友</view>
							<button class="content2_content_body1s_fenxiang_img" open-type="share" data-name="share-btn" hover-class="none">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</button>
						</view>
					</view>
					
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/yijian_img.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">意见反馈</view>
							<button class="content2_content_body1s_fenxiang_img" @click="yijianFangkui">
								<image src="../../static/svg/xiugai_next.svg" ></image>
							</button>
						</view>
					</view>
					
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/guanyu_img.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">关于我们</view>
							<button class="content2_content_body1s_fenxiang_img" @click="guanyuwomeng">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</button>
						</view>
					</view>
				</view>
			</view>
			
			<view class="content2_bottom">
				<view class="content2_bottom1" @click="exitLogin">退出登录</view>
			</view>
			
			<view style="width:200rpx;height:50rpx;border:1px solid red;" @click="test">测试做题</view>
		</view>
	</view>
</template>

<script>
	import {TestApi} from '../../api/api.js'
	export default {
		data() {
			return {
				imgArr:[`../../static/img/touxiang_img.png`],
				//适配手机高度
				phoneHeight:0,
				userData:{
					avatarUrl:'../../static/img/gerenzhongxin_moren_logo.png',
					nickName:'登录/注册'
				},
				//是否显示授权文本
				isShow:true
			}
		},
		methods: {
			//点击分享图标触发
			// fengxiang(){
			// 	console.log(2222);
			// },
			test(){
				// TestApi(1,1,1000).then((res)=>{
				// 	console.log(res);
				// })
				uni.navigateTo({
					url:'../test/test'
				})
			},
			//获取窗口高度，适配手机
			getWindowHeight(){
				uni.getSystemInfo({
					success:(res)=>{
						// console.log(res);
						// console.log("手机可用高度:"+res.windowHeight*2+"rpx");
						this.phoneHeight=res.windowHeight;
						// console.log(res.windowHeight);
						// console.log(this.phoneHeight);
						// this.$store.commit('set_window_height',res.windowHeight*2);
					}
				})
			},
			//退出登录
			exitLogin(){
				// let sting_storage=uni.getStorageSync('userData');
				// console.log(sting_storage);
				
				uni.showModal({
					title: '温馨提示',
					content: '您要退出登录吗？',
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.removeStorage({key:'userData'});
							//解决退出登录的bug
							uni.reLaunch({
								url:'../gerenzhongxin/gerenzhongxin'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			//登录授权
			click_shouquan(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			//关于我们
			guanyuwomeng(){
				uni.navigateTo({
					url:'../guanyuwomeng/guanyuwomeng'
				})
			},
			//意见反馈
			yijianFangkui(){
				
				uni.navigateTo({
					url:'../yijianFangkui/yijianFangkui'
				})
			},
			//点击修改触发
			xiugai(){
				//跳转到个人信息修改页面
				uni.navigateTo({
					url:'../gerenzhongxin_update/gerenzhongxin_update'
				})
				//console.log(111);
				
			}
		},
		onLoad(){
			
			// this.userData.avatarUrl=userData.avatarUrl;
			//用户名
			// let userName=userData.nickName;
			// let userAvate=userData.avatarUrl;
			// console.log(JSON.parse(sting_storage.rawData));
			// console.log(JSON.parse(sting_storage).avatarUrl);
		},
		onShow(){
			let sting_storage=uni.getStorageSync('userData');
			console.log(sting_storage.userInfo);
			let userData=sting_storage.userInfo;
			this.userData=userData;
			if(userData!=null){
				this.isShow=false;
			}
		},
		onShareAppMessage:function(e){
			let title='掐指艺算';
			//同步获取图像名称
			let sting_storage=uni.getStorageSync('login_info')
			return {
				title:title,
				path:'pages/shouye/shouye'
				// imageUrl:JSON.parse(sting_storage).avatarUrl
			}
		}
	}
</script>

<style lang="scss" scoped>
.content2{
	.content2_bg{
		width:100%;
		height:280rpx;
		position:absolute;
		top:0;
		// border:1px solid red;
		z-index:-1;
		image{
			width:100%;
			height:100%;
		}
	}
	.content2_user{
		width:100%;
		height:280rpx;
		// border:1px solid red;
		margin-top:100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0,0,0,0.01);
		.content2_user_content{
			border-radius: 20rpx;
			width:60%;
			height:280rpx;
			border:1px solid #ccc;
			background-color: #fff;
			.content2_user_content_bg{
				width:100%;
				height:120rpx;
				// border:1px solid #2A2929;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top:10rpx;
				image{
					border:1px solid #2A2929;
					width:120rpx;
					height:120rpx;
					border-radius: 50%;	
					//使得头像，水平垂直居中
					// margin:0 auto;
				}
			}
			.content2_user_title{
				width:100%;
				height:60rpx;
				line-height: 60rpx;
				text-align: center;
				// border:1px solid pink;
			}
			.content2_user_update{
				width:100%;
				height:60rpx;
				// border:1px solid blue;
				display: flex;
				align-items: center;
				justify-content: center;
				.content2_user_update_content{
					width:250rpx;
					height:60rpx; 
					line-height:60rpx; 
					text-align:center;
					border-radius:5rpx;
					margin-top: 75rpx;
					// border:1px solid red;
					.content2_user_img{
						width:200rpx;
						height:60rpx; 
						line-height:60rpx; 
						text-align:center;
						border-radius:15rpx;
						// border:1px solid #FFA6A6;
						float:left;
						margin-left:35rpx;
					}
					.content2_user_update_img{
						width:30rpx;
						height:60rpx; 
						line-height:60rpx; 
						text-align:center;
						border-radius:5rpx;
						// border:1px solid #2A2929;
						float:left;
						image{
							// border:1px solid #2A2929;
							width:100%;
							height:100%;
						};
					}
				}
				.isNotNameShow{
					display: none;
				}
			}
			
		}
		
	}
	.content2_content{
		width:100%;
		height:400rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.content2_content_body{
			width:90%;
			height:300rpx;
			border:1px solid #ccc;
			border-radius: 10rpx;
			.content2_content_body1{
				width:100%;
				height:90rpx;
				// border:1px solid blue;
				
				display: flex;
				align-items: center;
				justify-content: center;
				.content2_content_body1s{
					width:95%;
					height:90rpx;
					color:#222222;
					font-size: 24rpx;
					// border:1px solid red;
					border-bottom:1px solid #ccc;
					.content2_content_body1s_fenxiang{
						width:60rpx;
						height:60rpx;
						margin-top:10rpx;
						// border:1px solid pink;
						float:left;
						image{
							width:90%;
							height:90%;
						}
					}
					.content2_content_body1s_fenxiang_title{
						width:160rpx;
						height:90rpx;
						line-height: 90rpx;
						margin-left:10rpx;
						// border:1px solid pink;
						float:left;
					}
					.content2_content_body1s_fenxiang_img{
						width:80rpx;
						height:80rpx;
						background-color: #fff;

						// border:1px solid pink;
						margin-top:5rpx;
						border-radius: 0;
						float:right;
						image{
							// width:100%;
							// height:100%;
							margin-left:-10rpx;
							width:40rpx;
							height:80rpx;
						}
					}
					button::after{
						border: none;
						background-color: none;
					}

				}
			}
		}
	}
	.content2_bottom{
		width:100%;
		height:60rpx;
		// border:1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom:70rpx;
		.content2_bottom1{
			width:180rpx;
			height:60rpx;
			line-height: 60rpx;
			text-align: center;
			// border:1px solid red;
			border-radius: 15rpx;
			bottom:60rpx;
			background-color: #4CB5F6;
			color:#fff;
		}
	}
}
</style>
