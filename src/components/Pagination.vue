<template>
  <div class="pagination">
    <button class="pagination-button" @click="decPage()">
      <slot name="previous">
        <!-- Standard content -->
        <span class="pagination-icon previous-icon"></span>
        <span>{{ previousLabel }}</span>
      </slot>
    </button>

    <!-- Skip to start buttons -->
    <template v-if="skipStart">
      <button
        v-if="skipStart"
        @click="changePage(startIndex)"
        class="pagination-number"
      >
        {{ startIndex }}
      </button>
      <slot name="divider">
        <span class="pagination-divider">...</span>
      </slot>
    </template>

    <button
      v-for="page in viewablePages"
      @click="changePage(page)"
      @keydown.left="onKeyLeft()"
      @keydown.right="onKeyRight()"
      :ref="page"
      class="pagination-number"
      :class="currentPage === page && 'pagination-number--selected'"
    >
      {{ page }}
    </button>

    <template v-if="skipEnd">
      <span class="pagination-divider">...</span>
      <button @click="changePage(totalPages)" class="pagination-number">
        {{ totalPages }}
      </button>
    </template>

    <button class="pagination-button" @click="incPage()">
      <slot name="next">
        <span>{{ nextLabel }}</span>
        <span class="pagination-icon next-icon"></span>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "wra-pagination",
  data: () => ({
    currentPage: 0
  }),
  props: {
    modelValue: {
      type: Number,
      required: true,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      default: 5
    },
    skip: {
      type: Boolean,
      default: true
    },
    startIndex: {
      type: Number,
      default: 1
    },
    previousLabel: {
      type: String,
      default: "Previous"
    },
    nextLabel: {
      type: String,
      default: "Next"
    }
  },
  methods: {
    incPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit("update:modelValue", this.currentPage);
      }
    },
    decPage() {
      if (this.currentPage >= this.startIndex + 1) {
        this.currentPage--;
        this.$emit("update:modelValue", this.currentPage);
      }
    },
    changePage(page) {
      this.currentPage = page;
      this.$emit("update:modelValue", this.currentPage);
      this.$nextTick(() => {
        if (!this.$refs?.[page]?.[0]) {
          console.log("No ref found for page", page);
        }
        this.$refs[page][0].focus();
      });
    },
    onKeyLeft() {
      if (this.currentPage > this.startIndex + 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    onKeyRight() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    }
  },
  emits: ["update:modelValue"],
  computed: {
    pageArray() {
      return Array.from(
        { length: this.totalPages },
        (_, i) => i + this.startIndex
      );
    },
    viewablePages() {
      return this.pageArray.slice(
        Math.max(0, this.currentPage - Math.ceil(this.length / 2)),
        Math.min(
          this.totalPages,
          this.currentPage + Math.trunc(this.length / 2)
        )
      );
    },
    skipStart() {
      let visibleRange = Math.ceil(this.length / 2) + this.startIndex;
      return this.skip && this.currentPage >= visibleRange;
    },
    skipEnd() {
      let visibleRange =
        this.totalPages - Math.floor(this.length / 2) - this.startIndex;
      return this.skip && this.currentPage <= visibleRange;
    }
  },
  watch: {
    modelValue(newValue) {
      this.changePage(newValue);
    }
  },
  created() {
    this.currentPage = this.modelValue;
  }
};
</script>

<style scoped>
.pagination-button {
  background-color: transparent;
  color: var(--color-wra-revenue);
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.pagination-button > *:first-child {
  margin-right: 8px;
}

.pagination-button:hover,
.pagination-number:hover {
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.pagination-button:focus,
.pagination-number:focus {
  color: var(--color-wra-black);
  background-color: #ffd530;
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: #ffd530;
}

.pagination-button:focus:hover,
.pagination-number:focus:hover {
  opacity: 1;
}

.pagination-number {
  color: #2a2a2a;
  background-color: #f1f1f1;
  padding: 8px;
  font-weight: 700;
  border: none;
  font-size: 18px;
  cursor: pointer;
  min-width: 3rem;
  text-align: center;
}

.pagination-number:hover {
  color: #2a2a2a;
  opacity: 0.8;
}

.pagination-number--selected {
  background-color: var(--color-wra-revenue);
  color: white;
}

.pagination-number--selected:hover:not(:focus) {
  color: white;
}

.pagination-divider {
  font-size: 18px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.pagination-icon {
  content: " ";
  display: inline-block;
  border: solid currentColor;
  padding: 4px;
  vertical-align: middle;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom: 3px;
}

.previous-icon {
  border-width: 3px 3px 0px 0px;
}

.next-icon {
  border-width: 0px 0px 3px 3px;
}
</style>
