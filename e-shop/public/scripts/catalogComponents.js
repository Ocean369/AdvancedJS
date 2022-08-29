const product = {
    props: ['product'],
    template: `
            <div class="items-infocards">
                <div class=" items-infocards_image ">
                    <img :src='product.img' :alt="product.title">
                    <div class="items-hover">
                        <button @click='$root.$refs.cart.addProduct(product)' class="items-hover_button">
                            <img class="items-hover_button-img" src="image/cart.svg" alt="cart">
                            <span class="items-hover_button-text textRegular">Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div class="items-infocards_text">
                    <h4 class="items-infocards_text-name textSmall">{{product.title}}</h4>
                    <p class="items-infocards_text-info text">{{product.description}}</p>
                    <p class="items-infocards_text-prise textMiddle">$ {{product.price}}</p>
                </div>
            </div>
    `
};


const products = {
    components: { product },
    data() {
        return {
            catalogUrl: './catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: './image/products-img/',
            search: '',
            error: false
        }
    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(product => regExp.test(product.title));
        },
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.$set(el, 'img', `${this.imgCatalog}${el.id}.jpg`)
                    this.$data.products.push(el);
                    this.$data.filtered.push(el);
                }
            });
    },
    template: `
            <div class="catalog-card">
                <product v-for="item of filtered" 
                :key="item.id" 
                :product="item">
                </product>
            </div>`
};





