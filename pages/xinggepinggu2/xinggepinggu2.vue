<template>
	<view class="container" :style="{height:phoneHeight*0.7+'px;'}">
		
		<view class="text_top">
			{{percent}}%
		</view>
		<view class="progress_top">
			
			  <progress border-radius="20" percent="60" :percent="percent"  stroke-width="10" activeColor="#3ED3A3"  backgroundColor="#D5F2EA"/>
		  <!-- <progress border-radius="20" activeColor="#3ED3A3" active="true" backgroundColor="#D5F2EA"  :percent="percent"  show-info="false" stroke-width="10"/> -->
					  
		</view>
		<view class="pinggu_content">
			<view class="pinggu_content_top">
				
			</view>
			<view class="pinggu_content_center">
				
			</view>
			<view class="pinggu_content_bottom">
				<view class="contain_conten_page">
					第{{indexs+1}}/{{total}}题
				</view>
				<view class="contain_conten_title">
					{{content}}
				</view>
				<view class="contain_conten_content">
					<radio-group @change="radioChange">
						<label  v-for="(item, index) in items" :key="item.id">
							<view class="radio_select">
								<radio class="radio_select1" :value="item.content" :checked="index === current" />
								<view class="radio_select2">{{item.content}}</view>
							</view>
						</label>
					</radio-group>
				</view>
				<view class="pinggu_content_content1_next">
					<view class="pinggu_content_content1_next1" style="background-color: #ED5352;" @click="front" :class="isshow_front?'show_front':''">上一题</view>
					<view class="pinggu_content_content1_next2" @click="next" :class="isshow_next?'show_next':''">下一题</view>
				</view>
				<view class="pinggu_content_content1_submit">
					<view class="pinggu_content_content1_submit1" @click="wenxuexiBaogaos" :class="isshow_submit?'show_submit':''">提交</view>
				</view>
				<!-- <view v-for="(item,index) in items" :key="item.id">
					<view class="contain_conten_content">
						<button 	size="mini"	width="120"	 plain="true">{{item.content}}</button>
					</view>
				</view> -->
			</view>
		</view>
		
	</view>
</template>

