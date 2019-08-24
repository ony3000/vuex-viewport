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

### Plugin
If you just added `storemodule` to your store, you need to add some code that continually commits the mutation.  
The named export, `createPlugin`, replaces that code.

```diff
 const store = new Vuex.Store({
   modules: {
     viewport: storeModule
-  }
+  },
+  plugins: [
+    createPlugin()
+  ]
 });
```

That's it! Now the state property and getter mentioned above will be reactive.

The `createPlugin` has some options (supported in 1.1.0+):

Name | Type | Default | Description
---- | ---- | ------- | -----------
delay | Number | 200 | The number of milliseconds to delay to measure the window size. (see [debounce](https://lodash.com/docs/4.17.11#debounce))
maxDelay | Number | 1000 | The maximum number of milliseconds to wait without measuring the size of the window if a series of resizing events does not end. (see [debounce](https://lodash.com/docs/4.17.11#debounce))
breakpoints | Object | { tablet: 768, desktop: 992 } | A set of key-value pairs whose key is the `mediaName` and whose value is the minimum width of the window.

### Examples
The first example does not require a separate configuration.
- [Loading library via script tag](https://github.com/ony3000/vuex-viewport/blob/master/demo.html)
- [CommonJS module require](https://codesandbox.io/s/use-case-commonjs-module-require-u69sj)
- [ES2015 module import](https://codesandbox.io/s/use-case-es2015-module-import-7qf1t) - This example uses `mapState` helper and  `mapGetters` helper.
- [Using with Nuxt.js](https://codesandbox.io/s/use-case-using-with-nuxtjs-ewd0t) - This example uses store in modules mode.

## Caveat
There are other exports named `viewport` and `viewportPlugin`.  
These are the same as `storeModule` and `createPlugin`, respectively.

If you using CDN, you can refer to `vuexViewport.viewport` and `vuexViewport.viewportPlugin`, respectively.  
But I think this notation is bad.  
Therefore, I encourage use `storeModule` and `createPlugin`.

## License
[MIT License](https://github.com/ony3000/vuex-viewport/blob/master/LICENSE)
