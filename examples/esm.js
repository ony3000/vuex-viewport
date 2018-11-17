import Vue from 'vue/dist/vue.esm';
import Vuex, { mapState } from 'vuex';
import { storeModule, createPlugin } from 'vuex-viewport';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        viewport: storeModule
    },
    plugins: [
        createPlugin()
    ]
});

new Vue({
    el: '#app',
    store,
    computed: {
        ...mapState({
            windowWidth: state => state.viewport.width,
            windowHeight: state => state.viewport.height
        })
    }
});
