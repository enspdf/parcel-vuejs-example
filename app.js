import Vue from 'vue/dist/vue.js';

const app = new Vue({
    el: '#app',
    template: `<h1>{{ name }}</h1>`,
    data () {
        return {
            name: 'Name'
        }
    }
});