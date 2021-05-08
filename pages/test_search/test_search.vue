<template>
<view>
	<!-- <uniNavBar></uniNavBar> -->
<!-- 搜索框 -->
	<view class="search">
		<view class="search1">
			<text class="iconfont icon-sousuo position-absolute text-muted"></text>
			<input class="searchInput" v-model="inputValue" @confirm="search" placeholder="搜索" type="text" />
		</view>
		<view  class="searchQuxiao" @click="qingkongSearchvalue">取消</view>
	</view>
<!-- 搜索框 -->

<!-- 搜索历史 -->
	<view class="searchHistory">
		<view class="searchHistory1" :class="isShow?'isShows':'isNotShows'">
			<view class="lishiSearch_title">历史搜索</view>
			<view style="color: red;font-size: 28px;" @click="empty">×</view>
		</view>
		<view class="searchHistoryItem" :class="isShow?'isShows':'isNotShows'">
			<view v-for="(item, index) in searchHistoryList" :key="index">
				<text class="searchHistoryItem_item" :class="isShow?'isShows':'isNotShows'" @click="click_item_search(item)">{{ item }}</text>
			</view>
		</view>
		<view class="content_contents" :style="{height:phoneHeight*0.65+'px;'}">
			<view v-for="(item,index) in yikaiDongtaiList" :key="index">
				<view class="content_content"  @click="yikaoDongtai(item.id)" :style="{height:phoneHeight*0.15+'px;'}">
					<view class="content_content1">
						<view class="content_content1_left">
							<view class="content_content1_left_top">{{item.aedTitle}}</view>
							<view class="content_content1_left_bottom">
								<view class="content_content1_left_bottom1">{{item.aedPublisheder}}</view>
								<view class="content_content1_left_bottom2">{{item.aedCreatetime}}</view>
							</view>
						</view>
						<view class="content_content1_right">
							<image :src="item.aedMinimg"></image>
						</view>
					</view>
				</view>
			</view>			
		</view>
	</view>
<!-- 搜索历史 -->
	
</view>
</template>

<script>
import {getmoreList1} from '../../api/api.js';
// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
export default {
// components:{
// 	uniNavBar
// },
data() {
	return {
		inputValue: '',
		searchHistoryList: [] ,//搜索出来的内容，
		yikaiDongtaiList:[],
		//是否显示历史搜索
		isShow:true,
		//适配手机高度
		phoneHeight:0
	};
},
onLoad() {
	//获取窗口高度，适配手机
	this.getWindowHeight();
},
methods: {
	//获取窗口高度，适配手机
	getWindowHeight(){
		uni.getSystemInfo({
			success:(res)=>{
				// console.log(res);
				// console.log("手机可用高度:"+res.windowHeight*2+"rpx");
				this.phoneHeight=res.windowHeight;
				// console.log(res.windowHeight);
				// console.log(this.phoneHeight);
				// this.$store.commit('set_window_height',res.windowHeight*2);
			}
		})
	},
	//点击查看某一篇的艺考动态信息
	yikaoDongtai(ids){
		// console.log(ids);
		
		uni.navigateTo({
			url:'../yikaoxiangqing/yikaoxiangqing?id='+ids
		})
	},
	//点击历史记录的某一项搜索
	click_item_search(item){
		console.log(item);
		this.isShow=false;
		let aedTitle=item;
		let currentPage=0;
		let pageSize=10;
		let sousuoTyoe=1;
		getmoreList1(aedTitle,sousuoTyoe,currentPage,pageSize).then((res)=>{
			// this.isSearch=false;
			console.log(res.data.artexamdynamicList);
			this.yikaiDongtaiList=res.data.artexamdynamicList;
			
		})

	},
	//取消,清空输入框的数据
	qingkongSearchvalue(){
		this.inputValue="";
		// console.log(1111);
		uni.reLaunch({
			url:'../shouye/shouye'
		})
	},
	search() {
		if (this.inputValue == '') {
			uni.showModal({
			title: '搜索内容不能为空'
		  });
		  //解决ios鼠标无法弹回的问题
		  uni.hideKeyboard();     //添加这一行代码即可
		} else {
			//如果历史记录缓存没有，就包含进去
			if (!this.searchHistoryList.includes(this.inputValue)) {
				this.searchHistoryList.unshift(this.inputValue);
				uni.setStorage({
					key: 'searchList',
					data: JSON.stringify(this.searchHistoryList)
			    });
				this.isShow=false;
				let aedTitle=this.inputValue;
				let currentPage=0;
				let pageSize=10;
				let sousuoTyoe=1;
				getmoreList1(aedTitle,sousuoTyoe,currentPage,pageSize).then((res)=>{
					// this.isSearch=false;
					console.log(res.data.artexamdynamicList);
					this.yikaiDongtaiList=res.data.artexamdynamicList;
					console.log(this.yikaiDongtaiList);
					//解决ios鼠标无法弹回的问题
					uni.hideKeyboard();     //添加这一行代码即可
				})
				
		} else {
		//有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
			let i = this.searchHistoryList.indexOf(this.inputValue);
			this.searchHistoryList.splice(i, 1);
			this.searchHistoryList.unshift(this.inputValue);
			uni.showToast({
				title: '不能重复添加'
			});
			uni.setStorage({
				key: 'searchList',
				data: JSON.stringify(this.searchHistoryList)
			});
			this.isShow=false;
			let aedTitle=this.inputValue;
			let currentPage=0;
			let pageSize=10;
			let sousuoTyoe=1;
			getmoreList1(aedTitle,sousuoTyoe,currentPage,pageSize).then((res)=>{
				// this.isSearch=false;
				console.log(res.data.artexamdynamicList);
				this.yikaiDongtaiList=res.data.artexamdynamicList;
				//解决ios鼠标无法弹回的问题
				uni.hideKeyboard();     //添加这一行代码即可
			})
		}
	}
},
	//清空历史记录
	empty() {
		uni.showToast({
			title: '已清空'
		});
		uni.removeStorage({
			key: 'searchList'
		});

		this.searchHistoryList = [];
	}
},
	async onLoad() {
		let list = await uni.getStorage({
			key: 'searchList'
		});

		// console.log(list[1].data);

		if (list[1].data) {
			this.searchHistoryList = JSON.parse(list[1].data);
		}
	 }
};
</script>

