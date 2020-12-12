# vuex-viewport
[![npm](https://img.shields.io/npm/v/vuex-viewport)](https://www.npmjs.com/package/vuex-viewport)
[![GitHub license](https://img.shields.io/github/license/ony3000/vuex-viewport)](https://github.com/ony3000/vuex-viewport/blob/master/LICENSE)
[![package hits](https://data.jsdelivr.com/v1/package/npm/vuex-viewport/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vuex-viewport)<br>
Vuex extension that allows making window size as computed property.

**Note:** This library may not work with Vuex 4.

## Requirement
* Vuex 2.3.0+ (up to 3.x)

## Installation
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/vuex-viewport@1.1.4/dist/vuex-viewport.js"></script>
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

```javascript
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
  },
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
