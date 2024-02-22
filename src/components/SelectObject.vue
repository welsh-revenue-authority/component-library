<template>
  <label :for="id || name">{{ label }}</label>
  <div class="select">
    <select :id="id || name" v-model="internalValue" @change="validate()">
      <!-- default placeholder to avoid having a null ID in parent but the select box displaying a value -->
      <option value="" selected disabled hidden>-</option>
      <option v-for="item in items" :value="item">
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

<script>
export default {
  name: "wra-select",
  props: {
    modelValue: {
      required: true
    },
    items: {
      required: true,
      type: Array
    },
    returnObject: {},
    itemValue: {},
    itemLabel: {},
    id: {},
    name: {},
    required: {},
    label: {}
  },
  data() {
    return {
      internalValue: ""
    };
  },
  methods: {
    validate() {
      let value = this.internalValue;

      if (typeof value === "object" && value != null) {
        if (this.returnObject == true) {
          this.$emit("update:modelValue", value);
        } else {
          this.$emit("update:modelValue", value[this.itemValue]);
        }
      } else {
        this.$emit("update:modelValue", value);
      }
      if (this.required == true) {
        if (typeof value === "object" && value != null) {
          if (value[this.itemValue] == null || value[this.itemValue] == "") {
            this.$emit("valid", { id: this.id || this.name, value: false });
          } else {
            this.$emit("valid", { id: this.id || this.name, value: true });
          }
        } else {
          if (value == null || value == "") {
            this.$emit("valid", { id: this.id || this.name, value: false });
          }
        }
      } else {
        this.$emit("valid", { id: this.id || this.name, value: true });
      }
    },
    checkForObjectLabel(input) {
      //check if item is an object
      if (typeof input === "object") {
        return input[this.itemLabel];
      } else {
        return input;
      }
    }
  },
  mounted() {
    //run validation rules when component is first rendered, as v-model data might be valid/invalid

    //run checks for if you pass a string v-model with an object array of items, makes sure the correct object is selected
    if (typeof this.modelValue === "object" && this.modelValue != null) {
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (typeof element === "object") {
          if (element[this.itemValue] == this.modelValue[this.itemValue]) {
            this.internalValue = element;
            break;
          }
        } else {
          if (element == this.modelValue[this.itemValue]) {
            this.internalValue = element;
            break;
          }
        }
      }
    } else {
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (typeof element === "object") {
          if (element[this.itemValue] == this.modelValue) {
            this.internalValue = element;
            break;
          }
        } else {
          if (element == this.modelValue) {
            this.internalValue = element;
            break;
          }
        }
      }
    }

    //if internal value is still unchanged, set it to the model value
    if (this.internalValue == "") {
      this.internalValue = this.modelValue;
    }

    this.validate();
  },
  emits: ["update:modelValue", "valid"]
};
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
  padding: 16px;
}

.select {
  border: 1px solid #1f1f1f;
  border-radius: 0;
  padding-right: 16px;
  font-size: 16px;
  cursor: pointer;
  line-height: 20px;
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
  background-color: #1f1f1f;
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
  border: 2px solid #1f1f1f;
  outline: 3px solid #ffd530;
  border-radius: inherit;
}

label {
  color: #1f1f1f;
  font-size: 16px;
}
</style>
