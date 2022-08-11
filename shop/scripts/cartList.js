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
     * Setter -  количество даного товара в корзине
     */
    set setCount(quantity = 1) {
        this.count = quantity;
    }

    /**
     * 
     * @param {Object} item - товар из каталога
     * @param {Number} item.id id товара
     * @param {String} item.title название товара
     * @param {Number} item.price цена за единицу товара
     * @param {Number} item.quantity - кол-во единиц товара
     */
    constructor(item) {
        this.id = item.id_product;
        this.title = item.product_name;
        this.price = item.price;
        this.count = 1;
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
        else this.count += count;
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
    constructor(container = '.cartUser-body', totalcontainer = '#totalAmount', quantitycontainer = '.cart-count') {
        this.container = container;
        this.totalcontainer = totalcontainer;
        this.quantitycontainer = quantitycontainer;
        this.products = []; //список продуктов в корзине
        this._getProductsOfCart()
            .then(data => {
                for (let product of data.contents) {
                    let item = new CartItem(product);
                    item.setCount = product.quantity;
                    this.products.push(item);
                    this.render(item);

                }
                this.settotalPrice();
                this.showCountToCart();
            })

    }


    _getProductsOfCart() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => console.log(error));
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
                <div data-id='${product.id}' class='cartUser-body_count'>
                <button class='countBtn' data-id='${product.id}' data-do='dec'>-</button>
                <input class='countItem' type="text" name="countItem" data-id='${product.id}' value="${product.count}">
                <button class='countBtn' data-id='${product.id}' data-do='inc'>+</button> pc.</div>
                <div data-id='${product.id}'>$${product.price}</div>
                <div class='cartUser-body_amount' data-id='${product.id}'><span>$${product.amount}</span>
                <img data-id='${product.id}' src="images/bin.png" alt="bin"></div>`;
        document.querySelector(this.container).insertAdjacentHTML('beforeend', row);
        this.setListen(product);
    }

    /**
     * Добавить обработчики событий различным элементам
     * @param {Object} product 
     */
    setListen(product) {
        //для удаления
        document.querySelector(`${this.container}_amount img[data-id='${product.id}']`)
            .addEventListener('click', this.deleteToCart.bind(this));
        //для ручного ввода в input
        document.querySelector(`${this.container}  input[data-id='${product.id}']`)
            .addEventListener('keyup', this.getQuantity.bind(this));
        //изменения по  "-"" и "+""
        document.querySelectorAll(`.countBtn[data-id='${product.id}']`).forEach(btn => {
            btn.addEventListener('click', this.changeCount.bind(this))
        });

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
        document.querySelector(`div [data-id='${id}'] input`).value = `${product.count}`;
        document.querySelector(`div [data-id='${id}'] span`).innerHTML = `$${product.amount}`;
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
        let search = this.products.filter(item => item.id === product.id_product);
        // console.log(search);
        if (search.length > 0) {
            search[0].addCountItem();
            this.setCountForProduct(search[0]);
            this.settotalPrice();

        } else {
            let item = new CartItem(product);
            this.products.push(item);
            this.render(item);
            this.settotalPrice();
            this.showCountToCart();
        }
    }

    /**
     * Удалить данный товар из корзины
     * @param {HTMLElement} event 
     * @param {Object} product - продукт из корзины
     * @param {Number} product.id
     * @param {String} product.title
     * @param {Number} product.price
     * @param {Number} product.count
     */
    deleteToCart(event) {
        let id = +event.target.dataset.id;
        for (let product of this.products)
            if (product.id === id) {
                this.products.splice(this.products.indexOf(product), 1);
                document.querySelectorAll(`${this.container} div[data-id='${product.id}']`)
                    .forEach(div => div.parentNode.removeChild(div))
            }
        this.settotalPrice();
        this.showCountToCart();
    }

    /**
     * Изменить кол-во единиц товара
     * @param {HTMLElement} event 
     */
    getQuantity(event) {
        if (event.code !== "Backspace") {
            let id = +event.target.dataset.id;
            for (let product of this.products)
                if (product.id === id) {
                    product.setCount = +event.target.value;
                    product.amount;
                    this.setCountForProduct(product);
                }
            this.settotalPrice();
        }
        this.showCountToCart();
    }

    changeCount(event) {
        let make = event.target.dataset.do;
        let id = +event.target.dataset.id;
        for (let product of this.products)
            if (product.id === id) {
                switch (make) {
                    case "inc":
                        product.addCountItem();
                        product.amount;
                        this.setCountForProduct(product);
                        this.settotalPrice();
                        break;
                    default:
                        if (product.count > 1) {
                            product.addCountItem(-1);
                            product.amount;
                            this.setCountForProduct(product);
                            this.settotalPrice();
                        }
                }
            }
    }

    /**
     * Показать кол-во единиц товара в корзине
     */
    showCountToCart() {
        let cartCount = document.querySelector(this.quantitycontainer);
        if (this.products.length == 0)
            cartCount.style.display = 'none';
        else {
            cartCount.style.display = 'block';
            cartCount.textContent = cart.products.length;
        }
    }
}


