<template>
  <label :for="id || name">{{ label }}</label>
  <div class="select">
    <select :id="id || name" :value="modelValue" @change="onSelectChange">
      <!-- default placeholder to avoid having a null ID in parent but the select box displaying a value -->
      <option value="" selected disabled hidden>-</option>
      <option
        v-for="item in validItems"
        :value="checkForObjectValue(item)"
        :selected="modelValue == checkForObjectValue(item)"
      >
        <!-- if using the advanced v-slot:label -->
        <span v-if="!!$slots.label">
          <slot :item="item" name="label"></slot>
        </span>

        <!-- else use the item-label prop -->
        <span v-else>
          {{ checkForObjectLabel(item) }}
        </span>
      </option>
    </select>
    <span class="focus"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-select",
  props: {
    /**
     * The array of options to display in the select dropdown.
     */
    items: {
      type: Array as PropType<any[]>,
      required: true,
      default: () => []
    },
    /**
     * The property name to use as the value from each option object.
     */
    itemValue: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The property name to use as the label from each option object.
     */
    itemLabel: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The unique id for the select input and label association.
     */
    id: {
      type: String as PropType<string>
    },
    /**
     * The name attribute for the select input.
     */
    name: {
      type: String as PropType<string>,
      default: "select"
    },
    /**
     * If true, the select is required and must have a value.
     */
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * The label text displayed above the select input.
     */
    label: {} as PropType<string>,
    /**
     * The v-model binding for the selected value.
     */
    modelValue: {
      required: true
    }
  },
  methods: {
    onSelectChange(event: Event): void {
      const target = event.target as HTMLSelectElement | null;
      const value = target ? target.value : "";
      this.validate(value);
    },
    validate(value: any): void {
      this.$emit("update:modelValue", value);

      //check if value exists in the item array
      const exists = this.validItems.some((item: any) => {
        return this.checkForObjectValue(item) == value;
      });

      if (this.required == true && exists == false) {
        this.$emit("valid", { id: this.id || this.name, value: false });
        return;
      }
      this.$emit("valid", { id: this.id || this.name, value: true });
    },
    checkForObjectValue(input: any): any {
      //check if item is an object
      if (typeof input === "object") {
        return input[this.itemValue];
      } else {
        return input;
      }
    },
    checkForObjectLabel(input: any): any {
      //check if item is an object
      if (typeof input === "object") {
        return input[this.itemLabel];
      } else {
        return input;
      }
    }
  },
  computed: {
    validItems(): any[] {
      return this.items ?? [];
    }
  },
  mounted() {
    // Run validation rules when component is first rendered, as v-model data might be valid/invalid
    this.validate(this.modelValue);
  },
  emits: ["update:modelValue", "valid"]
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  padding: 10px;
}

.select {
  border: 1px solid var(--color-wra-black);
  border-radius: 0;
  padding-right: 10px;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.15;
  background-color: #fff;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
}

.select::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: var(--color-wra-black);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}

select,
.select:after {
  grid-area: select;
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--color-wra-black);
  outline: 3px solid var(--color-wra-yellow);
  border-radius: inherit;
}

label {
  color: var(--color-wra-black);
  font-size: 16px;
}
</style>
