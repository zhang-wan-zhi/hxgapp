<template>
	<view>
		<view class="content2">
			<view class="content2_bg">
				<image src='../../static/img/gerenzhongxin_bg.png'></image>
			</view>
			<view class="content2_user">
				<view class="content2_user_content">
					<view class="content2_user_content_bg">
						<image src="../../static/img/touxiang_img.png"></image>
					</view>
					<view class="content2_user_title">加油吧少年</view>
					<view class="content2_user_update">
						<view class="content2_user_update_content" @click="xiugai">
							<view  class="content2_user_img">修改</view>
							<view class="content2_user_update_img">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="content2_content">
				<view class="content2_content_body">
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/fenxiang.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">分享好友</view>
							<view class="content2_content_body1s_fenxiang_img">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</view>
						</view>
					</view>
					
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/yijian_img.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">意见反馈</view>
							<view class="content2_content_body1s_fenxiang_img">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</view>
						</view>
					</view>
					
					<view class="content2_content_body1">
						<view class="content2_content_body1s">
							<view class="content2_content_body1s_fenxiang">
								<image src="../../static/img/guanyu_img.png"></image>
							</view>
							<view class="content2_content_body1s_fenxiang_title">关于我们</view>
							<view class="content2_content_body1s_fenxiang_img">
								<image src="../../static/svg/xiugai_next.svg"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[`../../static/logo.png`]
			}
		},
		methods: {
			//点击修改触发
			xiugai(){
				//console.log(111);
				uni.chooseImage({
					count:1,  //最多可以选择的张数
					sizeType:['original','compressed'],  //original为原图，compressed为压缩图
					sourceType:['album','camera'],  //album从相册选择，camera使用相机
					success:(res)=>{
						console.log(JSON.stringify(res.tempFilePaths));
					    this.imgArr=res.tempFilePaths;
					}
				})
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
				// border:1px solid pink;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top:10rpx;
				image{
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
					width:150rpx;
					height:60rpx; 
					line-height:60rpx; 
					text-align:center;
					border-radius:5rpx;
					// border:1px solid red;
					.content2_user_img{
						width:75rpx;
						height:60rpx; 
						line-height:60rpx; 
						text-align:center;
						border-radius:5rpx;
						// border:1px solid green;
						float:left;
						margin-left:20rpx;
					}
					.content2_user_update_img{
						width:30rpx;
						height:60rpx; 
						line-height:60rpx; 
						text-align:center;
						border-radius:5rpx;
						// border:1px solid blue;
						float:left;
						image{
							width:100%;
							height:100%;
						};
					}
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
						height:90rpx;
						// border:1px solid pink;
						float:right;
						image{
							width:100%;
							height:100%;
						}
					}
				}
			}
		}
	}
}
</style>
