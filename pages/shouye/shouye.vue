<template>
	<view>

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
		
		<view class="Shouye_content">
			<view class="content_title">
				<view class="shouye_title_left"></view>
			</view>
		</view>

	</view>
	
</template>

<script>
	export default {
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
				swipers:[]
			}
		},
		onLoad(){
			//模拟ajax获取数据，uni.request({...});注意回调的this指向
			this.swipers=['https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg',
			"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
			"https://app-file.beitaichufang.com/img/H5/web/banner/banner22.jpg",
			"https://app-file.beitaichufang.com/img/H5/web/banner/banner23.jpg"
			];
		},
		methods: {
		    //获取输入框的数据
			getInput(e){
				// console.log(e.target.value);
                this.input_value=e.target.value;
			},
			getInput2(e){
				console.log(e.target.value);
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
				this.placeholders_styles='iconfont icon-sousuo'
			},
			//点击确定电脑回车，或者手机回车时触发
			getSubmit(){
				console.log(111);
			},
			// 取消搜索
			Searchs(){
				console.log(this.input_value);
				uni.request({
					url: `${this.$serverUrl}api/TestSearchPost`,
					//#ifdef H5
					url:'/api/api/TestSearchPost',
					//#endif
					method: "POST",
					contentType: 'application/json;charset=UTF-8',
					data: {
						content: this.input_value
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
	height:320rpx;
	border:1px solid red;
}
</style>
