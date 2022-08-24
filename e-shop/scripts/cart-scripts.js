let cart = document.querySelector('div.cart__product');
let subTotal = document.querySelector('.b-checkout__subTotalPrice');
let globalTotal = document.querySelector('.b-checkout__grandTotalPrice');

let cartItem = cart.getElementsByClassName('b-cartItem');
let cartItemNumber = cartItem.length;
let cartCount = document.querySelector('p.cart-count');

document.addEventListener("DOMContentLoaded", updateValue);
cart.addEventListener('input', updateValue);
cart.addEventListener('click', closeCartItem);

function updateValue(e) {
    cartCount.innerHTML = cartItem.length.toString();
    let total = 0;

    for (let i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector('.b-info__properties_user').innerHTML;
        let quantity = cartItem[i].querySelector('.b-info__properties_textField').value;
        price = price.substring(1, price.length);
        total += Number(price) * Number(quantity);
    }

    subTotal.innerHTML = "$" + total.toString();
    globalTotal.innerHTML = "$" + total.toString();
}


function closeCartItem(e) {
    let cartElement = e.target;
    let cartParent = cartElement.parentNode;
    if (cartElement.classList.contains('cartItem__close')) {
        cartParent.parentNode.removeChild(cartParent);
        updateValue();
    }
}
