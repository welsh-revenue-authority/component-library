<template>
  <table
    class="wra-table"
    :class="{
      'wra-table-inherit': inheritBackground,
      'left-align-headers': leftAlignHeaders
    }"
  >
    <caption v-if="caption" class="wra-table-caption">
      <slot name="caption">
        <!-- Fallback prop -->
        {{ caption }}
      </slot>
    </caption>
    <slot> </slot>
  </table>
</template>

<script>
export default {
  name: "wra-simple-table",
  props: {
    inheritBackground: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    },
    leftAlignHeaders: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.left-align-headers {
  text-align: left;
}

.wra-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px;
  font-weight: bold;
  font-size: 20px;
}

.wra-table {
  width: 100%;
  line-height: 20px;
  background-color: #f1f1f1;
  color: #1f1f1f;
  border-spacing: 0;
  padding: 0px 16px 16px 16px;
  table-layout: auto;
}

.wra-table-inherit {
  background-color: inherit;
}

.wra-table > thead > tr > th {
  border-bottom: 2px solid #666666;
}

.wra-table > tbody > tr > td,
.wra-table > tbody > tr > th {
  border-bottom: 1px solid #666666;
}

.wra-table td,
.wra-table th {
  padding: 16px;
}

.wra-table > thead > tr > th:first-child,
.wra-table > tbody > tr > th:first-child,
.wra-table > tbody > tr > td:first-child {
  padding-left: 0;
}

.wra-table > thead > tr > th:last-child,
.wra-table > tbody > tr > th:last-child,
.wra-table > tbody > tr > td:last-child {
  padding-right: 0;
}
</style>
