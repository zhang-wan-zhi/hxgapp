<template>
	<view>
		<view class="pinggu_title">
			<view class="pinggu_title_title">性格评估</view>
		</view>
		<view class="pinggu_content">
			<view class="pinggu_content_content">
				<view class="pinggu_content_content1">
					<view class="pinggu_content_content1_tihao">
						<view class="pinggu_content_content1_tihao1">第{{indenxs+1}}题</view>
					</view>
					<view class="pinggu_content_content1_biaoti">
						<view class="pinggu_content_content1_biaoti1">{{TestListArr[indenxs].content}}</view>
					</view>
					<view class="pinggu_content_content1_content">
						<radio-group @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view class="radio_select">
									<radio class="radio_select1" :value="item.content" :checked="index === indenxs" />
									<view class="radio_select2">{{item.content}}</view>
								</view>
								
							</label>
						</radio-group>
					</view>
					<view class="pinggu_content_content1_next">
						<view class="pinggu_content_content1_next1" style="background-color: #ED5352;" @click="front">上一题</view>
						<view class="pinggu_content_content1_next1" @click="next(indenxs)">下一题</view>
					</view>
					<view class="pinggu_content_content1_submit">
						<view class="pinggu_content_content1_submit1" @click="wenxuexiBaogaos">提交</view>
					</view>
					<view class="pinggu_content_content1_right_bg">
						<view class="pinggu_content_content1_right_bg1">
							<image src="../../static/img/right_bg.png"></image>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	// import {wenXuexiTest_free} from '../../api/api.js'
	export default{
		data(){
			return{
				items: [],  //单选题的所有选项
				current: 0,  //单选题选择项的index
				TestListArr:[],  //题目数组
				indenxs:0  ,//题目的index
				selected:''  //单选题选中的值
			}
		},
		onLoad(index) {
			// wenXuexiTest_free(ids.id).then((res)=>{
			// 	console.log(res.data.data);
			// 	let Arr=res.data.data;
			// 	let newArr=[];
			// 	for(let i=0;i<Arr.length;i++){
			// 		if(Arr[i].optionsList.length>1){
			// 			newArr.push(Arr[i]);
			// 		}
			// 	}
			// 	this.TestListArr=newArr;
			// 	uni.setStorage({
			// 		key:'lists',
			// 		data:newArr
			// 	});
			// 	// console.log(newArr);
			// 	// console.log(this.TestListArr[this.indenxs]);
			// 	this.items=this.TestListArr[this.indenxs].optionsList;
			// 	// console.log(this.items);
			// })
			// console.log(index.id);
			this.TestListArr=uni.getStorageSync('lists');
			// console.log(uni.getStorageSync('lists'));
			this.indenxs=parseInt(index.id);
			// console.log(index.id);
			let item0=this.TestListArr[this.indenxs]
			this.items=item0.optionsList;
			// console.log(this.TestListArr[this.indenxs]);
		},
		methods:{
			//提交生成文学习报告
			wenxuexiBaogaos(){
				uni.navigateTo({
					url:'../wenxuexiBaogao/wenxuexiBaogao'
				})
			},
			//上一题
			front(){
				let before_index=this.indenxs-1;
				uni.navigateTo({
					url:'../xinggepinggu2/xinggepinggu2?id='+before_index
				})
			},
			//下一题
			next(indenxs){
				// console.log(indenxs);
				let index=indenxs+1;
				uni.navigateTo({
					url:'../xinggepinggu2/xinggepinggu2?id='+index
				})
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].content === evt.target.value) {
						this.current = i;
						this.selected=evt.target.value;
						break;
					}
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	.pinggu_title{
		width:100%;
		height:200rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.pinggu_title_title{
			width:150rpx;
			height:200rpx;
			line-height: 200rpx;
		    font-weight: bold;
			text-align: center;
			// border:1px solid pink;
		}
	}
	.pinggu_content{
		width:100%;
		height:650rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.pinggu_content_content{
			width:80%;
			height:755rpx;
			// border:1px solid pink;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #F4C898;
			.pinggu_content_content1{
				width:90%;
				height:715rpx;
				// border:1px solid green;
				background-color: #fff;
				.pinggu_content_content1_tihao{
					width:100%;
					height:50rpx;
					margin-top:10rpx;
					// border:1px solid green;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_tihao1{
						width:120rpx;
						height:50rpx;
						line-height: 50rpx;
						text-align: center;
						// border:1px solid green;
						color:#0F0E0E;
						font-size:30rpx;
					}
				}
				.pinggu_content_content1_biaoti{
					width:100%;
					height:80rpx;
					// border:1px solid pink;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_biaoti1{
						width:500rpx;
						height:80rpx;
						line-height: 80rpx;
						text-align: center;
						// border:1px solid pink;
						color:#EDA252;
						font-size:40rpx;
					}
				}
				.pinggu_content_content1_content{
					width:100%;
					height:400rpx;
					// border:1px solid blue;
					.radio_select{
						width:100%;
						height:50rpx;
						margin-top:10rpx;
						// border:1px solid blue;
						.radio_select1{
							float:left;
							width:50rpx;
							height:50rpx;
							margin-left:20rpx;
							// border:1px solid blue;
						}
						.radio_select2{
							float:left;
							width:300rpx;
							height:50rpx;
							margin-left:20rpx;
							// border:1px solid blue;
						}
					}
				}
				.pinggu_content_content1_next{
					width:100%;
					height:60rpx;
					// border:1px solid red;
					display: flex;
					align-items: center;
					//使得子元素左右相等排列
					justify-content: space-evenly;
					.pinggu_content_content1_next1{
						width:120rpx;
						height:55rpx;
						line-height: 55rpx;
						text-align: center;
						// border:1px solid green;
						background-color: #196AD4;
						color:#fff;
						border-radius: 30rpx;
						z-index:1;
					}
				}
				.pinggu_content_content1_submit{
					width:100%;
					height:100rpx;
					// border:1px solid red;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_submit1{
						width:120rpx;
						height:55rpx;
						line-height: 55rpx;
						text-align: center;
						// border:1px solid green;
						background-color: #EDA252;
						color:#fff;
						border-radius: 30rpx;
						z-index:1;
					}
				}
				.pinggu_content_content1_right_bg{
					width:100%;
					height:160rpx;
					// border:1px solid green;
					position:relative;
					left:20rpx;
					bottom:130rpx;
					.pinggu_content_content1_right_bg1{
						width:160rpx;
						height:160rpx;
						// border:1px solid red;
						float:right;
						image{
							float:right;
							width:100%;
							height:100%;
						}
					}
				}
			}
		}
	}
</style>
