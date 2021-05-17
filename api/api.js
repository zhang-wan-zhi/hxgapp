// 后台地址
//本地地址
// let urls="https://localhost:8091";

//局域网地址
// let urls="http://192.168.3.247:8091"

//线上地址
let urls="https://orangezoom.cn:8091";

//授权，通过wxcode获取appid
export function getWxcode(wxcode){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/grant',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"WxCode": wxcode,
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//保存用户信息到数据库
export function getUser_openid_Info(openid,province,sex,userImg,userName){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/hxgaddUser',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:
			{
				"avatarUrl": userImg,
				"city": "",
				"country": "",
				"gender": sex,
				"language": "",
				"nickName": userName,
				"openId": openid,
				"province": province,
				"wxCode": ""
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//GET
//获取轮播图接口数据
export function getLunboList(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getIndexBanner',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//查看轮播图的每一项
export function getLunboList_one(banSkipurl,banType){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/bannerSkip',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				banSkipurl,
				banType
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考动态列表数据
export function getyikaoDongtaiList(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getIndexArtexamdynamic',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考课程列表数据
export function getyikaoKechengList(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtExams',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考课程列表数据
export function getyikaoKechengList_one(id){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtExamDetail',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			data:{
				id:id
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考题库列表数据
export function getyikaoTikuList(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/exam/list',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考题库列表数据,创建考试试卷
export function getyikaoTikuList_one(id){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/exam/create',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			data:{
				paperId:id,
				userId:1
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取试卷id，获取考试所有题目
export function getyikaoTikuList_one_all(paper_id){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/qu/'+paper_id,
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			// data:{
			// 	paperId:id,
			// 	userId:1
			// },
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考题库列表数据,创建考试试卷,获取下一题
export function getyikaoTikuList_one_one(quId){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/qu/'+quId,
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			// data:{
			// 	paperId:id,
			// 	userId:1
			// },
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取艺考课程列表数据
// export function getyikaoKechengList(){
// 	return new Promise((resolve,reject)=>{
// 		uni.request({
// 			url:urls+'/hxg/getArtExams',
// 			method: 'GET',
// 			contentType: 'application/json;charset=UTF-8',
// 			success: res=>{
// 				resolve(res)
// 			},
// 			fail: err=>{
// 				reject(err)
// 			},
// 		})
// 	})
// }


//艺考动态列表查看更多
export function getmoreList(sousuoTyoe,currentPage,pageSize){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamicList',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"sousuoTyoe":sousuoTyoe,
				"currentPage": currentPage,
				"pageSize": pageSize,
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//艺考动态列表搜索
export function getmoreList1(aedTitle,sousuoTyoe,currentPage,pageSize){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamicList',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"ssTile": aedTitle,
				"sousuoTyoe":sousuoTyoe,
				"currentPage": currentPage,
				"pageSize": pageSize
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//艺考动态列表,点击艺考动态列表的某一项
export function getyikaoDongtaiList_one(id){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamic',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"id": id,
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取问学习，测试题
export function getWenxuexiTestList(id){

	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/qlearn/'+id,
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取问学习，获取测试结果
export function getWenxuexiResuleList(scores){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/qlearn/getResult',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"optionsList": [
					{
						"score": scores, 
						"testType": 1
					}, 
					{
						"score": 10, 
						"testType": 2
					}, 
					{
						"score": 10, 
						"testType": 3
					}, 
					{
						"score": 10, 
						"testType": 4
					}
				]
			},
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//获取问录取字段
export function getWenluquZiduan(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getAskAdmit',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			// data:datas,
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//问录取，查询省份
export function getWenluquShengfeng(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getProvinces',
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			// data:datas,
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//问录取，通过输入学校获取专业
export function getZhuanhye(acName){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getAcademys?acName='+acName,
			method: 'GET',
			contentType: 'application/json;charset=UTF-8',
			// data:datas,
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//问录取，输入出概率结果
export function getWenluquList(datas){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getProbability3',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:datas,
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//意见反馈接口
export function Yijianfankui(openid,opContent){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/opinionFeedback',
			method: 'POST',
			// contentType: 'application/json;charset=UTF-8',
			header: {
			   "Content-Type": "application/x-www-form-urlencoded"
			}, // 请求头
			data:{
				openid,
				opContent
			},
			dataType: 'json', // 返回数据格式
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}

//测试做题接口
export function TestApi(userId,examId,examTime){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/exam/submit?userId='+userId+'&examId='+examId+'&examTime='+examTime,
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			// header: {
			//    "Content-Type": "application/x-www-form-urlencoded"
			// }, // 请求头
			data:
				// userId,
				// examId,
				// examTime,
				[
				    {
				        "quId": 1, 
				        "answerId": 1, 
				        "isRight": 0, 
				        "score": 5
				    }, 
				    {
				        "quId": 2, 
				        "answerId": 2, 
				        "isRight": 1, 
				        "score": 5
				    }, 
				    {
				        "quId": 3, 
				        "answerId": 2, 
				        "isRight": 0, 
				        "score": 5
				    }, 
				    {
				        "quId": 5, 
				        "answerId": 1, 
				        "isRight": 0, 
				        "score": 5
				    }, 
				    {
				        "quId": 6, 
				        "answerId": 1, 
				        "isRight": 0, 
				        "score": 5
				    }, 
				    {
				        "quId": 7, 
				        "answerId": 1, 
				        "isRight": 0, 
				        "score": 5
				    }
				]
			,
			// dataType: 'json', // 返回数据格式
			success: res=>{
				resolve(res)
			},
			fail: err=>{
				reject(err)
			},
		})
	})
}