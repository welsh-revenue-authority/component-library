import "../src/styles/global.css";
import ValidationTooltip from "../src/components/ValidationTooltip.vue";
import Checkbox from "../src/components/Checkbox.vue";
import CheckboxGroup from "../src/components/CheckboxGroup.vue";
import ContentSectionTitle from "../src/components/ContentSectionTitle.vue";
import Radio from "../src/components/Radio.vue";
import RadioGroup from "../src/components/RadioGroup.vue";
import Select from "../src/components/Select.vue";
import Subheader from "../src/components/Subheader.vue";
import TextArea from "../src/components/TextArea.vue";
import Header from "../src/components/Header.vue";
import Button from "../src/components/Button.vue";
import DateInput from "../src/components/DateInput.vue";
import NumberInput from "../src/components/NumberInput.vue";
import PriceInput from "../src/components/PriceInput.vue";
import TextInput from "../src/components/TextInput.vue";
import Tabs from "../src/components/Tabs.vue";
import Breadcrumbs from "../src/components/Breadcrumbs.vue";
import Autocomplete from "../src/components/Autocomplete.vue";
import ExpansionPanel from "../src/components/ExpansionPanel.vue";

export {
  ValidationTooltip as WraValidationTootip,
  Checkbox as WraCheckbox,
  CheckboxGroup as WraCheckboxGroup,
  ContentSectionTitle as WraContentSectionTitle,
  Radio as WraRadio,
  RadioGroup as WraRadioGroup,
  Select as WraSelect,
  Subheader as WraSubheader,
  TextArea as WraTextArea,
  Header as WraHeader,
  Button as WraButton,
  DateInput as WraDateInput,
  NumberInput as WraNumberInput,
  PriceInput as WraPriceInput,
  TextInput as WraTextInput,
  Tabs as WraTabs,
  Breadcrumbs as WraBreadcrumbs,
  Autocomplete as WraAutocomplete,
  ExpansionPanel as WraExpansionPanel
};

// Default import
const components = {
  WraValidationTooltip: ValidationTooltip,
  WraCheckbox: Checkbox,
  WraCheckboxGroup: CheckboxGroup,
  WraContentSectionTitle: ContentSectionTitle,
  WraRadio: Radio,
  WraRadioGroup: RadioGroup,
  WraSelect: Select,
  WraSubheader: Subheader,
  WraTextArea: TextArea,
  WraHeader: Header,
  WraButton: Button,
  WraDateInput: DateInput,
  WraNumberInput: NumberInput,
  WraPriceInput: PriceInput,
  WraTextInput: TextInput,
  WraTabs: Tabs,
  WraBreadcrumbs: Breadcrumbs,
  WraAutocomplete: Autocomplete,
  WraExpansionPanel: ExpansionPanel
};

const plugin = {
  install(Vue) {
    for (const [componentName, component] of Object.entries(components)) {
      Vue.component(componentName, component);
    }
  }
};

export default plugin;
