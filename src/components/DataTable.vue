<template>
  <table>
    <thead>
      <slot name="headers" v-if="$slots.headers" :headers="headers"></slot>

      <tr v-else>
        <th
          v-for="header in headers"
          :key="header.key"
          @click="
            (header.sortable || header.sortable == undefined) &&
              sortByColumn(header.key)
          "
          :class="{
            clickable: header.sortable == undefined || header.sortable,
            'text-left': header.align == 'start' || header.align == undefined,
            'text-right': header.align == 'end',
            'text-center': header.align == 'center'
          }">
          {{ header.title }}
        </th>
      </tr>
    </thead>

    <tbody v-if="$slots.body">
      <slot name="body" :items="paginatedArray"></slot>
    </tbody>

    <tbody v-else>
      <slot
        name="item"
        v-if="$slots.item"
        v-for="item in paginatedArray"
        :item="item"
        :items="paginatedArray"></slot>
      <tr v-else v-for="item in paginatedArray">
        <td
          :class="{
            'text-left': header.align == 'start' || header.align == undefined,
            'text-right': header.align == 'end',
            'text-center': header.align == 'center'
          }"
          v-for="header in headers">
          <slot
            :name="`item.${header.key}`"
            :value="item[header.key]"
            :item="item"
            :items="sortedArray"
            v-if="$slots['item.' + header.key]"></slot>

          <span v-else>{{ item[header.key] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
  {{ currentPage }}
  <div>
    <span
      style="border: 1px black solid; padding: 5px"
      v-for="x in totalNumberOfPages"
      class="clickable"
      @click="currentPage = x">
      {{ x }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["items", "headers", "sortBy", "itemsPerPage"],
  name: "wra-data-table",
  data() {
    return {
      localSortBy: this.sortBy,
      currentPage: 1,
      localItemsPerPage: this.itemsPerPage != undefined || 10
    };
  },
  methods: {
    sortByColumn(key) {
      this.localSortBy = [
        {
          key,
          order:
            this.localSortBy &&
            this.localSortBy[0].key === key &&
            this.localSortBy[0].order === "asc"
              ? "desc"
              : "asc"
        }
      ];
    }
  },
  computed: {
    totalNumberOfPages() {
      return Math.ceil(this.items.length / this.localItemsPerPage);
    },
    paginatedArray() {
      const start = (this.currentPage - 1) * this.localItemsPerPage;
      const end = start + this.localItemsPerPage;
      return this.sortedArray.slice(start, end);
    },
    sortedArray() {
      if (this.localSortBy != undefined) {
        //sort-by is [{ key: 'submittedDate', order: 'desc' }]
        let localCopy = structuredClone(toRaw(this.items));
        return localCopy.sort((a, b) => {
          const localSortBy = this.localSortBy[0];
          const aValue = a[localSortBy.key];
          const bValue = b[localSortBy.key];

          // Check for null or undefined values
          if (aValue == null && bValue == null) {
            return 0;
          } else if (aValue == null) {
            return localSortBy.order === "desc" ? 1 : -1;
          } else if (bValue == null) {
            return localSortBy.order === "desc" ? -1 : 1;
          }

          // Compare values
          if (localSortBy.order === "desc") {
            return aValue < bValue ? 1 : -1;
          } else {
            return aValue > bValue ? 1 : -1;
          }
        });
      } else {
        return this.items;
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

.clickable {
  cursor: pointer;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}
</style>
