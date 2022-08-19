Vue.component('search', {
    template: `
        <div class="search">
            <input type='text' class="search-field" v-model='$root.search' @input='$root.filter()' />
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div> 
        `
});

Vue.component('filter-message', {
    template: `
        <h5 class="message" v-show='$parent.filtered.length == 0 && $parent.products.length > 0'>По
        вашему запросу ничего не найдено</h5>
    `
});