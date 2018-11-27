import Vue from 'vue/dist/vue.esm';
import Vuex, { mapState, mapGetters } from 'vuex';
import { storeModule, createPlugin } from 'vuex-viewport';

Vue.use(Vuex);

const pluginOptions = {
    delay: 200,
    maxDelay: 1000,
    breakpoints: {
        tablet: 768,
        desktop: 992,
        largeDesktop: 1200
    }
};

const store = new Vuex.Store({
    modules: {
        viewport: storeModule
    },
    plugins: [
        createPlugin(pluginOptions)
    ]
});

new Vue({
    el: '#app',
    store,
    computed: {
        ...mapGetters({
            layoutType: 'viewport/mediaName'
        }),
        ...mapState({
            windowWidth: state => state.viewport.width,
            windowHeight: state => state.viewport.height
        })
    }
});
