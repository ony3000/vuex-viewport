import debounce from 'lodash/debounce';

const viewport = {
    namespaced: true,
    state() {
        return {
            width: 0,
            height: 0,
        };
    },
    getters: {
    },
    mutations: {
        measure(state) {
            state.width = window.innerWidth;
            state.height = window.innerHeight;
        },
    },
    actions: {
    },
};

const storeModule = viewport;

// `viewport` is deprecated. It will remove later.
export { storeModule, viewport };

export function viewportPlugin() {
    return (store) => {
        const instantMeasure = () => {
            store.commit('viewport/measure');
        };
        const debouncedMeasure = debounce(instantMeasure, 200, {maxWait: 1000});

        instantMeasure();
        window.addEventListener('resize', debouncedMeasure);
    };
};
