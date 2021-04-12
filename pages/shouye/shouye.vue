<template>
	<view class="all_content">

	<!-- 	<view class="history">
			<view class="search" :class="{active:true}">
				<input type="text" @input="getInput">
				<view class="cancle" @click="Searchs">搜索</view>
			</view>
		</view> -->
		
		<view class="Search_content">
			<input type="text" @input="getInput2" @focus="getFocus" @blur="getBlur" @confirm="getSubmit" v-model="inputs_text" :placeholder="placeholders" placeholder-style="color:#fff; margin-left:215rpx;" :placeholder-class="placeholders_styles">
		</view>
		
		<!-- 轮播图 -->
		<view class='home'>
			<swiper
			indicator-dots 	
			circular
			autoplay
			interval=3000
			>
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- :class="{'width':$store.state.set_window_height*0.3+'rpx'}" -->
		
		<view class="Shouye_content">
			<view class="content_title" :style="{height:phoneHeight*0.05+'px;'}">
				  <view class="content_title_title">
					<view class="shouye_title_left"></view>
					<view class="shouye_title_right" @click="yikaoDongtai2" :class="isactive?'isActive':''">艺考动态</view>
					<view class="shouye_title_right" @click="yikaoKecheng" :class="isactive1?'isActive':''">艺考课程</view>
					<view class="shouye_title_right" @click="yikaiTiku" :class="isactive2?'isActive':''">艺考题库</view>
				  </view>
			</view>
			
			<view class="content_contents" :style="{height:phoneHeight*0.62+'px;'}" v-show="yikaoDongtaiStatus">
				<view class="content_content"  @click="yikaoDongtai" :style="{height:phoneHeight*0.15+'px;'}">
					<view class="content_content1">
						<view class="content_content1_left">
							<view class="content_content1_left_top">重磅 | 央美公布复试成绩及合格线！快
	看你过线没？！</view>
							<view class="content_content1_left_bottom">
								<view class="content_content1_left_bottom1">清华大学</view>
								<view class="content_content1_left_bottom2">2021.04.02</view>
							</view>
						</view>
						<view class="content_content1_right">
							<image src="../../static/img/yikaodongtai_img1.png"></image>
						</view>
					</view>
				</view>
				
				<view class="content_content" :style="{height:phoneHeight*0.15+'px;'}">
					<view class="content_content1">
						<view class="content_content1_left">
							<view class="content_content1_left_top">速看！新高考方案公布！时间延长、分
	值改变、投档志愿均要改革！</view>
							<view class="content_content1_left_bottom">
								<view class="content_content1_left_bottom1">北京大学</view>
								<view class="content_content1_left_bottom2">2021.04.02</view>
							</view>
						</view>
						<view class="content_content1_right">
							<image src="../../static/img/yikaodongtai_img2.png"></image>
						</view>
					</view>
				</view>
				
				<view class="content_content" :style="{height:phoneHeight*0.15+'px;'}">
					<view class="content_content1">
						<view class="content_content1_left">
							<view class="content_content1_left_top">艺术类院校专业实力分析，你适合考哪
	所学校！</view>
							<view class="content_content1_left_bottom">
								<view class="content_content1_left_bottom1">复旦大学</view>
								<view class="content_content1_left_bottom2">2021.04.02</view>
							</view>
						</view>
						<view class="content_content1_right">
							<image src="../../static/img/yikaodongtai_img3.png"></image>
						</view>
					</view>
				</view>
				
				<view class="content_content" :style="{height:phoneHeight*0.15+'px;'}">
					<view class="content_content1">
						<view class="content_content1_left">
							<view class="content_content1_left_top">多省公布2021年联考合格线，赶紧看看
	过线没！附各省成绩查询时间和地址！</view>
							<view class="content_content1_left_bottom">
								<view class="content_content1_left_bottom1">浙江传媒学院</view>
								<view class="content_content1_left_bottom2">2021.04.02</view>
							</view>
						</view>
						<view class="content_content1_right">
							<image src="../../static/img/yikaodongtai_img4.png"></image>
						</view>
					</view>
				</view>
				
				<view class="see_more">
					<view class="see_more_title">查看更多</view>
				</view>
							
			</view>
			
			<view class="yikaoKecheng_content" v-show="yikaoKechengStatus">
				<view class="yikaoKecheng_content_content">
					<view class="yikaoKecheng_content_content_left">
						<view class="yikaoKecheng_content_content_left_img">
							<image src="../../static/img/yikaiKecheng_img1.png"></image>
						</view>
					</view>
					<view class="yikaoKecheng_content_content_right">
						<view class="yikaoKecheng_content_content_right_top">
							<view class="yikaoKecheng_content_content_right_top_title">教你12招搞定艺考视频</view>
						</view>
						<view class="yikaoKecheng_content_content_right_bottom">
							<view class="yikaoKecheng_content_content_right_bottom_title_jianjie" style="visibility: hidden;">内部课程，仅供专业认识和11111111111111111</view>
							<view class="yikaoKecheng_content_content_right_bottom_title">
								<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
								<view class="yikaoKecheng_content_content_right_bottom_title_right">
									<view class="yikaoKecheng_content_content_right_bottom_title_right_img">
										<image src="../../static/img/huiyuanmianfei.png"></image>
									</view>
									<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb">¥99.00</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="yikaoKecheng_content_content">
					<view class="yikaoKecheng_content_content_left">
						<view class="yikaoKecheng_content_content_left_img">
							<image src="../../static/img/yikaiKecheng_img2.png"></image>
						</view>
					</view>
					<view class="yikaoKecheng_content_content_right">
						<view class="yikaoKecheng_content_content_right_top">
							<view class="yikaoKecheng_content_content_right_top_title">【回放】高考延期艺考生和家长如何应对？
