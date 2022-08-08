'use strict';

/**
 * Элемент корзины товаров
 */
class CartItem {
    /**
     * Getter - общая сумма за  данный товар
     */
    get amount() {
        return this.price * this.count;
    }

    /**
     * 
     * @param {Object} item - товар из каталога
     * @param {Number} item.id id товара
     * @param {String} item.title название товара
     * @param {Number} item.price цена за единицу товара
     * @param {Number} count - кол-во единиц товара
     */
    constructor(item, count) {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.count = count;
    }

    /**
     * Добавляет или изменяет кол-во данного товара в корзине.
     * Ecли товар добавляется по кнопке "Добавить", то аргумент будет использован по умолчанию
     * 
     * !не реализовано!
     * Ecли товар добавляется по измению текста в поле input, то аргумент передается
     *  
     * @param {Number} [count=1] 
     *  
     */
    addCountItem(count = 1) {
        if (count == 1) ++this.count;
        else this.count = count;
    }

}



/**
 * Class Корзинa товаров
 */
class CartList {

    /** Getter
     * общая сумма по товарам в корзине
     */
    get totalAmount() {
        let sumPrice = 0;
        for (let product of this.products) {
            sumPrice += product.amount;
        }
        return sumPrice
    }

    /**
     * 
     * @param {String} container название класса контейнера для вывода данных по товарам в корзине
     * @param {String} totalcontainer название класса контейнера для вывода общей суммы по товарам в корзине
     */
    constructor(container = '.cartUser-body', totalcontainer = '#totalAmount') {
        this.container = container;
        this.totalcontainer = totalcontainer;
        this.products = []; //список продуктов в корзине
    }

    /**
     * 
     * Вывести общую сумму по товарам в корзине в окно
     */
    settotalPrice() {
        document.querySelector(this.totalcontainer).textContent = `$${this.totalAmount}`;
    }


    /**
     * отрисовать новый элемент для товара в корзине
     * @param {Оbject} product - товар
     * @param {Number} product.id
     * @param {String} product.title
     * @param {Number} product.price
     * @param {Number} product.count
     */
    render(product) {
        let row = `
                <div data-id='${product.id}'>${product.title}</div>
                <div data-count='${product.id}'>${product.count} pc.</div>
                <div data-price='${product.id}'>$${product.price}</div>
                <div data-amount='${product.id}'>$${product.amount}</div>`;
        document.querySelector(this.container).insertAdjacentHTML('beforeend', row);
    }

    /**
     * Выводит измененные значения кол-ва и сумму данного товара в окно корзины
     * 
     * @param {Object} product - продукт из корзины
     * @param {Number} product.id
     * @param {String} product.title
     * @param {Number} product.price
     * @param {Number} product.count
     */
    setCountForProduct(product) {
        let id = product.id;
        document.querySelector(`div [data-count='${id}']`).textContent = `${product.count} pc.`;
        document.querySelector(`div [data-amount='${id}']`).textContent = `$${product.amount}`;
    }

    /**
     * Добавляет новый товар в корзину или прибавляет кол-во данного товара на +1 и отрисовывает все в окне корзина
     * 
     * @param {Object} product продукт из списка товаров
     *  @param {Number} product.id
         * @param {String} product.title
         * @param {Number} product.price
     */
    addToCart(product) {
        let search = this.products.filter(item => item.id === product.id);
        console.log(search);
        if (search.length > 0) {
            search[0].addCountItem();
            // product.changeCount = 1;
            this.setCountForProduct(search[0]);
            this.settotalPrice();

        } else {
            let item = new CartItem(product, 1);
            this.products.push(item);
            this.render(item);
            this.settotalPrice();
        }
    }

    /**
     * Удалить данный товар из корзины
     * 
     * @param {Object} product - продукт из корзины
     * @param {Number} product.id
     * @param {String} product.title
     * @param {Number} product.price
     * @param {Number} product.count
     */
    deleteToCart(product) {

    }
}


