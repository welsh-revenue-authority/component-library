import "../src/styles/global.css";

import ValidationTooltip from "./components/ValidationTooltip.vue";
import Checkbox from "./components/Checkbox.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import ContentSectionTitle from "./components/ContentSectionTitle.vue";
import Radio from "./components/Radio.vue";
import RadioGroup from "./components/RadioGroup.vue";
import Select from "./components/Select.vue";
import Subheader from "./components/Subheader.vue";
import TextArea from "./components/TextArea.vue";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import DateInput from "./components/DateInput.vue";
import NumberInput from "./components/NumberInput.vue";
import PriceInput from "./components/PriceInput.vue";
import TextInput from "./components/TextInput.vue";
import Banner from "./components/Banner.vue";
import Snackbar from "./components/Snackbar.vue";
import ExpansionPanel from "./components/ExpansionPanel.vue";
import Divider from "./components/Divider.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import Autocomplete from "./components/Autocomplete.vue";
import SimpleTable from "./components/SimpleTable.vue";
import Footer from "./components/Footer.vue";

const components = {
  ValidationTooltip,
  Checkbox,
  CheckboxGroup,
  ContentSectionTitle,
  Radio,
  RadioGroup,
  Select,
  Subheader,
  TextArea,
  Header,
  Button,
  DateInput,
  NumberInput,
  PriceInput,
  TextInput,
  Banner,
  Snackbar,
  ExpansionPanel,
  Divider,
  Breadcrumbs,
  Autocomplete,
  SimpleTable,
  Footer
};

export default (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};
