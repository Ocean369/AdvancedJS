
import CatalogMenu from './components/catalog_menu';
import Catalog from './components/catalogComponents';
import Err from './components/errorComponent';
import Filter from './components/filterComponent';
import Footer from './components/footer';
import Header from './components/header';
import NavMenu from './components/navMenu';
import '@babel/polyfill'
import '../css/style.css';




let app = new Vue({
    el: '#app',
    data: {
        products: [],
        filtered: [],
        // menuShow: false
    },
    components: {
        header_block: Header.header_block,
        nav_menu: NavMenu.nav_menu,
        catalog_menu: CatalogMenu.catalog_menu,
        products: Catalog.products,
        errorMessage: Err.errorMessage,
        filterMessage: Filter.filterMessage,
        footer_block: Footer.footer_block,
        pagination: Catalog.pagination
    },
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

    }
});



