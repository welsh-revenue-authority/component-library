import type { Meta, StoryObj } from "@storybook/vue3-vite";
import WraRadioGroup from "../components/RadioGroup.vue";

const meta: Meta<typeof WraRadioGroup> = {
  title: "Form Inputs & Controls/RadioGroup",
  component: WraRadioGroup,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof WraRadioGroup>;

export const Default: Story = {
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

export const InfoText: Story = {
  args: {
    groupName: "groupName",
    options: [
      {
        value: "OptionOneInfoText",
        label: "Option 1",
        info: "This is option 1"
      },
      {
        value: "OptionTwoInfoText",
        label: "Option 2",
        info: "This is option 2"
      }
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
