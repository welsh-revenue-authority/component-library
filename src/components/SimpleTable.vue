<template>
  <div
    class="wra-simple-table-wrapper"
    :class="{
      'wra-simple-table-inherit': inheritBackground,
      'wra-simple-table-no-padding': inheritBackground
    }"
  >
    <table
      class="wra-simple-table"
      :class="{ 'left-align-headers': leftAlignHeaders }"
    >
      <caption
        v-if="caption"
        class="wra-simple-table-caption"
        :class="{ 'caption-no-padding': inheritBackground }"
      >
        <slot name="caption">
          <!-- Fallback prop -->
          {{ caption }}
        </slot>
      </caption>
      <slot>
        <!-- For table rows headers etc. -->
      </slot>
    </table>
  </div>
</template>

<script>
export default {
  name: "wra-simple-table",
  props: {
    /**
     * If true, the table inherits its background from its parent and removes external padding.
     */
    inheritBackground: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    },
    /**
     * If true, table header cells are left-aligned. Otherwise, they use centre alignment.
     */
    leftAlignHeaders: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.wra-simple-table-wrapper {
  padding: 0px 16px 16px 16px;
  background-color: var(--color-wra-light-grey);
}

/* Remove external padding when inherit background is used */
.wra-simple-table-no-padding {
  padding: 0 !important;
}

.left-align-headers {
  text-align: left;
}

.wra-simple-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px;
  padding-left: 0px;
  font-weight: bold;
  font-size: 20px;
}

/* Remove external padding when inherit background is used */
.caption-no-padding {
  padding: 0 0 16px 0 !important;
}

.wra-simple-table {
  width: 100%;
  line-height: 20px;
  color: var(--color-wra-black);
  border-spacing: 0;
  table-layout: auto;
}

.wra-simple-table-inherit {
  background-color: inherit;
}

.wra-simple-table > thead > tr > th {
  border-bottom: 2px solid var(--color-wra-dark-grey);
}

.wra-simple-table > tbody > tr > td,
.wra-simple-table > tbody > tr > th {
  border-bottom: 1px solid var(--color-wra-dark-grey);
}

.wra-simple-table td,
.wra-simple-table th {
  padding: 16px;
}

.wra-simple-table > thead > tr > th:first-child,
.wra-simple-table > tbody > tr > th:first-child,
.wra-simple-table > tbody > tr > td:first-child {
  padding-left: 0;
}

.wra-simple-table > thead > tr > th:last-child,
.wra-simple-table > tbody > tr > th:last-child,
.wra-simple-table > tbody > tr > td:last-child {
  padding-right: 0;
}
</style>
