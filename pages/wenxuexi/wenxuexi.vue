<template>
	<view>
		<!-- <view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" @click="xinggepinggu">
				<view class="mianfeiyuce">
					<image src="../../static/img/mianfeiyuce_free_img2.png"></image>
				</view>
				<view class="mianfeiyuce_title">免费预测</view>
			</view>
		</view> -->
		
		<view class="dayiyuce" @click="xinggepinggu">
			<view class="dayiyuce_child">
				<view class="dayiyuce_child_title">
					<view class="dayiyuce_child_title_title">答题预测</view>
				</view>
				<view class="dayiyuce_child_content">预测结果分为三种可供选择分别为免费预测结果、会员预测结果和专业预测结果</view>
			</view>
		</view>
		
		<view class="dayiyuce2">
			<view class="dayiyuce_child2">
				<view class="dayiyuce_child_title2">
					<view class="dayiyuce_child_title_title2">精准预测</view>
				</view>
				<view class="dayiyuce_child_content2">通过人工的方式更精准得为您预测</view>
			</view>
		</view>
		
		<!-- <view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#FF6063,#FF9766);" @click="xinggepinggu_shoufei()">
				<view class="mianfeiyuce">
					<image src="../../static/img/tiyanyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">体验预测</view>
			</view>
		</view> -->
		
		<!-- <view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#629768,#F3EC76);" @click="xinggepinggu_shoufei()">
				<view class="mianfeiyuce">
					<image src="../../static/img/huiyuanyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">会员预测</view>
			</view>
		</view> -->
		
		<!-- <view class="fanghui" :style="{height:phoneHeight*0.22+'px;'}">
			<view class="fanghui_content" style="background: linear-gradient(to right,#6D88C1,#8FC9CA);" @click="xinggepinggu_shoufei()">
				<view class="mianfeiyuce">
					<image src="../../static/img/zhuangyeyuce_img.png"></image>
				</view>
				<view class="mianfeiyuce_title">专业预测</view>
			</view>
		</view> -->
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
				// console.log(1111);
				uni.getSystemInfo({
					 success(res) {
						 //获取手机系统型号
						 let systems=res.system.slice(0,3);
						 console.log(systems);
					 	 if(systems=="iOS"){
							 console.log("由于相关规范，iOS暂不可用！");
							 uni.showToast({
							 	title: '由于相关规范，iOS暂不可用！',
							 	icon:'none',
							 	duration: 2000
							 });

						 }else{
							 uni.navigateTo({
							 	url:'../chongzhizhongxin/chongzhizhongxin'
							 })
						 }
					 }
				})
				let status=1;
				
				// uni.navigateTo({
				// 	url:'../chongzhizhongxin/chongzhizhongxin'
				// })
				
			},
			//点击进入性格评估
			xinggepinggu(){
				let ids=0;
				getWenxuexiTestList(ids).then((res)=>{
					console.log(res.data.data);
					let arr=res.data.data;
					let newArr=[];
					//去除没有达到一项的数据
					for(let i=0;i<arr.length;i++){
						// console.log(arr[i]);
						if(arr[i].optionsList.length>1){
							newArr.push(arr[i]);
						}
					}
					
					uni.setStorage({
						key:'lists1',
						data:newArr
					});
					console.log(newArr);
					
				}).then(()=>{
					let valueArr=[];
					uni.navigateTo({
						url:'../xinggepinggu2/xinggepinggu2?id='+ids+'&valueArr='+valueArr
					})
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
  .dayiyuce{
	  width:100%;
	  height:380rpx;
	  // border:1px solid red;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-top:120rpx;
	  .dayiyuce_child{
		  width:380rpx;
		  height:380rpx;
		  // border:1px solid blue;
		  border-radius: 50%;
		  box-shadow: 0px 2px 6px 0px rgba(165, 149, 178, 100);
		  border: 1px solid rgba(165, 149, 178, 100);
		  .dayiyuce_child_title{
			  width:90%;
			  margin-left: 20rpx;
			  height:170rpx;
			  border:1px solid rgba(0,0,0,0);
			  color: rgba(93, 65, 117, 100);
			  font-size: 36rpx;
			  font-family: SourceHanSansSC-regular;
			  .dayiyuce_child_title_title{
				  width:250rpx;
				  height:80rpx;
				  line-height: 80rpx;
				  margin-top: 60rpx;
				  margin-left:50rpx;
				  text-align: center;
				  // border:1px solid red;
			  }
		  }
		  .dayiyuce_child_content{
			  width:90%;
			  margin-left: 26rpx;
			  height:170rpx;
			  // border:1px solid pink;
			  text-indent: 2em;	  
			  color: rgba(93, 65, 117, 100);
			  font-size: 26rpx;
			  font-family: SourceHanSansSC-regular;
		  }
		  
	  }
  }
  .dayiyuce2{
  	  width:100%;
  	  height:380rpx;
  	  // border:1px solid red;
  	  display: flex;
  	  align-items: center;
  	  justify-content: center;
	  margin-top: 60rpx;
  	  .dayiyuce_child2{
  		  width:380rpx;
  		  height:380rpx;
  		  // border:1px solid blue;
  		  border-radius: 50%;
  		  box-shadow: 0px 2px 6px 0px rgba(165, 149, 178, 100);
  		  border: 1px solid rgba(165, 149, 178, 100);
		  background-color: rgba(165, 149, 178, 100);
  		  .dayiyuce_child_title2{
  			  width:90%;
  			  margin-left: 20rpx;
  			  height:170rpx;
  			  border:1px solid rgba(0,0,0,0);
  			  color: rgba(93, 65, 117, 100);
  			  font-size: 36rpx;
  			  font-family: SourceHanSansSC-regular;
  			  .dayiyuce_child_title_title2{
  				  width:250rpx;
  				  height:80rpx;
  				  line-height: 80rpx;
  				  margin-top: 60rpx;
  				  margin-left:50rpx;
  				  text-align: center;
				  color: rgba(255, 255, 255, 100);
  				  // border:1px solid red;
  			  }
  		  }
  		  .dayiyuce_child_content2{
  			  width:90%;
  			  margin-left: 26rpx;
  			  height:170rpx;
  			  // border:1px solid pink;
  			  text-indent: 2em;	  
  			  font-size: 26rpx;
  			  font-family: SourceHanSansSC-regular;
			  color: rgba(255, 255, 255, 100);
  		  }
  		  
  	  }
  }
</style>
