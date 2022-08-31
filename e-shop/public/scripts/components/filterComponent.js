
const filterMessage = {
    template: `
        <h5 class="message" v-show='$parent.$refs.products.filtered.length == 0 && $parent.$refs.products.products.length > 0'>По
        вашему запросу ничего не найдено</h5>
    `
};

export default {
    filterMessage
};