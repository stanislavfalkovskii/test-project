<template>
  <div v-if="post" class="modal">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div>id: {{ post.id }}</div>
    <div>userId: {{ post.userId }}</div>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '~/store/store';

const postStore = useStore();

const post = computed(() => postStore.selectedPost);

const closeModal = () => {
  postStore.selectPost(null);
};
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
  }

  .modal h2 {
    margin-bottom: 10px;
  }

  .modal button {
    margin-top: 10px;
  }
</style>