<script>
	import {getWenxuexiResuleList} from '../../api/api.js';
	export default{
		data(){
			return{
				percent:0,
				items: [],
				// //解决开始进入，选择被选中的问题
				current: null,
				indexs:0,
				content:'您的身高',
				// //是否显示上一题
				isshow_front:false,
				// //是否显示下一题
				isshow_next:true,
				// //是否显示提交
				isshow_submit:false,
				// //选项的分数
				data:[],
				scores:0,
				// //选择的数据的数据,
				valueArr:[],
				// //提交的前八项数组
				submitArr:[],
				// //选择的题目数组
				selectedArr:[],
				selectedArr1:[],
				selected1:'',
				// //选中的序号
				active:null,
				// //多个合成一个数组
				one_Arr:[],
				// //适配手机高度
				phoneHeight:0,
				Storage_data:[],
				// //总题数
				total:10
			}
		},
		onLoad(ids) {
			//获取窗口高度，适配手机
			this.getWindowHeight();
			// console.log(ids.id);
			
			// console.log(ids.valueArr);
			this.valueArr=[ids.valueArr];
			let NewArr=[ids.valueArr];
			let scoresArr=[parseInt(ids.scores)];
			// console.log(NewArr);
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
			// console.log(uni.getStorageSync('scores1'));
			// let arrs=uni.getStorageSync('valueArr1');
			let arrs=uni.getStorageSync('scores1');
			
			this.submitArr=this.arrMoretoOne(arrs);
			// console.log(this.submitArr);
			
			this.indexs=parseInt(ids.id);
			for (var i = 0; i < 10; i++) {
				this.percent = this.indexs+this.percent;
			}
			console.log("percent"+this.percent);
			
			let currentArr=uni.getStorageSync('lists1');
			// console.log("lists1"+currentArr);
			this.total=currentArr.length;
			
			let lists=currentArr[parseInt(ids.id)];
			// console.log(lists);
			this.content=lists.content;
			this.items=lists.optionsList;
			
		// this.generateRport();
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
		
				//获取本地存储storage
				getStorage(){
					uni.getStorage({
					key: 'lists1',
					success: res=>{
					    // console.log("res.data"+res.data);
					     this.Storage_data = res.data;
						},
					
					})
			},
			getOption(){
				this.submitArr=this.arrMoretoOne(arrs);
				// console.log(this.submitArr);
				this.indexs=parseInt(ids.id);
				
				let currentArr=uni.getStorageSync('lists1');
				// console.log(currentArr);
				this.total=currentArr.length;
				let lists=currentArr[parseInt(ids.id)];
				// console.log(lists);
				this.content=lists.content;
				this.items=lists.optionsList;
				/* let optionData = this.Storage_data;
				//数组扁平化
				let	arr_flat = optionData.flat(Infinity);
				//问题
				let newcontent = [];
				let content=[]; */
				/* for (let item of optionData) {
					let newcontent = [];
					let content = optionData[item].content;
					newcontent.push(content);
				} */
				/* for (var i = 0; i < optionData.length; i++) {
					let content = optionData[i].content;
					newcontent.push(content);
				}
				console.log("optionData"+newcontent);
				this.content = newcontent;
				let optionsList= [];
				let newoptionsList = [];
				// console.log(optionsList);
				this.total=optionData.length;
				let lists=optionData[parseInt(ids.id)];
				// console.log(lists);
				this.content=lists.content;
				this.items=lists.optionsList; */
			},
			
			//提交生成文学习报告
			 generateRport(){
				 getWenxuexiResuleList(result).then((res)=>{
				 	// console.log(res.data.data);
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
				// console.log(arr);
				let result=this.sum(arr);
				// console.log(result);
				// let result=82;
				getWenxuexiResuleList(result).then((res)=>{
					// console.log(res.data.data);
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
				// console.log(ids);
				let valueArr=[this.selected1];
				// console.log(this.selected1);
				//如果没有选择，提示用户先选择
				if(this.selected1==""){
					uni.showModal({
					    contain_conten_title: '提示',
					    content: '请先选择选项',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}else{
					uni.reLaunch({
						url:'../xinggepinggu2/xinggepinggu2?id='+ids+'&valueArr='+this.selectedArr+'&scores='+this.scores
					})
				}
				
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
	.container{
		width: 100%;
		background-color:#F6F6FA ;
		.progress_top{
			margin-top: 5%;
			margin-left:5%;
			text-align: center;
			width: 90%;
		}
		.text_top{
			padding-top: 10%;
			font-size: 16rpx;
			font-weight: bold;
			color: #3ED3A3;
			text-align: center;
		}
	.pinggu_content{
		width:100%;
		// border:1px solid red;
		margin-top:10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.pinggu_content_top{
			width:55%;
			height:7px;
			// border:1px solid pink;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			
		}
		.pinggu_content_center{
			width:60%;
			height:15rpx;
			// border:1px solid pink;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #FFFFFF;
			
		}
		.pinggu_content_bottom{
			width:65%;
			height:755rpx;
			padding: 5%;
			margin-bottom: 35%;
			// border:1px solid pink;
			border-radius: 20rpx;
			// display: flex;
			// flex-direction: column;
			// align-items: center;
			// justify-content: center;
			background-color: #FFFFFF;
			.contain_conten_page{
				margin-top: 10%;
				height:10%;
				line-height: 50rpx;
				text-align: center;
				// border:1px solid green;
				color:#0F0E0E;
				font-weight: bold;
			}
			.contain_conten_title{
				margin-top: 5%;
				margin-bottom: 5%;
				text-align: center;
				color:#6E7580;
				font-size:25rpx;
				font-weight: bold;
			}
			.contain_conten_content{
				padding-top:2%;
				padding: 2%;
				text-align: center;
				.radio_select{
					width:100%;
					height:50rpx;
					margin-top:10rpx;
					display: flex;
					// border:1px solid blue;
					.radio_select1{
						
						width:50rpx;
						height:50rpx;
						// border:1px solid blue;
					}
					.radio_select2{
						width:300rpx;
						height:50rpx;
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
				margin-top:30rpx;
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
		}
	}
	}
</style>
