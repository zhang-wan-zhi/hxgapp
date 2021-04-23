<template>
	<view class="content">
		<view class="getUser">
			<view class="getUser_top">
				<view class="getUser_top_title">确认授权登录</view>
			</view>
			<view class="getShouquan_title">
				<view class="getShouquan_title_title">该小程序将获取你的信息</view>
			</view>
			<view class="shouquan_button">
<!-- 				<button open-type="getUserInfo" class="buttons" lang="zh_CN" @getuserinfo="wechatLogin" hover-class="none">获取授权</button> -->
				<button class="buttons" @click="wechatLogin" >获取授权</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {getTest} from '../../api/http.js'
	import {getWxcode} from '../../api/api.js'
	export default {
		data() {
			return {
				userInfo:[]
			}
		},
		onLoad() {
			//获取测试接口用户名
           // this.getInfo();
		   //定义在app启动首次为横屏,锁定
		   // //#ifdef APP-PLUS
		   // plus.screen.lockOrientation('landscape-primary')
		   // //#endif
		   
		},
		
		methods: {
			
           getInfo(){
               uni.request({
                    url:`${this.$serverUrl}api/TestGet`,  //这里的lid,page,pagesize只能是数字或字母
					// #ifdef H5
					url:'/api/api/TestGet',
					// #endif
					//#ifdef APP-PLUS
					url:'http://192.168.3.30:8090/api/TestGet',
					//#endif
                     method: 'POST',
					 contentType: 'application/json;charset=UTF-8',
               }).then((res)=>{
				   console.log(res);
				   console.log(res[1].data.data[0].username);
				   this.title=res[1].data.data[0].username;
			   })
			   
			   // getTest().then((res)=>{
				  //  console.log(res.data.data);
				  //  console.log(res.data.data[0].username);
				  //  this.title=res.data.data[0].username;
			   // })
           },
		   
		   //登录授权
		 //   	onGotUserInfo: function(e) {
			// 	// console.log('aaaaa', e);
			// 	let rawData = e.detail.rawData;
			// 	console.log(e.detail.rawData);
			// 	if (e.detail.iv) {
			// 		this.userInfo = e.detail.userInfo;
			// 		uni.login({
			// 			provider: 'weixin',
			// 			success: function(loginRes) {
			// 				console.log(loginRes);
			// 				// console.log(rawData);
			// 				//同步存储用户信息的数据
			// 				uni.setStorageSync('login_info',rawData);
			// 				//跳转到首页
			// 				//使用uni.switchTab进行tab切换，解决授权，无法跳转到首页的bug
			// 				uni.switchTab({
			// 					url:'../shouye/shouye'
			// 				});
			// 		// 		uni.request({
			// 		// 			url: `${this.$serverUrl}api/TestDenglu`,//仅为示例，并非真实接口地址。)
			// 					// // #ifdef H5
			// 					// url:'/api/api/TestDenglu',
			// 					// // #endif
			// 					// method: 'POST',
			// 					// contentType: 'application/json;charset=UTF-8',
			// 		// 			data: {
			// 		// 				rawData: rawData,
			// 		// 				code: loginRes.code
			// 		// 			},
			// 		// 			success: res => {
			// 		// 				console.log(res);
			// 		// 			}
			// 		// 		});
			// 			},
			// 		});
			// 	} else {
			// 		uni.showToast({
			// 			title: '用户拒绝授权',
			// 			icon: 'none'
			// 		});
			// 	}
			// },
			//登录授权
			wechatLogin(){
				var that=this
				uni.getUserProfile({
				  desc:'登录',
				  success: function (infoRes) {
					  console.log(infoRes);
					  uni.setStorage({
					  	key:'userData',
						data:infoRes
					  })
					  uni.switchTab({
					  	url:'../shouye/shouye'
					  })
				  },
				  fail:function(res){
					  console.log(res);
				  }
				})	
				
				// 获取用户名  获取性别 获取头像 获取js_code去换取后台返回的openID
				// uni.login({
				//   provider: 'weixin',
				//   success: function (loginRes) {
				// 	console.log("wxcode",loginRes.code);

				// // 	// 获取用户信息，getUserInfo换了getUserProfile
				// 	uni.getUserProfile({
				// 	  provider: 'weixin',
				// 	  success: function (infoRes) {
				// 		  console.log(infoRes);
				// 		  uni.switchTab({
				// 		  	url:'../shouye/shouye'
				// 		  })
				// 	  },
				// 	  fail:function(res){
				// 		  console.log(res);
				// 	  }
				// 	})	
					
					
				//   },
				//   fail:function(res){}
				// })
				
			},

		   
		}
	}
</script>

<style lang="scss" scoped>
	// @font-face{
	// 	font-family:'SourceHanSansSC-bold';
	// 	src:url('~@/static/fonts/SOURCEHANSANSSC-BOLD.OTF');
	// }
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.getUser{
			width:70%;
			height:300rpx;
			border:1rpx solid #ccc;
			border-radius: 25rpx;
			position:absolute;
			top:50%;
			left:50%;
			margin-top:-175rpx;
			margin-left:-35%;
			text-shadow: 2rpx 2rpx 2rpx #ccc;
			.getUser_top{
				width:100%;
				height:80rpx;
				// border:1rpx solid red;
				text-align: center;
				.getUser_top_title{
					width:230rpx;
					height:80rpx;
					// border:1rpx solid blue;
					float:left;
					line-height: 80rpx;
					color:#101010;
					margin-left:150rpx;
					font-weight: bold;
					// font-family: SourceHanSansSC-bold;
				}
			}
			.getShouquan_title{
				width:100%;
				height:80rpx;
				// border:1rpx solid red;
				line-height:80rpx;
				text-align: center;
				font-size:30rpx;
				// .getShouquan_title_title{}
			}
			.shouquan_button{
				width:100%;
				height:80rpx;
				// border:1px solid red;
				button::after{
			      border:none;
				}
				.buttons{
					width:40%;
					height:80rpx;
					line-height: 80rpx;
					background-color: #28B942;
					font-size: 25rpx;
					color:#fff;
					margin-top:15rpx;
				}
			}
		}
	}
</style>
