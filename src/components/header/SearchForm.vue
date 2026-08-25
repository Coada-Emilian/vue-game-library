<script setup lang="ts">
const searchTerm = defineModel<string>();

const emit = defineEmits<{
  search: [query: string];
}>();

const onSubmit = () => {
  emit("search", searchTerm.value ?? "");
  searchTerm.value = "";
};
</script>

<template>
  <form class="search-form" @submit.prevent="onSubmit">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for a game..."
    />

    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  gap: 10px;
}
</style>
