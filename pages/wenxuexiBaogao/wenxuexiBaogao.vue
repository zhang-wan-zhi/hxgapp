<template>
	<view>
		<view class="wenxuexi_baogao_top">
			<view class="wenxuexi_baogao_top_title">卢胤澍的答题报告</view>
		</view>
		<view class="wenxuexi_baogao_top_fenshu">
			<view class="wenxuexi_baogao_top_fenshu1">
				<view class="wenxuexi_baogao_top_fenshu1_fenshu2">
					<view class="wenxuexi_baogao_top_fenshu1_fenshu2s">82</view>
				</view>
				<view class="wenxuexi_baogao_top_fenshu1_fenshu3">
					<view class="wenxuexi_baogao_top_fenshu1_fenshu3s">分数</view>
				</view>
			</view>
		</view>
		<view class="wenxuexi_baogao_bottom">
			<view class="wenxuexi_baogao_bottom_content_body">
				<view class="wenxuexi_baogao_bottom_content">
						<view class="wenxuexi_baogao_bottom_content_left ">学习建议</view>
						<view class="wenxuexi_baogao_bottom_content_right" style="line-height: 180rpx;">比较合适</view>
					</view>
					<view class="wenxuexi_baogao_bottom_content wenxuexi_baogao_bottom_content1">
						<view class="wenxuexi_baogao_bottom_content_left wenxuexi_baogao_bottom_content_left1">学习时机</view>
						<view class="wenxuexi_baogao_bottom_content_right" style="line-height: 180rpx;">国庆节起</view>
					</view>
					<view class="wenxuexi_baogao_bottom_content wenxuexi_baogao_bottom_content2">
						<view class="wenxuexi_baogao_bottom_content_left wenxuexi_baogao_bottom_content_left2">整体印象</view>
						<view class="wenxuexi_baogao_bottom_content_right">
							1、有潜力，缺少状态
							2、专业选择比较定向   
							3、玩心大
							<!-- <view class="wenxuexi_baogao_bottom_content_right_content">
								
							</view> -->
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				objs:{}
			}
		},
		onLoad(){
			let arrs=uni.getStorageSync('wenluqulists');
			this.objs=arrs
			console.log(arrs);
		}
	}
</script>

<style lang="scss" scoped>
	.wenxuexi_baogao_top{
		width:100%;
		height:150rpx;
		// border:1px solid red;
		display:flex;
		align-items: center;
		justify-content: center;
		.wenxuexi_baogao_top_title{
			width:350rpx;
			height:130rpx;
			// border:1px solid blue;
			line-height: 130rpx;
			text-align: center;
			color:#101010;
			font-size:40rpx;
			font-weight: bold;
		}
	}
	.wenxuexi_baogao_top_fenshu{
		width:100%;
		height:350rpx;
		// border:1px solid red;
		display:flex;
		align-items: center;
		justify-content: center;
		.wenxuexi_baogao_top_fenshu1{
			width:220rpx;
			height:220rpx;
			// border:1px solid blue;
			background-size: 100% 100%;
			background-image: url('../../static/img/fenshu_bg.png');
			.wenxuexi_baogao_top_fenshu1_fenshu2{
				width:100%;
				height:60rpx;
				// border:1px solid red;
				display:flex;
				align-items: center;
				justify-content: center;
				margin-top:70rpx;
				.wenxuexi_baogao_top_fenshu1_fenshu2s{
					width:100%;
					height:60rpx;
					line-height: 60rpx;
					text-align: center;
					// border:1px solid pink;
					color:#101010;
					font-size: 40rpx;
					font-weight: bold;
				}
			}
			.wenxuexi_baogao_top_fenshu1_fenshu3{
				width:100%;
				height:50rpx;
				// border:1px solid green;
				display:flex;
				align-items: center;
				justify-content: center;
				.wenxuexi_baogao_top_fenshu1_fenshu3s{
					width:100%;
					height:50rpx;
					line-height: 50rpx;
					text-align: center;
					// border:1px solid pink;
					color:#FFFFFF;
					font-size:24rpx;
				}
			}
		}
	}
	.wenxuexi_baogao_bottom{
		width:100%;
		height:600rpx;
		// border:1px solid red;
		display:flex;
		align-items: center;
		justify-content: center;
		// flex-direction: row;
		// flex-wrap:wrap;
		// justify-content: space-between;
		.wenxuexi_baogao_bottom_content_body{
			width:90%;
			height:580rpx;
			// border:1px solid green;
			.wenxuexi_baogao_bottom_content{
				width:100%;
				height:180rpx;
				// border:1px solid blue;
				border-left:1px solid #0A86F7;
				border-right:1px solid #0A86F7;
				border-top:1px dotted #0A86F7;
				.wenxuexi_baogao_bottom_content_left{
					width:7%;
					height:180rpx;
					// line-height: 200rpx;
					text-align: center;
					// border:1px solid pink;
					float:left;
					font-size:30rpx;
					color:#0A86F7;
				}
				.wenxuexi_baogao_bottom_content_left1{
					color:#03DC06;
				}
				.wenxuexi_baogao_bottom_content_left2{
					color:#EC811F;
				}
				.wenxuexi_baogao_bottom_content_right{
					width:90%;
					height:180rpx;
					// line-height: 180rpx;
					text-align: center;
					// border:1px solid orange;
					float:left;
					color:#000;
					font-weight:bold;
					word-break:keep-all;
					word-wrap:break-world;
					white-space:pre-line;
					margin-top:10rpx;
					// display: flex;
					// align-items: center;
					// justify-content: center;
					// .wenxuexi_baogao_bottom_content_right_content{
					// 	width:100%;
					// 	height:60rpx;
					// 	border:1px solid orange;
					// }
				}
			}
			.wenxuexi_baogao_bottom_content1{
				border-left:1px solid #03DC06;
				border-right:1px solid #03DC06;
				border-top:1px dotted #03DC06;
			}
			.wenxuexi_baogao_bottom_content2{
				border-left:1px solid #EC811F;
				border-right:1px solid #EC811F;
				border-top:1px dotted #EC811F;
				border-bottom:1px dotted #EC811F;
			}
		}
		
	}
</style>
