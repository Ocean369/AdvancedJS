Vue.component('catalog', {
    props: ['products'],
    template: `
            <div class="goods-list">
                <product v-for="item of products" 
                    :key="item.id_product" 
                    :product="item">
                </product>
            </div>
`
});

Vue.component('product', {
    props: ['product'],
    template: `
                <div class="goods-item">
                    <img class='goods-img' :src='product.img' :alt='product.product_name'>
                    <div class='goods-description'>
                        <h3>{{product.product_name}}</h3>
                        <p>$ {{product.price}}</p>
                        <button class="addToCart" @click='$root.addProduct(product)'>Купить</button>
                    </div>
                </div> 
    `

});

