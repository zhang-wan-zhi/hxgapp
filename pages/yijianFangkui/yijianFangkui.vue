<template>
	<view class="opinion-box">
		<view class="opinion">
			<textarea type="text" :placeholder="placeholders" v-model="textAreaValue" class="content" @focus="getFocus" @blur="getBlur" placeholder-style="color:#bbb;"></textarea>
			<uni-file-picker
				v-model="imageValue"
				fileMediatype="image"
				mode="grid"
				@select="select"
				@progress="progress"
				@success="uploadSuccess"
				@fail="fail"
				@delete="deleteImg"
			/>
		</view>
		<view class="type">
			<view class="title">选择要反馈的类型</view>
			<view class="type-item">
				<view class="">
					
				</view>
			</view>
		</view>

		<!-- <view class=""><view  @click="submits">提交</view></view> -->
	</view>
</template>

<script>
import { Yijianfankui } from '../../api/api.js';
export default {
	data() {
		return {
			placeholders: '请输入您想反馈的问题....',
			textAreaValue: '',
			// 图片列表
			imageValue: [],
			typeList: [
				{
					value: 'USA',
					name: '美国'
				},
				{
					value: 'CHN',
					name: '中国',
					checked: 'true'
				},
				{
					value: 'BRA',
					name: '巴西'
				},
				{
					value: 'JPN',
					name: '日本'
				},
				{
					value: 'ENG',
					name: '英国'
				},
				{
					value: 'FRA',
					name: '法国'
				}
			]
		};
	},
	methods: {
		submits() {
			let openids = uni.getStorageSync('openid');
			let opContent = this.textAreaValue;
			//如果没有登录
			if (openids == '') {
				uni.showToast({
					title: '请先登录!',
					icon: 'none',
					duration: 2000
				});
			} else {
				//如果输入的意见为空
				if (opContent.trim() === '') {
					uni.showToast({
						title: '请先输入意见',
						icon: 'none',
						duration: 2000
					});
				} else {
					Yijianfankui(openid, opContent).then(res => {
						// console.log(res.data.code);
						if (res.data.code == 200) {
							uni.navigateTo({
								url: '../yijianFangkuiSuccess/yijianFangkuiSuccess'
							});
						}
					});
				}
			}
		},
		//点击输入框，获得焦点时
		getFocus() {
			this.placeholders = '';
		},
		//点击输入框，失去焦点时
		getBlur() {
			this.placeholders = '请输入您想反馈的问题....';
		},
		// 图片1上传成功时
		uploadSuccess(e) {
			console.log('e', e);
			console.log(this.imageValue);
		},
		// 删除图片时
		deleteImg(e) {
			console.log('e', e);
			console.log(this.imageValue);
		}
	}
};
</script>

<style lang="scss" scoped>
.opinion-box {
	width: 100%;
	padding: 30rpx 40rpx;
}
.opinion {
	width: 100%;
	padding: 40rpx;
	min-height: 500rpx;
	background: #ffffff;
	border-radius: 8px;
}
.content {
	width: 100%;
	min-height: 200rpx;
	margin-bottom: 30rpx;
}
// 选择类型
.type {
	width: 100%;
}
.type .title {
	height: 44rpx;
	margin-top: 30rpx;
	margin-bottom: 50rpx;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	color: #6e7580;
}
.type-item {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}



</style>
