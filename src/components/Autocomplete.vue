<template>
  <div class="autocomplete-wrapper">
    <label :for="id" class="autocomplete-label"> {{ label }}</label>
    <input
      ref="autocompleteInput"
      class="autocomplete-input"
      :class="{ 'autocomplete-input--focus': hasFocus }"
      :id="id"
      v-model="userInput[optionLabel]"
      inputmode="text"
      role="combobox"
      aria-owns="autocomplete-list"
      @input="updateUserInput()"
      @focus="hasFocus = true"
      @blur="onBlur"
      @keydown.prevent.up="onUpKey"
      @keydown.prevent.down="onDownKey"
    />
    <ul role="listbox" v-show="showOptions" class="autocomplete-list">
      <li
        v-for="(option, index) in filterOptions"
        :ref="`option${index}`"
        tabindex="-1"
        :class="{
          'autocomplete-item-not-clickable': option.clickable === false,
          'autocomplete-item--focus': index === optionIndex,
        }"
        @mousedown="fillInput(option)"
        @keydown.prevent.up="onUpKey"
        @keydown.prevent.down="onDownKey"
        @keydown.prevent.enter="fillInput(option)"
        @blur="onOptionBlur(index)"
      >
        {{ option[optionLabel] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "wra-autocomplete",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object,
    },
    /** Label for autocomplete */
    label: {
      type: String,
    },
    /** Input's ID tag */
    id: {
      type: String,
    },
    /** Options for autocomplete list */
    options: {
      type: Object,
      required: true,
    },
    /** Change the default object name in options for the data */
    optionValue: {
      type: String,
      default: "value",
    },
    /** Change the default object name in options for the displayed value */
    optionLabel: {
      type: String,
      default: "label",
    },
    /** Mininum number of characters before the list appears */
    minLength: {
      type: Number,
      default: 1,
    },
    /** If list should automatically expand when input is focused */
    autoExpand: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userInput: {},
    hasFocus: false,
    listHasFocus: false,
    optionIndex: -1,
  }),
  methods: {
    fillInput(option) {
      if (option?.clickable === false) {
        return;
      }
      this.userInput = option;
      this.userInput = Object.assign({}, option);
      this.$emit("update:modelValue", this.userInput);
    },
    updateUserInput() {
      this.userInput[this.optionValue] = this.getInputValue;
      this.$emit("update:modelValue", this.userInput);
    },
    onBlur() {
      if (this.listHasFocus === false) {
        this.hasFocus = false;
      }
    },
    onOptionBlur(index) {
      // If the blur was not for changing between options, remove focus
      if (index === this.optionIndex) {
        this.hasFocus = false;
        this.listHasFocus = false;
      }
    },
    onEnter() {
      if (this.optionIndex >= 0) {
        this.fillInput(this.filterOptions[this.optionIndex]);
      }
    },
    onUpKey() {
      // Activate the index
      if (this.optionIndex == -1) {
        this.optionIndex = 0;
        return;
      }
      this.listHasFocus = true;
      if (this.optionIndex > 0) {
        this.optionIndex--;
        let refName = `option${this.optionIndex}`;
        this.$refs[refName][0].focus();
      }
    },
    onDownKey() {
      // Activate the index
      if (this.optionIndex == -1) {
        this.optionIndex = 0;
        return;
      }
      this.listHasFocus = true;
      if (this.optionIndex < this.filterOptions.length - 1) {
        this.optionIndex++;
        let refName = `option${this.optionIndex}`;
        this.$refs[refName][0].focus();
      }
    },
  },
  computed: {
    showOptions() {
      let alreadyMatched = this.options.some(
        (element) =>
          element[this.optionLabel] === this.userInput[this.optionLabel]
      );
      let inputLongEnough =
        this.userInput[this.optionLabel].length >= this.minLength;
      let shouldExpand =
        (this.autoExpand === true && this.hasFocus === true) || inputLongEnough;

      // Do not show options if we have a match already
      return !alreadyMatched && shouldExpand;
    },
    filterOptions() {
      let filteredOptions = this.options.filter((item) =>
        item.label.toLowerCase().includes(this.getInputValue)
      );
      if (filteredOptions.length > 0) {
        return filteredOptions;
      }
      if (this.autoExpand === true) {
        return this.options;
      }
      filteredOptions.push({
        [this.optionLabel]: "No results found",
        [this.optionValue]: "",
        clickable: false,
      });
      return filteredOptions;
    },
    getInputValue() {
      return this.userInput[this.optionLabel].toLowerCase();
    },
  },
  created() {
    // Set initial value if it is formatted correctly
    if (this.modelValue && Object.keys(this.modelValue).length >= 2) {
      this.userInput = this.modelValue;
      return;
    }
    this.userInput = { label: "", value: "" };
  },
};
</script>

<style scoped>
/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin-block-start: 0px;
  margin-block-end: 0px;
}

.autocomplete-input {
  font-size: 18px;
  padding: 16px 16px;
  background-color: #fff;
  border: 1px solid #1f1f1f;
  border-bottom: 2px solid #1f1f1f;
  line-height: 20px;
  display: block;
  width: 100%;
}

.autocomplete-input:disabled {
  opacity: 0.3;
}

.autocomplete-input--focus {
  border-color: #1f1f1f;
  outline: 1px solid #1f1f1f;
  -webkit-box-shadow: 0 0 0 3px #ffd530;
  -moz-box-shadow: 0 0 0 3px #ffd530;
  box-shadow: 0 0 0 3px #ffd530;
}

.autocomplete-label {
  color: #1f1f1f;
  font-size: 16px;
  display: block;
  margin-bottom: 4px;
}

.autocomplete-list {
  position: absolute;
  display: block;
  list-style-type: none;
  padding: 0;
  border: 1px solid #1f1f1f;
  border-top: 0px;
  width: 100%;
  max-height: 200px;
  background: #f1f1f1;
  overflow-y: auto;
}

.autocomplete-list > li {
  padding: 2px 16px;
  border-bottom: 1px solid #1f1f1f;
  cursor: pointer;
}

.autocomplete-list > li:last-child {
  border-bottom: 0px;
}

.autocomplete-list > li:nth-child(even) {
  background: #ffffff;
}

ul.autocomplete-list > li:hover,
ul.autocomplete-list > li.autocomplete-item--focus {
  background: #3b7dc5;
  color: #ffffff;
}

.autocomplete-item-not-clickable {
  cursor: not-allowed;
}

.autocomplete-wrapper {
  position: relative;
}
</style>
