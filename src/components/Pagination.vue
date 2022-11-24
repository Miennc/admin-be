<template>
  <div>
    <ul class="inline-flex items-center -space-x-px">
      <li
          class="px-3 py-2 ml-0 leading-tight  bg-white border border-r-0 border-gray-200 rounded-l hover:bg-[#00bbf2] hover:text-white"
      >
        <button
            type="button"
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
        >
          Trang đầu
        </button>
      </li>
      <li
          class="px-3 py-2 ml-0 leading-tight bg-white border border-r-0 border-gray-200 hover:bg-[#00bbf2] hover:text-white"
      >
        <button
            type="button"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
        >
          Trang trước
        </button>
      </li>
      <!-- Range of pages -->
      <li v-for="page in pages" :key="page.name">
        <button
            :class="[
            currentPage == page.name
              ? 'px-3 py-2 leading-tight text-white bg-[#00bbf2] border border-r-0 border-gray-200'
              : 'px-3 py-2 leading-tight  bg-white border border-r-0 border-gray-200 hover:bg-[#00bbf2] hover:text-white',
          ]"
            type="button"
            @click="onClickPage(page.name)"
            :disabled="page.isDisabled"
        >
          {{ page.name }}
        </button>
      </li>
      <!-- Next page -->
      <li
          class="px-3 py-2 ml-0 leading-tight bg-white border border-r-0 border-gray-200 hover:bg-[#00bbf2] hover:text-white"
      >
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          Trang sau
        </button>
      </li>
      <li
          class="px-3 py-2 leading-tight  bg-white border border-gray-200 rounded-r hover:bg-[#00bbf2] hover:text-white"
      >
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          Trang cuối
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "WorkspaceJsonPagination",

  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {

    };
  },

  mounted() {},

  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
          let i = this.startPage;
          i <=
          Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
          i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },

  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style scoped></style>