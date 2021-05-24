<template>
	<view class="container">
		
		 <view class="bg">
				<view>{{type}}<span style="margin-left: 15rpx;">第{{nowIndex+1}}/{{total}}题</span></view>
			
				<view class="progress_1">
					<progress border-radius="20"  :percent="percent"  stroke-width="7" activeColor="#FBBE4B"  backgroundColor="#E4E4E4"/>
				</view>
		 </view>
		 <view class="xuanxiang">
		 	<swiper  style="height:280px;min-height:50%vh;" :interval="1000" :duration="500" :current="curr_index" :disable-touch="true">
		 		<swiper-item class="questionOne" v-for="(item,index1) in question" :key="index1">
		 		<view class="questionOne-cont" >
		 			<!-- No.1图片 -->
		 			<!-- <view class="questionOne-cont-pic">
		 			</view> -->
		 			<!-- 问题 -->
		 			<view class="questionOne-cont-top">
		 				<view class="questionOne-cont-top-text">
		 					<text>{{item.content}}</text>
		 				</view>
		 			</view>
		 			<!-- 选项 -->
		 			<view class="questionOne-cont-chose" v-for="(an,index2) in item.optionsList" :key="index2">
		 				<view class="questionOne-cont-chose-answer" :data-val="an.value" ref="dataVal" @click="chose($event)">
							<span style="background-color: #FBBE4B;border-radius: 20rpx;height: 40rpx;">{{box}}</span>
							<text style="margin-left: 20rpx;">{{an.content}}</text>
		 				</view>
		 			</view>
		 		</view>
		 	</swiper-item>
		 	</swiper>
		 </view>
			
		<!-- <view class="card" v-for="(item,index) in list"  :class="{ aniSmall:nowIndex+1 == index && !isNext , aniBig: nowIndex == index && isNext , aniNext:nowIndex-1 == index && isNext , aniBack:nowIndex == index && !isNext }" v-if="nowIndex == index || nowIndex-1 == index || nowIndex+1 == index" :key="index">
			<view class="cardTop">
					<view class="question_content">
						{{content}}
					</view>
			</view>
			<view class="cardBottom">
				
				<view class="line">
					<view class="lineTop">
						<radio-group @change="radioChange">
							<label  v-for="(item, index2) in items" :key="index2">
								<view class="question_option">
									<radio class="question_optionBox" :value="item.content" :checked="index === current" />
									<view class="question_options">{{item.content}}</view>
								</view>
							</label>
						</radio-group>
					</view>
					<!-- <view class="lineBottom">（tips说明）</view> 
				</view>
				
			</view> -->
		<view class="buttonbottom">
				<view class="btnback" @click="mBack">上一题</view>
				<view class="btnnext" @click="mNext">下一题</view>
		</view>
			
	</view>
</template>

