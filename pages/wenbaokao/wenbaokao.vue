<template>
	<view class="wenluqu_submited" :style="{height:phoneHeight+'px;'}">
		
		<view class="content_top">
			<view class="portrait">
			</view>
			<view class="university">
				<text>报考推荐</text>
			</view>
			<view class="leftsemicircle">
			</view>
			<view class="rightsemicircle">
			</view>
		</view>
		<view class="content_center">
			<view class="content_center_top">
				<view class="content_center_3">
					<view class="portrait">
					</view>
					<view class="university">
						中国美术学院
					</view>
					
					<view class="major">
						造型艺术专业
					</view>
					<view class="portrait">
					</view>
					<view class="university">
						广州美术学院
					</view>
					<view class="major">
						造型艺术专业
					</view>
					<view class="portrait">
					</view>
					<view class="university">
						天津美术学院
					</view>
					<view class="major">
						造型艺术专业
					</view>
				</view>
			</view>
			<view class="content_center_bottom">
				<view class="content_center_bottom_foot">
					升级专业立即一对一名师交流
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
				<button style="width: 654rpx;height: 88rpx;background: #FBBE4B;opacity: 1;border-radius: 24px;color: #FFFFFF;" @click="backTo">返回</button>
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
				isTiyan:false
			}
		},
		onLoad(objs) {
			let arrs=uni.getStorageSync('wenluqu_lists');
			// console.log(arrs);
			this.Objs=arrs[0];
		    this.Objs.stableProp=this.Objs.stableProp.toFixed(2);
			// console.log(this.Objs.acCode);
			// console.log(this.Objs.stableProp);
			this.getWindowHeight();
		},
		methods:{
			//点击体验版触发
			click_tiyan(){
				console.log(111);
				this.isTiyan=true;
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
			backTo(){
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
		.leftsemicircle{
			// background-color: #F0F0F0;
			position: absolute;
			background-color: #F0F0F0;
			height: 20px;
			width: 20px;
			border-radius: 10px;
			margin-left: 668rpx;
			margin-top: 154rpx;
		}
		.rightsemicircle{
			position: absolute;
			background-color: #F0F0F0;
			height: 20px;
			width: 20px;
			border-radius: 10px;
			margin-top: 154rpx;
			margin-left: -668rpx;
		}
		.content_top{
			width: 670rpx;
			height: 152rpx;
			display: flex;
			background-color: #f6f7fb;
			justify-content: center;
			align-items: center;
			.portrait{
				background-color:#2a17ff ;
				height: 40px;
				width: 40px;
				margin-right: 42rpx;
				border-radius: 20px;
			}
			.university{
				color:#273253 ;
				width:230rpx;
				height: 40rpx;
				font-size: 36rpx;
				font-weight: bold;
				line-height: 40rpx;
			}
			
			
		}
		.content_center{
			height: 776rpx;
			width: 670rpx;
			background-color:#FFFFFF ;
			.content_center_top{
				border: 1px solid #FFFFFF;
				
				.content_center_3{
					width: 630rpx;
					height: 544rpx;
					color: #273253;
					display: inline-block;
					flex-direction: column;
					justify-content: center;
					flex-wrap: wrap;
					.portrait{
						margin-top: 34rpx;
						margin-left: 44rpx;
						display: inline-block;
						background-color:#2a17ff ;
						height: 40px;
						width: 40px;
						// border-radius: 20px;
					}
					.university{
						display: inline-block;
						color:#273253 ;
						position: absolute;
						width:450rpx;
						height: 50rpx;
						margin-top: 44rpx;
						margin-left: 30rpx;
						font-size: 36rpx;
						font-weight: bold;
						line-height: 74rpx;
					}
					.major{
							width: 230rpx;
							height: 40rpx;
							font-size: 28rpx;
							font-family: '.PingFang SC';
							font-weight: 400;
							margin-left: 154rpx;
							line-height: 44rpx;
							color: #92969D;
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
