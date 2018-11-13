# vuex-viewport
Vuex extension that allows making window size as computed property.

## Install
```
npm install vuex-viewport
```

## Usage
Add a module and plugin to your store.
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
