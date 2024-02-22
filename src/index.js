import ValidationTooltip from "./components/ValidationTooltip.vue";
import Checkbox from "./components/Checkbox.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import ContentSectionTitle from "./components/ContentSectionTitle.vue";
import Radio from "./components/Radio.vue";
import RadioGroup from "./components/RadioGroup.vue";
import Select from "./components/Select.vue";
import SelectObject from "./components/SelectObject.vue";

const components = {
  ValidationTooltip,
  Checkbox,
  CheckboxGroup,
  ContentSectionTitle,
  Radio,
  RadioGroup,
  Select,
  SelectObject
};

export default (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};
