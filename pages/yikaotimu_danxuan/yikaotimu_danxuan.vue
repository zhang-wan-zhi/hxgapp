<template>
	<view>
		<view class="yikaotimu_danxuan_title">
			<view class="yikaotimu_danxuan_title_title">单选题</view>
		</view>
		<view class="yikaotimu_danxuan_tihao">
			<view class="yikaotimu_danxuan_tihao_title">
				<view class="yikaotimu_danxuan_tihao_title1">{{currentId}}</view>
				<view class="yikaotimu_danxuan_tihao_title2">/{{nums}}题</view>
			</view>
			<view class="yikaotimu_danxuan_tihao_jiaojuan">立即交卷</view>
			<view class="yikaotimu_danxuan_tihao_img">
				<image src="../../static/img/jiaojuan_img.png"></image>
			</view>
		</view>
		<view class="yikaotimu_danxuan_content_title">
			<view class="yikaotimu_danxuan_content_title1">【单选】{{content}}（）。</view>
		</view>
		<view class="yikaotimu_danxuan_content_content">
			<view class="yikaotimu_danxuan_content_content1">
				<!-- <view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">A</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">嵇康</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">B</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">曹植</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">C</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">山涛</view>
				</view>
				<view class="yikaotimu_danxuan_content_content1_select">
					<view class="yikaotimu_danxuan_content_content1_select_left">D</view>
					<view class="yikaotimu_danxuan_content_content1_select_right">阮瑀</view>
				</view> -->
				
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.quId">
						<view class="radio_select">
							<radio class="radio_select1" :quId="item.quId" :checked="index === current" color="#5FB8A2" />
							<view class="radio_select2">{{item.content}}</view>
						</view>
						
					</label>
				</radio-group>
				
				 <!-- 单个复选框 -->
				<!-- <checkbox-group class="block" @change="checkboxChange">
					<view class="cu-form-group">
						<view class="title">复选选操作(checkbox)</view>
						<checkbox :class="isChecked?'checked':''" :checked="isChecked?true:false" value="1"></checkbox>
					</view>
				</checkbox-group> -->
				
				<!-- <checkbox-group class="block" @change="changeCheckbox">
					<view v-for="item in checkboxData" :key="item.value">                
						<checkbox color="#5FB8A2" :value="String(item.value)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"></checkbox>
						<text>{{item.label}}</text>
					</view>
				</checkbox-group> -->
			</view>
		</view>
		<view class="yikaotimu_danxuan_next">
			<view class="yikaotimu_danxuan_front_button" @click="click_front" :class="isshowFront?'showFront':''">上一题</view>
			<view class="yikaotimu_danxuan_next_button" @click="click_next" :class="isshowNext?'showNext':''">下一题</view>
		</view>
	</view>
</template>

