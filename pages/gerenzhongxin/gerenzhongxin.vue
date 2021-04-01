<template>
	<view>
		<view>
			<view>用户头像</view>
			<view>用户昵称</view>
			<view @click="xiugai" style="width:150rpx;height:50rpx; line-height:50rpx; text-align:center;border-radius:5rpx; background-color: #007AFF;">修改</view>
			<image :src=imgArr[0]></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[`../../static/logo.png`]
			}
		},
		methods: {
			//点击修改触发
			xiugai(){
				//console.log(111);
				uni.chooseImage({
					count:1,  //最多可以选择的张数
					sizeType:['original','compressed'],  //original为原图，compressed为压缩图
					sourceType:['album','camera'],  //album从相册选择，camera使用相机
					success:(res)=>{
						console.log(JSON.stringify(res.tempFilePaths));
					    this.imgArr=res.tempFilePaths;
					}
				})
			}
		}
	}
</script>

<style>

</style>
