import WraRadioGroup from "../components/RadioGroup.vue";

export default {
  title: "Form Inputs & Controls/RadioGroup",
  component: WraRadioGroup,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    groupName: "groupName",
    options: [
      { value: "OptionOne", label: "Option 1" },
      { value: "OptionTwo", label: "Option 2" }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-radio-group
  group-name="groupName"
  :options="options"
></wra-radio-group>
        `
      }
    }
  }
};

export const InfoText = {
  args: {
    groupName: "groupName",
    options: [
      { value: "OptionOne", label: "Option 1", info: "This is option 1" },
      { value: "OptionTwo", label: "Option 2", info: "This is option 2" }
    ]
  },
  parameters: {
    docs: {
      source: {
        code: `
<wra-radio-group
  group-name="groupName"
  :options="options"
></wra-radio-group>

<script>
export default {
  data: () => ({
    options: [
      { value: "OptionOne", label: "Option 1", info: "This is option 1" },
      { value: "OptionTwo", label: "Option 2", info: "This is option 2" }
    ]
  })
}
</script>
        `
      }
    }
  }
};
