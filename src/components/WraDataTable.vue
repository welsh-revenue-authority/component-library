<template>
  <table>
    <thead>
      <slot name="headers" v-if="$slots.headers" :headers="headers"></slot>

      <tr v-else>
        <th v-for="header in headers" :key="header.key">
          {{ header.title }}
        </th>
      </tr>
    </thead>

    <tbody v-if="$slots.body">
      <slot name="body" :items="items"></slot>
    </tbody>

    <tbody v-else>
      <slot
        name="item"
        v-if="$slots.item"
        v-for="item in items"
        :item="item"
        :items="items"></slot>
      <tr v-else v-for="item in items">
        <td v-for="header in headers">
          <slot
            :name="`item.${header.key}`"
            :value="item[header.key]"
            :item="item"
            :items="items"
            v-if="$slots['item.' + header.key]"></slot>

          <span v-else>{{ item[header.key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["items", "headers"],
  name: "wra-data-table",
  data() {
    return {};
  }
};
</script>
