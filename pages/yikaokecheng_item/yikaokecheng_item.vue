<template>
	<view class="body_content">
		<view class="yikaiKecheng_item">
			<view class="yikaiKecheng_item_img">
				<image :src="yikaoKechengList_one.aeImgurl"></image>
			</view>
		</view>
		
		<view class="yikaiKecheng_item_title">
			<view class="yikaiKecheng_item_titles">
				<view class="yikaiKecheng_item_title1">{{yikaoKechengList_one.aeTitle}}</view>
				<view class="yikaiKecheng_item_title2">
					<view class="yikaiKecheng_item_title2_left">{{yikaoKechengList_one.aePrep1}}人正在观看</view>
					<view class="yikaiKecheng_item_title2_right">{{yikaoKechengList_one.aeCreatetime}}发布</view>
				</view>
			</view>
		</view>
		
		<view class="yikaiKecheng_item_icon">
			<view class="yikaiKecheng_item_icons">
				<view class="yikaiKecheng_item_icon1">
					<view class="yikaiKecheng_item_icon1_img">
						<image src="../../static/img/fenxiang_icon.png"></image>
					</view>
					<view class="yikaiKecheng_item_icon1_title">分享</view>
				</view>
				
				<view class="yikaiKecheng_item_icon1">
					<view class="yikaiKecheng_item_icon1_img">
						<image src="../../static/img/shouchang_icon.png"></image>
					</view>
					<view class="yikaiKecheng_item_icon1_title">收藏</view>
				</view>
				
				<view class="yikaiKecheng_item_icon1">
					<view class="yikaiKecheng_item_icon1_img">
						<image src="../../static/img/pinlun_icon.png"></image>
					</view>
					<view class="yikaiKecheng_item_icon1_title">评论</view>
				</view>
				
				<view class="yikaiKecheng_item_icon1">
					<view class="yikaiKecheng_item_icon1_img">
						<image src="../../static/img/dianzan_icon.png"></image>
					</view>
					<view class="yikaiKecheng_item_icon1_title">点赞</view>
				</view>
			</view>			
			
		</view>
		
		<view class="yikaiKecheng_item_content">
			
			<view class="yikaoKecheng_content_content">
				<view class="yikaoKecheng_content_content_left">
					<view class="yikaoKecheng_content_content_left_img">
						<image src="../../static/img/yikaiKecheng_img1.png"></image>
					</view>
				</view>
				<view class="yikaoKecheng_content_content_right">
					<view class="yikaoKecheng_content_content_right_top">
						<view class="yikaoKecheng_content_content_right_top_title">教你12招搞定艺考视频</view>
					</view>
					<view class="yikaoKecheng_content_content_right_bottom">
						<view class="yikaoKecheng_content_content_right_bottom_title_jianjie" style="visibility: hidden;">内部课程，仅供专业认识和11111111111111111</view>
						<view class="yikaoKecheng_content_content_right_bottom_title">
							<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
							<view class="yikaoKecheng_content_content_right_bottom_title_right">
								<!-- <view class="yikaoKecheng_content_content_right_bottom_title_right_img">
									<image src="../../static/img/huiyuanmianfei.png"></image>
								</view> -->
								<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb">免费</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="yikaoKecheng_content_content">
				<view class="yikaoKecheng_content_content_left">
					<view class="yikaoKecheng_content_content_left_img">
						<image src="../../static/img/yikaiKecheng_img2.png"></image>
					</view>
				</view>
				<view class="yikaoKecheng_content_content_right">
					<view class="yikaoKecheng_content_content_right_top">
						<view class="yikaoKecheng_content_content_right_top_title">【回放】高考延期艺考生和家长如何应对？
点下99999999999999999999</view>
					</view>
					<view class="yikaoKecheng_content_content_right_bottom">
						<view class="yikaoKecheng_content_content_right_bottom_title_jianjie" style="visibility: hidden;">内部课程，仅供专业认识和11111111111111111</view>
						<view class="yikaoKecheng_content_content_right_bottom_title">
							<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
							<view class="yikaoKecheng_content_content_right_bottom_title_right">
								<!-- <view class="yikaoKecheng_content_content_right_bottom_title_right_img">
									<image src="../../static/img/huiyuanmianfei.png"></image>
								</view> -->
								<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb">免费</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="yikaoKecheng_content_content">
				<view class="yikaoKecheng_content_content_left">
					<view class="yikaoKecheng_content_content_left_img">
						<image src="../../static/img/yikaiKecheng_img3.png"></image>
					</view>
				</view>
				<view class="yikaoKecheng_content_content_right">
					<view class="yikaoKecheng_content_content_right_top">
						<view class="yikaoKecheng_content_content_right_top_title">【直播】疫情背景下的传媒艺术创作动向
