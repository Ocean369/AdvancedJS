'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductItem {
    constructor(product, img = './images/') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = `${img}${product.id_product}.png`;
    }

    render() {
        return `<div class="goods-item" data-id=${this.id}>
                <img class='goods-img' src=${this.img} alt="${this.title}">
                <div class='goods-description'>
                <h3>${this.title}</h3>
                <p>${this.price}$</p>
                <button class="addToCart" type="button" data-id='${this.id}'>Добавить</button>
                </div></div>`
    }
}


class ProductList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => {
                //data - объект js
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
        document.querySelector('.totalPrice span').textContent = this.totalPriceProducts();
    }

    totalPriceProducts() {
        let sumPrice = 0;
        for (let product of this.goods) {
            sumPrice += product.price;
        }
        return sumPrice
    }
}
