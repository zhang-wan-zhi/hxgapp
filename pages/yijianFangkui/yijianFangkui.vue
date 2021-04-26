<template>
	<view>
		<view class="yijianFangkui">
			<view class="yijianFangkui_input">
				<textarea type="text" :placeholder="placeholders" v-model="inputs_value" class="yijianFangkui_input1" @focus="getFocus" @blur="getBlur" placeholder-style="color:#bbb;"></textarea>
			</view>
		</view>
		<view class="yijianFangkui_submit">
			<view class="yijianFangkui_submit_button" @click="submits">提交</view>
		</view>
	</view>
</template>

<script>
	import {getyijianfangkui} from '../../api/api.js';
	export default{
		data(){
			return{
				placeholders:'请输入您想反馈的问题....',
				inputs_value:''
			}
		},
		methods:{
			submits(){
				// console.log(this.inputs_value);
				let openid="22222";
				// let img1="";
				// let img2="";
				// let img3="";
				let opContent=this.inputs_value;
				// let formData  = new FromData();
				// formData.append('openid', '2222');
				// formData.append('openid', this.inputs_value);
				// console.log(opContent);
				getyijianfangkui(openid,opContent).then((res)=>{
						console.log(res);	
				})
				// uni.navigateTo({
				// 	url:'../yijianFangkuiSuccess/yijianFangkuiSuccess'
				// })
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
		margin-top:50rpx;
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