<script>
const util = require('../../api/util.js');
export default {
	components: {},
	data() {
		return {
			type:'单选题',
			box:'A',
			question: [],
			curr_index: 0,
			paramVal: [],
			obj: {},
			//问题
			content:'你的身高？',
			currentArr:[],
			//百分比进度条
			percent:10,
			//请求返回数组
			items: [],
			//
			current: null,
			//选项的分数
			scores:0,
			valueArr:[],
			// //提交的前八项数组
			submitArr:[],
			// //选择的题目数组
			selectedArr:[],
			selectedArr1:[],
			selected1:'',
			//多个合成一个数组
			one_Arr:[],
			list:[1],
			nowIndex:0,
			isNext:true,
			total:'',
			paramVal:[],
		};
	},
	onLoad(ids) {
		console.log(ids);
		this.valueArr=[ids.valueArr];
		console.log(this.valueArr);
		let NewArr=[ids.valueArr];
		let scoresArr=[parseInt(ids.scores)];
		if(NewArr[0]!=""&& ids.id!=0){
			suni.setStorage({
				key:'scores1',
				data:[uni.getStorageSync('scores1')].concat(scoresArr)
			})
		};
		let arrs=uni.getStorageSync('scores1');
		
		this.submitArr=this.arrMoretoOne(arrs);
		this.nowIndex=parseInt(ids.id);
		for (var i = 0; i < 10; i++) {
			this.percent = this.nowIndex+this.percent;
		}
		console.log("percent"+this.percent);
		this.question=uni.getStorageSync('lists1');
		this.total=this.question.length;
		
		// let list = currentArr.push()
		let lists=this.question[parseInt(ids.id)];
		
		// console.log(lists);
		this.content=lists.content;
		this.items=lists.optionsList;
		//循环card卡片渲染每个选项
		this.getOption();
	},
	methods: {
		//将多层嵌套数组转为一层数组
		// let one_Arr=[];
		arrMoretoOne(arr){
			for(let key of arr){
				if(Array.isArray(key)){
					this.arrMoretoOne(key)
				}else{
					this.one_Arr.push(key)
				}
			}
			return this.one_Arr
		},
		getOption(){
			let currentArr=uni.getStorageSync('lists1');
			this.total=currentArr.length;
			// let list = currentArr.push()
			
			console.log("list",this.list);
			// // console.log(lists);
			// this.content=currentArr.content;
			// this.items=currentArr.optionsList;
		},
		//下一题
		mNext:util.throttle(function(e) {
			this.isNext = true;
			let currentArr=uni.getStorageSync('lists1');
			this.list.push(1);
			console.log("list",this.list);
			console.log('123',currentArr)
			this.nowIndex+= 1
			// let nowIndex = 0;
			// if (nowIndex < this.currentArr.length) {
			// 	nowIndex += 1; //1-第二页
			// }
			// this.nowIndex = nowIndex;
			// if (this.nowIndex === this.currentArr.length) {
			// 	uni.showLoading({
			// 		title: "查询结果中..."
			// 	})
			// 	// this.resultPage();
			// }
		}, 600),
		//上一题
		mBack:util.throttle(function(e) {
			this.isNext = false;
			if(this.nowIndex > 0) {
				this.nowIndex--;
				setTimeout(()=>{
					this.list.splice(-1,1)
				},600)
			}else{
				console.log('到底了')
			}
		}, 600),
		// radioChange: function(evt) {
		// 	let arr=[];
		// 	this.paramVal.push(evt.currentTarget.dataset.val)
		// 	let nowIndex = this.nowIndex; //0-第一页
		// 	if (nowIndex < this.currentArr.length) {
		// 		nowIndex += 1; //1-第二页
		// 	}
			
		// 	let newArr=arr.push(evt.target.value);
			
		// 	this.selectedArr=arr;
		// 	// console.log(arr);
		// 	uni.setStorage({
		// 		key:'submit_value',
		// 		data:arr
		// 	})
		// 	// console.log(arr);
		// 	console.log(uni.getStorageSync('submit_value'))
			
		// },
		chose(e) {
						this.paramVal.push(e.currentTarget.dataset.val)
						let curr_index = this.curr_index; //0-第一页
						if (curr_index < this.question.length) {
							curr_index += 1; //1-第二页
						}
						// 改变下标来实现页面切换
						this.curr_index = curr_index;
						if (this.curr_index === this.question.length) {
							uni.showLoading({
								title: "查询结果中..."
							})
							this.resultPage();
						}
					},
					// 结果请求接口
								/* resultPage: function() {
									// 我的请求参数是{"questionOne": "N","questionTwo": "N",.......}这种形式，就转换了一下
									let [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix] = this.paramVal
									this.obj = {
										questionOne,
										questionTwo,
										questionThree,
										questionFour,
										questionFive,
										questionSix
									}
									console.log(this.obj)
									this.obj = JSON.stringify((this.obj))
									uni.request({
										url: '接口地址',
										method: 'post',
										header: {
											'content-type': 'application/json'
										},
										data: this.obj,
										success(res) {
											if (res.data.code == 0) {
												uni.setStorageSync('resultData', res.data.data);
												setTimeout(() => {
													uni.hideLoading()
												}, 300)
												setTimeout(() => {
													// 放的跳转页面
													// uni.redirectTo({
													// 	url: '../endPage/endPage'
													// })
												},500)
											}else{
												uni.showToast({
													title:"执行错误",
													icon:'none',
													duration:2000
												})
									}
							}
						});
			} */
	}
};
</script>

