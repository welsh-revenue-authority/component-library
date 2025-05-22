<template>
  <table
    id="regular"
    class="wra-table"
    :class="{
      'wra-table-inherit': inheritBackground,
      'wra-table-no-padding': inheritBackground
    }"
    v-bind="$attrs"
  >
    <caption
      v-if="caption"
      class="wra-table-caption"
      :class="{ 'caption-no-padding': inheritBackground }"
    >
      <slot name="caption">
        <!-- Fallback prop -->
        {{ caption }}
      </slot>
    </caption>
    <thead>
      <tr>
        <th
          v-for="header in headers"
          :key="header.key"
          :style="{
            textAlign: header.align || 'left',
            width: header.width + 'px'
          }"
        >
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" :class="{ bold: item.bold }">
        <td
          v-for="header in headers"
          :key="header.key"
          :style="{ textAlign: header.align || 'left' }"
        >
          {{ item[header.key] }}
        </td>
      </tr>
    </tbody>
  </table>

  <table
    id="pivoted"
    class="wra-table"
    :class="{
      'wra-table-inherit': inheritBackground,
      'wra-table-no-padding': inheritBackground
    }"
    v-bind="$attrs"
  >
    <caption
      v-if="caption"
      class="wra-table-caption"
      :class="{ 'caption-no-padding': inheritBackground }"
    >
      <slot name="caption">
        <!-- Fallback prop -->
        {{ caption }}
      </slot>
    </caption>
    <tbody v-for="item in items" :key="item.id">
      <tr v-for="(header, index) in headers" :key="index">
        <th>{{ header.title }}</th>
        <td>{{ item[header.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "wra-table",
  props: {
    inheritBackground: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    },
    headers: {
      type: Array
    },
    items: {
      type: Array
    }
  }
};
</script>

<style>
@media screen and (min-width: 600px) {
  #regular {
    display: table;
  }

  #pivoted {
    display: none;
  }
}

@media screen and (max-width: 599px) {
  #regular {
    display: none;
  }

  #pivoted {
    display: table;
  }
}

@media print {
  #regular {
    display: table;
  }

  #pivoted {
    display: none;
  }
}

.bold {
  font-weight: bold;
}

.wra-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px;
  font-weight: bold;
  font-size: 20px;
}

/* Remove external padding when inherit background is used */
.caption-no-padding {
  padding: 0 0 16px 0 !important;
}

.wra-table {
  width: 100%;
  line-height: 20px;
  background-color: var(--color-wra-light-grey);
  color: var(--color-wra-black);
  border-spacing: 0;
  padding: 0px 16px 16px 16px;
  table-layout: auto;
}

/* Remove external padding when inherit background is used */
.wra-table-no-padding {
  padding: 0 !important;
}

.wra-table td,
.wra-table th {
  word-break: break-word;
}

.wra-table-inherit {
  background-color: inherit;
}

.wra-table > thead > tr > th {
  border-bottom: 2px solid var(--color-wra-dark-grey);
}

.wra-table > tbody > tr > td,
.wra-table > tbody > tr > th {
  border-bottom: 1px solid var(--color-wra-dark-grey);
}

.wra-table td,
.wra-table th {
  padding: 16px;
}

.wra-table > thead > tr > th:first-child,
.wra-table > tbody > tr > td:first-child {
  padding-left: 0;
}
.wra-table > thead > tr > th:last-child,
.wra-table > tbody > tr > td:last-child {
  padding-right: 0;
}

#pivoted {
  table-layout: fixed;
  text-align: left;
}

/* Add bottom border beneath each item */
#pivoted > tbody > tr:last-child > td,
#pivoted > tbody > tr:last-child > th {
  border-bottom: 1px solid var(--color-wra-dark-grey);
}

/* Overwrite styling from #regular table */
#pivoted > tbody > tr:not(:last-child) > td,
#pivoted > tbody > tr:not(:last-child) > th {
  border-bottom: none;
}

#pivoted > tbody > tr > th {
  padding-left: 0;
}

#pivoted table {
  width: 100%;
}

#pivoted > table > tr > th,
#pivoted > table > tr > td {
  width: 50%;
}
</style>
