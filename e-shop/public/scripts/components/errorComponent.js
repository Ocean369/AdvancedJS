const errorMessage = {
    data() {
        return {
            error: false
        }
    },
    template: `
        <h5 class='message' v-show='error'>Не
        удаётся выполнить запрос к серверу.</h5>
`
};

export default {
    errorMessage
};