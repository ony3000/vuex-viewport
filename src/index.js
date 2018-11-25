import debounce from 'lodash/debounce';

// bootstrap-inspired breakpoints.
const breakpoints = [
    {
        boundary: 992,
        name: 'desktop',
    },
    {
        boundary: 768,
        name: 'tablet',
    },
];

const storeModule = {
    namespaced: true,
    state() {
        return {
            width: 0,
            height: 0,
        };
    },
    getters: {
        type(state) {
            const section = breakpoints.find((breakpoint) => {
                return breakpoint.boundary <= state.width;
            });

            return (section ? section.name : 'mobile');
        },
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

const viewport = storeModule;

// `viewport` is deprecated. It will remove later.
export { storeModule, viewport };

const createPlugin = () => {
    return (store) => {
        const instantMeasure = () => {
            store.commit('viewport/measure');
        };
        const debouncedMeasure = debounce(instantMeasure, 200, {maxWait: 1000});

        instantMeasure();
        window.addEventListener('resize', debouncedMeasure);
    };
};

const viewportPlugin = createPlugin;

// `viewportPlugin` is deprecated. It will remove later.
export { createPlugin, viewportPlugin };
