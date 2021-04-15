<template>
	<view>
		<view class="wenluqu_content1">
			<view class="wenluqu_content1_content">你的录取概率为：</view>
		</view>
		<view class="wenluqu_content2">
			<view class="wenluqu_content2_content">75%</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">院校代码：88665544225</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">院校名称：浙江传媒学院</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">录取批次：第一批</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">专业名称：播音主持</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">招生数量：1000</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">录取原则：成绩达标</view>
		</view>
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_content">考试类型：笔试加面试</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.wenluqu_content1{
		width:100%;
		height:100rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.wenluqu_content1_content{
			width:80%;
			height:60rpx;
			line-height: 60rpx;
			text-align: center;
			// border:1px solid red;
			font-weight: bold;
		}
	}
	.wenluqu_content2{
		width:100%;
		height:180rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.wenluqu_content2_content{
			width:140rpx;
			height:140rpx;
			background-image: urL('../../static/img/gailv_img.png');
			background-size: 100% 100%;
			// border:1px solid red;
			line-height: 140rpx;
			text-align: center;
			font-weight: bold;
		}
	}
	.wenluqu_content3{
		width:100%;
		height:100rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.wenluqu_content3_content{
			width:80%;
			height:60rpx;
			// border:1px solid red;
			line-height: 60rpx;
			text-align: center;
			font-weight: bold;
		}
	}
</style>
