import { it } from "vitest";
import { Bar } from "./components";
import Vue from "vue";
import { mount } from "@vue/test-utils";

it('should render component', () => {
    const wrapper = mount(Bar);
});

// No warning if render manually
/*it('should render component', () => {
    const app = document.createElement('div');
    app.id = 'app';
    document.body.append(app);
    new Vue({
        el: '#app',
        render: h => h(Bar)
    }).$mount();
});*/
