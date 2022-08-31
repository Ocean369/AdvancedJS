const filter_block = Vue.component('filter_block', {
    data() {
        return {

            isActiveBlock: false,
            isActiveCategory: false,
            changeHeight: false
        }
    },
    methods: {

        setHeight() {
            if (this.isActiveCategory)
                this.changeHeight = true;
            else this.changeHeight = false;
        },

        filterClick() {
            this.isActiveBlock = !this.isActiveBlock;
            this.setHeight();
        },

        categoryClick() {
            this.isActiveCategory = !this.isActiveCategory;
            this.setHeight();
        }

    },
    template: `
        <div class="filter" :class="{filter__height:changeHeight,'filter-active' : isActiveBlock}"
        >
            <div class="basic" @click='filterClick()'>
                <a href="#">
                    <span >FILTER</span>
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                        fill="black" />
                    </svg>
                </a>
            </div>

        <div class="filter-menu" v-show='isActiveBlock'>
            <div class="categoryMenu">
                 <a href="#" class="title textRegular" :class='{active:isActiveCategory}'
                 @click='categoryClick()'>CATEGORY</a>
                <div class="menuItems" v-show='isActiveCategory'>
                    <a href="#">Accessories</a>
                    <a href="#">Bags</a>
                    <a href="#">Denim</a>
                    <a href="#">Hoodies & Sweatshirts</a>
                    <a href="#">Jackets & Coats</a>
                    <a href="#">Polos</a>
                    <a href="#">Shirts</a>
                    <a href="#">Shoes</a>
                    <a href="#">Sweaters & Knits</a>
                    <a href="#">T-Shirts</a>
                    <a href="#">Tanks</a>
                </div>
            </div>

            <div class="brandMenu">
                <a href="#" class="title textRegular">BRAND</a>
            </div>

            <div class="designerMenu">
                <a href="#" class="title textRegular">DESIGNER</a>
            </div>
        </div>
    </div>
`
});

const sort_block = Vue.component('sort_block', {
    data() {
        return {
            showSize: false
        }
    },
    template: `
    <div class="sort">
        <ul>
            <li>
                <a class="trending" href="#">
                    <span>TRENDING NOW</span>
                    <i class="fa fa-angle-down"></i>
                </a>
            </li>
            <li class="size" >
                <a href="#" @click='$data.showSize=!$data.showSize'>
                    <span>SIZE</span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <form class="size-sort textRegular" v-show='showSize'>
                    <div>
                        <input type="checkbox" id="xs" name="size">
                        <label for="xs">XS</label>
                    </div>
                    <div>
                        <input type="checkbox" id="s" name="size">
                        <label for="s">S</label>
                    </div>
                    <div>
                        <input type="checkbox" id="m" name="size">
                        <label for="m">M</label>
                    </div>
                    <div>
                        <input type="checkbox" id="l" name="size">
                        <label for="l">L</label>
                    </div>
                </form>
            </li>
            <li>
                <a class="price" href="#">
                    <span>PRICE</span>
                    <i class="fa fa-angle-down"></i>
                </a>
            </li>
        </ul>
    </div>
    `
})

const catalog_menu = Vue.component('catalog_menu', {
    component: {
        'filter_block': filter_block,
        'sort_block': sort_block
    },
    template: `
        <nav class="catalog-menu">
            <filter_block/>
            <sort_block/>
        </nav>
   `
});

export default {
    catalog_menu
};