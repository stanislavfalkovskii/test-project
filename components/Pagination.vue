<template>
  <div class="pagination">
    <button
        v-for="page in totalPages"
        :key="page" @click="setCurrentPage(page)"
        :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store/store';

const postStore = useStore();
const currentPage = computed(() => postStore.currentPage);
const totalPages = computed(() => postStore.totalPages);

const setCurrentPage = (page: number) => {
  postStore.setCurrentPage(page);
};
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      margin: 0 5px;
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      background: none;
    }

    .active {
      font-weight: bold;
    }
  }
</style>
