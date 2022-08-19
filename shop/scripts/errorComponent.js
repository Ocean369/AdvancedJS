Vue.component('error-message', {
    props: ['visibility'],
    template: `
        <h5 class='message' v-show='visibility'>Не
        удаётся выполнить запрос к серверу.</h5>
`
});