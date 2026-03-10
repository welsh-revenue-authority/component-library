import "@/styles/global.css";
import "@/styles/tailwind.css";

// Alphabetical order
import WraAppBar from "@/components/WraAppBar.vue";
import WraAutocomplete from "@/components/WraAutocomplete.vue";
import WraBanner from "@/components/WraBanner.vue";
import WraBreadcrumbs from "@/components/WraBreadcrumbs.vue";
import WraButton from "@/components/WraButton.vue";
import WraCard from "@/components/WraCard.vue";
import WraCheckbox from "@/components/WraCheckbox.vue";
import WraCheckboxGroup from "@/components/WraCheckboxGroup.vue";
import WraContentAccordion from "@/components/WraContentAccordion.vue";
import WraContentSectionTitle from "@/components/WraContentSectionTitle.vue";
import WraCustomInput from "@/components/WraCustomInput.vue";
import WraDataTable from "@/components/WraDataTable.vue";
import WraDateInput from "@/components/WraDateInput.vue";
import WraDialog from "@/components/WraDialog.vue";
import WraDivider from "@/components/WraDivider.vue";
import WraExpansionPanel from "@/components/WraExpansionPanel.vue";
import WraFileUpload from "@/components/WraFileUpload.vue";
import WraFooter from "@/components/WraFooter.vue";
import WraHeader from "@/components/WraHeader.vue";
import WraIcon from "@/components/WraIcon.vue";
import WraInset from "@/components/WraInset.vue";
import WraNumberInput from "@/components/WraNumberInput.vue";
import WraPagination from "@/components/WraPagination.vue";
import WraPriceInput from "@/components/WraPriceInput.vue";
import WraRadioGroup from "@/components/WraRadioGroup.vue";
import WraSelect from "@/components/WraSelect.vue";
import WraSeparateDateInput from "@/components/WraSeparateDateInput.vue";
import WraServiceBar from "@/components/WraServiceBar.vue";
import WraServiceLogo from "@/components/WraServiceLogo.vue";
import WraSimpleTable from "@/components/WraSimpleTable.vue";
import WraSkipLink from "@/components/WraSkipLink.vue";
import WraSnackbar from "@/components/WraSnackbar.vue";
import WraSubheader from "@/components/WraSubheader.vue";
import WraTable from "@/components/WraTable.vue";
import WraTabs from "@/components/WraTabs.vue";
import WraTextArea from "@/components/WraTextArea.vue";
import WraTextInput from "@/components/WraTextInput.vue";
import WraValidationTooltip from "@/components/WraValidationTooltip.vue";
import WraTag from "@/components/WraTag.vue";

export type { TextInputValidationRule } from "@/components/WraTextInput.vue";
export type { AutocompleteOption } from "@/components/WraAutocomplete.vue";
export type { CheckboxOption } from "@/components/WraCheckboxGroup.vue";
export type {
  DataTableHeader,
  DataTableSort
} from "@/components/WraDataTable.vue";
export type { RuleFunction } from "@/components/WraNumberInput.vue";
export type { RadioOption } from "@/components/WraRadio.vue";
export type { TableHeader, TableItem } from "@/components/WraTable.vue";
export type { TextAreaValidationRule } from "@/components/WraTextArea.vue";

export {
  WraAppBar,
  WraAutocomplete,
  WraBanner,
  WraBreadcrumbs,
  WraButton,
  WraCard,
  WraCheckbox,
  WraCheckboxGroup,
  WraContentAccordion,
  WraContentSectionTitle,
  WraCustomInput,
  WraDataTable,
  WraDateInput,
  WraDialog,
  WraDivider,
  WraExpansionPanel,
  WraFileUpload,
  WraFooter,
  WraHeader,
  WraIcon,
  WraInset,
  WraNumberInput,
  WraPagination,
  WraPriceInput,
  WraRadioGroup,
  WraSelect,
  WraSeparateDateInput,
  WraServiceBar,
  WraServiceLogo,
  WraSimpleTable,
  WraSkipLink,
  WraSnackbar,
  WraSubheader,
  WraTable,
  WraTabs,
  WraTag,
  WraTextArea,
  WraTextInput,
  WraValidationTooltip
};

// Default import
const components = {
  WraAppBar,
  WraAutocomplete,
  WraBanner,
  WraBreadcrumbs,
  WraButton,
  WraCard,
  WraCheckbox,
  WraCheckboxGroup,
  WraContentAccordion,
  WraContentSectionTitle,
  WraCustomInput,
  WraDataTable,
  WraDateInput,
  WraDialog,
  WraDivider,
  WraExpansionPanel,
  WraFileUpload,
  WraFooter,
  WraHeader,
  WraIcon,
  WraInset,
  WraNumberInput,
  WraPagination,
  WraPriceInput,
  WraRadioGroup,
  WraSelect,
  WraSeparateDateInput,
  WraServiceBar,
  WraServiceLogo,
  WraSimpleTable,
  WraSkipLink,
  WraSnackbar,
  WraSubheader,
  WraTable,
  WraTabs,
  WraTag,
  WraTextArea,
  WraTextInput,
  WraValidationTooltip
};

const plugin = {
  install(Vue) {
    for (const [componentName, component] of Object.entries(components)) {
      Vue.component(componentName, component);
    }
  }
};

export default plugin;
