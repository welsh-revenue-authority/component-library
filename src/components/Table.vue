<template>
  <table
    id="regular"
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
    <thead>
      <tr>
        <th v-for="header in headers">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td v-for="(value, key) in item" :key="key">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>

  <table id="pivoted" class="wra-table">
    <caption v-if="caption" class="wra-table-caption">
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
    },
    leftAlignHeaders: {
      type: Boolean,
      default: true
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

#pivoted {
  text-align: left;
}

/* Add bottom border beneath each item */
#pivoted > tbody > tr:last-child > td,
#pivoted > tbody > tr:last-child > th {
  border-bottom: 1px solid #666666;
}

/* Overwrite styling from #regular table */
#pivoted > tbody > tr:not(:last-child) > td,
#pivoted > tbody > tr:not(:last-child) > th {
  border-bottom: none;
}

/* Remove bottom border from last item */
#pivoted > tbody:last-child > tr:last-child > td,
#pivoted > tbody:last-child > tr:last-child > th {
  border-bottom: none;
}

#pivoted table {
  width: 100%;
}

#pivoted > table > tr > th,
#pivoted > table > tr > td {
  width: 50%;
}
</style>
