import "@/styles/global.css";
import "@/styles/tailwind.css";

// Alphabetical order
import AppBar from "@/components/AppBar.vue";
import Autocomplete from "@/components/Autocomplete.vue";
import Banner from "@/components/Banner.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Checkbox from "@/components/Checkbox.vue";
import CheckboxGroup from "@/components/CheckboxGroup.vue";
import ContentSectionTitle from "@/components/ContentSectionTitle.vue";
import CustomInput from "@/components/CustomInput.vue";
import DataTable from "@/components/DataTable.vue";
import DateInput from "@/components/DateInput.vue";
import Dialog from "@/components/Dialog.vue";
import Divider from "@/components/Divider.vue";
import ExpansionPanel from "@/components/ExpansionPanel.vue";
import FileUpload from "@/components/FileUpload.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Icon from "@/components/Icon.vue";
import Inset from "@/components/Inset.vue";
import NumberInput from "@/components/NumberInput.vue";
import Pagination from "@/components/Pagination.vue";
import PriceInput from "@/components/PriceInput.vue";
import RadioGroup from "@/components/RadioGroup.vue";
import Select from "@/components/Select.vue";
import ServiceLogo from "@/components/ServiceLogo.vue";
import SimpleTable from "@/components/SimpleTable.vue";
import SkipLink from "@/components/SkipLink.vue";
import Snackbar from "@/components/Snackbar.vue";
import Subheader from "@/components/Subheader.vue";
import Table from "@/components/Table.vue";
import Tabs from "@/components/Tabs.vue";
import TextArea from "@/components/TextArea.vue";
import TextInput from "@/components/TextInput.vue";
import ValidationTooltip from "@/components/ValidationTooltip.vue";

export type { TextInputValidationRule } from "@/components/TextInput.vue";
export type { AutocompleteOption } from "@/components/Autocomplete.vue";
export type { CheckboxOption } from "@/components/CheckboxGroup.vue";
export type {
  DataTableHeader,
  DataTableSort
} from "@/components/DataTable.vue";
export type { RuleFunction } from "@/components/NumberInput.vue";
export type { RadioOption } from "@/components/Radio.vue";
export type { TableHeader, TableItem } from "@/components/Table.vue";
export type { TextAreaValidationRule } from "@/components/TextArea.vue";

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
  Dialog as WraDialog,
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
  WraDialog: Dialog,
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
