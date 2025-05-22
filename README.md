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
      WraButton
    }
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

### Tailwind Usage

By default registering the component library imports the CSS variables.

However, to use the colours the component library provides in Tailwind helper
classes like this,

```html
<div class="bg-wra-blue"></div>
```

The component library's Tailwind stylesheet must be imported. The instructions
are created for Tailwind 4+. The CSS file must be the file imported by `index.html`

`tailwind.css` / `index.css`/ `style.css`

```css
@import "tailwindcss";
@import "@wra-gov/vue-components/tailwind.css";
```

## Documentation

[Storybook documentation](https://welsh-revenue-authority.github.io/component-library)

## Licence and Copyright

WRA component library is available under [Open Government 3.0 licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
