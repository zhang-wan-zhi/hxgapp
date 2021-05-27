<template>
	<view class="box">
		<view class="type">
			<text v-show="questionList[currentIndex].type == 1">单选题</text>
			<text v-show="questionList[currentIndex].type == 2">多选题</text>
			<text></text>
			<text>{{ ' ' + (currentIndex + 1) + '/' + questionList.length }}</text>
		</view>
		<view class="questions-box">
			<view class="list-box" :style="{ top: -currentIndex * 960 + 'rpx' }">
				<view class="list" v-for="(item1, index1) in questionList" :key="index1">
					<!-- 如果是单选题 -->
					<view v-if="item1.type == 1">
						<view class="title" v-html="item1.title"></view>
						<view class="options">
							<view class="option " :class="{ checked: index2 === item1.checkedIndex }" v-for="(item2, index2) in item1.options" @click="danxuan(index2)">
								<rich-text :nodes="item2"></rich-text>
							</view>
						</view>
					</view>
					<!-- 如果是多选题 -->
					<view v-else-if="item1.type == 2">
						<view class="title">{{ item1.title }}</view>
						<view class="options">
							<view class="option " :class="{ checked: item1.checkedIndex.indexOf(index2) != -1 }" v-for="(item2, index2) in item1.options" @click="duoxuan(index2)">
								<rich-text :nodes="item2"></rich-text>
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
import { getyikaoTikuList_one_all } from '../../api/api.js';
import { getWenxuexiResuleList } from '../../api/api.js';
export default {
	data() {
		return {
			questionList: [],
			// 当前题目索引
			currentIndex: 0,
			// 原list
			list:[]
		};
	},
	onLoad() {
		this.list=uni.getStorageSync('lists1');
		console.log(this.list);
		this.list.forEach((item,index)=>{
			let obj = {};
			obj.title = item.content;
			obj.options = [];
			obj.type = 1;
			obj.checkedIndex = -1;
			item.optionsList.forEach((item, index) => {
				obj.options.push(item.content);
			});
			this.questionList.push(obj);
		})
		console.log(this.questionList);
	},
	methods: {
		// 单选题逻辑
		danxuan(index) {
			this.questionList[this.currentIndex].checkedIndex = index;
		},
		// 多选题逻辑
		duoxuan(index) {
			// 判断是否已经选定
			let arr = this.questionList[this.currentIndex].checkedIndex;
			let isCheck = arr.indexOf(index);
			// 如果没有被选定
			if (isCheck == -1) {
				arr.unshift(index);
			} else {
				// 如果被选定
				arr.splice(isCheck, 1);
			}
		},
		// 上一题
		last() {
			if (this.currentIndex <= 0) {
				uni.showToast({
					title: '已经到第一题了',
					icon: 'none',
					duration: 1500
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
			// 判断是否有题目未作答
			let flag=false;
			this.questionList.forEach((item,index)=>{
				if(item.checkedIndex==-1){
					flag=true;
				}
			})
			if(flag){
				uni.showToast({
					title:'您有题目未作答',
					duration:2000,
					icon:'none'
				})
				return false
			}
	          // 计算总分
			let allScore=0;
			this.questionList.forEach((item, index) => {
				// console.log(this.list[index].optionsList[item.checkedIndex].score)
				allScore+=this.list[index].optionsList[item.checkedIndex].score;
			})
			// console.log(allScore)
			getWenxuexiResuleList(allScore).then((res)=>{
							// console.log(111,res.data.data);
							let objs=res.data.data;
							uni.setStorage({
								key:'wenluqulists',
								data:objs
							});
							uni.navigateTo({
								url:'../wenxuexiBaogao/wenxuexiBaogao?allScore=' + allScore
							})
						})
		}
	}
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
	height: 960rpx;
	margin-top: 50rpx;
	overflow: hidden;
}
.list-box {
	position: absolute;
	left: 0rpx;
	width: 100%;
}
.list {
	height: 960rpx;
	width: 100%;
}
.title {
	font-size: 18px;
	font-weight: 400;
	line-height: 50rpx;
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
	background-color: #FFFFFF;
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
	height: 56rpx;
	text-align: center;
	line-height: 56rpx;
	background: #fbbe4b;
	border-radius: 56rpx;
	color: #ffffff;
}
</style>
