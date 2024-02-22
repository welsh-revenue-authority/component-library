import ValidationTooltip from "./components/ValidationTooltip.vue";
import Checkbox from "./components/Checkbox.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";

const components = {
  ValidationTooltip,
  Checkbox,
  CheckboxGroup
};

export default (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};
