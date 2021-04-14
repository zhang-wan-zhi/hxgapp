<template>
	<view>
		<view class="gerenzhongxin_updates">
			<view class="gerenzhongxin_updates1">
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">头像</view>
					<view class="gerenzhongxin_updates_content_center">
						<image :src="imgArr[0]"></image>
					</view>
					<view class="gerenzhongxin_updates_content_right" @click="xiugaitouxiang">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">用户名</view>
					<view class="gerenzhongxin_updates_content_center2">加油吧，少年</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">性别</view>
					<view class="gerenzhongxin_updates_content_center2">男</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
				
				<view class="gerenzhongxin_updates_content">
					<view class="gerenzhongxin_updates_content_left">省份</view>
					<view class="gerenzhongxin_updates_content_center2">浙江省</view>
					<view class="gerenzhongxin_updates_content_right">
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="queren_update">
			<view class="queren_update_button">确认修改</view>
		</view> -->
		
		<view class="tanchukuang" v-if="isShow">
			<view class="tanchukuang_content">
				<view class="tanchukuang_content_icon">
					<view class="tanchukuang_content_icon_img" @click="quxiao">
						<image src='../../static/svg/x.svg'></image>
					</view>
				</view>
				<view class="tanchukuang_content_title">
					<view class="tanchukuang_content_title1">头像修改</view>
				</view>
				<view class="tanchukuang_content_content">
					<view class="tanchukuang_content_content1" @click="xiugaitouxiang_img">
						<image src="../../static/img/touxiang_img.png"></image>
					</view>
				</view>
				<view class="tanchukuang_content_submit">
					<view class="tanchukuang_content_submit1" @click="quereng">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgArr:[`../../static/img/touxiang_img.png`],
				// 弹出层的显示与隐藏
				isShow:false
			}
		},
		methods:{
			//修改头像图片
			xiugaitouxiang_img(){
				uni.chooseImage({
					count:1,  //最多可以选择的张数
					sizeType:['original','compressed'],  //original为原图，compressed为压缩图
					sourceType:['album','camera'],  //album从相册选择，camera使用相机
					success:(res)=>{
						console.log(JSON.stringify(res.tempFilePaths));
					    this.imgArr=res.tempFilePaths;
					}
				})
			},
			//弹出框确认
			quereng(){
				this.isShow=false;
			},
			//右上角取消图标
			quxiao(){
				this.isShow=false;
			},
			xiugaitouxiang(){
				//显示弹出框
				console.log(1111);
				this.isShow=true;
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gerenzhongxin_updates{
		width:100%;
		height:420rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:30rpx;
		.gerenzhongxin_updates1{
			width:90%;
			height:400rpx;
			// border:1px solid orange;
			.gerenzhongxin_updates_content{
				width:90%;
				height:80rpx;
				border-bottom:1px solid #BBBBBB;
				display: flex;
				flex-direction: wrap;
				margin-left:5%;
				// justify-content: space-between;
				.gerenzhongxin_updates_content_left{
					width:120rpx;
					height:80rpx;
					line-height: 80rpx;
					text-align: center;
					// border:1px solid green;
					font-size: 30rpx;
					font-weight: bold;
				}
				.gerenzhongxin_updates_content_center{
					width:80rpx;
					height:70rpx;
					// border:1px solid green;
					margin-left:350rpx;
					image{
						width:100%;
						height:100%;
					}
				}
				.gerenzhongxin_updates_content_center2{
					width:230rpx;
					height:70rpx;
					line-height: 70rpx;
					text-align: center;
					// border:1px solid green;
					margin-left:220rpx;
					font-size:30rpx;
					// font-weight: bold;
				}
				.gerenzhongxin_updates_content_right{
					width:50rpx;
					height:50rpx;
					// border:1px solid green;
					margin-left:20rpx;
					margin-top:28rpx;
					image{
						width:100%;
						height:100%;
					}
				}
			}
		}
		
	}
	.queren_update{
		width:100%;
		height:60rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.queren_update_button{
			width:170rpx;
			height:50rpx;
			line-height: 40rpx;
			text-align: center;
			// border:1px solid red;
			border-radius: 30rpx;
			color:#fff;
			background-color: #196AD4;
		}
	}
	.tanchukuang{
		width:100%;
		height:100%;
		// border:1px solid red;
		// opacity: 0.5;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top:0;
		z-index:10;
		.tanchukuang_content{
			width:80%;
			height:345rpx;
			// border:1px solid red;
			border-radius: 30rpx;
			background-color: #fff;
			color:#000;
			.tanchukuang_content_icon{
				width:100%;
				height:30rpx;
				// border:1px solid red;
				.tanchukuang_content_icon_img{
					width:30rpx;
					height:30rpx;
					float:right;
					margin-top: 10rpx;
					margin-right:20rpx;
					// border:1px solid red;
					image{
						width:100%;
						height:100%;
					}
				}
			}
			.tanchukuang_content_title{
				width:100%;
				height:60rpx;
				// border:1px solid pink;
				display: flex;
				align-items: center;
				justify-content: center;
				.tanchukuang_content_title1{
					width:150rpx;
					height:60rpx;
					line-height: 60rpx;
					text-align: center;
					// border:1px solid blue;
					font-size: 30rpx;
					font-weight: bold;
				}
			}
			.tanchukuang_content_content{
				width:100%;
				height:160rpx;
				// border:1px solid red;
				display: flex;
				align-items: center;
				justify-content: center;
				.tanchukuang_content_content1{
					width:120rpx;
					height:120rpx;
					// border:1px solid blue;
					image{
						width:100%;
						height:100%;
					}
				}
			}
			.tanchukuang_content_submit{
				width:100%;
				height:60rpx;
				// border:1px solid pink;
				display: flex;
				align-items: center;
				justify-content: center;
				.tanchukuang_content_submit1{
					width:150rpx;
					height:60rpx;
					line-height: 60rpx;
					text-align: center;
					// border:1px solid blue;
					border-radius: 30rpx;
					color:#fff;
					background-color: #196AD4;
				}
			}
		}
	}
</style>
