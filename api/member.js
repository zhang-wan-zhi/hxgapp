let urls = "https://www.qzys.art/ruoyi-admin";


// 充值会员
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


// 续费会员
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

// 查询provider信息
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

// 查询会员钱数id信息

export function getCharges() {
	return new Promise((resolve, reject) => {
			uni.request({
				url:  urls +  '/hxg/getCharges',
				method: 'GET',
				success(res) {
					resolve(res.data);
				},
				fail(res) {
					reject(res);
				}
			});
		})
	
}