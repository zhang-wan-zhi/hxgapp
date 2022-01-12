<template>
	<view class="box">
		<view class="type">
			<text v-show="questionList[currentIndex].type == 1">单选题</text>
			<text v-show="questionList[currentIndex].type == 2">多选题</text>
			<text></text>
			<text>{{ ' ' + (currentIndex + 1) + '/' + questionList.length }}</text>
		</view>
		<view class="questions-box">
			<view class="list-box" :style="{ top: -currentIndex * 800 + 'rpx' }">
				<view class="list" v-for="(item1, index1) in questionList" :key="index1">
					<!-- 如果是单选题 -->
					<view v-if="item1.state == 0">
						<view class="title" v-html="item1.topic"></view>
						<view class="options">
							<view class="option " :class="{ checked: index2 === item1.checkedIndex }"
								v-for="(item2, index2) in item1.hxgOptions" @click="danxuan(index2,item2)"
								:key="index2">
								<rich-text :nodes="item2.content"></rich-text>
							</view>
						</view>
					</view>
					<!-- 如果是多选题 -->
					<view v-else-if="item1.state == 1">
						<view class="title">{{ item1.topic }}</view>
						<view class="options">
							<view class="option " :class="{ checked: item1.checkedIndex.indexOf(index2) != -1 }"
								v-for="(item2, index2) in item1.hxgOptions" @click="duoxuan(index2,item2)"
								:key="index2">
								<rich-text :nodes="item2.content"></rich-text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="control">
			<view class="last" @click="last">上一题</view>
			<view class="next" @click="next" v-show="!(currentIndex == questionList.length - 1)">下一题</view>
			<view class="submit" @click="submit" v-show="currentIndex == questionList.length - 1">提交</view>
		</view>
	</view>
</template>

