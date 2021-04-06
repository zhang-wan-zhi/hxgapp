<template>
	<view class="content">
		<view class="getUser">
			<view class="getUser_top">
				<view class="getUser_top_title">确认授权登录</view>
			</view>
			<view class="shouquan_button">
				<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {getTest} from '../../api/http.js'
	export default {
		data() {
			return {
				userInfo:[]
			}
		},
		onLoad() {
           this.getInfo();
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
									url:'../shouye/shouye'
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

<style lang="scss">
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
			height:350rpx;
			border:1rpx solid #F7A3A2;
			border-radius: 25rpx;
			position:absolute;
			top:50%;
			left:50%;
			margin-top:-175rpx;
			margin-left:-35%;
			.getUser_top{
				width:100%;
				height:80rpx;
				border:1rpx solid red;
				text-align: center;
				.getUser_top_title{
					width:230rpx;
					height:80rpx;
					border:1rpx solid blue;
					float:left;
					line-height: 80rpx;
					color:#F7A3A2;
					margin-left:180rpx;
					// font-family: SourceHanSansSC-bold;
				}
			}
			.shouquan_button{
				width:100%;
				height:100rpx;
				border:1px solid red;
			}
		}
	}
</style>
