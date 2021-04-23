// 后台地址
//本地地址
// let urls="https://localhost:8091";

//线上地址
let urls="https://orangezoom.cn:8091";

//授权，获取wxcode
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
export function getmoreList(currentPage,pageSize){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamicList',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
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
export function getmoreList1(aedTitle,currentPage,pageSize){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamicList',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
				"aedTitle": aedTitle,
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

//问录取，输入出概率结果
export function getWenluquList(datas){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getProbability',
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