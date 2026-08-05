<template>
  <div>
    <fieldset class="radio-fieldset" :aria-describedby="hintId">
      <legend v-if="label" class="sr-only">{{ label }}</legend>
      <p v-if="hint" :id="hintId" class="sr-only">{{ hint }}</p>
      <wra-radio
        :groupName="groupName"
        v-for="option in validOptions"
        :option="option"
        :key="option.value"
        class="radio"
        :isChecked="checkInput(option.value)"
        :id="option.id"
      />
    </fieldset>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import WraRadio, { RadioOption } from "./Radio.vue";

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
    hintId(): string | undefined {
      return this.hint ? `${this.groupName}-hint` : undefined;
    },
    validOptions(): RadioOption[] {
      return this.options ?? [];
    }
  }
});
</script>

<style scoped>
.radio-fieldset {
  border: 0;
  margin: 0;
  min-inline-size: 0;
  padding: 0;
}

/* Accessibility */
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.radio:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}
</style>
