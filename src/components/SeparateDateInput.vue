<template>
  <fieldset role="group">
    <div
      class="date-input-container"
      :style="{
        '--day-input-width': dayInputWidth,
        '--month-input-width': monthInputWidth,
        '--year-input-width': yearInputWidth
      }"
    >
      <!-- Day input -->
      <div class="date-input__item">
        <label :for="`${id}-day`" class="date-input__label">{{
          dayLabel
        }}</label>
        <input
          ref="dayInput"
          :id="`${id}-day`"
          type="text"
          class="date-input__input date-input__input--width-2"
          :value="day"
          :inputmode="inputmode"
          :placeholder="placeholderDay"
          maxlength="2"
          @input="onDayInput"
        />
      </div>

      <!-- Month input -->
      <div class="date-input__item">
        <label :for="`${id}-month`" class="date-input__label">{{
          monthLabel
        }}</label>
        <input
          ref="monthInput"
          :id="`${id}-month`"
          type="text"
          class="date-input__input date-input__input--width-2"
          :value="month"
          :inputmode="inputmode"
          :placeholder="placeholderMonth"
          maxlength="2"
          @input="onMonthInput"
        />
      </div>

      <!-- Year input -->
      <div class="date-input__item">
        <label :for="`${id}-year`" class="date-input__label">{{
          yearLabel
        }}</label>
        <input
          ref="yearInput"
          :id="`${id}-year`"
          type="text"
          class="date-input__input date-input__input--width-4"
          :value="year"
          :inputmode="inputmode"
          :placeholder="placeholderYear"
          maxlength="4"
          @input="onYearInput"
        />
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-separate-date-input",
  props: {
    /**
     * The value of the date input (Date object or ISO string).
     * @required
     * @default null
     */
    modelValue: {
      type: [String, Object, null] as PropType<string | Date | null>,
      required: true,
      default: null
    },
    /**
     * The label for the day input field.
     * @type {string}
     * @default "Day"
     */
    dayLabel: {
      type: String as PropType<string>,
      required: false,
      default: "Day"
    },
    /**
     * The label for the month input field.
     * @type {string}
     * @default "Month"
     */
    monthLabel: {
      type: String as PropType<string>,
      required: false,
      default: "Month"
    },
    /**
     * The label for the year input field.
     * @type {string}
     * @default "Year"
     */
    yearLabel: {
      type: String as PropType<string>,
      required: false,
      default: "Year"
    },
    /**
     * The ID for the input fields.
     * @type {string}
     * @required
     * @default "dateInput"
     */
    id: {
      type: String as PropType<string>,
      required: true,
      default: "dateInput"
    },
    /**
     * The input mode for the input fields.
     * @type {string}
     * @default "numeric"
     * @validator value {string} - The input mode must be "numeric".
     */
    inputmode: {
      type: String as PropType<
        | "numeric"
        | "search"
        | "text"
        | "email"
        | "tel"
        | "url"
        | "none"
        | "decimal"
      >,
      default: "numeric",
      validator(value: string) {
        return [
          "numeric",
          "search",
          "text",
          "email",
          "tel",
          "url",
          "none",
          "decimal"
        ].includes(value);
      }
    },
    /**
     * Placeholder for day input field.
     * @type {string}
     * @default "DD"
     */
    placeholderDay: {
      type: String as PropType<string>,
      required: false,
      default: "DD"
    },
    /**
     * Placeholder for month input field.
     * @type {string}
     * @default "MM"
     */
    placeholderMonth: {
      type: String as PropType<string>,
      required: false,
      default: "MM"
    },
    /**
     * Placeholder for year input field.
     * @type {string}
     * @default "YYYY"
     */
    placeholderYear: {
      type: String as PropType<string>,
      required: false,
      default: "YYYY"
    },
    /**
     * Automatically advance focus to the next field when max characters are reached.
     * @type {boolean}
     * @default false
     */
    autoAdvance: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    /**
     * Maximum width for day input field.
     * @type {string}
     * @default "47px"
     */
    dayInputWidth: {
      type: String as PropType<string>,
      required: false,
      default: "47px"
    },
    /**
     * Maximum width for month input field.
     * @type {string}
     * @default "47px"
     */
    monthInputWidth: {
      type: String as PropType<string>,
      required: false,
      default: "47px"
    },
    /**
     * Maximum width for year input field.
     * @type {string}
     * @default "72px"
     */
    yearInputWidth: {
      type: String as PropType<string>,
      required: false,
      default: "72px"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      day: "" as string,
      month: "" as string,
      year: "" as string
    };
  },
  watch: {
    modelValue(newValue: string | Date | null) {
      if (newValue !== this.getDateObject()) {
        this.setInitialState();
      }
    }
  },
  methods: {
    /**
     * Gets the current date object from the component state.
     */
    getDateObject(): Date | null {
      if (!this.day || !this.month || !this.year) {
        return null;
      }
      const d = parseInt(this.day);
      const m = parseInt(this.month);
      const y = parseInt(this.year);

      if (isNaN(d) || isNaN(m) || isNaN(y)) {
        return null;
      }

      const date = new Date(y, m - 1, d);
      // Remove timezone offset
      return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
    },
    /**
     * Handles day input.
     */
    onDayInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      const value = target.value.replace(/\D/g, "");
      this.day = value.slice(0, 2);
      this.emitUpdate();

      // Auto-advance to month field if max length reached
      if (this.autoAdvance && this.day.length === 2) {
        this.$nextTick(() => {
          (this.$refs.monthInput as HTMLInputElement)?.focus();
        });
      }
    },
    /**
     * Handles month input.
     */
    onMonthInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      const value = target.value.replace(/\D/g, "");
      this.month = value.slice(0, 2);
      this.emitUpdate();

      // Auto-advance to year field if max length reached
      if (this.autoAdvance && this.month.length === 2) {
        this.$nextTick(() => {
          (this.$refs.yearInput as HTMLInputElement)?.focus();
        });
      }
    },
    /**
     * Handles year input.
     */
    onYearInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      const value = target.value.replace(/\D/g, "");
      this.year = value.slice(0, 4);
      this.emitUpdate();
    },
    /**
     * Emits the update with the constructed date object.
     */
    emitUpdate(): void {
      const dateObject = this.getDateObject();
      this.$emit("update:modelValue", dateObject);
    },
    /**
     * Sets the initial state based on modelValue prop.
     */
    setInitialState(): void {
      if (
        typeof this.modelValue === "undefined" ||
        this.modelValue == null ||
        this.modelValue === ""
      ) {
        this.day = "";
        this.month = "";
        this.year = "";
        return;
      }

      let date: Date;
      if (typeof this.modelValue === "object") {
        date = this.modelValue as Date;
      } else if (typeof this.modelValue === "string") {
        date = new Date(this.modelValue);
      } else {
        this.day = "";
        this.month = "";
        this.year = "";
        return;
      }

      if (isNaN(date.getTime())) {
        this.day = "";
        this.month = "";
        this.year = "";
        return;
      }

      this.day = date.getDate().toString().padStart(2, "0");
      this.month = (date.getMonth() + 1).toString().padStart(2, "0");
      this.year = date.getFullYear().toString();
    }
  },
  mounted() {
    this.setInitialState();
  }
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

.date-input-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.date-input__item {
  flex-grow: 0;
  flex-shrink: 0;
  width: auto;
}

.date-input__label {
  color: var(--color-wra-black);
  font-size: 16px;
  display: block;
  width: 100%;
  margin-bottom: 4px;
  font-weight: 400;
}

.date-input__input {
  font-size: 16px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--color-wra-black);
  line-height: 1.15;
  display: block;
  width: 100%;
}

.date-input__input:focus {
  border-color: var(--color-wra-black);
  outline: 1px solid var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

.date-input__input--width-2 {
  max-width: var(--day-input-width, 47px);
}

.date-input__input--width-4 {
  max-width: var(--year-input-width, 72px);
}
</style>
