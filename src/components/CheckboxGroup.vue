<template>
  <div
    role="checkbox"
    class="checkbox"
    :aria-label="checkForObjectLabel(option)"
    v-for="option in validOptions"
  >
    <label :for="checkForObjectValue(option)" class="checkbox-label">
      <input
        class="checkbox-input"
        type="checkbox"
        :id="checkForObjectValue(option)"
        :checked="checked[checkForObjectValue(option)]"
        :aria-checked="checked[checkForObjectValue(option)]"
        @change="checkInput(checkForObjectValue(option))"
      />
      <span class="checkbox-text">
        <p>{{ checkForObjectLabel(option) }}</p>
        <p
          v-if="checkForObjectInfo(option)"
          class="further-information-text"
          v-html="checkForObjectInfo(option)"
        ></p>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, InputHTMLAttributes, PropType } from "vue";
import WraCheckbox from "./Checkbox.vue";

export type CheckboxOption =
  | Record<string, InputHTMLAttributes["value"]>
  | string;

export default defineComponent({
  name: "wra-checkbox-group",
  props: {
    /**
     * The v-model binding for the checkbox group. Should be an array of selected values or objects.
     */
    modelValue: {
      type: Array as PropType<CheckboxOption[]>,
      default: () => []
    },
    /**
     * The array of options to display as checkboxes.
     */
    options: {
      type: Array as PropType<CheckboxOption[]>,
      required: true,
      default: () => []
    },
    /**
     * The property name to use as the value from each option object.
     */
    itemValue: {
      type: String as PropType<string>,
      required: true,
      default: "value"
    },
    /**
     * The property name to use as the label from each option object.
     */
    itemLabel: {
      type: String as PropType<string>,
      required: true,
      default: "label"
    },
    /**
     * The property name to use as the further info text from each option object.
     */
    itemInfo: {
      type: String as PropType<string>,
      required: false,
      default: "info"
    },
    /**
     * If true, the emitted value will be an array of option objects instead of values.
     */
    returnObject: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  data() {
    return {
      checked: {} as Record<string, boolean>,
      value: [] as CheckboxOption[]
    };
  },
  methods: {
    checkInput(value: string) {
      this.checked[value] = !this.checked[value];

      //create array of only 'true' values from this.checked
      let checkedArray: CheckboxOption[] = [];
      //loop through this.checked object
      if (this.returnObject === true) {
        Object.keys(this.checked).forEach((key: string) => {
          const element = this.checked[key];
          if (element === true) {
            for (let index = 0; index < this.validOptions.length; index++) {
              const option = this.validOptions[index];
              //check if item is an object
              if (typeof option === "object") {
                if (option[this.itemValue] == key) {
                  checkedArray.push(option);
                }
              } else {
                if (option == key) {
                  checkedArray.push(option);
                }
              }
            }
          }
        });
      } else {
        checkedArray = Object.keys(this.checked).filter(
          (key) => this.checked[key]
        );
      }

      this.$emit("update:modelValue", checkedArray);
    },
    checkForObjectLabel(input: CheckboxOption): string {
      if (typeof input === "object") {
        return input[this.itemLabel];
      } else {
        return input;
      }
    },
    checkForObjectInfo(input: CheckboxOption): string | null {
      if (typeof input === "object") {
        return input[this.itemInfo];
      } else {
        return null;
      }
    },
    checkForObjectValue(input: CheckboxOption): string {
      if (typeof input === "object") {
        return input[this.itemValue];
      } else {
        return input;
      }
    }
  },
  computed: {
    validOptions(): CheckboxOption[] {
      return this.options ?? [];
    }
  },
  mounted() {
    //sets up which values should be checked initially e.g. if editing existing data
    this.value = this.modelValue ?? [];
    for (let index = 0; index < this.value.length; index++) {
      const element = this.value[index];
      if (typeof element === "object") {
        this.checked[element[this.itemValue]] = true;
      } else {
        this.checked[element] = true;
      }
    }
  },
  components: {
    WraCheckbox
  }
});
</script>

<style scoped>
.checkbox:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}

.checkbox-label {
  background: var(--color-wra-grey);
  padding: 20px 20px 20px 20px;
  min-height: 24px;
  display: flex;
  cursor: pointer;
  line-height: 1.375rem;

  display: grid;
  grid-template-columns: 20px auto;
}

.checkbox-label:hover {
  background: var(--color-wra-mid-grey);
}

.checkbox-input {
  cursor: pointer;

  appearance: none;
  background-color: #fff;
  margin: 0;

  color: var(--color-wra-black);
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-wra-black);
  border-radius: 0px;
  transform: translateY(1px);

  display: grid;
  place-content: center;
}

.checkbox-input::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 0px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: var(--color-wra-black);

  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox-input:checked::before {
  transform: scale(1);
}

.checkbox-input:focus {
  outline: 2px solid var(--color-wra-black);
  background-color: var(--color-wra-yellow);
}

.checkbox-input:focus-visible {
  outline-offset: 0px;
}

.checkbox-text {
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
