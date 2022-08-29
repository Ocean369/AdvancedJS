let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        menuShow: false
    },
    components: { cart, products, search, errorMessage, filterMessage, footer_link, menu_block },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error =>
                    this.$refs.error.error = true)
        },

        // Получение одного товара по id
        getItem(url, id) {
            return fetch(`${url}/${id}`, {
                method: "GET",
                headers: { "Accept": "application/json" }
            })
                .then(result => result.json())
                .catch(error =>
                    this.$refs.error.error = true)
        },

        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "application/json", "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.error = true;
                })
        },

        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json", "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.error = true;
                })
        },

        removeJson(url, id) {
            return fetch(`${url}/${id}`, {
                method: 'DELETE',
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.error = true;
                })
        }

    },
    mounted() {
        console.log(this)
    }
})