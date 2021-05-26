<template>
	<view class="wenluqu_submited" :style="{height:phoneHeight+'px;'}">
		
		<view class="content_top">
			<view style="background:url({{bgurl}});" class="portrait" >
			</view>
			<view class="university">
				<text>{{nickName}}的成绩单</text>
			</view>
			<view class="leftsemicircle">
			</view>
			<view class="rightsemicircle">
			</view>
		</view>
		<view class="content_center">
			<view class="content_center_top">
				<view class="content_center_inner">
					<view class="content_center_inner_title">
						综合得分
					</view>
					<view class="content_center_inner_score">
						85
					</view>
					<view class="content_center_inner_tip">
						继续努力呀~
					</view>
					<view class="content_center_inner_box">
						<view class="true">
							<view class="t_num">4</view>
							<view class="t_text">正确</view>
						</view>
						<view class="false">
							<view class="f_num">6</view>
							<view class="f_text">错误</view>
						</view>
						<view class="falsequestions">
							<view class="cuoti_num">6</view>
							<view class="cuoti_text">错题</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content_center_bottom">
				<view class="content_center_bottom_foot">
					<hr style=" margin-left:-78rpx; width: 590rpx; height:2rpx;border:none;border-top:1px dotted #DADBDD;" />
				</view>
				<view class="leftsemicircle">
				</view>
				<view class="rightsemicircle">
				</view>
				<view class="content_center_bottom_share">
					<button style="height: 60rpx;width: 240rpx;line-height: 60rpx; color: #FFFFFF;background-color: #57B5ED;border-radius:20px ;" type="default">分享</button>
				</view>	
				
			</view>
			<view class="content_bottom">
				<button style="width: 654rpx;height: 88rpx;background: #FBBE4B;opacity: 1;border-radius: 24px;color: #FFFFFF;" @click="upgrade">升级查看更多</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				//适配手机高度
				phoneHeight:0,
				//测试的结果对象
				Objs:{},
				// 体验版的状态
				isTiyan:false,
				// 微信头像
				bgurl:'',
				//微信名字
				nickName:''
			}
		},
		onLoad(objs) {
			let arrs=uni.getStorageSync('wenluqu_lists');
			// console.log(arrs);
			this.Objs=arrs[0];
		    this.Objs.stableProp=this.Objs.stableProp.toFixed(2);
			// console.log(this.Objs.acCode);
			let userData=uni.getStorageSync('userData');
			console.log(userData);
			this.bgurl = userData.userInfo.avatarUrl;
			this.nickName = userData.userInfo.nickName;
			console.log(this.bgurl);
			this.getWindowHeight();
			
		},
		methods:{	
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
			upgrade(){
				uni.navigateTo({
				            // url: 'test?id=1&name=uniapp'  c传递参数
				
				            url:"../shouye/shouye"
				
				        })
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wenluqu_submited{
		width:750rpx;
		height:1454rpx;
		padding-top:92rpx;
		padding-left:40rpx;
		padding-right: 40rpx;
		background-color: #F0F0F0;
		.content_top{
			width: 670rpx;
			height: 152rpx;
			display: flex;
			background-color: #f6f7fb;
			align-items: center;
			.portrait{
				height: 40px;
				width: 40px;
				margin-right: 24rpx;
				margin-left: 72rpx;
				border-radius: 20px;
			}
			.university{
				color:#273253 ;
				width:342rpx;
				height: 50rpx;
				font-size: 36rpx;
				font-weight: bold;
				line-height: 40rpx;
			}
			.leftsemicircle{
				// background-color: #F0F0F0;
				position: absolute;
				
				background-color: #F0F0F0;
				height: 20px;
				width: 20px;
				border-radius: 10px;
				margin-left: 650rpx;
				margin-top: 154rpx;
			}
			.rightsemicircle{
				position: absolute;
				background-color: #F0F0F0;
				height: 20px;
				width: 20px;
				border-radius: 10px;
				margin-top: 154rpx;
				margin-left: -20rpx;
			}
			
			
		}
		.content_center{
			height: 776rpx;
			width: 670rpx;
			background-color:#FFFFFF ;
			.content_center_top{
				border: 1px solid #FFFFFF;
				
				.content_center_inner{
					width: 670rpx;
					height: 544rpx;
					color: #273253;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: baseline;
					// border: 1px solid red;
					.content_center_inner_title{
						color: #6E7580;
						font-size: 36rpx;
						font-family: '.PingFang SC';
						font-weight: 400;
						line-height: 50rpx;
						margin-top: 18rpx;
						height: 50rpx;
						width: 100%;
						text-align: center;
					}
					.content_center_inner_score{
						height: 192rpx;
						font-size: 180rpx;
						width: 100%;
						font-family: 'Roboto';
						font-weight: 400;
						line-height: 218rpx;
						color: #FBBE4B;
						text-align: center;
					}
					.content_center_inner_tip{
						height: 40rpx;
						width: 100%;
						font-size: 28rpx;
						font-family: '.PingFang SC';
						font-weight: 400;
						line-height: 40rpx;
						color: #F4E9DA;
						text-align: center;
					}
					.content_center_inner_box{
						background-color: #F7F7F9;
						width: 616rpx;	
						height: 156rpx;
						margin-left: 28rpx;
						border-radius: 16rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						.true{
							text-align: center;
							margin-left: 6rpx;
							.t_num{
								height: 50rpx;
								width: 100%;
								text-align: center;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #ED5C4D;
							}
							.t_text{
								width: 68rpx;
								height: 44rpx;
								font-size: 32rpx;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #A9AFB8;
								opacity: 1;
							}
						}
						.false{
							text-align: center;
							margin-left: 152rpx;
							.f_num{
								width: 100%;
								text-align: center;
								height: 50rpx;
								font-size: 36rpx;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #57B5ED;
							}
							.f_text{
								
								width: 68rpx;
								height: 44rpx;
								font-size: 32rpx;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #A9AFB8;
								opacity: 1;
							}
						}
						.falsequestions{
							text-align: center;
							margin-left: 152rpx;
							.cuoti_num{
								height: 50rpx;
								width: 100%;
								text-align: center;
								font-size: 36rpx;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #57B5ED;
							}
							.cuoti_text{
								width: 68rpx;
								height: 44rpx;
								font-size: 32rpx;
								font-family: '.PingFang SC';
								font-weight: 400;
								line-height: 44rpx;
								color: #A9AFB8;
								opacity: 1;
							}
						}
					}
					
				}
			
				
			}
			.content_center_bottom{
				width: 670rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// border: 1px solid red;
				.content_center_bottom_foot{
					width: 432rpx ;
					height: 44rpx ;
					font-size: 32rpx;
					font-family: '.PingFang SC';
					font-weight: 400;
					line-height: 44rpx;
					color: #FCD58C;
				}
				.content_center_bottom_share{
					width: 240rpx;
					height: 60px;
					margin-top: 52rpx;
					
				}
				.leftsemicircle{
					// background-color: #F0F0F0;
					position: absolute;
					background-color: #F0F0F0;
					height: 20px;
					width: 20px;
					border-radius: 10px;
					margin-left: 668rpx;
					margin-top: -126rpx;
				}
				.rightsemicircle{
					position: absolute;
					background-color: #F0F0F0;
					height: 20px;
					width: 20px;
					border-radius: 10px;
					margin-top: -126rpx;
					margin-left: -668rpx;
				}
			}
			.content_bottom{
				margin-top: 86rpx;
			}
		}
	}
	
</style>
