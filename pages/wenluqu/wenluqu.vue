<template>
	<view>
		<view class="wenluqu_top">
			<view class="wenluqu_top_title">艺考预测</view>
		</view>
		
		<view class="wenluqu_content1">
			<view class="wenluqu_content1_display">
				<view class="wenluqu_content1_display_title">
					<view class="wenluqu_content1_display_title1">报考的院校</view>
				</view>
				<view class="wenluqu_content1_display_input">
				  <input type="text" placeholder="请输入你想报考的院校" @input="getUniversity">
				</view>
			</view>
		</view>
		
		<view class="wenluqu_content2">
			<view class="wenluqu_content2_display">
				<view class="wenluqu_content2_display_title">
					<view class="wenluqu_content2_display_title1">省份类别</view>
				</view>
				<view class="wenluqu_content2_display_input">
				  <view class="wenluqu_content2_display_input_title">省份地区</view>
				  <picker @change="bindPickerChange" :range="array">		
							<label class="wenluqu_content2_display_input_value">{{province}}</label>		
				  </picker>
				  <view class="wenluqu_content2_display_input_svg">
						<image src="../../static/svg/shengfen_xiala.svg"></image>
				  </view>
				  
				</view>
				<view class="wenluqu_content2_display_input">
				  <view class="wenluqu_content2_display_input_title">文理分类</view>
				  <picker @change="bindPickerChange2" :range="array2">
				  	<label class="wenluqu_content2_display_input_value">{{artAndSciences}}</label>	
				  </picker>
				  <view class="wenluqu_content2_display_input_svg">
					  <image src="../../static/svg/shengfen_xiala.svg"></image>
				  </view>
				</view>
				<view class="wenluqu_content2_display_input">
				  <view class="wenluqu_content2_display_input_title">报考专业</view>
				  <picker @change="bindPickerChangeZhuanye" :range="majorArr">
				  	<label class="wenluqu_content2_display_input_value">{{major1}}</label>	
				  </picker>
				  <view class="wenluqu_content2_display_input_svg">
					  <image src="../../static/svg/shengfen_xiala.svg"></image>
				  </view>
				</view>
			</view>
		</view>
		
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_display">
				<view class="wenluqu_content3_display_title">
					<view class="wenluqu_content3_display_title1">成绩信息</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">高考分</view>
					<view class="wenluqu_content3_display_input_input">
					  <input type="text" placeholder="请输入高考分">
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">统考成绩</view>
					<view class="wenluqu_content3_display_input_input">
					  <input type="text" placeholder="请输入统考成绩" @input="getgeneralExamination">
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">校考成绩</view>
					<view class="wenluqu_content3_display_input_input">
					  <input type="text" placeholder="请输入校考成绩" @input="getxiaokaoExamination">
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">外语成绩</view>
					<view class="wenluqu_content3_display_input_input">
					  <input type="text" placeholder="请输入外语成绩" @input="getenglishExamination">
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">语文成绩</view>
					<view class="wenluqu_content3_display_input_input">
					  <input type="text" placeholder="请输入语文成绩" @input="getchineseExamination">
					</view>
				</view>
			</view>
		</view>
		
		<view class="wenluqu_content3">
			<view class="wenluqu_content3_display">
				<view class="wenluqu_content3_display_title">
					<view class="wenluqu_content3_display_title1">基本信息</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">视力</view>
					<view class="wenluqu_content3_display_input_input">
						<picker @change="bindPickerChangeShili" :range="shiliArr">
							<label class="">{{shili1}}</label>	
						</picker>
					  <!-- <input type="text" placeholder="请输入视力"> -->
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">身高</view>
					<view class="wenluqu_content3_display_input_input">
						<picker @change="bindPickerShengao" :range="shengaoArr">
							<label class="">{{shengao1}}</label>	
						</picker>
					  <!-- <input type="text" placeholder="请输入升高"> -->
					</view>
				</view>
				<view class="wenluqu_content3_display_input">
					<view class="wenluqu_content3_display_input_title">体重</view>
					<view class="wenluqu_content3_display_input_input">
						<picker @change="bindPickerTizhong" :range="tizhongArr">
							<label class="">{{tizhong1}}</label>	
						</picker>
					  <!-- <input type="text" placeholder="请输入体重"> -->
					</view>
				</view>
			</view>
		</view>
		
		<view class="begin_yuce">开始预测</view>
		
		<view class="yuceshuoming_body">
			<view class="yuceshuoming_body_child">
				<view class="yuceshuoming_body_child_title">预测说明</view>
				<view class="yuceshuoming_body_child_content">
					<view class="yuceshuoming_body_child_content_child">1.「启程测试」期间，充值总金额≤3600元，可获得150%的创世结晶返还。
