<script setup lang="ts">
import NavBar from "./NavBar.vue";
import SearchForm from "./SearchForm.vue";

const searchTerm = defineModel<string>();

const emit = defineEmits<{
  search: [query: string];
}>();

defineProps<{
  showSearch: boolean;
}>();
</script>

<template>
  <header class="header">
    <NavBar />

    <SearchForm
      v-if="showSearch"
      v-model="searchTerm"
      @search="(query) => emit('search', query)"
    />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid #333;
  background: #1c1c1c;
}

@media (max-width: 700px) {
  .header {
    padding: 12px 20px;
    flex-direction: column;
  }
}
</style>
