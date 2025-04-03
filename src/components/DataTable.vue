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
        <tr v-else>
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
      currentPage: 1
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
.wra-data-table-caption {
  background-color: inherit;
  text-align: left;
  padding: 16px 0px;
  font-weight: bold;
  font-size: 20px;
}

.wra-data-table {
  width: 100%;
  border-spacing: 0;
  line-height: 20px;
}

.wra-data-table > thead > tr > th {
  border-bottom: 2px solid #666666;
}

.wra-data-table > tbody > tr > td,
.wra-data-table > tbody > tr > th {
  border-bottom: 1px solid #666666;
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

button {
  background-color: #1f1f1f;
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
  background-color: #ffd530 !important;
  outline: 2px solid #1f1f1f;
  outline-offset: 0px;
  border-color: #ffd530;
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
  border: solid #1f1f1f;
  border-width: 3px 0px 0px 3px;
  margin-left: 4px;
  margin-top: 3px;
}

.wra-chevron-down {
  border: solid #1f1f1f;
  border-width: 0px 3px 3px 0px;
  margin-left: 4px;
  margin-bottom: 6px;
}

button:focus > .wra-chevron-right {
  border: solid #1f1f1f;
  border-width: 3px 3px 0px 0px;
}

button:focus > .wra-chevron-left {
  border: solid #1f1f1f;
  border-width: 0px 0px 3px 3px;
}

.clickable {
  cursor: pointer;
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
  padding: 16px 0px;
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
