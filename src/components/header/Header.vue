<script setup lang="ts">
import SearchForm from "./SearchForm.vue";

const searchTerm = defineModel<string>();

const emit = defineEmits<{
  search: [query: string];
}>();
</script>

<template>
  <div class="container">
    <h1>Game Library</h1>

    <SearchForm v-model="searchTerm" @search="emit('search', $event)" />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
</style>
