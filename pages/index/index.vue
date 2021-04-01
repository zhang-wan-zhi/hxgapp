<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- <view class='denglu' @click="getShouquan()">授权登录</view> -->
		<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
	</view>
</template>

<script>
	import {getTest} from '../../api/http.js'
	export default {
		data() {
			return {
				title: 'Hello',
				userInfo:[]
			}
		},
		onLoad() {
           this.getInfo();
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
      //                success: (res)=>{
						//  console.log(res.data.data);
					 // },
      //                fail: (err)=>{}
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
		   
		   //获取用户授权信息
		   // getShouquan(){
			  //  console.log(111);
		   // },
		   
		   //登录授权
		   	onGotUserInfo: function(e) {
		   			// console.log('aaaaa', e);
		   			let rawData = e.detail.rawData;
					// console.log(typeof e.detail.rawData);
		   			if (e.detail.iv) {
		   				this.userInfo = e.detail.userInfo;
		   				uni.login({
		   					provider: 'weixin',
		   					success: function(loginRes) {
		   						// console.log(loginRes);
		   						// console.log(rawData);
								//同步存储用户信息的数据
								uni.setStorageSync('login_info',rawData);
								//跳转到首页
								//使用uni.switchTab进行tab切换，解决授权，无法跳转到首页的bug
								uni.switchTab({
									url:'../wenxuexi/wenxuexi'
								});
		   				// 		uni.request({
		   				// 			url: `${this.$serverUrl}api/TestDenglu`,//仅为示例，并非真实接口地址。)
									// // #ifdef H5
									// url:'/api/api/TestDenglu',
									// // #endif
									// method: 'POST',
									// contentType: 'application/json;charset=UTF-8',
		   				// 			data: {
		   				// 				rawData: rawData,
		   				// 				code: loginRes.code
		   				// 			},
		   				// 			success: res => {
		   				// 				console.log(res);
		   				// 			}
		   				// 		});
		   					},
		   				});
		   			} else {
		   				uni.showToast({
		   					title: '用户拒绝授权',
		   					icon: 'none'
		   				});
		   			}
				}	
		   
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.denglu{
		width:150rpx;
		height:50rpx;
		/* border:1px solid blue; */
		background-color: green;
		border-radius: 5rpx;
		text-align: center;
		line-height: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