<style lang="scss">


	/* .aniSmall{
		animation: aniSmall .6s both;
	}
	@keyframes aniSmall {
		0%{
			transform: scale(1);
		}
		95%{
			transform:  scale(0.8);
		}
	}
	.aniBig{
		animation: aniBig .6s both;
	}
	@keyframes aniBig {
		0%{
			transform: scale(.8);
		}
		99%{
			transform:  scale(1);
		}
		100%{
			transform: scale(1) ;
		}
	}
	.aniBack{
		animation: aniBack .6s both;
	}
	@keyframes aniBack {
		0%{
			z-index: 999;
			transform: translate(-120%,50%) scale(.8) rotate(-30deg);
		}
		95%{
			z-index: 999;
			transform: translate(0,0) scale(1) rotate(0);
		}
		96%{
			z-index: 999;
			transform: translate(0,0) scale(1) rotate(0);
		}
		100%{
			z-index: 999;
			transform: translate(0,0) scale(1) rotate(0);
		}
	}
	.aniNext{
		animation: aniNext .6s both;
	}
	@keyframes aniNext {
		0%{
			z-index: 999;
			transform: translate(0,0) scale(1) rotate(0);
		}
		95%{
			z-index: 999;
			transform: translate(-120%,50%) scale(.8) rotate(-30deg);
		}
		100%{
			z-index: 999;
			transform: translate(-120%,50%) scale(.8) rotate(-30deg);
		}
	} */
.back {
	left: 78rpx;
}
.next {
	right: 78rpx;
}
.buttonbottom{
	height: 120rpx;
	margin-top: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	// border-top: 1px solid #888888;
	box-shadow: 0px -2px 3px #888888;
	.btnback{
		background-color: #FBBE4B;
		width: 150rpx;
		border-radius: 30rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 21rpx;
		font-weight: bold;
		color: #FFFFFF;
	}
	.btnnext{
		background-color: #FBBE4B;
		width: 150rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 30rpx;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 21rpx;
		font-weight: bold;
		color: #FFFFFF;
	}
}
/* .btn {
	background-color: #FBBE4B;
	width: 150rpx;
	height: 60rpx;
	border-radius: 30rpx;
	display: flex;
	align-items: center;
	justify-content: end;
	font-size: 21rpx;
	font-weight: bold;
	color: #FFFFFF;
} */
.container {
	.bg {
		z-index: 9;
		top: 0;
		padding-top: 10rpx;
		margin-left: 35rpx;
		color: #A9AFB8;
		left: 0;
		font-family: 'Microsoft YaHei';
		font-size: 35rpx;
		font-weight: bold;
		width: 100vw;
		height: 13vh;
		.progress_1{
			width: 90%;
			margin-top: 20rpx;
		}
		// display: flex;
		// align-items: center;
		// justify-content: flex-start;
	}
	.xuanxiang{
		.questionOne{
			.questionOne-cont{ 
				.questionOne-cont-top{
					padding-top: 30rpx;
					margin-left: 20rpx;
					font-size: 29rpx;
					color: #273253; 
					font-weight: bold;
					height: 38rpx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					.questionOne-cont-top-text{
						padding-bottom: 30rpx;
					}
				}
				.questionOne-cont-chose{
					.questionOne-cont-chose-answer{
						margin-left: 20rpx;
						margin-top: 20rpx;
						color: #273253;
						font-family: 'PingFang SC';
						.questionOne-cont-chose-box{
							
						}
					}
				}
			}
		}
	}
	.card {
		.cardBottom {
			padding-top: 20rpx;
			.question_content{
				margin-left: 20rpx;
				color: #273253;
				font-family: 'PingFang SC';
				
			}
			.line {
				padding-top: 60rpx;
				width: 87%;
				position: relative;
				margin: auto;
				.lineBottom {
					font-size: 20rpx;
					color: #727272;
					padding-left: 72rpx;
				}
				.lineTop {
					.question_option {
						padding-left: 15rpx;
						margin-top: 15rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						.question_optionBox{
							
						}
						.question_options {
							padding-left: 30rpx;
						}
						
					}
					display: flex;
					align-items: flex-start;
					justify-content: flex-start;
				}
			}
		}
		.cardTop {
			padding-top: 30rpx;
			margin-left: 20rpx;
			font-size: 29rpx;
			color: #273253;
			font-weight: bold;
			height: 10vh;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
		width: 90vw;
		position: absolute;
		top: 10vh;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 10;
		min-height: 82vh;
		transition: .6s;
		overflow: hidden;
		transform: scale(.8);
		box-shadow: 0rpx 0rpx 17rpx 0rpx rgba(35, 36, 37, 0.25);
		background: rgba(254, 254, 254, 1);
		border-radius: 10rpx;
	}
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
}
</style>