评析及99999999999999999999</view>
					</view>
					<view class="yikaoKecheng_content_content_right_bottom">
						<view class="yikaoKecheng_content_content_right_bottom_title_jianjie">内部课程，仅供专业认识和11111111111111111</view>
						<view class="yikaoKecheng_content_content_right_bottom_title">
							<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
							<view class="yikaoKecheng_content_content_right_bottom_title_right">
								<view class="yikaoKecheng_content_content_right_bottom_title_right_img" v-show="false">
									<image src="../../static/img/huiyuanmianfei.png"></image>
								</view>
								<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb" style="color:#F46667; font-size: 24rpx;">免费</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="yikaoKecheng_content_content">
				<view class="yikaoKecheng_content_content_left">
					<view class="yikaoKecheng_content_content_left_img">
						<image src="../../static/img/yikaiKecheng_img4.png"></image>
					</view>
				</view>
				<view class="yikaoKecheng_content_content_right">
					<view class="yikaoKecheng_content_content_right_top">
						<view class="yikaoKecheng_content_content_right_top_title">原来《艺考开讲》的课程是这样直播的</view>
					</view>
					<view class="yikaoKecheng_content_content_right_bottom">
						<view class="yikaoKecheng_content_content_right_bottom_title_jianjie">《艺考开讲》国庆特别课程...</view>
						<view class="yikaoKecheng_content_content_right_bottom_title">
							<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
							<view class="yikaoKecheng_content_content_right_bottom_title_right">
								<!-- <view class="yikaoKecheng_content_content_right_bottom_title_right_img">
									<image src="../../static/img/huiyuanmianfei.png"></image>
								</view> -->
								<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb" style="color:#F46667; font-size: 24rpx;">免费</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- <view class="yikaiKecheng_item_content_item">
				<view class='yikaiKecheng_item_content_item_left'>
					<view class="yikaiKecheng_item_content_item_left_img">
						<image></image>
					</view>
				</view>
				<view class='yikaiKecheng_item_content_item_right'>
					<view class="yikaiKecheng_item_content_item_right_top"></view>
					<view class="yikaiKecheng_item_content_item_right_center"></view>
					<view class="yikaiKecheng_item_content_item_right_bottom">
						<view class="yikaiKecheng_item_content_item_right_bottom_renshu"></view>
						<view class="yikaiKecheng_item_content_item_right_bottom_img"></view>
						<view class="yikaiKecheng_item_content_item_right_bottom_price"></view>
					</view>
				</view>
			</view> -->
			
		</view>
		
		<!-- <view class="yikaoKecheng_content_bottom" :style="{bottom:0}">
			<view class="yikaoKecheng_content_bottom1">购买￥99</view>
		</view> -->
	</view>
</template>

<script>
	import {getyikaoKechengList_one} from '../../api/api.js'
	export default{
		data(){
			return{
				yikaoKechengList_one:[]
			}
		},
		methods:{
			
		},
		onLoad(id){
			console.log(id.ids);
			getyikaoKechengList_one(id.ids).then((res)=>{
				// console.log(res.data.hxgArtexam);
				let oldStr=res.data.hxgArtexam.aeCreatetime;
				// console.log(oldStr.split("-").join("/"));
				this.yikaoKechengList_one=res.data.hxgArtexam;
				this.yikaoKechengList_one.aeCreatetime=oldStr.split("-").join("/");
			})
		},
		onShow(){
			
		}
	}
</script>

