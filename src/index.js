import "../src/styles/global.css";

//Alphabetical order
import AppBar from "./components/AppBar.vue";
import Autocomplete from "./components/Autocomplete.vue";
import Banner from "./components/Banner.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";
import ContentSectionTitle from "./components/ContentSectionTitle.vue";
import DateInput from "./components/DateInput.vue";
import Divider from "./components/Divider.vue";
import ExpansionPanel from "./components/ExpansionPanel.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Icon from "./components/Icon.vue";
import NumberInput from "./components/NumberInput.vue";
import PriceInput from "./components/PriceInput.vue";
import RadioGroup from "./components/RadioGroup.vue";
import Select from "./components/Select.vue";
import ServiceLogo from "./components/ServiceLogo.vue";
import SimpleTable from "./components/SimpleTable.vue";
import Snackbar from "./components/Snackbar.vue";
import Subheader from "./components/Subheader.vue";
import Table from "./components/Table.vue";
import Tabs from "./components/Tabs.vue";
import TextArea from "./components/TextArea.vue";
import TextInput from "./components/TextInput.vue";
import ValidationTooltip from "./components/ValidationTooltip.vue";

const components = {
  AppBar,
  Autocomplete,
  Banner,
  Breadcrumbs,
  Button,
  Checkbox,
  CheckboxGroup,
  ContentSectionTitle,
  DateInput,
  Divider,
  ExpansionPanel,
  Footer,
  Header,
  Icon,
  NumberInput,
  PriceInput,
  RadioGroup,
  Select,
  ServiceLogo,
  SimpleTable,
  Snackbar,
  Subheader,
  Table,
  Tabs,
  TextArea,
  TextInput,
  ValidationTooltip
};

export default (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};
