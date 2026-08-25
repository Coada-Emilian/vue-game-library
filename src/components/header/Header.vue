<script setup lang="ts">
import SearchForm from "./SearchForm.vue";

const searchTerm = defineModel<string>();

const emit = defineEmits<{
  search: [query: string];
}>();
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo"> Game Library </RouterLink>

    <SearchForm v-model="searchTerm" @search="emit('search', $event)" />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-bottom: 1px solid #333;
  background: #1c1c1c;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 700px) {
  .header {
    padding: 20px;
    flex-direction: column;
  }
}
</style>
