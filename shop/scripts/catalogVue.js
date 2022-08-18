/**
 * Каталог товаров
 * 
 */
'use strict';

const catalog = new Vue({
    el: '#catalog',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: './images/',
        search: '',
        show: false
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.search, 'i');
            this.filtered = this.products.filter(product => {
                if (this.search === '') return true;
                else
                    return regexp.test(product.product_name)
            });
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item) {
            let find = cart.cartList.filter(product => item.id_product === product.id_product);
            if (find.length > 0) {
                cart.$set(find[0], 'quantity', ++find[0].quantity);
                cart.amount(find[0]);
            } else {
                this.$set(item, 'quantity', 1);
                this.$set(item, 'amount', (item.quantity * item.price));
                cart.cartList.splice(cart.cartList.length, 1, item);

            }
        },
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.$set(el, 'img', `${this.imgCatalog}${el.id_product}.png`)
                    this.products.push(el);
                }
                this.filter();
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.$set(el, 'img', `${this.imgCatalog}${el.id_product}.png`)
                    this.products.push(el);
                }
                this.filter();
            })
    }
})