'use strict';

class ProductItem {
    constructor(product = { id: 0, title: 'Out of stock', price: 0 }, img = './images/') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = `${img}${product.title}.jpeg`;
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
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Shirt', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 350 },
            { id: 4, title: 'Shoes', price: 250 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    totalPriceProducts() {
        let sumPrice = 0;
        for (let product of this.goods) {
            sumPrice += product.price;
        }
        return `Суммарная стоимость всех товаров $${sumPrice}`
    }
}

let list = new ProductList();
document.querySelector('.totalPrice').textContent = list.totalPriceProducts();