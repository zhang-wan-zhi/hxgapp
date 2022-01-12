<template>
	<view class="box" >
		<view class="logo"><image src="../../static/img/qzys_logo.png"></image></view>

		<view class="name">掐指艺算</view>

		<view class="introduce">
			掐指艺算是由山东艺咖欧微教育科技有限公司联合杭州大森魔岩科技有限公司开发的一款致力于服务全国影视传媒类艺考生学习、报考、评估咨询的大数据软件，结合近20年的线下咨询辅导经验，把专业学习适应性测评、特长优势匹配度测评、高校招考规律性分析等数据化筛选分析应用于自我检测和评估，帮助更多考生做到精准性自我评估与自我报考，力求用数据说话、实现小会员、大受益。
			目前发布的版本仅适合山东、河北考生，其他省份考生请致电咨询。
			    
		</view>
		<view class="introduce">
			客服热线：400-0531-571
		</view>
		<view class="bg-logo">
			
		</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>

   .box{
	   position: absolute;
	   width: 100%;
	   min-height: 600px;
	   overflow: hidden;
   }


	.logo{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 200rpx;
		image{
			width: 136rpx;
			height: 136rpx;
			border-radius: 16rpx;
		}
	}
	.name{
		width: 100%;
		height: 50rpx;
		margin-top: 30rpx;
		font-size: 16px;
		font-weight: 400;
		line-height: 50rpx;
		text-align: center;
		color: #273253;
	}
	.introduce{
		width: 600rpx;
		margin: 50rpx auto 0rpx;
		font-size: 28rpx;
		text-indent: 2em;
		line-height: 50rpx;
	}
   .bg-logo{
	   position: absolute;
	   bottom: 0px;
	   left: 0px;
	   width: 100%;
	   height: 676rpx;
	   background: url(../../static/img/my/bgLogo.png) no-repeat bottom center;
	   background-size: 100%;
	   opacity: 0.2;
   }
</style>
