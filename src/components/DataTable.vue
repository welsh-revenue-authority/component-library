<template>
  <div>
    <table class="wra-data-table">
      <caption v-if="caption" class="wra-data-table-caption">
        <slot name="caption">
          <!-- Fallback prop -->
          {{ caption }}
        </slot>
      </caption>
      <thead>
        <slot name="headers" v-if="$slots.headerSlot" :headers="headers"></slot>

        <tr v-else>
          <th
            v-for="header in headers"
            :key="header.key"
            @click="
              (header.sortable || header.sortable == undefined) &&
                sortByColumn(header.key)
            "
            :style="{ width: header.width + 'px' }"
            :class="{
              clickable: header.sortable == undefined || header.sortable,
              'text-left': header.align == 'left' || header.align == undefined,
              'text-right': header.align == 'right',
              'text-center': header.align == 'center'
            }"
          >
            {{ header.title }}
            <span v-if="localSortBy && localSortBy[0].key === header.key">
              <span
                :class="{
                  'wra-chevron wra-chevron-up': localSortBy[0].order === 'asc',
                  'wra-chevron wra-chevron-down':
                    localSortBy[0].order === 'desc'
                }"
              ></span>
            </span>
            <span
              v-else
              v-if="header.sortable == true || header.sortable == undefined"
              class="wra-chevron wra-chevron-up sort-icons"
            ></span>

            <!-- Text input for column-specific search -->
            <input
              v-if="header.searchable"
              type="text"
              v-model="columnFilters[header.key]"
              @click.stop
              placeholder="Search..."
              class="column-search-input"
            />
          </th>
        </tr>
      </thead>

      <tbody v-if="loading == true">
        <tr>
          <td class="text-center" :colspan="headers.length">
            <span class="loader"></span>
          </td>
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
        @click="$emit('click:row', item)"
      >
        <slot
          name="item"
          v-if="$slots.item"
          :item="item"
          :items="paginatedArray"
        ></slot>
        <tr v-else :class="{ bold: item.bold }">
          <td
            :class="{
              'text-left': header.align == 'left' || header.align == undefined,
              'text-right': header.align == 'right',
              'text-center': header.align == 'center'
            }"
            v-for="header in headers"
          >
            <slot
              :name="`item.${header.key}`"
              :value="item[header.key]"
              :item="item"
              :items="sortedArray"
              v-if="$slots['item.' + header.key]"
            ></slot>

            <span v-else>{{ item[header.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      Page {{ currentPage }} of {{ totalNumberOfPages }}
      <button
        :disabled="currentPage == 1"
        :class="{
          'disable-button': currentPage == 1
        }"
        @click="currentPage = currentPage - 1"
      >
        <span class="wra-chevron wra-chevron-left"></span>
      </button>
      <button
        :disabled="currentPage == totalNumberOfPages"
        :class="{
          'disable-button': currentPage == totalNumberOfPages
        }"
        @click="currentPage = currentPage + 1"
      >
        <span class="wra-chevron wra-chevron-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "wra-data-table",
  props: {
    items: {
      type: Array
    },
    headers: {
      type: Array
    },
    sortBy: {
      type: Array
    },
    itemsPerPage: {
      type: Number
    },
    loading: {
      type: Boolean
    },
    search: {
      type: String
    },
    caption: {
      type: String
    }
  },
  data() {
    return {
      localSortBy: this.sortBy,
      currentPage: 1,
      columnFilters: {} // Stores search values for each column
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
    localItemsPerPage() {
      return this.itemsPerPage != undefined ? this.itemsPerPage : 10;
    },
    totalNumberOfPages() {
      return Math.ceil(this.sortedArray.length / this.localItemsPerPage);
    },
    paginatedArray() {
      const start = (this.currentPage - 1) * this.localItemsPerPage;
      const end = start + this.localItemsPerPage;
      return this.sortedArray.slice(start, end);
    },
    filteredItems() {
      let filtered = this.items;

      // Apply global search if applicable
      if (this.search) {
        // Reset to first page when filtering
        this.currentPage = 1;
        const searchLowercased = this.search.toLowerCase();
        // Extract key of each column from headers array
        const relevantHeaders = this.headers.map((header) => header.key);

        // Iterate over each row in the filtered array
        filtered = filtered.filter((item) =>
          // Use .some() to check all relevant columns
          relevantHeaders.some((header) =>
            String(item[header]).toLowerCase().includes(searchLowercased)
          )
        );
      }

      // Apply column-specific filters
      // Iterate over columnFilters object where each key corresponds to a column
      Object.keys(this.columnFilters).forEach((key) => {
        const filterValue = this.columnFilters[key]?.toLowerCase();
        if (filterValue) {
          // Reset to first page when filtering
          this.currentPage = 1;
          // Use .filter() to keep only rows where column value matches filter value
          filtered = filtered.filter((item) =>
            String(item[key]).toLowerCase().includes(filterValue)
          );
        }
      });

      return filtered;
    },
    sortedArray() {
      // Always start with the filtered items
      //sort-by is [{ key: 'submittedDate', order: 'desc' }]
      let localCopy = JSON.parse(JSON.stringify(this.filteredItems));

      // If sorting is defined, apply sorting logic
      if (this.localSortBy && this.localSortBy.length > 0) {
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
      }

      // If no sorting is applied, return the filtered items as-is
      return localCopy;
    }
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.wra-data-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px;
  font-weight: bold;
  font-size: 20px;
}

.wra-data-table {
  width: 100%;
  border-spacing: 0;
  line-height: 20px;
  padding: 0px 16px 16px 16px;
  table-layout: auto;
}

.wra-data-table > thead > tr > th {
  border-bottom: 2px solid var(--color-wra-dark-grey);
}

.wra-data-table > tbody > tr > td,
.wra-data-table > tbody > tr > th {
  border-bottom: 1px solid var(--color-wra-dark-grey);
}

.wra-data-table td,
.wra-data-table th {
  padding: 16px;
}

.wra-data-table > thead > tr > th:first-child,
.wra-data-table > tbody > tr > td:first-child {
  padding-left: 0;
}
.wra-data-table > thead > tr > th:last-child,
.wra-data-table > tbody > tr > td:last-child {
  padding-right: 0;
}

.column-search-input {
  margin-top: 12px;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px;
  border: 1px solid var(--color-wra-black);
  line-height: 1.15;
  display: block;
  width: 100%;
}

.column-search-input:focus {
  border-color: var(--color-wra-black);
  outline: 1px solid var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

button {
  background-color: var(--color-wra-black);
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 12px;
  height: 32px;
}

button:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}

button:focus {
  background-color: var(--color-wra-yellow) !important;
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
}

button:focus:hover {
  opacity: 1;
}

.wra-chevron {
  content: " ";
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.wra-chevron-right {
  border: solid #ffffff;
  border-width: 3px 3px 0px 0px;
}

.wra-chevron-left {
  border: solid #ffffff;
  border-width: 0px 0px 3px 3px;
}

.wra-chevron-up {
  border: solid var(--color-wra-black);
  border-width: 3px 0px 0px 3px;
  margin-left: 4px;
  margin-top: 3px;
}

.wra-chevron-down {
  border: solid var(--color-wra-black);
  border-width: 0px 3px 3px 0px;
  margin-left: 4px;
  margin-bottom: 6px;
}

button:focus > .wra-chevron-right {
  border: solid var(--color-wra-black);
  border-width: 3px 3px 0px 0px;
}

button:focus > .wra-chevron-left {
  border: solid var(--color-wra-black);
  border-width: 0px 0px 3px 3px;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  background-color: var(--color-wra-light-grey);
}

.sort-icons {
  visibility: hidden;
  opacity: 0.4;
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

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 16px 16px 16px;
}

.pagination button {
  margin-left: 10px;
}

.disable-button {
  opacity: 0.4;
}

.disable-button:hover {
  opacity: 0.4;
  cursor: default;
}

.loader {
  width: 40px;
  height: 40px;
  border: 5px solid grey;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
