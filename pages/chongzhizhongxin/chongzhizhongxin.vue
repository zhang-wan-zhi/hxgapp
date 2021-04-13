<template>
	<view>
		<view class="chongzhizhongxin_top1">
			<view class="chongzhizhongxin_top">
				<view class="chongzhizhongxin_top_child">
					<view class="chongzhizhongxin_top_child_top">体验版</view>
					<view class="chongzhizhongxin_top_child_bottom">￥9.9</view>
				</view>
				<view class="chongzhizhongxin_top_child">
					<view class="chongzhizhongxin_top_child_top">会员版</view>
					<view class="chongzhizhongxin_top_child_bottom">￥99</view>
				</view>
				<view class="chongzhizhongxin_top_child">
					<view class="chongzhizhongxin_top_child_top">专业版</view>
					<view class="chongzhizhongxin_top_child_bottom">￥999</view>
				</view>
			</view>
		</view>
		<view class="lijichongzhi">
			<view class="lijichongzhi_title">立即充值</view>
		</view>
		<view class="chongzhishuoming">
			<view class="chongzhishuoming_content">
				<view class="chongzhishuoming_content_title">充值说明</view>
				<view class="chongzhishuoming_content_content">
					<view class="chongzhishuoming_content_content_parent">
						<view class="chongzhishuoming_content_content1">
												<view class="chongzhishuoming_content_content_title">体验版</view>
												<view class="chongzhishuoming_content_content_content">「启程测试」期间，充值总金额≤3600元，可获得150%的创世结晶返还。
						当充值总金额>3600元时，3600元以内的部分可获得150%的创世结晶返还，超出3600元的部分，按照125%的比例进行创世结晶的返还，不设上限。
						举例：旅行者在测试期间累计充值了3700元，可获得的创世结晶返还总额为：(3600元×10×150%)+(100元×10×125%)= 55250创世结晶。</view>
											</view>
											<view class="chongzhishuoming_content_content1">
												<view class="chongzhishuoming_content_content_title">会员版</view>
												<view class="chongzhishuoming_content_content_content">「启程测试」期间，充值总金额≤3600元，可获得150%的创世结晶返还。
						当充值总金额>3600元时，3600元以内的部分可获得150%的创世结晶返还，超出3600元的部分，按照125%的比例进行创世结晶的返还，不设上限。
						举例：旅行者在测试期间累计充值了3700元，可获得的创世结晶返还总额为：(3600元×10×150%)+(100元×10×125%)= 55250创世结晶。</view>
											</view>
											<view class="chongzhishuoming_content_content1">
												<view class="chongzhishuoming_content_content_title">专业版</view>
												<view class="chongzhishuoming_content_content_content">「启程测试」期间，充值总金额≤3600元，可获得150%的创世结晶返还。
						当充值总金额>3600元时，3600元以内的部分可获得150%的创世结晶返还，超出3600元的部分，按照125%的比例进行创世结晶的返还，不设上限。
						举例：旅行者在测试期间累计充值了3700元，可获得的创世结晶返还总额为：(3600元×10×150%)+(100元×10×125%)= 55250创世结晶。</view>
											</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.chongzhizhongxin_top1{
		width:100%;
		height:300rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:15rpx;
		.chongzhizhongxin_top{
			width:85%;
			height:210rpx;
			// border:1px solid yellow;
			display:flex;
			flex-wrap:wrap;
			// align-items: center;
			justify-content: space-between;
			.chongzhizhongxin_top_child{
				width:29%;
				height:210rpx;
				border:1px solid #E8D095;
				border-top-left-radius:10px;
				border-bottom-right-radius:10px;
				.chongzhizhongxin_top_child_top{
					width:100%;
					height:90rpx;
					line-height: 90rpx;
					text-align: center;
					// border:1px solid pink;
					// margin-left:10%;
					color:#101010;
					font-size:30rpx;
					font-weight:bold;
				}
				.chongzhizhongxin_top_child_bottom{
					width:100%;
					height:90rpx;
					line-height: 90rpx;
					text-align: center;
					// border:1px solid pink;
					// margin-left:10%;
					color:#E7A328;
					font-size:40rpx;
					font-weight:bold;
				}
			}
		}
	}
	.lijichongzhi{
		width:100%;
		height:80rpx;
		// border:1px solid pink;
		display: flex;
		align-items: center;
		justify-content: center;
		.lijichongzhi_title{
			width:70%;
			height:60rpx;
			line-height: 60rpx;
			text-align: center;
			// border:1px solid red;
			border-radius: 30rpx;
			background-color: #38BFEF;
			color:#fff;
			// font-weight: bold;
			font-size:35rpx;
		}
	}
	.chongzhishuoming{
		width:100%;
		height:auto;
		// border:1px solid pink;
		display: flex;
		align-items: center;
		justify-content: center;
		.chongzhishuoming_content{
			width:85%;
			height:auto;
			margin-top:20rpx;
			// border:1px solid #BBBBBB;
			box-shadow:0px 0px  2px 1px #BBBBBB;
			.chongzhishuoming_content_title{
				width:100%;
				height:50rpx;
				line-height: 50rpx;
				text-align: center;
				// border:1px solid red;
			}
			
			.chongzhishuoming_content_content{
				width:100%;
				height:auto;
				// border:1px solid pink;
				// display: flex;
				// align-items: center;
				// justify-content: center;
				.chongzhishuoming_content_content_parent{
					width:90%;
					height:auto;
					// display: flex;
					// justify-content: center;
					// align-items: center;
					margin-left:5%;
					.chongzhishuoming_content_content1{
						width:100%;
						height:auto;
						// border:1px solid red;
						.chongzhishuoming_content_content_title{
							width:100%;
							height:50rpx;
							line-height: 50rpx;
							// border:1px solid green;
							color:#101010;
							font-size: 32rpx;
							font-weight: bold;
						}
						.chongzhishuoming_content_content_content{
							width:100%;
							height:auto;
							// border:1px solid blue;
							font-size: 20rpx;
							color:#ccc;
							// text-indent:2em;
						}
					}
				}
				
			}
		}
	}
	
</style>