点下99999999999999999999</view>
						</view>
						<view class="yikaoKecheng_content_content_right_bottom">
							<view class="yikaoKecheng_content_content_right_bottom_title_jianjie" style="visibility: hidden;">内部课程，仅供专业认识和11111111111111111</view>
							<view class="yikaoKecheng_content_content_right_bottom_title">
								<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
								<view class="yikaoKecheng_content_content_right_bottom_title_right">
									<view class="yikaoKecheng_content_content_right_bottom_title_right_img">
										<image src="../../static/img/huiyuanmianfei.png"></image>
									</view>
									<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb">¥399.00</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="yikaoKecheng_content_content">
					<view class="yikaoKecheng_content_content_left">
						<view class="yikaoKecheng_content_content_left_img">
							<image src="../../static/img/yikaiKecheng_img3.png"></image>
						</view>
					</view>
					<view class="yikaoKecheng_content_content_right">
						<view class="yikaoKecheng_content_content_right_top">
							<view class="yikaoKecheng_content_content_right_top_title">【直播】疫情背景下的传媒艺术创作动向
评析及99999999999999999999</view>
						</view>
						<view class="yikaoKecheng_content_content_right_bottom">
							<view class="yikaoKecheng_content_content_right_bottom_title_jianjie">内部课程，仅供专业认识和11111111111111111</view>
							<view class="yikaoKecheng_content_content_right_bottom_title">
								<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
								<view class="yikaoKecheng_content_content_right_bottom_title_right">
									<view class="yikaoKecheng_content_content_right_bottom_title_right_img" v-show="false">
										<image src="../../static/img/huiyuanmianfei.png"></image>
									</view>
									<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb" style="color:#F46667; font-size: 24rpx;">免费</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="yikaoKecheng_content_content">
									<view class="yikaoKecheng_content_content_left">
										<view class="yikaoKecheng_content_content_left_img">
											<image src="../../static/img/yikaiKecheng_img4.png"></image>
										</view>
									</view>
									<view class="yikaoKecheng_content_content_right">
										<view class="yikaoKecheng_content_content_right_top">
											<view class="yikaoKecheng_content_content_right_top_title">原来《艺考开讲》的课程是这样直播的</view>
										</view>
										<view class="yikaoKecheng_content_content_right_bottom">
											<view class="yikaoKecheng_content_content_right_bottom_title_jianjie">《艺考开讲》国庆特别课程...</view>
											<view class="yikaoKecheng_content_content_right_bottom_title">
												<view class="yikaoKecheng_content_content_right_bottom_title_left">3151人观看</view>
												<view class="yikaoKecheng_content_content_right_bottom_title_right">
													<view class="yikaoKecheng_content_content_right_bottom_title_right_img">
														<image src="../../static/img/huiyuanmianfei.png"></image>
													</view>
													<view class="yikaoKecheng_content_content_right_bottom_title_right_rmb" style="color:#F46667; font-size: 24rpx;">¥19.98</view>
												</view>
											</view>
										</view>
									</view>
								</view>
				
			</view>
			
			<view v-show="yikaoTikuStatus">艺考题库</view>
		
			
		   <!-- <yikaoDongtai></yikaoDongtai> -->
			
		</view>
		
		
	
		
		
		<!-- <yikaoKecheng></yikaoKecheng> -->

	</view>
	
