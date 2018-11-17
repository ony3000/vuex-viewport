# vuex-viewport
Vuex extension that allows making window size as computed property.

## Requirement
- Vuex 2.3.0+

## Install
```
npm install vuex-viewport
```

## Usage
1. Add a module and plugin to your store.
```javascript
import { viewport, viewportPlugin } from 'vuex-viewport';

const store = new Vuex.Store({
  modules: {
    viewport
  },
  plugins: [
    viewportPlugin()
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
