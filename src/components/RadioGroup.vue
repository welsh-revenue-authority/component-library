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
export default {
  name: "wra-radio-group",
  props: {
    groupName: {
      required: true
    },
    modelValue: {},
    options: {
      required: true,
      type: Array
    },
    label: {},
    hint: {}
  },
  methods: {
    checkInput: function (optionValue) {
      if (optionValue == this.modelValue) {
        return "true";
      } else {
        return "false";
      }
    }
  }
};
</script>

<style scoped>
.radio:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}
</style>
