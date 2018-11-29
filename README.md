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

### Examples
The first example does not require a separate configuration, and the rest requires module bundler.
- [Loading library via script tag](https://github.com/ony3000/vuex-viewport/blob/master/examples/old-school.html)
- [CommonJS module require](https://github.com/ony3000/vuex-viewport/blob/master/examples/common.js)
- [ES2015 module import](https://github.com/ony3000/vuex-viewport/blob/master/examples/esm.js) - This example uses `mapState` helper and  `mapGetters` helper.
