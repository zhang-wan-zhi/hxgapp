//测试接口
//使用promise,解决then返回数组为2个，第1个为null的问题
//必须写success函数，否则无法返回数据
export function getTest(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:'/api/api/TestGet',
			method: 'POST',
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