
Vue.component('cart-header', {
    template: `
                <div class="cartUser-head">
                    <div>Название товара</div>
                    <div>Кол-во</div>
                    <div>Цена за штуку</div>
                    <div>Итого</div>
                </div>
            `
});

Vue.component('cart-closeBtn', {
    template: `
            <div class='cartUser-close'>
                <img src="images/close.svg" alt="close" @click='$root.showCart = !$root.showCart'>
            </div>
            `
});

Vue.component('cart-message', {
    template: `
            <h3 style='padding: 50px;'>Корзина пуста</h3>
            `
});

Vue.component('cart-footer', {
    template: `
            <div class="cartUser-foot">
                <div>Товаров в корзине на сумму:</div>
                <div>$ {{$root.totalAmount}}</div>
            </div>
            `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
                <div class='cartUser-body-item'>
                        <div>
                            {{cartItem.product_name}}
                        </div>
                        <div class=' cartUser-body_count'>
                            <input class='countItem' type="number" min="1"
                                v-model.number='cartItem.quantity' @input='$root.amount(cartItem)' />
                            pc.
                        </div>
                        <div>$ {{cartItem.price}}</div>
                        <div class='cartUser-body_amount'><span>$ {{cartItem.amount}}</span>
                            <img src="images/bin.png" alt="bin" @click='$root.deleteFromCart(cartItem)'>
                        </div>
                </div>
    `
});

Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `
       
        <div class="cartUser" v-show='visibility'>
                <cart-closeBtn/>
                <cart-header v-show='cartItems.length > 0'/>
                <cart-message v-show='cartItems.length == 0'/>
                <div class="cartUser-body" v-show='cartItems.length > 0'>
                    <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
                    </cart-item>
                </div>
                <cart-footer v-show='cartItems.length > 0'/>
        </div>
    `
});

