import debounce from 'lodash/debounce';

if (Number.isFinite === undefined) {
    Number.isFinite = (value) => {
        return (typeof value === 'number' && isFinite(value));
    };
}

// bootstrap-inspired breakpoints.
let breakpoints = [
    {
        boundary: 992,
        mediaName: 'desktop',
    },
    {
        boundary: 768,
        mediaName: 'tablet',
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
        mediaName(state) {
            const section = breakpoints.filter((breakpoint) => {
                return breakpoint.boundary <= state.width;
            })[0];

            return (section ? section.mediaName : 'mobile');
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

const createPlugin = (options = {}) => {
    const wait = (Number.isFinite(options.delay) ? options.delay : 200);
    const maxWait = (Number.isFinite(options.maxDelay) ? options.maxDelay : 1000);
    const points = options.breakpoints || {};
    const customBreakpoints = [];

    Object.keys(points).forEach((mediaName) => {
        const boundary = points[mediaName];

        if (boundary.constructor !== Number) {
            throw new TypeError('Breakpoint should be a numeric value.');
        } else if (!(boundary >= 0 && boundary < Infinity)) {
            throw new RangeError('Breakpoint should be a non-negative finite value.');
        } else {
            customBreakpoints.push({boundary, mediaName});
        }
    });
    if (customBreakpoints.length > 0) {
        customBreakpoints.sort((former, latter) => {
            return (latter.boundary - former.boundary);
        });
        breakpoints = customBreakpoints;
    }

    return (store) => {
        const instantMeasure = () => {
            store.commit('viewport/measure');
        };
        const debouncedMeasure = debounce(instantMeasure, wait, {maxWait});

        instantMeasure();
        window.addEventListener('load', instantMeasure);
        window.addEventListener('resize', debouncedMeasure);
    };
};

const viewportPlugin = createPlugin;

export {
    storeModule,
    createPlugin,

    // Following exports are deprecated. It will remove later.
    viewport,
    viewportPlugin,
};

export default {
    storeModule,
    createPlugin,

    // Following exports are deprecated. It will remove later.
    viewport,
    viewportPlugin,
};
