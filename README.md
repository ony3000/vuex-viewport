# vuex-viewport

[![npm](https://img.shields.io/npm/v/vuex-viewport)](https://www.npmjs.com/package/vuex-viewport)
[![GitHub license](https://img.shields.io/github/license/ony3000/vuex-viewport)](https://github.com/ony3000/vuex-viewport/blob/master/LICENSE)
[![package hits](https://data.jsdelivr.com/v1/package/npm/vuex-viewport/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vuex-viewport)<br>
Vuex extension that allows making window size as computed property.

**NOTE:** If you use Vue 3, Vuex 4 and TypeScript, see [the section below](#typescript-support).

## Requirement

* Vuex 2.3.0+ (up to 4.x)

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/vuex-viewport@1.1.5/dist/vuex-viewport.js"></script>
```

### NPM

```sh
npm install vuex-viewport
```

### Yarn

```sh
yarn add vuex-viewport
```

## Usage

### Outline

1. Add a module and plugin to your store.
2. Use computed property where necessary.

### with CDN

See example code [here](./demo.html).

```html
<script>
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
    },
    layoutType: function () {
      // NOTE: This getter is supported in 1.1.0+
      return this.$store.getters['viewport/mediaName'];
    }
  }
});
</script>
```

### without CDN

See example code [here](https://codesandbox.io/s/use-case-es2015-module-import-5tfck) or another example code [using with Nuxt.js](https://codesandbox.io/s/use-case-using-with-nuxtjs-dcubc).

```javascript
// main.js

import Vue from 'vue';
import Vuex from 'vuex';
import { storeModule, createPlugin } from 'vuex-viewport';
import App from './App.vue';

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
  store,
  render: (h) => h(App)
}).$mount('#app');
```

```vue
// App.vue

<template>
  <div id="app">
    <p>Layout type: {{ layoutType }}</p>
    <p>Window size: {{ windowWidth }} x {{ windowHeight }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    windowWidth: function () {
      return this.$store.state.viewport.width;
    },
    windowHeight: function () {
      return this.$store.state.viewport.height;
    },
    layoutType: function () {
      // NOTE: This getter is supported in 1.1.0+
      return this.$store.getters['viewport/mediaName'];
    }
  }
};
</script>
```

### Configuration

The `createPlugin` has some options (supported in 1.1.0+):

Name | Type | Default | Description
---- | ---- | ------- | -----------
delay | Number | 200 | The number of milliseconds to delay to measure the window size. (see [debounce](https://lodash.com/docs/4.17#debounce))
maxDelay | Number | 1000 | The maximum number of milliseconds to wait without measuring the size of the window if a series of resizing events does not end. (see [debounce](https://lodash.com/docs/4.17#debounce))
breakpoints | Object | {<br>&nbsp;&nbsp;tablet:&nbsp;768,<br>&nbsp;&nbsp;desktop:&nbsp;992<br>} | A set of key-value pairs whose key is the `mediaName` and whose value is the minimum width of the window.

## TypeScript Support

You'll probably use one of these three examples.

### Using neither Class-style Component nor Composition API

1. Add a declaration file in your project directory.

```typescript
// vuex.d.ts
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { ModuleState } from 'vuex-viewport';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    viewport: ModuleState;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
```

2. Create a store instance.

```typescript
// store.ts
import { createStore } from 'vuex';
import { storeModule, createPlugin } from 'vuex-viewport';

export const store = createStore({
  modules: {
    viewport: storeModule,
  },
  plugins: [
    createPlugin(),
  ],
});
```

3. Install the store instance.

```typescript
// main.ts
import { createApp } from 'vue';
import { store } from 'PATH_OF_YOUR_store.ts';
import App from 'PATH_OF_YOUR_App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
```

4. Use store states and getters in Vue component.

```vue
// App.vue
<template>
  <div>
    <p>Layout type: {{ layoutType }}</p>
    <p>Window size: {{ windowWidth }} x {{ windowHeight }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  computed: {
    windowWidth(): number {
      return this.$store.state.viewport.width;
    },
    windowHeight(): number {
      return this.$store.state.viewport.height;
    },
    layoutType(): string {
      return this.$store.getters['viewport/mediaName'];
    },
  },
});
</script>
```

### Using with Class-style Component

**NOTE:** This example is using Vue Class Component 8, which is still in beta as of July 2021.

1. No declaration file is required.

2. The process of creating and installing a store is the same as the above example.

3. Use store states and getters in Vue component.

```vue
// App.vue
<template>
  <div>
    <p>Layout type: {{ layoutType }}</p>
    <p>Window size: {{ windowWidth }} x {{ windowHeight }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  computed: {
    windowWidth() {
      return this.$store.state.viewport.width;
    },
    windowHeight() {
      return this.$store.state.viewport.height;
    },
    layoutType() {
      return this.$store.getters['viewport/mediaName'];
    },
  },
})
export default class App extends Vue {}
</script>
```

### Using with Composition API

1. No declaration file is required.

2. Create a store instance.

```typescript
// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { storeModule, createPlugin, ModuleState } from 'vuex-viewport';

export interface State {
  viewport: ModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: {
    viewport: storeModule,
  },
  plugins: [
    createPlugin(),
  ],
});

export function useStore() {
  return baseUseStore(key);
}
```

3. Install the store instance.

```typescript
// main.ts
import { createApp } from 'vue';
import { store, key } from 'PATH_OF_YOUR_store.ts';
import App from 'PATH_OF_YOUR_App.vue';

const app = createApp(App);

app.use(store, key);

app.mount('#app');
```

4. Use store states and getters in Vue component.

```vue
// App.vue
<template>
  <div>
    <p>Layout type: {{ layoutType }}</p>
    <p>Window size: {{ windowWidth }} x {{ windowHeight }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'PATH_OF_YOUR_store.ts';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();

    const windowWidth = computed(() => store.state.viewport.width);
    const windowHeight = computed(() => store.state.viewport.height);
    const layoutType = computed(() => store.getters['viewport/mediaName']);

    return {
      windowWidth,
      windowHeight,
      layoutType,
    };
  },
});
</script>
```
