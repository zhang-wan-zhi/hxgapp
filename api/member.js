let urls = "https://orangezoom.cn:8091";

export function charge(oProductid,money) {
	const oOpenid= uni.getStorageSync('openid');
	return new Promise((resolve, reject) => {
		uni.request({
			url: urls + '/hxg/pay/orders',
			method: 'POST',
			data: {
				oOpenid,
				oProductid,
				money
			},
			success: res => {
				resolve(res.data.wixinPay)
			},
			fail: err => {
				reject(err)
			},
		})
	})
}

export function renewal(oProductid,money) {
	const oOpenid= uni.getStorageSync('openid');
	return new Promise((resolve, reject) => {
		uni.request({
			url: urls + '/hxg/pay/ordersForContinue',
			method: 'POST',
			data: {
				oOpenid,
				oProductid,
				money
			},
			success: res => {
				resolve(res.data.wixinPay)
			},
			fail: err => {
				reject(err)
			},
		})
	})
}


export function getProviderInfo() {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service: 'payment',
			success(res) {
				resolve(res.provider[0]);
			},
			fail(res) {
				reject(res);
			}
		})
	})
}