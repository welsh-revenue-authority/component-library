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
      required: true
    },
    /** Change the default object name in items for the breadcrumb title */
    itemTitle: {
      type: String,
      default: "title"
    },
    /** Change the default object name in items for disabling the breadcrumb */
    itemDisabled: {
      type: String,
      default: "disabled"
    },
    /** Change the default object name in items for the breadcrumb link */
    itemHref: {
      type: String,
      default: "href"
    }
  }
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

.wra-breadcrumbs-item {
  font-size: 16px;
}

.wra-breadcrumbs-item:not(:last-of-type) {
  margin-right: 10px;
}

.wra-breadcrumbs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: var(--color-wra-dark-grey);
}

.wra-breadcrumbs-link--disabled {
  color: var(--color-wra-dark-grey);
}

.wra-breadcrumbs-link {
  text-decoration: none;
  font-weight: bold;
  color: var(--color-wra-revenue);
}

.wra-breadcrumbs-link:hover {
  opacity: 0.8;
}

.wra-breadcrumbs-link:focus {
  opacity: 1;
  color: var(--color-wra-black);
}

.wra-breadcrumbs-chevron {
  /* CSS that creates a chevron */
  content: " ";
  display: inline-block;
  border: solid var(--color-wra-dark-grey);
  border-width: 3.5px 3.5px 0px 0px;
  padding: 2.5px;
  vertical-align: middle;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
