var Vue = require('vue/dist/vue.common');
var Vuex = require('vuex');
var vuexViewport = require('vuex-viewport');

Vue.use(Vuex);

var pluginOptions = {
    delay: 200,
    maxDelay: 1000,
    breakpoints: {
        tablet: 768,
        desktop: 992,
        largeDesktop: 1200
    }
};

var store = new Vuex.Store({
    modules: {
        viewport: vuexViewport.storeModule
    },
    plugins: [
        vuexViewport.createPlugin(pluginOptions)
    ]
});

new Vue({
    el: '#app',
    store: store,
    computed: {
        layoutType: function () {
            return this.$store.getters['viewport/mediaName'];
        },
        windowWidth: function () {
            return this.$store.state.viewport.width;
        },
        windowHeight: function () {
            return this.$store.state.viewport.height;
        }
    }
});
