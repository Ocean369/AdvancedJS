const menu_block = Vue.component('menuBlock', {
    data() {
        return {
            menuShow: false
        }
    },
    template: `
    <div class="header-menu_catalog">
        <img src="./image/catalog.svg" alt="catalog" @click='menuShow=!menuShow'>
                    
        <div class="menu" v-show='menuShow'>
            <div class="menu-list textRegular">
                <div class="close" @click="menuShow=!menuShow" >
                        <img src="./image/X.svg" alt="close button">
                </div>
                <div class="menu-block">
                    <p class="menu-head">MENU</p>
                    <p class="menu-title">MAN</p>
                    <ul class="menu-text">
                            <li class="menu_link_padding"><a class="menu_link" href="#">Accessories</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">Bags</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">Denim</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">T-Shirts</a></li>
                        </ul>
                        <p class="menu-title">WOMAN</p>
                        <ul class="menu-text">
                            <li class="menu_link_padding"><a class="menu_link" href="#">Accessories</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">Jackets & Coats</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">Polos</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">T-Shirts</a></li>
                            <li class="menu_link_padding"><a class="menu_link" href="#">Shirts</a></li>
                        </ul>
                        <p class="menu-title">KIDS</p>
                        <ul class="menu-text">
                            <li class="menu_link_padding"><a href="#" class="menu_link">Accessories</a></li>
                            <li class="menu_link_padding"><a href="#" class="menu_link">Jackets & Coats</a></li>
                            <li class="menu_link_padding"><a href="#" class="menu_link">Polos</a></li>
                            <li class="menu_link_padding"><a href="#" class="menu_link">T-Shirts</a></li>
                            <li class="menu_link_padding"><a href="#" class="menu_link">Shirts</a></li>
                            <li class="menu_link_padding"><a href="#" class="menu_link">Bags</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
 `
});


export default {
    menu_block
};