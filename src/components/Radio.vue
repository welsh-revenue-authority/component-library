<template>
  <div>
    <label :for="id ?? groupName + '-' + option.value" class="radio-label">
      <input
        type="radio"
        :name="groupName"
        :value="option.value"
        :id="id ?? groupName + '-' + option.value"
        @change="onChange"
        class="radio-input"
        :checked="isChecked == true"
        :aria-checked="isChecked"
      />
      <span class="radio-text">
        <p>{{ option.label }}</p>
        <p
          v-if="option.info"
          class="further-information-text"
          v-html="option.info"
        ></p>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface RadioOption {
  label: string;
  value: string | number;
  info?: string;
  id?: string;
}

export default defineComponent({
  name: "wra-radio",
  props: {
    groupName: {
      type: String as PropType<string>,
      required: true
    },
    option: {
      type: Object as PropType<RadioOption>,
      required: true,
      default: () => ({ label: "", value: "" }),
      validator: function (value: RadioOption) {
        return Object.hasOwn(value, "label") && Object.hasOwn(value, "value");
      }
    },
    isChecked: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    id: {
      type: String as PropType<string | undefined>,
      required: false
    }
  },
  methods: {
    onChange() {
      // if this.$parent is null, throw exception
      if (!this.$parent) {
        throw new Error("Parent component not found");
      }
      // Emit the value directly to the parent
      this.$parent.$emit("update:modelValue", this.option.value);
    }
  }
});
</script>

<style scoped>
.radio-label {
  background: var(--color-wra-grey);
  padding: 20px 20px 20px 20px;
  min-height: 24px;
  display: grid;
  cursor: pointer;
  grid-template-columns: 20px auto;
}

.radio-label:hover {
  background: var(--color-wra-mid-grey);
}

.radio-input {
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: var(--color-wra-black);
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-wra-black);
  border-radius: 50%;
  transform: translateY(1px);
  display: grid;
  place-content: center;
}

.radio-input::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: var(--color-wra-black);
}

.radio-input:checked::before {
  transform: scale(1);
}

.radio-input:focus {
  outline: 2px solid var(--color-wra-black);
  background-color: var(--color-wra-yellow);
}

.radio-input:focus-visible {
  outline-offset: 0px;
}

.radio-text {
  padding: 0px 0px 0px 10px;
  font-size: 18px;
}

.further-information-text {
  font-size: 14px;
}

p {
  margin: 0px;
}
</style>
