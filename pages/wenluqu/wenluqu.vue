<template>
	<view class="wenluqu">
		<view class="wenluqu_top">
			<view id= "baokao" class="wenluqu_top_left"  @click="changeShow" :class="isShow==true?'red':''">
				<!-- <image style="width:50rpx;height:50rpx;" :src="isShow==true?'../../static/icon/edit_1.png':'../../static/icon/edit_2.png'"></image> -->
				<image style="width:50rpx;height:50rpx;" v-show="isShow==true"   src="../../static/icon/edit_1.png"></image>
				<image style="width:50rpx;height:50rpx;" v-show="isShow==false"   src="../../static/icon/edit_2.png"></image>
				<span>报考</span>
			</view>
			<view id= "luqu" class="wenluqu_top_right"   @click="changeShow2" :class="isShow2==true?'red':''">
				<image style="width:50rpx;height:50rpx;" v-show="isShow==false"   src="../../static/icon/edit_1.png"></image>
				<image style="width:50rpx;height:50rpx;" v-show="isShow==true"   src="../../static/icon/edit_2.png"></image>
				<span>录取</span>
			</view>
		</view>
		<view  class="wenluqu_content">
			<!-- 问报考 -->
			<view v-show="isShow" class="wenluqu_content_display">
				<view  class="wenluqu_content_display_input">
					<view class="province">
						<view class="spot"></view>
						<view class="seclet_province">
							选择省
						</view>
					</view>
					<view class="sex">
						<view class="spot"></view>
						<view class="seclet_sex">性别</view>
					</view>
					<view class="picker_province">
						<picker  @change="bindPickerChange" :range="array">
							<label class="wenluqu_content_display_input_value">{{province}}</label>		
							<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
						</picker>
							
					</view>
					<view class="picker_sex">
						<picker  @change="bindPickerChangeSex" :range="sexOption">
							<label class="wenluqu_content_display_input_value">{{sex}}</label>	
							<image style="width:55rpx;height:65rpx;float: right;color: #f6b7b0;" src="../../static/svg/shengfen_xiala.svg"></image>
						</picker>
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">文理分类</view>
						</view>
						<view class="picker_subject">
							<picker  @change="bindPickerChange2" :range="array2">
								<label class="wenluqu_content_display_input_value">{{artAndSciences}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
					
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">选择专业</view>
						</view>
						<view class="picker_subject">
							<picker  @change="bindPickerChangeZhuanye" :range="majorArr">
								<label class="wenluqu_content_display_input_value">{{major1}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">专业分数</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="number" placeholder="请输入专业分数" @input="getmajorScore">
						</view>
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">文化分数</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="number" placeholder="请输入文化分数" @input="getculScore">
						</view>
					</view>

					<view class="button_bottom1">
						<button type="warn" style="width: 80%;border-radius: 20px;" @click="wenluqu_luqu">测试</button>
					</view>
			
				</view>
			</view>
			<!-- 问录取 -->
			<view  v-show="isShow2" class="wenluqu_content_display">
				<view class="wenluqu_content_display_input">
						<view class="province">
							<view class="spot"></view>
							<view class="seclet_province">
								选择省
							</view>
						</view>
						<view class="sex">
							<view class="spot"></view>
							<view class="seclet_sex">性别</view>
						</view>
						<view class="picker_province">
							<picker  @change="onChangeProvince" :range="array">
								<label class="wenluqu_content_display_input_value">{{luqu_province}}</label>		
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
								
						</view>
						<view class="picker_sex">
							<picker  @change="onChangeSex" :range="sexOption">
								<label class="wenluqu_content_display_input_value">{{luqu_sex}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;color: #f6b7b0;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
						<view class="wenluqu_alloption">
							<view class="subject">
								<view class="spot"></view>
								<view class="seclet_subject">报考院校:</view>
							</view>
							<view class="input_subject">
								<input placeholder-style="color:#A9AFB8" type="text" placeholder="请输入你报考的学校" @input="getUniversity">
							</view>
						</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">文理分类</view>
						</view>
						<view class="picker_subject">
							<picker  @change="onChangeSubject" :range="array2">
								<label class="wenluqu_content_display_input_value">{{luqu_subject}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">选择专业</view>
						</view>
						<view class="picker_subject">
							<picker  @change="onChangeMajor" :range="majorArr">
								<label class="wenluqu_content_display_input_value">{{luqu_major}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">高考成绩:</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="text" placeholder="请输入高考成绩" @input="getcollegeExamScore">
						</view>
					</view>
					
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">统考成绩:</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="text" placeholder="请输入统考成绩" @input="getgeneralExamination">
						</view>
					</view>
				
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">你的身高:</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="text" placeholder="请输入身高(cm)" @input="getheight">
						</view>
					</view>
					
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">你的视力</view>
						</view>
						<view class="picker_subject">
							<picker  @change="onChangeShili" :range="shiliOption">
								<label class="wenluqu_content_display_input_value">{{luqu_shili}}</label>	
								<image style="width:55rpx;height:65rpx;float: right;" src="../../static/svg/shengfen_xiala.svg"></image>
							</picker>
						</view>
					
					</view>
					<view class="wenluqu_alloption">
						<view class="subject">
							<view class="spot"></view>
							<view class="seclet_subject">你的体重:</view>
						</view>
						<view class="input_subject">
							<input placeholder-style="color:#A9AFB8" type="text" placeholder="请输入体重(kg)" @input="getweight">
						</view>
					</view>
					
					
					<view class="button_bottom">
				<button type="warn" style="width: 80%;border-radius: 20px;" @click="wenluqu_yuce">测试2</button>
			</view>
					
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	import {getWenluquList,getWenbaokaoList,getWenluquShengfeng,getZhuanhye,getWenluquZiduan} from '../../api/api.js'
	const util = require('../../api/util.js');
	export default {
		data() {
			return {
				//显示隐藏
				isShow:true,
				isShow2:false,
				//动态属性的下拉数组
				array:['请选择','浙江','山东'],
				index:0,
				//省份
				province:'请选择',
				luqu_province:'请选择',
				array2:['请选择','文科','理科','文理不限'],
				luqu_subject:'请选择',
				sexOption:['请选择','男','女'],
				sex:'请选择',
				luqu_sex:'请选择',
				//文理分科
				artAndSciences:'请选择',
				//喜欢的大学,报考院校
				//学校列表
				schools:['请选择','浙江大学','杭州电子科技大学','中国计量大学','浙江师范大学'],
				"likeSchool": "请选择",
				//高考分数
				highschoolScores:'',
				collegeExamScore:'请选择',
				//统考成绩
				generalScores:'',
				generalExamination:'请选择',
				//校考成绩
				xiaokaoExamination:'',
				//报考专业
				major:'',
				indexMajor:0,
				major1:'请输入你的报考专业',
				//报考专业的专业数组
				majorArr:['请输入你的报考专业','美术','文学编导','音乐','舞蹈','摄影','书法','影视戏剧表演','服装表演','播音主持','其他'],
				luqu_major:'请输入你的报考专业',
				//视力
				shiliOption:["无色盲,无色弱","无色盲,有色弱","有色盲,无色弱","有色盲,有色弱"],
				indexShili:0,
				shili:'请输入你的视力情况',
				luqu_shili:'请选择',
				//身高
				height:'',
				luqu_height:'请选择',
				indexShengao:0,
				//问报考专业分数
				majorScore:'',
				//问报考文化分数
				culScore:'',
				height:'请输入你的身高范围',
				HeightOption:['0-170','170-200'],
				//体重
				weight:'',
				luqu_weight:'请选择',
				indexTizhong:0,
				weight:'请输入你的体重范围',
				weightOption:['30-50','50-60','60-70','70以上'],
				skillOption:['体育运动','艺术','其他'],
				skill:'请输入你的特长',
				luqu_skill:'请选择',
				//获取的动态字段
				AllZiduanArr:[]
			}
		},
		onLoad() {
			//获取视力下拉框数据
			//获取窗口高度，适配手机
			this.getWindowHeight()
			//获取问录取字段
			//获取视力下拉框
			getWenluquZiduan().then((res)=>{
				// console.log(res.data.askadmitList);
				let arr=res.data.askadmitList;
				console.log(arr);
				this.AllZiduanArr=arr;
				console.log(arr[1].askadmitcontentVos);
				let shiliArr=arr[1].askadmitcontentVos;
				
				let newArr=[];
				for(let i=0;i<shiliArr.length;i++){
					newArr.push(shiliArr[i].key)
				}
				this.shiliArr=newArr;
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
			//点击显示报考隐藏录取
			changeShow(){
				this.isShow = true;
				this.isShow2 = false;
			},
			//点击显示录取隐藏报考
			changeShow2(){
				this.isShow = false;
				this.isShow2 = true;
			},
			//重置清空
			// chongzhi(){
			// 	console.log(1111);
			// 	this.province="";
			// 	this.artAndSciences="";
			// 	this.likeSchool="";
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
			getUniversity:util.debounce(function(e) {
				this.likeSchool=e.detail.value;
				// console.log(e);
				//如果学校为空，对应的专业也为空
				if(e.detail.value==""){
					this.majorArr=['请先输入你的报考院校'];
				}else{
					//根据学校获取专业
					getZhuanhye(this.likeSchool).then((res)=>{
						console.log(res);
						console.log(111,res.data.data);
						let arr=res.data.data;
						let arr1=[];
						for(let i=0;i<arr.length;i++){
							arr1.push(arr[i].acMajor);
						}
						console.log(arr1);
						this.majorArr=arr1;
					})
				}			
			}, 1500),
			//专业下拉框
			bindPickerChangeZhuanye(e){
				// console.log(e.target.value);
				this.indexMajor = e.target.value;	//将数组改变索引赋给定义的index变量
				this.major1=this.majorArr[this.indexMajor]		//将array【改变索引】的值赋给定义的jg变量
			},
			//视力下拉框
			bindPickerChangeShili(e){
				console.log(e.target.value);
				this.indexShili=e.target.value;
				this.shili=this.shiliOption[this.indexShili]	
			},
			// 身高下拉框
			bindPickerChangeHeight(e){
				this.indexShengao=e.target.value;
				this.height=this.HeightOption[this.indexShengao]	
			},
			// 体重下拉框
			bindPickerChangeWeight(e){
				this.indexTizhong=e.target.value;
				this.weight=this.weightOption[this.indexTizhong]	
			},
			// 特长下拉框
			bindPickerChangeSkill(e){
				this.indexTizhong=e.target.value;
				this.skill=this.skillOption[this.indexTizhong]	
			},
			
			//获取高考成绩
			getcollegeExamScore(e){
				this.collegeExamScore=e.detail.value;
				let num = this.collegeExamScore.charAt(this.collegeExamScore.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.collegeExamScore.slice(0,-10)
						} else {
							return this.collegeExamScore
						}
			},
			//获取统考成绩
			getgeneralExamination(e){
				this.generalExamination=e.detail.value;
				let num = this.generalExamination.charAt(this.generalExamination.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.generalExamination.slice(0,-10)
						} else {
							return this.generalExamination
						}
			},
			//获取外语成绩
			/* getenglishExamination(e){
				this.englishExamination=e.detail.value;
			}, */
			//获取语文成绩
			/* getchineseExamination(e){
				this.chineseScore=e.detail.value;
			}, */
			//获取校考成绩
			/* getxiaokaoExamination(e){
				this.xiaokaoExamination=e.detail.value;
			}, */
			//获取报考专业
			getmajor(e){
				this.major=e.detail.value;
			},
			//获取单科语文成绩
			//获取性别
			getSex(e){
				this.sex=e.detail.value;
			},
			getchineseScore(e){
				this.chineseScore=e.detail.value;
			},
			//获取身高
			getheight(e){
				this.luqu_height=e.detail.value;
				let num = this.luqu_height.charAt(this.luqu_height.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.luqu_height.slice(0,-10)
						} else {
							return this.luqu_height
						}
			},
			//获取专业分数
			getmajorScore(e){
				this.majorScore=e.detail.value;
				let num = this.majorScore.charAt(this.majorScore.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.majorScore.slice(0,-10)
						} else {
							return this.majorScore
						}
				
			},
			//获取文化分数
			getculScore(e){
				this.culScore=e.detail.value;
				let num = this.culScore.charAt(this.culScore.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.culScore.slice(0,-10)
						} else {
							return this.culScore
						}
			},
			//获取体重
			getweight(e){
				this.luqu_weight=e.detail.value;
				let num = this.luqu_weight.charAt(this.luqu_weight.length-1)
						var reg=new RegExp("^[0-9]*$")
						if(!reg.test(num)) {
							return this.luqu_weight.slice(0,-10)
						} else {
							return this.luqu_weight
						}
			},
			/* 
			 * 问报考
					*/
			//省份
			bindPickerChange(e) {		//改变的事件名
				
			    // console.log(e.target.value);
				//console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
				this.index = e.target.value			//将数组改变索引赋给定义的index变量
				this.province=this.array[this.index]		//将array【改变索引】的值赋给定义的jg变量
			//	console.log("籍贯为：",this.jg)		//输出获取的籍贯值，例如：中国
			},
			// 文理分科
			bindPickerChange2(e) {		//改变的事件名
			    console.log(e.target.value);
				//console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
				this.index = e.target.value;			//将数组改变索引赋给定义的index变量
				this.artAndSciences=this.array2[this.index]		//将array【改变索引】的值赋给定义的jg变量
			//	console.log("籍贯为：",this.jg)		//输出获取的籍贯值，例如：中国
			},
			// 性别
			bindPickerChangeSex(e){
				this.indexSex = e.target.value;			//将数组改变索引赋给定义的index变量
				this.sex=this.sexOption[this.indexSex]
			},
			//wenluqu学校报考
			bindPickerChangeSchool(e){
				this.indexSchool=e.target.value;
				this.likeSchool=this.schools[this.indexSchool]	
			},
			//wenluqu文理分科
			onChangeSubject(e){
				this.indexSubject=e.target.value;
				this.luqu_subject=this.array2[this.indexSubject]	
			},
			//wenluqu选择省
			onChangeProvince(e){
				this.indexPro=e.target.value;
				this.luqu_province=this.array[this.indexPro]
			},
			//wenluqu性别
			onChangeSex(e){
				this.indexSex2=e.target.value;
				this.luqu_sex=this.sexOption[this.indexSex2]
			},
			
			//wenluqu选择专业
			onChangeMajor(e){
				this.indexMajor=e.target.value;
				this.luqu_major=this.majorArr[this.indexMajor]	
			},
			//wenluqu身高
			onChangeHeight(e){
				this.indexHeight2=e.target.value;
				this.luqu_height=this.HeightOption[this.indexHeight2]
			},
			//wenluqu视力
			onChangeShili(e){
				this.indexShili2=e.target.value;
				this.luqu_shili=this.shiliOption[this.indexShili2]
			},
			//wenluqu体重
			onChangeWeight(e){
				this.indexWeight2=e.target.value;
				this.luqu_weight=this.weightOption[this.indexWeight2]
			},
			//wenluqu特长
			onChangeSkill(e){
				this.indexSkill2=e.target.value;
				this.luqu_skill=this.skillOption[this.indexSkill2]
			},
			//wenluqu高考成绩
			bindPickerChangeHighschoolScore(e){
				this.indexHighschoolScore=e.target.value;
				this.collegeExamScore=this.highschoolScores[this.indexHighschoolScore]	
			},
			//wenluqu统考成绩
			bindPickerChangeGeneralScore(e){
				this.indexHighschoolScore=e.target.value;
				this.generalExamination=this.generalScores[this.indexHighschoolScore]	
			},
			//问报考
			wenluqu_luqu(){
				let obj={
					"userOpenId": "dhsjfsdkfjgjifjdgkdjkgfdkl", 
					"artAndSciences": this.artAndSciences,
					"province": this.province,
					"sex": this.sex,
					majorScore:this.majorScore,
					//问报考文化分数
					culScore:this.culScore,
					};
					let openid = uni.getStorageSync('openid')
					if(openid == ''){
						uni.showModal({
						    title: '提示',
						    content: '请您先去登录，然后开始测试',
						    success: function (res) {
									if (res.confirm) {
										console.log('用户点击确定');
										uni.reLaunch({
										            url:"../gerenzhongxin/gerenzhongxin"
										        })
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
						});
						return false;
					};
					if(this.majorScore<0 || this.majorScore>300){
						uni.showModal({
						    title: '提示',
						    content: '您输入的内容有误(专业：0-300)',
						   
						});
						return false;
					};
							if(this.culScore<0 || this.culScore>750){
								uni.showModal({
								    title: '提示',
								    content: '您输入的内容有误(专业：0-750)',
								
								});
								return false;
							};
				getWenbaokaoList(obj).then((res)=>{
					// console.log(res);
					// console.log(111,res.data);
					let resArr1=res.data.academy;
					// console.log(222,resArr1);
					uni.setStorage({
						key:'wenbaokao_lists',
						data:resArr1
					})
					//如果数据库能查到，就跳转
					if(resArr1.length==0){
						uni.showModal({
						    title: '提示',
						    content: '您输入的内容有误无法查询',
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
						            // url: 'test?id=1&name=uniapp'  c传递参数
						
						            url:"/pages/wenbaokao/wenbaokao"
						
						        })
					}
					
				}).catch((err)=>{
					uni.showModal({
					    title: '提示',
					    content: '您输入的内容有误，请重新输入',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				})
				
			},
            //问录取输入结果
			wenluqu_yuce(){
				let obj={
					"userOpenId": "dhsjfsdkfjgjifjdgkdjkgfdkl", 
					//喜欢的大学,报考院校
					"likeUniversity": this.likeSchool,
					//文理分科
					"artAndSciences": this.luqu_subject,
					//省份地区
					"province": this.luqu_province,
					//报考专业
					"major": this.luqu_major,
					//高考成绩
					"collegeExamScore": this.collegeExamScore,
					//统考成绩
					"generalExamination": this.generalExamination,
					//视力
					"shili": this.luqu_shili,
					// 身高
					"height": this.luqu_height,
					//用户openid
					// "userOpenId": "",
					//体重
					"weight": this.luqu_weight,
					//性别
					"sex": this.luqu_sex,
				};
				let openid = uni.getStorageSync('openid')
				if(openid == ''){
					uni.showModal({
					    title: '提示',
					    content: '请您先去登录，然后开始测试',
					    success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
									uni.reLaunch({
									            url:"../gerenzhongxin/gerenzhongxin"
									        })
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
					});
					return false;
				};
				// 判断身高
				if(this.luqu_weight<50 || this.luqu_weight>280){
					uni.showModal({
					    title: '提示',
					    content: '您输入的内容有误(身高：0-280)',
					   
					});
					return false;
				};
				// 判断体重
				if(this.luqu_weight<0 || this.luqu_weight>725){
					uni.showModal({
					    title: '提示',
					    content: '您输入的内容有误(体重：0-725)',
					   
					});
					return false;
				};
				console.log(obj);
				//判断高考分数
				if(this.collegeExamScore<0 || this.majorScore>750){
					uni.showModal({
					    title: '提示',
					    content: '您输入的内容有误(专业：0-750)',
					   
					});
					return false;
				};
				// 判断统考分数
				if(this.generalExamination<0 || this.generalExamination>750){
						uni.showModal({
							title: '提示',
							content: '您输入的内容有误(专业：0-750)',
						
						});
						return false;
				};
				getWenluquList(obj).then((res)=>{
					// console.log(res);
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
						    content: '您输入的内容为空，请输入。',
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
					    content: '您输入的内容有误，请重新输入',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wenluqu{
		padding: 0;
		margin: 0;
		.wenluqu_top{
			width:100%;
			// border:1px solid red;
			display: flex;
			align-items: center;
			justify-content:space-around;
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			.wenluqu_top_left{
				height: 80rpx; 
				line-height: 80rpx; 
				width: 30%;
				background-color: #ECE9E9; 
				border-radius: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				>image{
					
				}
			}
			.wenluqu_top_right{
				height: 80rpx; 
				line-height: 80rpx; 
				width: 30%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #ECE9E9; 
				border-radius: 20px;
			}

		}
		.wenluqu_content{
			width:100%;
			height:auto;
			// border:1px solid red;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			.wenluqu_content_display{
				width:90%;
				height:auto;
				// border-bottom:1px solid #E1DFDF;
				.wenluqu_content_display_input{
					width:100%;
					height:70rpx;
					line-height: 70rpx;
					// border:1px solid pink;
					// border-bottom:1px solid #e12007;
					border-radius: 6px;
					display: flex;
					flex-wrap:wrap;
					justify-content: start;
					background-color: rgba(242, 243, 245, 100);
					text-align: left;
					// border: 1px solid rgba(255, 255, 255, 100);
					.province{
						width:50%;
						color: #273253;
						font-weight: bold;
						font-size: 30rpx;
						display: flex;
						// border:1px solid red;
						.spot{
							height: 15rpx;
							width: 15rpx;
							border-radius: 5px;
							background-color: #FBBE4B;
							margin-top: 22rpx;
							margin-right: 10rpx;
						}
						.seclet_province{
							// border:1px solid red;
						}
					}
					.sex{
						width:50%;
						font-weight: bold;
						color: #273253;
						font-size: 30rpx;
						display: flex;
						.spot{
							height: 15rpx;
							width: 15rpx;
							border-radius: 5px;
							background-color: #FBBE4B;
							margin-top: 22rpx;
							margin-right: 10rpx;
						}
						.seclet_sex{
							margin-left: 5rpx;
						}
						// border:1px solid red;
					}
					.picker_province{
						width: 45%;
						border:1px solid #ECE9E9;
						
						border-radius: 10px;
					
					}
					.picker_sex{
						width: 50%;
						border:1px solid #ECE9E9;
						margin-left: 5%;
						border-radius: 10px;
					}
					.wenluqu_alloption{
						width:100%;
						color: #273253;
						display: flex;
						font-size: 30rpx;
						margin-bottom: 10rpx;
						border-bottom:1px solid #ECE9E9;
						.subject{
							width: 50%;
							font-size: 30rpx;
							font-weight: bold;
							display: flex;
							.spot{
								height: 15rpx;
								width: 15rpx;
								border-radius: 5px;
								margin-right: 10rpx;
								background-color: #FBBE4B;
								margin-top: 22rpx;
							}
							.seclet_subject{
								width: 40%;
							}
						}
						
					}
					
					.picker_sex{
							width: 50%;
							// border:1px solid pink;
						
					}
					.picker_subject{
							width: 50%;
							// border:1px solid pink;
						
					}
					.input_subject{
						width: 50%;
						margin-top: 10rpx;
						height: 70rpx;
						line-height: 70rpx;
					}
					.wenluqu_content_display_input_title{
						width:150rpx;
						height:65rpx;
						// border:1px solid pink;
						color: rgba(16, 16, 16, 100);
						font-weight: bold;
						font-size: 30rpx;
						font-family: SourceHanSansSC-regular;
					}
					.wenluqu_content_display_input_value{
						width:450rpx;
						height:65rpx;
						color: #A9AFB8;
						line-height: 65rpx;
						// border:1px solid pink;
						// margin-left:30rpx;
					}
					.wenluqu_content_display_input_svg{
						width:55rpx;
						height:65rpx;
						// border:1px solid pink;
						image{
							color: #f6b7b0;
							width:100%;
							height:100%;
						}
					}
					.button_bottom1{
						width: 100%;
					    margin-top: 368rpx;
						
					}
					.button_bottom{
						margin-top: 10rpx;
						width: 100%;
						// border:1px solid pink;
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
			margin-top: 20rpx;
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
	}
	.red{
		background-color: #ED5C4D !important; 
		color:#F0F0F0;
	}

</style>
