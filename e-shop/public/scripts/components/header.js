import MenuBlock from './menu_block';
import Cart from './cart';

const search = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
        <div class="search header-menu_search">
            <input type='text' class="search-field" v-model='userSearch' @input.prevent='$root.$refs.products.filter(userSearch)' />
           <img src="./image/search.svg"
                            alt="search">
        </div> 
        `
};

const header_block = Vue.component('header_block', {
    components: {
        'menu_block': MenuBlock.menu_block,
        'search': search,
        'cart': Cart.cart
    },
    template: `
      <header class="header">
        <nav class="nav container">
            <div class="header-menu ">

                <div class="header-menu_logo">
                    <img src="./image/logo.svg" alt="logo">
                </div>
                <!-- строка поиска -->
                <search></search>

                <!-- block menu -->
                <menu_block></menu_block>

                <div class="header-menu_reg">
                    <img src="./image/registration.svg" alt="registration">
                </div>

                <!-- block cart -->
                <cart ref='cart'></cart>
            </div>
        </nav>
    </header> `
});

export default {
    header_block
};