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
### Outline
1. Add a module and plugin to your store.
2. Use computed property where necessary.

### Module
There is a named export, `storeModule`.  
To measure the window size, add `storeModule` to your store.

```javascript
const store = new Vuex.Store({
  modules: {
    viewport: storeModule
  }
});
```

Then, you can commit mutations with `this.$store.commit('viewport/measure')`.  
The measured window size is stored in the state property.

Where computed properties are needed, you can use:

```javascript
computed: {
  windowWidth: function () {
    return this.$store.state.viewport.width;
  },
  windowHeight: function () {
    return this.$store.state.viewport.height;
  }
}
```

The `storeModule` has another getter.  
This getter (supported in 1.1.0+) can be used like a CSS media query.

```javascript
computed: {
  layoutType: function () {
    return this.$store.getters['viewport/mediaName'];
  }
},
methods: {
  foo: function () {
    if (this.layoutType === 'desktop') {
      ...
    }
    else {
      ...
    }
  }
}
```

### Examples
The first example does not require a separate configuration, and the rest requires module bundler.
- [Loading library via script tag](https://github.com/ony3000/vuex-viewport/blob/master/examples/old-school.html)
- [CommonJS module require](https://github.com/ony3000/vuex-viewport/blob/master/examples/common.js)
- [ES2015 module import](https://github.com/ony3000/vuex-viewport/blob/master/examples/esm.js) - This example uses `mapState` helper and  `mapGetters` helper.

## License
[MIT License](https://github.com/ony3000/vuex-viewport/blob/master/LICENSE)
