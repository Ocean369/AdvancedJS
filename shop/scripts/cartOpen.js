

let cartCount = document.querySelector('.cart-count');
let cartBtn = document.querySelector('.cart-button');
let AddBtns = document.querySelectorAll('.addToCart');

let cart = new CartList();

/**
 * Выводит кол-во разных товаров в корзине
 */
function showCountToCart() {
    if (cart.products.length == 0)
        cartCount.style.display = 'none';
    else {
        cartCount.style.display = 'block';
        cartCount.textContent = cart.products.length;
    }
}

/**
 * Добавляем обработку события click всем кнопкам "Добавить"
 * @event button#click
 * 
 */
AddBtns.forEach((btn) => {
    btn.addEventListener('click', setDataCartProduct);
})

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
 * Показывает число товаров в корзине возле кнопки " Корзина" 
 * @param {HTMLButtonElement} event 
 */
function setDataCartProduct(event) {
    let id = event.target.dataset.id;
    list.goods.forEach(product => {
        if (product.id == id) {
            cart.addToCart(product);
        }
    })
    showCountToCart();
}

