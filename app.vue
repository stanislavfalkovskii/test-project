<template>
  <CatalogPage />
</template>

<script setup lang="ts">
import CatalogPage from '~/components/CatalogPage.vue';
import { useStore } from '~/store/store';

const postStore = useStore();

onMounted(() => {
  postStore.fetchPosts();
});
</script>
