import { Store } from 'vuex';
interface ModuleState {
    width: number;
    height: number;
}
interface PluginOptions {
    delay?: number;
    maxDelay?: number;
    breakpoints?: {
        [mediaName: string]: number;
    };
}
declare const storeModule: {
    namespaced: boolean;
    state(): ModuleState;
    getters: {
        mediaName(state: ModuleState): string;
    };
    mutations: {
        measure(state: ModuleState): void;
    };
    actions: {};
};
declare const viewport: {
    namespaced: boolean;
    state(): ModuleState;
    getters: {
        mediaName(state: ModuleState): string;
    };
    mutations: {
        measure(state: ModuleState): void;
    };
    actions: {};
};
declare const createPlugin: (options?: PluginOptions) => (store: Store<any>) => void;
declare const viewportPlugin: (options?: PluginOptions) => (store: Store<any>) => void;
export { ModuleState, storeModule, createPlugin, viewport, viewportPlugin, };
declare const _default: {
    storeModule: {
        namespaced: boolean;
        state(): ModuleState;
        getters: {
            mediaName(state: ModuleState): string;
        };
        mutations: {
            measure(state: ModuleState): void;
        };
        actions: {};
    };
    createPlugin: (options?: PluginOptions) => (store: Store<any>) => void;
    viewport: {
        namespaced: boolean;
        state(): ModuleState;
        getters: {
            mediaName(state: ModuleState): string;
        };
        mutations: {
            measure(state: ModuleState): void;
        };
        actions: {};
    };
    viewportPlugin: (options?: PluginOptions) => (store: Store<any>) => void;
};
export default _default;