当充值总金额>3600元时，3600元以内的部分可获得150%的创世结晶返还，超出3600元的部分，按照125%的比例进行创世结晶的返还，不设上限。
举例：旅行者在测试期间累计充值了3700元，可获得的创世结晶返还总额为：(3600元×10×150%)+(100元×10×125%)= 55250创世结晶。
2.「启程测试」期间，购买“空月祝福”的旅行者，除按照上述充值返还规则1返还与“空月祝福”对应充值金额的创世结晶以外，还将免费获得相同时间“空月祝福”。(“空月祝福”返还上限为2次、效果共计60天)
举例：旅行者在测试期间购买2件价值30元的“空月祝福”，购买“空月祝福”花费的60元将计入充值总金额，按照充值返还规则1进行创世结晶返还。并且旅行者还可免费获得2件、效果共计60天的“空月祝福”。(“空月祝福”每日送出的原石不计入规则1的充值返还)
3. 「启程测试」中，购买解锁“珍珠纪行”的旅行者，除按照上述充值返还规则1返还与“珍珠纪行”对应充值金额的创世结晶以外，还将免费获得一期“珍珠纪行”的使用权。(“珍珠纪行”返还上限为1次)
举例：旅行者在测试期间购买激活价值68元的“珍珠纪行”，此68元将计入充值总金额，按照充值返还规则1进行创世结晶返还。并且，旅行者还可以免费获得一期“珍珠纪行”的使用权。(“珍珠纪行”中包含的原石不计入规则1的充值返还)</view>
				</view>
			</view>
		</view>
		
		<!-- <view class="wenluqu_center"style="margin-top:100rpx;">
			<view class="wenluqu_center_child" :style="{height:phoneHeight*0.8+'px;'}">
				<view class="wenluqu_center_child_child" :style="{height:phoneHeight*0.78+'px;'}">
					
					<view class="wenluqu_center_child_child1">
						<view class="wenluqu_center_child_child1_content">
						  <picker @change="bindPickerChange" :range="array">
							<label>省份：</label>
							<label >{{province}}</label>	
						  </picker>
						</view>
						<view class="wenluqu_center_child_child1_content">
							<picker @change="bindPickerChange2" :range="array2">
								<label>分科：</label>
								<label >{{artAndSciences}}</label>	
							</picker>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaoyuanxiao_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">报考院校:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你报考的学校" @input="getUniversity">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/gaokaofen_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">高考分:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的高考成绩" @input="getcollegeExamScore">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/tongkaochengji_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">统考成绩:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的统考成绩" @input="getgeneralExamination" >
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/baokaozhuaunye_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">报考专业:</view>
							<view class="wenluqu_center_child_child2_content3">
								<picker @change="bindPickerChangeZhuanye" :range="majorArr">
									<label class="">{{major1}}</label>	
								</picker>
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/dankechengji_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">英语成绩:</view>
							<view class="wenluqu_center_child_child2_content3">
								<input type="text" placeholder="请输入你的英语成绩" @input="getchineseScore">
							</view>
						</view>
					</view>
					
					<view class="wenluqu_center_child_child2">
						<view class="wenluqu_center_child_child2_content">
							<view class="wenluqu_center_child_child2_content1">
								<image src="../../static/img/shili_img.png"></image>
							</view>
							<view class="wenluqu_center_child_child2_content2">视力:</view>
							<view class="wenluqu_center_child_child2_content3">
								<picker @change="bindPickerChangeShili" :range="shiliArr">
									<label class="">{{shili1}}</label>	
								</picker>
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view> -->

		
		<!-- <view class="wenluqu_bottom">
			<view class="wenluqu_bottom_content" @click="wenluqu_yuce">开始预测</view>
		</view> -->
		
		<!-- <view class="wenluqu_bottom">
			<view class="wenluqu_bottom_content" @click="chongzhi">重置清空</view>
		</view> -->
	</view>
