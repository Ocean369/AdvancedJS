const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

'use strict';
/**
 * Корзина товаров
 */
const cart = new Vue({
    el: '#cart',
    data: {
        cartUrl: '/getBasket.json',
        cartList: [],
        search: '',
        show: false,
        showCount: false
    },
    computed: {
        totalAmount: function () {
            let sumPrice = 0;
            for (let product of this.cartList) {
                sumPrice += product.amount;
            }
            return sumPrice
        },
        allCount: function () {
            let count = this.cartList.length;
            if (count > 0) this.showCount = true;
            else this.showCount = false;
            return count
        }
    },
    methods: {
        filter() {
            catalog.search = this.search;
            catalog.filter()
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        amount(item) {
            let find = this.cartList.find(product => item.id_product === product.id_product);
            if (find)
                find.amount = find.price * find.quantity;
        },
        deleteFromCart(item) {
            let find = this.cartList.find(product => item.id_product === product.id_product);
            if (find)
                this.cartList.splice(this.cartList.indexOf(item), 1);
        }
    },
    mounted() {
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.$set(el, 'amount', (el.quantity * el.price));
                    this.cartList.push(el);
                }
            })
    }
})

