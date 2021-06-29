import { Store } from 'vuex';
import debounce from 'lodash/debounce';

interface Breakpoint {
  boundary: number;
  mediaName: string;
}

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

if (Number.isFinite === undefined) {
  Number.isFinite = (value) => {
    return (typeof value === 'number' && isFinite(value));
  };
}

// bootstrap-inspired breakpoints.
let breakpoints: Breakpoint[] = [
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
  state(): ModuleState {
    return {
      width: 0,
      height: 0,
    };
  },
  getters: {
    mediaName(state: ModuleState) {
      const section = breakpoints.filter((breakpoint) => {
        return breakpoint.boundary <= state.width;
      })[0];

      return (section ? section.mediaName : 'mobile');
    },
  },
  mutations: {
    measure(state: ModuleState) {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    },
  },
  actions: {
  },
};

const viewport = storeModule;

const createPlugin = (options: PluginOptions = {
  delay: 200,
  maxDelay: 1000,
  breakpoints: {
    tablet: 768,
    desktop: 992,
  },
}) => {
  const wait = (Number.isFinite(options.delay) ? options.delay : 200);
  const maxWait = (Number.isFinite(options.maxDelay) ? options.maxDelay : 1000);
  const points = options.breakpoints || {};
  const customBreakpoints: Breakpoint[] = [];

  Object.entries(points).forEach(([ mediaName, boundary ]) => {
    if (typeof boundary === 'number') {
      if (!(boundary >= 0 && boundary < Infinity)) {
        throw new RangeError('Breakpoint should be a non-negative finite value.');
      } else {
        customBreakpoints.push({
          boundary,
          mediaName,
        });
      }
    } else {
      throw new TypeError('Breakpoint should be a numeric value.');
    }
  });

  if (customBreakpoints.length > 0) {
    customBreakpoints.sort((former, latter) => {
      return (latter.boundary - former.boundary);
    });
    breakpoints = customBreakpoints;
  }

  return (store: Store<any>) => {
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
  ModuleState,
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
