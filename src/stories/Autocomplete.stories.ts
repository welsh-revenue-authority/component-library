import type { Meta, StoryObj } from "@storybook/vue3";
import Autocomplete from "../components/Autocomplete.vue";

const councilArray = [
  { value: "Blaenau Gwent", label: "Blaenau Gwent" },
  { value: "Bridgend", label: "Bridgend" },
  { value: "Caerphilly", label: "Caerphilly" },
  { value: "Cardiff", label: "Cardiff" },
  { value: "Carmarthenshire", label: "Carmarthenshire" },
  { value: "Ceredigion", label: "Ceredigion" },
  { value: "Conwy", label: "Conwy" },
  { value: "Denbighshire", label: "Denbighshire" },
  { value: "Flintshire", label: "Flintshire" },
  { value: "Gwynedd", label: "Gwynedd" },
  { value: "Isle of Anglesey", label: "Isle of Anglesey" },
  { value: "Merthyr Tydfil", label: "Merthyr Tydfil" },
  { value: "Monmouthshire", label: "Monmouthshire" },
  { value: "Neath Port Talbot", label: "Neath Port Talbot" },
  { value: "Newport", label: "Newport" },
  { value: "Pembrokeshire", label: "Pembrokeshire" },
  { value: "Powys", label: "Powys" },
  { value: "Rhondda Cynon Taf", label: "Rhondda Cynon Taf" },
  { value: "Swansea", label: "Swansea" },
  { value: "Torfaen", label: "Torfaen" },
  { value: "Vale of Glamorgan", label: "Vale of Glamorgan" },
  { value: "Wrexham", label: "Wrexham" }
];

const meta: Meta<typeof Autocomplete> = {
  title: "Form Inputs & Controls/Autocomplete",
  component: Autocomplete,
  argTypes: {
    minLength: {
      control: {
        type: "number",
        min: 0
      }
    }
  },
  decorators: [
    () => ({
      template:
        "<div style='margin: 20px; margin-bottom: 200px'><story /></div>"
    })
  ],
  tags: ["autodocs"]
};

export default meta;

type AutocompleteProps = InstanceType<typeof Autocomplete>["$props"];

type Story = StoryObj<AutocompleteProps>;

export const Default: Story = {
  args: {
    label: "This is an autocomplete for Welsh local authorities",
    id: "test-autocomplete",
    options: councilArray
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-autocomplete
  label="This is an autocomplete for Welsh local authorities"
  id="test-autocomplete"
  :options="options"
></wra-autocomplete>
        `
      }
    }
  }
};

export const Autoexpand: Story = {
  args: {
    label:
      "This is an autocomplete showing Welsh local authorities that expands when clicked",
    id: "test-autocomplete-autoexpand",
    autoExpand: true,
    options: councilArray
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-autocomplete
  label="This is an autocomplete for Welsh local authorities"
  id="test-autocomplete"
  :options="options"
  auto-expand
></wra-autocomplete>
        `
      }
    }
  }
};

export const PreFilled: Story = {
  args: {
    label: "This is an autocomplete that is prefilled with a value",
    id: "test-autocomplete-prefill",
    options: councilArray,
    modelValue: { value: "alice-council", label: "Alice's council" }
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-autocomplete
  label="This is an autocomplete for Welsh local authorities"
  id="test-autocomplete"
  :options="options"
  :model-value="modelValue"
></wra-autocomplete>
        `
      }
    }
  }
};
