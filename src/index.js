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

const createPlugin = (options = {}) => {
    const wait = Number(options.delay) || 200;
    const maxWait = Number(options.maxDelay) || 1000;

    return (store) => {
        const instantMeasure = () => {
            store.commit('viewport/measure');
        };
        const debouncedMeasure = debounce(instantMeasure, wait, {maxWait});

        instantMeasure();
        window.addEventListener('resize', debouncedMeasure);
    };
};

const viewportPlugin = createPlugin;

// `viewportPlugin` is deprecated. It will remove later.
export { createPlugin, viewportPlugin };
