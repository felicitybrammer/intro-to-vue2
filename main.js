
//new Vue instance, options object
var app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:  './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart += 1
        }, 
        updateProduct(variantImage) {
            this.image = variantImage
        },
     
    }
})