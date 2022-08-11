


let list = new ProductList();
let cart = new CartList();

// let cartCount = document.querySelector('.cart-count');
let cartBtn = document.querySelector('.cart-button');
let closeCartBtn = document.querySelector('.cartUser-close');


/**
 * Добавляем обработку события click на закрытие окна корзины
 */
closeCartBtn.addEventListener('click', () => {
    document.querySelector('.cartUser').classList.remove('cartUser__show');
})


// /**
//  * Добавляем обработку события click всем кнопкам "Добавить"
//  * @event button#click
//  * 
//  */
document.querySelector('.goods-list').addEventListener('click', setDataCartProduct);


/**
 *  Добавляем обработку события click кнопке "Корзина"
 * 
 * Показать или скрыть окно с товарами, добавленными в корзину
 * 
 * @event button#click
 * @type {event} 
 */
cartBtn.addEventListener('click', () => {
    document.querySelector('.cartUser').classList.toggle('cartUser__show');
})


/**
 * Берет параметр id из event.target
 * Находит в базе товар по данному id и добавляет его в список товаров в корзине.
 * 
 * @param {HTMLElement} event 
 */
function setDataCartProduct(event) {
    let teg = event.target;
    if (teg.localName === 'button') {
        let id = +teg.dataset.id;
        list.goods.forEach(product => {
            if (product.id_product == id) {
                cart.addToCart(product);
            }
        })
        // showCountToCart();
    }
}

