<template>
  <div class="view-mode">
    <button :class="{ active: currentView === 'grid' }" @click="changeViewMode('grid')">Grid View</button>
    <button :class="{ active: currentView === 'list' }" @click="changeViewMode('list')">List View</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '~/store/store';
import type { ViewModeType } from '~/types/viewMode';

const postStore = useStore();

const changeViewMode = (mode: ViewModeType) => {
  postStore.setViewMode(mode);
};

const currentView = computed(() => postStore.viewMode);
</script>

<style lang="scss" scoped>
  .view-mode {
    display: flex;
    justify-content: center;
  }

  button {
    margin-right: 10px;
    cursor: pointer;
    border: none;
    background: none;
    font-weight: bold;
    font-size: 18px;
  }

  .active {
    text-decoration: underline;
  }
</style>

