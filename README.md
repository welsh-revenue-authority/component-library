
# Welsh Revenue Authority Component Library

![NPM Version](https://img.shields.io/npm/v/%40wra-gov%2Fvue-components)

Vue component library created by Welsh Revenue Authority

## Installation

**TODO**

## Usage

> Default import

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

> Named imports

Composition:

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

Options:

`*.vue`,

```html
<script setup>
import { Button } from "@wra-gov/vue-components";
</script>

...
```

## Documentation

[Storybook documentation](https://welsh-revenue-authority.github.io/component-library)

## License and Copyright

WRA component library is available under [Open Government 3.0 licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)
