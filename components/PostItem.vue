<template>
  <div class="post" @click="selectPost(post.id)">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div>id: {{ post.id }}</div>
    <div>userId: {{ post.userId }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { IPostItem } from '~/types/postItem';

const props = defineProps<{
  post: IPostItem;
  selectPost: (postId: number) => void;
}>();
</script>

<style lang="scss" scoped>
  h2, p {
    margin: 0;
  }

  .post {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
