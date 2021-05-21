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
				:image-styles="imageStyles"
			/>
		</view>
		<view class="type">
			<view class="title">选择要反馈的类型</view>
			<view class="type-item">
				<view class="item-box" v-for="(item, index) in typeList" :key="index" @click="check(index)">
					<view class="radio" :class="{ checked: index === currentIndex }"></view>
					<view class="text">{{ item.name }}</view>
				</view>
			</view>
		</view>

		<view class="submit" @click="submits">提交</view>
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
			imageStyles: {
				width: 100,
				height: 100,
				backgroundColor: '#F8D5D2',
				border: {
					color: '#F8D5D2',
					width: 1,
					style: 'solid',
					radius: '6px'
				}
			},
			currentIndex: -1,
			checkedType: '',
			typeList: [
				{
					value: 'bug',
					name: '程序bug'
				},
				{
					value: 'opinion',
					name: '内容意见'
				},
				{
					value: 'function',
					name: '功能意见'
				},
				{
					value: 'report',
					name: '举报'
				},
				{
					value: 'other',
					name: '其他'
				}
			]
		};
	},
	methods: {
		submits() {
			let openids = uni.getStorageSync('openid');
			let opContent = this.textAreaValue;
			//如果没有登录
			if (!openids) {
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
					Yijianfankui(openids, opContent).then(res => {
						 console.log(res.data.code);
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
		// 图片上传成功时
		uploadSuccess(e) {
			console.log('e', e);
			console.log(this.imageValue);
		},
		// 删除图片时
		deleteImg(e) {
			console.log('e', e);
			console.log(this.imageValue);
		},
		// 点击选择类型时
		check(index) {
			this.currentIndex = index;
			this.checkedType = this.typeList[index].value;
			console.log(this.checkedType);
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
	margin-top: 40rpx;
	margin-bottom: 20rpx;
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

.item-box {
	display: flex;
	align-items: center;
	width: 33%;
	height: 80rpx;
}

.radio {
	width: 28rpx;
	height: 28rpx;
	margin: 4rpx 10rpx 0px 0px;
	border: 1px solid #ed5c4d;
	border-radius: 50%;
}
.checked {
	background: #ed5c4d;
}
.submit {
	width: 600rpx;
	height: 88rpx;
	margin: 200rpx auto 0rpx;
	text-align: center;
	line-height: 88rpx;
	background: #ed5c4d;
	border-radius: 24px;
	font-size: 18px;
	font-weight: 400;
	color: #FFFFFF;
	letter-spacing: 5px;
}
</style>
