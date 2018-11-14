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

2. Use `mapState` helper where computed property needed.
```javascript
import { mapState } from 'vuex';

computed: {
  ...mapState({
    windowWidth: state => state.viewport.width,
    windowHeight: state => state.viewport.height
  })
}
```
