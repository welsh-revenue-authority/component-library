<template>
  <div class="subheader">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wra-subheader"
};
</script>

<style scoped>
.subheader {
  font-size: 14px;
  letter-spacing: 0.08em;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0px;
  height: unset;
}
</style>