<script>
	import {
		getyikaoTikuList_one_all,
		getquestion,
		postQuestion
	} from "../../api/api.js";
	export default {
		data() {
			return {
				questionList: [

				],
				// 当前题目索引
				currentIndex: 0,
				// 分数
				scoreList: []
			};
		},
		onLoad(id) {
			console.log(id);
			// getyikaoTikuList_one_all(id.id).then((res) => {
			//   console.log(res.data.data);
			//   res.data.data.forEach((item, index) => {
			//     let obj = {};
			//     obj.title = item.content;
			//     obj.options = [];
			//     obj.rightIndex = "";
			//     obj.type = 1;
			//     obj.score = 10;
			//     obj.checkedIndex = -1;
			//     item.answers.forEach((item, index) => {
			//       obj.options.push(item.content);
			//       if (item.isRight == 1) {
			//         obj.rightIndex = index;
			//       }
			//     });
			//     this.questionList.push(obj);
			//   });
			// });
			// console.log(this.questionList);
			getquestion().then(res => {
				console.log('res', res)
				this.questionList = res.data.rows
				this.questionList.forEach((item, index) => {
					if (item.state == 0) {

					}
				})
			})
		},

		methods: {
			// 单选题逻辑
			danxuan(index, item) {
				this.questionList[this.currentIndex].checkedIndex = index;
				let cindex = this.currentIndex
				if (item.result == 1) {
					// 正确的话设置为0
					this.scoreList[cindex] = 0
				} else {
					this.scoreList[cindex] = 1
				}

			},
			// 多选题逻辑
			duoxuan(index, item) {
				if (!this.scoreList[index]) {
					this.scoreList[index] = 0
				}
				// 判断分数
				let cindex = this.currentIndex

				// 判断是否已经选定
				let arr = this.questionList[this.currentIndex].checkedIndex;
				let isCheck = arr.indexOf(index);
				// 如果没有被选定
				if (isCheck == -1) {
					arr.unshift(index);
					if (item.result == 0) {
						this.scoreList[index] += 1
					}
				} else {
					// 如果被选定
					arr.splice(isCheck, 1);
					if (item.result == 0) {
						this.scoreList[index] -= 1
					}
				}
				// this.questionList[this.currentIndex].checkedIndex = arr
			},
			// 上一题
			last() {
				if (this.currentIndex <= 0) {
					uni.showToast({
						title: "已经到第一题了",
						icon: "none",
						duration: 1500,
					});
					return false;
				}
				this.currentIndex--;
			},
			// 下一题
			next() {
				this.currentIndex++;
			},
			// 提交
			submit() {
				console.log('scoreList', this.scoreList)
				console.log(this.questionList);
				let data = {
					open_id: uni.getStorageSync("openid"),
					rows: this.questionList
				}
				
				postQuestion(data).then(res => {
					let right = this.questionList.length - res.data.data.errTops.length
					console.log('res', res)
					uni.redirectTo({
						url: "../chengjidan/chengjidan?score=" +
							res.data.data.fraction +
							"&right=" +
							right +
							"&error=" +
							res.data.data.errTops.length,
					});

				})
				// // 判断是否登录
				// let openid = uni.getStorageSync("openid");
				// if (openid == "") {
				// 	uni.showModal({
				// 		title: "提示",
				// 		content: "请您先去登录，然后开始测试",
				// 		success: function(res) {
				// 			if (res.confirm) {
				// 				console.log("用户点击确定");
				// 				uni.reLaunch({
				// 					url: "../gerenzhongxin/gerenzhongxin",
				// 				});
				// 			} else if (res.cancel) {
				// 				console.log("用户点击取消");
				// 			}
				// 		},
				// 	});
				// 	return false;
				// }
				// 判断是否有题目未作答
				// let flag = false;
				// this.questionList.forEach((item, index) => {
				// 	if (item.checkedIndex == -1) {
				// 		flag = true;
				// 	}
				// });
				// if (flag) {
				// 	uni.showToast({
				// 		title: "您有题目未作答",
				// 		duration: 2000,
				// 		icon: "none",
				// 	});
				// 	return false;
				// }
				// 计算表示正确数，错误数
				// let right = 0;
				// let error = 0;
				// let score = 0;
				// this.questionList.forEach((item, index) => {
				// 	// 如果是多选题
				// 	if (item.checkedIndex instanceof Array) {
				// 		item.checkedIndex.sort();
				// 		// console.log(item.checkedIndex);
				// 		if (
				// 			JSON.stringify(item.checkedIndex) == JSON.stringify(item.rightIndex)
				// 		) {
				// 			right++;
				// 			score = score + 10;
				// 		} else {
				// 			error++;
				// 		}
				// 	} else {
				// 		// 如果是单选或者判断题
				// 		if (item.checkedIndex == item.rightIndex) {
				// 			right++;
				// 			score = score + 10;
				// 		} else {
				// 			error++;
				// 		}
				// 	}
				// });
				// console.log(score, right, error);
				// uni.redirectTo({
				// 	url: "../chengjidan/chengjidan?score=" +
				// 		score +
				// 		"&right=" +
				// 		right +
				// 		"&error=" +
				// 		error,
				// });
			},
		},
	};
</script>

<style scoped>
	.box {
		width: 100%;
		padding: 40rpx;
	}

	.type {
		height: 50rpx;
		font-size: 18px;
		font-weight: 400;
		line-height: 25px;
		color: #a9afb8;
	}

	.questions-box {
		position: relative;
		width: 100%;
		height: 800rpx;
		margin-top: 50rpx;
		overflow: scroll;
	}

	.list-box {
		position: absolute;
		left: 0rpx;
		width: 100%;
	}

	.list {
		height: 800rpx;
		width: 100%;
	}

	.title {
		font-size: 18px;
		font-weight: 400;
		height: 60rpx;
		line-height: 60rpx;
		color: #242448;
	}

	.option {
		min-width: 200rpx;

		height: 80rpx;
		margin-top: 50rpx;
		padding-left: 30rpx;
		font-size: 14px;
		font-weight: 400;

		line-height: 80rpx;
		color: #273253;

		border-radius: 80rpx;
		background-color: #ffffff;
	}

	.checked {
		background-color: #fbbe4b;
	}

	.control {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.last,
	.next,
	.submit {
		width: 172rpx;

		height: 60rpx;
		text-align: center;

		line-height: 60rpx;
		background: #fbbe4b;

		border-radius: 60rpx;
		color: #ffffff;
	}
</style>
