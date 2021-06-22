<template>
	<view class="probability__main">
		<view class="probability__center">
			<view class="probability__center__title">
				信息填报
			</view>
			<!-- 学校专业选择 -->
			<view v-if="luquType === 'bg'">
				<view class="example-body">
					<uni-combox label="学校" labelWidth="150px" :candidates="candidateSchool" placeholder="请选择学校"
						v-model="school"></uni-combox>
				</view>
				<view class="example-body">
					<uni-combox label="专业" labelWidth="150px" :candidates="candidateMajor" placeholder="请选择专业"
						v-model="major" emptyTips="请输入正确的学校名称"></uni-combox>
				</view>
				<view class="example-body">
					<uni-combox label="分科" labelWidth="150px" :candidates="candidateFk" placeholder="请选择分科"
						v-model="fenke"></uni-combox>
				</view>
				<view class="example-body">
					<uni-combox label="省份" labelWidth="150px" :candidates="candidateProvince" placeholder="请选择省份"
						v-model="province"></uni-combox>
				</view>

				<view class="probability__center__confirm" @click="confirm">
					确定
				</view>
			</view>
			<!-- 综合 -->
			<view class="zonghe" v-if="luquType === '3'">
				<view class="back" @click="luquType = 'bg'">
					返回
				</view>
				<view v-for="(item,index) in zongheTitle" :key="item.id">
					<view class="question" v-if="item.isshow == 1">
						<view class="question__title">
							<image src="../../static/img/biaoji.png"></image>
							<text>{{ !item.inputShow ? (item.title + '是否通过') : (item.title + '成绩') }}</text>
						</view>
						<input type="text" v-model="item.value" v-if="item.inputShow" />
						<view class="btns" v-if="!item.inputShow">
							<view class="btns1" @click="showInput(item,index)">
								是
							</view>
							<view class="btns1" @click="showTips">
								否
							</view>
						</view>
					</view>
				</view>
				<view class="probability__center__confirm confirm-btn3" @click="confirmFirst('3')">
					确定
				</view>
			</view>
			<!-- 专过文录 -->
			<view class="zgwl" v-if="luquType === '2'">
				<view class="back" @click="luquType = 'bg'">
					返回
				</view>
				<view class="question" v-for="(item,index) in zongheTitle" :key="item.id">
					<view class="question__title">
						<image src="../../static/img/biaoji.png"></image>
						<text>{{ !item.inputShow ? (item.title + '是否通过') : (item.title + '成绩') }}</text>
					</view>
					<input type="text" v-model="item.value" v-if="item.inputShow" />
					<view class="btns" v-if="!item.inputShow">
						<view class="btns1" @click="showInput(item,index)">
							是
						</view>
						<view class="btns1" @click="showTips">
							否
						</view>
					</view>
				</view>
				<view class="probability__center__confirm confirm-btn3" @click="confirmFirst('2')">
					确定
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getSchoolName,
		getMajorName,
		getWenluquShengfeng,
		getAskLuquProb
	} from '../../../api/api.js'
	export default {
		data() {
			return {
				candidateSchool: [],
				school: '',
				candidateMajor: [],
				major: '',
				candidateFk: ['文科', '理科', '新高考'],
				fenke: '',
				candidateProvince: [],
				province: '',
				timer: null,
				academies: [],
				luquType: 'bg',
				// 综合问题
				zongheQues: [],
				// 综合题目
				zongheTitle: [{
						title: '校考',
						id: 0,
						value: '',
						isshow: 1,
						ratio: '',
						inputShow: false
					},
					{
						title: '统考',
						id: 1,
						value: '',
						isshow: 1,
						ratio: '',
						inputShow: false
					},
					{
						title: '联考',
						id: 2,
						value: '',
						isshow: 1,
						ratio: '',
						inputShow: false
					},
					{
						title: '文化',
						id: 3,
						value: '',
						isshow: 1,
						ratio: '',
						inputShow: false
					},
				],
				// 选择的学校专业id
				schoolPrimaryId: '',
				// 记录是否通过
				isPass: true,
				provinces: []
			}
		},
		onLoad() {
			getWenluquShengfeng().then(res => {
				console.log('省份', res);
				this.provinces = res.data.provinces;
				res.data.provinces.map(item => {
					this.candidateProvince.push(item.pName)
				})
			})
		},
		watch: {
			school: function(newSchool, oldSchool) {

				if (this.timer !== null) {
					clearTimeout(this.timer);
				}
				this.timer = setTimeout(this.debounce, 1000);
				console.log('11111111', newSchool, oldSchool)
			}
		},
		methods: {
			// 防抖
			debounce(newSchool) {
				let data = {
					school: this.school
				}
				getSchoolName(data).then(res => {
					this.candidateSchool = res.data.academyNames
					getMajorName(data).then(res => {
						console.log('res', res)
						if (res.data.code == 200) {
							this.candidateMajor = res.data.academyNames
							this.academies = res.data.hxgAcademies
						}
					})
				})
			},
			// 填写更多信息
			confirm() {
				// 校验
				if (this.fenke == '' || this.school == '' || this.major == '' || this.province == '') {
					uni.showToast({
						title: '有未填写的选项！',
						duration: 2000,
						icon: 'none'
					})
					return
				}
				if (this.candidateFk.indexOf(this.fenke) == '-1') {
					uni.showToast({
						title: '请输入正确的分科选项！',
						duration: 2000,
						icon: 'none'
					})
					return
				}
				if (this.candidateProvince.indexOf(this.province) == '-1') {
					uni.showToast({
						title: '请输入正确的省份名称！',
						duration: 2000,
						icon: 'none'
					})
					return
				}
				// 校验结束
				let index = this.candidateMajor.indexOf(this.major);
				// 判断专业类型
				this.luquType = this.academies[index].reLuquType;
				// 选择的学校专业id
				this.schoolPrimaryId = this.academies[index].id;
				console.log(this.luquType)
				if (this.luquType == '3') {
					// 如果是综合
					if (this.academies[index].acNewlqgz != null) {
						this.zongheQues = this.academies[index].acNewlqgz.split('+');
						for (let i = 0; i < this.zongheQues.length; i++) {
							this.zongheQues[i] = this.zongheQues[i].substring(1);
							if (this.zongheQues[i] == '0') {
								this.zongheTitle[i].isshow = 0
							} else {
								this.zongheTitle[i].ratio = this.zongheQues[i]
							}
						}
						console.log('this.zongheQues', this.zongheQues, this.zongheTitle)

					}
				}

			},
			confirmFirst(type) {
				// 是否有未通过
				if (!this.isPass) {
					uni.showModal({
						title: '提示',
						content: '有考试未通过,录取概率为0',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					return
				}
				// 校验
				for (let i = 0; i < this.zongheTitle.length; i++) {
					if (this.zongheTitle[i].value > 750) {
						uni.showToast({
							title: '分数超过正常范围！',
							duration: 2000,
							icon: 'none'
						})
						return
					}
				}
				// 校验结束
				let data = '';
				if(type === '3') {
					data = this.confirm3()
				} else if(type === '2') {
					data = this.confirm2()
				}
				// 发送请求
				getAskLuquProb(data).then(res => {
					console.log('res', res)
					// 跳转页面，并发射数据
					uni.navigateTo({
						url: '../wengailvbaogao/wengailvbaogao'
					});
					uni.$on('gailv', () => {
						uni.$emit('gailvbaogao', {
							info: res.data.data,
						});
					});
					console.log('发射成功');
				})
			},
			// 专过文录
			confirm2() {
				let openid = uni.getStorageSync('openid');
				let provinceIndex = this.candidateProvince.indexOf(this.province);
				let provinceId = this.provinces[provinceIndex].id;
				let data = {
					userOPenid: openid,
					schoolPrimaryId: this.schoolPrimaryId,
					culScore: this.zongheTitle[3].value,
					allyExamFlag: 1,
					schoolExamFlag: 1,
					unifyExamFlag: 1,
					fengKe: this.fenke,
					provinceId: provinceId
				}
				return data
			},
			// 综合提交
			confirm3() {
				let openid = uni.getStorageSync('openid');
				let zhf = 0;
				for (let i = 0; i < this.zongheTitle.length; i++) {
					zhf = zhf + (this.zongheTitle[i].ratio * this.zongheTitle[i].value) / 100
				}
				let provinceIndex = this.candidateProvince.indexOf(this.province);
				let provinceId = this.provinces[provinceIndex].id;
				console.log('zhf', zhf)
				let data = {
					userOPenid: openid,
					schoolPrimaryId: this.schoolPrimaryId,
					// 综合分
					zhf: zhf,
					allyExamFlag: 1,
					schoolExamFlag: 1,
					unifyExamFlag: 1,
					fengKe: this.fenke,
					provinceId: provinceId
				}
				return data
			},
			showInput(item, index) {
				item.inputShow = true;
				let newItem = item;
				this.zongheTitle.splice(index, 1, newItem)
			},
			// 未通过
			showTips() {
				this.isPass = false;
				uni.showModal({
					title: '提示',
					content: '考试未通过,录取概率为0',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.probability__main {
		padding: 5vh 38rpx;
		background-color: #F0F0F0;

		.probability__center {
			width: 100%;
			height: 90vh;
			background-color: #fff;
			border-radius: 38rpx;

			&__title {
				width: 100%;
				text-align: center;
				padding-top: 54rpx;
				margin-bottom: 88rpx;
				height: 89rpx;
				font-size: 35rpx;
				line-height: 35rpx;
				font-weight: 400;
				color: #000000;
			}

			.example-body {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 auto;
				margin-bottom: 84rpx;
				width: 543rpx;
				height: 77rpx;
				background: #FFFFFF;
				border: 2px solid #FBBE4B;
				border-radius: 15rpx;
			}

			.flag {
				display: flex;

				.example-body2 {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 auto;
					margin-bottom: 84rpx;
					width: 200rpx;
					height: 77rpx;
					background: #FFFFFF;
					border: 2px solid #FBBE4B;
					border-radius: 15rpx;
				}
			}

			&__confirm {
				width: 564rpx;
				height: 84rpx;
				text-align: center;
				line-height: 84rpx;
				font-size: 35rpx;
				color: #fff;
				letter-spacing: 4rpx;
				margin: 0 auto;
				background: #FBBE4B;
				border-radius: 46rpx;
			}

			.confirm-btn3 {
				margin-top: 30rpx;
			}
		}
	}

	// 公共问题
	.question {
		width: 543rpx;
		margin: 0 auto;
		margin-bottom: 27rpx;

		&__title {
			margin-bottom: 27rpx;

			image {
				width: 35rpx;
				height: 35rpx;
			}

			text {
				font-size: 31rpx;
				font-weight: 400;
				color: #A9AFB8;
			}
		}

		input {
			width: 543rpx;
			height: 77rpx;
			background: #FFFFFF;
			border: 2px solid #FBBE4B;
			border-radius: 15rpx;
			padding: 15rpx;
		}

		.btns {
			display: flex;
			width: 543rpx;
			height: 77rpx;
			justify-content: space-around;

			.btns1 {
				width: 170rpx;
				height: 77rpx;
				text-align: center;
				line-height: 77rpx;
				font-size: 35rpx;
				color: #fff;
				letter-spacing: 4rpx;
				margin: 0 auto;
				background: #FBBE4B;
				border-radius: 46rpx;
			}

		}
	}
	.back {
		width: 170rpx;
		height: 77rpx;
		text-align: center;
		line-height: 77rpx;
		font-size: 35rpx;
		color: #fff;
		letter-spacing: 4rpx;
		margin: 0 auto;
		background: #FBBE4B;
		border-radius: 46rpx;
	}
</style>
