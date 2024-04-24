<template>
  <table class="wra-table" :class="{ 'wra-table-inherit': inheritBackground }">
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
  name: "wra-table",
  props: {
    inheritBackground: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.right-align {
  text-align: right;
}

.wra-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
}

.wra-table {
  width: 100%;
  line-height: 20px;
  background-color: #f1f1f1;
  text-align: left;
  color: #1f1f1f;
}

.wra-table-inherit {
  background-color: inherit;
}

.wra-table th,
.wra-table td {
  border-bottom: thin solid #0000001f;
}

.wra-table td,
.wra-table th,
.wra-table td,
.wra-table th {
  padding: 16px;
}
</style>
