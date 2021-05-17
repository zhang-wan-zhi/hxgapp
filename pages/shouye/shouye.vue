<template>
	<view class="all_content">

	<!-- 	<view class="history">
			<view class="search" :class="{active:true}">
				<input type="text" @input="getInput">
				<view class="cancle" @click="Searchs">搜索</view>
			</view>
		</view> -->
		
		<view class="Search_content">
			<input type="text" @input="getInput2" @focus="getFocus" @blur="getBlur" @confirm="getSubmit" v-model="inputs_text" :placeholder="placeholders" placeholder-style="color:#fff; margin-left:220rpx;" :placeholder-class="placeholders_styles">
		</view>
		
		<!-- 轮播图 -->
	<!-- 	<view class='home' v-if="isSearch" >
			<swiper
			indicator-dots 	
			circular
			autoplay
			interval=3000
			>
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src="item.banUrl" @click="inter_lunbo_details(item.banSkipurl)"></image>
				</swiper-item>
			</swiper>
		</view> -->
		
		<view class="">
			<swiper :autoplay="false" :current="currentIndex" :circular="true" previous-margin="80rpx" next-margin="80rpx"
			 :interval="3000" :duration="500" @change="swierChange">
				<swiper-item v-for="(item,i) in swipers" :key="i">
					<image :src="item.banUrl" class="slide-image" :class="currentIndex === i?'active':''"></image>
				</swiper-item>
			</swiper>
		</view>

		
		<!-- :class="{'width':$store.state.set_window_height*0.3+'rpx'}" -->
		
		<view class="Shouye_content">
			<view class="content_title" :style="{height:phoneHeight*0.05+'px;'}" v-if="isSearch">
				  <view class="content_title_title">
					<view class="shouye_title_left"></view>
					<view class="shouye_title_right" @click="yikaoDongtai2" :class="isactive?'isActive':''">艺考动态</view>
					<view class="shouye_title_right" @click="yikaoKecheng" :class="isactive1?'isActive':''">艺考课程</view>
					<view class="shouye_title_right" @click="yikaiTiku" :class="isactive2?'isActive':''">艺考题库</view>
				  </view>
			</view>
			
			<view class="content_contents" :style="{height:phoneHeight*0.65+'px;'}" v-show="yikaoDongtaiStatus" >
				
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
			
			<view class="yikaoKecheng_content" v-show="yikaoKechengStatus"  v-for="(item,index) in yikaoKechengList" :key="index">
				<view class="yikaoKecheng_content_content" :style="{height:phoneHeight*0.15+'px;'}" @click="yikaokecheng_click(item.aeId)">
					<view class="yikaoKecheng_content_content_left">
						<view class="yikaoKecheng_content_content_left_img">
							<image :src="item.aeImgurl"></image>
						</view>
					</view>
					<view class="yikaoKecheng_content_content_right">
						<view class="yikaoKecheng_content_content_right_top">
							<view class="yikaoKecheng_content_content_right_top_title">{{item.aeTitle}}</view>
						</view>
						<view class="yikaoKecheng_content_content_right_bottom">
							<view class="yikaoKecheng_content_content_right_bottom_title_jianjie" v-if="item.aeIntro!=null">{{item.aeIntro}}</view>
							<view class="yikaoKecheng_content_content_right_bottom_title">
								<view class="yikaoKecheng_content_content_right_bottom_title_left">{{item.peopleNum}}人观看</view>
								<view class="yikaoKecheng_content_content_right_bottom_title_right">
									<!-- <view class="yikaoKecheng_content_content_right_bottom_title_right_img">
										<image src="../../static/img/huiyuanmianfei.png"></image>
									</view> -->
									<!-- <view class="yikaoKecheng_content_content_right_bottom_title_right_rmb">{{item.aeOriginalprice}}</view> -->
								</view>
							</view>
						</view>
					</view>
				</view>

				
			</view>
			
			<view v-show="yikaoTikuStatus" class="yikaoTiku_content" v-for="(item,index) in yikaoTikuList" :key="index">
				<view class="yikaoTiku_content_content" :style="{height:phoneHeight*0.08+'px;'}" @click="zhenti_next(item.id)">
					<view class="yikaoTiku_content_content_left">{{item.title}}</view>
					<view class="yikaoTiku_content_content_right" >
						<image src="../../static/svg/xiugai_next.svg"></image>
					</view>
				</view>				
			</view>
		
			
		   <!-- <yikaoDongtai></yikaoDongtai> -->
			
		</view>
		
		
	
		
		
		<!-- <yikaoKecheng></yikaoKecheng> -->

	</view>
	
