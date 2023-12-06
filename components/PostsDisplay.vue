<template>
  <div>
    <div v-if="paginatedPosts.length > 0" class="posts" :class="classModifier">
      <PostItem v-for="post in paginatedPosts" :key="post.id" :post="post" :selectPost="selectPost" />
    </div>
    <div v-else>No posts found.</div>
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '~/store/store';
import { useClassModifier } from '~/composables/useClassModifier';
import Pagination from '~/components/Pagination.vue';
import PostItem from '~/components/PostItem.vue';

const postStore = useStore();

const paginatedPosts = computed(() => postStore.paginatedPosts);
const { classModifier } = useClassModifier();

const selectPost = (postId: number | null) => {
  postStore.selectPost(postId);
};
</script>

<style lang="scss" scoped>
  .posts.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 35px;
  }

  .posts.horizontal {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
</style>

