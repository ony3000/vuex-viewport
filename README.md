# vuex-viewport
Vuex extension that allows making window size as computed property.

## Requirement
- Vuex 2.3.0+

## Installation
### CDN
```html
<script src="https://unpkg.com/vuex-viewport@latest/dist/vuex-viewport.js"></script>
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
1. Add a module and plugin to your store.  
:warning: The name of exports has been changed. You can use existing name, but it will be removed later.
   - `viewport` has been changed to `storeModule`.
   - `viewportPlugin` has been changed to `createPlugin`.

```javascript
import { storeModule, createPlugin } from 'vuex-viewport';

const store = new Vuex.Store({
  modules: {
    viewport: storeModule
  },
  plugins: [
    createPlugin()
  ]
});
```

2. Use computed property where necessary. You can also use `mapState` helper.

```javascript
import { mapState } from 'vuex';

computed: {
  windowWidth() {
    return this.$store.state.viewport.width;
  },
  ...mapState({
    windowHeight: state => state.viewport.height
  })
}
```

## Usage examples
The first example does not require a separate configuration, and the rest requires module bundler.
- [Loading library via script tag](https://github.com/ony3000/vuex-viewport/blob/master/examples/old-school.html)
- [CommonJS module require](https://github.com/ony3000/vuex-viewport/blob/master/examples/common.js)
- [ES2015 module import](https://github.com/ony3000/vuex-viewport/blob/master/examples/esm.js) - This example uses `mapState` helper.
