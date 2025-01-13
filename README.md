# Welsh Revenue Authority Component Library

Vue component library created by Welsh Revenue Authority

[![NPM Version](https://img.shields.io/npm/v/%40wra-gov%2Fvue-components)](https://www.npmjs.com/package/@wra-gov/vue-components)
[![Cypress Tests](https://github.com/welsh-revenue-authority/component-library/actions/workflows/cypress-tests.yml/badge.svg?branch=main)](https://github.com/welsh-revenue-authority/component-library/actions/workflows/cypress-tests.yml)

## Installation

Dependencies:

- Vue 3
- maska

Install,

`npm install @wra/vue-components`

## Usage

### Default import

`main.js`,

```js
import { createApp } from "vue";
import App from "./App.vue";
import Wra from "@wra-gov/vue-components";

const app = createApp(App);

// Global registration of all components
app.use(Wra);

app.mount("#app");
```

### Named imports

Options API:

`*.vue`,

```html
<script>
  import WraButton from "@wra-gov/vue-components";

  export default {
    components: {
      WraButton,
    },
  };
</script>
```

Composition API:

`*.vue`,

```html
<script setup>
  import { WraButton } from "@wra-gov/vue-components";
</script>

...
```

### Nuxt usage

Create a plugin in `/plugins/component-library.js`,

```js
import WraComponents from "@wra-gov/vue-components";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(WraComponents);
});
```

## Documentation

[Storybook documentation](https://welsh-revenue-authority.github.io/component-library)

## Licence and Copyright

WRA component library is available under [Open Government 3.0 licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
