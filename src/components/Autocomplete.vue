<template>
  <div class="autocomplete">
    <label :for="id" class="autocomplete-label" v-if="label">
      {{ label }}
    </label>
    <input
      ref="autocompleteInput"
      v-model="userInput[optionLabel]"
      role="combobox"
      inputmode="text"
      :id="id"
      class="autocomplete-input"
      :class="{ 'autocomplete-input--focus': hasFocus }"
      aria-owns="autocomplete-list"
      autocomplete="off"
      @input="onInputTyping()"
      @focus="hasFocus = true"
      @blur="onBlur"
      @keydown.prevent.up="onUpKey"
      @keydown.prevent.down="onDownKey"
    />
    <ul v-show="showOptions" role="listbox" class="autocomplete-list">
      <li
        v-for="(option, index) in filterOptions"
        :ref="`option${index}`"
        tabindex="-1"
        :class="{
          'autocomplete-item-not-clickable': option.clickable === false,
          'autocomplete-item--focus': index === optionIndex
        }"
        @mousedown="onOptionSelect(option)"
        @keydown.prevent.up="onUpKey"
        @keydown.prevent.down="onDownKey"
        @keydown.prevent.enter="onOptionSelect(option)"
        @keydown.prevent.space="onOptionSelect(option)"
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
      type: Object
    },
    /** Label for autocomplete */
    label: {
      type: String
    },
    /** Input's ID tag */
    id: {
      type: String
    },
    /** Options for autocomplete list */
    options: {
      type: Object,
      required: true
    },
    /** Change the default object name in options for the data */
    optionValue: {
      type: String,
      default: "value"
    },
    /** Change the default object name in options for the displayed value */
    optionLabel: {
      type: String,
      default: "label"
    },
    /** Mininum number of characters before the list appears */
    minLength: {
      type: Number,
      default: 1
    },
    /** If list should automatically expand when input is focused */
    autoExpand: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    userInput: {},
    hasFocus: false,
    listHasFocus: false,
    optionIndex: null,
    validatedOptions: []
  }),
  methods: {
    onInputTyping() {
      this.optionIndex = null;
      this.userInput[this.optionValue] = this.getInputValue;
      this.$emit("update:modelValue", this.userInput);
    },
    onOptionSelect(option) {
      if (option?.clickable === false) {
        return;
      }
      this.userInput = option;
      this.userInput = Object.assign({}, option);
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
    onUpKey() {
      if (this.optionsHasMatches === false || this.showOptions === false) {
        return;
      }
      if (this.optionIndex === 0) {
        this.optionIndex = null;
        this.listHasFocus = false;
        this.$refs["autocompleteInput"].focus();
      } else if (this.optionIndex > 0) {
        this.optionIndex--;
        this.listHasFocus = true;
        const refName = `option${this.optionIndex}`;
        this.$refs[refName][0].focus();
      }
    },
    onDownKey() {
      if (this.optionsHasMatches === false || this.showOptions === false) {
        return;
      }
      if (this.optionIndex === null) {
        this.optionIndex = 0;
      } else if (this.optionIndex < this.filterOptions.length - 1) {
        this.optionIndex++;
      }
      this.listHasFocus = true;
      const refName = `option${this.optionIndex}`;
      this.$refs[refName][0].focus();
    }
  },
  computed: {
    showOptions() {
      const inputMatchesOption = this.validatedOptions.some(
        (element) =>
          element[this.optionLabel] === this.userInput[this.optionLabel]
      );
      const inputLongEnough =
        this.userInput[this.optionLabel].length >= this.minLength;
      const showOptions =
        inputMatchesOption !== true &&
        this.hasFocus === true &&
        (this.autoExpand === true || inputLongEnough === true);
      return showOptions;
    },
    filterOptions() {
      const searchForInput = this.validatedOptions.filter((item) =>
        item.label.toLowerCase().includes(this.getInputValue)
      );
      if (searchForInput.length > 0) {
        return searchForInput;
      } else if (this.autoExpand === true) {
        return this.validatedOptions;
      }
      searchForInput.push({
        [this.optionLabel]: "No results found",
        [this.optionValue]: "",
        clickable: false
      });
      return searchForInput;
    },
    optionsHasMatches() {
      return this.filterOptions.every((item) =>
        Object.hasOwn(item, "clickable") ? item.clickable === true : true
      );
    },
    getInputValue() {
      return this.userInput[this.optionLabel].toLowerCase();
    }
  },
  created() {
    this.validatedOptions = this.options ?? [];
    // Set initial value if it is formatted correctly
    if (this.modelValue && Object.keys(this.modelValue).length >= 2) {
      this.userInput = this.modelValue;
      return;
    }
    this.userInput[this.optionLabel] = "";
    this.userInput[this.optionValue] = "";
  }
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
  z-index: 1;
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

.autocomplete {
  position: relative;
}
</style>
