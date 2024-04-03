import Autocomplete from "../components/Autocomplete.vue";

export default {
  title: "All/Autocomplete",
  component: Autocomplete,
  argTypes: {
    minLength: {
      control: {
        type: "number",
        min: 0,
      },
    },
  },
  decorators: [
    () => ({
      template:
        "<div style='margin: 20px; margin-bottom: 200px'><story /></div>",
    }),
  ],
  tags: ["autodocs"],
};

let councilArray = [
  {
    value: "Blaenau Gwent",
    label: "Blaenau Gwent",
  },
  {
    value: "Bridgend",
    label: "Bridgend",
  },
  {
    value: "Caerphilly",
    label: "Caerphilly",
  },
  {
    value: "Cardiff",
    label: "Cardiff",
  },
  {
    value: "Carmarthenshire",
    label: "Carmarthenshire",
  },
  {
    value: "Ceredigion",
    label: "Ceredigion",
  },
  {
    value: "Conwy",
    label: "Conwy",
  },
  {
    value: "Denbighshire",
    label: "Denbighshire",
  },
  {
    value: "Flintshire",
    label: "Flintshire",
  },
  {
    value: "Gwynedd",
    label: "Gwynedd",
  },
  {
    value: "Isle of Anglesey",
    label: "Isle of Anglesey",
  },
  {
    value: "Merthyr Tydfil",
    label: "Merthyr Tydfil",
  },
  {
    value: "Monmouthshire",
    label: "Monmouthshire",
  },
  {
    value: "Neath Port Talbot",
    label: "Neath Port Talbot",
  },
  {
    value: "Newport",
    label: "Newport",
  },
  {
    value: "Pembrokeshire",
    label: "Pembrokeshire",
  },
  {
    value: "Powys",
    label: "Powys",
  },
  {
    value: "Rhondda Cynon Taf",
    label: "Rhondda Cynon Taf",
  },
  {
    value: "Swansea",
    label: "Swansea",
  },
  {
    value: "Torfaen",
    label: "Torfaen",
  },
  {
    value: "Vale of Glamorgan",
    label: "Vale of Glamorgan",
  },
  {
    value: "Wrexham",
    label: "Wrexham",
  },
];

export const Default = {
  args: {
    label: "This is an autocomplete",
    id: "test-autocomplete",
    options: councilArray,
  },
};

export const Autoexpand = {
  args: {
    label: "This is an autocomplete that expands when clicked",
    id: "test-autocomplete-autoexpand",
    autoExpand: true,
    options: councilArray,
  },
};
