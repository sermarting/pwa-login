# pwa-login

A Login example with PWA and Vue 3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

IMPORTANT: If you want to login in app, must add in localStorage one user logged. Otherwise, alert will come out.

For example, you can execute in browser this line:

```
localStorage.setItem('sergio:123', new Date());
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests

unit tests with Mocha + Chai
```
yarn test:unit
```

### Run your end-to-end tests

e2e tests with WebdriverIO

```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
