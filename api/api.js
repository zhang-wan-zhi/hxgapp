// 后台地址
//本地地址
let urls="http://localhost:8091";

//线上地址
// let urls="http://orangezoom.cn:8091";

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

//艺考动态列表查看更多
export function getmoreList(currentPage,pageSize){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg/getArtexamdynamicList',
			method: 'POST',
			contentType: 'application/json;charset=UTF-8',
			data:{
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
			// data:{
			// 	"id": id,
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