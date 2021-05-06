<template>
	<view>
		<view class="yijianFangkui">
			<view class="yijianFangkui_input">
				<textarea type="text" :placeholder="placeholders" v-model="textAreaValue" class="yijianFangkui_input1" @focus="getFocus" @blur="getBlur" placeholder-style="color:#bbb;"></textarea>
			</view>
		</view>
		<!-- <view class="yijianFangkui_upload">
			<view class="yijianFangkui_upload1">上传图片</view>
		</view> -->
		<view class="yijianFangkui_submit">
			<view class="yijianFangkui_submit_button" @click="submits">提交</view>
		</view>
	</view>
</template>

<script>
	import {Yijianfankui} from '../../api/api.js'
	export default{
		data(){
			return{
				placeholders:'请输入您想反馈的问题....',
				textAreaValue:''
			}
		},
		methods:{
			submits(){
				let openid="111";
				let openids=uni.getStorageSync('openid');
				// console.log(openids);
				let opContent=this.textAreaValue;
				//如果没有登录
				if(openids==""){
					uni.showToast({
						title:'请先登录!',
						icon:'none',
						duration:2000
					})
				}else{
					//如果输入的意见为空
					if(opContent==""){
						uni.showToast({
							title:'请先输入意见',
							icon:'none',
							duration:2000
						})
					}else{
						Yijianfankui(openid,opContent).then((res)=>{
							// console.log(res.data.code);
							if(res.data.code==200){
								uni.navigateTo({
									url:'../yijianFangkuiSuccess/yijianFangkuiSuccess'
								})
							}
						})
					}
				}
				
				// console.log(this.textAreaValue);
				
				
			},
			//点击输入框，获得焦点时
			getFocus(){
				// console.log(2222);
				this.placeholders='';
			},
			//点击输入框，失去焦点时
			getBlur(){
				this.placeholders='请输入您想反馈的问题....';
			},
		}
	}
</script>

<style lang="scss" scoped>
	.yijianFangkui{
		width:100%;
		height:360rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top:90rpx;
		.yijianFangkui_input{
			width:80%;
			height:360rpx;
			border:1px solid #ccc;
			border-radius: 20rpx;
			.yijianFangkui_input1{
				// width:100%;
				height:360rpx;
				// border:1px solid red;
				border-radius: 20rpx;
			}
		}
	}
	.yijianFangkui_upload{
		width:100%;
		height:360rpx;
		border:1px solid red;
		.yijianFangkui_upload1{
			width:150rpx;
			height:150rpx;
			border:1px solid green;
		}
	}
	.yijianFangkui_submit{
		width:100%;
		height:300rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.yijianFangkui_submit_button{
			width:120rpx;
			height:60rpx;
			line-height: 60rpx;
			text-align: center;
			border:1px solid #ccc;
			border-radius: 30rpx;
			background-color: #196AD4;
			color:#fff;
		}
	}
</style>