<style lang="scss">
.search {
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0px 15px;
	// margin-top:35rpx;
	margin-top:160rpx;
	.search1{
		display: flex;
		align-items: center;
		// border:1px solid red;
		.searchInput {
			background-color: #fff;
			width: 220px;
			height:80rpx;
			margin-left: 5px;
			margin-top: 35rpx;
			/* border:1px solid red; */
			border-radius: 32rpx;

			background-color: rgba(255, 255, 255, 100);
			color: rgba(16, 16, 16, 100);
			font-size: 14px;
			text-align: center;
			box-shadow: 0px 1px 9px 2px rgba(195, 195, 195, 40);
			font-family: Roboto;
			border: 1px solid rgba(217, 212, 212, 100);
		}
	}
	.searchQuxiao{
		width: 100px;
		height:80rpx;
		line-height: 80rpx;
		text-align: center;
		margin-left: 5px;
		margin-top: 35rpx;
		/* border:1px solid red; */
		background-color: #fff;
		border-radius: 25rpx;;
	}
	
}


.searchHistory {
	width: 100%;
	margin-top: 5px;
	.searchHistory1{
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0px 5px;
		// border: 1px solid red;
		.lishiSearch_title{
			font-weight: bold; 
			font-size: 40rpx;
			/* border:1px solid red; */
			margin-top:30rpx;
		}
	}
	.isShows{
		display: flex;
	}
	.isNotShows{
		display: none;
	}
	.searchHistoryItem {
		margin-top: 30rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		// border: 1px solid red;
	}
	.searchHistoryItem view {
	/* width: 50px; */
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	
		margin: 0px 5px;
		background-color: #fff;
		border-radius: 8rpx;
	}
	.content_contents{
		width:100%;
		height:auto;
		margin-top: 50rpx;
		// border:1px solid green;
		.content_content{
			width:100%;
			height:150rpx;
			// border:1px solid green;
			margin-top:5rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.content_content1{
				width:90%;
				height:150rpx;
				// border:1px solid pink;
				border-bottom:1px solid #BBBBBB;
				.content_content1_left{
					width:70%;
					height:150rpx;
					// border:1px solid red;
					float:left;
					.content_content1_left_top{
						width:100%;
						height:90rpx;
						// border:1px solid green;
						font-weight: bold;
						// white-space: nowrap;
						// word-break:break-all;
						
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.content_content1_left_bottom{
						width:100%;
						height:50rpx;
						// border:1px solid blue;
						color:#9B9B9B;
						font-size:20rpx;
						.content_content1_left_bottom1{
							width:150rpx;
							height:50rpx;
							line-height:50rpx;
							text-align: left;
							float:left;
							// border:1px solid red;
						}
						.content_content1_left_bottom2{
							width:140rpx;
							height:50rpx;
							line-height:50rpx;
							text-align: right;
							float:right;
							// border:1px solid red;
						}
					}
				}
				.content_content1_right{
					width:25%;
					height:150rpx;
					margin-left:10rpx;
					// border:1px solid green;
					float:left;
					image{
						width:100%;
						height:90%;
					}
				}
			}
		}	
	}
}


</style>