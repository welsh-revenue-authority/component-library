<template>
  <div>
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
            <span v-if="localSortBy && localSortBy[0].key === header.key">
              {{ localSortBy[0].order === "asc" ? "▲" : "▼" }}
            </span>
            <span
              v-else
              v-if="header.sortable == true || header.sortable == undefined"
              class="sort-icons">
              ▲
            </span>
          </th>
        </tr>
      </thead>

      <tbody v-if="loading == true">
        <tr>
          <td class="text-center" :colspan="headers.length">Loading...</td>
        </tr>
      </tbody>

      <tbody v-else v-if="$slots.body">
        <slot name="body" :items="paginatedArray"></slot>
      </tbody>

      <tbody
        v-else
        v-for="item in paginatedArray"
        :class="{
          clickable: $attrs['onClick:row'] != undefined
        }"
        @click="$emit('click:row', item)">
        <slot
          name="item"
          v-if="$slots.item"
          :item="item"
          :items="paginatedArray"></slot>
        <tr v-else>
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
  </div>
</template>

<script>
export default {
  props: ["items", "headers", "sortBy", "itemsPerPage", "loading", "search"],
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
    filteredItems() {
      if (this.search == undefined || this.search == "") {
        return this.items;
      }

      const searchLowercased = this.search.toLowerCase();

      const relevantHeaders = this.headers.map((header) => header.key);

      return this.items.filter((item) =>
        relevantHeaders.some((header) =>
          String(item[header]).toLowerCase().includes(searchLowercased)
        )
      );
    },
    sortedArray() {
      if (this.localSortBy != undefined) {
        //sort-by is [{ key: 'submittedDate', order: 'desc' }]
        let localCopy = JSON.parse(JSON.stringify(this.filteredItems));
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
  border-collapse: collapse; /* Collapse borders, get rid of border gaps */
}

th {
  border-bottom: 1px solid rgb(226, 226, 226);
  padding: 15px;
}

td {
  border-bottom: 1px solid rgb(226, 226, 226);
  padding: 15px;
}

.clickable {
  cursor: pointer;
}

.sort-icons {
  visibility: hidden;
  opacity: 0.3;
}

th:hover .sort-icons {
  visibility: visible;
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
