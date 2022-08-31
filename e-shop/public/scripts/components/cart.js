
const cartHeader = {
    template: `
                <div class="cartUser-head">
                    <div>Название товара</div>
                    <div>Кол-во</div>
                    <div>Цена за штуку</div>
                    <div>Итого</div>
                </div>
            `
};

const cartClose = {
    template: `
            <div class='cartUser-close' @click='$root.$refs.header.$refs.cart.showCart = !$root.$refs.header.$refs.cart.showCart'>
                <img src="/image/close.svg" alt="close" >
            </div>
            `
};

const cartMessage = {
    template: `
            <h3 style='padding: 50px;'>Корзина пуста</h3>
            `
};

const cartFooter = {
    props: ['total'],

    template: `
            <div class="cartUser-foot">
                <div>Товаров в корзине на сумму:</div>
                <div>$ {{total}} </div>
            </div>
            `
};

const cartItem = {
    props: ['cartItem'],
    template: `
                <div class='cartUser-body-item'>
                        <div class=' cartUser-body_product'>
                            <img :src='cartItem.img' :alt='cartItem.title'>
                            {{cartItem.title}}
                        </div>
                        <div class=' cartUser-body_count'>
                            <input class='cartUser-body_countItem' type="number" min="1"
                                v-model.number='cartItem.quantity' @input='$root.$refs.header.$refs.cart.amount(cartItem)' />
                            pc.
                        </div>
                        <div>$ {{cartItem.price}}</div>
                        <div class='cartUser-body_amount'><span>$ {{cartItem.amount}}</span>
                            <img src="/image/bin.png" alt="bin" @click='$root.$refs.header.$refs.cart.deleteFromCart(cartItem)'>
                        </div>
                </div>
    `
};

const cart = {
    components: {
        'cart-item': cartItem,
        'cart-closeBtn': cartClose,
        'cart-header': cartHeader,
        'cart-message': cartMessage,
        'cart-footer': cartFooter
    },

    data() {
        return {
            // cartUrl: '/getBasket.json',
            cartList: [],
            search: '',
            showCart: false,
            showCount: false,
        }
    },
    computed: {
        totalAmount: function () {
            let sumPrice = 0;
            for (let product of this.cartList) {
                sumPrice += +product.amount;
            }
            return sumPrice.toFixed(2)
        },
        allCount: function () {
            let count = this.cartList.length;
            if (count > 0) this.showCount = true;
            else this.showCount = false;
            return count
        }
    },
    methods: {
        addProduct(item) {
            let find = this.cartList.filter(product => item.id === product.id);
            if (find.length > 0) {
                this.$set(find[0], 'quantity', ++find[0].quantity);
                this.amount(find[0]);
                this.$root.putJson(`/api/cart`, find[0]);


            } else {
                this.$set(item, 'quantity', 1);
                this.$set(item, 'amount', (item.quantity * item.price));
                this.cartList.splice(this.cartList.length, 1, item);
                this.$root.postJson(`/api/cart`, item);

            }
        },

        amount(item) {
            let find = this.cartList.find(product => item.id === product.id);
            if (find) {
                find.amount = (find.price * find.quantity).toFixed(2);
                console.log(find);
                this.$root.putJson(`/api/cart`, find)
            }
        },
        deleteFromCart(item) {
            let find = this.cartList.find(product => item.id === product.id);
            if (find) {
                this.$data.cartList.splice(this.cartList.indexOf(item), 1);
                this.$root.removeJson(`/api/cart`, find.id);
            }
        }
    },
    mounted() {
        this.$root.getJson(`/api/cart`)
            .then(data => {
                for (let el of data) {
                    this.$set(el, 'amount', (el.quantity * el.price).toFixed(2));
                    this.$data.cartList.push(el);
                }
            })
    },

    template: `
            <div class="header-menu_cart" >
                <img src="image/cart.svg" alt="cart" @click="showCart=!showCart">
                <p class="cart-count" v-show='showCount'>{{allCount}}</p>
                        
                    <div class="cartUser" v-show='showCart'>
                    <cart-closeBtn/>
                    <cart-header v-show='cartList.length > 0'/>
                    <cart-message v-show='cartList.length == 0'/>
                    <div class="cartUser-body" v-show='cartList.length > 0'>
                        <cart-item v-for="item of cartList" :key="item.id" :cart-item="item">
                            </cart-item>
                    </div>
                    <cart-footer v-show='cartList.length > 0' :total='totalAmount'/>
                </div>
             </div>
       
    `
};

export default {
    cart
};

