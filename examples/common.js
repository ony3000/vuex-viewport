var Vue = require('vue/dist/vue.common');
var Vuex = require('vuex');
var vuexViewport = require('vuex-viewport');

Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        viewport: vuexViewport.storeModule
    },
    plugins: [
        vuexViewport.createPlugin()
    ]
});

new Vue({
    el: '#app',
    store: store,
    computed: {
        windowWidth: function () {
            return this.$store.state.viewport.width;
        },
        windowHeight: function () {
            return this.$store.state.viewport.height;
        }
    }
});
