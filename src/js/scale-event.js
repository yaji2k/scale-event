Vue.component('app-phone-order', {
        data() {
            return {
                maxCount: 3,
                count: 2,
            }
        },
        created() {
            this.count = document.querySelectorAll(".app-event").length;
        },
        computed: {
            width() {
                return (this.count-1)/this.maxCount * 100;
            }
        },
        methods: {

        },
        template: ``
    });
    new Vue({
        el: '#app',
        created() {
            this.count = document.querySelectorAll(".app-event").length;
        },
        computed: {
            width() {
                return (this.count-1)/this.maxCount * 100;
            }
        },
    });