<script>
	import {getyikaoTikuList_one_one} from '../../api/api.js'
	export default{
		data(){
			return{
				isChecked:false,
				checkboxData:[
					{'value':0,'label':'嵇康'},
					{'value':1,'label':'曹植'},
					{'value':2,'label':'山涛'},
					{'value':3,'label':'阮瑀'},
				],
				checkedArr:[], //复选框选中的值
				allChecked:false, //是否全选
				items: [],
				//目前选项的index
				current: 0,
				//题目的页码
				currentId:1,
				//题目总数
				nums:0,
				//单选题标题
				content:'',
				//显示上一题
				isshowFront:true,
				//显示下一题
				isshowNext:true
			}
		},
		onLoad(id) {
			console.log(id.ids1);
			// this.currentId=id.ids1;
			//如果第一题
			if(id.ids1==undefined||id.ids1=="1"){
				let id=1;
				this.isshowFront=false;
				getyikaoTikuList_one_one(id).then((res)=>{
					console.log(res.data.data);
					this.content=res.data.data[0].content;
					this.items=res.data.data[0].answers;
				});
			}else{
				getyikaoTikuList_one_one(id.ids1).then((res)=>{
					console.log(res);
					this.currentId=id.ids1;
					this.content=res.data.data[0].content;
					this.items=res.data.data[0].answers;
				});
			}
			//通过试卷id获取题目的id
			// this.currentId=id.ids;
			let arrs=uni.getStorageSync('yikaoTikuList_one1');
			this.nums=arrs.length;
			//如果最后一题，不显示下一页
			if(id.ids1==arrs.length){
				this.isshowNext=false;
			}
		},
		methods:{
			//点击，跳转到上一页
			click_front(){
				let id=parseInt(this.currentId)-1
				uni.reLaunch({
					url:'../yikaotimu_danxuan/yikaotimu_danxuan?ids1='+id
				})
			},
			//点击，跳转到下一页
			click_next(){
				// console.log(111);
				let id=parseInt(this.currentId)+1
				uni.reLaunch({
					url:'../yikaotimu_danxuan/yikaotimu_danxuan?ids1='+id
				})
			},
			// 单个复选框事件
			checkboxChange(e) {
				let values = e.detail.value;
				if(values[0]==1){
					this.isChecked=true;
				}else{
					this.isChecked=false;
				}
			},
			// 多选复选框改变事件
			changeCheckbox(e){
				this.checkedArr = e.detail.value;
				// 如果选择的数组中有值，并且长度等于列表的长度，就是全选
				if(this.checkedArr.length>0 && this.checkedArr.length==this.checkboxData.length){
					this.allChecked=true;
				}else{
					this.allChecked=false;
				}
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.yikaotimu_danxuan_title{
		width:100%;
		height:80rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.yikaotimu_danxuan_title_title{
			width:150rpx;
			height:50rpx;
			line-height: 50rpx;
			text-align: center;
			// border:1px solid pink;
			color:#60B9A3;
			font-size:40rpx;
		}
	}
	.yikaotimu_danxuan_tihao{
		width:100%;
		height:50rpx;
		// border:1px solid blue;
		.yikaotimu_danxuan_tihao_title{
			width:160rpx;
			height:50rpx;
			// border:1px solid green;
			float:left;
			margin-left:45rpx;
			.yikaotimu_danxuan_tihao_title1{
				color:#101010;
				font-size: 30rpx;
				float:left;
				font-weight: bold;
			}
			.yikaotimu_danxuan_tihao_title2{
				color:#9F9E9E;
				font-size:26rpx;
				float:left;
				margin-top: 8rpx;
			}
		}
		.yikaotimu_danxuan_tihao_img{
			width:50rpx;
			height:50rpx;
			// border:1px solid green;
			float:right;
			image{
				width:100%;
				height:100%;
			}
		}
		.yikaotimu_danxuan_tihao_jiaojuan{
			width:160rpx;
			height:50rpx;
			// border:1px solid green;
			float:right;
		}
	}
	.yikaotimu_danxuan_content_title{
		width:100%;
		height:auto;
		// border:1px solid red;
		color:#101010;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:20rpx;
		.yikaotimu_danxuan_content_title1{
			width:90%;
			height:auto;
			// border:1px solid green;
			
		}
	}
	.yikaotimu_danxuan_content_content{
		width:100%;
		height:auto;
		// border:1px solid orange;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:20rpx;
		.yikaotimu_danxuan_content_content1{
			width:90%;
			height:auto;
			// border:1px solid red;
			.yikaotimu_danxuan_content_content1_select{
				width:100%;
				height:40rpx;
				// border:1px solid pink;
				line-height:40rpx;
				margin-top:10rpx;
				.yikaotimu_danxuan_content_content1_select_left{
					width:40rpx;
					height:40rpx;
					// border:1px solid blue;
					float:left;
					text-align: center;
					border-radius:50%;
					background-color: #EDEDED;
				}
				.yikaotimu_danxuan_content_content1_select_right{
					width:300rpx;
					height:40rpx;
					// border:1px solid blue;
					float:left;
					margin-left:20rpx;
				}
			}
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
	}
	.yikaotimu_danxuan_next{
		width:100%;
		height:80rpx;
		// border:1px solid orange;
		display: flex;
		align-items: center;
		justify-content: center;
		.yikaotimu_danxuan_front_button{
			width:140rpx;
			height:50rpx;
			// border:1px solid pink;
			line-height: 50rpx;
			text-align: center;
			margin-right:50rpx;
			// border-radius: 10rpx;
			background-color: orange;
			color:#FFFFFF;
			display: none;
		}
		.showFront{
			display: block;
		}
		.yikaotimu_danxuan_next_button{
			width:140rpx;
			height:50rpx;
			// border:1px solid pink;
			line-height: 50rpx;
			text-align: center;
			// border-radius: 10rpx;
			background-color: #4CB5F6;
			color:#FFFFFF;
			display: none;
		}
		.showNext{
			display: block;
		}
	}
</style>
