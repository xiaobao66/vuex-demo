let _products = [
    {
        id: 1,
        title: 'ipad',
        price: '500',
        inventory: 2
    },
    {
        id: 2,
        title: 'iphone',
        price: '699',
        inventory: 10
    },
    {
        id: 3,
        title: 'T-shirt',
        price: 20,
        inventory: 50
    }
]

export default {
    getProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(_products)
            }, 200)
        })
    },
    buyProducts(products) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve()
                } else {
                    reject()
                }
            }, 100)
        })
    }
}