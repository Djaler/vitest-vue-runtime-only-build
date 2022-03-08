import Vue from "vue";
import { Bar } from "./components";

new Vue({
    el: '#app',
    render: h => h(Bar)
}).$mount();
