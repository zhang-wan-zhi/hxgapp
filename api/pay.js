
// 提示
const errdata = {
	errlist(err){
		uni.showToast({
			icon:'none',
		    title: err,
		    duration: 3000
		});
	}
}

// GET
let listing = function(urling){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			method:'GET',
		})
		.then((res)=>{
			// console.log(res[1])
			uni.showLoading({
				title:'加载中'
			})
			resolve(res[1]) 
			setTimeout(()=>{
				uni.hideLoading()
			},1000)
		})
		.catch((err)=>{
			let errs = '服务器错误 请稍后再试'
			errdata.errlist(errs)
			reject(err)
		})
	})
}

// POST请求
let publicing = function(urling,shopdata){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			method:'POST',
			data:shopdata,
		})
		.then((res)=>{
			uni.showLoading({
				title:'加载中'
			})
			// console.log(res[1])
			resolve(res[1])
			setTimeout(()=>{
				uni.hideLoading()
			},1000)
		})
		.catch((err)=>{
			let errs = '服务器错误 请稍后再试'
			errdata.errlist(errs)
			reject(err)
		})
	})
}

export{listing,publicing}
