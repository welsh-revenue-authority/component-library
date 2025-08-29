<template>
  <div role="radiogroup" :aria-label="label" :aria-describedby="hint">
    <wra-radio
      :groupName="groupName"
      v-for="option in validOptions"
      :option="option"
      :key="option.value"
      class="radio"
      :isChecked="checkInput(option.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import WraRadio from "./Radio.vue";

interface RadioOption {
  label: string;
  value: string | number;
  info?: string;
}

export default defineComponent({
  name: "wra-radio-group",
  props: {
    /**
     * The name attribute for the radio group, used to group radio buttons together.
     */
    groupName: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The v-model binding for the selected radio value.
     */
    modelValue: {
      type: [String, Number] as PropType<string | number>
    },
    /**
     * The array of options to display as radio buttons.
     */
    options: {
      type: Array as PropType<RadioOption[]>,
      required: true,
      default: () => []
    },
    /**
     * The label text for the radio group, used for accessibility.
     */
    label: {
      type: String as PropType<string>
    },
    /**
     * The hint or description for the radio group, referenced by aria-describedby.
     */
    hint: {
      type: String as PropType<string>
    }
  },
  methods: {
    checkInput(optionValue: string | number): boolean {
      return optionValue == this.modelValue;
    }
  },
  components: {
    WraRadio
  },
  computed: {
    validOptions(): RadioOption[] {
      return this.options ?? [];
    }
  }
});
</script>

<style scoped>
.radio:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}
</style>
