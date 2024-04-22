<template>
  <ul class="wra-breadcrumbs">
    <template v-for="(item, index) in items">
      <li class="wra-breadcrumbs-item">
        <slot>
          <a
            v-if="!item[itemDisabled]"
            :href="item[itemHref]"
            class="wra-breadcrumbs-link"
            >{{ item[itemTitle] }}</a
          >
          <span v-else class="wra-breadcrumbs-link--disabled">{{
            item[itemTitle]
          }}</span>
        </slot>
      </li>
      <li v-if="index !== items.length - 1" class="wra-breadcrumbs-divider">
        <slot name="divider">
          <span class="wra-breadcrumbs-chevron"></span>
        </slot>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "wra-breadcrumbs",
  props: {
    /** Items to display in the breadcrumbs */
    items: {
      type: Array,
      required: true,
    },
    /** Change the default object name in items for the breadcrumb title */
    itemTitle: {
      type: String,
      default: "title",
    },
    /** Change the default object name in items for disabling the breadcrumb */
    itemDisabled: {
      type: String,
      default: "disabled",
    },
    /** Change the default object name in items for the breadcrumb link */
    itemHref: {
      type: String,
      default: "href",
    },
  },
};
</script>

<style scoped>
/* CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
}

.wra-breadcrumbs {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.wra-breadcrumbs-item:not(:last-of-type) {
  margin-right: 10px;
}

.wra-breadcrumbs-divider {
  margin-right: 10px;
  color: #999999;
  /* Add chevron here */
}

.wra-breadcrumbs-link--disabled {
  color: #666666;
}

.wra-breadcrumbs-link {
  text-decoration: none;
  font-weight: bold;
  color: #0360a6;
}

.wra-breadcrumbs-link:hover {
  color: #3b7dc5;
}

.wra-breadcrumbs-chevron {
  /* CSS that creates a chevron */
  content: " ";
  display: inline-block;
  border: solid #999999;
  border-width: 3px 3px 0px 0px;
  padding: 4px;
  vertical-align: middle;
  transition: transform 0.2s ease-out;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