</template>

<script>
	import {getWenluquList,getWenluquShengfeng,getZhuanhye,getWenluquZiduan} from '../../api/api.js'
	export default {
		data() {
			return {
				array:['请选择','浙江','山东'],
				index:0,
				//省份
				province:'请选择',
				array2:['请选择','文科','理科','文理不限'],
				index2:0,
				//文理分科
				artAndSciences:'请选择',
				//喜欢的大学,报考院校
				"likeUniversity": "",
				//高考分数
				collegeExamScore:'',
				//统考成绩
				generalExamination:'',
				//校考成绩
				xiaokaoExamination:'',
				//外语成绩
				englishExamination:'',
				//单科成绩,以语文成绩为例
				chineseScore:'',
				//报考专业
				major:'',
				indexMajor:0,
				major1:'请输入你的报考专业',
				//报考专业的专业数组
				majorArr:['请先输入你的报考院校'],
				
				//视力
				vision:'',
				shiliArr:["视力<3.0","视力>=3.0"],
				indexShili:0,
				shili1:'请输入你的视力范围',
				//身高
				height:'',
				indexShengao:0,
				shengao1:'请输入你的身高范围',
				shengaoArr:['0-170','170-200'],
				//体重
				weight:'',
				indexTizhong:0,
				tizhong1:'请输入你的体重范围',
				tizhongArr:['120-140','140-200'],
				//获取的动态字段
				AllZiduanArr:[]
			}
		},
		onLoad() {
			//获取窗口高度，适配手机
			this.getWindowHeight()
			//获取问录取字段
			getWenluquZiduan().then((res)=>{
				// console.log(res.data.askadmitList);
				let arr=res.data.askadmitList;
				console.log(arr);
				this.AllZiduanArr=arr;
				// let newArr=[];
				// for(let i=0;i<arr.length;i++){
				// 	newArr.push(arr[i].askParm)
				// }
				// console.log(newArr);
			})
			//获取省份信息
			getWenluquShengfeng().then((res)=>{
				// console.log(res.data.provinces);
				let arr=res.data.provinces;
				let arr2=[];
				for(let i=0;i<arr.length;i++){
					arr2.push(arr[i].pName);
				}
				let arrDefaule=["请选择"];
				// console.log(arr2);
				let newArr=arrDefaule.concat(arr2);
				// console.log(newArr);
				this.array=newArr;
			})
			
		},
		methods: {
			//重置清空
			// chongzhi(){
			// 	console.log(1111);
			// 	this.province="";
			// 	this.artAndSciences="";
			// 	this.likeUniversity="";
			// 	this.collegeExamScore="";
			// 	this.generalExamination="";
			// 	this.major1="";
			// 	this.shili1="";
			// 	this.chineseScore="";
			// },
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
			//获取大学名称
			getUniversity(e){
				this.likeUniversity=e.detail.value;
				// console.log(e.detail.value);
				//如果学校为空，对应的专业也为空
				if(e.detail.value==""){
					this.majorArr=['请先输入你的报考院校'];
				}else{
					//根据学校获取专业
					getZhuanhye(e.detail.value).then((res)=>{
						// console.log(res.data.data);
						let arr=res.data.data;
						let arr1=[];
						for(let i=0;i<arr.length;i++){
							arr1.push(arr[i].acMajor);
						}
						console.log(arr1);
						this.majorArr=arr1;
					})
				}			
			},
			//专业下拉框
			bindPickerChangeZhuanye(e){
				
				this.indexMajor = e.target.value			//将数组改变索引赋给定义的index变量
				this.major1=this.majorArr[this.indexMajor]		//将array【改变索引】的值赋给定义的jg变量
			},
			//视力下拉框
			bindPickerChangeShili(e){
				console.log(e.target.value);
				this.indexShili=e.target.value;
				this.shili1=this.shiliArr[this.indexShili]	
			},
			//身高下拉框
			bindPickerShengao(e){
				this.indexShengao=e.target.value;
				this.shengao1=this.shengaoArr[this.indexShengao]	
			},
			//体重下拉框
			bindPickerTizhong(e){
				this.indexTizhong=e.target.value;
				this.tizhong1=this.tizhongArr[this.indexTizhong]	
			},
			//获取高考成绩
			getcollegeExamScore(e){
				this.collegeExamScore=e.detail.value;
			},
			//获取统考成绩
			getgeneralExamination(e){
				this.generalExamination=e.detail.value;
			},
			//获取外语成绩
			getenglishExamination(e){
				this.englishExamination=e.detail.value;
			},
			//获取语文成绩
			getchineseExamination(e){
				this.chineseScore=e.detail.value;
			},
			//获取校考成绩
			getxiaokaoExamination(e){
				this.xiaokaoExamination=e.detail.value;
			},
			//获取报考专业
			// getmajor(e){
			// 	this.major=e.detail.value;
			// },
			//获取单科语文成绩
			getchineseScore(e){
				this.chineseScore=e.detail.value;
			},
			//获取视力
			getvision(e){
				this.vision1=e.detail.value;
			},
			//获取身高
			getheight(e){
				this.height=e.detail.value;
			},
			//获取体重
			// getweight(e){
			// 	this.weight=e.detail.value;
			// },
			//下拉框
			bindPickerChange: function(e) {		//改变的事件名
				
			    console.log(e.target.value);
				//console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
				this.index = e.target.value			//将数组改变索引赋给定义的index变量
				this.province=this.array[this.index]		//将array【改变索引】的值赋给定义的jg变量
			//	console.log("籍贯为：",this.jg)		//输出获取的籍贯值，例如：中国
			},
			bindPickerChange2: function(e) {		//改变的事件名
			    console.log(e.target.value);
				//console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
				this.index2 = e.target.value;			//将数组改变索引赋给定义的index变量
				this.artAndSciences=this.array2[this.index2]		//将array【改变索引】的值赋给定义的jg变量
			//	console.log("籍贯为：",this.jg)		//输出获取的籍贯值，例如：中国
			},
            //问录取输入结果
			wenluqu_yuce(){
				let obj={
					//文理分科
					"artAndSciences": this.artAndSciences,
					//语文成绩
					"english": this.chineseScore,
					//高考成绩
					"collegeExamScore": this.collegeExamScore,
					//文化成绩
					"culturalScore": "",
					//外语成绩
					"foreignScore": "",
					//统考成绩
					"generalExamination": this.generalExamination,
					//身高
					// "height": this.shengao1,
					//喜欢的大学,报考院校
					"likeUniversity": this.likeUniversity,
					//报考专业
					"major": this.major1,
					//数学成绩
					"mathScore": "",
					//省份地区
					"province": this.province,
					//用户openid
					"userOpenId": "",
					//视力
					"shili": this.shili1,
					//体重
					// "weight": this.tizhong1,
					
				 //    "likeUniversity": "浙江传媒学院", 
					// "artAndSciences": "文科", 
					// "province": "山东", 
					// "major": "播音与主持艺术", 
					// "collegeExamScore": "299", 
					// "generalExamination": "90", 
					// "eyesight": "0.0<视力<=3.0", 
					// "weight": "120<体重<140", 
					// "height": "170<身高", 
					// "english": "100"
					
					// "userOpenId":"dhsjfsdkfjgjifjdgkdjkgfdkl"
					// "likeUniversity":"浙江传媒学院",
					// "artAndSciences":"文科",
					// "province":"山东",
					// "major":"戏剧影视文学（桐乡）",
					// "collegeExamScore":440
				};
				console.log(this.province);
				console.log(this.artAndSciences);
				//喜欢的大学
				console.log(this.likeUniversity);
				//高考分数
				console.log(this.collegeExamScore);
				//统考成绩
				console.log(this.generalExamination);
				//报考专业
				console.log(this.major1);
				//单科成绩,以语文成绩为例
				console.log(this.chineseScore);
				//视力
				console.log(this.shili1);
				//身高
				// console.log(this.shengao1);
				//体重
				// console.log(this.tizhong1);
				
				getWenluquList(obj).then((res)=>{
					console.log(res);
					// console.log(res.data.data.academies[0]);
					let resArr=res.data.data.academies;
					console.log(resArr);
					uni.setStorage({
						key:'wenluqu_lists',
						data:resArr
					})
					//如果数据库能查到，就跳转
					if(resArr.length==0){
						uni.showModal({
						    title: '提示',
						    content: '您输入的内容在数据库中不存在',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
						
					}else{
						uni.navigateTo({
							url:'../wenluqu_yucebaogao/wenluqu_yucebaogao'
						})
					}
					
				})
				.catch((err)=>{
					uni.showModal({
					    title: '提示',
					    content: '您输入的内容在数据库中不存在',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				})
				
				// uni.navigateTo({
				// 	url:'../wenluqu_yucebaogao/wenluqu_yucebaogao'
				// })
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.wenluqu_top{
	width:100%;
	height:100rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
	.wenluqu_top_title{
		width:200rpx;
		height:70rpx;
		line-height: 70rpx;
		text-align: center;
		// border:1px solid pink;
		color:#FF6E2F;
		font-size:40rpx;
		font-weight: bold;
	}
}
.wenluqu_content1{
	width:100%;
	height:120rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
	.wenluqu_content1_display{
		width:90%;
		height:115rpx;
		border-bottom:1px solid #E1DFDF;
		.wenluqu_content1_display_title{
			width:100%;
			height:50rpx;
			// border:1px solid pink;
			.wenluqu_content1_display_title1{
				width: 250rpx;
				height: 48rpx;
				color: rgba(16, 16, 16, 100);
				font-size: 40rpx;
				text-align: left;
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}
		}
		.wenluqu_content1_display_input{
			width:100%;
			height:60rpx;
			line-height: 60rpx;
			margin-top:20rpx;
			// border:1px solid pink;
			input{
				height:60rpx;
				line-height: 60rpx;
			}
		}
	}
}
.wenluqu_content2{
	width:100%;
	height:auto;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30rpx;
	.wenluqu_content2_display{
		width:90%;
		height:auto;
		// border-bottom:1px solid #E1DFDF;
		.wenluqu_content2_display_title{
			width:100%;
			height:50rpx;
			// border:1px solid pink;
			.wenluqu_content2_display_title1{
				width: 250rpx;
				height: 48rpx;
				color: rgba(16, 16, 16, 100);
				font-size: 40rpx;
				text-align: left;
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}
		}
		.wenluqu_content2_display_input{
			width:100%;
			height:70rpx;
			line-height: 70rpx;
			border:1px solid pink;
			margin-top:20rpx;
			border-radius: 6px;
			background-color: rgba(242, 243, 245, 100);
			text-align: center;
			border: 1px solid rgba(255, 255, 255, 100);
			.wenluqu_content2_display_input_title{
				width:150rpx;
				height:65rpx;
				// border:1px solid pink;
				margin-left: 10rpx;
				float: left;
			
				color: rgba(16, 16, 16, 100);
				font-size: 28rpx;
				text-align: left;
				font-family: SourceHanSansSC-regular;
			}
			.wenluqu_content2_display_input_value{
				width:450rpx;
				height:65rpx;
				// border:1px solid pink;
				// margin-left:30rpx;
				float: left;
			}
			.wenluqu_content2_display_input_svg{
				width:55rpx;
				height:65rpx;
				// border:1px solid pink;
				float: right;
				image{
					width:100%;
					height:100%;
				}
			}
		}
	}
}
.wenluqu_content3{
	width:100%;
	height:auto;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30rpx;
	.wenluqu_content3_display{
		width:90%;
		height:auto;
		.wenluqu_content3_display_title{
			width:100%;
			height:50rpx;
			// border:1px solid pink;
			.wenluqu_content3_display_title1{
				width: 250rpx;
				height: 48rpx;
				color: rgba(16, 16, 16, 100);
				font-size: 40rpx;
				text-align: left;
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}
		}
		.wenluqu_content3_display_input{
			width:100%;
			height:60rpx;
			line-height: 60rpx;
			margin-top:20rpx;
			// border:1px solid pink;
			border-bottom:1px solid #E1DFDF;
			.wenluqu_content3_display_input_title{
				width:150rpx;
				height:60rpx;
				// border:1px solid red;
				float:left;
			
				color: rgba(153, 153, 153, 100);
				font-size: 28rpx;
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}
			.wenluqu_content3_display_input_input{
				width:520rpx;
				height:60rpx;
				// border:1px solid red;
				float:left;
				input{
					height:60rpx;
					line-height: 60rpx;
				
					color: rgba(16, 16, 16, 100);
					font-size: 24rpx;
					text-align: left;
					font-family: SourceHanSansSC-regular;
				}
			}
			
		}
	}
}
.begin_yuce{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	background-color: rgba(255, 77, 77, 100);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 100);
	color:#FFFFFF;
	font-size: 40rpx;
	font-weight: bold;
	margin-top: 20rpx;;
}
.yuceshuoming_body{
	width: 100%;
	height: auto;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top:20rpx;
	.yuceshuoming_body_child{
		width: 90%;
		height: auto;
		// border:1px solid pink;
		
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(187, 187, 187, 100);
		.yuceshuoming_body_child_title{
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			text-align:center;
			// border:1px solid green;
			font-weight: bold;
			
			color: rgba(16, 16, 16, 100);
			font-size: 36rpx;
			font-family: SourceHanSansSC-bold;
		}
		.yuceshuoming_body_child_content{
			width: 100%;
			height: auto;
			// border:1px solid blue;
			display: flex;
			align-items: center;
			justify-content: center;
			.yuceshuoming_body_child_content_child{
				width: 90%;
				height: auto;
				// border:1px solid pink;
				margin-top:10rpx;
				font-size: 25rpx;
				font-family: SourceHanSansSC-regular;
			}
		}
	}
}
.wenluqu_center{
	width:100%;
	height:auto;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top:20rpx;
	.wenluqu_center_child{
		width:90%;
		height:auto;
		border:1px solid #BBBBBB;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.wenluqu_center_child_child{
			width:90%;
			height:850rpx;
			margin-top:20rpx;
			// border:1px solid blue;
			.wenluqu_center_child_child1{
				width:100%;
				height:70rpx;
				// border:1px solid yellow;
				display: flex;
				justify-content: space-between;
				margin-top:20rpx;
				.wenluqu_center_child_child1_content{
					width:250rpx;
					height:50rpx;
					border:1px solid #BBBBBB;
					float:left;
					border-radius: 5prx;
				}
			}
			.wenluqu_center_child_child2{
				width:100%;
				height:95rpx;
				// border:1px solid yellow;
				margin-top:20rpx;
				.wenluqu_center_child_child2_content{
					width:100%;
					height:50rpx;
					border-bottom:1px solid #BBBBBB;
					float:left;
					margin-top:40rpx;
					.wenluqu_center_child_child2_content1{
						width:50rpx;
						height:50rpx;
						// border:1px solid red;
						float:left;
						image{
							width:100%;
							height:100%;
						}
					}
					.wenluqu_center_child_child2_content2{
						width:120rpx;
						height:50rpx;
						line-height: 50rpx;
						font-size:24rpx;
						// border:1px solid red;
						float:left;
						text-align: center;
						font-weight: bold;
					}
					.wenluqu_center_child_child2_content3{
						width:430rpx;
						height:50rpx;
						// border:1px solid red;
						float:left;
						font-size: 24rpx;
						// margin-left:40rpx;
					}
				}
			}
		}
	}
}
.wenluqu_bottom{
	width:100%;
	height:100rpx;
	// border:1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
	// margin-top:100rpx;
	.wenluqu_bottom_content{
		width:180rpx;
		height:70rpx;
		line-height: 70rpx;
		text-align: center;
		// border:1px solid pink;
		color:#fff;
		font-size:35rpx;
		font-weight: bold;
		// background-color: #FF6E2F;
		background-image: url('../../static/img/kaishiyuce_img.png');
		background-size: 100% 100%;;
		border-radius: 10rpx;
	}
}
</style>