</template>

<script>
	import {yikaoDongtai} from '../../components/index/yikaoDongtai.vue';
	import {yikaoKecheng} from '../../components/index/yikaoKecheng.vue';
	import {getLunboList,getyikaoDongtaiList,getmoreList,getmoreList1,getyikaoDongtaiList_one,getyikaoKechengList,getyikaoTikuList,getyikaoTikuList_one} from '../../api/api.js';
	export default {
		components:{
			yikaoDongtai,
			yikaoKecheng
		},
		data() {
			return {
				currentIndex: 0,
				// 输入框的数据
				input_value:'',
				//新输入框的值
				inputs_text:'',
				//输入框默认的值
				placeholders:'搜索艺考动态',
				//输入框默认的样式
				placeholders_styles:'iconfont icon-sousuo',
				//轮播图图的数组地址
				swipers:[],
				//艺考动态标题栏的切换
				isactive:true,
				//艺考课程标题栏的切换
				isactive1:false,
				//艺考题库标题栏的切换
				isactive2:false,
				//适配手机高度
				phoneHeight:0,
				//艺考动态显示隐藏的状态
				yikaoDongtaiStatus:true,
				//艺考课程显示隐藏的状态
				yikaoKechengStatus:false,
				//艺考题库显示隐藏的状态
				yikaoTikuStatus:false,
				//艺考动态列表数据
				yikaiDongtaiList:[],
				//艺考课程列表数据
				yikaoKechengList:[],
				//艺考题库列表数据
				yikaoTikuList:[],
				//艺考动态目前的页码
				currentPage:1,
				isSearch:true,
				//默认状态为艺考动态的
				sousuoTyoe:1
			}
		},
		onLoad(){
			//模拟ajax获取数据，uni.request({...});注意回调的this指向
			// this.swipers=['../../static/img/lunbo1.jpg',
			// "../../static/img/lunbo2.jpg",
			// "../../static/img/lunbo3.jpg"
			// ];
			//获取窗口高度，适配手机
			this.getWindowHeight();
			//获取轮播图数据
			this.getLunboLists();
			//获取艺考动态列表数据
			this.getyikaoDongtaiLists();
		},
		//下拉触底的时候触发
		onReachBottom(){
			// console.log(222);
			//1为艺考动态，2为艺考课程，3为艺考题库
			let sousuoTyoe=this.sousuoTyoe;
			let currentPage=this.currentPage;
			let pageSize=4;
			currentPage=currentPage+1;
			uni.showLoading({
				title: '加载更多中'
			});
			getmoreList(sousuoTyoe,currentPage,pageSize).then((res)=>{
				console.log(res.data.artexamdynamicList);	
				// console.log(res.data.msg);
				if(res.data.msg=='页码超出了哦!'){
					uni.showToast({
						title: '页码超出了哦!',
						icon:'none',
						duration: 2000
					});
					// return res.data.msg;
				}else{
					this.yikaiDongtaiList=this.yikaiDongtaiList.concat(res.data.artexamdynamicList);
					this.currentPage=currentPage;
					uni.setStorage({
						key:'yikaoDongtaiList',
						data:this.yikaiDongtaiList
					});
				}
			})
			setTimeout(function () {
				uni.hideLoading();
			}, 2000);
		},
		methods: {
			swierChange(e){
				this.currentIndex = e.detail.current
			},
			//查看更多
			// mores(){
			// 	// console.log(111);
			// 	let currentPage=this.currentPage;
			// 	let pageSize=4;
			// 	currentPage=currentPage+1;
			// 	getmoreList(currentPage,pageSize).then((res)=>{
			// 		console.log(res.data.artexamdynamicList);	
			// 		// console.log(res.data.msg);
			// 		if(res.data.msg=='页码超出了哦!'){
			// 			return res.data.msg;
			// 		}else{
			// 			this.yikaiDongtaiList=this.yikaiDongtaiList.concat(res.data.artexamdynamicList);
			// 			this.currentPage=currentPage;
			// 			uni.setStorage({
			// 				key:'yikaoDongtaiList',
			// 				data:this.yikaiDongtaiList
			// 			});
			// 		}
			// 	})
			// },
			//进入查看每项轮播图
			inter_lunbo_details(id){
				console.log(id);
				uni.navigateTo({
					url:"../yikaoxiangqing_lunbo/yikaoxiangqing_lunbo?ids="+id
				})
				
			},
			//获取艺考动态列表数据
			getyikaoDongtaiLists(){
				getyikaoDongtaiList().then((res)=>{
					// console.log(res.data.artexamdynamicList);
					this.yikaiDongtaiList=res.data.artexamdynamicList;
					uni.setStorage({
						key:'yikaoDongtaiList',
						data:this.yikaiDongtaiList
					});
				})
			},
			//获取轮播图数据
			getLunboLists(){
				// console.log(111);
				getLunboList().then((res)=>{
					console.log(res.data.banners);
					this.swipers=res.data.banners;
				})
				
			},
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
			//艺考课程
			yikaokecheng_click(id){
				// console.log(id);
				uni.navigateTo({
					url:"../yikaokecheng_item/yikaokecheng_item?ids="+id
				})
			},
			//点击向右箭头触发，打开题库,打开为id的试卷
			zhenti_next(id){
				// console.log(id);
				uni.navigateTo({
					url:'../xinggepinggu/xinggepinggu?ids='+id
				})
				
			},
			//点击艺考题库触发
			yikaiTiku(){
				this.isactive=false;
				this.isactive1=false;
				this.isactive2=true;
				this.yikaoDongtaiStatus=false;
				this.yikaoKechengStatus=false;
				this.yikaoTikuStatus=true;
				//获取艺考题库列表
				getyikaoTikuList().then((res)=>{
					console.log(res.data.rows);
					this.yikaoTikuList=res.data.rows;
				});
				this.sousuoTyoe=3;
			},
			//点击艺考课程触发
			yikaoKecheng(){
				// console.log(1111);
				this.isactive=false;
				this.isactive1=true;
				this.isactive2=false;
				
				this.yikaoDongtaiStatus=false;
				this.yikaoKechengStatus=true;
				this.yikaoTikuStatus=false;
				getyikaoKechengList().then((res)=>{
					console.log(res.data.artexams);
					this.yikaoKechengList=res.data.artexams;
				})
				this.sousuoTyoe=2;
			},
			//点击艺考动态触发
			yikaoDongtai2(){
				this.isactive=true;
				this.isactive1=false;
				this.isactive2=false;
				
				this.yikaoDongtaiStatus=true;
				this.yikaoKechengStatus=false;
				this.yikaoTikuStatus=false;
			},
			//点击查看某一篇的艺考动态信息
			yikaoDongtai(ids){
				console.log(ids);
				// let id=1;
				// getyikaoDongtaiList_one(id).then((res)=>{
				// 	console.log(res);
				// });
				// let yikaiDongtaiList=this.yikaiDongtaiList;
				uni.navigateTo({
					url:'../yikaoxiangqing/yikaoxiangqing?id='+ids
				})
			},
		    //获取输入框的数据
			getInput(e){
				// console.log(e.target.value);
                this.input_value=e.target.value;
			},
			getInput2(e){
				console.log(e.target.value);
				this.inputs_text=e.target.value;
				let aedTitle=e.target.value;
				let currentPage=0;
				let pageSize=10;
				let sousuoTyoe=1;
				if(e.target.value==''){
					this.isSearch=true;
					this.getyikaoDongtaiLists();
				}else{
					getmoreList1(aedTitle,sousuoTyoe,currentPage,pageSize).then((res)=>{
						this.isSearch=false;
						console.log(res.data.artexamdynamicList);
						this.yikaiDongtaiList=res.data.artexamdynamicList;
					})
				}
				
				
				//解决点击搜索时键盘不收回
				// uni.hideKeyboard();
			},
			//点击输入框，获得焦点时
			getFocus(){
				this.placeholders='';
				this.placeholders_styles='';
				uni.navigateTo({
					url:'../test_search/test_search'
				})
			},
			//点击输入框，失去焦点时
			getBlur(){
				this.placeholders='搜索快讯';
				this.placeholders_styles='iconfont icon-sousuo';
			},
			//点击确定电脑回车，或者手机回车时触发
			getSubmit(){
				// console.log(111);
				//解决ios键盘无法弹回的问题
				uni.hideKeyboard(); 
				this.Searchs();
			},
			// 取消搜索
			Searchs(){
				console.log(this.inputs_text);
				uni.request({
					url: `${this.$serverUrl}api/TestSearchPost`,
					//#ifdef H5
					url:'/api/api/TestSearchPost',
					//#endif
					method: "POST",
					contentType: 'application/json;charset=UTF-8',
					data: {
						content: this.inputs_text
					}
				}).then((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style  lang="scss">
@import '../../style/iconfont.css';


.slide-image {
  position: absolute;
  height: 200rpx;
  width:75vw;
  z-index: 5;
  opacity: 0.8;
  top: 18%;
  margin: 0 20rpx;
}

swiper {
  height: 60vw;
}

.active {
  opacity: 1;
  z-index: 10;
  height: 320rpx;
  width: 75vw;
  top: 7%;
  transition: all 0.2s ease-in 0s;
}

// .history{
// 	.search {
// 	box-sizing: border-box;
// 	padding: 20rpx 16rpx;
// 	// background-color: red;
// 	position: relative;
// 	 input {
// 		height: 60rpx;
// 		background-color: #fff;
// 	 }
// 	}
// 	.active{
// 			display: flex;
// 			background-color: #f4f4f4;
// 			input{
// 				flex: 1;
// 				margin-right: 50rpx;
// 			}
// 			.cancle{
// 				width: 120rpx;
// 				height: 60rpx;
// 				line-height: 60rpx;
// 				font-size: 30rpx;
// 				text-align: center;
// 				border: 1px solid #ccc;
// 				background-color: #fff;
// 				box-sizing: border-box;
// 			}
// 		}

// }

.all_content{
	width:100%;
	height:100%;
	// background-color: #ccc;
	.Search_content{
		width:100%;
		height:120rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		input{
			width:90%;
			height:100rpx;
			// border:1px solid blue;
			border-radius: 32rpx;
			background-color: #F37372;
		}
	}
	.home{
		width:100%;
		height:340rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		swiper{
			width: 90%;
			height:335rpx;
			// border:1px solid red;
		}
		image{
			width: 100%;
			height: 100%;
		}
	}
	.Shouye_content{
		width:100%;
		height:auto;
		// border:1px solid red;
		margin-top:10rpx;
		.content_title{
			width:100%;
			height:60rpx;
			// border:1px solid blue;
			display: flex;
			justify-content: center;
			align-items: center;
			.content_title_title{
				width:90%;
				height:60rpx;
				// border:1px solid orange;
				.shouye_title_left{
					width:10rpx;
					height:60rpx;
					// border:1px solid green;
					float:left;
					background-color: #ED5352;
					border-radius: 5rpx;
					font-size: 28rpx;
				}
				.shouye_title_right{
					color:#8D8886;
					width:150rpx;
					height:60rpx;
					line-height: 60rpx;
					// border:1px solid blue;
					border-right: 1px solid #9F9E9E;
					float:left;
					text-align: center;
					font-weight: bold
				}
				.isActive{
					color:#000;
				}
			}
			
		}
		.content_contents{
			width:100%;
			height:auto;
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
			.see_more{
				width:100%;
				height:100rpx;
				// border:1px solid pink;
				display: flex;
				align-items: center;
				justify-content: center;
				.see_more_title{
					width:150rpx;
					height:50rpx;
					// border:1px solid blue;
					text-align: center;
					border-radius: 25rpx;
					background-color: #196AD4;
					color:#fff;
					font-weight: bold;
				}
			}
			
		}
		.yikaoKecheng_content{
			width:100%;
			height:auto;
			// border:1px solid green;
			.yikaoKecheng_content_content{
				width:100%;
				height:160rpx;
				// border:1px solid blue;
				border-bottom:1px solid #E7E7E7;
				margin-top:5rpx;
				.yikaoKecheng_content_content_left{
					width:30%;
					height:100%;
					// border:1px solid pink;
					display: flex;
					align-items: center;
					justify-content: center;
					float:left;
					.yikaoKecheng_content_content_left_img{
						width:200rpx;
						height:130rpx;
						// border:1px solid red;
						image{
							width:100%;
							height:100%;
						}
					}
				}
				.yikaoKecheng_content_content_right{
					width:68%;
					height:100%;
					// border:1px solid yellow;
					float:left;
					position: relative;
					.yikaoKecheng_content_content_right_top{
						width:100%;
						height:50%;
						// border:1px solid red;
						.yikaoKecheng_content_content_right_top_title{
							width:100%;
							height:85rpx;
							// border:1px solid green;
							color:#333337;
							font-weight: bold;
							margin-top:13rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
					}
					.yikaoKecheng_content_content_right_bottom{
						width:100%;
						height:50%;
						// border:1px solid blue;
						.yikaoKecheng_content_content_right_bottom_title_jianjie{
							width:300rpx;
							height:35rpx;
							line-height: 35rpx;
							// border:1px solid red;
							color:#8D8886;
							font-size: 24rpx;
							// margin-top:5rpx;
							// display: -webkit-box;
							overflow: hidden;/*超出部分隐藏*/
							white-space: nowrap;/*不换行*/
							text-overflow:ellipsis;/*超出部分文字以...显示*/
						}
						.yikaoKecheng_content_content_right_bottom_title{
							width:100%;
							height:35rpx;
							// border:1px solid blue;
							line-height: 35rpx;
							position: absolute;
							bottom:10rpx;
							// margin-top:20rpx;
							
							.yikaoKecheng_content_content_right_bottom_title_left{
								width:150rpx;
								height:35rpx;
								// border:1px solid red;
								float:left;
								font-size:24rpx;
								color:#8D8886;
								
								
							}
							.yikaoKecheng_content_content_right_bottom_title_right{
								width:250rpx;
								height:35rpx;
								// border:1px solid red;
								float:right;
								font-size: 30rpx;
								color:#C6A078;
								font-weight: bold;
								.yikaoKecheng_content_content_right_bottom_title_right_img{
									width:100rpx;
									height:35rpx;
									// border:1px solid green;
									border:1px solid #C6A078;
									float:left;
									image{
										width:100%;
										height:100%;
									};
								}
								.yikaoKecheng_content_content_right_bottom_title_right_rmb{
									width:100rpx;
									height:35rpx;
									// border:1px solid blue;
									margin-right:15rpx;
									float:right;
								}
							}
						}
					}
				}
			}
		}
		.yikaoTiku_content{
			width:100%;
			height:auto;
			.yikaoTiku_content_content{
				width:90%;
				height:80rpx;
				margin-left: 5%;
				// border:1px solid blue;
				border-bottom:1px solid #E7E7E7;
				margin-top:5rpx;
				.yikaoTiku_content_content_left{
					width:90%;
					height:75rpx;
					line-height: 75rpx;
					// border:1px solid blue;
					float:left;
					font-size:30rpx;
					color:#101010;
					overflow: hidden;
                    white-space: nowrap;
					text-overflow: ellipsis;
				}
				.yikaoTiku_content_content_right{
					width:8%;
					height:75rpx;
					// border:1px solid blue;
					float:left;
					image{
						width:100%;
						height: 100%;
					}
				}
			}
		}
		
	}
	
}





</style>
