<template>
  <div role="radiogroup" :aria-label="label" :aria-describedby="hint">
    <wra-radio
      :groupName="groupName"
      v-for="option in options"
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
    groupName: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String
    },
    hint: {
      type: String
    }
  },
  methods: {
    checkInput: function (optionValue) {
      if (optionValue == this.modelValue) {
        return "true";
      } else {
        return "false";
      }
    }
  },
  components: {
    WraRadio
  }
};
</script>

<style scoped>
.radio:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}
</style>
