// 后台地址
let urls="http://localhost:8080";

//GET
//获取轮播图接口数据
export function getLunboList(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urls+'/hxg',
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