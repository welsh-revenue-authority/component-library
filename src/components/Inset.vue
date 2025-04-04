<template>
  <div class="wra-inset" :class="colour">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Inset component
 *
 * This component provides a styled inset with a colored border.
 * The color of the border can be customized using the `colour` prop.
 */
export default {
  name: "wra-inset",
  props: {
    /**
     * The color of the left border.
     * @type {string}
     * @default "blue"
     * @validator value {string} - The color must be one of ["light-blue", "blue", "light-green", "green", "light-red", "red", "light-yellow", "yellow", "grey", "revenue"].
     */
    colour: {
      type: String,
      default: "blue",
      validate(value) {
        return [
          "light-blue",
          "blue",
          "light-green",
          "green",
          "light-red",
          "red",
          "light-yellow",
          "yellow",
          "grey",
          "revenue-blue"
        ].includes(value);
      }
    }
  }
};
</script>

<style scoped>
.wra-inset {
  padding: 20px 16px 20px 16px;
  border-left-width: 10px;
  border-left-style: solid;
}

.wra-inset.blue {
  border-left-color: var(--color-wra-blue);
}

.wra-inset.light-blue {
  border-left-color: var(--color-wra-light-blue);
}

.wra-inset.red {
  border-left-color: var(--color-wra-red);
}

.wra-inset.light-red {
  border-left-color: var(--color-wra-light-red);
}

.wra-inset.green {
  border-left-color: var(--color-wra-green);
}

.wra-inset.light-green {
  border-left-color: var(--color-wra-light-green);
}

.wra-inset.yellow {
  border-left-color: var(--color-wra-yellow);
}

.wra-inset.light-yellow {
  border-left-color: var(--color-wra-light-yellow);
}

.wra-inset.grey {
  border-left-color: var(--color-wra-grey);
}

.wra-inset.revenue-blue {
  border-left-color: var(--color-wra-revenue);
}
</style>
