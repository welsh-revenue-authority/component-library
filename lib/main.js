import "../src/styles/global.css";
import "../src/styles/tailwind.css";

//Alphabetical order
import AppBar from "../src/components/AppBar.vue";
import Autocomplete from "../src/components/Autocomplete.vue";
import Banner from "../src/components/Banner.vue";
import Breadcrumbs from "../src/components/Breadcrumbs.vue";
import Button from "../src/components/Button.vue";
import Card from "../src/components/Card.vue";
import Checkbox from "../src/components/Checkbox.vue";
import CheckboxGroup from "../src/components/CheckboxGroup.vue";
import ContentSectionTitle from "../src/components/ContentSectionTitle.vue";
import CustomInput from "../src/components/CustomInput.vue";
import DataTable from "../src/components/DataTable.vue";
import DateInput from "../src/components/DateInput.vue";
import Divider from "../src/components/Divider.vue";
import ExpansionPanel from "../src/components/ExpansionPanel.vue";
import FileUpload from "../src/components/FileUpload.vue";
import Footer from "../src/components/Footer.vue";
import Header from "../src/components/Header.vue";
import Icon from "../src/components/Icon.vue";
import Inset from "../src/components/Inset.vue";
import NumberInput from "../src/components/NumberInput.vue";
import Pagination from "../src/components/Pagination.vue";
import PriceInput from "../src/components/PriceInput.vue";
import RadioGroup from "../src/components/RadioGroup.vue";
import Select from "../src/components/Select.vue";
import ServiceLogo from "../src/components/ServiceLogo.vue";
import SimpleTable from "../src/components/SimpleTable.vue";
import SkipLink from "../src/components/SkipLink.vue";
import Snackbar from "../src/components/Snackbar.vue";
import Subheader from "../src/components/Subheader.vue";
import Table from "../src/components/Table.vue";
import Tabs from "../src/components/Tabs.vue";
import TextArea from "../src/components/TextArea.vue";
import TextInput from "../src/components/TextInput.vue";
import ValidationTooltip from "../src/components/ValidationTooltip.vue";

export {
  AppBar as WraAppBar,
  Autocomplete as WraAutocomplete,
  Banner as WraBanner,
  Breadcrumbs as WraBreadcrumbs,
  Button as WraButton,
  Card as WraCard,
  Checkbox as WraCheckbox,
  CheckboxGroup as WraCheckboxGroup,
  ContentSectionTitle as WraContentSectionTitle,
  CustomInput as WraCustomInput,
  DataTable as WraDataTable,
  DateInput as WraDateInput,
  Divider as WraDivider,
  ExpansionPanel as WraExpansionPanel,
  FileUpload as WraFileUpload,
  Footer as WraFooter,
  Header as WraHeader,
  Icon as WraIcon,
  Inset as WraInset,
  NumberInput as WraNumberInput,
  Pagination as WraPagination,
  PriceInput as WraPriceInput,
  RadioGroup as WraRadioGroup,
  Select as WraSelect,
  ServiceLogo as WraServiceLogo,
  SimpleTable as WraSimpleTable,
  SkipLink as WraSkipLink,
  Snackbar as WraSnackbar,
  Subheader as WraSubheader,
  Table as WraTable,
  Tabs as WraTabs,
  TextArea as WraTextArea,
  TextInput as WraTextInput,
  ValidationTooltip as WraValidationTooltip
};

// Default import
const components = {
  WraAppBar: AppBar,
  WraAutocomplete: Autocomplete,
  WraBanner: Banner,
  WraBreadcrumbs: Breadcrumbs,
  WraButton: Button,
  WraCard: Card,
  WraCheckbox: Checkbox,
  WraCheckboxGroup: CheckboxGroup,
  WraContentSectionTitle: ContentSectionTitle,
  WraCustomInput: CustomInput,
  WraDataTable: DataTable,
  WraDateInput: DateInput,
  WraDivider: Divider,
  WraExpansionPanel: ExpansionPanel,
  WraFileUpload: FileUpload,
  WraFooter: Footer,
  WraHeader: Header,
  WraIcon: Icon,
  WraInset: Inset,
  WraNumberInput: NumberInput,
  WraPagination: Pagination,
  WraPriceInput: PriceInput,
  WraRadioGroup: RadioGroup,
  WraSelect: Select,
  WraServiceLogo: ServiceLogo,
  WraSimpleTable: SimpleTable,
  WraSkipLink: SkipLink,
  WraSnackbar: Snackbar,
  WraSubheader: Subheader,
  WraTable: Table,
  WraTabs: Tabs,
  WraTextArea: TextArea,
  WraTextInput: TextInput,
  WraValidationTooltip: ValidationTooltip
};

const plugin = {
  install(Vue) {
    for (const [componentName, component] of Object.entries(components)) {
      Vue.component(componentName, component);
    }
  }
};

export default plugin;
