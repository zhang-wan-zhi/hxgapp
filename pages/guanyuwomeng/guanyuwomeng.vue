<template>
	<view>
		<view class="guanyuwomeng_top">
			<view class="guanyuwomeng_top_top">
				<view class="guanyuwomeng_top_img">
					<image src="../../static/img/right_bg.png"></image>
				</view>
				<view class="guanyuwomeng_top_title">掐指艺算</view>
			</view>
		</view>
		
		<view class="guanyuwomeng_center">
			<view class="guanyuwomeng_center_child">
				<view class="guanyuwomeng_center_child_child">
					晨曦教育连锁机构诞生于20XX年，是一家专业从事幼儿大脑潜能开发和艺术性培养的民办教育机构和教育实体。该机构强调“以儿童理想发展为中心”，强调“全员参与的、全过程的、面向全体的全面教育” ，并以实现“群体儿童理想发展” 为目标，这也是宋群校长近十年来研究教育成果的集中体现。
				</view>
			</view>
		</view>
		
		<view class="guanyuwomeng_bottom">
			<view class="guanyuwomeng_bottom1">版本号v7.0.3</view>
			<view class="guanyuwomeng_bottom1">主体名称：山东艺考</view>
			<view class="guanyuwomeng_bottom1">技术支持：杭州大森魔岩科技有限公公司</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.guanyuwomeng_top{
		width:100%;
		height:250rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
		.guanyuwomeng_top_top{
			width:160rpx;
			height:200rpx;
			// border:1px solid red;
			.guanyuwomeng_top_img{
				width:150rpx;
				height:150rpx;
				// border:1px solid blue;
				image{
					width:100%;
					height:100%;
				}
			}
			.guanyuwomeng_top_title{
				width:150rpx;
				height:40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size:30rpx;
				font-weight: bold;
				// border:1px solid pink;
			}
		}
		
	}
	.guanyuwomeng_center{
		width:100%;
		height:250rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.guanyuwomeng_center_child{
			width:80%;
			height:200rpx;
			border:1px solid #BBBBBB;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.guanyuwomeng_center_child_child{
				width:90%;
				height:180rpx;
				// border:1px solid pink;
				font-size:20rpx;
				text-indent:2em;
				color:#101010;
			}
		}
	}
	.guanyuwomeng_bottom{
		position: absolute;
		bottom:0;
		width:100%;
		height:150rpx;
		// border:1px solid red;
		.guanyuwomeng_bottom1{
			width:100%;
			height:40rpx;
			line-height: 40rpx;
			text-align: center;
			// border:1px solid red;
			font-size: 20rpx;
			color:#ccc;
		}
		
	}
</style>
