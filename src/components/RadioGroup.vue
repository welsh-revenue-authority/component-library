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

<script>
import WraRadio from "./Radio.vue";

export default {
  name: "wra-radio-group",
  props: {
    /**
     * The name attribute for the radio group, used to group radio buttons together.
     */
    groupName: {
      type: String,
      required: true
    },
    /**
     * The v-model binding for the selected radio value.
     */
    modelValue: {
      type: String
    },
    /**
     * The array of options to display as radio buttons.
     */
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    /**
     * The label text for the radio group, used for accessibility.
     */
    label: {
      type: String
    },
    /**
     * The hint or description for the radio group, referenced by aria-describedby.
     */
    hint: {
      type: String
    }
  },
  methods: {
    checkInput: function (optionValue) {
      if (optionValue == this.modelValue) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    WraRadio
  },
  computed: {
    validOptions() {
      return this.options ?? [];
    }
  }
};
</script>

<style scoped>
.radio:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}
</style>
