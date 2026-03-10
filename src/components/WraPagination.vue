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
      :ref="'page-' + page"
      class="pagination-number"
      :class="currentPage === page && 'pagination-number--selected'"
    >
      {{ page }}
    </button>

    <template v-if="skipEnd">
      <slot name="divider">
        <span class="pagination-divider">...</span>
      </slot>
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

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-pagination",
  data() {
    return {
      currentPage: 0 as number
    };
  },
  props: {
    /**
     * The current page number (v-model).
     */
    modelValue: {
      type: Number as PropType<number>,
      required: true,
      default: 1
    },
    /**
     * The total number of pages available.
     */
    totalPages: {
      type: Number as PropType<number>,
      required: true
    },
    /**
     * The maximum number of page buttons to display at once.
     */
    length: {
      type: Number as PropType<number>,
      default: 5
    },
    /**
     * If true, shows 'skip' controls (divider & jump to start/end).
     */
    skip: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    /**
     * The starting page number (usually 1).
     */
    startIndex: {
      type: Number as PropType<number>,
      default: 1
    },
    /**
     * The label text for the 'previous' button.
     */
    previousLabel: {
      type: String as PropType<string>,
      default: "Previous"
    },
    /**
     * The label text for the 'next' button.
     */
    nextLabel: {
      type: String as PropType<string>,
      default: "Next"
    }
  },
  emits: ["update:modelValue"],
  methods: {
    incPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit("update:modelValue", this.currentPage);
      }
    },
    decPage(): void {
      if (this.currentPage >= this.startIndex + 1) {
        this.currentPage--;
        this.$emit("update:modelValue", this.currentPage);
      }
    },
    changePage(page: number): void {
      this.currentPage = page;
      this.$emit("update:modelValue", this.currentPage);
      this.$nextTick(() => {
        const refKey = `page-${page}`;
        const refEl = this.$refs[refKey] as HTMLElement[] | undefined;
        if (!refEl || !refEl[0]) {
          console.log("No ref found for page", page);
          return;
        }
        refEl[0].focus();
      });
    },
    onKeyLeft(): void {
      if (this.currentPage > this.startIndex + 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    onKeyRight(): void {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    }
  },
  computed: {
    pageArray(): number[] {
      return Array.from(
        { length: this.totalPages },
        (_, i) => i + this.startIndex
      );
    },
    viewablePages(): number[] {
      return this.pageArray.slice(
        Math.max(0, this.currentPage - Math.ceil(this.length / 2)),
        Math.min(
          this.totalPages,
          this.currentPage + Math.trunc(this.length / 2)
        )
      );
    },
    skipStart(): boolean {
      const visibleRange = Math.ceil(this.length / 2) + this.startIndex;
      return this.skip && this.currentPage >= visibleRange;
    },
    skipEnd(): boolean {
      const visibleRange =
        this.totalPages - Math.floor(this.length / 2) - this.startIndex;
      return this.skip && this.currentPage <= visibleRange;
    }
  },
  watch: {
    modelValue(newValue: number) {
      this.changePage(newValue);
    }
  },
  created() {
    this.currentPage = this.modelValue;
  }
});
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
  background-color: var(--color-wra-yellow);
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
}

.pagination-button:focus:hover,
.pagination-number:focus:hover {
  opacity: 1;
}

.pagination-number {
  color: var(--color-wra-black);
  background-color: var(--color-wra-light-grey);
  padding: 8px;
  font-weight: 700;
  border: none;
  font-size: 18px;
  cursor: pointer;
  min-width: 3rem;
  text-align: center;
}

.pagination-number:hover {
  color: var(--color-wra-black);
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
