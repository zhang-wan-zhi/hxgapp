<template>
	<view class="box">
		<!-- 提示框 -->
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" title="提示" content="还有没有回答的题目!" @confirm="dialogConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>
		<!-- 选择 -->
		<uni-popup ref="popup" type="top">
			<scroll-view scroll-y="true" style="height: 660rpx;">
				<view class="selects">
					<view :class="['circle-nums', { checkselect: item.selectItem != '' }]" v-for="(item, index) in askstudies" :key="index" @click="selected(index)">
						{{ index + 1 }}
					</view>
					<view class="circle-nums-em" v-for="(item, index) in 7 - (askstudies.length % 7)" :key="index"></view>
				</view>
			</scroll-view>
		</uni-popup>
		<!-- 选择结束 -->
		<view class="questions-box">
			<swiper :indicator-dots="false" :autoplay="false" :duration="50" :current="indexNums" @change="intervalChange">
				<swiper-item v-for="(item1, index1) in questionList" :key="index1">
					<view class="type" @click="openSelect">
						<text v-show="item1.asType == 1">填空题</text>
						<text v-show="item1.asType == 2">单选题</text>
						<text v-show="item1.asType == 3">多选题</text>
						<text>{{ ' ' + (index1 + 1) + '/' + questionList.length }}</text>
					</view>
					<view class="list">
						<view class="title" v-html="item1.asContent"></view>
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

						<view class="gap__filling" v-if="item1.asType === 1"><textarea v-model="askstudies[index1].selectItem" placeholder="请输入答案..." /></view>
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
			this.hightItem = new Array(res.data.data.length);
			console.log('questionList', this.questionList);
			// 新建答案容器数组
			for (let i = 0; i < res.data.data.length; i++) {
				this.askstudies.push({
					id: res.data.data[i].id,
					asTocatalogid: res.data.data[i].asTocatalogid,
					itemScore: 0,
					selectItem: ''
				});
			}
			console.log(this.askstudies);
		});
		// 获取用户信息
		console.log('userinfo',uni.getStorageSync('userData'))
	},
	methods: {
		// 选中答案触发事件
		handleOption(index1, index2, item1, item2) {
			// 计入高亮答案项
			if (this.hightItem[index1] === index2) {
				this.hightItem.splice(index1, 1, null);
				this.askstudies[index1] = {
					id: item1.id,
					asTocatalogid: item1.asTocatalogid,
					itemScore: 0,
					selectItem: ''
				};
				console.log(this.hightItem);
				console.log('this.askstudies取消', this.askstudies);
				return;
			} else {
				this.$set(this.hightItem, index1, index2);
				if (this.indexNums < this.questionList.length - 1) {
					this.indexNums++;
				}
				console.log('this.indexNums', this.indexNums);
				console.log(this.hightItem);
			}
			// 将答案加入答案列表
			let itemScore = item1.asScore * (item2.astvPercent / 100);
			this.askstudies[index1] = {
				id: item1.id,
				asTocatalogid: item1.asTocatalogid,
				itemScore: itemScore + '',
				selectItem: item2.astvName
			};
			console.log('this.askstudies', this.askstudies);
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
		dialogConfirm() {
			this.$refs.popup.open('top');
		},
		submit() {
			// 判断是否有哪一题没回答
			let emy = false;
			this.askstudies.forEach(item => {
				if (item.selectItem === '') {
					this.$refs.alertDialog.open();
					emy = true;
				}
			});
			if (emy) {
				return;
			}
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
						xuexiao: res.data.xuexiao,
						chartsData: res.data.chartsData
					});
				});
				console.log('发射成功');
			});
		},
		openSelect() {
			this.$refs.popup.open('top');
		},
		selected(index) {
			(this.indexNums = index), this.$refs.popup.close();
		},
		// 滑动触发
		intervalChange(e) {
			this.indexNums = e.detail.current;
			console.log(this.indexNums);
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
		color: #ffffff;
	}
}
</style>
