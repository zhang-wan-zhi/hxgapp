<template>
	<view class="content1">
		<view class="content1_title">
			<view class="content1_title_title">{{yikaoDongtaiList_obj.aedTitle}}</view>
		</view>
		<view class="content1_user">
			<view class="content1_user_user">{{yikaoDongtaiList_obj.aedPublisheder}}</view>
			<view class="content1_user_time">{{yikaoDongtaiList_obj.aedCreatetime}}</view>
		</view>
		<view class="content1_content">{{yikaoDongtaiList_obj.aedContent}}</view>
	</view>
</template>

<script>
	import {getyikaoDongtaiList_one} from '../../api/api.js';
	export default{
		data(){
			return{
				yikaoDongtaiList:[],
				yikaoDongtaiList_obj:{}
			}
		},
		onLoad(res) {
			console.log(res.id);
			this.getList(res.id);
		},
		methods:{
			getList(ids){
				let yikaoDongtaiLists=uni.getStorageSync('yikaoDongtaiList');
				let newLists=[];
				// console.log(ids);
				// for(let i=0;i<yikaoDongtaiLists.length;i++){
				// 	console.log(yikaoDongtaiLists[i].id);
				// 	if(yikaoDongtaiLists[i].id==ids){
				// 	  	newLists.push(yikaoDongtaiLists[i])
				// 	}
				// }
				getyikaoDongtaiList_one(ids).then((res)=>{
					console.log(res.data.artexamdynamic);
					this.yikaoDongtaiList_obj=res.data.artexamdynamic;
				});
				// console.log(newLists);
				// this.yikaoDongtaiList=newLists;
				console.log(this.yikaoDongtaiList);
			}
		}
	}
</script>

<style lang="scss">
	.content1{
		.content1_title{
			width:100%;
			height:100rpx;
			// border:1px solid red;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top:40rpx;
			.content1_title_title{
				width:90%;
				height:100rpx;
				// border:1px solid red;
			}
		}
		.content1_user{
			width:100%;
			height:50rpx;
			// border:1px solid blue;
			color:#8A8A88;
			font-size:20rpx;
			line-height:50rpx;
			.content1_user_user{
				width:150rpx;
				height:50rpx;
				// border:1px solid pink;
				float:left;
				text-align:center;
			}
			.content1_user_time{
				width:400rpx;
				height:50rpx;
				// border:1px solid pink;
				float:right;
			}
		}
		.content1_content{
			width:100%;
			height:500rpx;
			// border:1px solid red;
			text-indent: 50rpx;
			margin-top:30rpx;
		}
	}
</style>
