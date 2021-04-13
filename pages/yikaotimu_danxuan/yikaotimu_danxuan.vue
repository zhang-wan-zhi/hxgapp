<template>
	<view>
		<view class="yikaotimu_danxuan_title">
			<view class="yikaotimu_danxuan_title_title">单选题</view>
		</view>
		<view class="yikaotimu_danxuan_tihao">
			<view class="yikaotimu_danxuan_tihao_title">
				<view class="yikaotimu_danxuan_tihao_title1">1</view>
				<view class="yikaotimu_danxuan_tihao_title2">/50题</view>
			</view>
			<view class="yikaotimu_danxuan_tihao_jiaojuan">立即交卷</view>
			<view class="yikaotimu_danxuan_tihao_img">
				<image src="../../static/img/jiaojuan_img.png"></image>
			</view>
		</view>
		<view class="yikaotimu_danxuan_content_title">
			<view class="yikaotimu_danxuan_content_title1">【单选】魏晋时期，建安七子是当时文学的代表人物，下列属于建安七子的是（）。</view>
		</view>
		<view class="yikaotimu_danxuan_content_content">
			<view class="yikaotimu_danxuan_content_content1">
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">A</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">嵇康</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">B</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">曹植</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">C</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">山涛</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">D</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">阮瑀</view>
				</view>
			</view>
		</view>
		<view class="yikaotimu_danxuan_next">
			<view class="yikaotimu_danxuan_next_button"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
	}
</script>

<style lang="scss" scoped>
	.yikaotimu_danxuan_title{
		width:100%;
		height:80rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.yikaotimu_danxuan_title_title{
			width:150rpx;
			height:50rpx;
			line-height: 50rpx;
			text-align: center;
			// border:1px solid pink;
			color:#60B9A3;
			font-size:40rpx;
		}
	}
	.yikaotimu_danxuan_tihao{
		width:100%;
		height:50rpx;
		// border:1px solid blue;
		.yikaotimu_danxuan_tihao_title{
			width:160rpx;
			height:50rpx;
			// border:1px solid green;
			float:left;
			margin-left:45rpx;
			.yikaotimu_danxuan_tihao_title1{
				color:#101010;
				font-size: 30rpx;
				float:left;
				font-weight: bold;
			}
			.yikaotimu_danxuan_tihao_title2{
				color:#9F9E9E;
				font-size:26rpx;
				float:left;
				margin-top: 8rpx;
			}
		}
		.yikaotimu_danxuan_tihao_img{
			width:50rpx;
			height:50rpx;
			// border:1px solid green;
			float:right;
			image{
				width:100%;
				height:100%;
			}
		}
		.yikaotimu_danxuan_tihao_jiaojuan{
			width:160rpx;
			height:50rpx;
			// border:1px solid green;
			float:right;
		}
	}
	.yikaotimu_danxuan_content_title{
		width:100%;
		height:auto;
		// border:1px solid red;
		color:#101010;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:20rpx;
		.yikaotimu_danxuan_content_title1{
			width:90%;
			height:auto;
			// border:1px solid green;
			
		}
	}
	.yikaotimu_danxuan_content_content{
		width:100%;
		height:auto;
		// border:1px solid orange;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:20rpx;
		.yikaotimu_danxuan_content_content1{
			width:90%;
			height:auto;
			// border:1px solid red;
			.yikaotimu_danxuan_content_content1_select{
				width:100%;
				height:40rpx;
				// border:1px solid pink;
				line-height:40rpx;
				margin-top:10rpx;
				.yikaotimu_danxuan_content_content1_select_left{
					width:40rpx;
					height:40rpx;
					// border:1px solid blue;
					float:left;
					text-align: center;
					border-radius:50%;
					background-color: #EDEDED;
				}
				.yikaotimu_danxuan_content_content1_select_right{
					width:300rpx;
					height:40rpx;
					// border:1px solid blue;
					float:left;
					margin-left:20rpx;
				}
			}
		}
	}
</style>
