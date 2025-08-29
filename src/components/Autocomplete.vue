<template>
  <div class="autocomplete">
    <label :for="id" class="autocomplete-label" v-if="label">
      {{ label }}
    </label>
    <input
      inputmode="text"
      ref="autocompleteInput"
      v-model="userInput[optionLabel]"
      role="combobox"
      aria-autocomplete="list"
      :aria-expanded="showOptions"
      aria-controls="autocomplete-list"
      :aria-activedescendant="
        optionIndex !== null ? `option${optionIndex}` : undefined
      "
      autocomplete="off"
      :id="id"
      class="autocomplete-input"
      :class="{ 'autocomplete-input--focus': hasFocus }"
      @input="onInputTyping()"
      @focus="hasFocus = true"
      @blur="onBlur"
      @keydown.prevent.up="onUpKey"
      @keydown.prevent.down="onDownKey"
    />
    <ul
      v-show="showOptions"
      role="listbox"
      id="autocomplete-list"
      class="autocomplete-list"
    >
      <li
        v-for="(option, index) in filterOptions"
        :ref="`option${index}`"
        :id="`option${index}`"
        role="option"
        tabindex="-1"
        :aria-selected="index === optionIndex"
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

<script lang="ts">
import { defineComponent } from "vue";

interface Option {
  [key: string]: any;
  clickable?: boolean;
}

export default defineComponent({
  name: "wra-autocomplete",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object as () => Record<string, any>
    },
    /** Label for autocomplete */
    label: {
      type: String as () => string
    },
    /** ID tag for input*/
    id: {
      type: String as () => string
    },
    /** Options for autocomplete list */
    options: {
      type: Array as () => Option[],
      required: true
    },
    /** Change the default object name for the data */
    optionValue: {
      type: String as () => string,
      default: "value"
    },
    /** Change the default object name for the displayed value */
    optionLabel: {
      type: String as () => string,
      default: "label"
    },
    /** Mininum number of characters before the list appears */
    minLength: {
      type: Number as () => number,
      default: 1
    },
    /** If true, list will automatically expand when input is focused */
    autoExpand: {
      type: Boolean as () => boolean,
      default: false
    }
  },
  data() {
    return {
      userInput: {} as Record<string, any>,
      hasFocus: false as boolean,
      listHasFocus: false as boolean,
      optionIndex: null as number | null,
      validatedOptions: [] as Option[]
    };
  },
  methods: {
    /** Handle typing in the input field */
    onInputTyping(): void {
      this.optionIndex = null;
      this.userInput[this.optionValue] = this.getInputValue;
      this.$emit("update:modelValue", this.userInput);
    },
    /** Handle selecting an option from the list */
    onOptionSelect(option: Option): void {
      if (option?.clickable === false) {
        return;
      }
      this.userInput = Object.assign({}, option);
      this.$emit("update:modelValue", this.userInput);
    },
    /** Handle blur event on the input */
    onBlur(): void {
      if (this.listHasFocus === false) {
        this.hasFocus = false;
      }
    },
    /** Handle blur event on an option */
    onOptionBlur(index: number): void {
      if (index === this.optionIndex) {
        this.hasFocus = false;
        this.listHasFocus = false;
      }
    },
    /** Handle up arrow key navigation */
    onUpKey(): void {
      if (this.optionsHasMatches === false || this.showOptions === false) {
        return;
      }
      if (this.optionIndex === 0) {
        this.optionIndex = null;
        this.listHasFocus = false;
        (this.$refs["autocompleteInput"] as HTMLInputElement).focus();
      } else if (this.optionIndex !== null && this.optionIndex > 0) {
        this.optionIndex--;
        this.listHasFocus = true;
        const refName = `option${this.optionIndex}`;
        const ref = (this.$refs[refName] as HTMLElement[])[0];
        ref && ref.focus();
      }
    },
    /** Handle down arrow key navigation */
    onDownKey(): void {
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
      const ref = (this.$refs[refName] as HTMLElement[])[0];
      ref && ref.focus();
    }
  },
  computed: {
    showOptions(): boolean {
      const inputMatchesOption = this.validatedOptions.some(
        (element) =>
          element[this.optionLabel] === this.userInput[this.optionLabel]
      );
      const inputLongEnough =
        (this.userInput[this.optionLabel] || "").length >= this.minLength;
      const showOptions =
        inputMatchesOption !== true &&
        this.hasFocus === true &&
        (this.autoExpand === true || inputLongEnough === true);
      return showOptions;
    },
    filterOptions(): Option[] {
      const searchForInput = this.validatedOptions.filter((item) =>
        (item[this.optionLabel] || "")
          .toLowerCase()
          .includes(this.getInputValue)
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
    optionsHasMatches(): boolean {
      return this.filterOptions.every((item) =>
        Object.hasOwn(item, "clickable") ? item.clickable === true : true
      );
    },
    getInputValue(): string {
      return (this.userInput[this.optionLabel] || "").toLowerCase();
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
  },
  watch: {
    options: {
      handler(newOptions: Option[]) {
        this.validatedOptions = newOptions ?? [];
      },
      immediate: true
    }
  }
});
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
  font-size: 16px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--color-wra-black);
  line-height: 1.15;
  display: block;
  width: 100%;
}

.autocomplete-input:disabled {
  opacity: 0.3;
}

.autocomplete-input--focus {
  border-color: var(--color-wra-black);
  outline: 1px solid var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

.autocomplete-label {
  color: var(--color-wra-black);
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
  border: 1px solid var(--color-wra-black);
  border-top: 0px;
  width: 100%;
  max-height: 200px;
  background: var(--color-wra-light-grey);
  overflow-y: auto;
}

.autocomplete-list > li {
  font-size: 16px;
  padding: 2px 10px;
  border-bottom: 1px solid var(--color-wra-black);
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
  background: var(--color-wra-blue);
  color: #ffffff;
}

.autocomplete-item-not-clickable {
  cursor: not-allowed;
}

.autocomplete {
  position: relative;
}
</style>
