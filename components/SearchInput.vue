<template>
  <div class="search-input">
  <input type="text" v-model="searchTerm" placeholder="Search" @input="onSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '~/store/store';

const postStore = useStore();
const searchTerm = ref('');

const onSearch = () => {
  postStore.setSearchTerm(searchTerm.value);
};
</script>

<style lang="scss" scoped>
  .search-input {
    display: flex;
    justify-content: center;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    outline: none;
    width: 50%;
  }

  input:focus {
    border-color: #333;
  }
</style>

