<template>
	<view>
		<view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" @click="xinggepinggu">
				<view class="mianfeiyuce">
					<image src="../../static/img/mianfeiyuce_free_img2.png"></image>
				</view>
				<view class="mianfeiyuce_title">免费预测</view>
				<view class="mianfeiyuce_free_img">
					<image src="../../static/img/mianfei_img.png"></image>
				</view>
				<!-- <view class="mianfeiyuce_enter" >
					<view class="mianfeiyuce_enter1">点击进入</view>
				</view> -->
			</view>
		</view>
		
		<view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#FF6063,#FF9766);" @click="xinggepinggu_shoufei">
				<view class="mianfeiyuce">
					<image src="../../static/img/tiyanyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">体验预测</view>
				<view class="mianfeiyuce_free_img2">
					<image src="../../static/img/wenxuexi_shoufei_img.png"></image>
				</view>
				<!-- <view class="mianfeiyuce_enter">
					<view class="mianfeiyuce_enter1" style="background-color: #F03A3E;">点击进入</view>
				</view> -->
			</view>
		</view>
		
		<view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#629768,#F3EC76);">
				<view class="mianfeiyuce">
					<image src="../../static/img/huiyuanyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">会员预测</view>
				<view class="mianfeiyuce_free_img2">
					<image src="../../static/img/wenxuexi_shoufei_img.png"></image>
				</view>
				<!-- <view class="mianfeiyuce_enter">
					<view class="mianfeiyuce_enter1" style="background-color: #4B884E;">点击进入</view>
				</view> -->
			</view>
		</view>
		
		<view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#6D88C1,#8FC9CA);">
				<view class="mianfeiyuce">
					<image src="../../static/img/zhuangyeyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">专业预测</view>
				<view class="mianfeiyuce_free_img2">
					<image src="../../static/img/wenxuexi_shoufei_img.png"></image>
				</view>
				<!-- <view class="mianfeiyuce_enter">
					<view class="mianfeiyuce_enter1" style="background-color: #5978B9;">点击进入</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {getWenxuexiTestList} from '../../api/api.js'
	export default {
		data() {
			return {
				//适配手机高度
				phoneHeight:0,
			}
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
			//点击进入收费页面
			xinggepinggu_shoufei(){
				console.log(1111);
				uni.navigateTo({
					url:'../chongzhizhongxin/chongzhizhongxin'
				})
			},
			//点击进入性格评估
			xinggepinggu(){
				let id=0;
				getWenxuexiTestList(id).then((res)=>{
					console.log(res.data.data);
					uni.setStorage({
						key:'lists',
						data:res.data.data,
					})
				})
				uni.navigateTo({
					url:'../xinggepinggu/xinggepinggu?id='+id;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
  .fanghui{
	  width:100%;
	  height:220rpx;
	  // border:1px solid red;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	   margin-top:30rpx;
	  .fanghui_content{
		  width:90%;
		  height:220rpx;
		  // border:1px solid blue;
		  border-radius: 10rpx;
		  background: linear-gradient(to right,#FDB878,#F9D227);
		  color:#fff;
		  text-align: center;
		  .mianfeiyuce{
			  width:180rpx;
			  height:180rpx;
			  // border:1px solid pink;
			  float:left;
			  image{
				  width:100%;
				  height:100%;
			  }
		  }
		  .mianfeiyuce_title{
			  width:200rpx;
			  height:220rpx;
			  line-height: 220rpx;
			  // border:1px solid pink;
			  font-size:50rpx;
			  float:left;
			  margin-left:50rpx;
		  }
		  .mianfeiyuce_free_img{
			  width:170rpx;
			  height:170rpx;
			  // border:1px solid red;
			  float:right;
			  image{
				  width:100%;
				  height:100%;
			  }
		  }
		  .mianfeiyuce_free_img2{
			  width:110rpx;
			  height:85rpx;
			  // border:1px solid red;
			  float:right;
			  margin-top:-20rpx;
			  margin-right:-20rpx;
			  image{
				  width:100%;
				  height:100%;
			  }
		  }
		  .mianfeiyuce_enter{
			  width:200rpx;
			  height:200rpx;
			  // border:1px solid pink;
			  float:right;
			  font-size:20rpx;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  .mianfeiyuce_enter1{
				  width:120rpx;
				  height:50rpx;
				  line-height:50rpx;
				  border-radius:20rpx;
				  background-color: #EA862C;
			  }
		  }
	  }
  }
</style>
