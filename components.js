import Vue from "vue";

/*export const Foo = Vue.extend({
    render(h) {
        return h('div', ['Hello render function']);
    },
});*/

export const Foo = Vue.extend({
    template: '<div>Hello template</div>',
});

export const Bar = Vue.extend({
    render(h) {
        return h(Foo);
    },
});

/*export const Bar = Vue.extend({
    components: { Foo },
    template: '<Foo/>'
});*/
