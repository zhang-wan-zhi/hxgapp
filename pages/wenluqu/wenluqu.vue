<template>
	<view>
		<view class="wenluqu_top">
			<view class="wenluqu_top_title">艺考预测</view>
		</view>
		
		<view class="wenluqu_center">
			<view class="wenluqu_center_child">
				<view class="wenluqu_center_child_child">
					<view class="wenluqu_center_child_child1">
						<view class="wenluqu_center_child_child1_content">省份</view>
						<view class="wenluqu_center_child_child1_content">文理分科</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">报考院校:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你报考的学校">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">高考分:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的高考成绩">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">统考成绩:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的统考成绩">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">报考专业:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的报考专业">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">单科成绩:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的单科成绩">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">视力:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的视力">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">身高:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的身高">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">体重:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的体重">
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<view class="wenluqu_bottom">
			<view class="wenluqu_bottom_content">开始预测</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.wenluqu_top{
	width:100%;
	height:100rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
	.wenluqu_top_title{
		width:200rpx;
		height:70rpx;
		line-height: 70rpx;
		text-align: center;
		// border:1px solid pink;
		color:#FF6E2F;
		font-size:40rpx;
		font-weight: bold;
	}
}
.wenluqu_center{
	width:100%;
	height:1000rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	.wenluqu_center_child{
		width:90%;
		height:900rpx;
		border:1px solid #BBBBBB;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.wenluqu_center_child_child{
			width:90%;
			height:850rpx;
			// border:1px solid blue;
			.wenluqu_center_child_child1{
				width:100%;
				height:70rpx;
				// border:1px solid yellow;
				display: flex;
				justify-content: space-between;
				.wenluqu_center_child_child1_content{
					width:250rpx;
					height:50rpx;
					border:1px solid #BBBBBB;
					float:left;
					border-radius: 5prx;
				}
			}
			.wenluqu_center_child_child2{
				width:100%;
				height:95rpx;
				// border:1px solid yellow;
				.wenluqu_center_child_child2_content{
					width:100%;
					height:50rpx;
					border-bottom:1px solid #BBBBBB;
					float:left;
					margin-top:40rpx;
					.wenluqu_center_child_child2_content1{
						width:50rpx;
						height:50rpx;
						// border:1px solid red;
						float:left;
						image{
							width:100%;
							height:100%;
						}
					}
					.wenluqu_center_child_child2_content2{
						width:150rpx;
						height:50rpx;
						line-height: 50rpx;
						// border:1px solid red;
						float:left;
						text-align: center;
						font-weight: bold;
					}
					.wenluqu_center_child_child2_content3{
						width:300rpx;
						height:50rpx;
						// border:1px solid red;
						float:left;
						margin-left:40rpx;
					}
				}
			}
		}
	}
}
.wenluqu_bottom{
	width:100%;
	height:150rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	.wenluqu_bottom_content{
		width:150rpx;
		height:70rpx;
		line-height: 70rpx;
		text-align: center;
		// border:1px solid pink;
		color:#fff;
		font-size:35rpx;
		font-weight: bold;
		background-color: #FF6E2F;
		border-radius: 10rpx;
	}
}
</style>