</template>

<script>
	import {yikaoDongtai} from '../../components/index/yikaoDongtai.vue'
	import {yikaoKecheng} from '../../components/index/yikaoKecheng.vue'
	export default {
		components:{
			yikaoDongtai,
			yikaoKecheng
		},
		data() {
			return {
				// 输入框的数据
				input_value:'',
				//新输入框的值
				inputs_text:'',
				//输入框默认的值
				placeholders:'搜索快讯',
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
				yikaoTikuStatus:false
			}
		},
		onLoad(){
			//模拟ajax获取数据，uni.request({...});注意回调的this指向
			this.swipers=['../../static/img/lunbo1.jpg',
			"../../static/img/lunbo2.jpg",
			"../../static/img/lunbo3.jpg"
			];
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
		methods: {
			//点击艺考题库触发
			yikaiTiku(){
				this.isactive=false;
				this.isactive1=false;
				this.isactive2=true;
				this.yikaoDongtaiStatus=false;
				this.yikaoKechengStatus=false;
				this.yikaoTikuStatus=true;
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
			yikaoDongtai(){
				console.log(111);
				uni.navigateTo({
					url:'../yikaoxiangqing/yikaoxiangqing'
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
				//解决点击搜索时键盘不收回
				// uni.hideKeyboard();
			},
			//点击输入框，获得焦点时
			getFocus(){
				// console.log(2222);
				this.placeholders='';
				this.placeholders_styles=''
			},
			//点击输入框，失去焦点时
			getBlur(){
				this.placeholders='搜索快讯';
				this.placeholders_styles='iconfont icon-sousuo';
			},
			//点击确定电脑回车，或者手机回车时触发
			getSubmit(){
				console.log(111);
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
		height:100rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		input{
			width:580rpx;
			height:80rpx;
			// border:1px solid blue;
			border-radius: 32rpx;
			background-color: #F37372;
		}
	}
	.home{
		width:100%;
		height:320rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		swiper{
			width: 90%;
			height:320rpx;
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
								width:110rpx;
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
				border:1px solid pink;
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
							height:40rpx;
							line-height: 40rpx;
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
							// margin-top:20rpx;
							
							.yikaoKecheng_content_content_right_bottom_title_left{
								width:150rpx;
								height:60rpx;
								// border:1px solid red;
								float:left;
								font-size:24rpx;
								color:#8D8886;
								
								// overflow: hidden;
								// text-overflow: ellipsis;
								// display: -webkit-box;
								// -webkit-line-clamp: 2;
								// -webkit-box-orient: vertical;
							}
							.yikaoKecheng_content_content_right_bottom_title_right{
								width:250rpx;
								height:60rpx;
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
									height:60rpx;
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
		
	}
	
}





</style>
