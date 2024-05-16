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
  padding: 0px 16px 0px 16px;
}

.wra-table-inherit {
  background-color: inherit;
}

.wra-table > thead > tr > th {
  border-bottom: 2px solid #666666;
}
.wra-table > tbody > tr:not(:last-child) > td,
.wra-table > tbody > tr:not(:last-child) > th {
  border-bottom: 1px solid #666666;
}

.wra-table td,
.wra-table th {
  padding: 16px;
}
</style>