<style lang="scss" scoped>
	.body_content{
		width:100%;
		height:100%;
		background-color: #F5F5F5;
		// background-color: red;
	}
	.yikaiKecheng_item{
		width:100%;
		height:350rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
		.yikaiKecheng_item_img{
			width:90%;
			height:320rpx;
			image{
				width:100%;
				height:100%;
			}
		}
	}
	.yikaiKecheng_item_title{
		background-color: #FFFFFF;
		width:100%;
		height:150rpx;
		// border:1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		.yikaiKecheng_item_titles{
			width:90%;
			height:150rpx;
			// border:1px solid blue;
			.yikaiKecheng_item_title1{
				width:100%;
				height:50rpx;
				// border:1px solid blue;
				color:#333337;
				font-size: 35rpx;
				font-weight: bold;
			}
			.yikaiKecheng_item_title2{
				width:100%;
				height:50rpx;
				// border:1px solid pink;
				color:#101010;
				font-size: 24rpx;
				line-height: 50rpx;
				margin-top:10rpx;
				.yikaiKecheng_item_title2_left{
					width:45%;
					height:50rpx;
					// border:1px solid red;
					float:left;
				}
				.yikaiKecheng_item_title2_right{
					width:45%;
					height:50rpx;
					// border:1px solid green;
					float:left;
				}
			}
		}
		
	}
	.yikaiKecheng_item_icon{
		width:100%;
		height:120rpx;
		// border:1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		.yikaiKecheng_item_icons{
			width:90%;
			height:120rpx;
			// border:1px solid green;
			.yikaiKecheng_item_icon1{
				width:22%;
				height:115rpx;
				// border:1px solid pink;
				float:left;
				margin-left:14rpx;
				.yikaiKecheng_item_icon1_img{
					width:75rpx;
					height:75rpx;
					// border:1px solid blue;
					image{
						width:100%;
						height:100%;
					}
				}
				.yikaiKecheng_item_icon1_title{
					width:75rpx;
					height:38rpx;
					// border:1px solid blue;
				}
			}
		}
		
	}
	.yikaiKecheng_item_content{
		width:100%;
		height:auto;
		background-color: #FFFFFF;
		margin-top:10rpx;
		.yikaoKecheng_content_content{
			width:100%;
			height:160rpx;
			// border:1px solid blue;
			border-bottom:1px solid #E7E7E7;
			margin-top:5rpx;
			.yikaoKecheng_content_content_left{
				width:30%;
				height:100%;
				// border:1px solid pink;
				display: flex;
				align-items: center;
				justify-content: center;
				float:left;
				.yikaoKecheng_content_content_left_img{
					width:200rpx;
					height:130rpx;
					// border:1px solid red;
					image{
						width:100%;
						height:100%;
					}
				}
			}
			.yikaoKecheng_content_content_right{
				width:68%;
				height:100%;
				// border:1px solid yellow;
				float:left;
				.yikaoKecheng_content_content_right_top{
					width:100%;
					height:50%;
					// border:1px solid red;
					.yikaoKecheng_content_content_right_top_title{
						width:100%;
						height:85rpx;
						// border:1px solid green;
						color:#333337;
						font-weight: bold;
						
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
				.yikaoKecheng_content_content_right_bottom{
					width:100%;
					height:50%;
					// border:1px solid blue;
					.yikaoKecheng_content_content_right_bottom_title_jianjie{
						width:300rpx;
						height:40rpx;
						line-height: 40rpx;
						// border:1px solid red;
						color:#8D8886;
						font-size: 24rpx;
						// margin-top:5rpx;
						// display: -webkit-box;
						overflow: hidden;/*超出部分隐藏*/
						white-space: nowrap;/*不换行*/
						text-overflow:ellipsis;/*超出部分文字以...显示*/
					}
					.yikaoKecheng_content_content_right_bottom_title{
						width:100%;
						height:35rpx;
						// border:1px solid blue;
						line-height: 35rpx;
						// margin-top:20rpx;
						
						.yikaoKecheng_content_content_right_bottom_title_left{
							width:150rpx;
							height:60rpx;
							// border:1px solid red;
							float:left;
							font-size:24rpx;
							color:#8D8886;
							
							
						}
						.yikaoKecheng_content_content_right_bottom_title_right{
							width:250rpx;
							height:60rpx;
							// border:1px solid red;
							float:right;
							font-size: 30rpx;
							color:#C6A078;
							font-weight: bold;
							.yikaoKecheng_content_content_right_bottom_title_right_img{
								width:100rpx;
								height:35rpx;
								// border:1px solid green;
								border:1px solid #C6A078;
								float:left;
								image{
									width:100%;
									height:100%;
								};
							}
							.yikaoKecheng_content_content_right_bottom_title_right_rmb{
								width:100rpx;
								height:60rpx;
								// border:1px solid blue;
								margin-right:15rpx;
								float:right;
							}
						}
					}
				}
			}
		}
	}
	.yikaoKecheng_content_bottom{
		width:100%;
		height:75rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #F74F52;
		//解决下滑，一直在屏幕底部的问题
		position: fixed;
		bottom:0;
		.yikaoKecheng_content_bottom1{
			width:100%;
			height:60rpx;
			color:#fff;
			line-height: 60rpx;
			text-align: center;
			
		}
	}
</style>
