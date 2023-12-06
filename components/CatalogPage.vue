<template>
  <div class="catalog">
    <SearchInput />
    <ViewModeSwitcher />
    <PostsDisplay />
    <PostModal />
  </div>
</template>

<script setup lang="ts">
import SearchInput from './SearchInput.vue';
import ViewModeSwitcher from './ViewModeSwitcher.vue';
import PostsDisplay from './PostsDisplay.vue';
import PostModal from './PostModal.vue';
</script>

<style lang="scss" scoped>
  .catalog {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>

