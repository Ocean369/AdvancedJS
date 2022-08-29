const search = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
        <div class="search header-menu_search">
            <input type='text' class="search-field" v-model='userSearch' @input.prevent='$parent.$refs.products.filter(userSearch)' />
           <img src="image/search.svg"
                            alt="search">
        </div> 
        `
};

const filterMessage = {
    template: `
        <h5 class="message" v-show='$parent.$refs.products.filtered.length == 0 && $parent.$refs.products.products.length > 0'>По
        вашему запросу ничего не найдено</h5>
    `
};