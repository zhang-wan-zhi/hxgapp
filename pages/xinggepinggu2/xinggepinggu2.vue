<template>
	<view>
		<view class="pinggu_title">
			<view class="pinggu_title_title">性格评估</view>
		</view>
		<view class="pinggu_content">
			<view class="pinggu_content_content">
				<view class="pinggu_content_content1">
					<view class="pinggu_content_content1_tihao">
						<view class="pinggu_content_content1_tihao1">第二题</view>
					</view>
					<view class="pinggu_content_content1_biaoti">
						<view class="pinggu_content_content1_biaoti1">汉语作文擅长的文体2？</view>
					</view>
					<view class="pinggu_content_content1_content">
						<radio-group @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view class="radio_select">
									<radio class="radio_select1" :value="item.value" :checked="index === current" />
									<view class="radio_select2">{{item.name}}</view>
								</view>
								
							</label>
						</radio-group>
					</view>
					<view class="pinggu_content_content1_next">
						<view class="pinggu_content_content1_next1" style="background-color: #ED5352;" @click="front">上一题</view>
						<view class="pinggu_content_content1_next1">下一题</view>
					</view>
					<view class="pinggu_content_content1_submit">
						<view class="pinggu_content_content1_submit1">提交</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				items: [{
							value: 'USA',
							name: '都不擅长'
						},
						{
							value: 'CHN',
							name: '记叙文较好',
							checked: 'true'
						},
						{
							value: 'BRA',
							name: '议论文较好'
						},
						{
							value: 'BRA2',
							name: '说明文较好'
						},
						{
							value: 'BRA3',
							name: '散文写作较好'
						},
						{
							value: 'BRA4',
							name: '相对不错'
						}
					],
					current: 0
			}
		},
		methods:{
			//上一题
			front(){
				uni.navigateTo({
					url:'../xinggepinggu/xinggepinggu'
				})
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	.pinggu_title{
		width:100%;
		height:200rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.pinggu_title_title{
			width:150rpx;
			height:200rpx;
			line-height: 200rpx;
		    font-weight: bold;
			text-align: center;
			// border:1px solid pink;
		}
	}
	.pinggu_content{
		width:100%;
		height:650rpx;
		// border:1px solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		.pinggu_content_content{
			width:80%;
			height:755rpx;
			// border:1px solid pink;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #F4C898;
			.pinggu_content_content1{
				width:90%;
				height:715rpx;
				// border:1px solid green;
				background-color: #fff;
				.pinggu_content_content1_tihao{
					width:100%;
					height:50rpx;
					margin-top:10rpx;
					// border:1px solid green;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_tihao1{
						width:120rpx;
						height:50rpx;
						line-height: 50rpx;
						text-align: center;
						// border:1px solid green;
						color:#0F0E0E;
						font-size:30rpx;
					}
				}
				.pinggu_content_content1_biaoti{
					width:100%;
					height:80rpx;
					// border:1px solid pink;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_biaoti1{
						width:500rpx;
						height:80rpx;
						line-height: 80rpx;
						text-align: center;
						// border:1px solid pink;
						color:#EDA252;
						font-size:40rpx;
					}
				}
				.pinggu_content_content1_content{
					width:100%;
					height:400rpx;
					// border:1px solid blue;
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
				.pinggu_content_content1_next{
					width:100%;
					height:60rpx;
					// border:1px solid red;
					display: flex;
					align-items: center;
					//使得子元素左右相等排列
					justify-content: space-evenly;
					.pinggu_content_content1_next1{
						width:120rpx;
						height:55rpx;
						line-height: 55rpx;
						text-align: center;
						// border:1px solid green;
						background-color: #196AD4;
						color:#fff;
						border-radius: 30rpx;
					}
				}
				.pinggu_content_content1_submit{
					width:100%;
					height:100rpx;
					// border:1px solid red;
					display: flex;
					align-items: center;
					justify-content: center;
					.pinggu_content_content1_submit1{
						width:120rpx;
						height:55rpx;
						line-height: 55rpx;
						text-align: center;
						// border:1px solid green;
						background-color: #EDA252;
						color:#fff;
						border-radius: 30rpx;
					}
				}
			}
		}
	}
</style>
