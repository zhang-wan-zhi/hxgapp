<template>
	<view>
		<!-- 自定义顶部导航 -->
		<!-- <u-navbar class="self-nav" :is-back="false" title-color="white" :background="{background:'#39c4f6'}" title="数据">
			<text v-show="current===0" @click="popShowHandle" class="iconfont icon-shaixuan1">111</text>
		</u-navbar> -->
<!-- 		<view class="pinggu_title">
			<view class="pinggu_title_title">性格评估</view>
		</view> -->
		<view class="pinggu_content" :style="{height:phoneHeight*0.7+'px;'}">
			<view class="pinggu_content_content">
				<view class="pinggu_content_content1">
					<view class="pinggu_content_content1_tihao">
						<view class="pinggu_content_content1_tihao1">第{{indexs+1}}题</view>
					</view>
					<view class="pinggu_content_content1_biaoti">
						<view class="pinggu_content_content1_biaoti1">{{content}}</view>
					</view>
					<view class="pinggu_content_content1_content">
						<radio-group @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.id">
								<view class="radio_select">
									<radio class="radio_select1" :value="item.content" :checked="index === current" />
									<view class="radio_select2">{{item.content}}</view>
								</view>
								
							</label>
						</radio-group>
					</view>
					<view class="pinggu_content_content1_next">
						<!-- <view class="pinggu_content_content1_next1" style="background-color: #ED5352;" @click="front" :class="isshow_front?'show_front':''">上一题</view> -->
						<view class="pinggu_content_content1_next2" @click="next" :class="isshow_next?'show_next':''">下一题</view>
					</view>
					<view class="pinggu_content_content1_submit">
						<view class="pinggu_content_content1_submit1" @click="wenxuexiBaogaos" :class="isshow_submit?'show_submit':''">提交</view>
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
	import {getWenxuexiResuleList} from '../../api/api.js';
	export default{
		data(){
			return{
				items: [],
				//解决开始进入，选择被选中的问题
				current: null,
				indexs:0,
				content:'',
				//是否显示上一题
				isshow_front:false,
				//是否显示下一题
				isshow_next:true,
				//是否显示提交
				isshow_submit:false,
				//选项的分数
				scores:0,
				//选择的数据的数据,
				valueArr:[],
				//提交的前八项数组
				submitArr:[],
				//选择的题目数组
				selectedArr:[],
				// selectedArr1:[],
				selected1:'',
				//选中的序号
				active:null,
				//多个合成一个数组
				one_Arr:[],
				//适配手机高度
				phoneHeight:0,
			}
		},
		onLoad(ids) {
			//获取窗口高度，适配手机
			this.getWindowHeight();
			console.log(ids.scores);
			console.log(ids.id);
			
			// console.log(ids.valueArr);
			this.valueArr=[ids.valueArr];
			let NewArr=[ids.valueArr];
			let scoresArr=[parseInt(ids.scores)];
			console.log(NewArr);
			if(NewArr[0]!=""&& ids.id!=0){
				// uni.setStorage({
				// 	key:'valueArr1',
				// 	data:[uni.getStorageSync('valueArr1')].concat(NewArr)
				// })
				uni.setStorage({
					key:'scores1',
					data:[uni.getStorageSync('scores1')].concat(scoresArr)
				})
			}
			console.log(uni.getStorageSync('scores1'));
			// let arrs=uni.getStorageSync('valueArr1');
			let arrs=uni.getStorageSync('scores1');
			
			this.submitArr=this.arrMoretoOne(arrs);
			console.log(this.submitArr);
			
			this.indexs=parseInt(ids.id);
			
			let currentArr=uni.getStorageSync('lists1');
			// console.log(currentArr);
			let lists=currentArr[parseInt(ids.id)];
			// console.log(lists);
			this.content=lists.content;
			this.items=lists.optionsList;
			
			//对上一题进行校验
			// if(this.indexs==currentArr.length-1){
			// 	this.isshow_front=true;
			// }else{
			// 	this.isshow_front=false;
			// }
			
			// 对上一题进行校验
			//没有值，就让上一页不显示
			//如果点击上一页有front_value
			if(ids.id=="0"){
				//不显示上一页
				this.isshow_front=false;
			}else{
				this.isshow_front=true;
			}
			
			//对下一题进行校验
			//如果id为8的时候，不显示下一页
			if(ids.id=="9"){
				//不显示上一页
				this.isshow_next=false;
				this.isshow_submit=true;
			}else{
				this.isshow_submit=false;
				this.isshow_next=true;
			}
		
			
		},
		methods:{
			//获取窗口高度，适配手机
			getWindowHeight(){
				uni.getSystemInfo({
					success:(res)=>{
						this.phoneHeight=res.windowHeight;
					}
				})
			},
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
			//数组数据求和
			sum(arr) {
			    return arr.reduce(function(prev, curr, idx, arr){
			        return prev + curr;
			    });
			},
			//提交生成文学习报告
			wenxuexiBaogaos(){
				// let submit_value_Arr=uni.getStorageSync('submit_value');
				// let arr=this.submitArr.concat(this.valueArr);
				let arr=this.submitArr.concat(this.scores);
				//去除数组中的空字符串
				for(let i=0;i<arr.length;i++){
					if(arr[i]==""){
						arr.splice(i,1)
					}
				}
				console.log(arr);
				let result=this.sum(arr);
				// console.log(result);
				// let result=82;
				getWenxuexiResuleList(result).then((res)=>{
					console.log(res.data.data);
					let objs=res.data.data;
					uni.setStorage({
						key:'wenluqulists',
						data:objs
					});
					uni.navigateTo({
						url:'../wenxuexiBaogao/wenxuexiBaogao'
					})
				})
				
			},
			//上一题
			front(){
				
				let ids=parseInt(this.indexs)-1;
				// console.log(ids);
				uni.reLaunch({
					url:'../xinggepinggu2/xinggepinggu2?id='+ids
				})
			},
			//下一题
			next(){
				let ids=parseInt(this.indexs)+1;
				console.log(ids);
				// let valueArr=[this.selected1];
				// console.log(valueArr);
				console.log(this.selectedArr);
				uni.reLaunch({
					url:'../xinggepinggu2/xinggepinggu2?id='+ids+'&valueArr='+this.selectedArr+'&scores='+this.scores
				})
			},
			radioChange: function(evt) {
				let arr=[];
				
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].content === evt.target.value) {
						
						this.current = i;
						// console.log(evt.target.value);
						this.selected1=evt.target.value;
						this.scores=this.items[i].score
						// arr.push(evt.target.value);
						break;
					}
				}
				let newArr=arr.push(evt.target.value);
				
				this.selectedArr=arr;
				// console.log(arr);
				uni.setStorage({
					key:'submit_value',
					data:arr
				})
				// console.log(arr);
				console.log(uni.getStorageSync('submit_value'));
	
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
		// height:800rpx;
		// border:1px solid red;
		margin-top:20%;
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
					overflow-y:auto;
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
						display:none;
					}
					.pinggu_content_content1_next2{
						width:120rpx;
						height:55rpx;
						line-height: 55rpx;
						text-align: center;
						// border:1px solid green;
						background-color: #196AD4;
						color:#fff;
						border-radius: 30rpx;
						z-index:1;
						display:none;
					}
					.show_front{
						display:block;
					}
					.show_next{
						display:block;
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
						display: none;
					}
					.show_submit{
						display:block;
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
