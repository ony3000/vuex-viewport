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

export {
    viewport,
};

export function viewportPlugin() {
    return (store) => {
        window.addEventListener('resize', () => {
            store.commit('viewport/measure');
        });
    };
};
