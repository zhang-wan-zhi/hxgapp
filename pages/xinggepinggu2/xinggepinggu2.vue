<template>
	<view class="box">
		<!-- 选择 -->
		<uni-popup ref="popup" type="top">
			<scroll-view scroll-y="true" style="height: 660rpx;">
				<view class="selects">
					<view :class="['circle-nums',{checkselect: item != null}]" v-for="(item, index) in hightItem" :key="index">{{ index + 1 }}</view>
					<view class="circle-nums-em" v-for="(item, index) in 7 - (hightItem.length % 7)" :key="index"></view>
				</view>
			</scroll-view>
		</uni-popup>
		<!-- 选择结束 -->
		<view class="questions-box">
			<swiper :indicator-dots="false" :autoplay="false" :duration="50" :current="indexNums">
				<swiper-item v-for="(item1, index1) in questionList" :key="index1">
					<view class="type" @click="openSelect">
						<text v-show="item1.asType == 1">填空题</text>
						<text v-show="item1.asType == 2">单选题</text>
						<text v-show="item1.asType == 3">多选题</text>
						<text>{{ ' ' + (index1 + 1) + '/' + questionList.length }}</text>
					</view>
					<view class="list">
						<view class="title" v-html="item1.asChinaname"></view>
						<view class="options" v-if="item1.asType === 2 || 3">
							<view
								:class="['option', { checked: index2 === hightItem[index1] }]"
								v-for="(item2, index2) in item1.askstudytovalues"
								@click="handleOption(index1, index2, item1, item2)"
								:key="index2"
							>
								<text>{{ item2.astvName }}</text>
							</view>
						</view>

						<view class="gap__filling" v-if="item1.asType === 1"><textarea value="" placeholder="请输入答案..." /></view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="control">
			<view class="last" @click="last">上一题</view>
			<view class="next" @click="next" v-show="!(indexNums == questionList.length - 1)">下一题</view>
			<view class="submit" @click="submit" v-show="indexNums == questionList.length - 1">提交</view>
		</view>
	</view>
</template>

<script>
import { getyikaoTikuList_one_all, getAskStudy, getWenxuexiResuleList } from '../../api/api.js';
export default {
	data() {
		return {
			questionList: [],
			// 当前题目索引
			currentIndex: 0,
			// 原list
			list: [],
			indexNums: 0,
			style: 'checked',
			hightItem: [],
			askstudies: []
		};
	},
	onLoad() {
		// 获取问题
		getAskStudy().then(res => {
			this.questionList = res.data.data;
			this.hightItem = new Array(res.data.data.length)
			console.log('questionList', this.questionList);
		});
	},
	methods: {
		handleOption(index1, index2, item1, item2) {
			if (this.hightItem[index1] === index2) {
				this.hightItem.splice(index1, 1, null);
				console.log(this.hightItem);
			} else {
				this.$set(this.hightItem, index1, index2);
				if (this.indexNums < this.questionList.length - 1) {
					this.indexNums++;
				}

				console.log('this.indexNums', this.indexNums);
				console.log(this.hightItem);
			}

			let itemScore = item1.asScore * (item2.astvPercent / 100);
			/* this.askstudies[index1] = {
				id: item1.id,
				asTocatalogid: item1.asTocatalogid,
				itemScore: itemScore + '',
				selectItem: item2.astvName
			}; */
			let data = {
				id: item1.id,
				asTocatalogid: item1.asTocatalogid,
				itemScore: itemScore + '',
				selectItem: item2.astvName
			};
			this.askstudies.push(data);
		},
		// 上一题
		last() {
			if (this.indexNums <= 0) {
				uni.showToast({
					title: '已经到第一题了',
					icon: 'none',
					duration: 1500
				});
				return false;
			}
			this.indexNums--;
		},
		// 下一题
		next() {
			this.indexNums++;
		},
		// 提交
		submit() {
			let data = {
				userOpenid: uni.getStorageSync('openid'),
				askstudies: this.askstudies
			};
			getWenxuexiResuleList(data).then(res => {
				console.log(111, res);
				uni.navigateTo({
					url: '../wenxuexiBaogao/wenxuexiBaogao'
				});
				uni.$on('need', () => {
					uni.$emit('baogao', {
						haomai: res.data.haomai,
						overAllScore: res.data.overAllScore,
						xuexiao: res.data.xuexiao
					});
				});
				console.log('发射成功');
			});
		},
		openSelect() {
			this.$refs.popup.open('');
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	width: 100%;
	height: 100vh;
	padding: 2.5vh;
}
.type {
	height: 100rpx;
	font-size: 35rpx;
	font-weight: 400;
	color: #a9afb8;
	line-height: 100rpx;
}
.questions-box {
	position: relative;
	width: 100%;
	overflow: hidden;
	swiper {
		height: 80vh;
	}
}
.title {
	font-size: 18px;
	font-weight: 400;
	line-height: 18px;
	color: #242448;
}
.option {
	min-width: 200rpx;
	height: 60rpx;
	margin-top: 30rpx;
	padding-left: 30rpx;
	font-size: 14px;
	font-weight: 400;
	line-height: 60rpx;
	color: #273253;
	border-radius: 60rpx;
	background-color: #ffffff;
}
.gap__filling {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 35rpx;
	textarea {
		width: 643rpx;
		height: 365rpx;
		background: #ffffff;
		border: 2rpx solid #fbbe4b;
		border-radius: 15rpx;
		padding: 22rpx 34rpx;
	}
}
.checked {
	background-color: #fbbe4b;
}
.control {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 5vh;
}
.last,
.next,
.submit {
	width: 172rpx;
	height: 56rpx;
	text-align: center;
	line-height: 56rpx;
	background: #fbbe4b;
	border-radius: 56rpx;
	color: #ffffff;
}
// 选择

.selects {
	width: 100vw;
	min-height: 660rpx;
	background-color: #ffffff;
	padding: 20rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	.circle-nums {
		width: 80rpx;
		height: 80rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 50%;
		border: 1px solid #fbbe4b;
		text-align: center;
		line-height: 80rpx;
	}
	.circle-nums-em {
		width: 80rpx;
		height: 80rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
	}
	.checkselect {
		background-color: #fbbe4b;
		color: #FFFFFF;
	}
}
</style>
